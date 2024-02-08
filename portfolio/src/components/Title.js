import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";

const TITLES = [
  "a Full stack Engineer",
  "Computer Engineer",
  "an Enthusiastic learner",
];
class Title extends React.Component {
  constructor() {
    super();
    this.state = { titleIndex: 0, fadeIn: true };
  }
  componentDidMount() {
    this.animateTitle();
    this.timeout = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }
  animateTitle() {
    this.titleInterval = setInterval(() => {
      this.setState({
        titleIndex: (this.state.titleIndex + 1) % TITLES.length,
        fadeIn: true,
      });
      this.timeout = setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 2000);
    }, 4000);
  }
  render() {
    return (
      <p className={this.state.fadeIn ? "title-fade-in" : "title-fade-out"}>
        I'm {TITLES[this.state.titleIndex]}
      </p>
    );
  }
}

export default Title;
