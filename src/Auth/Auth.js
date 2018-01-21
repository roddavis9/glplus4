import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth_variables';

export default class Auth {
    requestedScopes = 'openid profile read:messages write:messages';

    auth0 = new auth0.WebAuth({
        domain: AUTH_CONFIG.domain,
        clientID: AUTH_CONFIG.clientId,
        // redirectUri: AUTH_CONFIG.loginCallbackUrl,
        audience: AUTH_CONFIG.audience,
        responseType: 'token id_token',
        scope: this.requestedScopes
    });


    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                // console.log('authResult', authResult);
            } else if (err) {
//
                console.log('error is here', err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });

    }

    getAccessToken() {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('No access token found');
        }
        return accessToken;
    }

    getIdToken() {
        const id_token = localStorage.getItem('id_token');
        if (!id_token) {
            throw new Error('No id token found');
        }
        return id_token;
    }

    getProfile(cb) {
        let accessToken = this.getAccessToken();

        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                this.userProfile = profile;

            }
            cb(err, profile);
        });
    }

    setSession(authResult) {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);


        // navigate to the home route
//        history.replace('/home');
    }

    logout() {

        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('glp_token');
        localStorage.removeItem('auth0.ssodata');
        // navigate to the home route
        history.push('/');
    }

    isAuthenticated() {
        // console.log('[isAuthenticated()] -- Auth.js');

        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));

        return new Date().getTime() < expiresAt;
    }
}

