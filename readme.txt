// ---------- git本地仓库---------
// 1. git init    初始化新的管理项目
// 2. git config --global user.name <userName> 		设置用户名
// 3. git config --global user.email <userEmail> 		设置用户email
// 4. git log    显示项目日志
// 5. git status    显示当前目录状态
// 6. git add <fileName>    将当前文件列表(或所有文件)保存到暂存区
// 7. git add *    将所有文件列表保存到暂存区
// 8. git commit -m <备注>   将暂存区文件提交到本地仓库
// 9. git checkout <fileName>    回滚已修改文件
// 10. git checkout .    回滚所有已修改的文件
// 10. git reset HEAD <file>    清空git add向暂存区提交的修改但不影响工作区
// 11. git reset --hard <commitID>   本地仓库中回滚到指定版本 并代替暂存区和工作区的内容
// 12. git reset --soft <commitID>   本地仓库中回滚到指定版本 暂存区和工作区的内容不改变
// 13. git reset --mixed(默认) <commitID>   本地仓库中回滚到指定版本并覆盖暂存区，工作目录不改变
// 14. git rm <file>    从版本库中删除该文件，那就用命令git rm删掉，并且git commit
// git reset --hard HEAD    本地仓库中最新的快照覆盖暂存区和工作区
// git reset --hard HEAD^    本地仓库中倒数第二个快照覆盖暂存区和工作区

//------------ github 分支管理 --------------
// 1.git branch     ---查看分支
// 2.git branch <分支名称>    ---创建分支
// 3.git checkout <分支名称>    ---切换分支
// 4.git checkout -b <分支名称>  ---创建并切换到分支
// 5.git branch -d <分支名称>  ---只能删除合并之后的分支
// 5.git branch -D <分支名称>  ---强行删除分支
// 6.git merge <分支名称>  ---合并制定分支到当前分支  ---默认fast forward模式
// 7.git merge --no-ff m '备注' <分支名称>  ---禁用fast forward 模式
// 		---合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并。
//   git merge origin/分支名  ---- 将远程分支代码合并到当前所在分支
// 8.git stash  ---当前工作区“储藏”起来，等以后恢复现场后继续工作
//		---git stash 后用git status查看工作区就是干净的
// 9.git stash pop  ---恢复工作区储藏的代码，同时删除stash内容

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
// 8. git push origin <:newBranch>  ---:表示删除这个分支


