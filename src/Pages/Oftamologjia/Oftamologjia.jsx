import SubPage from "../../Components/SubPage/SubPage";
import Oftamologia from '../../Assets/Oftamologia.webp'
const Oftamologjia = () =>{
    const pageData = {
        title:"Vizitat Mjeksore",
        firstText:"Programet shëndetësore të NHC ofrojnë një nivel të lartë të shërbimeve oftalmologjike për anëtarët e tij, nëpërmjet një rrjeti të klinikave oftalmologjike të zgjedhura, Qendrave Oftalmologjike, Klinikave Polimedike",
        secondText:" ",
        thirdText:" "
    }
    return <>
    <div>
        <SubPage imgSrc={Oftamologia} data={pageData} />
    </div>
    </>
}
export default Oftamologjia;