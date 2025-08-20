// ===== Slider avanzado con fade y parallax =====
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.querySelector(".dots");
let current = 0;

// Crear dots
slides.forEach((_, i) => {
  let dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});
let dots = document.querySelectorAll(".dots span");

// Inicializar primer slide
slides[0].classList.add("active");
showSlide(current);

// Mostrar slide
function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  current = index;
}

// Flechas
document.querySelector(".next").onclick = () => showSlide(current + 1);
document.querySelector(".prev").onclick = () => showSlide(current - 1);

// Click en dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

// Auto-slide cada 5 segundos
setInterval(() => showSlide(current + 1), 5000);

// ===== Menú hamburguesa =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Activar link del menú al hacer clic
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    navLinks.classList.remove("show"); // cerrar menú en móvil
  });
});

// ===== Formulario → WhatsApp =====
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  let url = `https://wa.me/529931576220?text=Hola,%20soy%20${encodeURIComponent(name)}.%20Mi%20correo%20es%20${encodeURIComponent(email)},%20tel:%20${encodeURIComponent(phone)}.%20${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});
