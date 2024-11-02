import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Section from './Components/Section/Section.jsx';





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
      <Section />
      </albums>
    </div>
  );
}

export default App;
