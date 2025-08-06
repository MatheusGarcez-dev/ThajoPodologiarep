// Pegar os elementos
let navMenu = document.querySelector(".nav-menu");
let sanduiche = document.querySelector(".sanduiche");

// Função para alternar as classes
function toggleMenu() {
  sanduiche.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Adiciona a função ao clicar no botão sanduíche
sanduiche.addEventListener("click", toggleMenu);

// Fecha o menu ao clicar em uma opção
navMenu.addEventListener("click", (event) => {
  if (event.target.classList.contains("item-menu")) {
    toggleMenu();
  }
});

function abrirMenu() {
  navMenu.classList.remove("hidden");
  setTimeout(() => {
    navMenu.classList.add("flex", "opacity-100");
    navMenu.classList.remove("opacity-0");
  }, 10);
}

function fecharMenu() {
  navMenu.classList.remove("opacity-100");
  navMenu.classList.add("opacity-0");
  setTimeout(() => {
    navMenu.classList.remove("flex");
    navMenu.classList.add("hidden");
  }, 300); 
}

function toggleMenu() {
  sanduiche.classList.toggle("active");

  if (navMenu.classList.contains("hidden")) {
    abrirMenu();
  } else {
    fecharMenu();
  }
}

sanduiche.addEventListener("click", toggleMenu);


document.querySelectorAll(".item-menu").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: 415, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -415, behavior: "smooth" });
  });
});


 const carrossel = document.getElementById("carrosselImagens");
 let position = 0;
 const speed = 1; 

 function animar() {
   position -= speed;
   carrossel.style.transform = `translateX(${position}px)`;

   const resetPoint = carrossel.scrollWidth / 2;
   if (Math.abs(position) >= resetPoint) {
     position = 0;
   }

   requestAnimationFrame(animar);
 }

 // Evita que a transição cause delay no início
 carrossel.style.willChange = "transform";
 animar();

  window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    const bg = document.getElementById("parallax-bg");
    bg.style.transform = `translateY(${offset * 0.4}px)`;
  });