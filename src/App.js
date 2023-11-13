import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home'; 
import CancerDetectionTool from './components/CancerDetectionTool';
import TypeofCancer from './components/TypeofCancer';
import CauseRisk from './components/CauseRisk';
import CommonSymptoms from './components/CommonSymptoms';
import TreatmentOption from './components/TreatmentOption';
import Footer from './components/Footer';
import {
  BrowserRouter as Router, 
  Routes,
  Route, 
  // Link
} from 'react-router-dom'
function App() {
  return (
    <>
      <Router> 
      <Navbar/> 
      <div className = "container my-3">
        <Routes>
        <Route path="/" element = {<Home/>}/>   
          <Route path="/CancerDetectionTool" element ={<CancerDetectionTool/>}/> 
          <Route path="/TypeOfCancer" element = {<TypeofCancer/>}/> 
          <Route path="/CauseRisk" element = {<CauseRisk/>}/> 
          <Route path="/CommonSymptoms" element = {<CommonSymptoms/>}/> 
          <Route path="/TreatmentOptions" element = {<TreatmentOption/>}/> 
          </Routes>  
      </div>
      </Router>  
    <Footer/>
    </>
  );
}

export default App;
