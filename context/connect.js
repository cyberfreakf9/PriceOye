'use client'
import { createContext } from 'react'
export const ContextData = createContext({})
export const ContextProvider = ({ children }) => {
  return (
    <ContextData.Provider value={{ name: 'tariq' }}>
      {children}
    </ContextData.Provider>
  )
}
