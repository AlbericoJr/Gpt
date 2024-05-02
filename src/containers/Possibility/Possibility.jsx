import "./Possibility.css"

import possibilityImage from "../../assets/possibility.png"

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Tenha acesso costante ao GPT</h4>
        <h1 className="gradient__text">
          As possibilidades estão além da sua imaginação
        </h1>
        <p>
        As possibilidades de uso do GPT são vastas e estão em constante expansão à medida que a tecnologia evolui e novas aplicações são descobertas.
        </p>
        <h4>
          Acesse o GPT
        </h4>
      </div>
    </div>
  )
}

export default Possibility