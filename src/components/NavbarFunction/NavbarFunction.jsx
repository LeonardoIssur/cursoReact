import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import classes from '../Navbar/Navbar.module.css';
import { Link } from 'react-router-dom';
import ItemListContainer from '../ItemListContainter/ItemListContainer';

const NavbarFunction = ({ showCategories, handleMouseEnter, handleMouseLeave }) => {
  return (
    <nav className={`${classes.nav}`}>
      <div className={classes.container}>
        <ul>
          <li><Link className={classes.current} to='/' element={<ItemListContainer/>}>Inicio</Link></li>
          <li><Link to='/Vender'>Vender</Link></li>
          <h1><Link to='/' element={<ItemListContainer/>}>ISSUR'S.GAMES</Link></h1>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>
                <Link href="">Categorias</Link>
                {showCategories && (
                    <ul
                        className={classes.categoryList}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <li><Link to='/' element={<ItemListContainer/>}>Todas las Categorias</Link></li>
                        <li><Link to='/category/aventuras'>Aventuras</Link></li>
                        <li><Link to='/category/carreras'>Carreras</Link></li>
                        <li><Link to='/category/juegos de rol'>Juegos de Rol</Link></li>
                    </ul>
                  )}
            </span>
          </li>
          <li><Link to='/Contactos'>Contactos</Link></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavbarFunction;