import './Profile.css';
import NHCLogo from '../../Assets/NHCLogo.png'
const Profile = () =>{
    return <>
    <div className="profile-wrapper">
        <div className="profile-image-holder">
            <img src={NHCLogo} alt="nhc-logo" />
        </div>
        <div className="profile-text-holder">
            <h3>Profili i Kompanisë - NHC</h3>
            <p>
            NewHealthCare "N.H.C." është aktiv në fushën e krijimit dhe menaxhimit të programeve të Kujdesit Parësor dhe Sekondar në emër të Kompanive dhe Organizatave të Sigurimeve, të çertifikuara për cilësinë e shërbimeve të saj dhe procedurat që ajo zbaton:
            </p>
            <p>
            Në çdo vend ku është zhvilluar "KUJDESI I RI SHËNDETËSOR" i "NHC" mbështetet nga ofruesit më të mëdhenj dhe më të besueshëm mjekësorë me qëllim ofrimin e shërbimeve cilësore të kujdesit mjekësor, në të gjithë spektrin e kujdesit parësor. Sistemi shëndetësor "NHC" përfshin spitalet më të specializuar, qendrat më të avancuara diagnostikuese teknologjike, klinikat multi-mjekësore, fizioterapinë, qendrat oftalmologjike dhe dentare si dhe të gjitha specialitetiet mjekësore, duke ofruar të gjitha shërbimet e kujdesit parësor.
            </p>
            <p>
            Në të njëjtën kohë, Kompania mbështet dhe menaxhon programet e kujdesit sekondar në emër të Kompanive të Sigurimeve, në bashkëpunim me spitalet më të mëdha.
            </p>
        </div>
    </div>
    </>
}
export default Profile;