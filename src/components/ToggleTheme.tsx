import { useState, useEffect } from "react";
import Moon from "../icons/theme/Moon";
import Sun from "../icons/theme/Sun";
import { flushSync } from "react-dom";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  const toggleDarkMode = async (theme: string) => {
    if (!document.startViewTransition) return setTheme(theme);

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme);
      })
    }).ready;
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <button
      className="size-8"
      onClick={() => toggleDarkMode(theme === "light" ? "dark" : "light")}
    >
      {
        theme === "light"
          ? <Moon classes="size-full text-zinc-700" />
          : <Sun classes="size-full text-zinc-300" />
      }
      <span className="sr-only">Change theme</span>
    </button>
  )
}

export default ToggleTheme
