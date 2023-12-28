import React from "react";
import {Link} from 'react-scroll';

class Grid_choose extends React.Component {
  render() {
    return (
      <div className="grid_choose">
        <div className="card_why">
          <div className="banner_grid">
            <h2 className="banner__title">
              Why should you adopt Tuna?
            </h2>
            
            <p className="banner__text text text--small text--regular text--muted why-text">
              Tuna once led a tough life; neglected, unwanted, and ugly. Wherever Tuna treks, he broke mirrors and caused accidents as onlookers stared at him in disgust. "Abomination! Abomination!" they shouted, in disbelief that a higher power would have created something so hideous.
            </p>

            <p className="banner__text text text--small text--regular text--muted why-text">
              Against all odds, Tuna was adopted by a loving family, given an Instagram account, and blew up; Tuna quickly gained over <strong>1.9M followers</strong> by posting daily funny faces, outfits, and poses.
              Even the ugliest dogs deserve loving homes to rise and meet their full potentials. For every Tuna that is adopted and loved, there are so many who go unadopted and unloved for life, and that's it.
              Is today the day you decide to adopt your own <b>Tuna</b> to love and admire? To be forever-companions? Won't you adopt Tuna for what's underneath?
              Might a lovable, famous Chiweenie hiding behind such a gruff, unkempt exterior? Tuna just wants to be your best friend. If not you, then who will?
            </p>

            <p className="banner__text text text--small text--regular text--muted why-text">
              Tuna <strong>can't wait</strong> to meet his new master and call your wallet home! 🐶
            </p>
            
            <ul className="whyList">
              <li className="nav__list__item_2 text text--small text--regular">Solana's #1 Chiweenie</li>
              <li className="nav__list__item_2 text text--small text--regular">1.9M Instagram Followers</li>
              <li className="nav__list__item_2 text text--small text--regular">Addicting Tuna Meme-Maker (Custom AI Bot)</li>
              <li className="nav__list__item_2 text text--small text--regular">'Notably Fugly Tunas' NFTs <b>(future airdrop!)</b></li>
            </ul>
            <Link to="features" spy={true} smooth={true}>
              <button className="btn btn--accent">
                <span className="text--standart text--medium text-bold">
                  More...
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
