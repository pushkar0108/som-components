import { useEffect } from "react";

export default function ProjectsCarousel() {
  useEffect(() => {
    $('#projects-carousel').owlCarousel({
      loop: true,
      margin: 0,
      autoplay: false,
      smartSpeed: 500,
      nav: true,
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        580: {
          items: 2,
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
    <section className="projects-section padding">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-8 col-md-6">
            <div className="section-heading mb-40">
              <span>Projects</span>
              <h2>Discover the most fascinating <br />projects for our clients</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-right">
            <a href="#" className="default-btn">View All Projects</a>
          </div>
        </div>
        <div id="projects-carousel" className="projects-carousel box-shadow owl-carousel">
          <div className="project-item">
            <img src="/img/project-1.jpg" alt="projects" />
            <div className="overlay"></div>
            <a href="img/project-1.jpg" className="view-icon img-popup" data-gall="project"> <i
              className="fas fa-expand"></i></a>
            <div className="projects-content">
              <a href="#" className="category">Interior</a>
              <h3><a href="#" className="tittle">Rectangular house near italy</a></h3>
            </div>
          </div>
          <div className="project-item">
            <img src="/img/project-2.jpg" alt="projects" />
            <div className="overlay"></div>
            <a href="img/project-2.jpg" className="view-icon img-popup" data-gall="project"> <i
              className="fas fa-expand"></i></a>
            <div className="projects-content">
              <a href="#" className="category">Architecture</a>
              <h3><a href="#" className="tittle">Cathedral of brasilia brasilia</a></h3>
            </div>
          </div>
          <div className="project-item">
            <img src="/img/project-3.jpg" alt="projects" />
            <div className="overlay"></div>
            <a href="img/project-3.jpg" className="view-icon img-popup" data-gall="project"> <i
              className="fas fa-expand"></i></a>
            <div className="projects-content">
              <a href="#" className="category">Design</a>
              <h3><a href="#" className="tittle">Harpa concert hall reykjavik</a></h3>
            </div>
          </div>
          <div className="project-item">
            <img src="/img/project-4.jpg" alt="projects" />
            <div className="overlay"></div>
            <a href="img/project-4.jpg" className="view-icon img-popup" data-gall="project"> <i
              className="fas fa-expand"></i></a>
            <div className="projects-content">
              <a href="#" className="category">Architecture</a>
              <h3><a href="#" className="tittle">Milwauke museum wisconsin</a></h3>
            </div>
          </div>
          <div className="project-item">
            <img src="/img/project-5.jpg" alt="projects" />
            <div className="overlay"></div>
            <a href="img/project-5.jpg" className="view-icon img-popup" data-gall="project"> <i
              className="fas fa-expand"></i></a>
            <div className="projects-content">
              <a href="#" className="category">Design</a>
              <h3><a href="#" className="tittle">The dancing house prague</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


