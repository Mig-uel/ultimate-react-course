import { createContext, useContext, useReducer } from 'react'
import type { AuthAction, AuthContextState, AuthState } from '../types'

const AuthContext = createContext<AuthContextState>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
  error: null,
})

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  error: null,
}

const reducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      }
    case 'logout':
      return initialState
    case 'failed':
      return { ...state, error: action.payload }
    default: {
      const never: never = action
      throw new Error(`Invalid action type: ${never}`)
    }
  }
}

const FAKE_USER = {
  name: 'Admin',
  email: 'admin@email.com',
  password: 'qwerty',
  avatar: 'https://i.pravatar.cc/100?u=zz',
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isAuthenticated, user, error } = state

  const login = (email: string, password: string) => {
    if (!email || !password) {
      dispatch({
        type: 'failed',
        payload: 'Email and/or password must be filled.',
      })
      return
    }

    if (email !== FAKE_USER.email || password !== FAKE_USER.password) {
      dispatch({
        type: 'failed',
        payload: 'Email and/or password does not match.',
      })
      return
    }

    dispatch({ type: 'login', payload: FAKE_USER })
  }
  const logout = () => dispatch({ type: 'logout' })

  const value: AuthContextState = {
    isAuthenticated,
    login,
    logout,
    user,
    error,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context || context === undefined)
    throw new Error('Unable to access AuthContext outside of scope...')

  return context
}

export { AuthProvider, useAuthContext }
