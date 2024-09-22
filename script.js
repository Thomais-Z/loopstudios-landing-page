const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const mainHeader = document.querySelector('.main-header');
const h1Ttitle = document.querySelector('.h1-title');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  close.style.display = 'block';
  mainHeader.classList.add('overlay');
  h1Ttitle.style.opacity = '0';
  nav.style.display = 'block';
  nav.style.position = 'absolute';
  nav.style.top = '20%';
});

close.addEventListener('click', () => {
  hamburger.style.display = 'block';
  close.style.display = 'none';
  mainHeader.classList.remove('overlay');
  h1Ttitle.style.opacity = '1';
  nav.style.display = 'none';
});
