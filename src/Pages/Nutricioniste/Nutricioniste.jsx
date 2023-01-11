import SubPage from "../../Components/SubPage/SubPage";
import sherbime7 from '../../Assets/sherbime7.png'
const Nutricioniste = () =>{
    const pageData = {
        title:"Vizitat Mjeksore",
        firstText:"Programi shëndetësorë  I krijuar nga  New Health Care u mundësonë anëtarëve  të bëjnë vizita të pakufizuara mjekësore në të gjitha spitalet/ordinancat, në vend dhe rajon , me të cilat ne kemi raporte kontraktuale 7/24h",
        secondText:"   ",
        thirdText:" <bold>A. Mbështetje</bold> psikologjike telefonike falas <br> <br><bold>B.</bold> Seancat e pakufizuara të këshillimit dhe mbështetjes psikologjike në klinikat e Psikologëve të rrjetit me pjesëmarrjen e anëtarëve të programit me shumën prej njëzet e pesë (25) euro për sesion<br><br>Këshillim online apo email, dhe seancat e mbështetjes psikologjike që përfshijnë anëtarët e programit me një kosto preferenciale në varësi të llojit dhe numrit të seancave ose mesazheve si dhe kohëzgjatjen e tyre.<br><br>D.Vizita të pakufizuara në Dietologu / Nutricionisti me pjesëmarrjen e anëtarëve të programit<br><br> "
    }
    return <>
    <div>
        <SubPage imgSrc={sherbime7} data={pageData} />
    </div>
    </>
}
export default Nutricioniste;