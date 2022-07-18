import React from 'react';

/**
 * @brief Component for the banner
 * @returns the top banner component which
 * changes the background based on the theme.
 */
const Banner = () => (
  <>
    <img
      src="assets/imgs/dark.png"
      alt="Rick and Morty Banner"
      className="hidden dark:flex text-center w-10/12"
    />
    <img
      src="assets/imgs/light.png"
      alt="Rick and Morty Banner"
      className="dark:hidden text-center w-10/12"
    />
  </>
);

export default Banner;
