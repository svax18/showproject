import './Main.css'
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Main() {
    
    const [hook, setHook] = useState("Skicka in er information för att kontakta vår personal");

    return(
        
        <div>
            
            <form className="contact">
            <h1>Kontakta oss</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius omnis nam fugiat quas saepe esse eaque facere voluptatum cumque repudiandae optio mollitia alias, maxime fugit, libero consectetur molestiae atque beatae?
                </p>
                    
                <div>
                <label htmlFor="name">Namn </label>
                <input type="text" placeholder="Skriv in Namn" />
                </div>
                <div>
                <label htmlFor="name">Email  </label>
                <input type="text" placeholder="Skriv in Email" />
                </div>
                <div>
                <label htmlFor="name">Adress </label>
                <input type="text" placeholder="Skriv in Adress" />
                </div>
                <div className="btnBox">
          <div
            className="btn"
            onClick={() => setHook("Tack för att ni har kontaktat oss!")}
          >
            <NavLink
              to="/main"
              className="NavItem"
              activeClassName="moreinfo"
            >
              Skicka Formulär
            </NavLink>
          </div>
        </div>
        <p> {hook}</p>
        </form>
            
            
        
        </div>
    );
};

export default Main;