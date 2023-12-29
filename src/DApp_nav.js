import './css/styles.css';
import fire from "./images/fire5.svg";
import Currency from "./images/currency.svg";
import Claim from "./images/claim-coin.svg";
import { Link, NavLink } from "react-router-dom";

const NAME_FOR_STAKING = `Put Down Tuna`;
const NAME_FOR_BURNING = `Doggie Daycare`;
const NAME_FOR_CLAIMING = `Check for Poopies`;

const APP_DESC_P1 = `The Tuna Kennel is <strong>under construction</strong> 👷🏼‍♂️`;
const APP_DESC_P2 = `Phantom/MetaMask wallet connections may work, but there are no smart contracts tied to any of these buttons.`;


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