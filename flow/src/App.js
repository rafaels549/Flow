
import './App.css';
import logo from './imgs/logo-header.png'

function App() {
  return (
    <div >
      <header>
         <img src = {logo}></img>
      </header>
      <div className="container">
        <h1>Spooky Houses</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0fZFG-M50sk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h1>Nando Moura</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/eHbprbRY95k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h1>Felipe Barbieri</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BlY-pkMVCBw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
     
    </div>
  );
}

export default App;
