import React from "react";
//import WalletConnectButton from './WalletConnectButton';


// ROADMAP:
const ROADMAP_SECTION_TITLE = `Roadmap`;
const ROADMAP_SECTION_INTRODUCTION = `Tuna's path to get adopted by everyone in the Solana ecosystem:`;

// GREEN:
const ROADMAP_GREEN_TITLE = `Complete`;
const ROADMAP_GREEN_ITEM_1 = `Launch Token`;
const ROADMAP_GREEN_ITEM_2 = `BirdEye & DEXScreener`;
const ROADMAP_GREEN_ITEM_3 = `AI Telegram Bot`;
const ROADMAP_GREEN_ITEM_4 = `New socials and website`;

// YELLOW:
const ROADMAP_YELLOW_TITLE = `In-Progress`;
const ROADMAP_YELLOW_ITEM_1 = `Artist creating Notably Fugly Tuna NFTs`;
const ROADMAP_YELLOW_ITEM_2 = `Listings on CMC & CoinGecko`;
const ROADMAP_YELLOW_ITEM_3 = `Tuna Tuesday Events`;
const ROADMAP_YELLOW_ITEM_4 = `Give to Charity`;

// RED:
const ROADMAP_RED_TITLE = `Future`;
const ROADMAP_RED_ITEM_1 = `Notably Fugly Tuna Airdrop`;
const ROADMAP_RED_ITEM_2 = `Add More Utility`;
const ROADMAP_RED_ITEM_3 = `Rug The Community`;
const ROADMAP_RED_ITEM_4 = `Flee The Country`;


class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap">

        {/* ROADMAP: Header */}
        <div className="roadmap-header">
          <h2>
            {`${ROADMAP_SECTION_TITLE}`}
          </h2>
        
          <p className="text text--standart text--regular ">
            {`${ROADMAP_SECTION_INTRODUCTION}`}
          </p>
        </div>

        {/* ROADMAP: Body */}
        <div className="road-body">
        
          {/* Complete [Green] */}
          <div className="card card--white card-green">
            <div className="card__header">
              <h3>{`${ROADMAP_GREEN_TITLE}`}</h3>
            </div>
            <ul>
              <li>{`${ROADMAP_GREEN_ITEM_1}`}</li>
              <li>{`${ROADMAP_GREEN_ITEM_2}`}</li>
              <li>{`${ROADMAP_GREEN_ITEM_3}`}</li>
              <li>{`${ROADMAP_GREEN_ITEM_4}`}</li>
            </ul>
          </div>
        
          {/* In-Progress [Yellow] */}
          <div className="card card--white card-yellow">
            <div className="card__header">
              <h3>{`${ROADMAP_YELLOW_TITLE}`}</h3>
            </div>
            <ul>
              <li>{`${ROADMAP_YELLOW_ITEM_1}`}</li>
              <li>{`${ROADMAP_YELLOW_ITEM_2}`}</li>
              <li>{`${ROADMAP_YELLOW_ITEM_3}`}</li>
              <li>{`${ROADMAP_YELLOW_ITEM_4}`}</li>
            </ul>
          </div>
        
          {/* Future [Red] */}
          <div className="card card--secondary card-red">
            <div className="card__header">
              <h3>{`${ROADMAP_RED_TITLE}`}</h3>
            </div>
            <ul>
              <li>{`${ROADMAP_RED_ITEM_1}`}</li>
              <li>{`${ROADMAP_RED_ITEM_2}`}</li>
              <li>{`${ROADMAP_RED_ITEM_3}`}</li>
              <li>{`${ROADMAP_RED_ITEM_4}`}</li>
            </ul>
          </div>
        
        </div>

      </div>
    );
  }
}

export default Roadmap;
