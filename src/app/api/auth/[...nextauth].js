import { Login, Pages } from "@mui/icons-material"
import NextAuth from "next-auth"
import spotifyProvider from "next-auth/providers/spotify"

const scopes = [
    'user_read_email',
    'playlist_read_private',
    'playlist_read_colaborative',
    'user_read_curruntly_playing',
    'user_modify_playback_status',
].join(',')

const params = {
    scope : scopes
}

const LOGIN_URL = 'https://acount.spotify.com/authorize?'


export const authOptions = {

  // Configure one or more authentication providers
  providers: [
    spotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_SECRET,
      authorization: LOGIN_URL
    }),
    
],
    secret : process.env.JWT_SECRET,
    Pages : {
        signIn : '/login'
    },

    callbacks: {
      async jwt({ token, account }) {
        // Persist the OAuth access_token to the token right after signin
        if (account) {
          token.accessToken = account.access_token
          token.refreshToken = account.refresh_token
          token.accessTokenExpires = account.expires_at
          return token
        }
        if(Date.now() < accessTokenExpires * 1000 ){
            return token
        }

        return refreshAccessToken(token)
      },
      async session({ session, token, user }) {
        // Send properties to the client, like an access_token from a provider.
        session.accessToken = token.accessToken
        return session
      }
    }
}

export default NextAuth(authOptions)