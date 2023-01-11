import NHCLogo from '../../Assets/NHCLogo.png'
import './Footer.css'
const Footer = () =>{
    return <>
    <div className="footer-container">
        <div className="footer-logo">
            <img src={NHCLogo} alt="nhc-footer" />
        </div>
        <div className="partners-wrapper">
            <div className="first-text-partners">

            <h3>Partnerët tanë janë:</h3>
            </div>
            <div className="first-text-partners">

<h3>-Spitalet dhe klinikat më të mira në vend dhe rajon.</h3>
</div>
<div className="first-text-partners">

<h3>-Së shpejti edhe kompania e sigurimeve.</h3>
</div>
        </div>
        <div className="contact-wrapper">
            <div className="second-text">
                <h3>Kontakt me NHC</h3>
            </div>
            <div className="second-text">
                <p>+383(49)678-698</p>
            </div>
            <div className="second-text">
              <p>kosovahealthcare@gmail.com</p>
            </div>
            
        </div>
        

    </div>
    </>
}
export default Footer;