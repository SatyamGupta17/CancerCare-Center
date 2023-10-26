// import CancerDetectionTool from "./CancerDetectionTool";
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
      <nav className = " hstack gap-3 navbar navbar-expand-lg bg-body-secondary border-bottom  ">
      <div className = "container-fluid">
        <Link className = "navbar-brand" to="/">CancerCare Center</Link>
        <button className = "navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className = "navbar-toggler-icon"></span>
        </button>
        <div className = "collapse navbar-collapse" id="navbarSupportedContent">
          <ul className = "navbar-nav  me-auto mb-2 mb-lg-0">
            <li className = "nav-item">
              <Link className = "nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className = "nav-link" to="/CancerDetectionTool">CancerDetectionTool</Link>
            </li>
            <li className = "nav-item dropdown">
              <Link className = "nav-link dropdown-toggle" to="/TypeOfCancer" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Type of Cancer
              </Link>
              <ul className = "dropdown-menu dropdown-menu-dark">
                    <li><Link  className = "dropdown-item" to="#">Breast Cancer</Link ></li>
                    <li><Link  className = "dropdown-item" to="#">Lungs Cancer</Link ></li>
                    <li><Link  className = "dropdown-item" to="#">Colerectal Cancer</Link ></li>
                    <li><Link  className = "dropdown-item" to="#">Stomach Cancer</Link ></li>
                    <li><Link  className = "dropdown-item" to="#">Cervical Cancer</Link ></li>
                    <li><Link  className = "dropdown-item" to="#">Liver Tumors</Link ></li>
                  </ul>
              </li> 
            <li className = "nav-item">
              <Link className = "nav-link" to="/CauseRisk">Cause and Risk</Link>
            </li>
            <li className = "nav-item">
              <Link className = "nav-link" to="/CommonSymptoms">Common Symptoms</Link>
            </li>
            <li className = "nav-item">
              <Link className = "nav-link" to="/TreatmentOptions">Treament Options</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
} 