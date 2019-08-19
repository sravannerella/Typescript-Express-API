import passport from 'passport';
import ldapStrategy, { Options, VerifyDoneCallback } from 'passport-ldapauth';

const options: Options = {
    server: {
        url: process.env.LDAPURL as string,
        bindDN: `uid=${process.env.LDAP_BIND_DN}`,
        bindCredentials: `${process.env.LDAP_PASSWORD}`,
        searchBase: 'dc=example,dc=org',
        searchFilter: `(cn={{username}})`
    }
}

passport.use(new ldapStrategy(options, (user:any, done: VerifyDoneCallback) => {
    return done(null, user) 
} ));

export default passport;