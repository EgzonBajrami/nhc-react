import './Sherbime.css'
import sherbime1 from '../../Assets/sherbime1.jpg'
import sherbime2 from '../../Assets/sherbime2.jpg'
import sherbime3 from '../../Assets/sherbime3.jpg'
import sherbime4 from '../../Assets/sherbime4.jpg'
import sherbime5 from '../../Assets/sherbime5.jpg'
import sherbime6 from '../../Assets/sherbime6.jpg'
import sherbime7 from '../../Assets/sherbime7.png'
import sherbime8 from '../../Assets/sherbime8.jpg'
import {useNavigate} from 'react-router-dom';
const Sherbime = () =>{
    const navigate = useNavigate();
    return <>
      <div className="title-container">
            <h3>SHERBIME MJEKSORE</h3>
        </div>
    <div className="sherbime-wrapper">
      
        <div className="sherbime-container">
            <img src={sherbime1} alt="sherbimi1" />
            <div className="btn-wrapper">
            <button onClick={()=>{
                navigate('/vizitat')
            }}
            >Vizitat Mjeksore</button>

            </div>
          
        </div>
        <div className="sherbime-container">
            <img src={sherbime2} alt="sherbimi1" />
            <div className="btn-wrapper">
            <button
            onClick={()=>{
                navigate('/diagnoza')
            }}
            >Diagnoza</button>

            </div>
          
        </div>
        <div className="sherbime-container">
            <img src={sherbime3} alt="sherbimi1" />
            <div className="btn-wrapper">
            <button
            onClick={()=>{
                navigate('/aksidenti')
            }}
            >Shpenzimet e aksidentit personal</button>

            </div>
          
        </div>
        <div className="sherbime-container">
            <img src={sherbime4} alt="sherbimi1" />
            <div className="btn-wrapper">
            <button
             onClick={()=>{
                navigate('/oftamologjia')
            }}
            >Oftamologjia</button>

            </div>
          
        </div>
        <div className="sherbime-container">
            <img src={sherbime5} alt="sherbimi1" />
            <div className="btn-wrapper">
            <button
             onClick={()=>{
                navigate('/dentare')
            }}
            >Dentare</button>

            </div>
          
        </div>
        <div className="sherbime-container">
            <img src={sherbime6} alt="sherbimi1" />
            <div className="btn-wrapper">
            <button
             onClick={()=>{
                navigate('/fiziatrike')
            }}
            >Fiziatrike</button>

            </div>
          
        </div>
        <div className="sherbime-container">
            <img src={sherbime7} alt="sherbimi1" />
            <div className="btn-wrapper">
            <button
             onClick={()=>{
                navigate('/nutricioniste')
            }}
            >Nutricioniste</button>

            </div>
          
        </div>
        <div className="sherbime-container">
            <img src={sherbime8} alt="sherbimi1" />
            <div className="btn-wrapper">
            <button
             onClick={()=>{
                navigate('/ambulanca')
            }}
            >Ambulanca</button>

            </div>
          
        </div>



    </div>
  
    </>
}
export default Sherbime;