// ========================================
// MOBILE MENU
// ========================================
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

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-list a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1024) {
      document.querySelector(".nav-list").classList.remove("active");
      document.querySelector(".mobile-menu").classList.remove("active");
    }
  });
});

// ========================================
// SCROLL PROGRESS INDICATOR
// ========================================
function createScrollProgressBar() {
  const progressBar = document.createElement("div");
  progressBar.className = "scroll-progress";
  document.body.prepend(progressBar);

  window.addEventListener("scroll", () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    progressBar.style.width = scrolled + "%";
  });
}
createScrollProgressBar();

// ========================================
// HEADER BLUR EFFECT ON SCROLL
// ========================================
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

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

// ========================================
// SKILLS INTERACTION
// ========================================
const skillCards = document.querySelectorAll(".skill-card");
const skillDescription = document.querySelector(".skill-description");

if (skillDescription) {
  const skillDescriptions = {
    HTML: "HTML5 is the foundation of web development. I have extensive experience creating semantic, accessible, and SEO-friendly markup that forms the backbone of modern web applications.",
    CSS: "CSS3 allows me to bring designs to life with pixel-perfect precision. From responsive layouts to complex animations, I leverage the full power of modern CSS including Flexbox, Grid, and custom properties.",
    JavaScript:
      "JavaScript is my primary language for creating interactive and dynamic web experiences. I'm proficient in ES6+ features, async programming, DOM manipulation, and modern JavaScript patterns.",
    React:
      "React is my go-to framework for building scalable, component-based user interfaces. I'm experienced with hooks, context, state management, and building performant React applications.",
    "Styled Components":
      "I use Styled Components to write maintainable CSS-in-JS, creating reusable, themeable components with scoped styles that prevent conflicts and improve code organization.",
    Tailwind:
      "Tailwind CSS enables rapid UI development with utility-first classes. I leverage it to build consistent, responsive designs quickly while maintaining full customization control.",
    Python:
      "Python is my choice for backend development, automation, and data processing. I use it for building APIs, scripts, and integrating with AI services and various tools.",
    N8N: "N8N is my automation platform of choice for creating complex workflows and integrations. I've built numerous automation solutions connecting APIs, databases, and external services without code.",
    "OpenAI":
      "I integrate OpenAI's powerful AI models into applications, creating intelligent features like chatbots, content generation, and AI-assisted tools that enhance user experiences.",
  };

  const defaultDescription =
    "Hover over a skill card to learn more about my experience and proficiency";

  skillCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const skillName = this.getAttribute("data-skill");
      if (skillDescriptions[skillName]) {
        skillDescription.textContent = skillDescriptions[skillName];
      }
    });

    card.addEventListener("mouseleave", function () {
      skillDescription.textContent = defaultDescription;
    });

    // Touch support for mobile
    card.addEventListener("touchstart", function (e) {
      const skillName = this.getAttribute("data-skill");
      if (skillDescriptions[skillName]) {
        skillDescription.textContent = skillDescriptions[skillName];
      }
    });
  });
}

// ========================================
// CONTACT FORM
// ========================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formStatus = document.getElementById("form-status");
    const submitBtn = contactForm.querySelector(".submit-btn");
    const originalBtnText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.innerHTML =
      '<span class="iconify" data-icon="eos-icons:loading"></span> Sending...';
    submitBtn.disabled = true;

    // Get form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    try {
      // Simulate form submission (replace with actual endpoint)
      // For production, integrate with EmailJS, Formspree, or your backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      formStatus.className = "form-status success";
      formStatus.textContent =
        "Message sent successfully! I'll get back to you soon.";

      // Reset form
      contactForm.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        formStatus.className = "form-status";
      }, 5000);
    } catch (error) {
      // Show error message
      formStatus.className = "form-status error";
      formStatus.textContent =
        "Oops! Something went wrong. Please try again or email me directly.";

      setTimeout(() => {
        formStatus.className = "form-status";
      }, 5000);
    } finally {
      // Reset button
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

// ========================================
// SMOOTH SCROLL ENHANCEMENT
// ========================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href.length > 1) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});
