import ThemePicker from "../themePicker/themePicker";
// TODO: Adjust height of banner

const Banner = () => {
  return (
    <>
      <img
        src="assets/imgs/dark.png"
        alt="Rick and Morty Banner"
        className="hidden dark:flex text-center w-10/12"
      ></img>
      <img
        src="assets/imgs/light.png"
        alt="Rick and Morty Banner"
        className="dark:hidden text-center w-10/12"
      ></img>
    </>
  );
};

export default Banner;
