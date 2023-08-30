/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Tailwind from './FooterSVGS/Tailwind';
import React from './FooterSVGS/React';
import Redux from './FooterSVGS/Redux';
import Insta from './FooterSVGS/Insta';
import Github from './FooterSVGS/github';
import Linked from './FooterSVGS/Linked';
const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-dark px-1 py-1 text-lighter sm:px-6 md:px-2 md:py-2 lg:px-3 lg:py-3 ">
      <div className="flex flex-col items-center justify-center space-y-2 lg:ml-5">
        <p className="text-sm">Created with:</p>
        <div className="flex space-x-1 md:space-x-2 xl:space-x-5">
          <Link to={'https://tailwindcss.com/'}>
            <Tailwind />
          </Link>
          <Link to={'https://react.dev/'}>
            <React />
          </Link>
          <Link to={'https://redux.js.org/'}>
            <Redux />
          </Link>
        </div>
        <div>
          <Link to={'https://dummyjson.com/'}>
            <p className="inline-block transition-transform duration-200 hover:scale-105">
              DummyJSON
            </p>
          </Link>
        </div>
      </div>

      <div className="flex space-x-1 md:space-x-2 lg:mr-5 xl:space-x-5">
        <Link to={'https://www.instagram.com/k_vulchev/'}>
          <Insta />
        </Link>
        <Link to={'https://github.com/Kaivv1/Dummy-Project'}>
          <Github />
        </Link>
        <Link to={'https://www.linkedin.com/in/kaloyan-valchev-aabb7528a/'}>
          <Linked />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
