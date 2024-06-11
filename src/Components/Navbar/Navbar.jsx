import './Navbar.css'
import { NavLink } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className='nav'>
        <div className='nav-logo'>Välkommen</div>
        <ul className="nav-menu">
            <NavLink to="/ " className="nav-contact"> Hem </NavLink>
            <NavLink to="/home " className="nav-contact"> Utforska </NavLink>
            <NavLink to="/main " className="nav-contact"> Kontakt </NavLink>
        </ul>
      
    </div>
  )
}

export default Navbar
