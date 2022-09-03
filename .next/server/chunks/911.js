"use strict";
exports.id = 911;
exports.ids = [911];
exports.modules = {

/***/ 911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./components/Header.jsx


function Header() {
    (0,external_react_.useEffect)(()=>{
        var primaryHeader = $(".primary-header"), headerClone = primaryHeader.clone();
        $(".header").after('<div class="sticky-header"></div>');
        $(".sticky-header").html(headerClone);
        var headerSelector = document.querySelector(".sticky-header");
        var headroom = new Headroom(headerSelector, {
            offset: 100
        });
        headroom.init();
        if ($(".primary-header").length) {
            $(".header .primary-header .burger-menu").on("click", function() {
                $(this).toggleClass("menu-open");
                $(".header .header-menu-wrap").slideToggle(300);
            });
            $(".sticky-header .primary-header .burger-menu").on("click", function() {
                $(this).toggleClass("menu-open");
                $(".sticky-header .header-menu-wrap").slideToggle(300);
            });
        }
        $(".header-menu-wrap ul li:has(ul)").each(function() {
            $(this).append('<span className="dropdown-plus"></span>');
            $(this).addClass("dropdown_menu");
        });
        $(".header-menu-wrap .dropdown-plus").on("click", function() {
            $(this).prev("ul").slideToggle(300);
            $(this).toggleClass("dropdown-open");
        });
        $(".header-menu-wrap .dropdown_menu a").append("<span></span>");
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "primary-header",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "primary-header-inner",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header-logo",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Balaji Shutterings"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header-menu-wrap",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "dl-menu",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/",
                                            children: "Home"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "About"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "about-us.html",
                                                            children: "About Us"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "about-company.html",
                                                            children: "About Company"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "Services"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "services-1.html",
                                                            children: "Services 01"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "services-2.html",
                                                            children: "Services 02"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                children: "Pages"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "projects.html",
                                                            children: "Our Projects"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "project-single.html",
                                                            children: "Project Single"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "team.html",
                                                            children: "Our Team"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "testimonial.html",
                                                            children: "Testimonial"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            href: "404.html",
                                                            children: "404 Error"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "./contact",
                                            children: "Contact"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-right",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "menu-btn",
                                    href: "#",
                                    children: "Request a Quote"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mobile-menu-icon",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "burger-menu",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "line-menu line-half first-line"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "line-menu"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "line-menu line-half last-line"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Footer.jsx

function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "widget-section padding",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-6 sm-padding",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "widget-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/logo-light.png",
                                                alt: "brand"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Building your own home is about desire, fantasy. But it’s achievable anyone can do it."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-2 col-sm-6 sm-padding",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "widget-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Company"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "widget-links",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "About Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Our Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Clients Reviews"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#",
                                                        children: "Contact Us"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 col-sm-6 sm-padding",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "widget-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Headquaters"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "962 Fifth Avenue, 3rd Floor New York, NY10022"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "http://html.dynamiclayers.net/cdn-cgi/l/email-protection",
                                                className: "__cf_email__",
                                                "data-cfemail": "a8e0cdc4c4c7e8e9c4cdd0c9fcc0cdc5cd86c6cddc",
                                                children: "[email\xa0protected]"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "(+123) 456 789 101"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-4 col-sm-6 sm-padding",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "widget-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            children: "Newslatter Subscription"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Subscribe and get 10% off from our ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "architecture company."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "subscribe-box clearfix",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "subscribe-form-wrap",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    action: "#",
                                                    className: "subscribe-form",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                            type: "email",
                                                            name: "email",
                                                            id: "subs-email",
                                                            className: "form-input",
                                                            placeholder: "Enter Your Email Address..."
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                            type: "submit",
                                                            className: "submit-btn",
                                                            children: "Subscribe"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            id: "subscribe-result",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "subscription-success"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                    className: "subscription-error"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "footer-section align-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "templateshub.net",
                            children: "Templates Hub"
                        })
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/ScrollToTop.jsx


function ScrollToTop() {
    (0,external_react_.useEffect)(()=>{
        $(window).on("scroll", function() {
            if ($(this).scrollTop() > 100) {
                $("#scroll-to-top").fadeIn();
            } else {
                $("#scroll-to-top").fadeOut();
            }
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        "data-scroll": true,
        href: "#header",
        id: "scroll-to-top",
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "arrow_carrot-up"
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout.jsx





function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charset: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Scaffolding & Building HTML Template"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "AlexaTheme"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Balaji | Scaffolding & Building HTML Template"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        type: "image/x-icon",
                        href: "img/favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/fontawesome.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/themify-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/elegant-line-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/elegant-font-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/flaticon.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/animate.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/slick.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/slider.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/odometer.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/venobox/venobox.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/owl.carousel.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/main.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "css/responsive.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "site-preloader-wrap",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "spinner"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ScrollToTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                "data-cfasync": "false",
                src: "../../cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/jquery-1.12.4.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/bootstrap.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/tether.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/headroom.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/owl.carousel.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/smooth-scroll.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/venobox.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/jquery.ajaxchimp.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/slick.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/waypoints.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/odometer.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/vendor/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "js/main.js"
            })
        ]
    });
};


/***/ })

};
;