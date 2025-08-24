     document.querySelectorAll(".each-question").forEach(
      question =>{
        let toggleAnswer = question.querySelector(".questions");

        toggleAnswer.addEventListener("click", ()=>{
          question.classList.toggle("active");
        })
      }
    )

  
// Disable carousel on small screens
    let currentIndex = 0;
  const carousel = document.getElementById('carousel');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = document.querySelectorAll('.slide').length;

  function updateCarousel() {
    if (window.innerWidth <= 768) {
      // Disable carousel behavior on small screens
      carousel.style.transform = 'none';
      return;
    }
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function updateDots() {
    if (window.innerWidth <= 768) return;
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('active');
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  // Update carousel on window resize
  window.addEventListener('resize', updateCarousel);

  // Initial load
  updateCarousel();