import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Facebook from 'next-auth/providers/facebook';
import Twitter from 'next-auth/providers/twitter';
import Apple from 'next-auth/providers/apple';

// we want users to login/sign up with google, facebook and twitter and maybe apple

export default NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_ID,
        }),
        Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_SECRET_ID,
        })
    ],
    theme: {
        colorScheme: 'auto',
        logo: '/logo.svg',
        brandColor: '#D7345B'
    }
})