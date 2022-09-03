import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        var primaryHeader = $('.primary-header'),
            headerClone = primaryHeader.clone();
        $('.header').after('<div class="sticky-header"></div>');
        $('.sticky-header').html(headerClone);
        var headerSelector = document.querySelector(".sticky-header");
        var headroom = new Headroom(headerSelector, {
            offset: 100
        });

        headroom.init();

        if ($('.primary-header').length) {
            $('.header .primary-header .burger-menu').on("click", function () {
                $(this).toggleClass('menu-open');
                $('.header .header-menu-wrap').slideToggle(300);
            });
            $('.sticky-header .primary-header .burger-menu').on("click", function () {
                $(this).toggleClass('menu-open');
                $('.sticky-header .header-menu-wrap').slideToggle(300);
            });
        }

        $('.header-menu-wrap ul li:has(ul)').each(function () {
            $(this).append('<span className="dropdown-plus"></span>');
            $(this).addClass('dropdown_menu');
        });

        $('.header-menu-wrap .dropdown-plus').on("click", function () {
            $(this).prev('ul').slideToggle(300);
            $(this).toggleClass('dropdown-open');
        });
        $('.header-menu-wrap .dropdown_menu a').append('<span></span>');
    }, []);

    return (
        <header className="header">
            <div className="primary-header">
                <div className="container">
                    <div className="primary-header-inner">
                        <div className="header-logo">
                            <a href="#">
                                <h3>Balaji Shutterings</h3>
                            </a>
                        </div>
                        <div className="header-menu-wrap">
                            <ul className="dl-menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="#">About</a>
                                    <ul>
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="about-company.html">About Company</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Services</a>
                                    <ul>
                                        <li><a href="services-1.html">Services 01</a></li>
                                        <li><a href="services-2.html">Services 02</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Pages</a>
                                    <ul>
                                        <li><a href="projects.html">Our Projects</a></li>
                                        <li><a href="project-single.html">Project Single</a></li>
                                        <li><a href="team.html">Our Team</a></li>
                                        <li><a href="testimonial.html">Testimonial</a></li>
                                        <li><a href="404.html">404 Error</a></li>
                                    </ul>
                                </li>
                                <li><a href="./contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="header-right">
                            <a className="menu-btn" href="#">Request a Quote</a>

                            <div className="mobile-menu-icon">
                                <div className="burger-menu">
                                    <div className="line-menu line-half first-line"></div>
                                    <div className="line-menu"></div>
                                    <div className="line-menu line-half last-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
