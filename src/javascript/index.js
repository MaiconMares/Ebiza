import './../assets/style.css';
import Banner from './../assets/banner-1920x1080-2.png';
import SalesIcon from './../assets/sales.png';
import BiscoitosVovo from './../assets/biscoitos-da-vovo.png';
import MoonPizzaria from './../assets/moon-pizzaria.png';
import CPMMarmoraria from './../assets/cpm-marmoraria.png';
import EbizaLogo from './../assets/ebiza-logo.png';

const setup = () => {
    let imgTarget = document.getElementById('col-banner');
    let salesTarget = document.getElementsByClassName('img-sales')[0];
    let biscoitosTarget = document.getElementById('client1');
    let pizzariaTarget = document.getElementById('client2');
    let marmorariaTarget = document.getElementById('client3');
    let ebizaTarget = document.getElementById('logo-target');
    let nonVisibleCards = document.getElementsByClassName('column-right')[0]
    .querySelectorAll('div.non-visible-card');

    let imgBanner = new Image();
    let imgSales = new Image();
    let imgClient1 = new Image();
    let imgClient2 = new Image();
    let imgClient3 = new Image();
    let imgEbiza = new Image();

    imgBanner.src = Banner;
    imgBanner.className = "img-fluid";
    imgBanner.alt = "Mulher realizando compras";

    imgSales.src = SalesIcon;
    imgSales.className = "img-fluid";
    imgSales.alt = "Ícone de aumento de vendas";

    imgClient1.src = BiscoitosVovo;
    imgClient1.className = "img-fluid";
    imgClient1.alt = "Mensagem de agradecimento de cliente no Instagram";

    imgClient2.src = MoonPizzaria;
    imgClient2.className = "img-fluid";
    imgClient2.alt = "Mensagem de agradecimento de cliente no Instagram";

    imgClient3.src = CPMMarmoraria;
    imgClient3.className = "img-fluid";
    imgClient3.alt = "Mensagem de agradecimento de cliente no Instagram";

    imgEbiza.src = EbizaLogo;
    imgEbiza.className = "img-fluid";
    imgEbiza.alt = "Logo da empresa Ebiza";

    imgTarget.appendChild(imgBanner);
    salesTarget.appendChild(imgSales);
    biscoitosTarget.appendChild(imgClient1);
    pizzariaTarget.appendChild(imgClient2);
    marmorariaTarget.appendChild(imgClient3);
    ebizaTarget.appendChild(imgEbiza);


    if (screen.width <= 770) {
        for (let i=0; i<nonVisibleCards.length; i++){
            nonVisibleCards[i].setAttribute('class', 'card card-column-right');
        }
            
    }
}

setup();