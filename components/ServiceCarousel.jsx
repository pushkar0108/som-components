import { useEffect } from "react";

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
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-3d-printer"></i>
                </div>
                <h3>General Building</h3>
                <p>We are committed a sustainable future fostering a collaborative spirit.</p>
                <a href="#" className="read-more">Read More</a>
                <div className="overlay-icon">
                  <i className="flaticon-3d-printer"></i>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-industrial-robot"></i>
                </div>
                <h3>Building Scaffolding</h3>
                <p>We are committed a sustainable future fostering a collaborative spirit.</p>
                <a href="#" className="read-more">Read More</a>
                <div className="overlay-icon">
                  <i className="flaticon-industrial-robot"></i>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-assembly-line"></i>
                </div>
                <h3>Refurbishments</h3>
                <p>We are committed a sustainable future fostering a collaborative spirit.</p>
                <a href="#" className="read-more">Read More</a>
                <div className="overlay-icon">
                  <i className="flaticon-assembly-line"></i>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-conveyor"></i>
                </div>
                <h3>Building Renovation</h3>
                <p>We are committed a sustainable future fostering a collaborative spirit.</p>
                <a href="#" className="read-more">Read More</a>
                <div className="overlay-icon">
                  <i className="flaticon-conveyor"></i>
                </div>
              </div>
              <div className="service-item">
                <div className="service-icon">
                  <i className="flaticon-control-system"></i>
                </div>
                <h3>Architectural Plans</h3>
                <p>We are committed a sustainable future fostering a collaborative spirit.</p>
                <a href="#" className="read-more">Read More</a>
                <div className="overlay-icon">
                  <i className="flaticon-control-system"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


