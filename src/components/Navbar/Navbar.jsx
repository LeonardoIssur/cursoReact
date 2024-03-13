import React, { useEffect, useState } from 'react';
import classes from './Navbar.module.css';
import NavbarFunction from '../NavbarFunction/NavbarFunction';

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);

  const handleMouseEnter = () => {
    setShowCategories(true);
  };

  const handleMouseLeave = () => {
    setShowCategories(false);
  };

  useEffect(() => {
    const nav = document.querySelector(`.${classes.nav}`);

    const fixNav = () => {
      if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add(classes.active);
      } else {
        nav.classList.remove(classes.active);
      }
    };

    window.addEventListener('scroll', fixNav);

    return () => {
      window.removeEventListener('scroll', fixNav);
    };
  }, []);

  return (
    <NavbarFunction
      showCategories={showCategories}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
};

export default Navbar;
