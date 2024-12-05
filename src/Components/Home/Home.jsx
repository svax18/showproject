import React from "react";
import './Home.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import Background from "../Background/Background";
import Button from './button.jsx'
import ButtonP from './buttonP.jsx'
//import Next from '/button.jsx'




const Home = () => {
    
    
    
    return(
         <div className="cards">
            
            <div className="slider">
                <div className="items">
                    <div className="item1" >
                        
                        <div className="content">
                            <div className="name">Snö och Natt</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat a earum, necessitatibus sit iure quibusdam, rem nemo, voluptate sint reprehenderit quia? Autem esse repellat quasi temporibus cumque mollitia? Similique?</div>
                            <button>se mer</button>
                        </div>
                    </div>
                </div>
                
                <div className="items">
                    <div className="item2" >
                        
                        <div className="content">
                            <div className="name">Berg och Natt</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat a earum, necessitatibus sit iure quibusdam, rem nemo, voluptate sint reprehenderit quia? Autem esse repellat quasi temporibus cumque mollitia? Similique?</div>
                            <button>se mer</button>
                        </div>
                    </div>
                </div>

                    <div className="items">
                        <div className="item3" >
                            <div className="content">
                                <div className="name">Norrljusen</div>
                                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat a earum, necessitatibus sit iure quibusdam, rem nemo, voluptate sint reprehenderit quia? Autem esse repellat quasi temporibus cumque mollitia? Similique?</div>
                                <button>se mer</button>
                            </div>
                        </div>
                    </div>

                    <div className="items">
                        <div class="item4" >
                        
                        <div className="content">
                            <div className="name">Dimmig Natt</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat a earum, necessitatibus sit iure quibusdam, rem nemo, voluptate sint reprehenderit quia? Autem esse repellat quasi temporibus cumque mollitia? Similique?</div>
                            <button>se mer</button>
                        </div>
                        </div>
                    </div>

                    <div className="items">
                        <div class="item5" >
                        
                        <div className="content">
                            <div className="name">Dagen Börjar</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat a earum, necessitatibus sit iure quibusdam, rem nemo, voluptate sint reprehenderit quia? Autem esse repellat quasi temporibus cumque mollitia? Similique?</div>
                            <button>se mer</button>
                        </div>
                        </div>
                    </div>

                    <div className="items">
                        <div class="item6" >
                        
                        <div className="content">
                            <div className="name">Norrljusen</div>
                            <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat a earum, necessitatibus sit iure quibusdam, rem nemo, voluptate sint reprehenderit quia? Autem esse repellat quasi temporibus cumque mollitia? Similique?</div>
                            <button>se mer</button>
                        </div>
                        </div>
                    </div>
            </div>

            <div className="button">
                <ButtonP/>
                <Button/>
                
                
            </div>
            
            
            
        </div>
            
        
    );
};

export default Home;