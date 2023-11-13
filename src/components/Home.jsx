import FAQs from './FAQs'
import TypeofCancer from './TypeofCancer';
export default function Home(){
    return ( 
        <section>
            <div className = 'container my-5'>
            <div id="carouselExampleCaptions" className = "carousel slide" data-bs-ride="carousel" data-bs-interval = "4000">
                <div className = "carousel-indicators">
                    <button type="" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className = "active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 0"></button>
                </div>
                <div className = "carousel-inner">
                    <div className = "carousel-item active">
                    <img src="./bg.jpg" className = "d-block w-100" alt="..."/>
                
                    </div>
                    <div className = "carousel-item">
                    <img src="./bg1.jpg" className = "d-block w-100" alt="..."/>
                   
                    </div>
                    </div> 
                </div>
            </div>
            <div className = "container">
                <div className = "row">
                    <h1 className = "text-center" style = {{color : 'white', backgroundColor : '#613048', padding : '5px', marginBottom : '10px'}}>What is Cancer ? </h1>
                    <div className = "col-lg-6 col-md-6 col-s-12" style = {{textAlign : 'justify'}}>
                    <p>
                    In simple terms, <strong>Cancer</strong> is an abnormal growth of body cells. Each one of us is born with a potential for cancer. One cannot "Catch" it as one would an infection or a cold. When the programming of a cell or a group of cells is affected, growth may become uncontrolled. Some of the factors that can alter the code are chronic irritation, tobacco, smoke and dust, radioactive substances, age, sex, race and heredity. While one cannot control many of these factors , we need to be aware of the ones we can control of. Prevention is definitely better than treatment of cancer. No one yet talks of cure, treatment: 
                    </p>
                    </div>
                    <div className = "col-lg-6 col-md-6 col-s-12">
                    <img className = "what-is-cancer-image" src="./price-3.jpg" alt="Cancer image"/>
                    </div>
                </div>
            </div>
        <TypeofCancer/>
        <FAQs/>
        </section>
    );
}