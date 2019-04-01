import React, { Component } from 'react';
import './App.css';
import Quote from './components/Quote';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      randomQuote: {
        quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
        character: "Nelson Muntz",
        image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
      }
    }
  }

  getQuote = () => {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response => response.json())
      .then(data => {
        this.setState({
          randomQuote: data[0],
        });
      });
  }
  
  render() {
    return (
      <div className="App">

        <Quote 
        quote={this.state.randomQuote.quote}
        author={this.state.randomQuote.character}
        image={this.state.randomQuote.image}
        imageAlt={this.state.randomQuote.character}
        />

        <button onClick={this.getQuote}>GET A NEW SIMPSONS QUOTE</button>
        
      </div>
    );
  }
}

export default App;
