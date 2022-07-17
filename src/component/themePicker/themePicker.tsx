import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../../hook/useDarkMode";

const ThemePicker = () => {
  const [colorTheme, setTheme] = useDarkMode("dark");
  return (
    <div
      className="p-2 my-2 rounded-full shadow-md bg-yellow-100 dark:bg-gray-900 dark:text-yellow-100 text-gray-700 cursor-pointer transition"
      onClick={() => setTheme(colorTheme)}
    >
      {colorTheme === "dark" ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </div>
  );
};

export default ThemePicker;
