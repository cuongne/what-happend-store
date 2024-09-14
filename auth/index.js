import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

export const BASE_PATH = '/api/auth'
const authOptions = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      session: {
        strategy: 'jwt',
      },
      async authorize(data) {
        const { username, password } = data

        const response = await fetch('http://localhost:1337/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password }),
        })

        // Handle potential errors (e.g., network issues, invalid credentials)
        if (!response.ok) {
          throw new Error('Invalid email or password')
        }
        const user = await response.json()
        if (user) {
          return user
        }
        return null
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) return true
      return false
    },
    async session({ session, token }) {
      if (token?.user?.data) {
        session.user = token.user.data
      }

      return session
    },
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      return token
    },
  },
  basePath: BASE_PATH,
  secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
