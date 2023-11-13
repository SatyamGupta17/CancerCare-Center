import React from 'react'; 
import './main.css'; 
import {useState} from 'react';
export default function CancerDetectionTool(){ 
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [displayImage, setDisplayImage] = useState(null);
    const [dialog, setDialog] = useState(false);
    const toggleDialog = () => {
      setDialog(!dialog);
      setSelectedImage(null);
      setUploaded(false);
    };
    const handleImageUpload = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target.result);
          setDisplayImage(e.target.result);
        };
        reader.readAsDataURL(file);
        setUploaded(true);
      }
    };
    return (
        <div className = "container mt-5">
          <h1 className='text-center' style = {{color : 'white', backgroundColor : '#613048'}}>Cancer Detection Tool</h1>
          <div className = "col" style = {{margin : '10px 5%'}}>
          <div className = 'row'>

            <div className = 'col'>
              <p style = {{textAlign : 'justify'}}>
              Cancer has been characterized as a heterogeneous disease consisting of many different subtypes. The early diagnosis and prognosis of a cancer type have become a necessity in cancer research, as it can facilitate the subsequent clinical management of patients. The importance of classifying cancer patients into high or low risk groups has led many research teams, from the biomedical and the bioinformatics field, to study the application of machine learning (ML) methods. Therefore, these techniques have been utilized as an aim to model the progression and treatment of cancerous conditions. In addition, the ability of ML tools to detect key features from complex datasets reveals their importance. A variety of these techniques, including Artificial Neural Networks (ANNs), Bayesian Networks (BNs), Support Vector Machines (SVMs) and Decision Trees (DTs) have been widely applied in cancer research for the development of predictive models, resulting in effective and accurate decision making. Even though it is evident that the use of ML methods can improve our understanding of cancer progression, an appropriate level of validation is needed in order for these methods to be considered in the everyday clinical practice. The predictive models discussed here are based on various supervised ML techniques as well as on different input features and data samples.
              </p></div>
            <div className='col' style = {{alignItems :'center', textAlign : 'center'}}>
                <img src="./cancer-detection.jpg" alt="Cancer Detection Image" style = {{width: '600px'}} />
          </div>
            </div>
          </div>
            <div className='container my-5' style = {{border : '3px solid #613048', padding : '10px'}}>
                <div> 
                  <p><strong>Please upload the MRI image to check whether you have cancer or not</strong></p>
                    <input type="file" name="files[]" id="file" data-multiple-caption="{count} files selected" accept = "image/*" onChange = {handleImageUpload} />
                    <br />
                    {selectedImage && <img src={selectedImage} alt="Uploaded" width="200" />}
                    <br/> 
                    <button className = "btn  popup-button" onClick = {toggleDialog} disabled = {!uploaded} style = {{backgroundColor: '#613048', color : 'white'}}>Upload</button> 
                    <br/> 
                    {dialog && (
                            <div className="dialog">
                            <div className="dialog-content">
                                <button className="close-icon" onClick={toggleDialog}>&#10005;</button>
                                <img className="popup-image" src={displayImage}alt="Popup Image" />
                            </div>
                        </div>
                    )}
                </div> 
            </div>
        </div>
    )
}