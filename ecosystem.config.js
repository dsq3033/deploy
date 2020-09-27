module.exports = {
    apps: [{
        name: 'app',
        script: './app.js',
        env: {
            NODE_ENV: 'production'
        },
        env_production: {
            NODE_ENV: 'production'
        }

    }],
    "deploy" : {
        "production" : {
            user : "dsq", //目标服务器的登录用户名
            host : ["192.168.137.17"],  //目标服务器地址
            ref  : "origin/master",  // 部署目标分支
            repo : "https://github.com/dsq3033/deploy.git", //git仓库地址
            ssh_options: 'StrictHostKeyChecking=no', 
            path : '/home/dsq',
            "pre-deploy-local" : "echo 'This is a local executed command'",
            'pre-deploy': 'npm install'
        }
    }
}