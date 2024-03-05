/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Tailwind from './FooterSVGS/TailwindSVG';
import React from './FooterSVGS/ReactSVG';
import Redux from './FooterSVGS/ReduxSVG';
const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-dark px-1 py-1 text-lighter  sm:px-6 md:px-2 md:py-2 lg:px-3 lg:py-3 ">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="text-sm">Created with:</p>
        <div className="flex items-center space-x-1 md:space-x-2 xl:space-x-5">
          <Link to={'https://tailwindcss.com/'}>
            <Tailwind />
          </Link>
          <Link to={'https://react.dev/'}>
            <React />
          </Link>
          <Link to={'https://redux.js.org/'}>
            <Redux />
          </Link>
          <Link to={'https://dummyjson.com/'}>
            <p className="transition-transform duration-200 hover:scale-105">
              DummyJSON
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
