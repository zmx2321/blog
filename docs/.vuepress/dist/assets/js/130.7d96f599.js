(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{812:function(s,l,e){"use strict";e.r(l);var i=e(26),_=Object(i.a)({},(function(){var s=this,l=s.$createElement,e=s._self._c||l;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mac相关笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac相关笔记"}},[s._v("#")]),s._v(" mac相关笔记")]),s._v(" "),e("ClientOnly",[e("Valine")],1),s._v(" "),e("h2",{attrs:{id:"_1-在mac上安装homebrew"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-在mac上安装homebrew"}},[s._v("#")]),s._v(" 1. 在mac上安装homebrew")]),s._v(" "),e("ul",[e("li",[s._v("进入终端")]),s._v(" "),e("li",[e("code",[s._v('/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"')])]),s._v(" "),e("li",[s._v("选择1")]),s._v(" "),e("li",[e("code",[s._v("source /Users/zmx2321/.zprofile")])]),s._v(" "),e("li",[e("code",[s._v("brew -v")])])]),s._v(" "),e("h2",{attrs:{id:"_2-在mac上配pip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-在mac上配pip"}},[s._v("#")]),s._v(" 2. 在mac上配pip")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("sudo easy_install pip")])])]),s._v(" "),e("h2",{attrs:{id:"_3-在mac上配置ssh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-在mac上配置ssh"}},[s._v("#")]),s._v(" 3. 在mac上配置ssh")]),s._v(" "),e("ul",[e("li",[s._v("可以解决github上传玄学问题")]),s._v(" "),e("li",[s._v("查看是否存在ssh\n"),e("ul",[e("li",[e("code",[s._v("cd ~/.ssh")])]),s._v(" "),e("li",[s._v("如果存在需要先删除")]),s._v(" "),e("li",[e("code",[s._v("mkdir key_backup $ cp id_rsa* key_backup $ rm id_rsa*")])])])]),s._v(" "),e("li",[s._v("配置ssh\n"),e("ul",[e("li",[e("code",[s._v("ssh-keygen -t rsa -C zmx2321@163.com")]),s._v(" "),e("ul",[e("li",[s._v("一路回车")])])])])]),s._v(" "),e("li",[s._v("查看是否安装成功(查看公钥)\n"),e("ul",[e("li",[e("code",[s._v("cd ~/.ssh")])]),s._v(" "),e("li",[e("code",[s._v("cat id_rsa.pub")])])])]),s._v(" "),e("li",[s._v("进入访达home文件可以查看.ssh文件\n"),e("ul",[e("li",[s._v("前往 => 前往文件夹 => 输入~可进入home文件")]),s._v(" "),e("li",[s._v(".ssh是隐藏文件")]),s._v(" "),e("li",[s._v("前往 => 前往文件夹 => 输入~/.ssh可直接到公钥和私钥创建的目录")])])]),s._v(" "),e("li",[s._v("登录Github账号，点击Settings，点进去找到Personal settings。点击SSH and GPG keys。向SSH服务器（github.com）Add自己的SSH Public Key后，github.com将这个SSH Key与你的github账号关联起来，你的机器（Mac git client）将有写权限向你github账号名下的remote repository进行push提交代码")]),s._v(" "),e("li",[s._v("填写标题，把刚才生成的公钥内容粘贴到Key中。点击Add SSH key\n"),e("ul",[e("li",[e("code",[s._v("cd cd ~/.ssh")])]),s._v(" "),e("li",[e("code",[s._v("cat id_rsa.pub")])])])]),s._v(" "),e("li",[s._v("测试连接：ssh -T git@github.com\n"),e("ul",[e("li",[s._v("Hi zmx2321! You've successfully authenticated, but GitHub does not provide shell access. => 表示配置成功")])])]),s._v(" "),e("li",[s._v("设置用户信息\n"),e("ul",[e("li",[s._v('git config --global user.name "zmx2321"')]),s._v(" "),e("li",[s._v('git config --global user.email "zmx2321@163.com"')])])]),s._v(" "),e("li",[s._v("拷贝私钥的时候容易出现权限问题\n"),e("ul",[e("li",[s._v("Permissions 0777 for '/Users/zmx2321/.ssh/id_rsa' are too open")]),s._v(" "),e("li",[s._v("修改id_rsa权限即可"),e("code",[s._v("chmod -R 700 /Users/zmx2321/.ssh/id_rsa")])]),s._v(" "),e("li",[s._v("ssh -T git@github.com")])])])]),s._v(" "),e("h2",{attrs:{id:"_4-在mac的隐藏文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-在mac的隐藏文件"}},[s._v("#")]),s._v(" 4. 在mac的隐藏文件")]),s._v(" "),e("ul",[e("li",[s._v("显示隐藏文件\n"),e("ul",[e("li",[e("code",[s._v("defaults write com.apple.finder AppleShowAllFiles -boolean true;killall Finder")])])])]),s._v(" "),e("li",[s._v("再次隐藏文件\n"),e("ul",[e("li",[e("code",[s._v("defaults write com.apple.finder AppleShowAllFiles -boolean false;killall Finder")])])])])]),s._v(" "),e("h2",{attrs:{id:"_5-mac上的基本快捷键"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-mac上的基本快捷键"}},[s._v("#")]),s._v(" 5. mac上的基本快捷键")]),s._v(" "),e("ul",[e("li",[s._v("撤销和恢复撤销\n"),e("ul",[e("li",[s._v("撤销: "),e("code",[s._v("command + z")])]),s._v(" "),e("li",[s._v("恢复撤销: "),e("code",[s._v("shift + command + z")])])])]),s._v(" "),e("li",[s._v("注释\n"),e("ul",[e("li",[s._v("注释一行代码："),e("code",[s._v("cmd + /")])]),s._v(" "),e("li",[s._v("注释一整段代码："),e("code",[s._v("option + shift + A")])])])]),s._v(" "),e("li",[s._v("查找替换\n"),e("ul",[e("li",[s._v("查找: "),e("code",[s._v("cmd + f")])]),s._v(" "),e("li",[s._v("替换： "),e("code",[s._v("option + cmd + f")])])])]),s._v(" "),e("li",[s._v("全屏\n"),e("ul",[e("li",[e("code",[s._v("ctrl + cmd + f")])])])]),s._v(" "),e("li",[s._v("删除文件："),e("code",[s._v("cmd + 右上角删除")])]),s._v(" "),e("li",[s._v("在已有的访达窗口新建访达："),e("code",[s._v("cmd + n")])]),s._v(" "),e("li",[s._v("如果你同时按下Option+Command键并点击桌面上空白的区域，就能把除Finder窗口以外的所有窗口隐藏起来，直接显示桌面。分别点击Dock栏上各个相关应用程序图标就可以解除窗口的隐藏状态了")]),s._v(" "),e("li",[s._v("点击某类软件，"),e("code",[s._v("option+cmd+q")]),s._v("，关闭某类软件所有")]),s._v(" "),e("li",[e("code",[s._v("open .")]),s._v(": 打开当前文件夹")])]),s._v(" "),e("h2",{attrs:{id:"_6-在访达打开终端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-在访达打开终端"}},[s._v("#")]),s._v(" 6. 在访达打开终端")]),s._v(" "),e("ul",[e("li",[s._v("访达 => 服务 => 服务偏好设置 => 可以配置快捷键")]),s._v(" "),e("li",[s._v("由于我装了item2，我这里配置了item2的快捷键：\n"),e("ul",[e("li",[s._v("点击文件夹，按住键盘"),e("code",[s._v("shift + cmd + m")]),s._v("会直接呼出终端")])])])]),s._v(" "),e("h2",{attrs:{id:"_7-mac报错"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-mac报错"}},[s._v("#")]),s._v(" 7. mac报错")]),s._v(" "),e("h3",{attrs:{id:"_7-1-权限相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-权限相关"}},[s._v("#")]),s._v(" 7.1. 权限相关")]),s._v(" "),e("ul",[e("li",[s._v("warning: Insecure world writable dir /opt/homebrew/sbin in PATH, mode 040777\n"),e("ul",[e("li",[e("code",[s._v("lolcat -h")]),s._v("的时候会出现")]),s._v(" "),e("li",[s._v("/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/universal-darwin20/rbconfig.rb:229: warning: Insecure world writable dir /opt/homebrew/sbin in PATH, mode 040777")]),s._v(" "),e("li",[s._v("提示含义：目录被赋予777的权限，不安全")]),s._v(" "),e("li",[s._v("解决方案\n"),e("ul",[e("li",[s._v("将提示权限改为775，问题即可解决")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("sudo chmod go-w /opt/homebrew/sbin\nsudo chmod R 775 /opt/homebrew\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])])])]),s._v(" "),e("h2",{attrs:{id:"_8-mac终端动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-mac终端动画"}},[s._v("#")]),s._v(" 8. mac终端动画")]),s._v(" "),e("ul",[e("li",[s._v("使输出内容有颜色渐变\n"),e("ul",[e("li",[e("code",[s._v("brew install lolcat")])]),s._v(" "),e("li",[e("code",[s._v("ll | lolcat")])])])]),s._v(" "),e("li",[s._v("sl 跑火车\n"),e("ul",[e("li",[e("code",[s._v("brew install sl")])]),s._v(" "),e("li",[e("code",[s._v("sl | lolcat")])])])]),s._v(" "),e("li",[s._v("屏幕代码滚动\n"),e("ul",[e("li",[e("code",[s._v("brew install cmatrix")])]),s._v(" "),e("li",[e("code",[s._v("cmatrix")])]),s._v(" "),e("li",[e("code",[s._v("cmatrix | lolcat")])]),s._v(" "),e("li",[e("code",[s._v("cmatrix -C cyan/blue")])])])]),s._v(" "),e("li",[s._v("把终端变成五颜六色的海洋馆\n"),e("ul",[e("li",[s._v("目前我的电脑有报错，疑似权限问题")]),s._v(" "),e("li",[e("code",[s._v("brew install asciiquarium")])]),s._v(" "),e("li",[e("code",[s._v("asciiquarium")])])])]),s._v(" "),e("li",[s._v("会说话的 ascii 奶牛\n"),e("ul",[e("li",[e("code",[s._v("brew install cowsay")])]),s._v(" "),e("li",[e("code",[s._v("cowsay worlds | lolcat")])])])]),s._v(" "),e("li",[s._v("鸡汤\n"),e("ul",[e("li",[e("code",[s._v("brew install fortune")])]),s._v(" "),e("li",[e("code",[s._v("fortune | cowsay | lolcat")])])])])]),s._v(" "),e("h2",{attrs:{id:"_9-在mac上配置item2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-在mac上配置item2"}},[s._v("#")]),s._v(" 9. 在mac上配置item2")]),s._v(" "),e("h3",{attrs:{id:"_9-1-安装item2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-安装item2"}},[s._v("#")]),s._v(" 9.1. 安装item2")]),s._v(" "),e("ul",[e("li",[s._v("安装item2")]),s._v(" "),e("li",[s._v("安装Homebrew")]),s._v(" "),e("li",[s._v("可以直接使用，但他可以更好看一些")])]),s._v(" "),e("h3",{attrs:{id:"_9-2-配色"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-配色"}},[s._v("#")]),s._v(" 9.2. 配色")]),s._v(" "),e("ul",[e("li",[s._v("下载seti_ui https://github.com/willmanduffy/seti-iterm 放到指定的位置")]),s._v(" "),e("li",[s._v("打开iterm2->preferences->profiles->colors->colors presets->import选中刚才的⽂件")]),s._v(" "),e("li",[s._v("让命令行变色\n"),e("ul",[e("li",[s._v("开启term颜色支持")]),s._v(" "),e("li",[e("code",[s._v("vi ~/.bash_profile")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("export CLICOLOR=1\nexport LSCOLORS=GxFxCxDxBxegedabagaced\nexport PS1='\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"_9-3-准备工作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-3-准备工作"}},[s._v("#")]),s._v(" 9.3. 准备工作")]),s._v(" "),e("ul",[e("li",[s._v("一般终端默认的Shell都是Bash，执行下列命令可以查看当前终端用的Shell类型\n"),e("ul",[e("li",[e("code",[s._v("echo $SHELL")])]),s._v(" "),e("li",[s._v("这里我们推荐使用Zsh")])])]),s._v(" "),e("li",[s._v("查看所有终端\n"),e("ul",[e("li",[e("code",[s._v("cat /etc/shells")])])])]),s._v(" "),e("li",[s._v("设置Zsh为默认Shell\n"),e("ul",[e("li",[e("code",[s._v("chsh -s /usr/local/bin/zsh")])])])]),s._v(" "),e("li",[s._v("Wget\n"),e("ul",[e("li",[s._v("寓意 “World Wide Web” 与 “Get”，一个从网络上自动下载文件的工具，支持通过 HTTP、HTTPS、FTP 三个最常见的 TCP/IP协议 下载，并可以使用 HTTP 代理")]),s._v(" "),e("li",[e("code",[s._v("brew install wget")])])])]),s._v(" "),e("li",[s._v("安装Oh My Zsh\n"),e("ul",[e("li",[s._v("由于Zsh配置让人从入门到放弃，极其复杂繁琐。直到Oh My Zsh 的出现，自带基本配置，才让我们从中解脱出来")]),s._v(" "),e("li",[s._v("这里使用wegt工具自动安装")]),s._v(" "),e("li",[e("code",[s._v("wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh")])]),s._v(" "),e("li",[s._v("或 "),e("code",[s._v("curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh")])]),s._v(" "),e("li",[s._v("也可以使用国内地址 "),e("code",[s._v('sh -c "$(curl -fsSL https://gitee.com/shmhlsy/oh-my-zsh-install.sh/raw/master/install.sh)"')]),s._v(" "),e("ul",[e("li",[s._v("在windows环境下得linux子系统")])])])])]),s._v(" "),e("li",[s._v("接下来的配置全在oh my zsh中\n"),e("ul",[e("li",[s._v("查看oh my zsh所有的主题 => "),e("code",[s._v("ll ~/.oh-my-zsh/themes")])])])]),s._v(" "),e("li",[s._v("修改主题\n"),e("ul",[e("li",[e("code",[s._v("vi ～/.zshrc")])]),s._v(" "),e("li",[e("code",[s._v('ZSH_THEME="xxx"')]),s._v("，默认是robbyrussell")])])]),s._v(" "),e("li",[s._v("系统自带个人觉得不错的主题\n"),e("ul",[e("li",[s._v("josh")]),s._v(" "),e("li",[s._v("3den")]),s._v(" "),e("li",[s._v("gianu")])])])]),s._v(" "),e("h3",{attrs:{id:"_9-4-配置终端文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-配置终端文本"}},[s._v("#")]),s._v(" 9.4. 配置终端文本")]),s._v(" "),e("h4",{attrs:{id:"_9-4-1-使用艺术字"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-1-使用艺术字"}},[s._v("#")]),s._v(" 9.4.1. 使用艺术字")]),s._v(" "),e("ul",[e("li",[s._v("安装艺术字插件\n"),e("ul",[e("li",[e("code",[s._v("brew install figlet")])]),s._v(" "),e("li",[s._v("测试使用: "),e("code",[s._v("figlet AnishHui | lolcat")])])])]),s._v(" "),e("li",[e("code",[s._v("vi ～/.zshrc")])]),s._v(" "),e("li",[s._v("在"),e("code",[s._v('ZSH_THEME="xxx"')]),s._v("下面复制上"),e("code",[s._v("figlet 要显示的内容 | lolcat")])]),s._v(" "),e("li",[e("code",[s._v("source ~/.zshrc")])])]),s._v(" "),e("h4",{attrs:{id:"_9-4-2-自定义终端文本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-4-2-自定义终端文本"}},[s._v("#")]),s._v(" 9.4.2. 自定义终端文本")]),s._v(" "),e("ul",[e("li",[s._v("在某个目录创建记事本写好要显示的内容")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" ,--^----------,--------,-----,-------^--, \n  | ||||||||| `--------' | O \n  `+---------------------------^----------| \n   `_,-------, _________________________| \n     / XXXXXX /`| / \n    / XXXXXX / ` / \n   / XXXXXX /______( \n  / XXXXXX / \n / XXXXXX / \n(________(        ☄ ❄ zmx2321@1993 ❅ ☼\n `------'\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("ul",[e("li",[s._v("要以空行结尾，不然会多出百分号")]),s._v(" "),e("li",[e("code",[s._v("vi ～/.zshrc")])]),s._v(" "),e("li",[e("code",[s._v("cat txt文件路径 | lolcat")])]),s._v(" "),e("li",[e("code",[s._v("source ~/.zshrc")])])]),s._v(" "),e("h3",{attrs:{id:"_9-5-配置主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-配置主题"}},[s._v("#")]),s._v(" 9.5. 配置主题")]),s._v(" "),e("blockquote",[e("p",[s._v("自定义的推荐两个主题agnoster和powerlevel10k")])]),s._v(" "),e("h4",{attrs:{id:"_9-5-1-agnoster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-1-agnoster"}},[s._v("#")]),s._v(" 9.5.1. agnoster")]),s._v(" "),e("ul",[e("li",[s._v("找到一个目录："),e("code",[s._v("git clone https://github.com/fcamblor/oh-my-zsh-agnoster-fcamblor.git")])]),s._v(" "),e("li",[e("code",[s._v("cd oh-my-zsh-agnoster-fcamblor/")])]),s._v(" "),e("li",[e("code",[s._v("./install")])]),s._v(" "),e("li",[e("code",[s._v("vi ~/.zshrc")])]),s._v(" "),e("li",[e("code",[s._v('ZSH_THEME="agnoster"')])]),s._v(" "),e("li",[e("code",[s._v("source ~/.zshrc")])]),s._v(" "),e("li",[s._v("此时已经安装和配置好了，但字体还有问题")]),s._v(" "),e("li",[e("code",[s._v("git clone https://github.com/powerline/fonts.git --depth=1")])]),s._v(" "),e("li",[e("code",[s._v("cd fonts")])]),s._v(" "),e("li",[e("code",[s._v("./install.sh")])]),s._v(" "),e("li",[e("code",[s._v("cd ..")])]),s._v(" "),e("li",[e("code",[s._v("rm -rf fonts")])]),s._v(" "),e("li",[s._v("item2配置：Preferences -> Profiles -> Text -> 勾选use built-in powerline glyphs")]),s._v(" "),e("li",[s._v("此时系统里面的配置已经完成了，但vscode里面字体还有问题")]),s._v(" "),e("li",[s._v("setting => terminal => 在Font Family中添加字体："),e("code",[s._v("Meslo LG M for Powerline")]),s._v(" "),e("ul",[e("li",[s._v('或者在VSCode的settings.json文件，加入 : "terminal.integrated.fontFamily": "Meslo LG M for Powerline"')])])])]),s._v(" "),e("h4",{attrs:{id:"_9-5-2-powerlevel10k"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-5-2-powerlevel10k"}},[s._v("#")]),s._v(" 9.5.2. powerlevel10k")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("cd ~/.oh-my-zsh/themes")])]),s._v(" "),e("li",[e("code",[s._v("git clone --depth=1 https://gitee.com/romkatv/powerlevel10k.git")])]),s._v(" "),e("li",[e("code",[s._v("vi ~/.zshrc")])]),s._v(" "),e("li",[e("code",[s._v('ZSH_THEME="powerlevel10k/powerlevel10k"')])]),s._v(" "),e("li",[s._v("运行终端会自行配置\n"),e("ul",[e("li",[s._v("如果是初次下载，就会直接进入 powerlevel10k 的配置界面；如果想重新配置，则在终端输入以下代码 "),e("code",[s._v("p10k configure")])]),s._v(" "),e("li",[s._v("即如果对 p10k 的配置不满意，输入 p10k configure 重新配置")])])])]),s._v(" "),e("h3",{attrs:{id:"_9-6-item2工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-6-item2工具"}},[s._v("#")]),s._v(" 9.6. item2工具")]),s._v(" "),e("ul",[e("li",[s._v("高亮\n"),e("ul",[e("li",[e("code",[s._v("cd ~/.oh-my-zsh/custom/plugins/")])]),s._v(" "),e("li",[e("code",[s._v("git clone https://github.com/zsh-users/zsh-syntax-highlighting.git")])]),s._v(" "),e("li",[e("code",[s._v("vi ~/.zshrc")])]),s._v(" "),e("li",[s._v("找到 plugins，此时里面已经有了git，我们需要把高亮插件 zsh-syntax-highlighting 也加上。zsh-syntax-highlighting 必须放到最后一个")]),s._v(" "),e("li",[s._v("在文件最后一行加入以下代码：\n"),e("ul",[e("li",[e("code",[s._v("source ~/.oh-my-zsh/custom/plugins/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh")])])])])])]),s._v(" "),e("li",[s._v("补全\n"),e("ul",[e("li",[e("code",[s._v("cd ~/.oh-my-zsh/custom/plugins/")])]),s._v(" "),e("li",[e("code",[s._v("git clone https://github.com/zsh-users/zsh-autosuggestions")])]),s._v(" "),e("li",[e("code",[s._v("vi ~/.zshrc")])]),s._v(" "),e("li",[s._v("找到 plugins，添加zsh-autosuggestions")])])])]),s._v(" "),e("h3",{attrs:{id:"_9-7-背景图片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-7-背景图片"}},[s._v("#")]),s._v(" 9.7. 背景图片")]),s._v(" "),e("ul",[e("li",[s._v("Preferences -> Profiles -> window -> 看到backgroundImage -> 勾选enabled")])]),s._v(" "),e("h3",{attrs:{id:"_9-8-item2配置最终效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-8-item2配置最终效果"}},[s._v("#")]),s._v(" 9.8. item2配置最终效果")]),s._v(" "),e("p",[e("img",{attrs:{src:"/blog//images/accumulation/other/mac/item2.png",alt:"item2"}})]),s._v(" "),e("h2",{attrs:{id:"_10-mac查看硬盘损耗"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-mac查看硬盘损耗"}},[s._v("#")]),s._v(" 10. mac查看硬盘损耗")]),s._v(" "),e("ul",[e("li",[s._v("安装以及查看\n"),e("ul",[e("li",[e("code",[s._v("brew install smartmontools")])]),s._v(" "),e("li",[e("code",[s._v("smartctl -s on disk0")])]),s._v(" "),e("li",[e("code",[s._v("smartctl -a disk0")])])])]),s._v(" "),e("li",[s._v("说明\n"),e("ul",[e("li",[s._v("Critical Warning => 重要警告\n"),e("ul",[e("li",[s._v("这一项需要观察“原始值”一列的数据，正常情况下应为0。如果显示为1代表当前硬盘处于过热状态；显示为2代表闪存出现严重错误导致可靠性降级，该考虑更换了；显示为3代表闪存已经进入只读状态（寿命用尽，锁盘以保护用户数据）。还有一种状态4是只有企业级固态硬盘才具备的，代表增强型断电保护功能失效（通常是因为电池/电容故障）")])])]),s._v(" "),e("li",[s._v("Temperature => 综合温度\n"),e("ul",[e("li",[s._v("这一项的单位是热力学温度开尔文，减去273之后就是我们常用的摄氏度了。不同固态硬盘对正常温度的定义是不一样的，通常只有厂商自己的工具箱软件才能明确。例如东芝RC500的正常温度是在79度以下，达到79度后SSD Utility会报告高磁盘温度。")])])]),s._v(" "),e("li",[s._v("Available Spare => 可用冗余空间\n"),e("ul",[e("li",[s._v("这一项显示的是当前可用于替换坏块的闪存备用块占出厂时总数的百分比，是一项非常重要的健康度指标。配备东芝BiCS闪存的NVMe固态硬盘可以在使用很久后依然保持100%的状态。")])])]),s._v(" "),e("li",[s._v("Available Spare Threshold => 备用空间阈值\n"),e("ul",[e("li",[s._v("与上一项相关，当可用备用空间低于该阈值时就会发出预警，提醒用户闪存剩余寿命不足，该更换新硬盘了")])])]),s._v(" "),e("li",[s._v("Percentage Used => 已使用的耐久度\n"),e("ul",[e("li",[s._v("这一项显示的是已经使用的写入耐久度（百分比），平时我们看到的健康度其实就是100%减去已使用耐久度百分比后的结果。")])])]),s._v(" "),e("li",[s._v("Data Units Read => 读取扇区计数\n"),e("ul",[e("li",[s._v("该项数值乘以1000后即为读取的扇区（1扇区=512字节）数量统计")])])]),s._v(" "),e("li",[s._v("Data Units Written => 写入扇区计数\n"),e("ul",[e("li",[s._v("该项数值乘以1000后即为写入的扇区（1扇区=512字节）数量统计")])])]),s._v(" "),e("li",[s._v("Host Read Commands => 读取命令计数\n"),e("ul",[e("li",[s._v("固态硬盘自使用以来累计接收到的读取命令数量统计")])])]),s._v(" "),e("li",[s._v("Host Write Commands => 写入命令计数\n"),e("ul",[e("li",[s._v("固态硬盘自使用以来累计接收到的写入命令数量统计")])])]),s._v(" "),e("li",[s._v("Controller Busy Time => 主控繁忙时间计数\n"),e("ul",[e("li",[s._v("该项统计的是主控忙于处理IO命令的时间总和（单位：分钟）。当IO队列有未完成的命令时，主控即处于“忙”的状态。下图所示为东芝RC500固态硬盘的主控芯片")])])]),s._v(" "),e("li",[s._v("Power Cycles => 通电次数")]),s._v(" "),e("li",[s._v("Power On Hours => 通电时间")]),s._v(" "),e("li",[s._v("Unsafe Shutdowns => 不安全关机次数（异常断电计数）\n"),e("ul",[e("li",[s._v("非正常断电是威胁固态硬盘的大敌，我们应该尽可能地避免强制关机。东芝的SSD Utility工具箱软件会自动记录不安全关机次数，并通过活动警告提醒用户关注")])])]),s._v(" "),e("li",[s._v("Media and Data Integrity Errors => 闪存和数据完整性错误\n"),e("ul",[e("li",[s._v("主控检测到未恢复的数据完整性错误的次数。当有纠错引擎无法校正的ECC、CRC校验失败或者LBA标签不匹配错误发生时，该数值会增加。这一项数值如果不为零，代表固态硬盘工作已经不稳定")])])]),s._v(" "),e("li",[s._v("Error Information Log Entries => 错误日志条目计数")])])])]),s._v(" "),e("h2",{attrs:{id:"_11-mac上安装cnpm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_11-mac上安装cnpm"}},[s._v("#")]),s._v(" 11. mac上安装cnpm")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("sudo npm install -g cnpm --registry=https://registry.npm.taobao.org --verbose")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("cnpm -v")])])])]),s._v(" "),e("li",[s._v("使用cnpm淘宝镜像安装webpack\n"),e("ul",[e("li",[e("code",[s._v("sudo cnpm install webpack -g")])])])])]),s._v(" "),e("h2",{attrs:{id:"_12-mac切换到root账户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_12-mac切换到root账户"}},[s._v("#")]),s._v(" 12. mac切换到root账户")]),s._v(" "),e("ul",[e("li",[s._v("sudo -i")])]),s._v(" "),e("h2",{attrs:{id:"_13-mac上安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_13-mac上安装mysql"}},[s._v("#")]),s._v(" 13. mac上安装mysql")]),s._v(" "),e("ul",[e("li",[s._v("先brew info mysql查看下版本信息\n"),e("ul",[e("li",[s._v("可以检测是否安装")])])]),s._v(" "),e("li",[s._v("brew install mysql直接安装")]),s._v(" "),e("li",[s._v("brew reinstall mysql 重新安装")]),s._v(" "),e("li",[s._v("启动MYSQL服务\n"),e("ul",[e("li",[s._v("sudo mysql.server start")])])]),s._v(" "),e("li",[s._v("初始化配置并配置密码\n"),e("ul",[e("li",[s._v("这一步可以先不做，可以无密码登陆，登陆之后再修改密码")]),s._v(" "),e("li",[s._v("这种配置密码的方式比较麻烦，简单密码无法设置，个人练习不建议配置")]),s._v(" "),e("li",[s._v("mysql_secure_installation\n"),e("ul",[e("li",[s._v("附上说明")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 输入root用户密码\nSecuring the MySQL server deployment.\n# 使用空白密码连接（这里表示当前的连接状态）\nConnecting to MySQL using a blank password.\n\n# 验证密码组件可用于测试密码并提高安全性。它检查密码的强度并允许用户仅设置以下密码足够安全。您想设置“验证密码”组件吗？\nVALIDATE PASSWORD COMPONENT can be used to test passwords\nand improve security. It checks the strength of password\nand allows the users to set only those passwords which are\nsecure enough. Would you like to setup VALIDATE PASSWORD component?\n\nPress y|Y for Yes, any other key for No: 这里选y\n# 密码验证策略分为三个级别\nThere are three levels of password validation policy:\n\nLOW    Length >= 8\nMEDIUM Length >= 8, numeric, mixed case, and special characters\nSTRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file\n\nPlease enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 这里选0即可设置简单密码\n\n# 请在此处设置root密码。\nPlease set the password for root here.\nNew password: 第一次输入密码\nRe-enter new password: 重输入一次确认\n\n# 删除匿名用户？\nRemove anonymous users? (Press y|Y for Yes, any other key for No) : 我选y，其他的我没试过\n\n# 禁止远程登录\nDisallow root login remotely? (Press y|Y for Yes, any other key for No) : 我选y，因为我只在笔记本使用\n\n# 是否删除测试库\nRemove test database and access to it? (Press y|Y for Yes, any other key for No) : 我选y，其他的我没试过\n\n# 现在重新加载特权表\nReload privilege tables now? (Press y|Y for Yes, any other key for No) : 我选y，其他的我没试过\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br")])])])])]),s._v(" "),e("li",[s._v("连接\n"),e("ul",[e("li",[s._v("mysql -u root -p => 有密码登陆\n"),e("ul",[e("li",[s._v("默认123456")])])]),s._v(" "),e("li",[s._v("mysql -uroot => 无密码登陆\n"),e("ul",[e("li",[s._v("设置密码")]),s._v(" "),e("li",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';")])])])])]),s._v(" "),e("li",[s._v("常用指令\n"),e("ul",[e("li",[s._v("启动：sudo mysql.server start")]),s._v(" "),e("li",[s._v("关闭：sudo mysql.server stop")]),s._v(" "),e("li",[s._v("重启：sudo mysql.server restart")]),s._v(" "),e("li",[s._v("连接：mysql -u root -p")]),s._v(" "),e("li",[s._v("开机启动：brew services start mysql")])])]),s._v(" "),e("li",[s._v("卸载mysql\n"),e("ul",[e("li",[s._v("brew remove mysql\n"),e("ul",[e("li",[s._v("或者brew uninstall mysql")])])]),s._v(" "),e("li",[s._v("brew cleanup")])])]),s._v(" "),e("li",[s._v("关于mysql.sock\n"),e("ul",[e("li",[s._v("卸载mysql不要听网上说的要删这个文件，删了会后悔")]),s._v(" "),e("li",[s._v("在默认情况下，Mysql安装以后会在/tmp目录下生成一个mysql.sock文件，如该文件丢失则Mysql将不能够正常启动，解决方法：使用mysqld_safe 启动或许可解决；\n"),e("ul",[e("li",[s._v("进入mysql的bin目录，如：/usr/local/mysql/bin")]),s._v(" "),e("li",[s._v("执行./mysqld_safe  --user=mysql --basedir=/usr/local/mysql  --datadir=/usr/local/mysql/data &")])])])])]),s._v(" "),e("li",[s._v("安装并破解navicat\n"),e("ul",[e("li",[s._v("sudo xattr -r -d com.apple.quarantine /Applications/Navicat\\ Premium.app")]),s._v(" "),e("li",[s._v("/Applications/Navicat\\ Premium.app部分是由应用程序拖入终端自动生成的")])])])]),s._v(" "),e("h2",{attrs:{id:"_14-mac下安装redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_14-mac下安装redis"}},[s._v("#")]),s._v(" 14. mac下安装redis")]),s._v(" "),e("ul",[e("li",[s._v("官网下载\n"),e("ul",[e("li",[s._v("redis-6.2.6.tar.gz")])])]),s._v(" "),e("li",[s._v("解压\n"),e("ul",[e("li",[s._v("tar -zxvf redis-6.2.6.tar.gz")])])]),s._v(" "),e("li",[s._v("编译测试\n"),e("ul",[e("li",[s._v("进入到radis路径")]),s._v(" "),e("li",[s._v("sudo make test")])])]),s._v(" "),e("li",[s._v("编译安装\n"),e("ul",[e("li",[s._v("sudo make install")])])]),s._v(" "),e("li",[s._v("启动服务器\n"),e("ul",[e("li",[s._v("src/redis-server")])])]),s._v(" "),e("li",[s._v("启动测试端\n"),e("ul",[e("li",[s._v("客户端")]),s._v(" "),e("li",[s._v("src/redis-cli")]),s._v(" "),e("li",[s._v("启动了服务端才能启动客户端")]),s._v(" "),e("li",[s._v("测试\n"),e("ul",[e("li",[s._v("set name abc")]),s._v(" "),e("li",[s._v("get name")]),s._v(" "),e("li",[s._v("quit => 退出")])])])])])]),s._v(" "),e("h2",{attrs:{id:"_16-mac下安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_16-mac下安装nginx"}},[s._v("#")]),s._v(" 16. mac下安装nginx")]),s._v(" "),e("ul",[e("li",[s._v("打开终端，习惯性命令\n"),e("ul",[e("li",[s._v("brew update")])])]),s._v(" "),e("li",[s._v("查询要安装的软件是否存在\n"),e("ul",[e("li",[s._v("brew search nginx")])])]),s._v(" "),e("li",[s._v("查看\n"),e("ul",[e("li",[s._v("brew info nginx")])])]),s._v(" "),e("li",[s._v("正式开始安装\n"),e("ul",[e("li",[s._v("brew install nginx")])])]),s._v(" "),e("li",[s._v("进入/bin 目录\n"),e("ul",[e("li",[s._v("cd /opt/homebrew/opt/nginx/bin")]),s._v(" "),e("li",[s._v("./nginx")]),s._v(" "),e("li",[s._v("原先的root\n"),e("ul",[e("li",[s._v("/opt/homebrew/opt/nginx/html")])])]),s._v(" "),e("li",[s._v("启动和root地址在同一级目录，和配置文件不同级")])])]),s._v(" "),e("li",[s._v("nginx的配置文件\n"),e("ul",[e("li",[s._v("cat /opt/homebrew/etc/nginx/nginx.conf")])])]),s._v(" "),e("li",[s._v("配置\n"),e("ul",[e("li",[s._v("进入配置文件目录")]),s._v(" "),e("li",[s._v("open /opt/homebrew/etc/nginx/nginx.conf")]),s._v(" "),e("li",[s._v("修改后的root\n"),e("ul",[e("li",[s._v("listen: 6080")]),s._v(" "),e("li",[s._v("/Users/zmx2321/Documents/code/_poj")])])])])])])],1)}),[],!1,null,null,null);l.default=_.exports}}]);