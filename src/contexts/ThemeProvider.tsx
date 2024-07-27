import { createContext, useEffect, useState } from "react";

type ThemeContextType = [string, React.Dispatch<React.SetStateAction<string>>];

export const ThemeContext = createContext<ThemeContextType>(["light", () => {}]);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("unisell-theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("unisell-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
