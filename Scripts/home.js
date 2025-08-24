	const hamburger = document.querySelector(".hamburger");
	const sideBar= document.querySelector(".sidebar");
	const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener('click', function(){

sideBar.style.display = "flex";
hamburger.style.display ="none"

})

const closeSideBar = document.querySelector(".closeSideBar");
closeSideBar.addEventListener('click', function(){
sideBar.style.display= "none";
hamburger.style.display ="block";


})

  //Image carousel
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const dotsNav = document.querySelector('.carousel-nav');
  const dots = Array.from(dotsNav.children);

  function moveToSlide(index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';

    // Update dots
    dots.forEach(dot => dot.classList.remove('current-dot'));
    dots[index].classList.add('current-dot');
  }

  // Add click listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      moveToSlide(index);
    });
  });

  // Optional: Recalculate position on resize
  window.addEventListener('resize', () => {
    const activeIndex = dots.findIndex(dot => dot.classList.contains('current-dot'));
    moveToSlide(activeIndex);
  });

