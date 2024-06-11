import { useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { Route,Routes } from "react-router-dom";


const App = () => {
  let heroData = [
    {text1:"Hej Gäster",text2:"testa runt"},
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
      <Routes>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />}/>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
