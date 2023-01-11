import SubPage from "../../Components/SubPage/SubPage";
import sherbime6 from '../../Assets/sherbime6.jpg'
const Fiziatrike = () =>{
    const pageData = {
        title:"Fiziatrike",
        firstText:"Programet shëndetësore të Kujdesit të Ri Shëndetësor (N.H.C.) duke njohur rëndësinë e Fizioterapisë, nga njëra anë në funksionin fizik dhe performancën e trupit të njeriut dhe nga ana tjetër në shëndetin psikologjik dhe social, vazhduan në krijimin dhe funksionimin e një rrjeti të qendrave fizioterapike të përzgjedhura dhe të shpërndara gjeografikisht.",
        secondText:"  ",
        thirdText:" <br><br>Qendrat fizioterapike të rrjetit përdorin metoda tradicionale rehabilitimi në kombinim me përdorimin e makinerive të teknologjisë së lartë dhe teknikave të veçanta, të cilat kryhen nga fizioterapistët e specializuar të diplomuar.<br> <br> Programet shëndetësore N.H.C. i sigurojnë anëtarët e tyre me:<br><br>Sesione fizioterapiketë pakufizuara , me pjesëmarrje të anëtarëve me shumën pesëmbëdhjetë (15) euro për sesion.<br><br>  "
    }
    return <>
    <div>
        <SubPage imgSrc={sherbime6} data={pageData} />
    </div>
    </>
}
export default Fiziatrike;