import React, { useContext, useState, useEffect } from "react";

const THEME_KEY = "my_theme_key"; 

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [modnoapte, setModNoapte] = useState(() => {
    // initializeaza valoarea temei din localStorage, daca exista
    const savedTheme = localStorage.getItem(THEME_KEY);
    return savedTheme ? JSON.parse(savedTheme) : true; // true este valoarea implicita
  });

  function schimbaTema() {
    setModNoapte((prevModnoapte) => !prevModnoapte);
  }

  // salveaza valoarea temei in localStorage la fiecare actualizare
  useEffect(() => {
    localStorage.setItem(THEME_KEY, JSON.stringify(modnoapte));
  },[modnoapte]);

  return (
    <ThemeContext.Provider value={modnoapte}>
    <ThemeUpdateContext.Provider value={schimbaTema}>
    <div className={modnoapte ? "bg-light" : "bg-dark"}>
    {children}
    </div>
    </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
    );
    }