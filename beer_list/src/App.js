import React, { Component } from "react";
import "./index.css";

class App extends Component {
  state = {
    beers: []
  };

  fetchBeers = param => {
    fetch(`https://api.punkapi.com/v2/beers?${param}`)
      .then(data => data.json())
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let beers = this.state.beers.map(beer => (
      <p>
        <div className="Beers">
          <div className="Info">
            <div className="Header">
              <h1>{beer.name}</h1>
            </div>
            <div className="tagline">
              <p>"{beer.tagline}"</p>
            </div>
          </div>
          <div className="Img">
            <img className="Images" alt="beer_images" src={beer.image_url} />
          </div>
        </div>
      </p>
    ));
    return (
      <div>
        <div className="Title">
          <h1>Punk</h1>
          <s className="s">API</s>
          <h1>IPA</h1>
        </div>
        <div className="SubHeader">
          <p>"Learning React API's while enjoying IPA!"</p>
        </div>
        <div className="Buttons">
          <button onClick={this.fetchBeers}>All</button>

          <button onClick={() => this.fetchBeers("food=tacos")}>
            Beers & Tacos
          </button>

          <button onClick={() => this.fetchBeers("food=spicy")}>
            Beers & Spicy Food!
          </button>

          <button onClick={() => this.fetchBeers("food=salad")}>
            Beers & Salads
          </button>

          <button onClick={() => this.fetchBeers("food=beef")}>
            Beers & Burgers
          </button>
        </div>
        <section className="Beer_Display">{beers}</section>
      </div>
    );
  }
}



export default App;