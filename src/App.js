import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import CompanyProfile from './Pages/CompanyProfile/CompanyProfile';
import Vizitat from './Pages/Vizitat/Vizitat';
import Diagnoza from './Pages/Diagnoza/Diagnoza';
import Accident from './Pages/Accident/Accident';
import Oftamologjia from './Pages/Oftamologjia/Oftamologjia';
import Dentare from './Pages/Dentare/Dentare';
import Fiziatrike from './Pages/Fiziatrike/Fiziatrike';
import Nutricioniste from './Pages/Nutricioniste/Nutricioniste';
import Ambulance from './Pages/Ambulance/Ambulance';

function App() {
return <>
<Header />
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPage />} />
  <Route path="/profile" element={<CompanyProfile />} />
  <Route path="/vizitat" element={<Vizitat />} />
  <Route path="/diagnoza" element={<Diagnoza />} />
  <Route path="/aksidenti" element={<Accident />} />
  <Route path="/oftamologjia" element={<Oftamologjia />} />
  <Route path="/dentare" element={<Dentare />} />
  <Route path="/fiziatrike" element={<Fiziatrike />} />
  <Route path="/nutricioniste" element={<Nutricioniste />} />
  <Route path="/ambulanca" element={<Ambulance />} />

  </Routes></BrowserRouter>
  <Footer />
</>
}

export default App;
