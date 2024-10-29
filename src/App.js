import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
}

export default App;
