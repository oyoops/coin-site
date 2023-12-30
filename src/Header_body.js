import React from "react";
import chevronRight from "./images/chevron-right.svg";
import coin from "./images/coin-rocket.svg";
import {Link as LinkR} from 'react-scroll';
import Claim from "./images/claim-coin.svg";
import Typical from 'react-typical';
import axios from 'axios';
//import { motion } from 'framer-motion';

const BIRDEYE_API_KEY = process.env.REACT_APP_BIRDEYE_API_KEY;
const TOKEN_CIRCULATING_SUPPLY = parseFloat(process.env.REACT_APP_TOKEN_CIRCULATING_SUPPLY); // 9950000000 = 1 billion

const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS;

////const MAIN_SLOGAN_P1 = `Then it's the <b>perfect</b> time to give <b>Tuna, Solana's #1 Chiweenie</b> (chihuahua-wiener mix) his forever home!`;
const MAIN_SLOGAN_P1 = `Then it's the perfect time to give Tuna, Solana's #1 Chiweenie (chihuahua-wiener mix) a forever home.`;
const MAIN_SLOGAN_P2 = `Tuna has LAUNCHED! `;
const MAIN_SLOGAN_DEXSCREENER_LINK_TEXT = "DEXScreener"
const MAIN_SLOGAN_P3 = `It's time to adopt some Tunas!`;

const MAIN_SLOGAN_HOOK = `Tuna Time! ⏰`;


class Header_body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      price: 'Loading...'
    };
  }

  componentDidMount() {

    this.startRocketAnimation();

    const options = {
      method: 'GET',
      url: `https://public-api.birdeye.so/public/price?address=${TOKEN_ADDRESS}`,
      headers: {'X-API-KEY': `${BIRDEYE_API_KEY}`}
    };

    axios.request(options)
      .then((response) => {
        const priceValue = parseFloat(response.data.data.value);
        const marketCapValue = priceValue * TOKEN_CIRCULATING_SUPPLY;
        this.setState({ 
          price: priceValue.toFixed(8),
          marketCap: marketCapValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) // Format as currency
        });
    
        /*
        // New API call for holder count
        axios.get('API_ENDPOINT')
          .then((holderResponse) => {
            const holderCount = holderResponse.data.holderCount;
            this.setState({ holderCount });
          })
          .catch((holderError) => {
            console.error(holderError);
            this.setState({ holderCount: 'Unavailable' });
          });
        */
    
      })
      .catch((error) => {
        console.error(error);
        this.setState({ 
          price: 'Launching soon!',
          marketCap: 'Launching soon!'
        });
      });
  }

  // Animate the main page image
  startRocketAnimation() {
    const rocketElement = document.querySelector('.token_logo');

    const updateRocketPosition = () => {
      const x = Math.random() * window.innerWidth - window.innerWidth / 2; // Random X translation
      const y = Math.random() * window.innerHeight - window.innerHeight / 2; // Random Y translation
      const rotation = Math.random() * 360; // Random rotation

      rocketElement.style.transition = 'transform 5s linear';
      rocketElement.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    };

    setInterval(updateRocketPosition, 1250); // Update rocket position every 1.25 seconds
  }


  render() {
    return (
      <div className="header_body">
        <div className="grid_choose grid-gap--small">
          <div className="value-proposition">
            
            {/* MAIN TOKEN IMAGE */}
            <embed src={coin} className="token_logo"/> 
            {/*<embed src={coin} className="token_logo" style={tokenLogoStyle} />*/}

            {/* WISH YOU GOT INTO ____ ? */}
            <p className="value-proposition__text text text--small text--regular">
              Wish you got into <Typical className="typical"
                steps={['DOGE', 1500, 'BONK', 1500, 'MYRO', 1500, 'SAMO', 1500, 'LEIA', 1500, 'WIF', 1500]}
                loop={Infinity}
                wrapper="p"
              /> early?</p>

            {/* GREAT, BECAUSE... */}
            <p>
              {`${MAIN_SLOGAN_P1}`}
            </p>
            <p>  
              {`${MAIN_SLOGAN_P2}`}
              <a href={`https://dexscreener.com/solana/${TOKEN_ADDRESS}`}>{`${MAIN_SLOGAN_DEXSCREENER_LINK_TEXT}`}</a>
              <br></br>
              {`${MAIN_SLOGAN_P3}`}
            </p>
            
            {/* TOP MAIN HEADER */}
            <h2 className="value-proposition__title">
              {`${MAIN_SLOGAN_HOOK}`}
            </h2>

            {/* COIN STATS CONTAINER */}
            <div className="badge-container-add">
              <span className="badge-add badge--dark-add text--small">
                Token Address:
              </span>
              
              <span onClick={() => {navigator.clipboard.writeText(TOKEN_ADDRESS)}} className="text text--small text--regular text--white badge-add2">
                {`${TOKEN_ADDRESS}`}
              </span>  
            </div>
            
            {/*
            <div className="badge-container-hold">
              <span className="badge-hold badge--dark-hold text--small">
                Holders:
              </span>
              
              <span className="text text--small text--regular text--white badge-hold2">
                {`${this.state.holderCount}`}
              </span>
            </div>
            */}

            {/* Coin Price */}
            <div className="badge-container-price">
                <span className="badge-hold badge--dark-hold text--small">
                  Price:
                </span>
                <span className="text text--small text--regular text--white badge-hold2">
                  $ {`${this.state.price}`}
                  {/*${this.state.price}*/}
                </span>
            </div>

            {/* Market Cap */}
            <div className="badge-container-market-cap">
                <span className="badge-hold badge--dark-hold text--small">
                  Market Cap:
                </span>
                <span className="text text--small text--regular text--white badge-hold2">
                  ${this.state.marketCap}
                  {/*{this.state.marketCap}*/}
                </span>
            </div>

            {/* "Buy TUNA" Button */}
            <LinkR to="buyLink" spy={true} smooth={true}>
              <button className="value-proposition__button btn btn--flex btn--accent btn-buy" > 
                <span className="text--standart text--medium text-bold">
                  How to Buy
                </span>
                <div className="chiron-icon-container">
                  <img src={chevronRight} alt="Right Icon" />
                </div>
              </button>
            </LinkR>
            
            {/*
            <button className="value-proposition__button btn btn--flex btn--accent2 btn-whitepaper">
              <span className="text--standart text--medium text-bold">Whitepaper</span>
              <div className="paper-icon-container">
                <img src={paper} alt="Paper Icon" />
              </div>
            </button>
            */}
            {/*
            <button className="value-proposition__button btn btn--flex btn--accent btn-whitepaper btn-free">
              <span className="text--standart text--medium">Free Tokens</span>
              <div className="paper-icon-container">
                <img src={Claim} alt="Claim Icon" />
              </div>
            </button>
            */}
          </div>
        </div>
      </div>
    );
  }
}

export default Header_body;
