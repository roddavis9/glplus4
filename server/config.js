const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://user_glplus_dev:pwGlplu$dev@ds119700-a0.mlab.com:19700,ds119700-a1.mlab.com:19700/rodmisc?replicaSet=rs-ds119700',
  port: process.env.PORT || 4200,
  localPath: 'http://localhost:4200/api',
  secretKey: '$2a$10$GL_Plus',
  sessionKey: '',
  sessionKeyLength: 180000
};

module.exports = config;