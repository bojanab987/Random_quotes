import React from 'react';
import axios from 'axios';
import randomColor from 'randomcolor';

class RandomQuote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote : '',
            author: '',
            bgColor: '',
            //elements color - text, buttons...
            elColor:'green'
        }
    }

    componentDidMount() {      
        this.getQuotes()        
        this.getRandomColor();
        
    }
  
    getQuotes() {
      let quotesApiUrl ='https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
  
      axios.get(quotesApiUrl).then(res => {
          let data = res.data.quotes;
          //get the random number for an index of a quote
          let quoteIndex = Math.floor(Math.random()*data.length);
          //random quote that will be returned
          let randomQuote= data[quoteIndex];

          this.setState({
              quote: randomQuote['quote'],
              author: randomQuote['author']
          })
        })
    }

    getRandomColor() {
        let color = randomColor();
        this.setState ({
            bgColor: color,
            elColor: color            
        })
        document.body.style.backgroundColor= color;
    }

    //this method handles click for getting new quote and changing colors
    getNewQuote = () => {
        this.getQuotes();
        this.getRandomColor();
    }

    render() {
        const { quote, author } =this.state;
        return (
            <div id="wrapper">
                <div id="quote-box">
                    <figure>
                        <blockquote>
                            <p id="text" style={{color:this.state.elColor}}>"{quote}"</p>                        
                        </blockquote>
                        <figcaption id="author" style={{color:this.state.elColor}}>--{author}</figcaption>
                    </figure>
                    <div className="buttons">
                        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><i className="fab fa-twitter" style={{color:this.state.elColor}}></i></a>
                        <a id="tumblr-quote" href="tumblr.com/login" target="_blank"><i class="fab fa-tumblr-square" style={{color:this.state.elColor}}></i></a>
                        <button id="new-quote" onClick={this.getNewQuote} style={{backgroundColor:this.state.bgColor}}>New Quote</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default RandomQuote;