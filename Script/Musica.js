// Array de canciones con letras - Aquí puedes agregar fácilmente más canciones
const canciones = [
  // === ALVARO DIAZ ===
  {
    titulo: "TE VI EN MIS PESADILLAS",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/%C3%81lvaro%20D%C3%ADaz%20-%20TE%20VI%20EN%20MIS%20PESADILLAS.mp3?alt=media&token=5b0d0500-9e80-41ab-8c95-4fec864d8f15",
    letra: "",
  },
  {
    titulo: "LENTITO",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%20-%20LENTITO.mp3?alt=media&token=02482249-6fe2-4713-9704-588e37927495",
    letra: "",
  },
  {
    titulo: "BYAK",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/%C3%81lvaro%20D%C3%ADaz%2C%20Rauw%20Alejandro%20-%20BYAK.mp3?alt=media&token=0b82ead3-dc7d-464f-9985-949d9f94b25f",
    letra: "",
  },
  {
    titulo: "YOKO",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%20-%20Yoko.mp3?alt=media&token=55873a77-88ed-4b46-a509-e3a28749d5f6",
    letra: "",
  },
  {
    titulo: "QUIZÁS SI QUIZÁS NO",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%2C%20Quevedo%20-%20QUIZAS%20SI%20QUIZAS%20NO.mp3?alt=media&token=2377b364-8da6-42cd-b4bb-c42ee3e29a18",
    letra: "",
  },
  {
    titulo: "GOLDEN GUN",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/%C3%81lvaro%20D%C3%ADaz%20-%20GOLDEN%20GUN.mp3?alt=media&token=d17adf1b-7d7d-4201-ac56-80dc170dbccb",
    letra: "",
  },
  {
    titulo: "FUNERAL",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/%C3%81lvaro%20D%C3%ADaz%2C%20Ar%C3%B3n%20Piper%20-%20FUNERAL.mp3?alt=media&token=309deb52-f302-49a4-a823-9afbadd37f5f",
    letra: "",
  },
  {
    titulo: "HATTORI",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%20-%20HATTORI%20(Audio).mp3?alt=media&token=6d32c700-5e36-459b-8872-f27b9ba4e641",
    letra: "",
  },
  {
    titulo: "XQ ERES ASI",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%2C%20Nathy%20Peluso%20-%20XQ%20ERES%20AS%C3%8D_.mp3?alt=media&token=c47e025d-d5fa-4b27-97ca-6c22d79a8df1",
    letra: "",
  },
  {
    titulo: "JPN",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%20-%20JPN.mp3?alt=media&token=bb11b7d9-24f5-4639-ab65-258780b1aa77",
    letra: "",
  },
  {
    titulo: "PROBLEMÓN",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%2C%20Rauw%20Alejandro%20-%20Problem%C3%B3n.mp3?alt=media&token=410a32f2-4de4-42ca-a603-610a29e25380",
    letra: "",
  },
  {
    titulo: "18+1",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%2C%20Jesse%20Baez%20-%2018%2B1.mp3?alt=media&token=5351f81d-e459-4e1e-a014-35aba0b2242b",
    letra: "",
  },
  {
    titulo: "BABYSITA </3",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%20-%20Babysita.mp3?alt=media&token=d6234b66-803b-4aed-9b62-5b0740d51122",
    letra: "",
  },
  {
    titulo: "SHH",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%2C%20BRATTY%20-%20Shh.mp3?alt=media&token=f8bb8923-7132-4bf7-aa4b-588969d266a1",
    letra: "",
  },
  {
    titulo: "ONLINE ;(",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%2C%20Sebasti%C3%A1n%20Yatra%20-%20Online.mp3?alt=media&token=60ea9cb3-c2bb-414d-8b84-fcebef407d60",
    letra: "",
  },
  {
    titulo: "REINA PEPIADA",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/%C3%81lvaro%20D%C3%ADaz%20-%20Reina%20Pepiada.mp3?alt=media&token=0bc3156b-3a93-43b4-9cf6-55005994a725",
    letra: "",
  },
  {
    titulo: "EL ULTIMO BAILE",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/%C3%81lvaro%20D%C3%ADaz%2C%20Kablito%20-%20El%20%C3%9Altimo%20Baile.mp3?alt=media&token=da5b177f-8c82-4ef5-a5f0-be36bd7a7e29",
    letra: "",
  },
  {
    titulo: "EN PR NO HACE FRIO",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/%C3%81lvaro%20Diaz%2C%20Paopao%20-%20EN%20PR%20NO%20HACE%20FR%C3%8DO.mp3?alt=media&token=004325e0-293e-4ff6-919a-f59ac433b0b9",
    letra: "",
  },
  {
    titulo: "RAMONA FLOWERS",
    artista: "ALVARO DIAZ",
    url: "https://firebasestorage.googleapis.com/v0/b/canciones-web.firebasestorage.app/o/Alvaro%20Diaz%20-%20Ramona%20Flowers.mp3?alt=media&token=9b3fe75e-f890-4c32-bb6f-c1b3b507550b",
    letra: "",
  },
]

// Mensajes románticos aleatorios para tu chica
const mensajesRomanticos = [
  {
    titulo: "Para ti, mi amor 💕",
    mensaje:
      "Cada canción que escuchamos juntos se convierte en parte de nuestra historia. Eres la melodía más hermosa de mi vida.",
    corazones: "💜💖💜",
  },
  {
    titulo: "Mi corazón te susurra 🌹",
    mensaje:
      "En cada nota musical encuentro una razón más para amarte. Tu sonrisa es la sinfonía más bella que existe.",
    corazones: "🌹💕🌹",
  },
  {
    titulo: "Eres mi canción favorita 🎵",
    mensaje:
      "Si pudiera escribir una canción sobre ti, no tendría fin, porque cada día descubro algo nuevo que me enamora más.",
    corazones: "🎵💜🎵",
  },
  {
    titulo: "Mi alma gemela 💫",
    mensaje:
      "Contigo he aprendido que el amor verdadero suena como la música más dulce. Gracias por ser mi inspiración.",
    corazones: "💫💖💫",
  },
  {
    titulo: "Para siempre juntos 🌙",
    mensaje: "Cada momento a tu lado es como una canción perfecta. Eres mi verso favorito en la poesía de la vida.",
    corazones: "🌙💕🌙",
  },
]

// Variables globales del reproductor
let currentSound = null
let currentSongIndex = 0
let isPlaying = false
let isShuffleMode = false
let isRepeatMode = false
const cancionesOriginales = [...canciones]
let cancionesFiltradas = [...canciones]
let cancionesEscuchadas = 0 // Contador de canciones escuchadas

// Elementos del DOM
const playBtn = document.getElementById("playBtn")
const prevBtn = document.getElementById("prevBtn")
const nextBtn = document.getElementById("nextBtn")
const shuffleBtn = document.getElementById("shuffleBtn")
const repeatBtn = document.getElementById("repeatBtn")
const progressBar = document.getElementById("progressBar")
const progress = document.getElementById("progress")
const currentTimeEl = document.getElementById("currentTime")
const durationEl = document.getElementById("duration")
const volumeSlider = document.getElementById("volumeSlider")
const searchInput = document.getElementById("searchInput")
const artistFilter = document.getElementById("artistFilter")
const songsGrid = document.getElementById("songsGrid")
const nowPlaying = document.getElementById("nowPlaying")
const lyricsSection = document.getElementById("lyricsSection")
const lyricsContent = document.getElementById("lyricsContent")
const closeLyrics = document.getElementById("closeLyrics")

// Importar Howl
const { Howl } = window

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  inicializarReproductor()
  renderizarCanciones()
  configurarEventListeners()
  llenarFiltroArtistas()
})

// Función para inicializar el reproductor
function inicializarReproductor() {
  // Configurar volumen inicial
  volumeSlider.value = 70

  // Mostrar información inicial
  actualizarInfoCancionActual()
}

// Función para renderizar las canciones en la grid (sin mensajes románticos)
function renderizarCanciones() {
  songsGrid.innerHTML = ""

  cancionesFiltradas.forEach((cancion, index) => {
    // Crear tarjeta polaroid de la canción
    const songCard = document.createElement("div")
    songCard.className = "song-card"

    // Resaltar término de búsqueda si existe
    const searchTerm = searchInput.value.toLowerCase().trim()
    let tituloHTML = cancion.titulo
    let artistaHTML = cancion.artista

    if (searchTerm) {
      const regex = new RegExp(`(${searchTerm})`, "gi")
      tituloHTML = cancion.titulo.replace(
        regex,
        '<mark style="background: rgba(139, 92, 246, 0.3); color: var(--accent-color); padding: 0 2px; border-radius: 3px;">$1</mark>',
      )
      artistaHTML = cancion.artista.replace(
        regex,
        '<mark style="background: rgba(139, 92, 246, 0.3); color: var(--accent-color); padding: 0 2px; border-radius: 3px;">$1</mark>',
      )
    }

    songCard.innerHTML = `
      <div class="polaroid-image">
        <i class="fas fa-music"></i>
      </div>
      <div class="song-info">
        <h3>${tituloHTML}</h3>
        <p>${artistaHTML}</p>
      </div>
      <div class="song-controls">
        <button class="play-song-btn" onclick="reproducirCancion(${index})">
          <i class="fas fa-play"></i>
        </button>
        <button class="lyrics-btn" onclick="mostrarLetra(${index})">
          <i class="fas fa-quote-left"></i> Letra
        </button>
        <span class="song-duration">3:45</span>
      </div>
    `

    // Marcar la canción actual como activa
    if (index === currentSongIndex && isPlaying) {
      songCard.classList.add("playing")
    }

    songsGrid.appendChild(songCard)
  })
}

// Función para mostrar la letra de una canción
function mostrarLetra(index) {
  const cancion = cancionesFiltradas[index]
  if (cancion.letra) {
    lyricsContent.textContent = cancion.letra
    lyricsSection.style.display = "block"
    lyricsSection.scrollIntoView({ behavior: "smooth" })
  }
}

// Función para mostrar mensaje romántico flotante
function mostrarMensajeRomantico() {
  const mensaje = mensajesRomanticos[Math.floor(Math.random() * mensajesRomanticos.length)]

  // Crear el elemento del mensaje
  const messageElement = document.createElement("div")
  messageElement.className = "floating-message"

  // Posición aleatoria en la pantalla
  const maxX = window.innerWidth - 350 // Ancho del mensaje
  const maxY = window.innerHeight - 200 // Alto del mensaje
  const randomX = Math.random() * Math.max(maxX, 50)
  const randomY = Math.random() * Math.max(maxY, 50)

  messageElement.style.left = randomX + "px"
  messageElement.style.top = randomY + "px"

  messageElement.innerHTML = `
    <div class="sparkle"></div>
    <div class="sparkle"></div>
    <div class="sparkle"></div>
    <div class="sparkle"></div>
    <div class="floating-message-content">
      <h3>${mensaje.titulo}</h3>
      <div class="hearts">${mensaje.corazones}</div>
      <p>${mensaje.mensaje}</p>
    </div>
  `

  // Agregar al DOM
  document.body.appendChild(messageElement)

  // Crear partículas de corazones
  crearParticulasCorazones(randomX + 175, randomY + 100)

  // Mostrar con animación
  setTimeout(() => {
    messageElement.classList.add("show")
  }, 100)

  // Ocultar después de 5 segundos
  setTimeout(() => {
    messageElement.classList.add("hide")
    setTimeout(() => {
      if (messageElement.parentNode) {
        messageElement.parentNode.removeChild(messageElement)
      }
    }, 500)
  }, 5000)

  // Reproducir sonido de notificación (opcional)
  reproducirSonidoNotificacion()
}

// Función para crear partículas de corazones
function crearParticulasCorazones(centerX, centerY) {
  const corazones = ["💕", "💖", "💜", "🌹", "✨"]

  for (let i = 0; i < 8; i++) {
    const particle = document.createElement("div")
    particle.className = "heart-particle"
    particle.textContent = corazones[Math.floor(Math.random() * corazones.length)]

    // Posición aleatoria alrededor del centro
    const angle = (Math.PI * 2 * i) / 8
    const radius = 50 + Math.random() * 30
    const x = centerX + Math.cos(angle) * radius
    const y = centerY + Math.sin(angle) * radius

    particle.style.left = x + "px"
    particle.style.top = y + "px"

    document.body.appendChild(particle)

    // Remover después de la animación
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle)
      }
    }, 3000)
  }
}

// Función para reproducir sonido de notificación suave
function reproducirSonidoNotificacion() {
  // Crear un tono suave usando Web Audio API
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3)

    gainNode.gain.setValueAtTime(0, audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.3)
  } catch (error) {
    console.log("Audio context no disponible")
  }
}

// Función para ocultar la letra
function ocultarLetra() {
  lyricsSection.style.display = "none"
}

// Función para reproducir una canción específica
function reproducirCancion(index) {
  currentSongIndex = index

  // Detener la canción actual si existe
  if (currentSound) {
    currentSound.stop()
  }

  const cancion = cancionesFiltradas[currentSongIndex]

  // Crear nuevo objeto Howl
  currentSound = new Howl({
    src: [cancion.url],
    html5: true,
    volume: volumeSlider.value / 100,
    onplay: () => {
      isPlaying = true
      actualizarBotonPlay()
      actualizarInfoCancionActual()
      actualizarProgreso()

      // AGREGAR ESTA LÍNEA:
      activarAuraElectronica()

      // Incrementar contador de canciones escuchadas
      cancionesEscuchadas++
      console.log(`Canciones escuchadas: ${cancionesEscuchadas}`)

      // Mostrar mensaje romántico cada 5 canciones
      if (cancionesEscuchadas % 5 === 0) {
        setTimeout(() => {
          mostrarMensajeRomantico()
        }, 2000)
      }
    },
    onpause: () => {
      isPlaying = false
      actualizarBotonPlay()

      // AGREGAR ESTA LÍNEA:
      desactivarAuraElectronica()
    },
    onend: () => {
      siguienteCancion()
    },
    onloaderror: () => {
      console.error("Error al cargar la canción:", cancion.titulo)
      siguienteCancion()
    },
  })

  currentSound.play()
  renderizarCanciones() // Re-renderizar para mostrar la canción activa
}

// Variables para efectos electrónicos
let electronicAura = null
let spectrumVisualizer = null
let effectsInterval = null

// Función para activar el aura electrónica
function activarAuraElectronica() {
  console.log("🔥 Activando aura electrónica...")

  // Crear aura si no existe
  if (!electronicAura) {
    inicializarAuraElectronica()
  }

  // Activar aura principal
  electronicAura.classList.add("active")
  spectrumVisualizer.classList.add("active")

  // Agregar clase al reproductor principal
  nowPlaying.classList.add("playing")

  // Activar efectos de neón en botones
  activarEfectosNeon()

  // Iniciar efectos continuos
  iniciarEfectosContinuos()

  console.log("✨ Aura electrónica activada!")
}

// Función para desactivar el aura electrónica
function desactivarAuraElectronica() {
  console.log("⚡ Desactivando aura electrónica...")

  if (electronicAura) {
    electronicAura.classList.remove("active")
    spectrumVisualizer.classList.remove("active")
    nowPlaying.classList.remove("playing")

    // Desactivar efectos de neón
    document.querySelectorAll(".control-btn").forEach((btn) => {
      btn.classList.remove("neon-active")
    })

    // Detener efectos continuos
    if (effectsInterval) {
      clearInterval(effectsInterval)
      effectsInterval = null
    }

    console.log("🌙 Aura electrónica desactivada")
  }
}

// Función para inicializar el aura electrónica
function inicializarAuraElectronica() {
  console.log("🎮 Inicializando aura electrónica...")

  // Crear contenedor principal del aura
  electronicAura = document.createElement("div")
  electronicAura.className = "electronic-aura"
  electronicAura.id = "electronicAura"
  document.body.appendChild(electronicAura)

  // Crear visualizador de espectro
  spectrumVisualizer = document.createElement("div")
  spectrumVisualizer.className = "spectrum-visualizer"
  spectrumVisualizer.id = "spectrumVisualizer"

  // Crear barras del espectro
  for (let i = 0; i < 50; i++) {
    const bar = document.createElement("div")
    bar.className = "spectrum-bar"
    bar.style.animationDelay = `${i * 0.05}s`
    bar.style.animationDuration = `${0.5 + Math.random() * 0.5}s`
    spectrumVisualizer.appendChild(bar)
  }

  document.body.appendChild(spectrumVisualizer)

  // Crear efectos de circuito
  const circuitEffect = document.createElement("div")
  circuitEffect.className = "circuit-effect"
  electronicAura.appendChild(circuitEffect)

  console.log("🎯 Aura electrónica inicializada")
}

// Función para iniciar efectos continuos
function iniciarEfectosContinuos() {
  if (effectsInterval) {
    clearInterval(effectsInterval)
  }

  effectsInterval = setInterval(() => {
    if (!isPlaying) return

    // Crear ondas de sonido
    crearOndasSonido()

    // Crear partículas cada 2 segundos
    if (Math.random() > 0.5) {
      crearParticulasElectronicas()
    }

    // Crear líneas de energía cada 3 segundos
    if (Math.random() > 0.7) {
      crearLineasEnergia()
    }

    // Crear lluvia digital ocasionalmente
    if (Math.random() > 0.8) {
      crearLluviaDigital()
    }
  }, 1000) // Cada segundo
}

// Función para crear ondas de sonido expansivas
function crearOndasSonido() {
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2

  for (let i = 0; i < 4; i++) {
    setTimeout(() => {
      const wave = document.createElement("div")
      wave.className = "sound-wave"
      wave.style.left = centerX - 30 + "px"
      wave.style.top = centerY - 30 + "px"

      electronicAura.appendChild(wave)

      // Remover después de la animación
      setTimeout(() => {
        if (wave.parentNode) {
          wave.parentNode.removeChild(wave)
        }
      }, 2000)
    }, i * 500)
  }
}

// Función para crear partículas electrónicas
function crearParticulasElectronicas() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const particle = document.createElement("div")
      particle.className = "electronic-particle"

      // Posición aleatoria
      particle.style.left = Math.random() * window.innerWidth + "px"
      particle.style.top = Math.random() * window.innerHeight + "px"

      // Duración aleatoria
      particle.style.animationDuration = 2 + Math.random() * 3 + "s"

      electronicAura.appendChild(particle)

      // Remover después de la animación
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle)
        }
      }, 4000)
    }, i * 100)
  }
}

// Función para crear líneas de energía
function crearLineasEnergia() {
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const line = document.createElement("div")
      line.className = "energy-line"

      // Posición y orientación aleatoria
      const isHorizontal = Math.random() > 0.5
      if (isHorizontal) {
        line.style.top = Math.random() * window.innerHeight + "px"
        line.style.left = "0px"
      } else {
        line.classList.add("vertical")
        line.style.left = Math.random() * window.innerWidth + "px"
        line.style.top = "0px"
      }

      electronicAura.appendChild(line)

      // Remover después de la animación
      setTimeout(() => {
        if (line.parentNode) {
          line.parentNode.removeChild(line)
        }
      }, 3000)
    }, i * 300)
  }
}

// Función para crear lluvia digital
function crearLluviaDigital() {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      const rain = document.createElement("div")
      rain.className = "digital-rain"

      rain.style.left = Math.random() * window.innerWidth + "px"
      rain.style.animationDelay = Math.random() * 2 + "s"
      rain.style.animationDuration = 2 + Math.random() * 2 + "s"

      electronicAura.appendChild(rain)

      // Remover después de la animación
      setTimeout(() => {
        if (rain.parentNode) {
          rain.parentNode.removeChild(rain)
        }
      }, 4000)
    }, i * 200)
  }
}

// Función para activar efectos de neón en botones
function activarEfectosNeon() {
  const buttons = document.querySelectorAll(".control-btn")
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add("neon-active")
    }, index * 150)
  })
}

// Función para alternar play/pause
function togglePlayPause() {
  if (!currentSound) {
    reproducirCancion(0)
    return
  }

  if (isPlaying) {
    currentSound.pause()
  } else {
    currentSound.play()
  }
}

// Función para ir a la canción anterior
function cancionAnterior() {
  if (isShuffleMode) {
    currentSongIndex = Math.floor(Math.random() * cancionesFiltradas.length)
  } else {
    currentSongIndex = currentSongIndex > 0 ? currentSongIndex - 1 : cancionesFiltradas.length - 1
  }
  reproducirCancion(currentSongIndex)
}

// Función para ir a la siguiente canción
function siguienteCancion() {
  if (isRepeatMode && currentSound) {
    currentSound.seek(0)
    currentSound.play()
    return
  }

  if (isShuffleMode) {
    currentSongIndex = Math.floor(Math.random() * cancionesFiltradas.length)
  } else {
    currentSongIndex = currentSongIndex < cancionesFiltradas.length - 1 ? currentSongIndex + 1 : 0
  }
  reproducirCancion(currentSongIndex)
}

// Función para alternar modo aleatorio
function toggleShuffle() {
  isShuffleMode = !isShuffleMode
  shuffleBtn.classList.toggle("active", isShuffleMode)
}

// Función para alternar modo repetir
function toggleRepeat() {
  isRepeatMode = !isRepeatMode
  repeatBtn.classList.toggle("active", isRepeatMode)
}

// Función para actualizar el botón de play
function actualizarBotonPlay() {
  const icon = playBtn.querySelector("i")
  icon.className = isPlaying ? "fas fa-pause" : "fas fa-play"
}

// Función para actualizar la información de la canción actual
function actualizarInfoCancionActual() {
  const currentSong = document.querySelector(".current-song")
  const currentArtist = document.querySelector(".current-artist")

  if (cancionesFiltradas[currentSongIndex]) {
    currentSong.textContent = cancionesFiltradas[currentSongIndex].titulo
    currentArtist.textContent = cancionesFiltradas[currentSongIndex].artista
  }
}

// Función para actualizar el progreso de la canción
function actualizarProgreso() {
  if (!currentSound || !isPlaying) return

  const seek = currentSound.seek() || 0
  const duration = currentSound.duration() || 0

  // Actualizar barra de progreso
  const progressPercent = (seek / duration) * 100
  progress.style.width = progressPercent + "%"

  // Actualizar tiempo actual
  currentTimeEl.textContent = formatearTiempo(seek)
  durationEl.textContent = formatearTiempo(duration)

  // Continuar actualizando si está reproduciendo
  if (isPlaying) {
    requestAnimationFrame(actualizarProgreso)
  }
}

// Función para formatear el tiempo en mm:ss
function formatearTiempo(seconds) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = Math.floor(seconds % 60)
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

// Función mejorada para buscar canciones con sugerencias inteligentes
function buscarCanciones() {
  const searchTerm = searchInput.value.toLowerCase().trim()
  const artistFilterValue = artistFilter.value

  console.log("🔍 Buscando:", searchTerm) // Debug

  // Si no hay término de búsqueda ni filtro, mostrar todas las canciones
  if (!searchTerm && !artistFilterValue) {
    cancionesFiltradas = [...cancionesOriginales]
    renderizarCanciones()
    ocultarSugerencias()
    mostrarResultadosBusqueda(cancionesFiltradas.length, cancionesOriginales.length)
    return
  }

  cancionesFiltradas = cancionesOriginales.filter((cancion) => {
    // Asegurar que todas las propiedades existan
    const titulo = cancion.titulo || ""
    const artista = cancion.artista || ""
    const letra = cancion.letra || ""

    let matchesSearch = false

    if (searchTerm) {
      const tituloLower = titulo.toLowerCase()
      const artistaLower = artista.toLowerCase()
      const letraLower = letra.toLowerCase()

      // 1. Coincidencia exacta
      if (tituloLower.includes(searchTerm) || artistaLower.includes(searchTerm)) {
        matchesSearch = true
      }

      // 2. Búsqueda por palabras individuales
      const searchWords = searchTerm.split(" ").filter((word) => word.length > 0)
      const titleWords = tituloLower.split(" ")
      const artistWords = artistaLower.split(" ")

      if (
        searchWords.every(
          (searchWord) =>
            titleWords.some((titleWord) => titleWord.includes(searchWord)) ||
            artistWords.some((artistWord) => artistWord.includes(searchWord)),
        )
      ) {
        matchesSearch = true
      }

      // 3. Búsqueda por iniciales
      const titleInitials = titleWords.map((word) => word.charAt(0)).join("")
      const artistInitials = artistWords.map((word) => word.charAt(0)).join("")

      if (titleInitials.includes(searchTerm) || artistInitials.includes(searchTerm)) {
        matchesSearch = true
      }

      // 4. Búsqueda en letra
      if (letraLower.includes(searchTerm)) {
        matchesSearch = true
      }

      // 5. Búsqueda difusa (tolerante a errores)
      if (calcularSimilitud(searchTerm, tituloLower) > 0.6 || calcularSimilitud(searchTerm, artistaLower) > 0.6) {
        matchesSearch = true
      }
    } else {
      matchesSearch = true
    }

    const matchesArtist = !artistFilterValue || artista === artistFilterValue

    return matchesSearch && matchesArtist
  })

  // Ordenar resultados por relevancia
  cancionesFiltradas.sort((a, b) => {
    const scoreA = calcularPuntuacionRelevancia(a, searchTerm)
    const scoreB = calcularPuntuacionRelevancia(b, searchTerm)
    return scoreB - scoreA
  })

  console.log("✅ Resultados encontrados:", cancionesFiltradas.length) // Debug

  renderizarCanciones()
  mostrarResultadosBusqueda(cancionesFiltradas.length, cancionesOriginales.length, searchTerm)

  // Mostrar sugerencias si hay término de búsqueda
  if (searchTerm && cancionesFiltradas.length > 0) {
    mostrarSugerencias(searchTerm)
  } else {
    ocultarSugerencias()
  }
}

// Función para calcular similitud entre strings (algoritmo de Levenshtein simplificado)
function calcularSimilitud(str1, str2) {
  const longer = str1.length > str2.length ? str1 : str2
  const shorter = str1.length > str2.length ? str2 : str1

  if (longer.length === 0) return 1.0

  const editDistance = calcularDistanciaEdicion(longer, shorter)
  return (longer.length - editDistance) / longer.length
}

// Función para calcular distancia de edición
function calcularDistanciaEdicion(str1, str2) {
  const matrix = []

  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
      }
    }
  }

  return matrix[str2.length][str1.length]
}

// Función para calcular puntuación de relevancia
function calcularPuntuacionRelevancia(cancion, searchTerm) {
  let score = 0
  const tituloLower = (cancion.titulo || "").toLowerCase()
  const artistaLower = (cancion.artista || "").toLowerCase()

  // Coincidencia exacta en título (máxima puntuación)
  if (tituloLower.includes(searchTerm)) {
    score += 100
    // Bonus si empieza con el término
    if (tituloLower.startsWith(searchTerm)) {
      score += 50
    }
  }

  // Coincidencia en artista
  if (artistaLower.includes(searchTerm)) {
    score += 75
  }

  // Coincidencia por palabras
  const searchWords = searchTerm.split(" ")
  const titleWords = tituloLower.split(" ")

  searchWords.forEach((searchWord) => {
    titleWords.forEach((titleWord) => {
      if (titleWord.includes(searchWord)) {
        score += 25
      }
    })
  })

  // Similitud difusa
  score += calcularSimilitud(searchTerm, tituloLower) * 30
  score += calcularSimilitud(searchTerm, artistaLower) * 20

  return score
}

// Función para mostrar sugerencias inteligentes
function mostrarSugerencias(searchTerm) {
  // Remover sugerencias anteriores
  ocultarSugerencias()

  // Crear contenedor de sugerencias
  const suggestionsContainer = document.createElement("div")
  suggestionsContainer.id = "search-suggestions"
  suggestionsContainer.className = "search-suggestions"

  // Generar sugerencias
  const sugerencias = generarSugerencias(searchTerm)

  if (sugerencias.length > 0) {
    sugerencias.forEach((sugerencia, index) => {
      const suggestionItem = document.createElement("div")
      suggestionItem.className = "suggestion-item"
      suggestionItem.innerHTML = `
        <div class="suggestion-content">
          <i class="fas fa-music suggestion-icon"></i>
          <div class="suggestion-text">
            <div class="suggestion-title">${resaltarCoincidencias(sugerencia.titulo, searchTerm)}</div>
            <div class="suggestion-artist">${resaltarCoincidencias(sugerencia.artista, searchTerm)}</div>
          </div>
          <div class="suggestion-score">${Math.round(sugerencia.score)}%</div>
        </div>
      `

      // Agregar evento click
      suggestionItem.addEventListener("click", () => {
        searchInput.value = sugerencia.titulo
        buscarCanciones()
        ocultarSugerencias()
        // Reproducir la canción sugerida
        const index = cancionesFiltradas.findIndex((c) => c.titulo === sugerencia.titulo)
        if (index !== -1) {
          reproducirCancion(index)
        }
      })

      suggestionsContainer.appendChild(suggestionItem)
    })

    // Insertar después del input de búsqueda
    searchInput.parentNode.appendChild(suggestionsContainer)

    // Mostrar con animación
    setTimeout(() => {
      suggestionsContainer.classList.add("show")
    }, 10)
  }
}

// Función para generar sugerencias inteligentes
function generarSugerencias(searchTerm) {
  const sugerencias = cancionesOriginales.map((cancion) => ({
    ...cancion,
    score: calcularPuntuacionRelevancia(cancion, searchTerm),
  }))

  // Filtrar y ordenar por relevancia
  return sugerencias
    .filter((s) => s.score > 20) // Solo mostrar sugerencias relevantes
    .sort((a, b) => b.score - a.score)
    .slice(0, 5) // Máximo 5 sugerencias
}

// Función para resaltar coincidencias en el texto
function resaltarCoincidencias(texto, searchTerm) {
  if (!searchTerm) return texto

  const regex = new RegExp(`(${searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  return texto.replace(regex, '<mark class="highlight-match">$1</mark>')
}

// Función para ocultar sugerencias
function ocultarSugerencias() {
  const existingSuggestions = document.getElementById("search-suggestions")
  if (existingSuggestions) {
    existingSuggestions.remove()
  }
}

// Función para mostrar resultados de búsqueda
function mostrarResultadosBusqueda(encontradas, total, termino = "") {
  // Remover mensaje anterior si existe
  const mensajeAnterior = document.getElementById("search-results-message")
  if (mensajeAnterior) {
    mensajeAnterior.remove()
  }

  // Crear mensaje de resultados
  const mensaje = document.createElement("div")
  mensaje.id = "search-results-message"
  mensaje.style.cssText = `
    background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1));
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 15px;
    padding: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-primary);
    font-size: 0.9rem;
    animation: fadeIn 0.3s ease;
  `

  if (encontradas === 0 && termino) {
    mensaje.innerHTML = `
      <i class="fas fa-search" style="color: var(--accent-color); margin-right: 0.5rem;"></i>
      No se encontraron canciones que contengan "<strong>${termino}</strong>"
      <br><small style="opacity: 0.7;">Intenta con otro término de búsqueda</small>
    `
  } else if (termino) {
    mensaje.innerHTML = `
      <i class="fas fa-music" style="color: var(--primary-color); margin-right: 0.5rem;"></i>
      Se encontraron <strong>${encontradas}</strong> canción${encontradas !== 1 ? "es" : ""} 
      que contiene${encontradas === 1 ? "" : "n"} "<strong>${termino}</strong>"
    `
  } else if (encontradas < total) {
    mensaje.innerHTML = `
      <i class="fas fa-filter" style="color: var(--rose-color); margin-right: 0.5rem;"></i>
      Mostrando <strong>${encontradas}</strong> de <strong>${total}</strong> canciones
    `
  }

  // Solo mostrar si hay filtros activos o no hay resultados
  if (encontradas < total || (encontradas === 0 && termino)) {
    songsGrid.parentNode.insertBefore(mensaje, songsGrid)
  }
}

// Función para llenar el filtro de artistas
function llenarFiltroArtistas() {
  const artistas = [...new Set(cancionesOriginales.map((cancion) => cancion.artista))]

  artistas.forEach((artista) => {
    const option = document.createElement("option")
    option.value = artista
    option.textContent = artista
    artistFilter.appendChild(option)
  })
}

// Función para configurar todos los event listeners
function configurarEventListeners() {
  // Controles del reproductor
  playBtn.addEventListener("click", togglePlayPause)
  prevBtn.addEventListener("click", cancionAnterior)
  nextBtn.addEventListener("click", siguienteCancion)
  shuffleBtn.addEventListener("click", toggleShuffle)
  repeatBtn.addEventListener("click", toggleRepeat)

  // Control de volumen
  volumeSlider.addEventListener("input", function () {
    if (currentSound) {
      currentSound.volume(this.value / 100)
    }
  })

  // Barra de progreso
  progressBar.addEventListener("click", function (e) {
    if (!currentSound) return

    const rect = this.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width
    const duration = currentSound.duration()
    const newTime = (clickX / width) * duration

    currentSound.seek(newTime)
  })

  // Búsqueda en tiempo real con debounce
  let timeoutBusqueda = null
  searchInput.addEventListener("input", () => {
    clearTimeout(timeoutBusqueda)
    timeoutBusqueda = setTimeout(buscarCanciones, 200) // Debounce de 200ms
  })

  // Limpiar búsqueda con Escape
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = ""
      buscarCanciones()
      ocultarSugerencias()
      searchInput.blur()
    }
  })

  // Filtro de artistas
  artistFilter.addEventListener("change", buscarCanciones)

  // Cerrar letras
  closeLyrics.addEventListener("click", ocultarLetra)

  // Atajos de teclado MEJORADOS
  document.addEventListener("keydown", (e) => {
    // NO ejecutar atajos si el usuario está escribiendo en un input
    const isTyping =
      document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA" ||
      document.activeElement.isContentEditable

    if (isTyping) {
      // Solo permitir Escape para salir del input
      if (e.code === "Escape") {
        document.activeElement.blur()
        ocultarLetra()
        ocultarSugerencias()
      }
      return // No ejecutar otros atajos mientras se escribe
    }

    // Atajos de teclado solo cuando NO se está escribiendo
    switch (e.code) {
      case "Space":
        e.preventDefault()
        togglePlayPause()
        break
      case "ArrowLeft":
        e.preventDefault()
        cancionAnterior()
        break
      case "ArrowRight":
        e.preventDefault()
        siguienteCancion()
        break
      case "Escape":
        ocultarLetra()
        ocultarSugerencias()
        break
    }
  })

  // Cerrar sugerencias al hacer click fuera
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !e.target.closest("#search-suggestions")) {
      ocultarSugerencias()
    }
  })
}

// Función para agregar nuevas canciones (utilidad para desarrolladores)
function agregarCancion(titulo, artista, url, letra = "") {
  const nuevaCancion = { titulo, artista, url, letra }
  cancionesOriginales.push(nuevaCancion)
  cancionesFiltradas.push(nuevaCancion)
  renderizarCanciones()
  llenarFiltroArtistas()
  console.log(`Canción "${titulo}" agregada exitosamente`)
}
