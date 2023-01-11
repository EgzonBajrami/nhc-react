import SubPage from "../../Components/SubPage/SubPage";
import vizitat1 from '../../Assets/vizitat1.png'
const Vizitat = () =>{
    const pageData = {
        title:"Vizitat Mjeksore",
        firstText:"Programi shëndetësorë  I krijuar nga  New Health Care u mundësonë anëtarëve  të bëjnë vizita të pakufizuara mjekësore në të gjitha spitalet/ordinancat, në vend dhe rajon , me të cilat ne kemi raporte kontraktuale 7/24h",
        secondText:"  Të gjitha qendrat spitalore/klinike janë të lidhura në formë elektronike me qendren e koordinimit tonë NHC ",
        thirdText:" "
    }
    return <>
    <div>
        <SubPage imgSrc={vizitat1} data={pageData} />
    </div>
    </>
}
export default Vizitat;