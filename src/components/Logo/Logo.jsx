import iconControl from './assets/img/iconControl.png'
import classes from './Logo.module.css'

const Logo = () =>{

    return(
        <a>
            <div>
                <img className={classes.imgLogo}  src={iconControl} />
            </div>
            <p className={classes.nameLogo}> ISSUR GAMES</p>
        </a>
    )
}

export default Logo