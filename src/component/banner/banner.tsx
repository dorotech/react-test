import React from 'react';

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
