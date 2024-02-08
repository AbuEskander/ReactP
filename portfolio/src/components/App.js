import React from "react";
import Profile from "./Profile";
import Qualification from "./Qualification";
import "../index.css";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfile";
import Title from "./Title";
class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="row">
          <Title />
          <div className="column">
            <Profile />
          </div>
          <div className="column">
            <Qualification />
          </div>
        </div>
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}
export default App;
