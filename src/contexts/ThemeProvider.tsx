import React, { createContext, useState } from "react";


type PropsWithChildren<T> = T & {
  children: React.ReactNode
}
export type ThemeOptions = Boolean

interface ThemeProps {
  isDark: ThemeOptions
  toggleTheme: () => void
}
export const ThemeContext = createContext<ThemeProps>({
  isDark: false,
  toggleTheme: (): void => {}
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState<ThemeOptions>(false)
  const toggleTheme = (): void => {
    setIsDark(!isDark)
    if (isDark) document.body.classList.remove('dark')
    else document.body.classList.add('dark')
  }
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}