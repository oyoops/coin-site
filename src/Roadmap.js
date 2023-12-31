import React from "react";
//import WalletConnectButton from './WalletConnectButton';


// ROADMAP:
const ROADMAP_SECTION_TITLE = `Roadmap`;
const ROADMAP_SECTION_INTRODUCTION = `Charting RockWifHat's journey forward, tentatively:`;

// GREEN:
const ROADMAP_GREEN_TITLE = `Rocking & Rolling`;
const ROADMAP_GREEN_ITEM_1 = `Launch of $ROCKWIFHAT`;
const ROADMAP_GREEN_ITEM_2 = `AI-Powered Meme Bot`;
const ROADMAP_GREEN_ITEM_3 = `Enhanced DEXScreener`;
const ROADMAP_GREEN_ITEM_4 = `Social Media`;

// YELLOW:
const ROADMAP_YELLOW_TITLE = `Just Around the Hat`;
const ROADMAP_YELLOW_ITEM_1 = `NFTs by In-House NFT Artist`;
const ROADMAP_YELLOW_ITEM_2 = `CMC & CoinGecko Listings`;
const ROADMAP_YELLOW_ITEM_3 = `'Top Hat Tuesday' Giveaways`;
const ROADMAP_YELLOW_ITEM_4 = `Enhanced BirdEye/Dextools`;

// RED:
const ROADMAP_RED_TITLE = `Stone's Throw Away`;
const ROADMAP_RED_ITEM_1 = `NFT Airdrop to Holders`;
const ROADMAP_RED_ITEM_2 = `AI Social Utility 2.0 (Big)`;
const ROADMAP_RED_ITEM_3 = `CEX Listing`;
const ROADMAP_RED_ITEM_4 = `Top Hat & Pet Rock Merch`;


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
