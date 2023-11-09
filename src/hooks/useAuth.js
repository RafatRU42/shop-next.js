import {createContext} from 'react'
import { AuthContext } from '@/providers/AuthProvider';

const useAuth = () =>{
	const auth = createContext(AuthContext)
	return auth;
}

export default useAuth;