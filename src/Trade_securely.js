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
          Buy $TUNA
        </h2>
          <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=5dPFGRmgA9PdD3YTYCDnkbfRu4MBEEUL5akev5E7PAJZ&fixed=in" target="_blank" rel="noopener noreferrer">
          <button className="btn btn--accent text--small text--medium btn-top-right">
            Buy <embed src={Swap} className="swap" alt="swap icon"></embed>
          </button>
          </a>


        <h3 className="text--primary text-howBuy"> or... </h3>
        <div className="road-body">
        <div className="card card--secondary">
          <div className="currency-icon">
            <img alt="Phantom" src={MetaMask}/>
          </div>
          <div className="card__header">
            <h3>Create Phantom Wallet</h3>
          </div>
          <p className="text text-small text--regular card__text">
            Create a Phantom Wallet using either a desktop computer or an iOS/Android mobile device.
            This wallet will allow you to buy, sell, send, and receive TUNA as well as any other Solana token.
          </p>
          <a href="https://phantom.app/" nofollow="true" target="_blank" rel="noreferrer">
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">Create Wallet</span>
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
            <h3>Send SOL to your wallet</h3>
          </div>
          <p className="text text-small text--regular card__text">
          You can buy SOL directly from exchanges like Coinbase or from a DEX/decentralized exchange like Raydium.
          Make sure to use the Solana network when transferring SOL.
          </p>
        </div>
        <div className="card card--white">
          <div className="currency-icon">
            <img alt="Raydium" src={Pancake} />
          </div>
          <div className="card__header">
            <h3>Connect your wallet to Raydium</h3>
          </div>
          <p className="text text-small text--regular card__text">
          Swap, earn, and build on the leading decentralized crypto trading protocol. 
          Raydium allows you to swap any Solana token for $TUNA.
          </p>
          <a href="https://raydium.io/" nofollow="true" target="_blank" rel="noreferrer">
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">Raydium</span>
            <div className="chiron-icon-container">
              <img src={ChevronRight} alt="Right Icon" />
            </div>
          </button>
          </a>
        </div>
        <div className="card card--white">
          <div className="currency-icon2">
            <img alt="Swap TUNA" src={SwapECAT} />
          </div>
          <div className="card__header">
            <h3>Swap SOL for TUNA</h3>
          </div>
          <p className="text text-small text--regular card__text">
          You can start swapping as soon as you have SOL available!
          Press ‘Select a token’ and enter TUNA's contract address.
          </p>
          <button className="btn btn--flex btn--accent">
            <span className="text--standart text--medium text-bold">TUNA Token</span>
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
