import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap' 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './main/Header';
import Footer from './main/Footer';
import Home from './main/Home';
import About from './composants/About';
import Openfolder from './composants/Openfolder';
import Contact from './composants/Contact';
import Immigration from './composants/Immigration';
import Fly from './composants/Fly';
function App() {
  return (
      <>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/openFolder" element={<Openfolder/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/immigration" element={<Immigration/>}/>
            <Route path="/flyticket" element={<Fly/>}/>
          </Routes>
        </BrowserRouter>
        <Footer/>
      </>
  );
}

export default App;
