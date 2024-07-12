import { useState, useEffect } from "react";
import Moon from "../icons/theme/Moon";
import Sun from "../icons/theme/Sun";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="size-8 transition-transform active:scale-105"
      onClick={() => setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")}
    >
      {
        theme === "light"
          ? <Moon classes="transition-colors size-full text-zinc-700" />
          : <Sun classes="transition-colors size-full text-zinc-300" />
      }
      <span className="sr-only">Change theme</span>
    </button>
  )
}

export default ToggleTheme