# linux简单命令积累
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 如何使用cmder远程连接服务器
- 如果有端口
    - `ssh -p port user@ip`
    - 例：`ssh -p 233 zmx@192.168.0.64`
- 如果没有端口
    - `ssh user@ip`
    - 例：`ssh zmx@192.168.0.64`

## 2. 测试linux是否能访问外网
- `curl -l http://www.baidu.com` 
    - 输出百度页面的HTML
- `wget http://www.baidu.com`
    - 下载百度页面并在当前文件夹保存为index

## 3. 查看端口占用
- `lsof -i:端口号`
    - 用于查看某一端口的占用情况
    - 例：`lsof -i:8000` 查看8000端口使用情况

## 4. 查看Nginx是否已经安装
1. 查看进程列表
> Linux每个应用运行都会产生一个进程，那么我们就可以通过查看Nginx进程是否存在来判断它是否启动。
- 用ps -ef列出进程列表，然后通过grep过滤
    - `ps -ef | grep nginx`

2. 查看Nginx的进程id
- `ps -C nginx -o pid`

## 5. 传输文件
- `scp -r -P port D:\temp\ zmx@ip:/usr/local/nginx/html`

## 6. 删除非空文件夹
- `rm -d -r xxx`

## #. xxx