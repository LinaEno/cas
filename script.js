if (document.querySelector('.accordion-container')) {
    new Accordion('.accordion-container');
  }


const asideBtn = document.querySelector('.aside__left-header');
const asideList = document.querySelector('.aside__left-list');

if(asideBtn) {
  asideBtn.addEventListener('click', () => {
    asideList.classList.toggle('active');
  })
}


function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();



document.addEventListener('DOMContentLoaded', function() {
  const selectedLanguage = document.getElementById('selectedLanguage');
  const languageOptions = document.getElementById('languageOptions');

  selectedLanguage.addEventListener('click', function() {
    languageOptions.classList.toggle('visible');
    languageOptions.classList.toggle('hidden');
  });

  document.addEventListener('click', function(event) {
    if (!selectedLanguage.contains(event.target) && !languageOptions.contains(event.target)) {
      languageOptions.classList.remove('visible');
      languageOptions.classList.add('hidden');
    }
  });
});

const scrollToTopButton = document.querySelector('.btn-up');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.display = 'flex';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



document.addEventListener('DOMContentLoaded', function() {
  const burgerBtn = document.getElementById('burgerBtn');
  const burgerMenu = document.getElementById('burgerMenu');

  burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('open');
    burgerMenu.classList.toggle('open');
  });
});