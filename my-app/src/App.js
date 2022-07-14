import logo from './logo.svg';
import './App.css';
import Fcomponent from './Fcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent></Fcomponent>
        <img src={logo} className="App-logo" alt="logo"/>
        <div>

          <ul>  

              <li>
                <a></a>
              </li>

              <li>
                <a></a>
              </li>

              <li>
                <a></a>
              </li>

              <li>
                <a></a>
              </li>

              <li>
                <a></a>
              </li>
              
              <li>
                <a></a>
              </li>
              
          </ul>
          
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
