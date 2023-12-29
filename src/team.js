import React from "react";
import Me from "./images/me_pic.png";
import {TwitterFollowButton} from "react-twitter-embed";


const TEAM_SECTION_TITLE = `Meet the Tuna Adoption Team`;

const TEAM_LEAD_NAME = `oyoops`;
const TEAM_LEAD_ROLES_DESCRIPTION_LINE_1 = `Roles: Website, smart contract`;
const TEAM_LEAD_ROLES_DESCRIPTION_LINE_2 = `(Rest of team to be added soon)`;


class Team extends React.Component {
  render() {
    return (
        
        <div className="team" id="teamLink">
            <h2 className="banner__title team2">{`${TEAM_SECTION_TITLE}`}</h2>
            <div className="me-info">
                <h3>{`${TEAM_LEAD_NAME}`}</h3>
            <div className="me-pic">
              <img alt={`${TEAM_LEAD_NAME}`} src={Me} />
            </div>
            <div className="centerContent">
            <div className="selfCenter spaceBetween">
                <TwitterFollowButton
                onLoad={function noRefCheck(){}}
                options={{
                    size: 'large'
                }}
                screenName={`${process.env.TOKEN_TWITTER_USERNAME}`}
                />
            </div>
            </div>
            <p className="banner__text text text--small text--regular text--muted team-underText me-roles">
              {`${TEAM_LEAD_ROLES_DESCRIPTION_LINE_1}`}
            </p>
            <p className="banner__text text text--small text--regular text--muted team-underText2">
              {`${TEAM_LEAD_ROLES_DESCRIPTION_LINE_2}`}
            </p>
          </div>

          {/*<div className="join-team">
            <h3>Join the Adoption Team</h3>
          <h4>In need of:</h4>
            <div className="roles">
                <ul>
                    <li>Social Media</li>
                    <li>Contacts at Listing Sites</li>
                    <li><b>Graphics Designers</b></li>
                    <li>Dog lovers with any helpful skill and lots of passion for Tuna</li>
                </ul>
            </div>
          <p className="banner__text text text--small text--regular text--muted">
            If you are interested in joining/supporting a great team, send a DM to <a href="https://x.com/oyoops">@oyoops</a>
            </p>
              </div>*/}
        </div>
    );
  }
}

export default Team;