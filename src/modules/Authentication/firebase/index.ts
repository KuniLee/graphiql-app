import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthState as useAuthStateFirebase } from 'react-firebase-hooks/auth'
import { useSignOut as useSignOutFirebase } from 'react-firebase-hooks/auth'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || '',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: import.meta.env.VITE_FIREBASE_API_ID || '',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const useAuthState = () => {
  return useAuthStateFirebase(auth)
}

export const useSignOut = () => {
  return useSignOutFirebase(auth)
}

export const useSignIn = () => {
  return useSignInWithEmailAndPassword(auth)
}