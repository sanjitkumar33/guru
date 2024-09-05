import React, { createContext, useState, useContext, useEffect } from "react";
import { MantineProvider } from '@mantine/core';
const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme;
  }

  const currentHour = new Date().getHours();

  if (currentHour >= 6 && currentHour < 18) {
    return "light";
  } else {
    return "dark";
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getPreferredTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <MantineProvider withGlobalClasses={false}>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  </MantineProvider>
   
  );
};
