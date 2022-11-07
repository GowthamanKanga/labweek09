import logo from './logo.svg';
import './App.css';
import Student from './Student';

let myInfo = 
{
  stuNum: 101247677,
  StuName: "Gowthaman Kangatharan",
  college: "George Brown College",
  city: "Toronto"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student stuInfo = {myInfo}/>
      </header>
    </div>
  );
}

export default App;
