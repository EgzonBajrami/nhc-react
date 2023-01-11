import { Carousel } from "react-bootstrap";
import Family from '../../Assets/Family.jpg';
import Doctor from '../../Assets/Doctor.jpg'
import DoctorMicro from '../../Assets/DoctorMicro.webp'
import Dental from '../../Assets/Dental.jpg'
import Glasses from '../../Assets/Glasses.jpg'
import './Carousel.css'
const CarouselContainer = () =>{
    return <>
     <Carousel
        autoPlay={true}
        indicators={false}
       interval={5000}>
      <Carousel.Item className="carousel-wrapper">
        <img
          className="d-block w-100"
          src={Family}
          alt="First slide"
        />
        <Carousel.Caption>
            <div className="carousel-first">
            <h3>Programet e shërbimit shëndetësorë</h3>

            </div>
            <div className="carousel-second">
            <p>Në bashkëpunim me rrjetet e
organizuara dhe të besueshme të grupeve të mëdha shëndetësore dhe njësive mjekësore, në mbarë vendin.</p>

            </div>
         

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-wrapper">
        <img
          className="d-block w-100"
          src={Doctor}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="carousel-first">
            <h3>Vizitat Mjeksore</h3>

            </div>
            <div className="carousel-second">
            <p>Vizita mjekësore të pakufizuara në Institucionet e
Spitalit, klinikat multi-mjekësore dhe një rrjet mbarëkombëtar i klinikave private, të të gjitha specialitetieve.</p>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-wrapper">
        <img
          className="d-block w-100"
          src={DoctorMicro}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="carousel-first">
            <h3>Shqyrtime Diagnostifikuese</h3>

            </div>
            <div className="carousel-second">
            <p>Teste të pakufizuara diagnostike në spitalet e kontraktuar, qendrat diagnostike, qendrat multi-mjekësore..</p>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-wrapper">
        <img
          className="d-block w-100"
          src={Dental}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="carousel-first">
            <h3>Shërbime Dentale</h3>

            </div>
            <div className="carousel-second">
            <p>Teste të pakufizuara diagnostike në spitalet e kontraktuar, qendrat diagnostike, qendrat multi-mjekësore..</p>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-wrapper">
        <img
          className="d-block w-100"
          src={Glasses}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="carousel-first">
            <h3>Sherbimet e Oftamologjise</h3>

            </div>
            <div className="carousel-second">
            <p>Sherbimet e mjekve te syrit ne klinikat e perzgjedhura te Oftamologjise.</p>

            </div>
        </Carousel.Caption>
      </Carousel.Item>
  
  
    </Carousel>
    </>
}
export default CarouselContainer;