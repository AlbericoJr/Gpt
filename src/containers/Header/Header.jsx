import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

import "./Header.css"

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
        Vamos construir algo incrível com GPT
        </h1>
        <p>
        Crie experiências transformadoras de IA alimentadas por modelos e ferramentas líderes do setor.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Andress" />
          <button type="button">Iniciar</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
          Mais de 1.600 pessoas solicitaram acesso para visita nas últimas 24 horas
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header