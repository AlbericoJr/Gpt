import "./Blog.css"
import Article from "../../components/Article/Article"
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
        Muita coisa está acontecendo, estamos falando sobre isso
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="Out 25, 2023" title="O Impacto do GPT na Comunicação Online"/>
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="Feb 02, 2023" title="A Tecnologia por Trás do GPT: Uma Visão Detalhada"/>
          <Article imgUrl={blog03} date="Nov 26, 2022" title="O GPT na Educação: Transformando a Forma Como Aprendemos"/>
          <Article imgUrl={blog04} date="Set 30, 2022" title="Ética e Desafios do GPT na Era da IA"/>
          <Article imgUrl={blog05} date="Mar 20, 2022" title="Estudos de Caso: Como Empresas Estão Usando o GPT com Sucesso"/>
        </div>
      </div>
    </div>
  )
}

export default Blog
