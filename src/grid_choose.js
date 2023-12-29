import React from "react";
import {Link} from 'react-scroll';


const COIN_LONG_DESCRIPTION_SECTION_TITLE = `Why should you adopt Tuna?`;

const COIN_LONG_DESCRIPTION_SECTION_DESC_P1 = `Tuna once led a tough life; neglected, unwanted, and ugly. Wherever Tuna treks, he broke mirrors and caused accidents as onlookers stared at him in disgust. "Abomination! Abomination!" they shouted, in disbelief that a higher power would have created something so hideous.`;
const COIN_LONG_DESCRIPTION_SECTION_DESC_P2 = `Against all odds, Tuna was adopted by a loving family, given an Instagram account, and blew up; Tuna quickly gained over <strong>1.9M followers</strong> by posting daily funny faces, outfits, and poses.
Even the ugliest dogs deserve loving homes to rise and meet their full potentials. For every Tuna that is adopted and loved, there are so many who go unadopted and unloved for life, and that's it.
Is today the day you decide to adopt your own <b>Tuna</b> to love and admire? To be forever-companions? Won't you adopt Tuna for what's underneath?
Might a lovable, famous Chiweenie hiding behind such a gruff, unkempt exterior? Tuna just wants to be your best friend. If not you, then who will?`;
const COIN_LONG_DESCRIPTION_SECTION_DESC_P3 = `Tuna <strong>can't wait</strong> to meet his new master and call your wallet home! 🐶`;

const COIN_LONG_DESCRIPTION_SECTION_BULLET_1_TEXT = `Solana's #1 Chiweenie`;
const COIN_LONG_DESCRIPTION_SECTION_BULLET_2_TEXT = `1.9M Instagram Followers`;
const COIN_LONG_DESCRIPTION_SECTION_BULLET_3_TEXT = `Addicting Tuna Meme-Maker (Exclusive AI Bot)`;
const COIN_LONG_DESCRIPTION_SECTION_BULLET_4_TEXT = `Notably Fugly Tunas: NFT Future Airdrop`;

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
