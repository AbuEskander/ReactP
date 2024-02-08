import React, { Component } from "react";

class Amthal extends Component {
  constructor() {
    super();
    this.state = { mathal: {}, Amthals: [], moreAmthal: false };
  }
  componentDidMount() {
    fetch("http://localhost:3005/amthal/random")
      .then((Response) => Response.json())
      .then((json) => this.setState({ mathal: json }));
  }
  fetchAmthal = () => {
    fetch("http://localhost:3005/amthal/randomTen")
      .then((Response) => Response.json())
      .then((json) => this.setState({ Amthals: json }));
  };
  render() {
    return (
      <div>
        <h2>مثل اليوم</h2>
        <p>{this.state.mathal.title}</p>
        <hr />

        <button onClick={() => this.fetchAmthal()} className="btnn">
          <h3> هل تريد المزيد؟</h3>
        </button>
        {this.state.Amthals.map((val) => {
          return <p>{val.title}</p>;
        })}
      </div>
    );
  }
}

export default Amthal;
