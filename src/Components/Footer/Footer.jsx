import './Footer.css'
import { FaYoutube, FaTwitter, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='foot'>
        <div className='footer-line'>Vårt namn</div>
        <div className="footer-menu">
            <div className='foot-icon'>
                <h3>Social media:</h3>
                <FaYoutube className='youtube'/>
                <FaTwitter className='twitter'/>
                <FaFacebook className='facebook'/>
                <li/>
            </div>
            <li className='foot-contact'><h3>Telefon nr:</h3> <p>+46 123456789</p></li>
            <li className='foot-contact'><h3>Mail:</h3> <p>vårtföretags@email.com</p></li> 

        </div>
      
    </div>
  )
}

export default Footer