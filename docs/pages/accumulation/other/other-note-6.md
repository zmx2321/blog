# mac相关笔记
<ClientOnly>
  <Valine></Valine>
</ClientOnly>

## 1. 在mac上安装homebrew
- 进入终端
- `/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"`
- 选择1
- `source /Users/zmx2321/.zprofile`
- `brew -v`

## 2. 在mac上配pip
- `sudo easy_install pip`

## 3. 在mac上配置ssh
- 可以解决github上传玄学问题
- 查看是否存在ssh
  - `cd ~/.ssh`
  - 如果存在需要先删除
  - `mkdir key_backup $ cp id_rsa* key_backup $ rm id_rsa*`
- 配置ssh
  - `ssh-keygen -t rsa -C zmx2321@163.com`
    - 一路回车
- 查看是否安装成功(查看公钥)
  - `cd ~/.ssh`
  - `cat id_rsa.pub`
- 进入访达home文件可以查看.ssh文件
  - 前往 => 前往文件夹 => 输入~可进入home文件
  - .ssh是隐藏文件
  - 前往 => 前往文件夹 => 输入~/.ssh可直接到公钥和私钥创建的目录
- 登录Github账号，点击Settings，点进去找到Personal settings。点击SSH and GPG keys。向SSH服务器（github.com）Add自己的SSH Public Key后，github.com将这个SSH Key与你的github账号关联起来，你的机器（Mac git client）将有写权限向你github账号名下的remote repository进行push提交代码
- 填写标题，把刚才生成的公钥内容粘贴到Key中。点击Add SSH key
  - `cd cd ~/.ssh`
  - `cat id_rsa.pub`
- 测试连接：ssh -T git@github.com
  - Hi zmx2321! You've successfully authenticated, but GitHub does not provide shell access. => 表示配置成功
- 设置用户信息 
  - git config --global user.name "zmx2321"
  - git config --global user.email "zmx2321@163.com"

## 4. 在mac的隐藏文件
- 显示隐藏文件
  - `defaults write com.apple.finder AppleShowAllFiles -boolean true;killall Finder`
- 再次隐藏文件
  - `defaults write com.apple.finder AppleShowAllFiles -boolean false;killall Finder`

## 5. mac上的基本快捷键
- 撤销和恢复撤销
  - 撤销: `command + z`
  - 恢复撤销: `shift + command + z`
- 注释
  - 注释一行代码：`cmd + /`
  - 注释一整段代码：`option + shift + A`
- 查找替换
  - 查找: `cmd + f`
  - 替换： `option + cmd + f`
- 全屏
  - `ctrl + cmd + f`
- 删除文件：`cmd + 右上角删除`
- 在已有的访达窗口新建访达：`cmd + n`
- 如果你同时按下Option+Command键并点击桌面上空白的区域，就能把除Finder窗口以外的所有窗口隐藏起来，直接显示桌面。分别点击Dock栏上各个相关应用程序图标就可以解除窗口的隐藏状态了
- 点击某类软件，`option+cmd+q`，关闭某类软件所有
- `open .`: 打开当前文件夹

## 6. 在访达打开终端
- 访达 => 服务 => 服务偏好设置 => 可以配置快捷键
- 由于我装了item2，我这里配置了item2的快捷键：
  - 点击文件夹，按住键盘`shift + cmd + m`会直接呼出终端

## 7. mac报错
### 7.1. 权限相关
- warning: Insecure world writable dir /opt/homebrew/sbin in PATH, mode 040777
  - `lolcat -h`的时候会出现
  - /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/universal-darwin20/rbconfig.rb:229: warning: Insecure world writable dir /opt/homebrew/sbin in PATH, mode 040777
  - 提示含义：目录被赋予777的权限，不安全
  - 解决方案
    - 将提示权限改为775，问题即可解决
    ```
    sudo chmod go-w /opt/homebrew/sbin
    sudo chmod 775 /opt/homebrew
    ```

## 8. mac终端动画
- 使输出内容有颜色渐变
  - `brew install lolcat`
  - `ll | lolcat `
- sl 跑火车
  - `brew install sl`
  - `sl | lolcat`
- 屏幕代码滚动
  - `brew install cmatrix`
  - `cmatrix`
  - `cmatrix | lolcat`
  - `cmatrix -C cyan/blue`
- 把终端变成五颜六色的海洋馆
  -  目前我的电脑有报错，疑似权限问题 
  - `brew install asciiquarium`
  - `asciiquarium`
- 会说话的 ascii 奶牛
  - `brew install cowsay`
  - `cowsay worlds | lolcat`
- 鸡汤
  - `brew install fortune`
  - `fortune | cowsay | lolcat`

## 9. 在mac上配置item2
### 9.1. 安装item2
- 安装item2
- 安装Homebrew
- 可以直接使用，但他可以更好看一些

### 9.2. 配色
- 下载seti_ui https://github.com/willmanduffy/seti-iterm 放到指定的位置 
-  打开iterm2->preferences->profiles->colors->colors presets->import选中刚才的⽂件
- 让命令行变色
  - 开启term颜色支持
  - `vi  ~/.bash_profile`
  ```
  export CLICOLOR=1
  export LSCOLORS=GxFxCxDxBxegedabagaced
  export PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$'
  ```

### 9.3. 准备工作
- 一般终端默认的Shell都是Bash，执行下列命令可以查看当前终端用的Shell类型
  - `echo $SHELL`
  - 这里我们推荐使用Zsh
- 查看所有终端
  - `cat /etc/shells`
- 设置Zsh为默认Shell
  - `chsh -s /usr/local/bin/zsh`
- Wget
  - 寓意 “World Wide Web” 与 “Get”，一个从网络上自动下载文件的工具，支持通过 HTTP、HTTPS、FTP 三个最常见的 TCP/IP协议 下载，并可以使用 HTTP 代理
  - `brew install wget`
- 安装Oh My Zsh
  - 由于Zsh配置让人从入门到放弃，极其复杂繁琐。直到Oh My Zsh 的出现，自带基本配置，才让我们从中解脱出来
  - 这里使用wegt工具自动安装
  - `wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh`
  - 或 `curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh`
- 接下来的配置全在oh my zsh中
  - 查看oh my zsh所有的主题 => `ll ~/.oh-my-zsh/themes`
- 修改主题
  - `vi ～/.zshrc`
  - `ZSH_THEME="xxx"`，默认是robbyrussell
- 系统自带个人觉得不错的主题
  - josh
  - 3den 
  - gianu

### 9.4. 配置终端文本
#### 9.4.1. 使用艺术字
- 安装艺术字插件
  - `brew install figlet`
  - 测试使用: `figlet AnishHui | lolcat`
- `vi ～/.zshrc`
- 在`ZSH_THEME="xxx"`下面复制上`figlet 要显示的内容 | lolcat`
- `source ~/.zshrc`

#### 9.4.2. 自定义终端文本
- 在某个目录创建记事本写好要显示的内容
```
 ,--^----------,--------,-----,-------^--, 
  | ||||||||| `--------' | O 
  `+---------------------------^----------| 
   `_,-------, _________________________| 
     / XXXXXX /`| / 
    / XXXXXX / ` / 
   / XXXXXX /______( 
  / XXXXXX / 
 / XXXXXX / 
(________(        ☄ ❄ zmx2321@1993 ❅ ☼
 `------'

```
- 要以空行结尾，不然会多出百分号
- `vi ～/.zshrc`
-  `cat txt文件路径 | lolcat`
- `source ~/.zshrc`

### 9.5. 配置主题
> 自定义的推荐两个主题agnoster和powerlevel10k
#### 9.5.1. agnoster
- 找到一个目录：`git clone https://github.com/fcamblor/oh-my-zsh-agnoster-fcamblor.git`
- `cd oh-my-zsh-agnoster-fcamblor/`
- `./install`
- `vi ~/.zshrc`
- `ZSH_THEME="agnoster"`
- `source ~/.zshrc`
- 此时已经安装和配置好了，但字体还有问题
- `git clone https://github.com/powerline/fonts.git --depth=1`
- `cd fonts`
- `./install.sh`
- `cd ..`
- `rm -rf fonts`
- item2配置：Preferences -> Profiles -> Text -> 勾选use built-in powerline glyphs
- 此时系统里面的配置已经完成了，但vscode里面字体还有问题
- setting => terminal => 在Font Family中添加字体：`Meslo LG M for Powerline`
  - 或者在VSCode的settings.json文件，加入 : "terminal.integrated.fontFamily": "Meslo LG M for Powerline"

#### 9.5.2. powerlevel10k
- `cd ~/.oh-my-zsh/themes`
- `git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git`
- `vi ~/.zshrc`
- `ZSH_THEME="powerlevel10k/powerlevel10k"`
- 运行终端会自行配置
  - 如果是初次下载，就会直接进入 powerlevel10k 的配置界面；如果想重新配置，则在终端输入以下代码 `p10k configure `
  - 即如果对 p10k 的配置不满意，输入 p10k configure 重新配置

### 9.6. item2工具
- 高亮
  - `cd ~/.oh-my-zsh/custom/plugins/`
  - `git clone https://github.com/zsh-users/zsh-syntax-highlighting.git`
  - `vi ~/.zshrc`
  - 找到 plugins，此时里面已经有了git，我们需要把高亮插件 zsh-syntax-highlighting 也加上。zsh-syntax-highlighting 必须放到最后一个
  - 在文件最后一行加入以下代码：
    - `source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh`
- 补全
  - `cd ~/.oh-my-zsh/custom/plugins/`
  - `git clone https://github.com/zsh-users/zsh-autosuggestions`
  - `vi ~/.zshrc`
  - 找到 plugins，添加zsh-autosuggestions
  - `source ~/.zshrc`

### 9.7. item2配置最终效果
![item2](/blog//images/accumulation/other/mac/item2.png)