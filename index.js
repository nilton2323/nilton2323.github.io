document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.fade-in');
    const container = document.querySelector('#scroll-container');
    const options = {
      root: container,
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, options);
    blocks.forEach(block => {
      observer.observe(block);
    });
  });

  const form = document.getElementById('formulario');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: data
    })
    .then(response => {
      alert("¡Respuestas enviadas correctamente!");
      form.reset();
    })
    .catch(error => {
      alert("Ocurrió un error al enviar el formulario.");
    });
  });

