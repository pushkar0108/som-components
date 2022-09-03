import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });
  }, []);

  return (
    <a data-scroll id="scroll-to-top" onClick={() => {
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
       });
    }}>
      <i className="arrow_carrot-up"></i>
    </a>
  )
}


