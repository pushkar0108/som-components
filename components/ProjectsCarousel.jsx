import { useEffect } from "react";
import { products } from "../services/products";

export default function ProjectsCarousel() {
  useEffect(() => {
    $('#projects-carousel').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: false,
      smartSpeed: 500,
      nav: true,
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        580: {
          items: 2,
        },
        768: {
          items: 2,
        },
        992: {
          items: 4,
        }
      }
    });
  }, []);

  return (
    <section className="projects-section padding">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 col-md-6">
            <div className="section-heading mb-40">
              <span>Products</span>
              <h2>Discover the most fascinating <br />products for our clients</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-right">
            <a href="/products" className="default-btn">View All Products</a>
          </div>
        </div>
        <div id="projects-carousel" className="projects-carousel box-shadow owl-carousel">
          {
            products.map(product => {
              const { id, imgSrc, title, description } = product;
              return (
                <div className="project-item">
                  <img src={imgSrc} alt="projects" height={"250px"}/>
                  <div className="overlay"></div>
                  <a href={`/product/${id}`} className="view-icon ajax-popup-link" style={{fontSize: "18px"}}> 
                    More details &nbsp;
                    <i className="fas fa-expand"></i>
                  </a>
                  <div className="projects-content">
                    <h3>
                      <a href={`/product/${id}`} 
                        className="tittle">{title}</a>
                      </h3>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}


