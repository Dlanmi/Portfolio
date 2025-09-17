//Menu
class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}
const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li"
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".maquina-escrever");
typeWrite(titulo);

//Scroll TOP
$(document).ready(function () {
  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    var topPos = $(this).scrollTop();
    //Quantidade Y que o botão de scroll vai aparecer
    if (topPos > 400) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
  });

  //Velocidade a animação
  $(scrollTop).click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      100
    );
    return false;
  });
});

//Revelar animação
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 600,
  reset: false,
  mobile: true,
  viewFactor: 0.1,
});

//Home delay
sr.reveal(".button", { delay: 100 });
sr.reveal(".linguagensProjeto", { delay: 200 });
sr.reveal(".imagem-espaco-delay", { delay: 100 });
sr.reveal(".imagem-iuri-delay", { delay: 300 });
sr.reveal(".scroll-delay", { delay: 400 });
//Sobre mim delay
sr.reveal(".imagem-delay", { delay: 50 });
sr.reveal(".titulo-delay", { delay: 100 });
sr.reveal(".descricao-delay", { delay: 200 });
sr.reveal(".cards-interval", { interval: 100 });

//Animação conhecimentos
var texto1 = document.querySelector(".mudarTextoDescricao");

document.querySelector(".html").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "HTML es un lenguaje basado en marcas, en el que marcamos elementos para definir la información que mostrará la página. <br><br> 1 año de experiencia";
});

document.querySelector(".css").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "CSS es un lenguaje de hojas de estilo compuesto por 'capas', creado con el fin de estilizar las páginas HTML. <br><br> 1 año de experiencia";
});

document.querySelector(".js").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "JavaScript es un lenguaje de programación estructurado, de alto nivel, interpretado, con tipado dinámico débil y multiparadigma. <br><br> 1 año de experiencia";
});

document.querySelector(".tailwind").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Tailwind CSS es un marco de trabajo diseñado para maximizar el potencial del viejo CSS y llevarlo aún más lejos. <br><br> 1 mes de experiencia";
});

document.querySelector(".python").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "Python es un lenguaje de programación versátil utilizado en desarrollo web, automatización, IA y análisis de datos. Orientado a objetos e interpretado. <br><br> 3 mes de experiencia";
});

document.querySelector(".react").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "React es una biblioteca JavaScript de código abierto centrada en la creación de interfaces de usuario en páginas web. <br><br> 3 meses de experiencia";
});

document
  .querySelector(".styled")
  .addEventListener("mouseover", function mudarTexto8() {
    texto1.innerHTML =
      "Styled Components es una librería que utiliza el concepto de CSS-in-JS, es decir, nos permite escribir código CSS dentro de Javascript. <br><br> 3 meses de experiencia";
  });

document.querySelector(".n8n").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "N8N es una herramienta de automatización de workflows que permite conectar diferentes aplicaciones y servicios sin necesidad de código. <br><br> 3 meses de experiencia";
});

document.querySelector(".openai").addEventListener("mouseover", function () {
  texto1.innerHTML =
    "OpenAI es una empresa de inteligencia artificial que desarrolla modelos avanzados como GPT. ChatGPT es su interfaz conversacional más popular. <br><br> 1 mes de experiencia";
});

var sairCaixa = document.getElementsByClassName("sairCaixa");

for (i = 0; i < sairCaixa.length; i++) {
  sairCaixa[i].addEventListener("mouseout", function mudarTextoNormal() {
    texto1.innerHTML = `Estoy convencido de que juntos lograremos cosas increibles.💜<br><br>*pase el mouse sobre la tarjeta para leer 👌*`;
  });
}

/*
//Validação captcha do contato
valor = document.getElementById('campo').value

function testar() {
    if (valor != 'g') {
        alert('Complete o nome "google" com uma letra para enviar!')
    }
}*/
