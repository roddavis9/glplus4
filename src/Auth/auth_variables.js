export const AUTH_CONFIG = {

    // for production use: loginCallbackUrl: 'http://www.grocerylistplus.com',

    domain: 'glplus.auth0.com',
    clientId: 'Op1d5Di3dMhHPFs1e436QoG8gK8WIDm3',
    loginCallbackUrl: 'http://localhost:3000',
    connection: 'Username-Password-Authentication',
    audience: 'https://glplus.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email'
}