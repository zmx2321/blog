# 万人并发优化
> 本文档是记录于2019年9月23日贵州电大项目万人并发中。  
> 文档主要是讲解服务器配置，以及项目优化内容 ，以及优化测试所需要的分布式压测和服务器性能监听。

#### 目录

* 负载均衡slb配置
* web服务器配置
* mysql服务配置
* 软件项目优化配置
* jmeter分布式压测配置
* ansible自动化部署
* zabbix监听仪表盘配置

#### 服务硬件配置

其中两台redis服务器，测试机为主控端，被控端共14台windows压侧机。
<!-- ![压测服务器硬件配置](压测资料/服务硬件配置.png) -->

### 本次性能调优涉及方面

<!-- ![压测涵盖内容](压测资料/压测结构脑图.png) -->

### 1. 负载均衡slb配置

#### 1.1 nginx优化配置信息：

    > /etc/ngin/nginx.conf
    ... 
    worker_processes auto;
    worker_rlimit_nofile 655350;
    
    events {
        worker_connections=102400
    }
    ...
    #开启gzip压缩
    gzip on;
    gizp_comp_level 7;
    ...

* 最大连接数计算公式：  

`max_client = worker_connections * worker_processes / 4  `  
nginx一般会存在两个连接，一个接收，一个发送（http1.1协议）。此处是nginx反向代理所以还有与web服务器通信的连个连接。既一个用户访问nginx反向代理会占用4个连接。

* worker_rlimit_nofile:

`理论计算值 worker_rlimit_nofile = (ulimit -n) / worker_processes`         
指定一个nginx进程可以打开的最多文件描述符数目，nginx打开最大数目也受linux 内核允许的最大文件打开数影响（ulimit -n）。

#### 1.2 站点slb配置（非万人并发相关）：

    > /etc/nginx/sites-enabled/edusoho
    ...
    #代理优化配置
    proxy_buffer_size 128k;
    proxy_buffers 32 32k;
    proxy_temp_file_write_size 128k;
    ...

* buffer 缓冲区    
  buffer，即缓冲区，它在nginx上发挥的作用就是 启用一个缓冲区，先在这个缓冲区内进行存储，再把数据发送出去。开启后，nginx将会临时存储response到缓存区，然后慢慢发送数据到客户端。启用buffer的好处在于可以把数据一次性发送给客户端，相较于即使传输可以节约带宽。       
  开启buffer 建议关闭tcp_nodelay，因为tcp_nodelay 是尽快将数据发送出去。      
  参数针对是每一个http request，不是全局的。

#### 1.3 linux内核配置

* 设置最大文件连接数,设置完需要重启linux。

  ```
  > /etc/security/limits.conf
  * soft nproc 1000000
  * hard nproc 1000000
  * soft nofile 1000000
  * hard nofile 1000000
  root soft nproc 1000000
  root hard nproc 1000000
  root soft nofile 1000000
  root hard nofile 1000000
  ```

* 设置linux内核网络状态设置(web服务如同)

  ```
  > /etc/sysctl.conf
  ...
  fs.file-max = 1000000
  net.ipv4.tcp_max_syn_backlog = 204800
  net.ipv4.ip_local_port_range = 1024 65000
  #net.ipv4.tcp_max_tw_buckets = 5000
  #net.ipv4.tcp_syncookies = 1
  net.ipv4.tcp_tw_reuse = 1
  #net.ipv4.tcp_tw_recycle = 1
  net.core.netdev_max_backlog = 204800
  net.ipv4.tcp_fin_timeout = 30
  net.ipv4.tcp_keepalive_time = 1200
  ```

<!-- > 相关文章  
> 1.[nginx中关于并发数的问题worker_connections,worker_processes][1]  
> 2.[详解Nginx启用proxy_buffer缓冲][2] -->

### 2. web服务器配置

#### 2.1 nginx配置

    > /etc/ngin/nginx.conf
    ... 
    worker_processes auto;
    worker_rlimit_nofile 655350;
    
    events {
        worker_connections=10240
    }
    ...

和负载均衡服务器相似，数值上相对设低。

#### 2.2 php-fpm配置

    > /etc/php/7.1/fpm/pool.d/www.conf
    ...
    pm.max_requests = 5000
    ...
    pm = static
    pm.max_children = 1300
    ...

* pm.max_requests
  理论上越高减少重启，但是要考虑到内存泄露的风险(这里设置5000应该是有问题的)
* 计算 pm.max_children的计算方式：      
  预设每个PHP进程消耗40M      
  理论值 `pm.max_children = 机器内存 * 0.7 / 40`     
  *设置max_children是为了避免服务器直接返回502，而不是提升性能*

> 注意：        
> 虽然能在硬件配置高的情况下设置数值相对也较高,但是web服务器会随着fpm进程数上升导致TCP连接数上升，TCP连接数的上限是65535.所以在提升max_children时候也得适当通过zabbix监听tcp连接情况，找到php-fpm进程的最佳上限。1300是这次测出来tcp接近峰值数据。

> 相关文章：     
> 1.[PHP的pm、pm.max_requests、memory_limit参数优化说明][3]        
> 2.[php-fpm中max_children的配置][4]  
> 3.[php-fpm.conf max_children 和 max_requests怎么配置][5]


### 3. mysql服务配置

查看最大连接数     
`show variables like '%max_connections%';`
设置最大连接数,并重启mysql          

    > /etc/mysql/my.cnf
    ...
    [mysqld]
    max_connections=14*500   
    ...

查看最大使用连接数       
`show global status like 'Max_used_connections';`       
当前连接数       
`show status like 'Threads_connected';`     
详细连接信息      
 `show full processlist\G;`  

> 相关文章：     
>  1.[Mysql 连接数,最大并发数设置][6] 


### 4. 软件项目优化配置

* 正规：twig可以静态的化的模块可以通过`{% cache 'name' time %}{% endceche %}`实现静态缓存，需要通过`/amdin/setting/performance`开启静态化。      
* 非正规：关闭不关键的监听事件      
  例如：登录监听，mysql方面有锁控制方面关闭掉，特别是执行空锁。


### 5. jmeter分布式压测配置

本次都是在windows环境下部署jmeter分布式压测。
一台执行机，十台负载机。
此时主控端设置进程数量是1000，十台并发则是10000。

    > slave_jemeter/bin/jmeter.properties
    ...
    server_port=1088
    server.rmi.localport=1088
    server.rmi.ssl.disable=true
    
    > master_jemeter/bin/jmeter.properties
    ...
    server.rmi.ssl.disable=true
    remote_hosts=slave_IP1:1088,slave_IP2:1088..
    ...

每台slave负载机都需要开启jemeter-server.bat服务,此时就可以在执行机上运行了。      

<!-- > 相关文章：      
> 1.[JMeter分布式压测][7]     -->

### 6. ansible自动化部署

当 Control Machine (主控端) 可以用 SSH 连上 Managed node，且被连上的机器里有预载 Python 时，Ansible 就可以运作

#### 6.1 ansible安装

* Control Machine (主控端)安装       


    $ sudo apt-get install -y python-software-properties software-properties-common
    $ sudo add-apt-repository -y ppa:ansible/ansible; sudo apt-get update
    $ sudo apt-get install -y ansible

* 正常在 Managed Node 我们都会安装 OpenSSH server 和开通连线权限以便于远端管理


    $ sudo apt-get install -y openssh-server python2.7


​    

#### 6.2 ansible Inventory配置

    > /etc/ansible/hosts
    ...
    [all:children]
    groupname1
    groupname2
    ..
    
    [groupname1]
    IP1
    IP2
    IP
    ..
    [groupname2]
    ...

#### 6.3 Running Command

    ansible -i ./hosts --connection=local local -m ping
    这里可以通过自己需要的命令来实现

> 相关文章：  
> 1.[Ansible全套详细教程][8]


### 7. zabbix监听

    http://saas-jk.edusoho.com/zabbix/index.php

登录进去匹配值仪表盘便于统一观察（一般开启cpu使用率，nginx活跃值，mysql的io，fpm活跃数和等待连接数，redis命中率，Tcp等待数量）
    
        

[1]: https://www.cnblogs.com/tangchuanyang/p/6076725.html "nginx中关于并发数的问题worker_connections,worker_processes"
[2]: https://www.jb51.net/article/131979.htm "详解Nginx启用proxy_buffer缓冲"
[3]: https://www.cnblogs.com/adu0409/articles/3620748.html "PHP的pm、pm.max_requests、memory_limit参数优化说明"
[4]: https://www.jb51.net/article/157900.htm "php-fpm中max_children的配置"
[5]: https://q.cnblogs.com/q/62167/ "php-fpm.conf max_children 和 max_requests怎么配置"
[6]: https://www.cnblogs.com/phpper/p/9570792.html "Mysql 连接数,最大并发数设置"
[7]: https://blog.51cto.com/11009785/2388318?source=dra "JMeter分布式压测"
[8]: https://blog.csdn.net/qq_43355223/article/details/88111875 "Ansible全套详细教程"