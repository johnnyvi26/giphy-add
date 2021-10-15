import './App.css';
import React from 'react';
import Button from './components/Button';
import Gif from './components/Gif'
import Display from './components/Display';

function App() {
  // const apiKey = "yT1ClxqdaqtHmvLL51pIYeyiBul0SiWr";

  const [gif, setGif] = React.useState("");

  const getGif = async ()=>{
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=yT1ClxqdaqtHmvLL51pIYeyiBul0SiWr&tag=&rating=g`
    );

    const data = await response.json();

    setGif(data);
    console.log(gif);
  }
  
  return (
    <div className="App">
      <h1>Giphy</h1>
      <Display />
      <Button randomGif={getGif} />
      <Gif gif={gif}/>
    </div>
  );
}

export default App;
