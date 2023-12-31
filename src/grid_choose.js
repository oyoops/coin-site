import React from "react";
import {Link} from 'react-scroll';


const COIN_LONG_DESCRIPTION_SECTION_TITLE = `Unearth RockWifHat with us!`;

const COIN_LONG_DESCRIPTION_SECTION_DESC_P1 = `In a world where ordinary rocks are too often overlooked, RockWifHat stands out with its exquisite, regal top hat. This isn't just a rock, nor is it just a rock with a hat; $ROCKWIFHAT is a bona fide fashion statement - a symbol of enduring grace amidst the turbulent Solana landscape of jeets and rugs. This rock, however, is rock-solid (and has great fashion). ETH maxis may scoff, but aficionados know: $ROCKWIFHAT is more than a token. This is the beginning of a worldwide movement to ensure that overlooked inanimate objects everywhere deserve to be WIF HAT just as much (if not more than) as our pets.`;

const COIN_LONG_DESCRIPTION_SECTION_DESC_P2 = `The journey of $ROCKWIFHAT is a tale of one flamboyant pebble named Rocky. Rocky's story captivates all who hear it, giving hope to all inanimate objects without hats that so desire to obtain and don one. Rocky, now a stoic stone, with his beautiful wife Roxanne, represent the epitome of high fashion. With each new $ROCKWIFHAT supporter, Rocky carves deeper his place in the annals of meme token history... and not just as a digital asset, but as an icon of style. Embracing $ROCKWIFHAT means embracing a lifestyle where wit is as sharp as a chisel on stone, and elegance is as natural as Rocky's smooth, luscious rock skin.`;

const COIN_LONG_DESCRIPTION_SECTION_DESC_P3 = `Ready to make a bold statement in your portfolio? $ROCKWIFHAT awaits its grand entrance into your wallet, promising a blend of rock 🪨, top hat 🎩, ... oh, and AI too! Please help to spread Rocky's story by using the "/meme" and "/chat" Telegram commands.`;

const COIN_LONG_DESCRIPTION_SECTION_BULLET_1_TEXT = `AI-Powered RockWifHat! Use in Telegram.`;
const COIN_LONG_DESCRIPTION_SECTION_BULLET_2_TEXT = `'Chic Pebbles' NFTs Under Development.`;
const COIN_LONG_DESCRIPTION_SECTION_BULLET_3_TEXT = `Rocks Don't Normally Wear Hats.`;
const COIN_LONG_DESCRIPTION_SECTION_BULLET_4_TEXT = `Rocky Wears a Top Hat (#1 Hat Variety).`;

const COIN_LONG_DESCRIPTION_SECTION_GO_TO_TOKENOMICS_BUTTON_TEXT = `Tokenomics`;


class Grid_choose extends React.Component {
  render() {
    return (
      <div className="grid_choose">
        <div className="card_why">
          <div className="banner_grid">
            <h2 className="banner__title">
              {`${COIN_LONG_DESCRIPTION_SECTION_TITLE}`}
            </h2>
            
            <p className="banner__text text text--small text--regular text--muted why-text">
              {`${COIN_LONG_DESCRIPTION_SECTION_DESC_P1}`}
            </p>

            <p className="banner__text text text--small text--regular text--muted why-text">
              {`${COIN_LONG_DESCRIPTION_SECTION_DESC_P2}`}
            </p>

            <p className="banner__text text text--small text--regular text--muted why-text">
              {`${COIN_LONG_DESCRIPTION_SECTION_DESC_P3}`}
            </p>
            
            <ul className="whyList">
              <li className="nav__list__item_2 text text--small text--regular">{`${COIN_LONG_DESCRIPTION_SECTION_BULLET_1_TEXT}`}</li>
              <li className="nav__list__item_2 text text--small text--regular">{`${COIN_LONG_DESCRIPTION_SECTION_BULLET_2_TEXT}`}</li>
              <li className="nav__list__item_2 text text--small text--regular">{`${COIN_LONG_DESCRIPTION_SECTION_BULLET_3_TEXT}`}</li>
              <li className="nav__list__item_2 text text--small text--regular">{`${COIN_LONG_DESCRIPTION_SECTION_BULLET_4_TEXT}`}</li>
            </ul>
            <Link to="features" spy={true} smooth={true}>
              <button className="btn btn--accent">
                <span className="text--standart text--medium text-bold">
                  {`${COIN_LONG_DESCRIPTION_SECTION_GO_TO_TOKENOMICS_BUTTON_TEXT}`}
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Grid_choose;
