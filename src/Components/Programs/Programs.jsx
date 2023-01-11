import './Programs.css'
import firstaid from '../../Assets/firstaid.jpg'
import peopleComp from '../../Assets/peopleComp.png'
const Programs = () =>{
    return <>
    <div className="programms-wrapper">
        <div className="programs-title">
            <h3>Programet / Administrimi i shërbimit shëndetsorë</h3>
        </div>
        <div className="divs-wrapper">
            <div className="with-image">
                <div className="image-wrapper">
                    <img src={firstaid} alt="firstaid" />
                </div>
                <div className="text-container">
                    <h6>Kujdesi paresore</h6>
                    <p>Vizitat mjekësore, ekzaminimet diagnostike, Checkup, operacionet dentare, operacionet fizioterapike, operacionet oftalmologjike, terapia e të folurit, mbështetja psikologjike, etj.</p>
                </div>

            </div>
            <div className="with-image">
                <div className="image-wrapper">
                    <img src={peopleComp} alt="firstaid" />
                </div>
                <div className="text-container">
                    <h6>Krijimi dhe administrimi i programeve shendetsore</h6>
                    <p>Vizitat mjekësore, ekzaminimet diagnostike, Checkup, operacionet dentare, operacionet fizioterapike, operacionet oftalmologjike, terapia e të folurit, mbështetja psikologjike, etj.</p>
                </div>

            </div>
        </div>

    </div>
    </>
}
export default Programs;