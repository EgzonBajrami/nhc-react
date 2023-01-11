import SubPage from "../../Components/SubPage/SubPage";
import sherbime5 from '../../Assets/sherbime5.jpg'
const Dentare = () =>{
    const pageData = {
        title:"Dentare",
        firstText:"Programet shëndetësore të Kujdesit të Ri Shëndetësor (N.H.C.) ofrojnë një nivel të lartë të shërbimeve dentare për anëtarët e tyre, nëpërmjet një rrjeti qendrash të zgjedhura dentare, të cilat në zonën e tyre kryejnë të gjitha operacionet dhe procedurat terapeutike dentare dhe estetikë, nga Dentistë me përvojë dhe të specializuar (periodontologë, endodontistë, add-ons, kirurgë oralë dhe ortodontikë).",
        secondText:" ",
        thirdText:"Programet shëndetësore të Kujdesit të Ri Shëndetësor (N.H.C.) ofrojnë një nivel të lartë të shërbimeve dentare për anëtarët e tyre, nëpërmjet një rrjeti qendrash të zgjedhura dentare, të cilat në zonën e tyre kryejnë të gjitha operacionet dhe procedurat terapeutike dentare dhe estetikë, nga Dentistë me përvojë dhe të specializuar (periodontologë, endodontistë, add-ons, kirurgë oralë dhe ortodontikë). <br> <br><bold> Programet e NHC-së u sigurojnë anëtarëve të tyre::<bold><br> <br><bold>a.</bold>Shërbime falas për parandalimin e dentareve duke përfshirë: <br> <br><ul><li>Pastrimi vjetor i dhëmbëve / lërimi / fluoridimi </li><li>Kontrolli parandalues - radiografik</li><li>Reagim urgjent</li></ul> <br><bold> B.</bold> Shërbime dentare të pakufizuara që mbulojnë plotësisht fushën e stomatologjisë terapeutike/ kirurgjikale si dhe fushën e dentistisë estetikë me pjesëmarrjen e anëtarëve të programit, me një normë dobie deri në pesëdhjetë për qind (50%) në një listë të caktuar çmimesh, të zakonshme për të gjitha Qendrat Dentare të rrjetit.<br> <br> "
    }
    return <>
    <div>
        <SubPage imgSrc={sherbime5} data={pageData} />
    </div>
    </>
}
export default Dentare;