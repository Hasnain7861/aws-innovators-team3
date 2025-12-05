import './App.css';
import PersonList from './components/PersonList.js';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">IAM Innovators Team 3</h1>
        <div className="title-decoration"></div>
      </header>
      <PersonList/>
    </div>
  )
}

export default App;
