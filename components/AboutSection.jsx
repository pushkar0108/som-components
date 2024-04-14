
export default function AboutSection() {
  return (
    <section className="about-section padding">
      <div className="container">
        <div className="row about-wrap">
          <div className="col-lg-6 sm-padding">
            <div className="about-content wow fadeInLeft">
              <h2>About Us</h2>
              <p>Welcome to SOM Components, your premier destination for high-quality tape products with precision cutting services. With a focus on excellence and innovation, we provide tailored solutions to meet the diverse needs of our customers across various industries.</p>
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
                  <p>- We offer customization options to meet your unique requirements, whether it's custom sizes, colors, or adhesive formulations.
</p>
                </div>
              </li>
              <li className="about-promo-item wow fadeInUp" data-wow-delay="500ms">
                <i className="flaticon-gear"></i>
                <div>
                  <h3>Fast Turnaround</h3>
                  <p>- With our efficient manufacturing processes and cutting-edge facilities, we can provide fast turnaround times to meet your deadlines and keep your projects on schedule.
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


