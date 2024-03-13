import React, { useEffect, useState } from 'react';
import imgCarrito56px from './assets/imgCarrito56px.png';
import imgCarritoNegro from './assets/imgCarritoNegro.png';
import classes from './CartWidget.module.css';

const CartWidget = () => {
  const [esScrollActivo, setScrollActivo] = useState(false);

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

  return (
    <a>
      <div className={classes.containerCart}>
        {esScrollActivo ? (
          <>
            <img className={classes.imgCart} src={imgCarritoNegro} />
            <p className={classes.counterCart2}>0</p>
          </>
        ) : (
          <>
            <img className={classes.imgCart} src={imgCarrito56px} />
            <p className={classes.counterCart}>0</p>
          </>
        )}
      </div>
    </a>
  );
};

export default CartWidget;