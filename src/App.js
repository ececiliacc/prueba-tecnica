import React from 'react';
import './App.css';
import Header from './components/Header'
import Jokes from './components/jokes'
import { Container } from "./components/styles";

function App() {

  return (
    <div>
    <Header />
    <Container>
      <Jokes />
    </Container>
    </div>
  
  );

}
 

export default App;
