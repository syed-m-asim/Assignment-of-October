// Initialize AOS animations
AOS.init({
  duration: 1000,
  once: true
});

// Navbar color change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields!');
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent successfully.`);
  this.reset();
});

