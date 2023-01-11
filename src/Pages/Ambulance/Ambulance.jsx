import SubPage from "../../Components/SubPage/SubPage";
import sherbime8 from '../../Assets/sherbime8.jpg'
const Ambulance = () =>{
    const pageData = {
        title:"Ambulanca",
        firstText:"  Programet shëndetësore të Kujdesit të Ri Shëndetësor (NHC) u sigurojnë anëtarëve të programeve të tyre mbulimin e aksidenteve, me pjesëmarrjen e anëtarëve , tridhjetë përqind (30%) të kostove të bëra dhe deri në shumën prej 1000 euro (për programin Meter Shëndetësor) dhe 200 Euro (për programin e Matësit Shëndetësor Themelor), rastësisht..",
        secondText:"  Të gjitha qendrat spitalore/klinike janë të lidhura në formë elektronike me qendren e koordinimit tonë NHC ",
        thirdText:"  <bold>Kostot kanë të bëjnë me:</bold><br><ul><li>Shpenzimet spitalore për sigurimin e aktit mjekësor. </li><li>Tarifa e mjekut për sigurimin e aktit mjekësor. </li><li> Materialet - Konsumet e konsumit (p.sh. gëlqere, suva, qepje, etj.).</li></ul><br>Shpenzimet e mjekimit përjashtohen .Dispozita e mësipërme sigurohet ekskluzivisht në klinikat ambulatore të institucioneve të infermierisë bashkëpunuese. "
    }
    return <>
    <div>
        <SubPage imgSrc={sherbime8} data={pageData} />
    </div>
    </>
}
export default Ambulance;