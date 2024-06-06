import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleToggle() {
    if (theme === "dark") {
      setTheme("");
      document.querySelector("html").classList.remove("dark");
    } else {
      setTheme("dark");
      document.querySelector("html").classList.add("dark");
    }
  }
  return (
    <button onClick={handleToggle} className="text-white absolute z-10 top-16 right-24  rounded-full p-2 shadow-inner">
      {theme === "dark" ? <Sun className="text-white w-6 h-6 " /> : <Moon className="text-white w-6 h-6" />}O Tema é {theme}
    </button>
  );
}

export default ThemeToggle;
