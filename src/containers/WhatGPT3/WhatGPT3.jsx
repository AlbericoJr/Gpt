import Feature from "../../components/Feature/Feature"
import "./WhatGPT3.css"


const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="gpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="O que é GPT" text="O GPT é uma versão específica do modelo de linguagem GPT (Generative Pre-trained Transformer), desenvolvido pela OpenAI. Ele é projetado para conversar e interagir com os usuários, respondendo a uma variedade de perguntas, fornecendo informações, realizando tarefas simples e até mesmo participando de conversas informais. O GPT usa inteligência artificial para entender e gerar texto em linguagem natural, tornando-se útil em uma variedade de contextos, desde assistência ao cliente até educação e entretenimento."/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
        As possibilidades estão além da sua imaginação
        </h1>
        <p>Explorar a biblioteca</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="São programas de computador que simulam conversas humanas. Eles usam inteligência artificial para entender e responder às mensagens dos usuários, sendo utilizados em diferentes áreas, como atendimento ao cliente, suporte técnico e vendas."/>
        <Feature title="Base de conhecimento" text="Ele tem acesso a uma ampla gama de informações e conhecimentos disponíveis na internet até a data do meu treinamento em janeiro de 2022. Isso inclui uma variedade de fontes, como artigos, livros, sites, documentos técnicos e muito mais. No entanto, ele não tem acesso em tempo real à internet ou a informações atualizadas após esse período."/>
        <Feature title="Educação" text="Ele possui uma base de conhecimento abrangente relacionada à educação, incluindo conceitos, teorias, disciplinas acadêmicas, métodos de ensino, e muitos outros tópicos. Ele foi treinado com uma vasta quantidade de textos educacionais, desde material didático até artigos e pesquisas acadêmicas, permitindo que ele responda a uma variedade de perguntas e forneça informações relevantes sobre diversos assuntos educacionais."/>
      </div>
    </div>
  )
}

export default WhatGPT3
