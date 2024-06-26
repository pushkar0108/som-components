
export default function AboutSection() {
  return (
    <section id="about-section" className="about-section padding">
      <div className="container">
        <div className="row about-wrap">
          <div className="col-lg-6 sm-padding">
            <div className="about-content wow fadeInLeft">
              <h2>About SOM Components</h2>
              <p>Welcome to SOM Components, your premier destination for high-quality tape products with precision cutting services. With a focus on excellence and innovation, we provide tailored solutions to meet the diverse needs of our customers across various industries.</p>
              <p>Our products include Adhesive Tapes, Industrial Tapes, Specialty Tapes, Custom Tapes - <b> Single Sided Polyester Tape, Kapton Polyimide Tape, Cross Filament Tape, Double Sided Polyster Tape,Double side EVA Foam Tape.</b> </p>
              <p>In addition to our extensive tape product line, we offer precision cutting services to ensure that your tapes are delivered to your exact specifications. Whether you require standard sizes or custom dimensions, our cutting capabilities enable us to meet your cutting needs with precision and efficiency.</p>
              <a href="/about" className="default-btn">More About Us</a>
            </div>
          </div>
          <div className="col-lg-6 sm-padding">
            <ul className="about-promo">
              <li className="about-promo-item wow fadeInUp">
                <i className="flaticon-factory"></i>
                <div>
                  <h3>Exceptional Quality</h3>
                  <p>Our tape products are manufactured using the finest materials and the latest manufacturing techniques to ensure exceptional quality and performance.</p>
                </div>
              </li>
              <li className="about-promo-item wow fadeInUp" data-wow-delay="300ms">
                <i className="flaticon-worker"></i>
                <div>
                  <h3>Customization</h3>
                  <p>We offer customization options to meet your unique requirements, whether it's custom sizes, colors, or adhesive formulations.
</p>
                </div>
              </li>
              <li className="about-promo-item wow fadeInUp" data-wow-delay="500ms">
                <i className="flaticon-gear"></i>
                <div>
                  <h3>Fast Turn around</h3>
                  <p>With our efficient manufacturing processes and cutting-edge facilities, we can provide fast turn around times to meet your deadlines and keep your projects on schedule.
</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}


