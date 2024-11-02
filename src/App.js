import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import MediaCard from './Components/Card/card.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-Hero">
      <Hero />
      </main>
      <albums>
      <MediaCard />
      </albums>
    </div>
  );
}

export default App;
