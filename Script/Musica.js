// Configuración
const PASSWORD = "130425" // Cambia esta contraseña

// Lista de todas las canciones para el modo aleatorio
const allSongs = [
  // Feid
  { id: "1326099130", title: "Feliz Cumpleaños - Feid" },
  { id: "1683090669", title: "LUNA - Feid" },
  { id: "FEID_SONG_3", title: "PORFA - Feid" },
  { id: "FEID_SONG_4", title: "NORMAL - Feid" },
  { id: "FEID_SONG_5", title: "BUBALU - Feid" },
  { id: "FEID_SONG_6", title: "CLASSY 101 - Feid" },

  // Álvaro Díaz
  { id: "ALVARO_SONG_1", title: "Problemón - Álvaro Díaz" },
  { id: "ALVARO_SONG_2", title: "Llori Pari - Álvaro Díaz" },
  { id: "ALVARO_SONG_3", title: "Reina Pepiada - Álvaro Díaz" },
  { id: "ALVARO_SONG_4", title: "Gatita - Álvaro Díaz" },

  // Jhayco
  { id: "JHAYCO_SONG_1", title: "Dakiti - Jhayco" },
  { id: "JHAYCO_SONG_2", title: "Sensual Bebé - Jhayco" },
  { id: "JHAYCO_SONG_3", title: "Holanda - Jhayco" },
  { id: "JHAYCO_SONG_4", title: "Ley Seca - Jhayco" },

  // Rels B
  { id: "RELS_SONG_1", title: "La Prisión - Rels B" },
  { id: "RELS_SONG_2", title: "Buenos Genes - Rels B" },
  { id: "RELS_SONG_3", title: "Lejos de Ti - Rels B" },
  { id: "RELS_SONG_4", title: "Se Apaga - Rels B" },

  // Dei V
  { id: "DEIV_SONG_1", title: "Hola - Dei V" },
  { id: "DEIV_SONG_2", title: "Perdido - Dei V" },
  { id: "DEIV_SONG_3", title: "Relax - Dei V" },

  // Saiko
  { id: "SAIKO_SONG_1", title: "Polaris - Saiko" },
  { id: "SAIKO_SONG_2", title: "Colorao - Saiko" },
  { id: "SAIKO_SONG_3", title: "Badgyal - Saiko" },

  // Quevedo
  { id: "QUEVEDO_SONG_1", title: "Bzrp Music Sessions #52 - Quevedo" },
  { id: "QUEVEDO_SONG_2", title: "Quédate - Quevedo" },
  { id: "QUEVEDO_SONG_3", title: "Cayó la Noche - Quevedo" },
  { id: "QUEVEDO_SONG_4", title: "Columbia - Quevedo" },

  // Don Omar
  { id: "DONOMAR_SONG_1", title: "Danza Kuduro - Don Omar" },
  { id: "DONOMAR_SONG_2", title: "Hasta Que Salga el Sol - Don Omar" },
  { id: "DONOMAR_SONG_3", title: "Salió el Sol - Don Omar" },
  { id: "DONOMAR_SONG_4", title: "Taboo - Don Omar" },

  // Bad Bunny
  { id: "BADBUNNY_SONG_1", title: "Tití Me Preguntó - Bad Bunny" },
  { id: "BADBUNNY_SONG_2", title: "Me Porto Bonito - Bad Bunny" },
  { id: "BADBUNNY_SONG_3", title: "Ojitos Lindos - Bad Bunny" },
  { id: "BADBUNNY_SONG_4", title: "Efecto - Bad Bunny" },
  { id: "BADBUNNY_SONG_5", title: "Neverita - Bad Bunny" },
  { id: "BADBUNNY_SONG_6", title: "Moscow Mule - Bad Bunny" },
]

// Verificar contraseña
function checkPassword() {
  const input = document.getElementById("password-input")
  const enteredPassword = input.value.trim()

  if (enteredPassword === PASSWORD) {
    // Animación de salida
    const passwordScreen = document.getElementById("password-screen")
    passwordScreen.style.animation = "fadeOut 0.5s ease-out forwards"

    setTimeout(() => {
      passwordScreen.classList.add("hidden")
      document.getElementById("main-content").classList.remove("hidden")

      // Animación de entrada del contenido principal
      document.getElementById("main-content").style.animation = "fadeIn 1s ease-out"
    }, 500)
  } else {
    // Efecto de error
    input.style.animation = "shake 0.5s ease-out"
    input.style.borderColor = "#ff4757"

    setTimeout(() => {
      input.style.animation = ""
      input.style.borderColor = ""
      input.value = ""
    }, 500)
  }
}

// Permitir enter en el campo de contraseña
document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password-input")
  if (passwordInput) {
    passwordInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        checkPassword()
      }
    })
  }
})

// Mostrar sección de artista
function showArtist(artistId) {
  // Ocultar todas las secciones
  const sections = document.querySelectorAll(".artist-section")
  sections.forEach((section) => {
    section.classList.remove("active")
  })

  // Mostrar la sección seleccionada
  document.getElementById(artistId).classList.add("active")

  // Actualizar botones de navegación
  const buttons = document.querySelectorAll(".artist-btn")
  buttons.forEach((btn) => {
    btn.classList.remove("active")
  })

  event.target.classList.add("active")

  // Cerrar reproductor si está abierto
  closePlayer()
}

// Reproducir canción de SoundCloud
function playSong(trackId, songTitle) {
  const playerContainer = document.getElementById("player-container")
  const currentSongElement = document.getElementById("current-song")
  const soundcloudPlayer = document.getElementById("soundcloud-player")

  // Actualizar título de la canción
  currentSongElement.textContent = songTitle

  // Configurar iframe de SoundCloud
  // NOTA: Reemplaza TRACK_ID con el ID real de SoundCloud
  const embedUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`

  soundcloudPlayer.src = embedUrl

  // Mostrar reproductor con animación
  playerContainer.classList.remove("hidden")

  // Efecto visual suave
  addVisualEffect()
}

// Cerrar reproductor
function closePlayer() {
  const playerContainer = document.getElementById("player-container")
  const soundcloudPlayer = document.getElementById("soundcloud-player")

  // Animación de salida
  playerContainer.style.animation = "slideOutDown 0.5s ease-out forwards"

  setTimeout(() => {
    playerContainer.classList.add("hidden")
    playerContainer.style.animation = ""
    soundcloudPlayer.src = ""
  }, 500)
}

// Reproducir canción aleatoria
function playRandomSong() {
  const randomIndex = Math.floor(Math.random() * allSongs.length)
  const randomSong = allSongs[randomIndex]

  // Efecto especial para canción aleatoria
  const randomBtn = document.querySelector(".random-btn")
  randomBtn.style.animation = "pulse 0.5s ease-out"

  setTimeout(() => {
    randomBtn.style.animation = ""
    playSong(randomSong.id, randomSong.title + " ♡ Sorpresa")
  }, 500)
}

// Efecto visual al cambiar canción
function addVisualEffect() {
  const body = document.body
  const overlay = document.createElement("div")

  overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(255,107,157,0.1) 0%, transparent 70%);
        pointer-events: none;
        z-index: 50;
        animation: pulseOverlay 2s ease-out forwards;
    `

  body.appendChild(overlay)

  setTimeout(() => {
    body.removeChild(overlay)
  }, 2000)
}

// Animaciones CSS adicionales
const additionalStyles = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.9);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes slideOutDown {
        to {
            transform: translateY(100%);
            opacity: 0;
        }
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    @keyframes pulseOverlay {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
`

// Agregar estilos adicionales
const styleSheet = document.createElement("style")
styleSheet.textContent = additionalStyles
document.head.appendChild(styleSheet)

// Efectos de partículas en hover de canciones
document.addEventListener("DOMContentLoaded", () => {
  const songCards = document.querySelectorAll(".song-card")

  songCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      createHeartParticles(this)
    })
  })
})

function createHeartParticles(element) {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const heart = document.createElement("div")
      heart.innerHTML = "♡"
      heart.style.cssText = `
                position: absolute;
                color: #ff6b9d;
                font-size: 1rem;
                pointer-events: none;
                z-index: 1000;
                animation: floatHeart 2s ease-out forwards;
            `

      const rect = element.getBoundingClientRect()
      heart.style.left = rect.left + Math.random() * rect.width + "px"
      heart.style.top = rect.top + rect.height + "px"

      document.body.appendChild(heart)

      setTimeout(() => {
        document.body.removeChild(heart)
      }, 2000)
    }, i * 200)
  }
}

// Animación para corazones flotantes
const heartAnimation = `
    @keyframes floatHeart {
        0% {
            opacity: 1;
            transform: translateY(0) scale(0.5);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(1);
        }
    }
`

styleSheet.textContent += heartAnimation

/* 
INSTRUCCIONES PARA AGREGAR CANCIONES DE SOUNDCLOUD:

1. Ve a SoundCloud y busca la canción que quieres agregar
2. Haz clic en "Share" y luego en "Embed"
3. Copia la URL que aparece después de "tracks/"
   Ejemplo: si la URL es https://api.soundcloud.com/tracks/123456789
   El ID sería: 123456789

4. En el HTML, busca las líneas como esta:
   onclick="playSong('FEID_SONG_1', 'Feliz Cumpleaños')"
   
5. Reemplaza 'FEID_SONG_1' con el ID real de SoundCloud
   Ejemplo: onclick="playSong('123456789', 'Feliz Cumpleaños')"

6. También actualiza el array 'allSongs' en este archivo JavaScript
   con los IDs y títulos reales

EJEMPLO DE CÓMO OBTENER EL ID DE SOUNDCLOUD:
1. Ve a la canción en SoundCloud
2. Haz clic en "Share"
3. Copia el enlace embed
4. El número después de "tracks/" es tu ID

ARTISTAS Y CANCIONES INCLUIDAS:
✅ Feid - Álbum Feliz Cumpleaños completo
✅ Álvaro Díaz - Sus mejores canciones
✅ Jhayco - Hits principales
✅ Rels B - Canciones populares
✅ Dei V - Tracks destacados
✅ Saiko - Sus mejores temas
✅ Quevedo - Incluyendo Bzrp Sessions #52
✅ Don Omar - Clásicos del reggaetón
✅ Bad Bunny - Hits de Un Verano Sin Ti y más

¡Solo necesitas reemplazar los IDs de ejemplo con los reales de SoundCloud!
*/
