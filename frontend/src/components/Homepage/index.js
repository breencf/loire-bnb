import { Link } from "react-router-dom";
import { DestinationCard } from "./DestinationCard/DestinationCard";
import("./Homepage.css");

export const Homepage = () => {
  return (
    <>
      <div id="bigGreen"></div>
      <div id="homepageContainer">
        <div id="bigCTA">
          <img src="https://daily.sevenfifty.com/app/uploads/2020/10/SFD_Loire_Valley_1755_vignes-et-chateau-_chinon_Stevens_Fremont_1536x1152.jpg" />
          <div id="bigCTAtext">
            <h3>Not sure where to taste? Perfect.</h3>
            <Link to="/wineries">
              <button>I'm flexible</button>
            </Link>
          </div>
        </div>
        <div id="giftCard">
          <div id="gcText">
            <h4>Coming Soon</h4>
            <h3>
              Loirebnb <br />
              Giftcards
            </h3>
          </div>
          <div id="gcImage">
            <img src="https://res.cloudinary.com/jadecabbage/image/upload/v1642362193/loirebnb%20assets/giftcards_shgox9.png" />
          </div>
        </div>
        <div id="inspiration">
          <h4>Inspiration for your next tasting</h4>
          <div id="destinationCards">
            <DestinationCard region={"Saumur"} />
            <DestinationCard region={"Anjou"} />
            <DestinationCard region={"Sancerre"} />
            <DestinationCard region={"Pays Nantais"} />
          </div>
        </div>
        <div id="developerCTA">
          <img src="https://res.cloudinary.com/jadecabbage/image/upload/v1642365990/loirebnb%20assets/Team_Division_2019-7_iwwxzq.jpg" />
          <div id="developerCTAtext">
            <div>
              <h2>Fan of loirebnb?</h2>
              <br />
              <h2>Reach out!</h2>
            </div>
            <div id="links">
              <a target="_blank" href="mailto:breencf@gmail.com">
                <button className="developerCTA">Email</button>
              </a>
              <a target="_blank" href="http://www.github.com/breencf">
                <button className="developerCTA">
                  <i className="fab fa-github-square"></i> Github
                </button>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/breencf/">
                <button className="developerCTA">
                  <i className="fab fa-linkedin"></i> Linkedin
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
