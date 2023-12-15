export default function TreatmentOption(){
    return (
        <section id="treatment-options">
            <div className = "container my-5">

            <h1 style = {{backgroundColor : '#613048', color : 'white', padding : '2px', textAlign : 'center'}}>Treatment Options</h1>
            <div className="row" style = {{marginRight : '10%', marginLeft : '10%', marginBottom : '5%'}}>
                <div className="col-lg-7 col-md-12 col-sm-12">

                <p style = {{padding : '10px'}}>
                    There are many types of cancer treatment. The types of treatment that you receive will depend on the type of cancer you have and how advanced it is.<br/>
                    <br />
                    Cancer treatment is tailored to each individual based on factors like cancer type, stage, overall health, and personal preferences. Treatment options may include:
                </p> 
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12 " >
                    <img style = {{width : '100%'}} src="./treatmentOption.jpg" alt="......" />
                </div>
            </div>
            <div style = {{marginRight : '10%', marginLeft : '10%'}}>
                <div className="row" style = {{marginBottom : '10px'}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img src="./chemotherapy.jpg" alt="......" />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <strong>Chemotherapy:</strong><br />
                Chemotherapy is a type of cancer treatment that uses drugs to kill cancer cells. Learn how chemotherapy works against cancer, why it causes side effects, and how it is used with other cancer treatments.</div>
                </div>
                <div className="row" style = {{marginBottom : '10px'}}>
                    <div className="col-lg-4  col-md-12 col-sm-12">
                        <img src="./hormone-therapy.jpg" alt="......." />
                    </div>
                    <div className="col-lg-8  col-md-12 col-sm-12"><strong>Hormone Therapy:</strong><br />
                Hormone therapy is a treatment that slows or stops the growth of breast and prostate cancers that use hormones to grow. Learn about the types of hormone therapy and side effects that may happen.</div>
                </div>
                <div className="row" style = {{marginBottom : '10px'}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img src="./hyperthermia.jpg" alt="....." />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12"><strong>Hyperthermia</strong><br />
                Hyperthermia is a type of treatment in which body tissue is heated to as high as 113 °F to help damage and kill cancer cells with divttle or no harm to normal tissue. Learn about the types of cancer and precancers that hyperthermia is used to treat, how it is given, and the benefits and drawbacks of using hyperthermia.</div>
                    </div>
                <div className="row" style = {{marginBottom : '10px'}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img src="./immunotherapy.jpg" alt="....." />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12"><strong>Immunotherapy</strong><br />
                Immunotherapy is a type of cancer treatment that helps your immune system fight cancer. This page covers the types of immunotherapy, how it is used against cancer, and what you can expect during treatment.</div>
                </div>
                <div className="row" style = {{marginBottom : '10px'}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img src="./radiation-therapy.jpg" alt="" />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12"><strong>Radiation Therapy</strong><br />
                Radiation therapy is a type of cancer treatment that uses high doses of radiation to kill cancer cells and shrink tumors. Learn about the types of radiation, why side effects happen, which side effects you might have, and more</div>
                </div>
                <div className="row" style = {{marginBottom : '10px'}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img src="./SCT-Image.jpg" alt="...." />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <strong>Stem Cell Transplant</strong><br/>
                Stem cell transplants are procedures that restore stem cells that grow into blood cells in people who have had theirs destroyed by high doses of chemotherapy or radiation therapy.</div>
                </div>
                <div className="row" style = {{marginBottom : '10px'}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img src="./surgery.jpg" alt="" />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <strong>Surgery : </strong><br></br>
                When used to treat cancer, surgery is a procedure in which a surgeon removes cancer from your body. Learn the different ways that surgery is used against cancer and what you can expect before, during, and after surgery.</div>
                </div>
                <div className="row" style = {{marginBottom : '10px'}}>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <img src="./targeted-therapy.png" alt="....." />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                <strong>Targeted Therapy : </strong><br />
                Targeted therapy is a type of cancer treatment that targets the changes in cancer cells that help them grow, divide, and spread. Learn how targeted therapy works against cancer and about common side effects that may occur.
                </div>
                </div>
            </div>
            </div> 
        </section>
    )
}