import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";


const App = () => {
  let heroData = [
    {text1:"Hej Quase",text2:"testa runt"},
    {text1:"Roligt att se er",text2:"och välkomna!"},
    {text1:"Gå runt",text2:"se allt"},
    {text1:"Vi har video",text2:"också"},
    {text1:"Hej då",text2:"och god natt"},
  ]
  const[heroCount,setHeroCount] = useState(0);
  const[playStatus,setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
      <Footer/>
    </div>
  )
}

export default App
