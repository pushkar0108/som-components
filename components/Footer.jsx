
export default function Footer() {
    return (
        <>
            <section className="widget-section padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <a href="#"><img src="img/logo-light.png" alt="brand" /></a>
                                <p>Building your own home is about desire, fantasy. But it’s achievable anyone can do it.</p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4>Company</h4>
                                <ul className="widget-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Clients Reviews</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4>Headquaters</h4>
                                <p>962 Fifth Avenue, 3rd Floor New York, NY10022</p>
                                <span><a href="http://html.dynamiclayers.net/cdn-cgi/l/email-protection" className="__cf_email__"
                                    data-cfemail="a8e0cdc4c4c7e8e9c4cdd0c9fcc0cdc5cd86c6cddc">[email&#160;protected]</a></span>
                                <span>(+123) 456 789 101</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 sm-padding">
                            <div className="widget-content">
                                <h4>Newslatter Subscription</h4>
                                <p>Subscribe and get 10% off from our <br />architecture company.</p>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer-section align-center">
                <div className="container">
                    <p><a href="templateshub.net">Templates Hub</a></p>
                </div>
            </footer>
        </>
    )
}


