# deploy

## ecosystem.config.js
pm2 配置文件

详细配置项见注释

## 发布步骤

1. 确保本地有ssh-key 
   或者执行  `ssh-keygen -t rsa` 来创建公钥

2. 将公钥拷贝到目标服务器 `ssh-copy-id user@192.168.1.xxx` 来实现免密登录目标服务器

3. 执行命令 `pm2 deploy ecosystem.config.js production setup`  来初始化项目

   > production 是指pm2 的发布环境

4. 执行命令 `pm2 deploy ecosystem.config.js production update`  来部署项目
