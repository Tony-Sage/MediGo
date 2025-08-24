     document.querySelectorAll(".each-question").forEach(
      question =>{
        let toggleAnswer = question.querySelector(".questions");

        toggleAnswer.addEventListener("click", ()=>{
          question.classList.toggle("active");
        })
      }
    )

  
  //Image carousel
  let currentIndex = 0;
  const carousel = document.getElementById('carousel');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = document.querySelectorAll('.slide').length;
  let autoSlideInterval;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[currentIndex]) {
      dots[currentIndex].classList.add('active');
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetAutoSlide(); // Reset timer on manual navigation
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change every 5 seconds
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Start the auto-sliding when the page loads
  window.onload = () => {
    startAutoSlide();
  };