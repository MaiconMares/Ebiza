(()=>{"use strict";var n={774:(n,A,e)=>{e.d(A,{Z:()=>r});var t=e(15),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap);"]),a.push([n.id,"body {\n    background-color: #033249;\n    padding: 0;\n    margin: 0;\n}\n\n.row {\n    padding: 0px !important;\n}\n\ndiv#col-banner {\n    padding: 0px !important;\n}\n\ndiv.ebiza-logo {\n    position: absolute;\n    max-width: 10em;\n}\n\ndiv.ebiza-logo a:hover {\n    background-color: transparent;\n}\n\ndiv.banner-title {\n    position: absolute;\n    margin-top: 20em;\n    justify-content: center;\n    max-width: 45em;\n}\n\ndiv.banner-subtitle {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n}\n\ndiv.banner-subtitle p {\n    font-size: 1em;\n    max-width: 12em;\n    margin-left: 7.5em;\n}\n\ndiv.banner-title a {\n    background-color: #ff6100;\n    color: #fff;\n    font-weight: bold;\n    font-family: 'Oswald', sans-serif;\n    max-width: 15em;\n    font-size: 1.2em;\n    margin-left: 6em;\n}\n\ndiv.social-medias-banner {\n    position: absolute;\n    right: 0;\n    max-width: 8em;\n    margin-top: 1em;\n}\n\ndiv.social-medias-banner i {\n    font-size: 1.5em;\n    color: #e05501;\n    transition: all .5s;\n}\n\ndiv.social-medias-banner a:hover {\n    background-color: transparent;\n}\n\ndiv.social-medias-banner i:hover {\n    color: #eee;\n}\n\ndiv.main-menu .col-sm {\n    padding: 0px;\n}\n\nnav.navbar {\n    padding: 0px;\n}\n\n.navbar-expand-sm, .navbar-collapse {\n    justify-content: center;\n}\n\nul.navbar-nav {\n    align-items: center;\n}\n\na.nav-link {\n    color: #ff6100;\n    padding: 8px 6px !important;\n    transition: all 0.6s;\n}\n\na.active {\n    color: #fff;\n    background: #ff6100;\n}\n\na:hover {\n    color: #e05501;\n    background: #ddd;\n}\n\nspan.navbar-toggler-icon, button.navbar-toggler {\n    color: #fff;\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    font-family: 'Noto Sans', sans-serif;\n    text-align: center;\n}\n\n.content .col-sm {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n.content h5#work-title, .social-proof-title h5#clients-title, #what-we-do h5 {\n    margin-top: 1em;\n    color: #fff;\n}\n\n.content h5#work-title:after, .social-proof-title h5#clients-title:after, \n#what-we-do h5:after {\n    content: \"\";\n    display: block;\n    border-bottom: 0.2em solid #ff6100;\n    padding-top: 0.2em;\n    margin: 0 auto;\n    width: 50%;\n}\n\n#what-we-do h5:after {\n    width: 10%;\n}\n\n#what-we-do h5 {\n    margin-top: 10em;\n    margin-bottom: 2em;\n}\n\n#what-we-do p {\n    color: #ddd;\n}\n\n.content h3 {\n    font-family: 'Oswald', sans-serif;\n    margin-top: 1em;\n    color: #fff;\n}\n\n.content-column p {\n    font-size: 14px;\n}\n\n.content-column .card {\n    border: none;\n    background-color: transparent;\n    color: #ddd;\n}\n\n.card-title {\n    text-align: center;\n}\n\n.column-left, .column-right {\n    text-align: justify;\n}\n\n.column-center:after {\n    content: \"\";\n    display: block;\n    border-bottom: 40em solid #aaa;\n    width: 0.5%;\n    margin: 0 auto;\n}\n\n.column-right {\n    position: absolute;\n    margin-right: 15em;\n    min-width: 250px;\n}\n\n.column-left {\n    position: absolute;\n    min-width: 250px;\n    margin-left: 15em;\n}\n\n.card-column-right {\n    position: absolute;\n}\n\n.card-column-left {\n    position: absolute;\n}\n\n.card-column-left + div.card-column-left {\n    margin-top: 25em;\n}\n\n.column-right > div.card-column-right {\n    margin-top: 12em;\n}\n\n.card-column-right + div.card-column-right {\n    margin-top: 38em;\n}\n\n.non-visible-card {\n    display: none;\n}\n\n.numbers {\n    position: absolute;\n}\n\n.number {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: #ff6100;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.number p {\n    text-align: center;\n    margin: 0 !important;\n}\n\ndiv.number + div {\n    margin-top: 10em;\n}\n\n.client-form {\n    margin-top: 10em;\n    background-color: #292d33;\n}\n\n.client-form p {\n    color: #ddd;\n    font-size: 14px;\n    text-align: left;\n    margin-top: 1em;\n}\n\nh5#sales-title {\n    color: #ff6100;\n    max-width: 150px;\n    margin-top: 1em;\n}\n\nh5#sales-title:before {\n    content: \"\";\n    display: block;\n    border: 0.05em solid #ff6100;\n}\n\n.form-area {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.form-area button#send-btn {\n    background-color: #ff6100;\n    color: #fff;\n}\n\nbutton#send-btn:hover {\n    background-color: #e05501;\n    color: #aaa;\n}\n\n.img-sales {\n    background-color: #ff6100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.img-sales img {\n    max-width: 100px;\n    max-height: 100px;\n}\n\n.social-proofs {\n    margin-top: 2em;\n    margin-bottom: 2em;\n}\n\n.social-proofs img {\n    max-width: 250px;\n}\n\nfooter {\n    background-color: #000;\n}\n\n.footer-bottom {\n    padding: 1em 2em;\n}\n\n.footer-bottom p, ul li {\n    color: #9f9f9f;\n    font-size: 14px;\n}\n\n.footer-bottom ul li i {\n    padding-right: 0.5em;\n}\n\n.footer-bottom h5 {\n    color: #ddd;\n}\n\n.social-medias li {\n    display: inline-block;\n}\n\n.social-medias li i {\n    color: #ff6100;\n    font-size: 2em;\n    padding: 0 !important;\n    transition: all 0.3s;\n}\n\n.social-medias li a:hover {\n    background-color: transparent;\n}\n\n.social-medias li i:hover {\n    color: #e05501;\n    transform: scale(1.2, 1.2);\n}\n\n.footer-developer-info {\n    color: #ddd;\n}\n\n.footer-developer-info a {\n    color: #ddd;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n\n.footer-developer-info a:hover {\n    color: #aaa;\n    background-color: transparent;\n    font-size: 18px;\n}\n\n#what-we-do .col-sm {\n    flex-direction: column;\n}\n\n.contacts {\n    margin-top: 2em;\n    margin-bottom: 5em;\n    padding-bottom: 5em;\n}\n\n.contacts h4 {\n    text-align: center;\n    color: #ddd;\n}\n\n.contacts .col-sm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.contacts .col-sm div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 7em;\n    width: 7em;\n    background-color: #359ba1;\n    border-radius: 50%;\n    margin-bottom: 2em;\n}\n\n.contacts .col-sm i {\n    font-size: 4em;\n    color: #ddd;\n}\n\n.contacts .col-sm h5 {\n    color: #ddd;\n}\n\n.contacts .col-sm p {\n    color: #bbb;\n}\n\n.contacts h4 {\n    margin-bottom: 2em;\n}\n\n.contacts .whatsapp a {\n    text-decoration: none;\n    color: #bbb;\n    transition: all .5s;\n}\n\n.contacts .whatsapp p a {\n    text-decoration: underline;\n}\n\n.contacts .whatsapp p a:hover {\n    background-color: transparent;\n    color: #eee;\n}\n\n.contacts .whatsapp div a:hover {\n    background-color: transparent;\n}\n\n.contacts .whatsapp div {\n    transition: all .5s;\n}\n\n.contacts .whatsapp div:hover {\n    background-color: #25D366;\n    cursor: pointer;\n\n}\n\n@media only screen and (min-width: 768px) {\n    div.card.card-column-right:nth-child(4) {\n        margin-top: 37em;\n    }\n}\n\n@media only screen and (max-width: 990px) {\n    div.banner-title {\n        margin-top: 14em;\n        margin-left: 0em;\n    }\n\n    div.banner-subtitle {\n        margin-left: -1em;\n    }\n\n    div.social-medias-banner {\n        max-width: 7em;\n        right: 9em;\n    }\n\n    input {\n        max-width: 13.5em;\n    }\n\n    .social-proofs img {\n        max-width: 200px;\n    }\n\n    .content h3 {\n        margin-bottom: 2em;\n    }\n}\n\n@media only screen and (max-width: 840px) {\n    .column-left {\n        margin-left: 8em;\n    }\n\n    .column-right {\n        margin-right: 8em;\n    }\n\n\n}\n\n@media only screen and (max-width: 768px) {\n    div.social-medias-banner {\n        right: 1em;\n    }\n\n    .card-column-right + div.card-column-right {\n        margin-top: 0;\n    }\n\n    .content-column.column-left {\n        display: none;\n    }\n\n    .col-sm.column-center {\n        position: relative;\n        left: -15em;\n    }\n\n    .column-right {\n        margin-right: 35em;\n    }\n\n    .card-column-right {\n        position: relative;\n    }\n\n    .column-right > div.card-column-right {\n        margin-top: 0;\n    }\n    \n    .card-column-right + div.card-column-right {\n        margin-top: 0;\n    }\n\n    .non-visible-card {\n        display: flex;\n    }\n\n    div.banner-title {\n        margin-top: 13em;\n        margin-left: -4em;\n    }\n\n    div.banner-subtitle p {\n        font-size: .8em;\n        max-width: 17em;\n        margin-left: 9em;\n    }\n\n    div.card-column-right:nth-child(4) {\n        margin-top: 5em !important;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    div.banner-title {\n        margin-top: 10em;\n    }\n\n    .col-sm.img-sales {\n        padding: 1em;\n        max-width: 10em;\n    }\n\n    input {\n        max-width: 11em;\n    }\n\n    .client-form {\n        display: flex;\n        justify-content: center;\n    }\n\n    .form-area button#send-btn {\n        font-size: .8em;\n    }\n\n    .social-proofs #client3 img {\n        margin-top: 2em;\n    }\n\n    .ebiza-logo {\n        max-width: 8em !important;\n    }\n\n}\n\n@media only screen and (max-width: 540px) {\n    .column-right {\n        margin-right: 5em;\n        margin-top: -40em;\n    }\n\n    .card-column-right {\n        margin-left: 14em;\n    }\n\n    .social-proofs img {\n        margin-top: 2em;\n    }\n\n\n    .col-sm.column-center {\n        left: -5em;\n    }\n\n    div.card-column-right:nth-child(4) {\n        margin-top: 5em;\n    }\n}\n\n@media only screen and (max-width: 414px) {\n    div.banner-title {\n        margin-top: 6em;\n    }\n\n    div.banner-title a {\n        font-size: .6em;\n        margin-left: 13em;\n    }\n\n    div.banner-subtitle {\n        margin-left: -2em;\n    }\n\n    div.banner-subtitle p {\n        font-size: 0.5em;\n        margin-left: 15em;\n        margin-top: 2em;\n        margin-bottom: 0;\n    }\n\n    .ebiza-logo {\n        max-width: 6em !important;\n    }\n\n    div.social-medias-banner {\n        right: -1.2em;\n    }\n\n    div.social-medias-banner i {\n        font-size: 1.2em;\n    }\n\n    .column-right {\n        margin-right: 1em;\n    }\n\n    .col-sm.img-sales {\n        max-width: 8em;\n    }\n\n    .card-column-right {\n        margin-left: 18em;\n        font-size: 0.4em;\n    }\n\n}\n\n@media only screen and (max-width: 300px) {\n    .card-column-right {\n        margin-left: 23em;\n        font-size: 0.2em;\n    }\n\n    div.banner-title {\n        margin-top: 5em;\n        margin-left: -6em;\n    }\n\n    div.banner-subtitle p {\n        font-size: 0.4em;\n        margin-left: 20em;\n    }\n\n    \n\n    \n    \n\n}","",{version:3,sources:["webpack://./src/assets/style.css"],names:[],mappings:"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",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');\n\nbody {\n    background-color: #033249;\n    padding: 0;\n    margin: 0;\n}\n\n.row {\n    padding: 0px !important;\n}\n\ndiv#col-banner {\n    padding: 0px !important;\n}\n\ndiv.ebiza-logo {\n    position: absolute;\n    max-width: 10em;\n}\n\ndiv.ebiza-logo a:hover {\n    background-color: transparent;\n}\n\ndiv.banner-title {\n    position: absolute;\n    margin-top: 20em;\n    justify-content: center;\n    max-width: 45em;\n}\n\ndiv.banner-subtitle {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n}\n\ndiv.banner-subtitle p {\n    font-size: 1em;\n    max-width: 12em;\n    margin-left: 7.5em;\n}\n\ndiv.banner-title a {\n    background-color: #ff6100;\n    color: #fff;\n    font-weight: bold;\n    font-family: 'Oswald', sans-serif;\n    max-width: 15em;\n    font-size: 1.2em;\n    margin-left: 6em;\n}\n\ndiv.social-medias-banner {\n    position: absolute;\n    right: 0;\n    max-width: 8em;\n    margin-top: 1em;\n}\n\ndiv.social-medias-banner i {\n    font-size: 1.5em;\n    color: #e05501;\n    transition: all .5s;\n}\n\ndiv.social-medias-banner a:hover {\n    background-color: transparent;\n}\n\ndiv.social-medias-banner i:hover {\n    color: #eee;\n}\n\ndiv.main-menu .col-sm {\n    padding: 0px;\n}\n\nnav.navbar {\n    padding: 0px;\n}\n\n.navbar-expand-sm, .navbar-collapse {\n    justify-content: center;\n}\n\nul.navbar-nav {\n    align-items: center;\n}\n\na.nav-link {\n    color: #ff6100;\n    padding: 8px 6px !important;\n    transition: all 0.6s;\n}\n\na.active {\n    color: #fff;\n    background: #ff6100;\n}\n\na:hover {\n    color: #e05501;\n    background: #ddd;\n}\n\nspan.navbar-toggler-icon, button.navbar-toggler {\n    color: #fff;\n}\n\n.content {\n    display: flex;\n    justify-content: center;\n    font-family: 'Noto Sans', sans-serif;\n    text-align: center;\n}\n\n.content .col-sm {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n}\n\n.content h5#work-title, .social-proof-title h5#clients-title, #what-we-do h5 {\n    margin-top: 1em;\n    color: #fff;\n}\n\n.content h5#work-title:after, .social-proof-title h5#clients-title:after, \n#what-we-do h5:after {\n    content: \"\";\n    display: block;\n    border-bottom: 0.2em solid #ff6100;\n    padding-top: 0.2em;\n    margin: 0 auto;\n    width: 50%;\n}\n\n#what-we-do h5:after {\n    width: 10%;\n}\n\n#what-we-do h5 {\n    margin-top: 10em;\n    margin-bottom: 2em;\n}\n\n#what-we-do p {\n    color: #ddd;\n}\n\n.content h3 {\n    font-family: 'Oswald', sans-serif;\n    margin-top: 1em;\n    color: #fff;\n}\n\n.content-column p {\n    font-size: 14px;\n}\n\n.content-column .card {\n    border: none;\n    background-color: transparent;\n    color: #ddd;\n}\n\n.card-title {\n    text-align: center;\n}\n\n.column-left, .column-right {\n    text-align: justify;\n}\n\n.column-center:after {\n    content: \"\";\n    display: block;\n    border-bottom: 40em solid #aaa;\n    width: 0.5%;\n    margin: 0 auto;\n}\n\n.column-right {\n    position: absolute;\n    margin-right: 15em;\n    min-width: 250px;\n}\n\n.column-left {\n    position: absolute;\n    min-width: 250px;\n    margin-left: 15em;\n}\n\n.card-column-right {\n    position: absolute;\n}\n\n.card-column-left {\n    position: absolute;\n}\n\n.card-column-left + div.card-column-left {\n    margin-top: 25em;\n}\n\n.column-right > div.card-column-right {\n    margin-top: 12em;\n}\n\n.card-column-right + div.card-column-right {\n    margin-top: 38em;\n}\n\n.non-visible-card {\n    display: none;\n}\n\n.numbers {\n    position: absolute;\n}\n\n.number {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background: #ff6100;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.number p {\n    text-align: center;\n    margin: 0 !important;\n}\n\ndiv.number + div {\n    margin-top: 10em;\n}\n\n.client-form {\n    margin-top: 10em;\n    background-color: #292d33;\n}\n\n.client-form p {\n    color: #ddd;\n    font-size: 14px;\n    text-align: left;\n    margin-top: 1em;\n}\n\nh5#sales-title {\n    color: #ff6100;\n    max-width: 150px;\n    margin-top: 1em;\n}\n\nh5#sales-title:before {\n    content: \"\";\n    display: block;\n    border: 0.05em solid #ff6100;\n}\n\n.form-area {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.form-area button#send-btn {\n    background-color: #ff6100;\n    color: #fff;\n}\n\nbutton#send-btn:hover {\n    background-color: #e05501;\n    color: #aaa;\n}\n\n.img-sales {\n    background-color: #ff6100;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.img-sales img {\n    max-width: 100px;\n    max-height: 100px;\n}\n\n.social-proofs {\n    margin-top: 2em;\n    margin-bottom: 2em;\n}\n\n.social-proofs img {\n    max-width: 250px;\n}\n\nfooter {\n    background-color: #000;\n}\n\n.footer-bottom {\n    padding: 1em 2em;\n}\n\n.footer-bottom p, ul li {\n    color: #9f9f9f;\n    font-size: 14px;\n}\n\n.footer-bottom ul li i {\n    padding-right: 0.5em;\n}\n\n.footer-bottom h5 {\n    color: #ddd;\n}\n\n.social-medias li {\n    display: inline-block;\n}\n\n.social-medias li i {\n    color: #ff6100;\n    font-size: 2em;\n    padding: 0 !important;\n    transition: all 0.3s;\n}\n\n.social-medias li a:hover {\n    background-color: transparent;\n}\n\n.social-medias li i:hover {\n    color: #e05501;\n    transform: scale(1.2, 1.2);\n}\n\n.footer-developer-info {\n    color: #ddd;\n}\n\n.footer-developer-info a {\n    color: #ddd;\n    text-decoration: none;\n    transition: all 0.3s;\n}\n\n.footer-developer-info a:hover {\n    color: #aaa;\n    background-color: transparent;\n    font-size: 18px;\n}\n\n#what-we-do .col-sm {\n    flex-direction: column;\n}\n\n.contacts {\n    margin-top: 2em;\n    margin-bottom: 5em;\n    padding-bottom: 5em;\n}\n\n.contacts h4 {\n    text-align: center;\n    color: #ddd;\n}\n\n.contacts .col-sm {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.contacts .col-sm div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 7em;\n    width: 7em;\n    background-color: #359ba1;\n    border-radius: 50%;\n    margin-bottom: 2em;\n}\n\n.contacts .col-sm i {\n    font-size: 4em;\n    color: #ddd;\n}\n\n.contacts .col-sm h5 {\n    color: #ddd;\n}\n\n.contacts .col-sm p {\n    color: #bbb;\n}\n\n.contacts h4 {\n    margin-bottom: 2em;\n}\n\n.contacts .whatsapp a {\n    text-decoration: none;\n    color: #bbb;\n    transition: all .5s;\n}\n\n.contacts .whatsapp p a {\n    text-decoration: underline;\n}\n\n.contacts .whatsapp p a:hover {\n    background-color: transparent;\n    color: #eee;\n}\n\n.contacts .whatsapp div a:hover {\n    background-color: transparent;\n}\n\n.contacts .whatsapp div {\n    transition: all .5s;\n}\n\n.contacts .whatsapp div:hover {\n    background-color: #25D366;\n    cursor: pointer;\n\n}\n\n@media only screen and (min-width: 768px) {\n    div.card.card-column-right:nth-child(4) {\n        margin-top: 37em;\n    }\n}\n\n@media only screen and (max-width: 990px) {\n    div.banner-title {\n        margin-top: 14em;\n        margin-left: 0em;\n    }\n\n    div.banner-subtitle {\n        margin-left: -1em;\n    }\n\n    div.social-medias-banner {\n        max-width: 7em;\n        right: 9em;\n    }\n\n    input {\n        max-width: 13.5em;\n    }\n\n    .social-proofs img {\n        max-width: 200px;\n    }\n\n    .content h3 {\n        margin-bottom: 2em;\n    }\n}\n\n@media only screen and (max-width: 840px) {\n    .column-left {\n        margin-left: 8em;\n    }\n\n    .column-right {\n        margin-right: 8em;\n    }\n\n\n}\n\n@media only screen and (max-width: 768px) {\n    div.social-medias-banner {\n        right: 1em;\n    }\n\n    .card-column-right + div.card-column-right {\n        margin-top: 0;\n    }\n\n    .content-column.column-left {\n        display: none;\n    }\n\n    .col-sm.column-center {\n        position: relative;\n        left: -15em;\n    }\n\n    .column-right {\n        margin-right: 35em;\n    }\n\n    .card-column-right {\n        position: relative;\n    }\n\n    .column-right > div.card-column-right {\n        margin-top: 0;\n    }\n    \n    .card-column-right + div.card-column-right {\n        margin-top: 0;\n    }\n\n    .non-visible-card {\n        display: flex;\n    }\n\n    div.banner-title {\n        margin-top: 13em;\n        margin-left: -4em;\n    }\n\n    div.banner-subtitle p {\n        font-size: .8em;\n        max-width: 17em;\n        margin-left: 9em;\n    }\n\n    div.card-column-right:nth-child(4) {\n        margin-top: 5em !important;\n    }\n}\n\n@media only screen and (max-width: 600px) {\n    div.banner-title {\n        margin-top: 10em;\n    }\n\n    .col-sm.img-sales {\n        padding: 1em;\n        max-width: 10em;\n    }\n\n    input {\n        max-width: 11em;\n    }\n\n    .client-form {\n        display: flex;\n        justify-content: center;\n    }\n\n    .form-area button#send-btn {\n        font-size: .8em;\n    }\n\n    .social-proofs #client3 img {\n        margin-top: 2em;\n    }\n\n    .ebiza-logo {\n        max-width: 8em !important;\n    }\n\n}\n\n@media only screen and (max-width: 540px) {\n    .column-right {\n        margin-right: 5em;\n        margin-top: -40em;\n    }\n\n    .card-column-right {\n        margin-left: 14em;\n    }\n\n    .social-proofs img {\n        margin-top: 2em;\n    }\n\n\n    .col-sm.column-center {\n        left: -5em;\n    }\n\n    div.card-column-right:nth-child(4) {\n        margin-top: 5em;\n    }\n}\n\n@media only screen and (max-width: 414px) {\n    div.banner-title {\n        margin-top: 6em;\n    }\n\n    div.banner-title a {\n        font-size: .6em;\n        margin-left: 13em;\n    }\n\n    div.banner-subtitle {\n        margin-left: -2em;\n    }\n\n    div.banner-subtitle p {\n        font-size: 0.5em;\n        margin-left: 15em;\n        margin-top: 2em;\n        margin-bottom: 0;\n    }\n\n    .ebiza-logo {\n        max-width: 6em !important;\n    }\n\n    div.social-medias-banner {\n        right: -1.2em;\n    }\n\n    div.social-medias-banner i {\n        font-size: 1.2em;\n    }\n\n    .column-right {\n        margin-right: 1em;\n    }\n\n    .col-sm.img-sales {\n        max-width: 8em;\n    }\n\n    .card-column-right {\n        margin-left: 18em;\n        font-size: 0.4em;\n    }\n\n}\n\n@media only screen and (max-width: 300px) {\n    .card-column-right {\n        margin-left: 23em;\n        font-size: 0.2em;\n    }\n\n    div.banner-title {\n        margin-top: 5em;\n        margin-left: -6em;\n    }\n\n    div.banner-subtitle p {\n        font-size: 0.4em;\n        margin-left: 20em;\n    }\n\n    \n\n    \n    \n\n}"],sourceRoot:""}]);const r=a},645:n=>{n.exports=function(n){var A=[];return A.toString=function(){return this.map((function(A){var e=n(A);return A[2]?"@media ".concat(A[2]," {").concat(e,"}"):e})).join("")},A.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var r=0;r<n.length;r++){var c=[].concat(n[r]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),A.push(c))}},A}},15:n=>{function A(n,A){(null==A||A>n.length)&&(A=n.length);for(var e=0,t=new Array(A);e<A;e++)t[e]=n[e];return t}n.exports=function(n){var e,t,o=(t=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,A){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],t=!0,o=!1,i=void 0;try{for(var a,r=n[Symbol.iterator]();!(t=(a=r.next()).done)&&(e.push(a.value),!A||e.length!==A);t=!0);}catch(n){o=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(o)throw i}}return e}}(e,t)||function(n,e){if(n){if("string"==typeof n)return A(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?A(n,e):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],a=o[3];if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),l="/*# ".concat(c," */"),m=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[i].concat(m).concat([l]).join("\n")}return[i].join("\n")}},379:(n,A,e)=>{var t,o=function(){var n={};return function(A){if(void 0===n[A]){var e=document.querySelector(A);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[A]=e}return n[A]}}(),i=[];function a(n){for(var A=-1,e=0;e<i.length;e++)if(i[e].identifier===n){A=e;break}return A}function r(n,A){for(var e={},t=[],o=0;o<n.length;o++){var r=n[o],c=A.base?r[0]+A.base:r[0],l=e[c]||0,m="".concat(c," ").concat(l);e[c]=l+1;var d=a(m),s={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(i[d].references++,i[d].updater(s)):i.push({identifier:m,updater:g(s,A),references:1}),t.push(m)}return t}function c(n){var A=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){A.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(A);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(A)}return A}var l,m=(l=[],function(n,A){return l[n]=A,l.filter(Boolean).join("\n")});function d(n,A,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=m(A,o);else{var i=document.createTextNode(o),a=n.childNodes;a[A]&&n.removeChild(a[A]),a.length?n.insertBefore(i,a[A]):n.appendChild(i)}}function s(n,A,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,B=0;function g(n,A){var e,t,o;if(A.singleton){var i=B++;e=f||(f=c(A)),t=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=c(A),t=s.bind(null,e,A),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(A){if(A){if(A.css===n.css&&A.media===n.media&&A.sourceMap===n.sourceMap)return;t(n=A)}else o()}}n.exports=function(n,A){(A=A||{}).singleton||"boolean"==typeof A.singleton||(A.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=r(n=n||[],A);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var c=r(n,A),l=0;l<e.length;l++){var m=a(e[l]);0===i[m].references&&(i[m].updater(),i.splice(m,1))}e=c}}}},52:(n,A,e)=>{n.exports=e.p+"929a77d918d167d0f5a9.png"},493:(n,A,e)=>{n.exports=e.p+"da0e3ce14444e5c5b941.png"}},A={};function e(t){if(A[t])return A[t].exports;var o=A[t]={id:t,exports:{}};return n[t](o,o.exports,e),o.exports}e.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return e.d(A,{a:A}),A},e.d=(n,A)=>{for(var t in A)e.o(A,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:A[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var A=e.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var t=A.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),A=e.n(n),t=e(774);A()(t.Z,{insert:"head",singleton:!1}),t.Z.locals;var o=e(52),i=e(493);(()=>{let n=document.getElementById("col-banner"),A=document.getElementById("logo-target"),e=new Image,t=new Image;e.src=o,e.className="img-fluid",e.alt="Mulher realizando compras",t.src=i,t.className="img-fluid",t.alt="Logo da empresa Ebiza",n.appendChild(e),A.appendChild(t)})()})()})();
//# sourceMappingURL=services.bundle.js.map