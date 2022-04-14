import React from 'react';
import RandomQuote from './components/RandomQuote';
import './App.css';

class App extends React.Component {  

  render() {    
    return (      
      <div className="App">      
      <RandomQuote />
      <footer><a href="https://codepen.io/bojanab987" target="_blank" rel="noreferrer">by bojanab987</a></footer>
      </div>
    )
  }

}


export default App;
