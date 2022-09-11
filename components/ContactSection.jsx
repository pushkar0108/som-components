import SocialIcons from "../components/SocialIcons";

export default function ContactSection() {
    return (
        <section className="contact-section bg-grey padding">
            <div className="dots"></div>
            <div className="container">
                <div className="contact-wrap d-flex align-items-center row">
                    <div className="col-md-6 padding-15">
                        <div className="contact-info">
                            <h2>Get in touch with us & <br />send us message today!</h2>
                            <p>
                                VMG Shuttering Store is the leading supplier of Shuttering and Scaffolding material on hire basis. We use the tested and high quality materials to manufacture our products. We have most modern workshop fitted with heavy-duty automatic plant.
                            </p>
                            <h3>
                                Plot No. 1, Survey No. 142/1, Budasan, 
                                <br /> 
                                Taluka-Kadi, Distt. Mehsana, Gujarat-382715
                            </h3>
                            <h4>
                                <span>Email:</span> <a href = "mailto: vmgshutteringstore@gmail.com">vmgshutteringstore@gmail.com</a> <br /> <span>Phone:</span> 
                                <a href="tel:+91-8799067836">
                                    +91 87990 67836
                                </a>, &nbsp;
                                <a href="tel:+91-8799079659">
                                    +91 87990 79659
                                </a> <br />
                            </h4>
                            <SocialIcons />
                        </div>
                    </div>
                    <div className="col-md-6 padding-15">
                        <div className="contact-form">
                            <form action="http://html.dynamiclayers.net/at/indico/contact.php" method="post" id="ajax_form"
                                className="form-horizontal">
                                <div className="form-group colum-row row">
                                    <div className="col-sm-6">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Name"
                                            required />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Email"
                                            required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <textarea id="message" name="message" cols="30" rows="5"
                                            className="form-control message" placeholder="Message" required></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <button id="submit" className="default-btn" type="submit">Send Message</button>
                                    </div>
                                </div>
                                <div id="form-messages" className="alert" role="alert"></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


