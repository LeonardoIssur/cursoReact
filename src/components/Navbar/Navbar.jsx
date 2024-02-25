import BotonNavbar from "../BotonNavbar/BotonNavbar"
import CartWidget from "../CartWidget/CartWidget"
import Logo from "../Logo/Logo"



const Navbar = () =>{



    return (
        <header>
            <Logo/>    
            <CartWidget/>
            <nav>
                <BotonNavbar texto="Inicio" />
                <BotonNavbar texto="Games" />
                <BotonNavbar texto="Proximos Lanzamientos" />
                <BotonNavbar texto="SobreNosotros" /> 
                
            </nav>
        </header>
    )
}

export default Navbar