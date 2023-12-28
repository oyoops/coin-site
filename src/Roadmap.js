import React from "react";
//import WalletConnectButton from './WalletConnectButton';

class Roadmap extends React.Component {
  render() {
    return (
      <div className="roadmap">

        {/* ROADMAP: Header */}
        <div className="roadmap-header">
          <h2>
            Roadmap
          </h2>
        
          <p className="text text--standart text--regular ">
            Tuna's path to get adopted by everyone in the Solana ecosystem:
          </p>
        </div>

        {/* ROADMAP: Body */}
        <div className="road-body">
        
          {/* (1) [Green] "Complete" */}
          <div className="card card--white card-green">
            <div className="card__header">
              <h3>Complete</h3>
            </div>
            <ul>
              <li>Complete relaunch</li>
              <li>BirdEye & DEXScreener</li>
              <li>/supermeme and /tuna in TG</li>
              <li>New socials and website</li>
            </ul>
          </div>
        
          {/* (2) [Yellow] "In Progress" */}
          <div className="card card--white card-yellow">
            <div className="card__header">
              <h3>In Progress</h3>
            </div>
            <ul>
              <li>Artist creating 'Notably Fugly Tunas'</li>
              <li>Listings on CMC & CoinGecko</li>
              <li>Tuna Tuesday Events</li>
            </ul>
          </div>
        
          {/* (3) [Red] "Future" */}
          <div className="card card--secondary card-red">
            <div className="card__header">
              <h3>Future</h3>
            </div>
            <ul>
              <li>Notably Fugly Tuna Airdrop</li>
              <li>/supermeme 2.0 Utility</li>
            </ul>
          </div>
        
        </div>

      </div>
    );
  }
}

export default Roadmap;
