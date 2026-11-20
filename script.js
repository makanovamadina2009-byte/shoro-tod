document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.drink-card button').forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('added');
    button.textContent = button.classList.contains('added') ? '✓' : '+';
  });
});
