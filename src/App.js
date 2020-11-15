//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Profile from './components/Profile'
import {Jumbotron,Container,Row} from 'react-bootstrap'

function App() {
  const [initialAmount,setInitialAmount] = useState(1000);
  const [name, setName] = useState("baarath");
  
  
  return (
    <div className="App">
      <Jumbotron>
        <h1> Burn out Chart </h1>
      </Jumbotron>
      <Container>
        <Row>
            <Profile name={name} initialAmount={initialAmount}/>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
