import { useEffect } from "react";

export default function ProductDetails({ product = {} }) {
  const { title, description, imgSrcs, properties, applications } = product;
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
              {
                imgSrcs.map(imgSrc => {
                  return (
                    <div key={imgSrc} className="single-carousel">
                      <img src={imgSrc} alt="img" />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="col-md-6 sm-padding">
            <div className="project-single-content">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="row">
                {
                    properties &&
                    <div className={applications ? "col-md-6" : "col-md-12"}>
                      <div>
                        <h3>PROPERTIES:</h3>
                        <ul className="project-details">
                          {
                            properties.map(property => {
                              return <li key={property}>{property}</li>
                            })
                          }
                        </ul>
                      </div>
                    </div>
                }
                {
                  applications &&
                  <div className={properties ? "col-md-6" : "col-md-12"}>
                    <div>
                      <h3>APPLICATIONS:</h3>
                      <ul className="project-details">
                        {
                          applications.map(application => {
                            return <li key={application}>{application}</li>
                          })
                        }
                      </ul>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


