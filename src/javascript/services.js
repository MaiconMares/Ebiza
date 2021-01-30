import './../assets/style.css';
import Banner from './../assets/banner-1920x1080-2.png';
import EbizaLogo from './../assets/ebiza-logo.png';

const setup = () => {
    let imgTarget = document.getElementById('col-banner');
    let ebizaTarget = document.getElementById('logo-target');
    let imgBanner = new Image();
    let imgEbiza = new Image();

    imgBanner.src = Banner;
    imgBanner.className = "img-fluid";
    imgBanner.alt = "Mulher realizando compras";

    imgEbiza.src = EbizaLogo;
    imgEbiza.className = "img-fluid";
    imgEbiza.alt = "Logo da empresa Ebiza";

    imgTarget.appendChild(imgBanner);
    ebizaTarget.appendChild(imgEbiza);    
}

setup();