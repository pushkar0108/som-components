
export default function AboutSection() {
  return (
    <section className="about-section padding">
      <div className="container">
        <div className="row about-wrap">
          <div className="col-lg-6 sm-padding">
            <div className="about-content wow fadeInLeft">
              <h2>We are the expart on this field better solution since 1984.</h2>
              <p>We are committed to building a sustainable future by fostering a collaborative spirit that
                creates exceptional experiences, balanced relationships, and community built environment.
                Building isn’t just job. It's our passion. With every project we undertake, we set the bar
                high and provide the best industry.</p>
              <a href="#" className="default-btn">More About Us</a>
            </div>
          </div>
          <div className="col-lg-6 sm-padding">
            <ul className="about-promo">
              <li className="about-promo-item wow fadeInUp">
                <i className="flaticon-factory"></i>
                <div>
                  <h3>Professional Liability</h3>
                  <p>We are committed to building a sustainable future by fostering a collaborative
                    spirit.</p>
                </div>
              </li>
              <li className="about-promo-item wow fadeInUp" data-wow-delay="300ms">
                <i className="flaticon-worker"></i>
                <div>
                  <h3>Dedicated To Our Clients</h3>
                  <p>We are committed to building a sustainable future by fostering a collaborative
                    spirit.</p>
                </div>
              </li>
              <li className="about-promo-item wow fadeInUp" data-wow-delay="500ms">
                <i className="flaticon-gear"></i>
                <div>
                  <h3>Outstanding Services</h3>
                  <p>We are committed to building a sustainable future by fostering a collaborative
                    spirit.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}


