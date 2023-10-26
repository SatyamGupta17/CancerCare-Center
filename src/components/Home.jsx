import FAQs from './FAQs'
import TypeofCancer from './TypeofCancer';
export default function Home(){
    return ( 
        <section>
            <div className = 'container my-5'>
            <div id="carouselExampleCaptions" className = "carousel slide" data-bs-ride="carousel" data-bs-interval = "2000">
                <div className = "carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className = "active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 0"></button>
                </div>
                <div className = "carousel-inner">
                    <div className = "carousel-item active">
                    <img src="./bg.jpg" className = "d-block w-100" alt="..."/>
                    <div className = "carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className = "carousel-item">
                    <img src="./bg1.jpg" className = "d-block w-100" alt="..."/>
                    <div className = "carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    </div> 
                </div>
                <button className = "carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className = "carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className = "visually-hidden">Previous</span>
                </button>
                <button className = "carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className = "carousel-control-next-icon" aria-hidden="true"></span>
                    <span className = "visually-hidden">Next</span>
                </button>
            </div>
            <div className = "container">
                <div className = "row">
                    <h1 className = "text-center" style = {{color : 'red'}}>What is Cancer ? </h1>
                    <div className = "col-lg-6 col-md-6 col-s-12">
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