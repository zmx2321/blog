# dos相关笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 修改host文件
> 以GitHub为例
- 进入文件地址备份并进行编辑host文件
  - `C:\Windows\System32\drivers\etc`
- 进入浏览器地址查询Github相关ip
  - `https://github.com.ipaddress.com/`
  - `http://ip.webmasterhome.cn/`
  ```
  199.232.69.194 github.global.ssl.fastly.net
  140.82.113.4 github.com
  13.250.177.223 github.com
  ```
- 刷新DNS缓存
  - ipconfig /flushdns

## 2. 文件流操作
- 显示文件: `ls`、`dir`
- 新建文件夹: `mkdir xxx`
- 删除文件夹: `rd app.js`
- 删除文件: `del xx.txt`

## 3. 在bush中的文件流操作
- 创建文件夹与dos相同
- 删除文件夹
  - `rm -d aa`
- 创建文件
  - `touch aa.txt`
- 删除文件
  - `rm aa.txt`
- 编辑txt文件
  - `vi aa.txt` => 输入i开始编辑 => 按esc键，输入wq保存