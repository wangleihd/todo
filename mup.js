module.exports = {
  servers: {
    one: {
      host: '120.77.44.150',
      username: 'root',
      pem: '/Users/Richard/.ssh/meteor'
      // password:
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'app',
    path: '/Users/Richard/github.com/meteor/mup-app',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      PORT: 3000,
      ROOT_URL: 'app.com',
      MONGO_URL: 'mongodb://mydb:asdfgh@ds151137.mlab.com:51137/mydb'
    },

    //dockerImage: 'kadirahq/meteord'
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60
  },

};
