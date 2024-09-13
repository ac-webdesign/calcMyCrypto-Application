import React from 'react';
import './homepage.css';
import calcmycryptoLogo from '../images/calcmycryptoLogo.png'
import { NavLink } from 'react-router-dom';
export const Homepage = () => {
  return (
    <div className="mainMenu" id="main-menu">
        <div className="main-container">
            <div><h2>MAIN MENU</h2></div>

            <NavLink to='calculator'>
                <div className="calculator" id="calculator-click">
                    <i className="fas fa-calculator"></i>
                    <span>CRYPTO CALCULATOR</span>
                </div>
            </NavLink>
           
            <div className="buySell">
                <NavLink to='buycrypto'>
                    <div className="buyCrypto">
                        <i className="fas fa-coins"></i>
                        <span>BUY CRYPTO</span>
                    </div>
                </NavLink>

                <NavLink to='sellcrypto' >
                    <div className="sellCrypto">
                        <i className="fas fa-hand-holding-usd"></i>
                        <span>SELL CRYPTO</span>
                    </div>
                </NavLink>
            </div>

            <NavLink to='news'>
                <div className="news">
                    <i className="fas fa-newspaper"></i>
                    <span>NEWS</span>
                </div>
            </NavLink>

            <NavLink to='settings'>
                <div className="settings">
                    <i className="fas fa-cog"></i>
                    <span>SETTINGS</span>
                </div>
            </NavLink>
            <img src={calcmycryptoLogo} alt="logo" className='logo-bottom'/>

        </div>

    </div>
  )
}
