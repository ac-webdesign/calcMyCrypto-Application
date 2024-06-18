import React from 'react'
import './calculator.css'
import calcmycryptoLogo from '../images/calcmycryptoLogo.png'
import { NavLink } from 'react-router-dom'
export const Calculator = () => {

    function ConvertCryptoToFiat() {
        const crypto = document.getElementById("crypto").value;
        const fiat = document.getElementById("fiat").value;
        const amount = document.getElementById("crypto-amount").value;
        const apiKey = "CG-xJwpcpnSEXpXyxhkBdHuqJnU";
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${fiat}&api_key=${apiKey}`;


        fetch(url)
            .then(response => response.json())
            .then(data => {

                const conversionRate = data[crypto][fiat];
                const convertedAmount = amount * conversionRate;
                document.getElementById("currency-result").value = convertedAmount +` ${fiat.toUpperCase()}`;
            })
            .catch(error => console.error("Error:", error));

            
    }
    
  return (
    <div className='mainMenu'>
        <div className="calculator-container">
            <div class="select-crypto">
                <label for="crypto">Select your crypto</label>
                <select onChange={ConvertCryptoToFiat} name="cryptocurrencies" id="crypto" class="input-field">
                    <option value="bitcoin">Bitcoin</option>
                    <option value="litecoin">Litecoin</option>
                    <option value="dogecoin">Dogecoin</option>
                </select>
            </div>
            <div class="enter-amount">
                <label for="crypto-amount">Enter amount</label>
                <input onChange={ConvertCryptoToFiat} type="text"  id="crypto-amount" class="input-field" placeholder='BTC'/>
            </div>
            <div class="select-fiat">
                <label for="fiat">Select your fiat currency</label>
                <select onChange={ConvertCryptoToFiat} name="fiat" id="fiat" class="input-field">
                    <option value="eur">Euro</option>
                    <option value="usd">Dollars</option>
                    <option value="rub">Russian Ruble</option>
                </select>
            </div>
            <div class="result">
                <label for="currency-result" class="result-label">Currency amount</label>
                <input type="text" placeholder="EUR" id="currency-result" class="input-field"/>
            </div>
            <NavLink to='../swapcalculator' className='navlink'>
                <div className="swap-button"><span>SWAP</span>
                </div>
            </NavLink>
        </div>
        <img src={calcmycryptoLogo} alt="logo" className='logo-bottom'/>

    </div>
  )
}
