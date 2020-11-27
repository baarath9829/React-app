//import logo from './logo.svg';
import { useState , useEffect } from 'react';
import './App.css';
import Profile from './components/Profile'
import {Jumbotron,Container,Row} from 'react-bootstrap'

function App() {
  //const [initialAmount,setInitialAmount] = useState(1000);
  //const [name, setName] = useState("baarath");
  const [profiles, setProfiles] = useState([]);

  
  const getprofile = async () => {
    const response = await fetch("http://localhost:8000/profile");
    const data = await response.json();
    setProfiles(data);
    //console.log(data);
  }
  useEffect( () => {
    getprofile();
  } , []);
  
  return (
    <div className="App">
      <Jumbotron>
        <h1> Burn out Chart </h1>
      </Jumbotron>
      <Container>
        {  profiles.map( profile => (
           <Row>
              <Profile name={profile.name} initialAmount={profile.amount}/>
           </Row>
          ))
        }
          
      </Container>
      
    </div>
  );
}

export default App;
