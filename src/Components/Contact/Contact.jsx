import NHCLogo from '../../Assets/NHCLogo.png'
import './Contacts.css'
import phone from '../../Assets/phone.svg'
import building from '../../Assets/building.svg'
import mail from '../../Assets/mail.svg'
const Contact = () =>{
    return <>
    <div className="contacts-wrapper">
        <div className="logo-cont">
            <img src={NHCLogo} alt="Logo" />
        </div>
        <div className="phone">
            <div className="phone-img-wrapper">
            <div className="phone-img">

<img src={phone} alt="phone" />
</div>
<div className="contacts-holder">
                <h6>Kontakti</h6>
                <p>+38349678698</p>
            </div>

            </div>
           
         
        </div>
        <div className="phone">
            <div className="phone-img-wrapper">
            <div className="phone-img">

<img src={building} alt="building" />
</div>
<div className="contacts-holder">
                <h6>Qendra Kordinuese</h6>
                <p>24 | 7 | 365</p>
            </div>

            </div>
           
         
        </div>
        <div className="phone">
            <div className="phone-img-wrapper">
            <div className="phone-img">

<img src={mail} alt="phone" />
</div>
<div className="contacts-holder">
                <h6>Email</h6>
                <p>kosovahealthcare@gmail.com</p>
            </div>

            </div>
           
         
        </div>

    </div>
    </>
}
export default Contact;