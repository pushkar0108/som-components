
export default function ServiceSection() {
  return (
    <section className="service-section section-2 bg-grey padding">
      <div className="dots"></div>
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 sm-padding">
            <div className="service-content wow fadeInLeft">
              <span>Discover Our Products</span>
              <h2>Cutting Edge Solutions: Where Precision Meets Innovation</h2>
              <p>At SOM Components, we have established ourselves as a leader in the tape manufacturing industry through our dedication to quality, reliability, and customer satisfaction. We are committed to delivering superior tape products and cutting-edge solutions to our clients.</p>
              <p>Our products include Adhesive Tapes, Industrial Tapes, Specialty Tapes, Custom Tapes - Single Sided Polyester Tape, Kapton Polyimide Tape, Cross Filament Tape, Double Sided Polyster Tape,Double side EVA Foam Tape.</p>
              <p>In addition to our extensive tape product line, we offer precision cutting services to ensure that your tapes are delivered to your exact specifications. Whether you require standard sizes or custom dimensions, our cutting capabilities enable us to meet your cutting needs with precision and efficiency.</p>
              <p>At SOM Components, quality is our top priority. We adhere to rigorous quality control standards throughout the manufacturing process to ensure that every tape product meets the highest standards of performance and reliability.</p>
              {/* <a href="/services" className="default-btn">Our All Services</a> */}
            </div>
          </div>
          <div className="col-lg-6 sm-padding">
            <div className="row services-list">
              <div className="col-md-6 padding-15">
                <div className="service-item box-shadow wow fadeInUp" data-wow-delay="100ms">
                  <i className="flaticon-loader"></i>
                  <h3>Adhesive Tapes</h3>
                  <p>From double-sided tapes to masking tapes, we offer a comprehensive selection of adhesive tapes designed for bonding, sealing, and masking purposes.</p>
                </div>
              </div>
              <div className="col-md-6 padding-15 offset-top">
                <div className="service-item box-shadow wow fadeInUp" data-wow-delay="300ms">
                  <i className="flaticon-tanks"></i>
                  <h3>Industrial Tapes</h3>
                  <p>Our industrial tapes are engineered to withstand harsh environments and provide durable solutions for various industrial applications.</p>
                </div>
              </div>
              <div className="col-md-6 padding-15">
                <div className="service-item box-shadow wow fadeInUp" data-wow-delay="400ms">
                  <i className="flaticon-refinery"></i>
                  <h3>Specialty Tapes</h3>
                  <p>Discover our specialty tapes, including electrical insulation tapes, reflective tapes, and more, engineered to meet specific industry requirements.</p>
                </div>
              </div>
              <div className="col-md-6 padding-15 offset-top">
                <div className="service-item box-shadow wow fadeInUp" data-wow-delay="500ms">
                  <i className="flaticon-control-system"></i>
                  <h3>Custom Tapes</h3>
                  <p>- Need a tape solution tailored to your unique specifications? Our team can work with you to develop custom tapes that meet your exact needs.
</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


