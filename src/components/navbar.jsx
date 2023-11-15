// import CancerDetectionTool from "./CancerDetectionTool";

import {Link} from 'react-router-dom'
export default function Navbar(){
    
    return(
    <nav className="navbar navbar-dark navbar-expand-lg" style = {{backgroundColor : '#613048'}}>
      <div className="container-fluid">
        <h2 className="navbar-brand " to="/">
        <img src="./favicon.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
        <h2 style = {{display : 'inline', marginLeft : '1%'}}>
         CancerCare Center</h2>
        </h2>      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style = {{color : 'white'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CancerDetectionTool">Cancer Detection Tool</Link>
            </li>  
            <li className="nav-item">
              <Link className="nav-link" to="/CauseRisk">Cause and Risk</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/CommonSymptoms">Common Symptoms</Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/TreatmentOptions">Treatment Options</Link>
            </li> 
             {/* <li className="nav-item">
              <Link className="nav-link" to="/EmergencyContact">Emergency Contact</Link>
            </li>  */}
          </ul>
        </div>
      </div>
    </nav>
    );
} 