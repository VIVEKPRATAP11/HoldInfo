import React from "react";
import { Link } from "react-router-dom";
const Header = () => {

  const themeButton = () =>{

    
    document.body.classList.toggle("for-light-theme")
    if(document.body.classList.contains("for-light-theme"))
    {
      document.body.querySelector(".dotButton").classList.add("dotButton2")  
      console.log("entered")
    }
    else
    {
      document.body.querySelector(".dotButton").classList.remove("dotButton2") 
    }
 
  }
  
  return (
    <>
      <div className="Header-main display-between displayFlexCenter">
        <div>
          <img src="images/HODLINFO.png" alt="logo" id="logo"/>
        </div>
        <div>
          <select name="" className="pointer" id="">
            <option value="">INR</option>
          </select>
          <select name="rahul" id="" className="pointer">
            <option value="">BTC</option>
            <option value="">ETH</option>
            <option value="">USDT</option>
            <option value="">XRP</option>
            <option value="">TRX</option>
            <option value="">DASH</option>
            <option value="">ZEC</option>
            <option value="">XEM</option>
            <option value="">IOST</option>
            <option value="">WIN</option>
            <option value="">BTT</option>
            <option value="">WRX</option>
          </select>
          <a
            href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn"
            target="_blank" id="btc"
          >
            BUY BTC
          </a>
        </div>
        <div className="displayFlexCenter">
            <span className="timerOut displayGridCenter">
                <p id="timer">60</p  >
            </span>
            <span >
                <p className="tele pointer">Connect Telegram</p>
            </span>
            <span  className="themeButton pointer">
                <div className="dotButton forButton" onClick={themeButton}></div>
            </span>
        </div>
      </div>
    </>
  );
};

export default Header;
