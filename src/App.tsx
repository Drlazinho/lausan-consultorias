import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Contact from "./pages/contact"
import { Link } from 'react-router-dom';
import Objetivo from './pages/objetivo';
import Footer from './components/footer';
import Logo from './assets/img/logo.png'
import { Content } from './style';
import LausanConsultoria from './pages/lausanConsultoria';
import Imaginacao from './pages/imaginacao';
import Perspectiva from './pages/perspectiva';


function App() {
  return (
   <>
    <Router>
      <Content>

        <div className='title-logo'>
          <img src={Logo} alt="Logo" />
          <h1>Lausan Consultoria</h1>
        </div>

        <nav>
          <Link to="/"><p>Nosso Trabalho</p></Link>
          <Link to="/lausan-consultoria"><p>Lausan Consultoria</p></Link>
          <Link to="/imaginacao"><p>Imaginação</p></Link>
          <Link to="/perspectiva"><p>Perspectivas</p></Link>
          <Link to="/objetivo"><p>Objetivos</p></Link>
          <Link to="/contato"><p>Contato</p></Link>
        </nav>
      </Content>

      <Routes>        
        <Route path="/" element={<Home/>}/>
        <Route path="/lausan-consultoria" element={<LausanConsultoria/>}/>
        <Route path="/imaginacao" element={<Imaginacao/>}/>
        <Route path="/perspectiva" element={<Perspectiva/>}/>
        <Route path="/objetivo" element={<Objetivo/>}/>
        <Route path="/contato" element={<Contact/>}/>
      </Routes>
    </Router>

    <Footer/>
    
   </>
  );
}

export default App;
