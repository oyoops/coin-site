import React from "react";
import Logo from "./images/Coin-Logov2.svg";
import Twitter from "./images/twitter.svg";
import Telegram from "./images/telegram.svg";
import Swap from "./images/swap-white.svg";
import {Link as LinkR} from 'react-scroll';
import { Link } from "react-router-dom";

class Header_top extends React.Component {
  render() {
    
    const contractAddressLiveTrading = process.env.REACT_APP_RAYDIUM_CONTRACT_ADDRESS;

    return (
      <div className="header_top">

        {/* COIN LOGO */}
        <div className="logo">
          <embed src={Logo} alt="TUNA Logo" />
          <span className="logo-topleft">
            {/* TUNA */}
          </span>
        </div>


        {/* Nav Links */}
        <nav className="header-nav">

          {/* Team */}
          <ul className="list list--inline">
            <LinkR to="teamLink" spy={true} smooth={true}>
              <li className="list__item text text--small text--regular">
                Team
              </li>
            </LinkR>

          {/* Features */}
            <LinkR to="features" spy={true} smooth={true}>
              <li className="list__item text text--small text--regular">
                Features
              </li>
            </LinkR>
          </ul>

          {/* Twitter */}
          <a href="https://twitter.com/TUNA_Solana" target="_blank" rel="noopener noreferrer">
            <form>
              <button className="btn btn--link text text--small text--medium" formaction="https://twitter.com/TUNA_Solana">
                <img className ="discord" alt="Twitter" src={Twitter}></img>
              </button>
            </form>
          </a>
          
          {/* Telegram */}
          <a href="https://t.me/TunaSolana" target="_blank" rel="noopener noreferrer">
            <form>
              <button className="btn btn--link text text--small text--medium" formaction="https://t.me/TunaSolana">
                <img className ="discord" alt="Telegram" src={Telegram}></img>
              </button>
            </form>
          </a>

          {/* Dapp ('Kennel') */}
          <Link to="dApp">
            <button className="btn btn--accent2 text--small text--medium btn-top-app">
              Kennel
            </button>
          </Link>

          <span className="vertical-line" />

          {/* Raydium ("Buy") */}
          <a href={`https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${contractAddressLiveTrading}&fixed=in`} target="_blank" rel="noopener noreferrer">
            <button className="btn btn--accent text--small text--medium btn-top-right">
              Buy
              <embed src={Swap} className="swap" alt="swap icon"></embed>
            </button>
          </a>
          
          {/* Twitter (inactive) */}
          <form>
            <button className="btn btn--link text text--small text--medium"  formaction="https://twitter.com/TUNA_Solana">
              <img className ="discord2" alt="Twitter" src={Twitter}></img>
            </button>
          </form>
          
          {/* Telegram (inactive) */}
          <form>
            <button className="btn btn--link text text--small text--medium" formaction="https://t.me/TunaSolana">
              <img className ="discord2" alt="Telegram" src={Telegram}></img>
            </button>
          </form>

        </nav>
      </div>
      
    );
  }
}
function dapp() {
  return <h2>dapp</h2>;
}
export default Header_top;
