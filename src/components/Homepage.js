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
                <div className="calculator" id="calculator-click"><span>CRYPTO CALCULATOR</span>
                </div>
            </NavLink>
           
            <div className="buySell">
                <NavLink to='buycrypto'>
                    <div className="buyCrypto"><span>BUY CRYPTO</span>
                    </div>
                </NavLink>

                <NavLink to='sellcrypto' >
                    <div className="sellCrypto">
                        <span>SELL CRYPTO</span>
                    </div>
                </NavLink>
            </div>

            <NavLink to='news'>
                <div className="news"><span>NEWS</span>
                </div>
            </NavLink>

            <NavLink to='settings'>
                <div className="settings"><span>SETTINGS</span>
                </div>
            </NavLink>
        </div>
        <img src={calcmycryptoLogo} alt="logo" className='logo-bottom'/>

    </div>
  )
}
