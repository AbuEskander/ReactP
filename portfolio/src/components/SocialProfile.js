import React from "react";
import LINKS from "../data/socialProfiles";

class SocialProfiles extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h3>Contact me</h3>
        {LINKS.map((PROFILE) => {
          return <Social socialLInk={PROFILE} />;
        })}
      </div>
    );
  }
}

class Social extends React.Component {
  render() {
    const { name, icon, link } = this.props.socialLInk;
    return (
      <a href={link} target="_blank" rel="noreferrer">
        <img src={icon} alt={name} style={{ width: "20px", margin: "5px" }} />
      </a>
    );
  }
}
export default SocialProfiles;
