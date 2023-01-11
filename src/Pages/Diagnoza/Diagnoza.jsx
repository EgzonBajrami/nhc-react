import SubPage from "../../Components/SubPage/SubPage";
import sherbime2 from '../../Assets/sherbime2.jpg'
const Diagnoza = () =>{
    const pageData = {
        title:"Diagnoza",
        firstText:"Ne, kemi menduar për klientin dhe kemi marrveshje me spitalet/ordinancat që të përcaktohet diagnoza/lexohet/kontrollohet diagnoza",
        secondText:"  ",
        thirdText:"  "
    }
    return <>
    <div>
        <SubPage imgSrc={sherbime2} data={pageData} />
    </div>
    </>
}
export default Diagnoza;