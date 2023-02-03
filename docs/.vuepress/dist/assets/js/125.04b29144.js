(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{807:function(t,a,e){"use strict";e.r(a);var i=e(26),s=Object(i.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"git相关笔记"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git相关笔记"}},[t._v("#")]),t._v(" git相关笔记")]),t._v(" "),e("ClientOnly",[e("Valine")],1),t._v(" "),e("h2",{attrs:{id:"_1-上传下载代码常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-上传下载代码常用命令"}},[t._v("#")]),t._v(" 1. 上传下载代码常用命令")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git clone url")]),t._v(" 复制的地址")]),t._v(" "),e("li",[e("code",[t._v("git pull")]),t._v(" 拉取别人的代码")]),t._v(" "),e("li",[e("code",[t._v("git status")]),t._v(" 查看仓库状态")]),t._v(" "),e("li",[e("code",[t._v("git add .")]),t._v(" 除了gitignore里面的东西，其余添加到缓存区")]),t._v(" "),e("li",[e("code",[t._v("git commit -m 'deploy'")]),t._v(" 将被添加到缓存区的东西提交到缓存区  加文字说明")]),t._v(" "),e("li",[e("code",[t._v("git push")]),t._v(" 将缓存区的的文件提交到仓库")])]),t._v(" "),e("h2",{attrs:{id:"_2-其他常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-其他常用命令"}},[t._v("#")]),t._v(" 2. 其他常用命令")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git config --global credential.helper store")]),t._v(" git不输入密码")]),t._v(" "),e("li",[t._v("卸载重装git credentials manager\n"),e("ul",[e("li",[e("code",[t._v("git credential-manager uninstall")]),t._v("  卸载")]),t._v(" "),e("li",[e("code",[t._v("git credential-manager install")]),t._v("  重装")])])])]),t._v(" "),e("h2",{attrs:{id:"_3-查询是否使用了代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-查询是否使用了代理"}},[t._v("#")]),t._v(" 3. 查询是否使用了代理")]),t._v(" "),e("ul",[e("li",[t._v("git config --global http.proxy")])]),t._v(" "),e("h2",{attrs:{id:"_4-取消代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-取消代理"}},[t._v("#")]),t._v(" 4. 取消代理")]),t._v(" "),e("ul",[e("li",[t._v("git config --global --unset http.proxy")])]),t._v(" "),e("h2",{attrs:{id:"_5-避免重复输入密码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-避免重复输入密码"}},[t._v("#")]),t._v(" 5. 避免重复输入密码")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git config --global credential.helper store")])]),t._v(" "),e("li",[e("code",[t._v("cat ~/.git-credentials")]),t._v(" => 查看账号")])]),t._v(" "),e("h2",{attrs:{id:"_6-git分支相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-git分支相关"}},[t._v("#")]),t._v(" 6. git分支相关")]),t._v(" "),e("h3",{attrs:{id:"_6-1-分支命令简述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-分支命令简述"}},[t._v("#")]),t._v(" 6.1. 分支命令简述")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git branch branchName")]),t._v("(在本地创建一个命名为branchName的分支)")]),t._v(" "),e("li",[e("code",[t._v("git branch")]),t._v(" 查看当前自己所在的分支\n"),e("ul",[e("li",[t._v("查看本地分支")])])]),t._v(" "),e("li",[e("code",[t._v("git branch -a")]),t._v(" 查看服务器的所有分支以及自己当前所在的分支\n"),e("ul",[e("li",[t._v("查看远程分支 (其中，remotes开头的代表是远程分支)")])])]),t._v(" "),e("li",[e("code",[t._v("git push origin branchName")]),t._v("(把命名为branchName的本地分支推送到服务器)")]),t._v(" "),e("li",[e("code",[t._v("git checkout --track origin/branchName")]),t._v(" (切换为远程服务器上的命名为branchName的远程分支)")]),t._v(" "),e("li",[t._v("如果你的搭档要把他本地的分支给关联到服务器上命名为branchName的远程分支，请执行以下操作\n"),e("ul",[e("li",[e("code",[t._v("git branch --set-upstream localBranchName origin/branchName")]),t._v("  （为本地分支添加一个对应的远程分支 与之相对应）->这行命令用来关联本地的分支与服务器上的分支")])])]),t._v(" "),e("li",[t._v("完成以上操作之后，就可以进行提交代码了，但是在提交代码之前，你要确定你当前所在的分支")]),t._v(" "),e("li",[e("code",[t._v("git push origin branchName")]),t._v("（提交代码到远程服务器上命名为branchName的分支上）")]),t._v(" "),e("li",[e("code",[t._v("git pull origin branchName")]),t._v(" （从远程分支上拉取代码）")])]),t._v(" "),e("h3",{attrs:{id:"_6-2-创建并使用一个新的分支流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-创建并使用一个新的分支流程"}},[t._v("#")]),t._v(" 6.2. 创建并使用一个新的分支流程")]),t._v(" "),e("ol",[e("li",[t._v("创建一个分支")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git branch 分支名")])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("切换到分支\n"),e("ul",[e("li",[e("code",[t._v("git checkout 分支名")])])])]),t._v(" "),e("li",[t._v("提交代码到远程服务器的分支上")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git push origin 分支名")])])]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("拉取远程分支内容")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git pull origin 分支名")])])]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("关联本地的分支与服务器上的分支")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git branch --set-upstream localBranchName origin/branchName")])])]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("这时候就可以直接pull和push代码了")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git pull")])])]),t._v(" "),e("h3",{attrs:{id:"_6-3-分支相关复杂指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-分支相关复杂指令"}},[t._v("#")]),t._v(" 6.3. 分支相关复杂指令")]),t._v(" "),e("ul",[e("li",[t._v("本地分支关联远程分支\n"),e("ul",[e("li",[t._v("在本地test分支上修改了代码后，需要提交到远程，这时就需要关联远程的某个远程分支")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 本地提交\n * git gui \n * push到远程\n * git push origin test:test\n * 第一次无法pull，只能push\n * 如果不写远程分支名称，则默认和本地分支同名，这时命令为：$ git push origin test\n * 从远程pull\n * git pull origin test:test  \n */")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("ul",[e("li",[t._v("从远程分支上下代码\n"),e("ul",[e("li",[e("code",[t._v("git clone -b 分支名 http://xxx/xxx.git")])])])]),t._v(" "),e("li",[t._v("clone远程仓库到指定目录\n"),e("ul",[e("li",[e("code",[t._v('git clone xxx.git "指定目录"')])])])])])])]),t._v(" "),e("h2",{attrs:{id:"_8-删除分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-删除分支"}},[t._v("#")]),t._v(" 8. 删除分支")]),t._v(" "),e("ol",[e("li",[t._v("删除本地分支")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git branch --delete 分支名")]),t._v(" "),e("ul",[e("li",[t._v("等同于"),e("code",[t._v("git branch -d 分支名")])]),t._v(" "),e("li",[t._v("该分支必须完全和它的上游分支merge完成，如果没有上游分支,必须要和HEAD完全merge")])])]),t._v(" "),e("li",[e("code",[t._v("git branch -D dev")]),t._v(" "),e("ul",[e("li",[t._v("-D是--delete --force的缩写,这样写可以在不检查merge状态的情况下删除分支")])])])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("删除远程分支")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git push origin --delete 分支名")])])]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("删除追踪分支")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git branch --delete --remotes <remote>/<branch>")]),t._v(" "),e("ul",[e("li",[t._v("该操作并没有真正删除远程分支,而是删除的本地分支和远程分支的关联关系")])])])]),t._v(" "),e("h2",{attrs:{id:"_9-使用git-config-global设置用户名和邮件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-使用git-config-global设置用户名和邮件"}},[t._v("#")]),t._v(" 9. 使用git config --global设置用户名和邮件")]),t._v(" "),e("ul",[e("li",[t._v("安装好git后，在命令行或终端中使用下面的命令可以设置git自己的名字和电子邮件")]),t._v(" "),e("li",[t._v("这是因为Git是分布式版本控制系统，所以，每个机器都必须自报家门：你的名字和Email地址")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git config --global user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zmx2321"')]),t._v("\ngit config --global user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zmx2321@163.com"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("注意git config命令的–global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址")]),t._v(" "),e("li",[t._v("配置好之后可以查看\n"),e("ul",[e("li",[e("code",[t._v("git config -l")])])])]),t._v(" "),e("li",[t._v("查看全局用户名密码")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git config --global user.name\ngit config --global user.email\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("为单一的仓库配置用户名和邮箱")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git config user.name "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),t._v("\ngit config user.email "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email"')]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("查看单一仓库的配置")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("git config user.name\ngit config user.email \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"_9-git-下拉警告"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-git-下拉警告"}},[t._v("#")]),t._v(" 9. git 下拉警告")]),t._v(" "),e("ul",[e("li",[t._v("当使用git版本为2.27.0以上时，使用git pull命令出现以下的警告："),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('warning: Pulling without specifying how to reconcile divergent branches is\ndiscouraged. You can squelch this message by running one of the following\ncommands sometime before your next pull:\n\n  git config pull.rebase false  # merge (the default strategy)\n  git config pull.rebase true   # rebase\n  git config pull.ff only       # fast-forward only\n\nYou can replace "git config" with "git config --global" to set a default\npreference for all repositories. You can also pass --rebase, --no-rebase,\nor --ff-only on the command line to override the configured default per\ninvocation.\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])])]),t._v(" "),e("li",[t._v("翻译如下"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('warning: 不建议在没有为偏离分支指定合并策略时执行pull操作。 \n您可以在执行下一次pull操作之前执行下面一条命令来抑制本消息：\n\ngit config pull.rebase false  # 合并（默认缺省策略）\ngit config pull.rebase true   # 变基\ngit config pull.ff only       # 仅快进\n\n您可以将 "git config" 替换为 "git config --global" 以便为所有仓库设置\n缺省的配置项。您也可以在每次执行 pull 命令时添加 --rebase、--no-rebase，\n或者 --ff-only 参数覆盖缺省设置。\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])])]),t._v(" "),e("li",[t._v("解决方法\n"),e("ul",[e("li",[t._v("执行 "),e("code",[t._v("git config pull.rebase false")])])])])]),t._v(" "),e("h2",{attrs:{id:"_10-push文件过大"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_10-push文件过大"}},[t._v("#")]),t._v(" 10. push文件过大")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("git config --global http.postBuffer 157286400")])]),t._v(" "),e("ul",[e("li",[t._v("当推送大量数据时（初始推送大型存储库，使用非常大的文件进行更改）可能需要 http.postBuffer 在 git 客户端 （而不是服务器）上设置更高的 设置 ；将 Git 缓冲区大小增加到 repo 的最大单个文件大小")])]),t._v(" "),e("h2",{attrs:{id:"_20-关于忽略文件-gitignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_20-关于忽略文件-gitignore"}},[t._v("#")]),t._v(" 20. 关于忽略文件.gitignore")]),t._v(" "),e("ul",[e("li",[t._v("我们发现直接将.env.development放入.gitignore不起作用")]),t._v(" "),e("li",[t._v("原因是.gitignore只能忽略那些原来没有被追踪的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的")]),t._v(" "),e("li",[t._v("git清除本地缓存命令\n"),e("ul",[e("li",[t._v("git rm .env.development --cached")])])]),t._v(" "),e("li",[t._v("git commit提交代码")]),t._v(" "),e("li",[t._v("此时随意修改.env.development文件，就不会受到git的跟踪了，这样每次提交都不会提交.env.development的修改到git上了")])])])])],1)}),[],!1,null,null,null);a.default=s.exports}}]);