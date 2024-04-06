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
          <li><a href="#" className={classes.current}>Inicio</a></li>
          <li><a href="#">Vender</a></li>
          <h1><a href="/index.html">ISSUR'S.GAMES</a></h1>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>
                <a href="">Categorias</a>
                {showCategories && (
                    <ul
                        className={classes.categoryList}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <li><Link to='/' element={<ItemListContainer greeting={'Todas las Categorias'}/>}>Todas las Categorias</Link></li>
                        <li><Link to='/category/aventuras'>Aventuras</Link></li>
                        <li><Link to='/category/carreras'>Carreras</Link></li>
                        <li><Link to='/category/juegos de rol'>Juegos de Rol</Link></li>
                    </ul>
                  )}
            </span>
          </li>
          <li><a href="#">Contactos</a></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavbarFunction;