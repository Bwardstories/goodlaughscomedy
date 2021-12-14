import React from "react";
import Logo from "../../assets/images/goodlaughslogo.jpg";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="aboutUsMain">
      <div className="aboutUsWrapper">
        <img src={Logo} alt="" className="aboutUsImage" />
        <div className="aboutUsInfo">
          <h3>ABOUT US</h3>
          <p>
            Good Laughs Comedy is a stand-up comedy show, produced by Keith Dee,
            that takes place in several showrooms in the greater Charleston, SC
            area, including Southern Roots BBQ Restaurant in the Park Circle
            area of North Charleston, Dreamers Restaurant in Moncks Corner, and
            The Old Trolley Theater in Summerville. See Upcoming Shows page for
            show details. We feature nationally recognized headliners and
            feature comedians that deliver a very high quality comedy show every
            time. Our show was named Best Reason to go to West Ashley by
            Charleston City Paper. Unless specifically noted, Good Laughs Comedy
            is not a show for kids. Recommended age is 17 and up since much of
            the comedy can be rated R. These shows typically sell out, so please
            get your tickets early. Come early and get dinner (and good seats)
            before the shows at Dreamers and Southern Roots, and hang out in the
            bar area after the show. Make it an evening, and we’ll make you glad
            you did. The Old Trolley Theater has beer and wine, and it does not
            serve dinner, but there are great restaurants very close by.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
