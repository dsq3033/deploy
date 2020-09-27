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
            user : "dsq",
            host : ["192.168.137.17"],
            ref  : "origin/master",
            repo : "https://github.com/dsq3033/deploy.git",
            ssh_options: 'StrictHostKeyChecking=no',
            path : '/home/dsq',
            "pre-deploy-local" : "echo 'This is a local executed command'",
            'pre-deploy': 'npm install'
        }
    }
}