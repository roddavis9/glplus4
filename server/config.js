const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://user_glplus_dev:pwGlplu$dev@ds119700-a0.mlab.com:19700,ds119700-a1.mlab.com:19700/rodmisc?replicaSet=rs-ds119700',
  port: process.env.PORT || 8080,
};

module.exports = config;