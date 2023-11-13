import './main.css';
export default function FAQs(){
    return(
        <div className ="container border border-1" style = {{borderColor : '#613048'}}>
            <h1 className =  "text-center" style = {{color : 'white', backgroundColor : '#613048', marginBottom : '1%'}}>FAQs</h1>
            <div className = "accordion accordion-flush" id="accordionFlushExample">
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        What is Cancer?
                    </button>
                    </h2>
                    <div id="flush-collapseOne" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"><strong>What is Cancer?</strong><br/>
                    The body is made up of trillions of living cells. Normal cells grow, divide to make new cells, and die in an orderly way. Cancer starts when cells start to grow out of control and instead of dying, continue to grow and form new, abnormal cells.
                    <br/>
                    Cells become cancer cells because of changes to their DNA (deoxyribonucleic acid). In a normal cell, when DNA is damaged the cell either repairs the damage or dies. In cancer cells, the damaged DNA is not repaired and the cell goes on making new cells that the body does not need.</div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        What Causes Cancer?
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"><strong>What causes cancer?</strong><br/>
                    Though it is very difficult to pinpoint the definite cause. Certain substances, known as carcinogens, can definitely increase your chances of getting cancer. For instance, people who smoke or chew tobacco are more prone to mouth, throat and lung cancer, Contrary to popular opinion, beedi smoking is twice as dangerous as cigarettes. <br/>Continued irritation of tissues can lead to cancer. Pollution, preserved food, smoked and junk food are also contributory. Even certain viruses can cause cancer (EBV, Hepatitis B, HPV). Amongst other known causes are asbestos, arsenic, pitch, tar, ultra-violet rays.<br/>
                    </div>
                    </div>
                </div>                
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        Defense Measures Called For
                    </button>
                    </h2>
                    <div id="flush-collapseThree" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"><strong>How can one guard against cancer?</strong><br/>
                    Prevention is better than cure. More than half of the cancers are preventable! Avoid smoking and tobacco chewing in any form. Alcohol should only be taken in moderation. It is better avoided. Take low fat, vegetarian diet. Avoid ill fitting dentures, report to doctor immediately if you notice any of seven warning signals. <hr />
                    <strong> What is meant by a "pre-cancerous lesion"?</strong><br/>
                    develop into cancer with passage of time. Cancer does not form in day's or week's time. It takes many years to develop. It passes through many stages normal cell abnormal cell Precancerous lesion Frank cancer Metastasic cancer. 
                    </div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        How to Detect Cancer?
                    </button>
                    </h2>
                    <div id="flush-collapseFour" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"> <strong>How can you tell if you have cancer without seeing a doctor?</strong>
                    <br />
                    You can only suspect. A regular thorough physical check-up is your best guard against cancer, plus an examination when one of the seven danger signals or warning appears. You are the first line of defense against cancer because, you alone, can recognize a danger signal.
                    <hr />
                    <strong>What are some of the early signs of cancer?</strong>
                    <br />
                    There are seven common ones. They are often called the Seven Danger Signals of Cancer:
                    <br />
                    <ul>
                    <li>Change in bowel or bladder habits.</li>
                    <li>A sore that does not heal.</li>
                    <li>Unusual bleeding or discharge.</li>
                    <li>Thickening or lump in breast or elsewhere.</li>
                    <li>Indigestion or difficulty in swallowing.</li>
                    <li> Nagging cough or hoarseness. </li>
                    <li>Obvious change in wart or mole.</li>
                    <li>You should at once consult a doctor upon the appearance of any sign.</li> 
                    </ul>
                    </div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                        How to Treat Cancer?
                    </button>
                    </h2>
                    <div id="flush-collapseFive" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"> <strong>How should cancer be treated?</strong><br />
                    By surgery, chemotherapy, radiotherapy or a combination of all these in the earliest possible stage of the disease. All these methods are available in India at various Hospitals. RGCI & RC provides all diagnostic and treatment facilities under one roof. The emphasis on cancer treatment should be on multimodal management.
                    <hr/>
                    <strong>Are radiation treatments good for all kinds of cancer?</strong><br></br>
                    No. Treatment depends on type and location of the growth. Some cancers will not respond to radiation treatment but must be treated by surgery or with hormones and chemotherapy.
                    <hr/>
                    <strong>How does Radiation act?</strong> <br/>
                    Radiation destroys dividing cells including cancer cells. Normal cells are also damaged. But now sophisticated machines are available which spare normal tissues and destroy cancer tissue with precision.
                    </div>
                    </div>
                    </div>
                    <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                        How to Detect Cancer
                    </button>
                    </h2>
                    <div id="flush-collapseSix" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body">
                        <strong>How should cancer be treated?</strong><br />
                    By surgery, chemotherapy, radiotherapy or a combination of all these in the earliest possible stage of the disease. All these methods are available in India at various Hospitals. RGCI & RC provides all diagnostic and treatment facilities under one roof. The emphasis on cancer treatment should be on multimodal management. <hr />
                    <strong>What is chemotherapy?</strong><br />
                    
                    Chemotherapy implies treatment with anti-cancer drugs and injections. Today we have a large number of highly effective drugs for cancer control.
                </div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        Cancer in Men
                    </button>
                    </h2>
                    <div id="flush-collapseSeven" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"> <strong>Are cancers in men and women different?</strong> <br />
                        There are no fundamental differences in cancers in men and women. Most important thing is that common male cancers (lung and oral) are preventable because they are caused by tobacco. Female cancers (breast, cervix) can be detected early and cured.
                        <hr/>
                        <strong>What forms of cancer are more common among men than women?</strong><br />
                        Cancer of the mouth, throat, gullet, stomach, rectum, larynx, lung, skin and brain are all more common in men than in women. Gall bladder and thyroid cancers are more frequent in women. 

                        </div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                        Cancer in Women
                    </button>
                    </h2>
                    <div id="flush-collapseEight" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"><strong>Do more women than men die of cancer?</strong><br/>
                        No. The misconception that cancer is primarily a woman's disease is due to the frequency of cancer of the breast and cancer of the reproductive organs in women, in comparison with the more varied occurrence of cancer in men.
                        <hr />
                       <strong> Does cancer occur more frequently among married or unmarried women?</strong><br />
                        Reports from death certificates show that above the age of 40, the cancer death rate is higher among single women than among married women of the same ages. Single women have higher death rates from cancer of the breast and married women have more cancer of the cervix. Physicians believe that having the first child around the age of 20 is preventive against cancer of the breast. Multiple sexual partners increase the risk of cancer of the cervix.
                        <hr />
                        <strong>What precautions should be taken to avoid cancer of the breast?</strong>
                        <br></br>
                        Every woman above the age of 40 should have her breasts examined annually by a physician. Every women after the age of 35 years should be taught how to examine her own breasts (monthly after her periods). Screening mammography should be encouraged at the age of 40 years onward and then every 2 yearly. Soon we will have genetic markers to detect high risk group of women who are likely to develop breast cancer or ovarian cancer.

                        </div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                        Cancer in Children
                    </button>
                    </h2>
                    <div id="flush-collapseNine" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"><b>Can cancer develop in children? At what age?</b> <br />
                        No age is free from cancer. Certain forms of cancer, especially of the eyes and blood are found in young children.<hr/>
                        <b>
                        If a parent dies of cancer are the children more likely to have the disease?</b> <br/>
                        The answer is no. In many families where a parent had cancer, the disease does not appear in the children. Again, a person whose family has no record of cancer may develop it. A tendency to develop breast cancer however runs in families. Even colon cancers are known to be familial.
                        <hr/> <b>
                        Does cancer develop more quickly in children than in older people?</b><br/>
                        The rate of growth at any age depends upon the type of cancer, though cancer does grow faster at younger ages.
                        <hr/> <b>
                        If detected in time, can cancer in a child be cured more quickly than in an adult?</b><br/>
                        The cure of cancer has little relationship with age. It depends upon the extent of growth at the time it is detected, the adequacy of the treatment given, as well as the type of cancer detected.</div>
                    </div>
                </div>
                <div className = "accordion-item">
                    <h2 className = "accordion-header">
                    <button className = "accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                        Cancer and You
                    </button>
                    </h2>
                    <div id="flush-collapseTen" className = "accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className = "accordion-body"><strong> How can cancer deaths be reduced?</strong>
                        Cancer deaths can be reduced by following means:
                        <ul>
                            <li>Cancer is preventable by living a simple life like no tobacco chewing or smoking, vegetarian high roughage low fat diet, no alcohol and use of fresh fruits & fresh vegetables.</li>
                            <li> Half of the cancers can be prevented by changing our own life styles.</li>
                            <li>Early detection by screening before symptoms appear.</li>
                        <li>Early detection in symptomatic patients. Treat them early with multimodal treatment.</li>
                        <li>
                        Provide good care under one roof with all ultramodern gadgetry. Even if it is advanced disease, try to improve quality of life. "Add life to years in advanced cases".
                        </li>
                        </ul>
                        <hr />
                        <strong>

                        Does cancer usually cost more to cure, than other major diseases?
                        </strong> <br />
                        It often does. It depends upon the type of cancer you have and how much must be done to treat it. Many hospitals provide free treatment to those who cannot afford to pay.</div>
                    </div>
                </div>
                </div>
            </div>
    )
}