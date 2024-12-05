import './Footer.css'
import { FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='my-footing'>
        <div className='footer-line'>En Exempel Webbsida</div>
        <div className="footer-menu">
            
            
            
            <li className='foot-contact'><h3>Navigation </h3> <p>Hem</p> <p>Utforska</p> <p>Kontakt</p></li> 
            <li className='foot-contact'><h3>Partners</h3> <p>Försäljning AB</p> <p>Teknik AB</p> <p>Data AB</p></li> 
            <li className='foot-contact'><h3>Kommer snart</h3> <p>Vår Framtid <p>Veckobrev</p></p></li> 
            <div className='foot-icon'>
                <h3>Sociala medier:</h3>
                <FaYoutube className='youtube'/>
                <FaTwitter className='twitter'/>
                <FaFacebook className='facebook'/>
                <li/>
            </div>
        </div>
        <div className='footer-endline'>
        <li className='foot-contact'><h3>Telefon nr:</h3> <p>+46 123456789</p></li>
        <li className='foot-contact'><h3>Mail:</h3> <p>vårtföretags@email.com</p></li>
        </div>
      
    </div>
  )
}

export default Footer