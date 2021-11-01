import React from "react";
//Routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//Components
import Home from './components/Home';
import Header from './components/Header'
import FooterSection from "./components/FooterSection";
//Styles
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <FooterSection/>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
