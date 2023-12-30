import React from "react";
import background6 from "./images/background-item-6.svg";
import background7 from "./images/background-item-7.svg";

const TOKENOMICS_SECTION_TITLE = `Tuna Tokenomics`;
const TOKENOMICS_SECTION_SUBTITLE = `Distribution`;

const TOKENOMICS_SECTION_TOTAL_SUPPLY_TITLE = `Tuna Supply`;
const TOKENOMICS_SECTION_TOTAL_SUPPLY_VALUE = `1 Bil.`;

const TOKENOMICS_SECTION_LOT_1_TITLE = `Airdrop`;
const TOKENOMICS_SECTION_LOT_1_VALUE = `75%`;

const TOKENOMICS_SECTION_LOT_2_TITLE = `Marketing`;
const TOKENOMICS_SECTION_LOT_2_VALUE = `3%`;

const TOKENOMICS_SECTION_LOT_3_TITLE = `Team`;
const TOKENOMICS_SECTION_LOT_3_VALUE = `9%`;

const TOKENOMICS_SECTION_LOT_4_TITLE = `Burnt Liquidity`;
const TOKENOMICS_SECTION_LOT_4_VALUE = `13%`;
const TOKENOMICS_SECTION_LOT_4_SUBTEXT = `Raydium`;


class Features extends React.Component {
  render() {
    return (
      <section className="features">
        <h1>
          {`${TOKENOMICS_SECTION_TITLE}`}
        </h1>
        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">{`${TOKENOMICS_SECTION_SUBTITLE}`}</h2>

            {/*<p className="banner__text text text--small text--regular text--muted">
              No further minting is possible.
              Ownership was <u>renounced</u>!
            </p>*/}

            <div className="road-body features-card">
            <div className="card card--secondary card--white">
          <div className="card__header">
            <h3> {`${TOKENOMICS_SECTION_TOTAL_SUPPLY_TITLE}`} </h3>
          </div>
          <h2>{`${TOKENOMICS_SECTION_TOTAL_SUPPLY_VALUE}`}</h2>
        </div>
        <div className="card card--secondary card--white">
          <div className="card__header">
            <h3> {`${TOKENOMICS_SECTION_LOT_1_TITLE}`} </h3>
          </div>
          <h2>{`${TOKENOMICS_SECTION_LOT_1_VALUE}`}</h2>
        </div>
        <div className="card card--white card--white">
          <div className="card__header">
            <h3> {`${TOKENOMICS_SECTION_LOT_2_TITLE}`} </h3>
          </div>
          <h2>{`${TOKENOMICS_SECTION_LOT_2_VALUE}`}</h2>
        </div>
        <div className="card card--white card--white">
          <div className="card__header">
            <h3> {`${TOKENOMICS_SECTION_LOT_3_TITLE}`} </h3>
          </div>
          <h2>{`${TOKENOMICS_SECTION_LOT_3_VALUE}`}</h2>
        </div>
        <div className="card card--white card--white">
          <div className="card__header">
            <h3> {`${TOKENOMICS_SECTION_LOT_4_TITLE}`} </h3>
          </div>
          <h2>{`${TOKENOMICS_SECTION_LOT_4_VALUE}`}</h2>
          <p>
            <i>{`${TOKENOMICS_SECTION_LOT_4_SUBTEXT}`}</i>
          </p>
        </div>
        </div>
          </div>
        </div>

        {/*
        <div className="banner-bottom-margin">
          <div className="banner--left">

            <h2 className="banner__title">Rewards for Community</h2>
            
            <p className="banner__text text text--small text--regular text--muted">
              You can earn $TUNA tokens by creating <strong>/supermemes</strong> in the Telegram if yours is voted #TunaOfTheWeek by the community.
              <br></br>Reward distributions occur weekly on Tuna Tuesdays at 8:00 PM EST (Wed. 01:00 UTC).
              <br></br>Simply type <strong>'/supermeme Tuna [detailed description]' in the TG to enter.</strong>
            </p>

            <p>
              <i><strong>Example:</strong> '/supermeme Tuna riding a rocket over of a volcano erupting with bitcoin'</i>
            </p>

            <form>
              <button className="btn btn--accent2 text--small text--medium btn-page-app" formaction="https://twitter.com/TUNA_Solana">
                Twitter (𝕏)
              </button>
            </form>

          </div>
        </div>

        <div className="banner-bottom-margin">
          <div className="banner--left">
            <h2 className="banner__title">
              Tuna's Forever Home
            </h2>
          </div>
        </div>

        <div className="grid_choose">
          <div className="banner--left">
            <h2 className="banner__title">
              Hold and Earn
            </h2>
            <p className="banner__text text text--small text--regular text--muted">
              Holding $TUNA during a future snapshot will guarantee you access to current and future features:
              <br></br>These include the Neglected Fugly Tuna airdrop, the Telegram's <strong>'/supermeme'</strong> command, and more to be announced post-launch.
              <br></br>Hints are often dropped in the Telegram, because we're too excited to stay too quiet.
            </p>
          </div>
        </div>

        */}

        <img
          className="background-item-6"
          src={background6}
          alt="Background item 6"
        />
        
        <img
          className="background-item-7"
          src={background7}
          alt="Background item 7"
        />

      </section>
    );
  }
}

export default Features;
