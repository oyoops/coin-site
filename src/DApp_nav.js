import './css/styles.css';
import fire from "./images/fire5.svg";
import Currency from "./images/currency.svg";
import Claim from "./images/claim-coin.svg";
import { Link, NavLink } from "react-router-dom";


export function DAppNav() {
    return (
      <div className="ConnectWallet card_dapp_nav">
        
        <h3>Apps</h3>
        
        <NavLink to="../dApp" activeClassName="btn-top-burn">
          <button className="btn btn--accent2 text--small text--medium btn-top-burn" >
            <img src={fire} className="burn-img" alt="fire svg" />
              Put Down Tuna
          </button>
        </NavLink>
        
        <Link to="../stake">
          <button className="btn btn--accent2 text--small text--medium btn-top-burn" >
            <img src={Currency} className="burn-img" alt="fire svg" />
              Doggie Daycare 
          </button>
        </Link>
        
        <Link to="../claim">
          <button className="btn btn--accent2 text--small text--medium btn-top-burn" >
            <img src={Claim} className="burn-img" alt="fire svg" />
              Check for Poopies
          </button>
        </Link>
        
        <p>
          The Tuna Kennel is <strong>under construction</strong> 👷🏼‍♂️
        </p>
        
        <p>
          Phantom/MetaMask wallet connections may work, but there are no smart contracts tied to any of these buttons.
        </p>
      
      </div>
    )
}