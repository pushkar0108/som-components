import { products } from "../services/products";

const Product = ({ id, imgSrc, title, description }) => {
  return (
    <div className="col-lg-4 col-sm-6 padding-15">
      <div className="project-item" style={{
        border: "1px solid #d7e1e8cf",
        borderRadius: "5px"
      }}>
        <img src={imgSrc} alt="projects" />
        <div className="overlay"></div>
        <a href={`/product/${id}`} className="view-icon ajax-popup-link"> 
          <i className="fas fa-expand"></i>
        </a>
        <div className="projects-content">
          {/* <a href="#" className="category">Interior</a> */}
          <h3><a href="#" className="tittle">{title}</a></h3>
          <p style={{color: "white"}}>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductsSection() {
  return (
    <section className="projects-section padding">
      <div className="container">
        <div className="row">
          {
            products.map(product => {
              return <Product 
                key={product.id}
                id={product.id}
                imgSrc={product.imgSrc}
                title={product.title}
                description={product.description}
              />
            })
          }
        </div>
      </div>
    </section>
  )
}


