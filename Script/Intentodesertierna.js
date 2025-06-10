const mensajes = {
      gustas: [
        "Tu inteligencia me cautiva" 
        , "Tu sonrisa ilumina mi día",
        "Tu forma de ser es única y especial",
        "Siempre sabes cómo hacerme reír",
        "Eres increíblemente amable y considerada"
            ],
            siento: [
        "Me haces sentir amado y valorado",
        "Contigo me siento en paz y feliz",
        "Eres mi refugio en los días difíciles",
        "Me inspiras a ser una mejor persona"
            ],
            futuro: [
        "Espero construir un futuro lleno de amor contigo",
        "Sueño con compartir aventuras y momentos inolvidables",
        "Quiero apoyarte en cada paso de tu camino",
        "Juntos podemos superar cualquier obstáculo"
            ]
          };

          function mostrarMensaje(tipo) {
            const output = document.getElementById('output');
            const mensaje = mensajes[tipo][Math.floor(Math.random() * mensajes[tipo].length)];
            output.textContent = `> ${mensaje}`;
          }