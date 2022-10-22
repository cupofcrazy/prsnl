import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";


export const useTheme = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  
  return {
    isDark,
    toggleTheme
  }
}