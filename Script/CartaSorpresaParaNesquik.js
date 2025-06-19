 const texto = "Eres la razón de mi sonrisa, el motivo de mis alegrías y el sueño que nunca quiero despertar. Tu risa es mi melodía favorita, y nuestras llamadas, mi refugio. Cada día contigo es un regalo que atesoro con todo mi corazón. 💖";
    let i = 0;
    function escribirPoema() {
      let target = document.getElementById("textoPoema");
      target.innerHTML = "";
      let intervalo = setInterval(() => {
        target.innerHTML += texto[i];
        i++;
        if (i >= texto.length) clearInterval(intervalo);
      }, 50);
      lluviaCorazones();
    }

    function lluviaCorazones() {
      for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heartRain");
        heart.innerHTML = "💗";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-2em";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
      }
    }