import React from "react";
import MetaMask from "./images/metamask.svg";
import BNB from "./images/bnb.svg";
import Pancake from "./images/pancake.svg";
import SwapECAT from "./images/bnb-cat.svg";
import Swap from "./images/swap-white.svg";
import ChevronRight from "./images/chevron-right.svg";

class Trade_securely extends React.Component {
  render() {
    return (
      <section className="trade-securely">
        <h2 className="text--primary text-howBuy" id='buyLink'>
          How to Buy RockWifHat
        </h2>
        <a href={`https://raydium.io/swap/?inputCurrency=sol&outputCurrency=${process.env.REACT_APP_TOKEN_ADDRESS}&fixed=in`} target="_blank" rel="noopener noreferrer">
          <button className="btn btn--accent text--small text--medium btn-top-right">
            Buy Now <img src={Swap} className="swap" alt="swap icon"/>
          </button>
        </a>


        <h3 className="text--primary text-howBuy"> or... </h3>
        <div className="road-body">
        <div className="card card--secondary">
          <div className="currency-icon">
            <img alt="Phantom" src={MetaMask}/>
          </div>
          <div className="card__header">
            <h3>Make a Phantom Wallet</h3>
          </div>
          <p className="text text-small text--regular card__text">
            Download the Phantom wallet on either desktop (browser plugin) or iOS/Android.
            This is a Solana wallet allowing you to buy, sell, send, and receive $ROCKWIFHAT and any other Solana-based tokens.
          </p>
          <a href="https://phantom.app/" nofollow="true" target="_blank" rel="noreferrer">
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">Phantom</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
          </a>
        </div>
        <div className="card card--white">
          <div className="currency-icon">
            <img alt="SOL" src={BNB} />
          </div>
          <div className="card__header">
            <h3>Send SOL to Wallet</h3>
          </div>
          <p className="text text-small text--regular card__text">
            You can buy SOL from Coinbase or another exchange, then send it directly to your Phantom public address.
            Once it arrives, use Phantom's browser tab to visit Raydium where you can swap SOL for $ROCKWIFHAT.
          </p>
        </div>
        <div className="card card--white">
          <div className="currency-icon">
            <img alt="Raydium" src={Pancake} />
          </div>
          <div className="card__header">
            <h3>Connect Wallet to Raydium</h3>
          </div>
          <p className="text text-small text--regular card__text">
            Raydium is Solana's most popular DeFi protocol. 
            It allows you to easily swap SOL or any other Solana token for $ROCKWIFHAT.
          </p>
          {/*<a href="https://raydium.io/" nofollow="true" target="_blank" rel="noreferrer">
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">Raydium</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
          </a>*/}
        </div>
        <div className="card card--white">
          <div className="currency-icon2">
            <img alt="Swap TUNA" src={SwapECAT} />
          </div>
          <div className="card__header">
            <h3>Get RockWifHat</h3>
          </div>
          <p className="text text-small text--regular card__text">
            Copy token address from the top of this page. Then, on Raydium, tap ‘Select a token’ and paste.
          </p>
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">Buy Now</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
        </div>
      </div>

      </section>
    );
  }
}

export default Trade_securely;
