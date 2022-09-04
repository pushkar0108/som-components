"use strict";
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 484:
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
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "header-logo",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "/",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/img/logo-vmg-orange1.png",
                                        alt: "brand",
                                        height: "100"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                                    children: [
                                        "VMG ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Shuttering ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        " Store"
                                    ]
                                })
                            ]
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
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/about",
                                            children: "About"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/services",
                                            children: "Services"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/products",
                                            children: "Products"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/contact",
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
                                    href: "/contact",
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
                                    className: "widget-content footer-logo",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "/img/logo-vmg.png",
                                                alt: "brand",
                                                height: "150"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Strong foundations, ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                "for a strong future"
                                            ]
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
                                                        href: "/about",
                                                        children: "About Us"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/services",
                                                        children: "Our Services"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/products",
                                                        children: "Products"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "/contact",
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
                                            children: "Plot No. 1, Survey No. 142/1, Budasan, Taluka-Kadi, Distt. Mehsana, Gujarat-382715"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto: vmgshutteringstore@gmail.com",
                                                children: "vmgshutteringstore@gmail.com"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:+91-8799067836",
                                                children: "+91 87990 67836"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "tel:+91-8799079659",
                                                children: "+91 87990 79659"
                                            })
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
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Subscribe to get the latest news."
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
                        children: "Copyright \xa9 VMG Shutterings"
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
        id: "scroll-to-top",
        onClick: ()=>{
            window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
            });
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "arrow_carrot-up"
        })
    });
};

;// CONCATENATED MODULE: ./components/WhatsappButton.jsx

function WhatsappButton() {
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        id: "whatsapp-icon",
        "aria-label": "Chat on WhatsApp",
        href: "https://wa.me/918860001449?text=Welcome to VMG Shutterings! For any requirements of Scaffolding on rent or hire, Please drop a message.",
        target: "_blank",
        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/img/whatsapp.png"
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
                        content: "Scaffolding"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "AlexaTheme"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "VMG Shuttering | Scaffolding"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        type: "image/x-icon",
                        href: "/img/favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/fontawesome.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/themify-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/elegant-line-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/elegant-font-icons.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/flaticon.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/animate.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/bootstrap.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/slick.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/slider.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/odometer.min.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/venobox/venobox.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/owl.carousel.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/main.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "/css/responsive.css"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("script", {
                        src: "/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"
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
            /*#__PURE__*/ jsx_runtime_.jsx(WhatsappButton, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/jquery-1.12.4.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/bootstrap.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/tether.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/headroom.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/owl.carousel.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/smooth-scroll.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/venobox.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/jquery.ajaxchimp.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/slick.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/waypoints.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/odometer.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/vendor/wow.min.js"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("script", {
                src: "/js/main.js"
            })
        ]
    });
};


/***/ })

};
;