// ---------- git本地仓库---------
// 1. git init   初始化新的管理项目
// 2. git config --global user.name <userName> 设置用户名
// 3. git config --global user.email <userEmail> 设置用户email
// 4. git log  显示项目日志
// 5. git status  显示当前目录状态
// 6. git add <file> 将当前文件列表(或所有文件)保存到暂存区
// 7. git add .  将所有文件列表保存到暂存区
// 8. git commit -m <备注> 将暂存区文件提交到本地仓库
// 9. git checkout --<file> 回滚修改的内容
// 10. git reset HEAD <file> 清空git add向暂存区提交的修改但不影响工作区
// 11. git rm <file>   从版本库中删除该文件，那就用命令git rm删掉，并且git commit

// ----------- github 远程仓库 ------------
// 1.ssh-keygen -t rsa -C 'yourEmail@example.com'   ---创建ssh key
// 2.git remote add <别名> <远程仓库地址>  ----添加远程仓库别名
//		---git remote add origin git@server-name:path/repo-name.git
// 3.git remote remove <别名>  ---删除远程仓库别名
// 		---git remote remove origin
// 4.git remote show <别名>  ---查看指定路径的详细信息
// 5.git remote show  ---查看路径别名
// 6.git push <远程仓库地址> <本地分支名称>:<远程仓库名称>
// 		---git push -u origin master   ---第一次推送master分支的所有内容
//		---git push origin master  ---后续可以此方式推送最新修改
// 7.git clone <远程仓库地址> <项目名称> ---把远程仓库分支下载到本地

//------------ github 分支管理 --------------
// 1.git branch  ---查看分支
// 2.git branch <分支名称>  ---创建分支
// 3.git checkout <分支名称>  ---切换分支
// 4.git checkout -b <分支名称>  ---创建并切换到分支