import SocialIcons from "../components/SocialIcons";

export default function Footer({ }) {
    return (
        <>
            <section className="widget-section padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="widget-content footer-logo">
                                <a><img src="/img/logo-vmg.png" alt="brand" height="150" /></a>
                                <p>Strong foundations, <br />for a strong future</p>
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
                                <h4>Headquaters</h4>
                                <p>Plot No. 1, Survey No. 142/1, Budasan, Taluka-Kadi, Distt. Mehsana, Gujarat-382715</p>
                                <span>
                                    <a href = "mailto: somcomponents@gmail.com">somcomponents@gmail.com</a>
                                </span>
                                <span>
                                    <a href="tel:+91-9871238666">
                                        +91 98712 38666
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4>Newslatter Subscription</h4>
                                <p>Subscribe to get the latest news.</p>
                                <div className="subscribe-box clearfix">
                                    <div className="subscribe-form-wrap">
                                        <form action="#" className="subscribe-form">
                                            <input type="email" name="email" id="subs-email" className="form-input"
                                                placeholder="Enter Your Email Address..." />
                                            <button type="submit" className="submit-btn">Subscribe</button>
                                            <div id="subscribe-result">
                                                <p className="subscription-success"></p>
                                                <p className="subscription-error"></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <SocialIcons />                                
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


