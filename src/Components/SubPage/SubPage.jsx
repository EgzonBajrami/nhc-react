import Contact from '../Contact/Contact';
import './SubPage.css'
import {useEffect} from 'react';
const SubPage = ({imgSrc, data}) =>{
    console.log(data.thirdText.split('"'));
    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])
 
    return <>
    
    <div className="contacts">
        <Contact />
    </div>
    <div className="sub-wrapper">

   
     <div className="subpage-wrapper">
        <div className="subpage-image-holder">
            <img src={imgSrc} alt="nhc-logo" />
        </div>
        <div className="sub-text-holder">
        <h3>{data.title}</h3>
        <p>
        {data.firstText}
      </p>
      <p>
      {data.secondText &&(
         <p>{data.secondText}</p>

      )} 
      </p>
     <div className="dng-wrapper">

  
        {data.thirdText &&(
            <>
           
           <div dangerouslySetInnerHTML={{ __html: `${data.thirdText}` }} /> </>)}
           </div>
      
 
        </div>
    </div>
    </div>
    </>
}
export default SubPage;