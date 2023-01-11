import SubPage from "../../Components/SubPage/SubPage";
import sherbime3 from '../../Assets/sherbime3.jpg'
const Accident = () =>{
    const pageData = {
        title:"Shpenzimet e aksidentit",
        firstText:"  Programet shëndetësore të Kujdesi të Ri Shëndetësor (NHC) u sigurojnë anëtarëve të programeve të tyre mbulimin e aksidenteve, me pjesëmarrjen e anëtarëve , tridhjetë përqind (30%) të kostove të bëra dhe deri në shumën prej 1000 euro (për programin Meter Shëndetësor) dhe 200 Euro (për programin e Matësit Shëndetësor Themelor), rastësisht..",
        secondText:"   ",
        thirdText:" <br> <bold>Kostot kanë të bëjnë me:</bold> <br> <ul> <li>Shpenzimet spitalore për sigurimin e aktit mjekësor. </li> <li>Tarifa e mjekut për sigurimin e aktit mjekësor. </li> <li> Materialet - Konsumet e konsumit (p.sh. gëlqere, suva, qepje, etj.).</li> </ul> <br> Shpenzimet e mjekimit përjashtohen . Dispozita e mësipërme sigurohet ekskluzivisht në klinikat ambulatore të institucioneve të infermierisë bashkëpunuese. "
    }
    return <>
    <div>
        <SubPage imgSrc={sherbime3} data={pageData} />
    </div>
    </>
}
export default Accident;