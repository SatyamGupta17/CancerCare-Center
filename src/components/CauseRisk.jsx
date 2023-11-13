export default function CauseRisk(){
    return(
        <div>
            <div style = {{margin : '5px', padding : '10px'}} >
                <h1 style = {{color : 'white', backgroundColor : '#613048',textAlign : 'center', padding :'5px'}}>Causes and Risk Factors</h1>
                <p style = {{textAlign : 'justify', margin : ' 2% 5%'}}>
                It is usually not possible to know exactly why one person develops cancer and another doesn't. But research has shown that certain risk factors may increase a person's chances of developing cancer. (There are also factors that are linked to a lower risk of cancer. These are sometimes called protective risk factors, or just protective factors.)
                <br/>
                The list below includes the most-studied known or suspected risk factors for cancer. Although some of these risk factors can be avoided, others—such as growing older—cannot. Limiting your exposure to avoidable risk factors may lower your risk of developing certain cancers.
                </p>
            </div>
            <div style = {{textAlign : 'justify', margin : ' 2% 5%'}}>
            <div className = "row">
                <div className = "col-3">
                    <div id="list-example" className = "list-group"  style = {{border : '5px solid #613048', padding : '0px', borderRadius : '1%'}}>
                    <a className = "list-group-item list-group-item-action"  style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}} href="#list-item-1">Age</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-2"  style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Alcohol</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-3" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Cancer-Causing Substances</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-4" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Chronic Inflammation</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-5" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Common Cancer Myths and Misconceptions</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-6" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Diet</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-7" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Hormones</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-8" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Infectious Agents</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-9" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Obesity</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-10" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Radiation</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-11" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Sunlight</a>
                    <a className = "list-group-item list-group-item-action" href="#list-item-12" style= {{height : '80px',  backgroundColor : '#613048c7', color : 'white', fontWeight : 'bold'}}>Tabacco</a>
                    </div>
                </div>
                <div className = "col-9" style = {{textAlign : 'justify'}}>
                    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className = "scrollspy-example" tabindex="0">
                    <h4 id="list-item-1">Age</h4>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                        Advancing age is the most important risk factor for cancer overall and for many individual cancer types. The incidence rates for cancer overall climb steadily as age increases, from fewer than 25 cases per 100,000 people in age groups under age 20, to about 350 per 100,000 people among those aged 45-49, to more than 1,000 per 100,000 people in age groups 60 years and older.
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                        <img src="./delay-adjusted-rates-per-persons.jpg" style = {{width: '80%'}} alt="" /> 
                        </div>
                    </div> 
                    <hr />
                    <h4 id="list-item-2">Alcohol</h4>
                    <p>Drinking alcohol can increase your risk of cancer of the mouth, throat, esophagus, larynx (voice box), liver, and breast. The more you drink, the higher your risk. The risk of cancer is much higher for those who drink alcohol and also use tobacco.
                    <br/>
                    Doctors advise people who drink to do so in moderate amounts. The federal government's Dietary Guidelines for Americans defines moderate alcohol drinking as up to one drink per day for women and up to two drinks per day for men.
                   </p>
                   <hr />
                    <h4 id="list-item-3">Cancer-Causing Substances</h4>
                    <div className="row">
                        <div  className="col-lg-6 col-md-12 col-sm-12">
                        Cancer is caused by changes to certain genes that alter the way our cells function. Some of these genetic changes occur naturally when DNA is replicated during the process of cell division. But others are the result of environmental exposures that damage DNA. These exposures may include substances, such as the chemicals in tobacco smoke, or radiation, such as ultraviolet rays from the sun.
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className = "d-flex" style = {{width: '80%'}}src="./coal-fired-power-plant-article.jpg" alt="" />
                        </div>
                   
                    </div>
                    <hr />
                    <h4 id="list-item-4">Chronic Inflammation</h4>
                    <p>Inflammation is a normal physiological response that causes injured tissue to heal. An inflammatory process starts when chemicals are released by the damaged tissue. In response, white blood cells make substances that cause cells to divide and grow to rebuild tissue to help repair the injury. Once the wound is healed, the inflammatory process ends.
                    </p>
                    <hr />
                    <h4 id="list-item-5">Common Cancer Myths and Misconceptions</h4>
                    <p>Certain popular ideas about how cancer starts and spreads—though scientifically wrong—can seem to make sense, especially when those ideas are rooted in old theories. But wrong ideas about cancer can lead to needless worry and even hinder good prevention and treatment decisions. This page provides the latest science-based information about some common cancer myths and misconceptions.</p>
                    <hr />
                    <h4 id="list-item-6">Diet</h4>
                    <p>Many studies have looked at the possibility that specific dietary components or nutrients are associated with increases or decreases in cancer risk. Studies of cancer cells in the laboratory and of animal models have sometimes provided evidence that isolated compounds may be carcinogenic (or have anticancer activity).<br/>
                    </p>
                    <hr />
                    <h4 id="list-item-7">Hormones</h4>
                    <p>Estrogens, a group of female sex hormones, are known human carcinogens. Although these hormones have essential physiological roles in both females and males, they have also been associated with an increased risk of certain cancers. Studies have also shown that a woman's risk of breast cancer is related to the estrogen and progesterone made by her ovaries (known as endogenous estrogen and progesterone).  <br/>
                   </p>
                   <hr />
                    <h4 id="list-item-8">Infectious Agents</h4>
                    <p>Certain infectious agents, including viruses, bacteria, and parasites, can cause cancer or increase the risk that cancer will form. Some viruses can disrupt signaling that normally keeps cell growth and proliferation in check. Also, some infections weaken the immune system, making the body less able to fight off other cancer-causing infections. And some viruses, bacteria, and parasites also cause chronic inflammation, which may lead to cancer.<br/>
                   </p>
                   <hr />
                    <h4 id="list-item-9">Obesity</h4>
                    <p >People with obesity may have an increased risk of several types of cancer, including cancers of the breast (in women who have been through menopause), colon, rectum, endometrium (lining of the uterus), esophagus, kidney, pancreas, and gallbladder.<br/>
                    Conversely, eating a healthy diet, being physically active, and keeping a healthy weight may help reduce risk of some cancers. These healthy behaviors are also important to lessen the risk of other illnesses, such as heart disease, type II diabetes, and high blood pressure.</p>
                    <hr />
                    <h4 id="list-item-10">Radiation</h4>

                    <p>Radiation of certain wavelengths, called ionizing radiation, has enough energy to damage DNA and cause cancer. Ionizing radiation includes radon, x-rays, gamma rays, and other forms of high-energy radiation. Lower-energy, non-ionizing forms of radiation, such as visible light and the energy from cell phones, have not been found to cause cancer in people.  <br/>
                    Radon is a radioactive gas given off by rocks and soil. Radon is formed when the radioactive element radium breaks down. </p>
                    <hr />
                    <h4 id="list-item-11">Sunlight</h4>
                    <p>The sun, sunlamps, and tanning booths all give off ultraviolet (UV) radiation. Exposure to UV radiation causes early aging of the skin and damage that can lead to skin cancer.<br/>
                    People of all ages and skin tones should limit the amount of time they spend in the sun, especially between mid-morning and late afternoon, and avoid other sources of UV radiation, such as tanning beds. </p>
                    <hr />
                    <h4 id="list-item-12">Tobacco</h4>
                    <p>Tobacco use is a leading cause of cancer and of death from cancer. People who use tobacco products or who are regularly around environmental tobacco smoke (also called secondhand smoke) have an increased risk of cancer because tobacco products and secondhand smoke have many chemicals that damage DNA.<br/>
                    Tobacco use causes many types of cancer, including cancer of the lung, larynx (voice box), mouth, esophagus, throat, bladder, kidney, liver, stomach, pancreas, colon and rectum, and cervix, as well as acute myeloid leukemia. People who use smokeless tobacco (snuff or chewing tobacco) have increased risks of cancers of the mouth, esophagus, and pancreas.
                    <hr />
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}