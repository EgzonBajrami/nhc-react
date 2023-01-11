import CarouselContainer from "../../Components/Carousel/Carousel";
import Contact from "../../Components/Contact/Contact";
import Programs from "../../Components/Programs/Programs";
import Sherbime from "../../Components/Sherbime/Sherbime";
import ScrollReveal from 'scrollreveal';
import {useEffect} from 'react';

const MainPage = () =>{
    useEffect(()=>{
        ScrollReveal().reveal('.programs',{
            reset:false,
            delay:300
        })
        ScrollReveal().reveal('.sherbime',{
            reset:false,
            delay:300
        })

    },[])
    return <>
    <div className="mainpage-wrapper">
        <div className="contacts">
            <Contact />
        </div>
        <div className="carousel">
            <CarouselContainer />
        </div>
        <div className="programs">
            <Programs />
        </div>
        <div className="sherbime">
            <Sherbime />
        </div>
    </div>
    </>
}
export default MainPage;