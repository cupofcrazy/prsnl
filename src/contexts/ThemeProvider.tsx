import { createContext, useState } from "react";


type PropsWithChildren<T> = T & {
  children: React.ReactNode
}
export type ThemeOptions = Boolean


interface ThemeProps {
  theme: ThemeOptions
  toggleTheme: () => void
}
export const ThemeContext = createContext<ThemeProps>({
  theme: true,
  toggleTheme: (): void => {}
})

export const ThemeProvider = ({ children }: PropsWithChildren<ThemeProps>) => {
  const [theme, setTheme] = useState<ThemeOptions>(true)
  const toggleTheme = (): void => {
    setTheme(!theme)
    if (theme) document.body.classList.add('dark')
    else document.body.classList.remove('dark')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}