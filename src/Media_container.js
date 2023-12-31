import React from "react";
import Rocket from "./images/rocket3.svg";
import Coins from "./images/coins.svg";
import Vote from "./images/vote.svg";

const WHY_THIS_COIN_TITLE_1 = `BUY $ROCKWIFHAT`;
const WHY_THIS_COIN_TITLE_2 = `IT'S ROCK SOLID`;
const WHY_THIS_COIN_TITLE_3 = `TELL YOUR FRIENDS`;

const WHY_THIS_COIN_DESC_1 = `Embrace RockWifHat and admire his hardness and sophistication with the community. $ROCKWIFHAT is leading the way!`;
const WHY_THIS_COIN_DESC_2 = `We welcome RockWifHat in the crypto world into our wallets. 
Use "/meme" in the Telegram for the finest RockWifHat creations, cooked up for you by the AI bot.`;
const WHY_THIS_COIN_DESC_3 = `Tell your friends and grandparents about RockWifHat. Meet fellow RockWifHat connoisseurs in Telegram and our X Spaces. And more in the pipeline!`;


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
