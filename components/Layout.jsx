import Head from 'next/head'
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Scaffolding & Building HTML Template" />
        <meta name="author" content="AlexaTheme" />
        <title>Balaji | Scaffolding & Building HTML Template</title>
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.png" />

        <link rel="stylesheet" href="css/fontawesome.min.css" />

        <link rel="stylesheet" href="css/themify-icons.css" />

        <link rel="stylesheet" href="css/elegant-line-icons.css" />

        <link rel="stylesheet" href="css/elegant-font-icons.css" />

        <link rel="stylesheet" href="css/flaticon.css" />

        <link rel="stylesheet" href="css/animate.min.css" />

        <link rel="stylesheet" href="css/bootstrap.min.css" />

        <link rel="stylesheet" href="css/slick.css" />

        <link rel="stylesheet" href="css/slider.css" />

        <link rel="stylesheet" href="css/odometer.min.css" />

        <link rel="stylesheet" href="css/venobox/venobox.css" />

        <link rel="stylesheet" href="css/owl.carousel.css" />

        <link rel="stylesheet" href="css/main.css" />

        <link rel="stylesheet" href="css/responsive.css" />
        <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
      </Head>
      <div className="site-preloader-wrap">
        <div className="spinner"></div>
      </div>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />

      <script data-cfasync="false" src="../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>
      <script src="js/vendor/jquery-1.12.4.min.js"></script>

      <script src="js/vendor/bootstrap.min.js"></script>

      <script src="js/vendor/tether.min.js"></script>

      <script src="js/vendor/headroom.min.js"></script>

      <script src="js/vendor/owl.carousel.min.js"></script>

      <script src="js/vendor/smooth-scroll.min.js"></script>

      <script src="js/vendor/venobox.min.js"></script>

      <script src="js/vendor/jquery.ajaxchimp.min.js"></script>

      <script src="js/vendor/slick.min.js"></script>

      <script src="js/vendor/waypoints.min.js"></script>

      <script src="js/vendor/odometer.min.js"></script>

      <script src="js/vendor/wow.min.js"></script>

      <script src="js/main.js"></script>

    </div>
  )
}


