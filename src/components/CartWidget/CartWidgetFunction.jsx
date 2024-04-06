import React, { useEffect, useState, useContext } from 'react';
import imgCarrito56px from './assets/imgCarrito56px.png';
import imgCarritoNegro from './assets/imgCarritoNegro.png';
import classes from './CartWidget.module.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext'

const CartWidgetFunction = () => {
  const { cart } = useContext(CartContext)

  const [esScrollActivo, setScrollActivo] = useState(false);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    const manejarScroll = () => {
      if (window.scrollY > + 230) {
        setScrollActivo(true);
      } else {
        setScrollActivo(false);
      }
    };

    window.addEventListener('scroll', manejarScroll);

    return () => {
      window.removeEventListener('scroll', manejarScroll);
    };
  }, []);

  useEffect(() => {
    let accu = 0;

    cart.forEach(prod => {
      accu += prod.count
    });

    setTotalArticles(accu);
  }, [cart]);

  return (
    <div className={classes.containerCart}>
      {esScrollActivo ? (
        <>
          <Link to={'/cart'}><img className={classes.imgCart} src={imgCarritoNegro} /></Link>
          <p className={classes.counterCart2}>{ totalArticles }</p>
        </>
      ) : (
        <>
          <Link to={'/cart'}><img className={classes.imgCart} src={imgCarrito56px} /></Link>
          <p className={classes.counterCart}>{ totalArticles }</p>
        </>
      )}
    </div>
  );
};

export default CartWidgetFunction;
