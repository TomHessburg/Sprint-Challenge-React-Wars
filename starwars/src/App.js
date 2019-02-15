import React, { Component } from 'react';
import './App.css';
import ListCharacter from './components/ListCharacters'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      charName: "React Wars"
    };
  }
 
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  sortNames = e => {
    e.preventDefault();

    this.setState({
      starwarsChars: this.state.starwarsChars.reverse()
    })
  }

  doAThing = e => {
    this.setState({
      charName: e.target.value
    })

  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">{this.state.charName}</h1>
        <button onClick={this.sortNames}>reverse the list</button>
        <ListCharacter characters={this.state.starwarsChars} doAThing={this.doAThing} />
        
      </div>
    );
  }
}

export default App;
