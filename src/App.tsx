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
import { FiMenu } from "react-icons/fi";
import {useState, useEffect} from 'react'


function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }
  }, [])

  return (
   <>
    <Router>
      <Content>

        <div className='title-logo'>
          <img src={Logo} alt="Logo" />
          <h1>Lausan Consultoria</h1>
        </div>

        {(toggleMenu || screenWidth > 1000) && (
          <ul>
         <Link to="/"> <li>Nosso Trabalho</li></Link>
          <Link to="/lausan-consultoria"><li>Lausan Consultoria</li></Link>
          <Link to="/imaginacao"><li>Imaginação</li></Link>
          <Link to="/perspectiva"><li>Perspectivas</li></Link>
          <Link to="/objetivo"><li>Objetivos</li></Link>
          <Link to="/contato"><li>Contato</li></Link>
        </ul>

        )}
        
        <button onClick={toggleNav} className="btn"><FiMenu/></button>

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
