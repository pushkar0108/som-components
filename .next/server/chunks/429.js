"use strict";
exports.id = 429;
exports.ids = [429];
exports.modules = {

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ServiceCarousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./services/services.js
const services = [
    {
        name: "Scaffolding Rentals",
        icon: "flaticon-3d-printer",
        description: "We have most modern workshop fitted with heavy-duty automatic robotics machines. We have been providing our products in bulk to the various private companies, contractors and government departments PAN India since more than thirty years."
    },
    {
        name: "Scaffolding Manufacturing",
        icon: "flaticon-industrial-robot",
        description: "We use best quality pipes and heavy weight casted accessories for manufacturing scaffolding material which increases the durability, strength and lifespan of material."
    },
    {
        name: "Repair & Recondition",
        icon: "flaticon-assembly-line",
        description: "We offer repairing and reconditioning service of used scaffolding material to our clients. We offer best cleaning service using shot blasting machines which reconditions the material as good as new thus increasing the lifespan of it."
    },
    {
        name: "Scaffolding Sale",
        icon: "flaticon-conveyor",
        description: "We sell best quality material in bulk through our subsidiary companies. We use best quality pipes and heavy weight casted accessories to manufacture scaffolding material which increases the durability, strength and lifespan of material."
    },
    {
        name: "Purchase",
        icon: "flaticon-control-system",
        description: "Many construction companies and contractors after completion of the projects look for selling the used scaffolding. We offer convenient and seamless purchase of that old & used shuttering and scaffolding material on best prices from all over India."
    },
    {
        name: "Consultancy",
        icon: "flaticon-assembly-line",
        description: "We have experienced and professional team with more than thirty years of experience in construction and scaffolding industry. Our offering is imaginative and efficient and aims to help our customers to achieve their goals."
    }, 
];

;// CONCATENATED MODULE: ./components/ServiceCarousel.jsx



function ServiceCarousel() {
    (0,external_react_.useEffect)(()=>{
        $("#service-carousel").owlCarousel({
            loop: true,
            margin: 0,
            autoplay: false,
            smartSpeed: 800,
            nav: true,
            navText: [
                '<i class="fa fa-caret-left"></i>',
                '<i class="fa fa-caret-right"></i>'
            ],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 4
                }
            }
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "service-section bg-grey padding",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "dark-bg"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "section-heading dark-background text-center mb-40 wow fadeInUp",
                "data-wow-delay": "100ms",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: "Services"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        children: [
                            "Take the world’s best ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " services for you"
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-lg-10 offset-lg-1",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            id: "service-carousel",
                            className: "service-carousel box-shadow owl-carousel",
                            children: services.map((service)=>{
                                return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "service-item",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "service-icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: service.icon
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                            children: service.name
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: service.description
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "/services",
                                            className: "read-more",
                                            children: "Read More"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "overlay-icon",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: service.icon
                                            })
                                        })
                                    ]
                                });
                            })
                        })
                    })
                })
            })
        ]
    });
};


/***/ })

};
;