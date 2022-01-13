import { Link } from 'react-router-dom'
import ('./Homepage.css')

export const Homepage = () => {
    return(
        <div id="homepageContainer">
        <div id="bigGreen"></div>
            <div id="bigCTA">
                <img src="https://daily.sevenfifty.com/app/uploads/2020/10/SFD_Loire_Valley_1755_vignes-et-chateau-_chinon_Stevens_Fremont_1536x1152.jpg"/>
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
                    <h3>Loirebnb <br/>Giftcards</h3>
                </div>
                <div id="gcImage">
                    <img src="https://res.cloudinary.com/jadecabbage/image/upload/c_crop,h_900,w_900/v1642094708/Screen_Shot_2022-01-13_at_12.24.58_PM_jsth7m.png"/>
                </div>
            </div>
        </div>
    )
}
