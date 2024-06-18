import React from 'react'
import './settings.css'
import calcmycryptoLogo from '../images/calcmycryptoLogo.png'
import { NavLink } from 'react-router-dom'
export const Settings = () => {
  return (
    <div className='mainMenu'>
        <h2>Settings</h2>
        <div className="settings-container">
            <div className="select">
                    <label for="fiat">Preferred Currency</label>
                    <select  name="fiat" id="fiat" class="input-field">
                        <option value="eur">Euro</option>
                        <option value="usd">Dollars</option>
                        <option value="rub">Russian Ruble</option>
                    </select>
                </div>
                <div className="select">
                    <label for="crypto">Preferred Cryptocurrency</label>
                    <select  name="cryptocurrencies" id="crypto" class="input-field">
                        <option value="bitcoin">Bitcoin</option>
                        <option value="litecoin">Litecoin</option>
                        <option value="dogecoin">Dogecoin</option>
                    </select>
                </div>
                <div className="select">
                    <label for="language">Language</label>
                    <select  name="cryptocurrencies" id="language" class="input-field">
                        <option value="english">English</option>
                        <option value="greek">Ελληνικά</option>
                        <option value="greek">Русский</option>
                        <option value="korean">한국인</option>
                    </select>
                </div>
                <NavLink to='../' className='navlink'>
                    <div className="swap-button"><span>HOME</span></div>
                    
                </NavLink>
        </div>
        <img src={calcmycryptoLogo} alt="logo" className='logo-bottom'/>
    </div>
  )
}
