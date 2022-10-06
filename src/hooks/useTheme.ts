import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";


export const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return {
    theme,
    toggleTheme
  }
}