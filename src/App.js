import React, { useEffect, useState } from 'react'
import './App.css'

export default function App(){

  const [quote, setQuote] = useState({})
  useEffect(()=>{
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        const randomIndex = Math.floor(Math.random()*1600)
        setQuote(data[randomIndex])
      })
  },[])

  const randomQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(data){
        const randomIndex = Math.floor(Math.random()*1600)
        setQuote(data[randomIndex])
      })
  }

  return (
    <div className='container text-center'>
      <div class="card">
        <div class="card-header">
          Quote
        </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <div id="quote-box">
            <h1 id="text">"{quote.text}"</h1>
            <br></br>
            <footer id="author" class="blockquote-footer">Author: <cite title="Source Title">{quote.author ? quote.author : "Unknown"}</cite></footer>
            <button id="new-quote" onClick={()=>randomQuote()} className="btn btn-success">NEW QUOTE</button>
            &nbsp;
            <a id="tweet-quote" 
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${quote.text}" Author: ${quote.author || 'Unknown'}`}
              rel="noreferrer" target="_blank" className="btn btn-primary">
                Tweet
            </a>
          </div>
        </blockquote>
      </div>
    </div>
  </div>
  )
}