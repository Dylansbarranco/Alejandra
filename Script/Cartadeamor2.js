 function iniciarCarta() {
      document.querySelector('.btn-inicio').style.display = 'none';
      document.getElementById('contenido').style.display = 'block';

      const audio = document.getElementById('musica');
      audio.volume = 0.3;
      audio.play();

      const frases = document.querySelectorAll('.frase');
      frases.forEach((frase, i) => {
        setTimeout(() => {
          frase.classList.add('visible');
        }, i * 2000);
      });
    }