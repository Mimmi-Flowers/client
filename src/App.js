import logo from './flowerloading2.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-name">MIMMI FLOWERS</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-txt">
          Work in progress...
        </p>
        <a
          className="App-link"
          href="https://taplink.cc/mimmi_flowers"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our contacts
        </a>
      </header>
    </div>
  );
}

export default App;
