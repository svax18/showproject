import './Hero.css'
import arrow_btn from '../../assets/arrow_btn.png'
import play_icon from '../../assets/play_icon.png'
import pause_icon from '../../assets/pause_icon.png'

const Hero = ({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
        <ul className="hero-dots">
                <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot alice": "hero-dot"}></li>
                <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot alice": "hero-dot"}></li>
                <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot alice": "hero-dot"}></li>
                <li onClick={()=>setHeroCount(3)} className={heroCount===3?"hero-dot alice": "hero-dot"}></li>
                <li onClick={()=>setHeroCount(4)} className={heroCount===4?"hero-dot alice": "hero-dot"}></li>
            </ul>
        
        <div className="hero-dot-play">
        <div className="hero-explore">
            <p>Utforska</p>
            <img src={arrow_btn} alt=""/>
        </div>
            
            <div className="hero-play">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause_icon:play_icon} alt=""/>
                <p>Vår video</p>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
