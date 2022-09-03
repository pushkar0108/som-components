import { useEffect } from "react";

export default function ProductDetails({ product = {} }) {
  const { title, description, imgSrc } = product;
  useEffect(() => {
    $('#project-single-carousel').owlCarousel({
      loop: true,
      margin: 5,
      autoplay: true,
      smartSpeed: 500,
      nav: false,
      navText: [
        '<i class="fa fa-caret-left"></i>', 
        '<i class="fa fa-caret-right"></i>'
      ],
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1,
        },
        768: {
          items: 1,
        },
        992: {
          items: 1,
        }
      }
    });
  }, []);

  return (
    <section className="project-single-section padding">
      <div className="container">
        <div className="row project-single-wrap align-items-center">
          <div className="col-md-6 sm-padding">
            <div id="project-single-carousel" className="project-single-carousel box-shadow owl-carousel">
              <div className="single-carousel">
                <img src={imgSrc} alt="img" />
              </div>
              <div className="single-carousel">
                <img src={imgSrc} alt="img" />
              </div>
              <div className="single-carousel">
                <img src={imgSrc} alt="img" />
              </div>
            </div>
          </div>
          <div className="col-md-6 sm-padding">
            <div className="project-single-content">
              <h2>{title}</h2>
              <p>{description}</p>
              <ul className="project-details">
                <li><span>Architects</span>: José Carpio, Valentin Lacoste, Kyle Frederick</li>
                <li><span>Location</span>: 962 Fifth Avenue, 3rd Floor New York.</li>
                <li><span>Category</span>: Architecture, Interior.</li>
                <li><span>Area</span>: 119.0.563</li>
                <li><span>Project Year</span>: 2019/2020</li>
                <li><span>Manufactures</span>: AlexaTheme construction company.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


