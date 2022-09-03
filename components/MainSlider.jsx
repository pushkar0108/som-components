import { useEffect } from "react";
import image from '../public/img/slider-1.jpg';

export default function MainSlider() {
  useEffect(() => {
    $(document).ready(function () {

      $('#main-slider').on('init', function (e, slick) {
        var $firstAnimatingElements = $('div.single-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      $('#main-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.single-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      $('#main-slider').slick({
        autoplay: true,
        autoplaySpeed: 10000,
        dots: true,
        fade: true,
        prevArrow: '<div className="slick-prev"><i className="fa fa-chevron-left"></i></div>',
        nextArrow: '<div className="slick-next"><i className="fa fa-chevron-right"></i></div>'
      });
      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    });

  }, []);

  return (
    <div id="main-slider" className="dl-slider">
      <div className="single-slide">
        <div className="bg-img kenburns-top-right"
          style = {{
            backgroundImage: "url(./img/slider-1.jpg)"
          }}
        ></div>
        <div className="overlay"></div>
        <div className="slider-content-wrap d-flex align-items-center text-left">
          <div className="container">
            <div className="slider-content">
              <div className="dl-caption medium">
                <div className="inner-layer">
                  <div data-animation="fade-in-right" data-delay="1s">Residencial</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-left" data-delay="2s">We provide outstanding</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-left" data-delay="2.5s">scaffolding services.</div>
                </div>
              </div>
              <div className="dl-caption small">
                <div className="inner-layer">
                  <div data-animation="fade-in-left" data-delay="3s">We have provided complete remodeling
                    and scaffolding solutions for <br />residential and commercial properties in cities.
                  </div>
                </div>
              </div>
              <div className="dl-btn-group">
                <div className="inner-layer">
                  <a href="#" className="dl-btn" data-animation="fade-in-left" data-delay="3.5s">View Projects
                    <i className="arrow_right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="bg-img kenburns-top-right"
          style = {{
            backgroundImage: "url(./img/slider-2.jpg)"
          }}></div>
        <div className="overlay"></div>
        <div className="slider-content-wrap d-flex align-items-center text-center">
          <div className="container">
            <div className="slider-content">
              <div className="dl-caption medium">
                <div className="inner-layer">
                  <div data-animation="fade-in-top" data-delay="1s">Residencial</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-bottom" data-delay="2s">We are professional</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-bottom" data-delay="2.5s">for building scaffolding.</div>
                </div>
              </div>
              <div className="dl-caption small">
                <div className="inner-layer">
                  <div data-animation="fade-in-bottom" data-delay="3s">We have provided complete
                    remodeling and scaffolding solutions for <br />residential and commercial properties
                    in cities.</div>
                </div>
              </div>
              <div className="dl-btn-group">
                <div className="inner-layer">
                  <a href="#" className="dl-btn" data-animation="fade-in-bottom" data-delay="3.5s">View
                    Projects <i className="arrow_right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="bg-img kenburns-top-right" style = {{
            backgroundImage: "url(./img/slider-3.jpg)"
          }}></div>
        <div className="overlay"></div>
        <div className="slider-content-wrap d-flex align-items-center text-right">
          <div className="container">
            <div className="slider-content">
              <div className="dl-caption medium">
                <div className="inner-layer">
                  <div data-animation="fade-in-left" data-delay="1s">Residencial</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-right" data-delay="2s">We will be happy to take care</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-right" data-delay="2.5s">of your scaffolding works.</div>
                </div>
              </div>
              <div className="dl-caption small">
                <div className="inner-layer">
                  <div data-animation="fade-in-right" data-delay="3s">We have provided complete remodeling
                    and scaffolding solutions for <br />residential and commercial properties in cities.
                  </div>
                </div>
              </div>
              <div className="dl-btn-group">
                <div className="inner-layer">
                  <a href="#" className="dl-btn" data-animation="fade-in-right" data-delay="3.5s">View
                    Projects <i className="arrow_right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


