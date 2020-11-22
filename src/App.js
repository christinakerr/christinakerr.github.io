import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import React from "react";
import Navbar from "./components/Navbar"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={About}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/contact" component={Contact}/>
      <Footer />
    </Router>
  );
}

export default App;
