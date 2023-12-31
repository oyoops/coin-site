import React from "react";
//import WalletConnectButton from './WalletConnectButton';


// ROADMAP:
const ROADMAP_SECTION_TITLE = `RoadmapWifHat`;
const ROADMAP_SECTION_INTRODUCTION = `Charting $ROCKWIFHAT's journey through the Solana jeetcosystem:`;

// GREEN:
const ROADMAP_GREEN_TITLE = `Now Rocking & Rolling`;
const ROADMAP_GREEN_ITEM_1 = `Launch of $ROCKWIFHAT Token (TODAY!)`;
const ROADMAP_GREEN_ITEM_2 = `AI-Powered Meme Bot! (From Scratch + Trained Model = BASED DEV.)`;
const ROADMAP_GREEN_ITEM_3 = `Enhanced DEXScreener Profile`;
const ROADMAP_GREEN_ITEM_4 = `Launch of New Chic Social Media Channels and a Stylish Website`;

// YELLOW:
const ROADMAP_YELLOW_TITLE = `Just Around the Top Hat`;
const ROADMAP_YELLOW_ITEM_1 = `Creation of 'Chic Pebbles' NFTs by Renowned Artist Bok`;
const ROADMAP_YELLOW_ITEM_2 = `Achieving Listings on CMC & CoinGecko (Harder!)`;
const ROADMAP_YELLOW_ITEM_3 = `Hosting 'Top Hat Tuesday' (Community Contests & Giveaways)`;
const ROADMAP_YELLOW_ITEM_4 = `BirdEye Enhanced Info and Strategic Partnerships`;

// RED:
const ROADMAP_RED_TITLE = `A Stone's Throw Away`;
const ROADMAP_RED_ITEM_1 = `Airdrop 'Chic Pebbles' NFTs to $ROCKWIFHAT Holders`;
const ROADMAP_RED_ITEM_2 = `Expand Token Utility via AI-Powered Social Features`;
const ROADMAP_RED_ITEM_3 = `List on a centralized exchange!`;
const ROADMAP_RED_ITEM_4 = `Merch! Top Hats and Pet Rocks`;


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
