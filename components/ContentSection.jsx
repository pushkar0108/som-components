
export default function ContentSection() {
  return (
    <section className="content-section padding">
        <div className="container">
          <div className="row content-wrap">
            <div className="col-lg-6 sm-padding wow fadeInLeft" data-wow-delay="100ms">
              <img className="box-shadow" className="box-shadow" src="/img/content-1.jpg" alt="img" />
            </div>
            <div className="col-lg-6 sm-padding">
              <div className="content-info wow fadeInRight" data-wow-delay="300ms">
                <span>Explore The Features</span>
                <h2>Offering the most complete integrated package!</h2>
                <p>We are committed to building a sustainable future by fostering a collaborative spirit that
                  creates exceptional experiences, balanced relationships, and community built environment.
                  Building isn’t just job. It's our passion. With every project we undertake, we set the bar
                  high and provide the best industry.</p>
                <a href="/contact" className="default-btn">Get Free Quote</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  )
}


