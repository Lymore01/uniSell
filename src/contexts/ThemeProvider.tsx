import { createContext, useState } from "react";

type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>];

export const ThemeContext = createContext<ThemeContextType>(["dark", () => {}]);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
