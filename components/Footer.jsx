import SocialIcons from "../components/SocialIcons";

export default function Footer({ }) {
    return (
        <>
            <section className="widget-section padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="widget-content footer-logo">
                                <a><img src="/img/logo-som.png" alt="brand" height="100" /></a>
                                <p>Tape Innovations: <br />Redefining Precision and Quality</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4>Company</h4>
                                <ul className="widget-links">
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/services">Our Services</a></li>
                                    <li><a href="/products">Products</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                       
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4>Products</h4>
                                <ul className="widget-links">
                                    <li><a href="/product/1">Single Sided Polyester Tape</a></li>
                                    <li><a href="/product/3">Kapton Polyimide Tape</a></li>
                                    <li><a href="/product/7">Cross Filament Tape</a></li>
                                    <li><a href="/product/8">Double Sided Polyster Tape</a></li>
                                    <li><a href="/product/9">EPE Foam Sheet</a></li>
                                </ul>
                                {/* <SocialIcons />                                 */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4>Head Office</h4>
                                <p>C-85, 2nd Floor, Sector-10, Noida, Uttar Pradesh - 201301</p>
                                <p>Maanav Goel</p>
                                <span>
                                    <a href = "mailto: somcomponents@gmail.com">somcomponents@gmail.com</a>
                                </span>
                                <span>
                                    <a href="tel:+91-9871238666">
                                        +91 987 123 8666
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section align-center">
                <div className="container">
                    <p>Copyright © SOM Components</p>
                </div>
            </footer>
        </>
    )
}


