import {useEffect} from "react";

export default function TestimonialCarousel() {
  useEffect(() => {
    $('#testimonial-carousel').owlCarousel({
      loop: true,
      margin: 10,
      center: false,
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
          items: 2,
        }
      }
    });
  }, []);

  return (
    <section className="testimonial-section bg-grey padding">
      <div className="dots"></div>
      <div className="container">
        <div className="section-heading text-center mb-40 wow fadeInUp" data-wow-delay="100ms">
          <span>Testimonial</span>
          <h2>What people says</h2>
        </div>
        <div id="testimonial-carousel" className="testimonial-carousel box-shadow owl-carousel">
          <div className="testi-item d-flex align-items-center">
            <img src="img/testi-1.jpg" alt="img" />
            <div className="testi-content">
              <p>"Thank you for guiding us through the scaffolding process, understanding, and always ready
                to accommodate our needs. We love our new space and know that it was built by the very
                best!"</p>
              <h3>Kyle Frederick</h3>
              <ul className="rattings">
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
              </ul>
              <span>Director</span>
            </div>
            <i className="fa fa-quote-right"></i>
          </div>
          <div className="testi-item d-flex align-items-center">
            <img src="img/testi-2.jpg" alt="img" />
            <div className="testi-content">
              <p>"Thank you for guiding us through the scaffolding process, understanding, and always ready
                to accommodate our needs. We love our new space and know that it was built by the very
                best!"</p>
              <h3>Valentin Lacoste</h3>
              <ul className="rattings">
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
              </ul>
              <span>Director</span>
            </div>
            <i className="fa fa-quote-right"></i>
          </div>
          <div className="testi-item d-flex align-items-center">
            <img src="img/testi-3.jpg" alt="img" />
            <div className="testi-content">
              <p>"Thank you for guiding us through the scaffolding process, understanding, and always ready
                to accommodate our needs. We love our new space and know that it was built by the very
                best!"</p>
              <h3>José Carpio</h3>
              <ul className="rattings">
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
                <li><i className="fa fa-star"></i></li>
              </ul>
              <span>Director</span>
            </div>
            <i className="fa fa-quote-right"></i>
          </div>
        </div>
      </div>
    </section>

  )
}


