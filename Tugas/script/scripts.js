const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    const dropdown = btn.parentElement;
    dropdown.classList.toggle('active');
  });
});

document.addEventListener('click', (e) => {
  dropdownBtns.forEach((btn) => {
    const dropdown = btn.parentElement;
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
});
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0; 

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; 
  updateSliderPosition();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; 
  updateSliderPosition();
});

