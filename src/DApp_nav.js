import './css/styles.css';
import fire from "./images/fire5.svg";
import Currency from "./images/currency.svg";
import Claim from "./images/claim-coin.svg";
import { Link, NavLink } from "react-router-dom";

const NAME_FOR_STAKING = `Stake $ROCKWIFHAT`;
const NAME_FOR_BURNING = `Burn $ROCKWIFHAT`;
const NAME_FOR_CLAIMING = `Claim $ROCKWIFHAT`;

const APP_DESC_P1 = `RockWifHat dApp is UNDER CONSTRUCTION! 👷🏼‍♂️`;
const APP_DESC_P2 = `Please pardon my rock dust. The Phantom/MetaMask wallet connections should work, but there are NO smart contracts tied to these buttons.`;


export function DAppNav() {
    return (
      <div className="ConnectWallet card_dapp_nav">
        
        <h3>Apps</h3>
        
        <NavLink to="../dApp" activeClassName="btn-top-burn">
          <button className="btn btn--accent2 text--small text--medium btn-top-burn" >
            <img src={fire} className="burn-img" alt="fire svg" />
              {`${NAME_FOR_BURNING}`}
          </button>
        </NavLink>
        
        <Link to="../stake">
          <button className="btn btn--accent2 text--small text--medium btn-top-burn" >
            <img src={Currency} className="burn-img" alt="fire svg" />
              {`${NAME_FOR_STAKING}`} 
          </button>
        </Link>
        
        <Link to="../claim">
          <button className="btn btn--accent2 text--small text--medium btn-top-burn" >
            <img src={Claim} className="burn-img" alt="fire svg" />
              {`${NAME_FOR_CLAIMING}`}
          </button>
        </Link>
        
        <p>
          {`${APP_DESC_P1}`}
        </p>
        
        <p>
          {`${APP_DESC_P2}`}
        </p>
      
      </div>
    )
}