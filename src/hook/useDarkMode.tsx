/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from "react";

const useDarkMode = (
  baseTheme: string = "dark"
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [theme, setTheme] = useState(baseTheme);
  const colorTheme = theme === "dark" ? "light" : "dark";
  const bgClass = theme === "dark" ? "dark-bg" : "light-bg";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
    bgClass === "dark-bg"
      ? (root.classList.remove("light-bg"), root.classList.add("dark-bg"))
      : (root.classList.remove("dark-bg"), root.classList.add("light-bg"));
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
