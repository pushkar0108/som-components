import SocialIcons from "../components/SocialIcons";

export default function ContactSection() {
    const handleSubmit = () => {
        const name = document.getElementById("form-name").value;
        const subject = document.getElementById("form-subject").value;
        const message = document.getElementById("form-message").value;
        const finalMessage = `${message}\n\nRegards - ${name}`;
    
        window.open(`mailto:somcomponents@gmail.com?subject=${subject}&body=${encodeURIComponent(finalMessage)}`, '_blank').focus();
    }

    return (
        <section className="contact-section bg-grey padding">
            <div className="dots"></div>
            <div className="container">
                <div className="contact-wrap d-flex align-items-center row">
                    <div className="col-md-6 padding-15">
                        <div className="contact-info">
                            <h2>Get in touch with us & <br />send us message today!</h2>
                            <p>
                                SOM Components is the leading manufacturer and supplier of high-quality tape products with precision cutting services. With a focus on excellence and innovation, we provide tailored solutions to meet the diverse needs of our customers across various industries.

                            </p>
                            <p>Ready to learn more about our tape products and cutting services? </p> 
                            <p>Contact us today to speak with one of our experts and discover how we can meet your tape needs with precision and excellence.

                                </p>
                            <h3>
                            C-85, 2nd Floor, Sector-10, Noida 
                                <br /> 
                                Uttar Pradesh - 201301
                            </h3>
                            <h4>Maanav Goel </h4>
                            <h4>
                                <span>Email:</span> <a href = "mailto: somcomponents@gmail.com">somcomponents@gmail.com</a> <br /> <span>Phone:</span>
                                <a href="tel:+91-9871238666">
                                    +91 987 123 8666
                                </a> <br />
                            </h4>
                            {/* <SocialIcons /> */}
                        </div>
                    </div>
                    <div className="col-md-6 padding-15">
                        <form className="contact-form">
                            <div className="form-horizontal">
                                <div className="form-group colum-row row">
                                    <div className="col-sm-6">
                                        <input type="text" id="form-name" name="name" className="form-control" placeholder="Name"
                                            required />
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="text" id="form-subject" name="subject" className="form-control" placeholder="Subject"
                                            required />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <textarea id="form-message" name="message" cols="30" rows="5"
                                            className="form-control message" placeholder="Message" required></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <button 
                                        id="submit" 
                                        onClick={handleSubmit}
                                        className="default-btn">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


