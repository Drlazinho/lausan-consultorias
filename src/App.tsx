import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/contact'
import { NavLink } from 'react-router-dom'
import Objetivo from './pages/objetivo'
import Footer from './components/footer'
import Logo from './assets/img/logo.png'
import { Content } from './style'
import LausanConsultoria from './pages/lausanConsultoria'
import Imaginacao from './pages/imaginacao'
import Perspectiva from './pages/perspectiva'
import { FiMenu } from 'react-icons/fi'
import { useState, useEffect } from 'react'

function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
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
          <div className="title-logo">
            <img src={Logo} alt="Logo" title="Logo Lausan Consultoria" />
            <h1>Lausan Consultoria</h1>
          </div>

          {/* className={({isActive}) => (isActive ? '#ff7b00' : '#fff')} */}

          {(toggleMenu || screenWidth > 1000) && (
            <ul>
              <NavLink
                className={({ isActive }) =>
                isActive ? 'link active' : 'link'
                }
                to="/"
                title="Ir para a página sobre os trabalhos da Lausan Consultoria"
              >
                {' '}
                <li>Nosso Trabalho</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
                to="/lausan-consultoria"
                title="Ir para de detalhes da Lausan Consultoria"
              >
                <li>Lausan Consultoria</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'link active' : 'link'
                }
                to="/imaginacao"
                title="Ir para a página de Imaginação da Lausan Consultoria"
              >
                <li>Imaginação</li>
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                isActive ? 'link active' : 'link'
              }
                to="/perspectiva"
                title="Ir para a página de Perspectiva da Lausan Consultoria"
              >
                <li>Perspectivas</li>
              </NavLink>
              <NavLink
              className={({ isActive }) =>
              isActive ? 'link active' : 'link'
            }
                to="/objetivo"
                title="Ir para a página de Objetivos da Lausan Consultoria"
              >
                <li>Objetivos</li>
              </NavLink>
              <NavLink
              className={({ isActive }) =>
              isActive ? 'link active' : 'link'
            }
                to="/contato"
                title="Ir para a página de Contato da Lausan Consultoria"
              >
                <li>Contato</li>
              </NavLink>
            </ul>
          )}

          <button onClick={toggleNav} className="btn">
            <FiMenu />
          </button>
        </Content>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lausan-consultoria" element={<LausanConsultoria />} />
          <Route path="/imaginacao" element={<Imaginacao />} />
          <Route path="/perspectiva" element={<Perspectiva />} />
          <Route path="/objetivo" element={<Objetivo />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default App
