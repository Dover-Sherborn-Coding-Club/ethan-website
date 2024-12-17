document.querySelectorAll('.section-button').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelector('.about-section.selected').classList.remove('selected');

      document.querySelector('.section-button.selected').classList.remove('selected');

      const targetSection = document.getElementById(button.getAttribute('data-about-section'));

      targetSection.animate(
        [
          {opacity: "0"},
          {opacity: "1"}
        ],
        {
          duration: 500,
          easing: "ease-in-out",
          iterations: 1
        }
      )
  
      button.classList.add('selected');
      targetSection.classList.add('selected');
  });
})