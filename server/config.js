const config = {
    mongoURL: process.env.MONGO_URL || 'mongodb://user_glplus_dev:pwGlplu$dev@ds119700-a0.mlab.com:19700,ds119700-a1.mlab.com:19700/rodmisc?replicaSet=rs-ds119700',
    port: process.env.PORT || 3000,
    secretKey: '$2a$10$GL_Plus',
    sessionKey: '',
    sessionKeyLength: 180000,
    walmartApiKey: 'ntuy6v466fwhpxftt2dve4qm',
    nutritionixApiId: 'b1f8977d',
    nutritionixApiKey: '7ffcbc7909e309c42cc27f9406989a10'
};

module.exports = config;