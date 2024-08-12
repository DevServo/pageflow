var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});


var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 10,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1000, 
    disableOnInteraction: false,
  },

});


const sections = document.querySelectorAll('section');
const ctaButton = document.querySelector('.cta-button');
const form = document.querySelector('.contact-form')
const logos = document.querySelectorAll('.logo');
const logosDiv = document.querySelector('.logos');
const closeForm = document.querySelector('.close-btn')

function logoView(logo){
  logo.classList.add('logoView');
}

logos.forEach((logo, index) => {
  setTimeout(() => {
    logoView(logo)
  }, index * 100)  
})




setTimeout(() => {
  const updateSection = () => {
    sections.forEach(section => {
      section.classList.remove('section-animation')
      if (section.parentElement.classList.contains('swiper-slide-active')) {
        section.classList.add('section-animation');
        ctaButton.style.backgroundColor = section.dataset.color
        
      }
    });
  };
  
  // Function to be called on each frame
  const animate = () => {
    updateSection(); // Update the opacity of sections
    requestAnimationFrame(animate); // Request the next frame
  };
  
  // Start the animation loop
  requestAnimationFrame(animate);
}, 1100);



ctaButton.addEventListener('click', (e) => {
  e.preventDefault()
  form.style.transform = 'translateY(0)'
})

closeForm.addEventListener('click', () => {
  form.style.transform = 'translateY(-150%)'
})