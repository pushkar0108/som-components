import { useEffect } from "react";
import { products } from "../services/products";

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
                            <a href="/">
                                <img src="/img/logo-cropped-orange.png" alt="brand" height="60" />
                            </a>
                            <h3>SOM <br />Components</h3>
                        </div>
                        <div className="header-menu-wrap">
                            <ul className="dl-menu">
                                <li>
                                    <a href="/">Home</a></li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/services">Services</a>
                                </li>
                                <li>
                                    <a href="/products">Products</a>
                                    <ul>
                                        {
                                            products.map(product => {
                                                const {id, title} = product;
                                                return <li key={id}>
                                                    <a href={`/product/${id}`}>{title}</a>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <a href="/branch/1">Branches</a>
                                    <ul style={{display: "block"}}>
                                        <li>
                                            <a href={`/branch/1`}>
                                                Gurgaon
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`/branch/2`}>
                                                Gujarat
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="header-right">
                            <a className="menu-btn" href="/contact">
                                Request a Quote
                            </a>
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
