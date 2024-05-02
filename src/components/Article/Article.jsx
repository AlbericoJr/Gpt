import "./Article.css"



const Article = ({imgUrl, date, title}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Leia o artigo completo</p>
      </div>
    </div>
  )
}

export default Article
