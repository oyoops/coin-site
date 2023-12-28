import React from "react";
import Rocket from "./images/rocket3.svg";
import Coins from "./images/coins.svg";
import Vote from "./images/vote.svg";

class Media_container extends React.Component {
  render() {
    return (
      <div className="media-container">

        {/* (1) "ADOPT TUNA" */}
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Rocket" src={Rocket} />
            </div>
          </div>
          <div>
            <h2>ADOPT TUNA</h2>
            <div className="media-text-small">
              <p className="text text--muted text-media">
                Adopt Tuna the Chiweenie, then grab your keys for the rocket ship, because we're leaving for the moon soon; and <strong>Tuna is coming with us!</strong> 
                Compare Tunas with other adopters in the Telegram and on X/Twitter Spaces. 
              </p>
            </div>
          </div>
        </div>

        {/* (2) "HOLD" */}
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Coins" src={Coins} />
            </div>
          </div>
          <div>
            <h2>HOLD</h2>
            <div className="media-text-small">
              <p className="text text--muted text-media">
                TUNA officially launched on Dec. 22, 2023 after re-launching 3 times, each with a stronger community and higher LP & stronger rising floor than the last. 
                Tuna token holders are entitled to 'Neglected Fugly Tuna' (NFT) airdrops - already underway by our in-house, on-team NFT artist Bok - the amazingly addictive <strong>'/supermeme'</strong> Telegram command, and much more to come. 
              </p>
            </div>
          </div>
        </div>

        {/* (3) "SPREAD THE UGLY" */}
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Vote" src={Vote} />
            </div>
          </div>
          <div>
            <h2>SPREAD THE UGLY</h2>
            <div className="media-text-small">
              <p className="text text--muted text-media">
                We are proud to invite Solana's #1 Chiweenie into our hearts and wallets #ChadsBestFriend 🐶 
                Spread the word far and wide, finding more happy forever homes for more ugly, unwanted Tunas. 
                Use /supermeme to share your best Tunas to win millions of $TUNA from weekly Tuna Tuesday giveaways! 
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Media_container;
