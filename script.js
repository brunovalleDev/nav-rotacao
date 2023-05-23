const botaoClose = document.getElementById('close-icon');
const botaoOpen = document.getElementById('open-icon');
const container = document.querySelector('.container')

botaoOpen.addEventListener('click', () => {
  container.classList.add('show-nav');
});

botaoClose.addEventListener('click', () => {
  container.classList.remove('show-nav');
});