import Feature from "../../components/Feature/Feature"
import "./Features.css"

const featuresData = [
  {
    title: 'Potencial Transformador',
    text: 'Explorando como o GPT pode impulsionar a automação de tarefas rotineiras, liberando tempo e recursos para atividades mais criativas e estratégicas, moldando um futuro de eficiência e produtividade.',
  },
  {
    title: 'Democratização do Conhecimento',
    text: 'Discutindo como o GPT pode democratizar o acesso à informação e à educação, capacitando pessoas em todo o mundo a adquirir novas habilidades e conhecimentos, ampliando assim as oportunidades para todos.',
  },
  {
    title: 'Interação Personalizada',
    text: 'Considerando como o GPT pode aprimorar a interação humana, fornecendo assistência personalizada em uma variedade de contextos, desde o suporte ao cliente até o treinamento personalizado, promovendo experiências mais gratificantes e relevantes para os usuários.',
  },
  {
    title: 'Colaboração Inteligente',
    text: 'Explorando o potencial do GPT para promover a colaboração entre humanos e máquinas, destacando como essa parceria pode levar a avanços significativos em campos como pesquisa científica, desenvolvimento tecnológico e solução de problemas complexos, impulsionando assim a inovação e o progresso.',
  }
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
        O futuro é agora e você só precisa realizá-lo
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features