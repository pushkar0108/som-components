
export default function ContactSection() {
  return (
    <section className="contact-section bg-grey padding">
        <div className="dots"></div>
        <div className="container">
            <div className="contact-wrap d-flex align-items-center row">
                <div className="col-md-6 padding-15">
                    <div className="contact-info">
                        <h2>Get in touch with us & <br />send us message today!</h2>
                        <p>Redison is a different kind of architecture practice. Founded by LoganCee in 1991, we’re an
                            employee-owned firm pursuing a democratic design process that values everyone’s input.</p>
                        <h3>198 West 21th Street, Suite 721 <br />New York, NY 10010</h3>
                        <h4><span>Email:</span> Dynamiclayers.Net <br /> <span>Phone:</span> +88 (0) 101 0000 000 <br />
                            <span>Fax:</span> +88 (0) 202 0000 001</h4>
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


