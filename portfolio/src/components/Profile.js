import React from "react";
import profilePicture from "../assets/ProfilePic.jpg";
class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      displaybio: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      displaybio: !this.state.displaybio,
    });
    console.log(this.state.displaybio);
  }

  render() {
    return (
      <>
        <img src={profilePicture} className="classProfile" />
        <h1>مرحبا</h1>
        <p>اسمي باسل و انا مهندس كمبيوتر </p>
        {this.state.displaybio ? (
          <div>
            <p> I'm way into Tech ,you can call me obssesed</p>
            <p>I'm a MERN stack Developer</p>
            <button onClick={this.toggle} className="btnn">
              Hide
            </button>
          </div>
        ) : (
          <button onClick={this.toggle} className="btnn">
            Show more!
          </button>
        )}
      </>
    );
  }
}
export default Profile;
