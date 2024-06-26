import "./Navbar.css"

import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { useState } from "react"
import Logo from "../../assets/Logo.svg"

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#gpt3">O que é GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case</a>
    </p>
    <p>
      <a href="#blog">Biblioteca</a>
    </p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Entrar</p>
        <button type="button">Cadastre-se</button>
      </div>
      
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          :  <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {
          toggleMenu &&(
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu/>
                <div className="gpt3__navbar-menu_container-links-sign">
                  <p>Entrar</p>
                  <button type="button">Cadastre-se</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
