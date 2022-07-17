import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../../hook/useDarkMode";

const ThemePicker = () => {
  const [colorTheme, setTheme] = useDarkMode("dark");
  return (
    <div
      className="btn p-2 my-2 cursor-pointer"
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
