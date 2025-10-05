import React from "react";
import Navbar from './features/Navbar';
import Container from "./features/Container";
import Home from "./features/Home";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />        
      <Container>
        <Home />        
      </Container>
    </>
  );
}
export default App;
