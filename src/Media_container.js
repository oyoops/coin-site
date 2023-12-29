import React from "react";
import Rocket from "./images/rocket3.svg";
import Coins from "./images/coins.svg";
import Vote from "./images/vote.svg";

const WHY_THIS_COIN_TITLE_1 = `ADOPT TUNA`;
const WHY_THIS_COIN_TITLE_2 = `HOLD`;
const WHY_THIS_COIN_TITLE_3 = `SPREAD THE UGLY`;

const WHY_THIS_COIN_DESC_1 = `Adopt Tuna the Chiweenie, then grab your keys for the rocket ship, because we're leaving for the moon soon; and <strong>Tuna is coming with us!</strong> 
Compare Tunas with other adopters in the Telegram and on X/Twitter Spaces.`;
const WHY_THIS_COIN_DESC_2 = `TUNA officially launched on Dec. 22, 2023 after re-launching 3 times, each with a stronger community and higher LP & stronger rising floor than the last. 
Tuna token holders are entitled to 'Neglected Fugly Tuna' (NFT) airdrops - already underway by our in-house, on-team NFT artist Bok - the amazingly addictive <strong>'/supermeme'</strong> Telegram command, and much more to come.`;
const WHY_THIS_COIN_DESC_3 = `We are proud to invite Solana's #1 Chiweenie into our hearts and wallets #ChadsBestFriend 🐶 
Spread the word far and wide, finding more happy forever homes for more ugly, unwanted Tunas. 
Use /supermeme to share your best Tunas to win millions of $TUNA from weekly Tuna Tuesday giveaways!`;



class Media_container extends React.Component {
  render() {
    return (
      <div className="media-container">

        {/* WHY THIS COIN (1/3) */}
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Rocket" src={Rocket} />
            </div>
          </div>
          <div>
            <h2>{`${WHY_THIS_COIN_TITLE_1}`}</h2>
            <div className="media-text-small">
              <p className="text text--muted text-media">
                {`${WHY_THIS_COIN_DESC_1}`} 
              </p>
            </div>
          </div>
        </div>

        {/* WHY THIS COIN (2/3) */}
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Coins" src={Coins} />
            </div>
          </div>
          <div>
            <h2>{`${WHY_THIS_COIN_TITLE_2}`}</h2>
            <div className="media-text-small">
              <p className="text text--muted text-media">
                {`${WHY_THIS_COIN_DESC_2}`} 
              </p>
            </div>
          </div>
        </div>

        {/* WHY THIS COIN (3/3) */}
        <div className="media">
          <div className="icon-container">
            <div className="media-icon">
              <img alt="Vote" src={Vote} />
            </div>
          </div>
          <div>
            <h2>{`${WHY_THIS_COIN_TITLE_3}`}</h2>
            <div className="media-text-small">
              <p className="text text--muted text-media">
                {`${WHY_THIS_COIN_DESC_3}`} 
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Media_container;
