import './main.css'; 
export default function TypeofCancer(){
    
    return (
        <section className='container my-5' >
            <div className = "container" >
                <h1 style = {{backgroundColor : '#613048', color : 'white', textAlign : 'center', padding : '5px', marginBottom: '10px'}}>Types of Cancer</h1>
                <p><strong>This list of common cancer types includes cancers that are diagnosed with the greatest frequency in the United States</strong></p>
                <div style = {{ padding : '10px'}}>
                    <div className='row'>
                    <div className = "col-lg-6 col-md-6 col-s-12">
                        <h3>Breast Cancer</h3>
                        <p  style = {{textAlign : 'justify'}}>Breast cancer is cancer that develops from breast tissue. Signs of breast cancer may include a lump in the breast, a change in breast shape, dimpling of the skin, milk rejection, fluid coming from the nipple, a newly inverted nipple, or a red or scaly patch of skin..</p> 
                    </div>
                    <div  className = "col-lg-6 col-md-6 col-s-12" style = {{textAlign : 'justify'}}>
                        <h3>Lungs Cancer</h3>
                        <p>A cancer that begins in the lungs and most often occurs in people who smoke.
                        Two major types of lung cancer are non-small cell lung cancer and small cell lung cancer.Causes of lung cancer include smoking, second-hand smoke, exposure to certain toxins and family history. </p> 
                    </div>
                    </div>
                    <div className='row'  style = {{textAlign : 'justify'}}>

                    <div className = "col-lg-6 col-md-6 col-s-12">
                        <h3>Brain Tumor</h3>
                        <p >A cancerous or non-cancerous mass or growth of abnormal cells in the brain.
                        Tumours can start in the brain, or cancer elsewhere in the body can spread to the brain.
                        Symptoms include new or increasingly strong headaches, blurred vision, loss of balance, confusion and seizures. In some cases, there may be no symptoms.</p> 
                    </div>
                    <div  className = "col-lg-6 col-md-6 col-s-12"  style = {{textAlign : 'justify'}}>
                        <h3>Colerectal Cancer</h3>
                        <p>Colorectal cancer, also known as bowel cancer, colon cancer, or rectal cancer, is the development of cancer from the colon or rectum. Signs and symptoms may include blood in the stool, a change in bowel movements, weight loss, and fatigue.</p> 
                    </div>
                    </div>
                    <div className='row'  style = {{textAlign : 'justify'}}>

                    <div className = "col-lg-6 col-md-6 col-s-12">
                        <h3>Pancreatic Cancer</h3>
                        <p >Pancreatic cancer arises when cells in the pancreas, a glandular organ behind the stomach, begin to multiply out of control and form a mass. These cancerous cells have the ability to invade other parts of the body. A number of types of pancreatic cancer are known.</p> 
                    </div>
                    <div  className = "col-lg-6 col-md-6 col-s-12">
                        <h3>Prostate Cancer</h3>
                        <p>Prostate cancer is the uncontrolled growth of cells in the prostate, a gland in the male reproductive system just below the bladder. Early prostate cancer usually causes no symptoms.</p> 
                    </div>
                    </div>
                    <div className='row' style = {{textAlign : 'justify'}}>

                    <div className = "col-lg-6 col-md-6 col-s-12">
                        <h3>Head and Neck Cancer</h3>
                        <p >Head and neck cancer develops from tissues in the lip and oral cavity, larynx, salivary glands, nose, sinuses, or skin of the face. The most common types of head and neck cancer occur in the lips, mouth, and larynx. Symptoms predominantly include a sore that does not heal or a change in the voice.</p> 
                    </div>
                    <div  className = "col-lg-6 col-md-6 col-s-12">
                        <h3>Kidney Cancer</h3>
                        <p>Kidney cancer, also known as renal cancer, is a group of cancers that starts in the kidney. Symptoms may include blood in the urine, lump in the abdomen, or back pain. Fever, weight loss, and tiredness may also occur. Complications can include spread to the lungs or brain.</p> 
                    </div>
                    </div>
                    
                </div>
            </div>
            <div className='container my-5'>
                <h1 style = {{color : 'white', backgroundColor : '#613048', textAlign : 'center'}}>Cancer Case and Deaths</h1>
                <p>The following table gives the estimated numbers of new cases and deaths for each common cancer type in 2023:</p>
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Cancer Type</th>
                        <th scope="col">Estimated New Cases</th>
                        <th scope="col">Estimated Deaths</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <td>Bladder</td>
                            <td>82,290</td>
                            <td>16,710</td>
                        </tr>
                        <tr>
                            <td>Breast (Female - Male)</td>
                            <td>297,790 - 2,800</td>
                            <td>43,170 - 530</td>
                        </tr>
                        <tr>
                            <td>Colon and Rectal (Combined)</td>
                            <td>153,020</td>
                            <td>52,550</td>
                        </tr>
                        <tr>
                            <td>Endometrial</td>
                            <td>66,200</td>
                            <td>13,030</td>
                        </tr>
                        <tr>
                            <td>Kidney (Renal Cell and Renal Pelvis)</td>
                            <td>81,800</td>
                            <td>14,890</td>
                        </tr>
                        <tr>
                            <td>Leukemia (All Types)</td>
                            <td>59,610</td>
                            <td>23,710</td>
                        </tr>
                        <tr>
                            <td>Liver and Intrahepatic Bile Duct</td>
                            <td>41,210</td>
                            <td>29,380</td>
                        </tr>
                        <tr>
                            <td>Lung (Including Bronchus)</td>
                            <td>238,340</td>
                            <td>127,070</td>
                        </tr>
                        <tr>
                            <td>Melanoma</td>
                            <td>97,610</td>
                            <td>7,990</td>
                        </tr>
                        <tr>
                            <td>Non-Hodgkin Lymphoma</td>
                            <td>80,550</td>
                            <td>20,180</td>
                        </tr>
                        <tr>
                            <td>Pancreatic</td>
                            <td>64,050</td>
                            <td>50,550</td>
                        </tr>
                        <tr>
                            <td>Prostate</td>
                            <td>288,300</td>
                            <td>34,700</td>
                        </tr>
                        <tr>
                            <td>Thyroid</td>
                            <td>43,720</td>
                            <td>2,120</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section> 
    );
}