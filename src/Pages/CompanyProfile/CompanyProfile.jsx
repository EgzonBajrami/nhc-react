import Contact from "../../Components/Contact/Contact";
import Profile from "../../Components/Profile/Profile";

const CompanyProfile = () =>{
    return<>
    <div className="company-wrapper">
        <div className="contacts">
            <Contact />
        </div>
        <div className="profile-holder">
            <Profile />

        </div>
    </div>
    </>
}
export default CompanyProfile;