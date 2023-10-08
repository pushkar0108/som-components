import { useEffect } from "react";
import { services } from "../services/services";

export default function ServiceCarousel() {
  useEffect(() => {
    $('#service-carousel').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: false,
      smartSpeed: 800,
      nav: true,
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1,
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
    <section className="service-section bg-grey padding">
      <div className="dark-bg"></div>
      <div className="section-heading dark-background text-center mb-40 wow fadeInUp" data-wow-delay="100ms">
        <span>Services</span>
        <h2>Take the world’s best <br /> services for you</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div id="service-carousel" className="service-carousel box-shadow owl-carousel">
              {
                services.map((service, index) => {
                  return (
                    <div key={index} className="service-item">
                      <div className="service-icon">
                        <i className={service.icon}></i>
                      </div>
                      <h3>{service.name}</h3>
                      <p>{service.description}</p>
                      <a href="/services" className="read-more">Read More</a>
                      <div className="overlay-icon">
                        <i className={service.icon}></i>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


