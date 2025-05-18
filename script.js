// === Smooth scrolling for anchor links ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// === Show/Hide scroll-to-top button ===
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 90) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }

  // === Scroll highlight for navbar ===
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// === Scroll to top button click ===
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// === Toggle menu for mobile ===
const toggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-links");

if (toggle && navList) {
  toggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}


// Contact Form Validation
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  const name = this.querySelector('input[type="text"]').value.trim();
  const email = this.querySelector('input[type="email"]').value.trim();
  const message = this.querySelector('textarea').value.trim();

  if (!name || !email || !message) {
    e.preventDefault(); // Stop the form from submitting
    alert("❗Please fill in all fields before submitting.");
    return;
  }

  // Optional: Email format check (basic)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    e.preventDefault();
    alert("❗Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you! Your message has been sent.");
});
