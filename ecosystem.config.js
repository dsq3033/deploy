module.exports = {
    apps: [{
        name: 'app', //pm2 实例的name
        script: './app.js', // pm2 运行的入口文件
        env: {
            NODE_ENV: 'production'  //执行命令时候的环境变量配置
        },
        env_production: { //生产环境变量配置
            NODE_ENV: 'production'
        }

    }],
    "deploy" : {
        "production" : {
            user : "dongshiqi", //目标服务器的登录用户名
            host : ["192.168.0.101"],  //目标服务器地址
            ref  : "origin/master",  // 部署目标分支
            repo : "https://github.com/dsq3033/deploy.git", //git仓库地址
            "ssh_options" : 'StrictHostKeyChecking=no',  //ssh 登录校验
            path : '/Users/dongshiqi/var/www',  //部署目标目录
            "pre-deploy-local" : "echo 'This is a local executed command'", // 部署前本地打印内容
            'pre-deploy': 'whoami'  //部署前服务器执行的命令行
        }
    }
}