import { useEffect } from "react";

export default function ProductDetails({ product = {} }) {
  const { title, description, imgSrc, sizes } = product;
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
              {
                sizes &&
                <div>
                  <h3>Available in sizes:</h3>
                  <ul className="project-details">
                    {
                      sizes.map(size => {
                        return <li>{size}</li>
                      })
                    }
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


