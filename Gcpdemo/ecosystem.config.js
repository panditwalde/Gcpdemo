module.exports = {
  apps : [{
    name: "app",
    script: './index.js/',
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }

  }], 
  
  
  deploy : {
    production : {
      user : 'nodedemo',
      host : '34.93.79.58',
      ref  : 'origin/master',
      repo : 'https://github.com/panditwalde/Gcpdemo.git',
      path : 'Documents/Gcpdemo',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};


