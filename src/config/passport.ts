import passport from 'passport';
import ldapStrategy, { Options } from 'passport-ldapauth';

const options: Options = {
    server: {
        url: process.env.LDAPURL as string,
        bindDN: `uid=${process.env.LDAP_USERNAME}`,
        bindCredentials: `${process.env.LDAP_PASSWORD}`,
        searchBase: 'ou=passport-ldapauth',
        searchFilter: `uid=${process.env.LDAP_USERNAME}`
    }
}

passport.use(new ldapStrategy(options));

export default passport;