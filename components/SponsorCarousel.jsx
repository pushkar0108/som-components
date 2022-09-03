import { useEffect } from "react"


export default function SponsorCarousel() {
  useEffect(() => {
    $('#sponsor-carousel').owlCarousel({
      loop: true,
      margin: 5,
      center: false,
      autoplay: true,
      smartSpeed: 500,
      nav: false,
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
      dots: false,
      responsive: {
        0: {
          items: 2
        },
        480: {
          items: 3,
        },
        768: {
          items: 3,
        },
        992: {
          items: 6,
        }
      }
    });
  }, []);

  return (
    <div className="sponsor-section bg-grey">
      <div className="dots"></div>
      <div className="container">
        <div id="sponsor-carousel" className="sponsor-carousel owl-carousel">
          <div className="sponsor-item">
            <img src="img/sponsor1.png" alt="sponsor" />
          </div>
          <div className="sponsor-item">
            <img src="img/sponsor2.png" alt="sponsor" />
          </div>
          <div className="sponsor-item">
            <img src="img/sponsor3.png" alt="sponsor" />
          </div>
          <div className="sponsor-item">
            <img src="img/sponsor4.png" alt="sponsor" />
          </div>
          <div className="sponsor-item">
            <img src="img/sponsor5.png" alt="sponsor" />
          </div>
          <div className="sponsor-item">
            <img src="img/sponsor6.png" alt="sponsor" />
          </div>
          <div className="sponsor-item">
            <img src="img/sponsor7.png" alt="sponsor" />
          </div>
          <div className="sponsor-item">
            <img src="img/sponsor8.png" alt="sponsor" />
          </div>
        </div>
      </div>
    </div>

  )
}


