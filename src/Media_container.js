import React from "react";
import Rocket from "./images/rocket3.svg";
import Coins from "./images/coins.svg";
import Vote from "./images/vote.svg";

const WHY_THIS_COIN_TITLE_1 = `BUY $ROCKWIFHAT`;
const WHY_THIS_COIN_TITLE_2 = `IT'S ROCK SOLID`;
const WHY_THIS_COIN_TITLE_3 = `TELL YOUR FRIENDS`;

const WHY_THIS_COIN_DESC_1 = `Embrace $ROCKWIFHAT and join the journey of sophistication. Prepare for a stylish ascent to the pinnacle of crypto fashion; $ROCKWIFHAT is leading the way!
Engage with fellow connoisseurs in our Telegram and on X/Twitter Spaces, comparing the most fashionable rock formations and hat styles.`;

const WHY_THIS_COIN_DESC_2 = `$ROCKWIFHAT officially debuts with flair on Dec. 30, 2023 in honor of the stoic stone with the holy hat. 
Holders of $ROCKWIFHAT are privileged to exclusive 'Chic Pebbles' NFT drops, created by our in-house, avant-garde NFT artist. Don't forget the irresistibly sophisticated '/meme' command on Telegram, and much more in the pipeline.`;

const WHY_THIS_COIN_DESC_3 = `Holders take pride in welcoming the most stylish rock in the crypto world into our hearts and wallets. 
Tell everyone you know about the handsome chic flair of $ROCKWIFHAT. Spread it far and wide, and attract admirers for our favorite embodiment of hard elegance and dull wit. 
Use "/meme" in the Telegram to flaunt your finest $ROCKWIFHAT inspirations. You can win one million $ROCKWIFHAT from our weekly 'Top Hat Tuesday' contests which are managed entirely by the AI-powered RockWifHat bot! See it in action in our Telegram group.`;


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
