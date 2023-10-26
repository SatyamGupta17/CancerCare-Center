import './main.css';
export default function TypeofCancer(){
    return (
        <section className='container my-5' >
            <div className = "container"style = {{backgroundColor : 'grey', color : 'white'}}>
                <h2>Types of Cancer</h2>
                <p>This list of common cancer types includes cancers that are diagnosed with the greatest frequency in the United States, excluding nonmelanoma skin cancers:</p>
                <div style = {{ overflow : 'auto', whiteSpace : 'nowrap', padding : '10px'}}>
                    <div className =  "breast box">
                        <h3 className =  "type-of-cancer-heading">Breast Cancer</h3>
                        <p className =  "type-of-cancer-text">Introduction of Breast Cancer</p>
                        <a href="/breast_cancer.html" target = "blank" >Learn more</a>
                    </div>
                    <div className =  "lungs box">
                        <h3 className =  "type-of-cancer-heading">Lungs Cancer</h3>
                        <p className =  "type-of-cancer-text">Introduction of Lungs Cancer</p>
                        <a href="/lungs_cancer.html">Learn more</a>
                    </div>
                    <div className =  "colorectal box">
                        <h3 className =  "type-of-cancer-heading">Colorectal Cancer</h3>
                        <p className =  "type-of-cancer-text">Introduction of Kidney Cancer</p>
                        <a href="/colorectal.html">Learn more</a>
                    </div>
                    <div className =  "stomach box">
                        <h3 className =  "type-of-cancer-heading">Stomach Cancer</h3>
                        <p className =  "type-of-cancer-text">Introduction of Stomach Cancer</p>
                        <a href="/stomach_cancer.html">Learn more</a>
                    </div>
                    <div className =  "cervical box">
                        <h3 className =  "type-of-cancer-heading" >Cervical Cancer</h3>
                        <p className =  "type-of-cancer-text">Introduction of Skin Cancer</p>
                        <a href="/cervical_cancer.html">Learn more</a>
                    </div>
                    <div className =  "liver box">
                        <h3 className =  "type-of-cancer-heading">Liver Tumors</h3>
                        <p className =  "type-of-cancer-text">Introduction of Brain Tumors</p>
                        <a href="/liver_cancer.html">Learn more</a>
                    </div>
                </div>
            </div>
            <div className='container my-5'>
                <p>The following table gives the estimated numbers of new cases and deaths for each common cancer type in 2023:</p>
                <table className="table table-info table-striped table-hover">
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