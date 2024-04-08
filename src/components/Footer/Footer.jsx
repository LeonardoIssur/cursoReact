import classes from '../Footer/Footer.module.css'
import React from 'react';
import facebook_icon from '../Footer/assets/facebook_icon.png'
import instagram_icon from '../Footer/assets/instagram_icon.png'
import twitter_icon from '../Footer/assets/twitter_icon.png'

const Footer = () => {
  return (
    <footer className={classes.footerContainer}>
      <div className={classes.footerInfo}>
        <a>Información de contacto:</a>
        <a>Dirección: 123 Calle Principal</a>
        <a>Teléfono: (123) 456-7890</a>
        <a>Email: ejemplo@example.com</a>
      </div>
      <div>
        <div className={classes.footerRedesSociales}>
            <h4>Siguenos en:</h4>
            <img className={classes.imgLogoFooter} src={facebook_icon} alt="" /><a>Facebook</a>      
            <img className={classes.imgLogoFooter} src={instagram_icon} alt="" /><a>Instagram</a>
            <img className={classes.imgLogoFooter} src={twitter_icon} alt="" /><a>Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;