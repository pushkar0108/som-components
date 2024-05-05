import { useEffect } from "react";

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
            backgroundImage: "url(./img/slider-14.jpeg)"
          }}
        ></div>
        <div className="overlay"></div>
        <div className="slider-content-wrap d-flex align-items-center text-left">
          <div className="container">
            <div className="slider-content">
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-left" data-delay="2s">Adhesive and Industrial Tapes</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-left" data-delay="2.5s">for all industries and applications</div>
                </div>
              </div>
              <div className="dl-btn-group">
                <div className="inner-layer">
                  <a href="/products" className="dl-btn" data-animation="fade-in-right" data-delay="3.5s">View
                  Products <i className="arrow_right"></i></a>
                </div>
              </div>
              {/* <div className="dl-caption small">
                <div className="inner-layer">
                  <div data-animation="fade-in-left" data-delay="3s">We have provided complete remodeling
                    and scaffolding solutions for <br />residential and commercial properties in cities.
                  </div>
                </div>
              </div>
              <div className="dl-btn-group">
                <div className="inner-layer">
                  <a href="/products" className="dl-btn" data-animation="fade-in-left" data-delay="3.5s">View Products
                    <i className="arrow_right"></i></a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="bg-img kenburns-top-right"
          style = {{
            backgroundImage: "url(./img/slider-10.jpeg)"
          }}></div>
        <div className="overlay"></div>
        <div className="slider-content-wrap d-flex align-items-center text-center">
          <div className="container">
            <div className="slider-content">
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-top" data-delay="1s">Together with you, we develop</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-bottom" data-delay="2.5s">perfect adhesive tape solutions</div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-bottom" data-delay="3.5s">for your applications</div>
                </div>
              </div>
    
              <div className="dl-btn-group">
                <div className="inner-layer">
                  <a href="/products" className="dl-btn" data-animation="fade-in-bottom" data-delay="4.5s">View
                    Products <i className="arrow_right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single-slide">
        <div className="bg-img kenburns-top-right" style = {{
            backgroundImage: "url(./img/slider-7.jpeg)"
          }}></div>
        <div className="overlay"></div>
        <div className="slider-content-wrap d-flex align-items-center text-right">
          <div className="container">
            <div className="slider-content">
              <div className="dl-caption medium">
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-right" data-delay="2s">Your preferred partner </div>
                </div>
              </div>
              <div className="dl-caption big">
                <div className="inner-layer">
                  <div data-animation="fade-in-right" data-delay="2.5s">for all kind of Tapes</div>
                </div>
              </div>
              <div className="dl-caption small">
                <div className="inner-layer">
                  <div data-animation="fade-in-bottom" data-delay="2.5s">Adhesive Tapes, Industrial Tapes, Specialty Tapes, Custom Tapes</div>
                </div>
              </div>
              <div className="dl-btn-group">
                <div className="inner-layer">
                  <a href="/products" className="dl-btn" data-animation="fade-in-right" data-delay="3.5s">View
                  Products <i className="arrow_right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


