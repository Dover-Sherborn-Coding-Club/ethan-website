document.querySelectorAll('.section-button').forEach(button => {
    button.addEventListener('click', () => {
      const targetSection = document.getElementById(button.getAttribute('data-about-section'));
  
      document.querySelectorAll('.about-section').forEach(section => {
        section.classList.add('d-none');
      });

      document.querySelector('.selected').classList.remove('selected')
      
      button.classList.add('selected');
      targetSection.classList.remove('d-none');
  });
})