import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config'
import auth from '@/firebase/firebase.auth'



export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {


	// const googleProvider = new GoogleAuthProvider()

	const [user,setUser] = useState()
	const {loading, setLoading} = useState(true)

	const createUser = (email,password) =>{
		setLoading(false)
		return createUserWithEmailAndPassword(auth,email,password)
	}

	const signIn = (email,password) =>{
		setLoading(false)
		return signInWithEmailAndPassword(auth,email,password)

	}

	const profileUpdate =async (updateUser={}) =>{
		setLoading(false)
		return updateProfile(auth.currentUser,updateUser)
		setUser((preuser) =>({...preuser, ...updateUser}))

	}


	const googleLogin = () =>{
		setLoading(false)
		return signInWithPopup(auth,googleProvider)
	}

	const logOut = () =>{
		setLoading(false)
		return signOut(auth)
	}

	useEffect(() =>{
		const unsubscribe = onAuthStateChanged(auth, (user) =>{
			setUser(user)
			setLoading(false)
		});

		() => {
			unsubscribe()
		}

	},[])



	const info = {user,loading,logOut,signIn,googleLogin,profileUpdate}

  return (
	<AuthContext.Provider value={info}>
		{children}
	</AuthContext.Provider>
  )
}

export default AuthProvider;