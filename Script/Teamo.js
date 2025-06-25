// Datos de las frases románticas Marvel (bilingües)
const marvelQuotes = [
  {
    id: 1,
    character: "Tony Stark",
    quote: {
      en: "I love you 3000.",
      es: "Te amo 3000.",
    },
    source: {
      en: "Avengers: Endgame (2019)",
      es: "Vengadores: Endgame (2019)",
    },
    timestamp: "2:58:30",
    theme: "iron-man",
    colors: ["#DC2626", "#FCD34D", "#1F2937"],
    filter: "sepia(0.8) saturate(1.5) hue-rotate(10deg) contrast(1.2)",
  },
  {
    id: 2,
    character: "Peter Parker",
    quote: {
      en: "With great power comes great responsibility... and with great love comes great happiness.",
      es: "Con un gran poder viene una gran responsabilidad... y con un gran amor viene una gran felicidad.",
    },
    source: {
      en: "Spider-Man (2002)",
      es: "El Hombre Araña (2002)",
    },
    timestamp: "1:45:20",
    theme: "spider-man",
    colors: ["#DC2626", "#1E40AF", "#1F2937"],
    filter: "saturate(1.3) hue-rotate(350deg) contrast(1.1)",
  },
  {
    id: 3,
    character: "Steve Rogers",
    quote: {
      en: "I can do this all day... especially if it means protecting you.",
      es: "Puedo hacer esto todo el día... especialmente si significa protegerte.",
    },
    source: {
      en: "Captain America: The First Avenger (2011)",
      es: "Capitán América: El Primer Vengador (2011)",
    },
    timestamp: "1:20:15",
    theme: "captain-america",
    colors: ["#1E40AF", "#DC2626", "#F8FAFC"],
    filter: "saturate(1.2) hue-rotate(220deg) contrast(1.1)",
  },
  {
    id: 4,
    character: "Thor",
    quote: {
      en: "You are worthy of all the love in the Nine Realms.",
      es: "Eres digna de todo el amor en los Nueve Reinos.",
    },
    source: {
      en: "Thor: Ragnarok (2017)",
      es: "Thor: Ragnarok (2017)",
    },
    timestamp: "0:45:30",
    theme: "thor",
    colors: ["#FCD34D", "#1E40AF", "#374151"],
    filter: "saturate(1.4) hue-rotate(45deg) brightness(1.1)",
  },
  {
    id: 5,
    character: "Natasha Romanoff",
    quote: {
      en: "Love is for children... but with you, I want to be a child again.",
      es: "El amor es para niños... pero contigo, quiero ser niña otra vez.",
    },
    source: {
      en: "Avengers (2012)",
      es: "Los Vengadores (2012)",
    },
    timestamp: "1:30:45",
    theme: "black-widow",
    colors: ["#1F2937", "#DC2626", "#F8FAFC"],
    filter: "grayscale(0.3) contrast(1.3) brightness(0.9)",
  },
  {
    id: 6,
    character: "Bruce Banner",
    quote: {
      en: "You wouldn't like me when I'm angry... but you love me when I'm calm.",
      es: "No te gustaría cuando estoy enojado... pero me amas cuando estoy tranquilo.",
    },
    source: {
      en: "The Incredible Hulk (2008)",
      es: "El Increíble Hulk (2008)",
    },
    timestamp: "1:15:20",
    theme: "hulk",
    colors: ["#16A34A", "#7C3AED", "#1F2937"],
    filter: "saturate(1.5) hue-rotate(100deg) contrast(1.2)",
  },
  {
    id: 7,
    character: "Doctor Strange",
    quote: {
      en: "I've seen 14,000,605 possible futures... in all of them, I love you.",
      es: "He visto 14,000,605 futuros posibles... en todos ellos, te amo.",
    },
    source: {
      en: "Avengers: Infinity War (2018)",
      es: "Vengadores: Guerra del Infinito (2018)",
    },
    timestamp: "1:45:30",
    theme: "doctor-strange",
    colors: ["#7C3AED", "#F59E0B", "#1F2937"],
    filter: "saturate(1.3) hue-rotate(280deg) contrast(1.2) brightness(1.1)",
  },
  {
    id: 8,
    character: "T'Challa",
    quote: {
      en: "In Wakanda, we say love is the most powerful vibranium of all.",
      es: "En Wakanda, decimos que el amor es el vibranium más poderoso de todos.",
    },
    source: {
      en: "Black Panther (2018)",
      es: "Pantera Negra (2018)",
    },
    timestamp: "1:20:45",
    theme: "black-panther",
    colors: ["#7C3AED", "#FCD34D", "#1F2937"],
    filter: "saturate(1.2) hue-rotate(260deg) contrast(1.3)",
  },
  {
    id: 9,
    character: "Wanda Maximoff",
    quote: {
      en: "What is grief, if not love persevering?",
      es: "¿Qué es el dolor, sino amor que persevera?",
    },
    source: {
      en: "WandaVision (2021)",
      es: "WandaVision (2021)",
    },
    timestamp: "Episode 8",
    theme: "scarlet-witch",
    colors: ["#DC2626", "#1F2937", "#F8FAFC"],
    filter: "saturate(1.4) hue-rotate(340deg) contrast(1.2)",
  },
  {
    id: 10,
    character: "Vision",
    quote: {
      en: "A thing isn't beautiful because it lasts... but our love will.",
      es: "Algo no es hermoso porque dure... pero nuestro amor sí durará.",
    },
    source: {
      en: "Avengers: Age of Ultron (2015)",
      es: "Vengadores: Era de Ultrón (2015)",
    },
    timestamp: "2:10:30",
    theme: "vision",
    colors: ["#FCD34D", "#DC2626", "#16A34A"],
    filter: "saturate(1.3) hue-rotate(60deg) contrast(1.1)",
  },
  {
    id: 11,
    character: "Scott Lang",
    quote: {
      en: "I may be small, but my love for you is giant-sized.",
      es: "Puedo ser pequeño, pero mi amor por ti es de tamaño gigante.",
    },
    source: {
      en: "Ant-Man (2015)",
      es: "El Hombre Hormiga (2015)",
    },
    timestamp: "1:35:20",
    theme: "ant-man",
    colors: ["#DC2626", "#1F2937", "#F8FAFC"],
    filter: "saturate(1.2) contrast(1.1)",
  },
  {
    id: 12,
    character: "Carol Danvers",
    quote: {
      en: "Higher, further, faster... that's how my love grows for you.",
      es: "Más alto, más lejos, más rápido... así crece mi amor por ti.",
    },
    source: {
      en: "Captain Marvel (2019)",
      es: "Capitana Marvel (2019)",
    },
    timestamp: "1:25:45",
    theme: "captain-marvel",
    colors: ["#FCD34D", "#1E40AF", "#DC2626"],
    filter: "saturate(1.3) hue-rotate(45deg) brightness(1.1)",
  },
  {
    id: 13,
    character: "Peter Quill",
    quote: {
      en: "I'm Star-Lord, and you're my universe.",
      es: "Soy Star-Lord, y tú eres mi universo.",
    },
    source: {
      en: "Guardians of the Galaxy (2014)",
      es: "Guardianes de la Galaxia (2014)",
    },
    timestamp: "1:40:15",
    theme: "star-lord",
    colors: ["#7C3AED", "#F59E0B", "#1F2937"],
    filter: "saturate(1.2) hue-rotate(280deg) contrast(1.1)",
  },
  {
    id: 14,
    character: "Gamora",
    quote: {
      en: "I am not a dancer... but I'd dance through eternity with you.",
      es: "No soy bailarina... pero bailaría por la eternidad contigo.",
    },
    source: {
      en: "Guardians of the Galaxy Vol. 2 (2017)",
      es: "Guardianes de la Galaxia Vol. 2 (2017)",
    },
    timestamp: "1:55:30",
    theme: "gamora",
    colors: ["#16A34A", "#1F2937", "#F8FAFC"],
    filter: "saturate(1.2) hue-rotate(120deg) contrast(1.1)",
  },
  {
    id: 15,
    character: "Rocket",
    quote: {
      en: "I may be a raccoon, but you make me feel human.",
      es: "Puedo ser un mapache, pero tú me haces sentir humano.",
    },
    source: {
      en: "Guardians of the Galaxy (2014)",
      es: "Guardianes de la Galaxia (2014)",
    },
    timestamp: "0:58:20",
    theme: "rocket",
    colors: ["#F59E0B", "#1F2937", "#DC2626"],
    filter: "saturate(1.3) hue-rotate(30deg) contrast(1.2)",
  },
  {
    id: 16,
    character: "Groot",
    quote: {
      en: "I am Groot... and I am yours.",
      es: "Soy Groot... y soy tuyo.",
    },
    source: {
      en: "Guardians of the Galaxy (2014)",
      es: "Guardianes de la Galaxia (2014)",
    },
    timestamp: "1:20:10",
    theme: "groot",
    colors: ["#16A34A", "#A16207", "#1F2937"],
    filter: "saturate(1.4) hue-rotate(90deg) contrast(1.1)",
  },
  {
    id: 17,
    character: "Loki",
    quote: {
      en: "I may be the God of Mischief, but you're the goddess of my heart.",
      es: "Puedo ser el Dios de las Travesuras, pero tú eres la diosa de mi corazón.",
    },
    source: {
      en: "Thor (2011)",
      es: "Thor (2011)",
    },
    timestamp: "1:30:45",
    theme: "loki",
    colors: ["#16A34A", "#FCD34D", "#1F2937"],
    filter: "saturate(1.3) hue-rotate(120deg) contrast(1.2)",
  },
  {
    id: 18,
    character: "Clint Barton",
    quote: {
      en: "I never miss my target... especially when it's your heart.",
      es: "Nunca fallo mi objetivo... especialmente cuando es tu corazón.",
    },
    source: {
      en: "The Avengers (2012)",
      es: "Los Vengadores (2012)",
    },
    timestamp: "1:15:30",
    theme: "hawkeye",
    colors: ["#7C3AED", "#1F2937", "#F8FAFC"],
    filter: "saturate(1.2) hue-rotate(260deg) contrast(1.1)",
  },
  {
    id: 19,
    character: "Sam Wilson",
    quote: {
      en: "On your left... and in your heart, always.",
      es: "A tu izquierda... y en tu corazón, siempre.",
    },
    source: {
      en: "Captain America: The Winter Soldier (2014)",
      es: "Capitán América: El Soldado del Invierno (2014)",
    },
    timestamp: "0:35:20",
    theme: "falcon",
    colors: ["#DC2626", "#F8FAFC", "#1F2937"],
    filter: "saturate(1.2) contrast(1.1)",
  },
  {
    id: 20,
    character: "Bucky Barnes",
    quote: {
      en: "I'm with you 'til the end of the line... and beyond.",
      es: "Estoy contigo hasta el final de la línea... y más allá.",
    },
    source: {
      en: "Captain America: The First Avenger (2011)",
      es: "Capitán América: El Primer Vengador (2011)",
    },
    timestamp: "1:45:15",
    theme: "winter-soldier",
    colors: ["#1F2937", "#6B7280", "#F8FAFC"],
    filter: "grayscale(0.2) contrast(1.2) brightness(0.9)",
  },
  {
    id: 21,
    character: "Wade Wilson",
    quote: {
      en: "Maximum effort... that's what I put into loving you.",
      es: "Máximo esfuerzo... eso es lo que pongo en amarte.",
    },
    source: {
      en: "Deadpool (2016)",
      es: "Deadpool (2016)",
    },
    timestamp: "1:25:40",
    theme: "deadpool",
    colors: ["#DC2626", "#1F2937", "#F8FAFC"],
    filter: "saturate(1.5) contrast(1.3) brightness(1.1)",
  },
  {
    id: 22,
    character: "Logan",
    quote: {
      en: "I'm the best at what I do... and what I do is love you.",
      es: "Soy el mejor en lo que hago... y lo que hago es amarte.",
    },
    source: {
      en: "X-Men Origins: Wolverine (2009)",
      es: "X-Men Orígenes: Wolverine (2009)",
    },
    timestamp: "1:35:25",
    theme: "wolverine",
    colors: ["#FCD34D", "#1F2937", "#1E40AF"],
    filter: "sepia(0.4) saturate(1.2) contrast(1.2)",
  },
  {
    id: 23,
    character: "Jean Grey",
    quote: {
      en: "I am fire and life incarnate... and you are my eternal flame.",
      es: "Soy fuego y vida encarnada... y tú eres mi llama eterna.",
    },
    source: {
      en: "X-Men: The Last Stand (2006)",
      es: "X-Men: La Batalla Final (2006)",
    },
    timestamp: "1:50:30",
    theme: "phoenix",
    colors: ["#F59E0B", "#DC2626", "#1F2937"],
    filter: "saturate(1.6) hue-rotate(20deg) contrast(1.3) brightness(1.2)",
  },
  {
    id: 24,
    character: "Charles Xavier",
    quote: {
      en: "The greatest power isn't telepathy... it's the power of love.",
      es: "El mayor poder no es la telepatía... es el poder del amor.",
    },
    source: {
      en: "X-Men (2000)",
      es: "X-Men (2000)",
    },
    timestamp: "1:40:15",
    theme: "professor-x",
    colors: ["#1E40AF", "#F8FAFC", "#1F2937"],
    filter: "saturate(1.1) hue-rotate(220deg) contrast(1.1)",
  },
  {
    id: 25,
    character: "Erik Lehnsherr",
    quote: {
      en: "I can control metal, but you control my heart.",
      es: "Puedo controlar el metal, pero tú controlas mi corazón.",
    },
    source: {
      en: "X-Men: First Class (2011)",
      es: "X-Men: Primera Generación (2011)",
    },
    timestamp: "1:55:20",
    theme: "magneto",
    colors: ["#7C3AED", "#DC2626", "#1F2937"],
    filter: "saturate(1.3) hue-rotate(280deg) contrast(1.2)",
  },
  {
    id: 26,
    character: "Matt Murdock",
    quote: {
      en: "I may be blind, but I see clearly that you're my everything.",
      es: "Puedo estar ciego, pero veo claramente que eres mi todo.",
    },
    source: {
      en: "Daredevil (2003)",
      es: "Daredevil (2003)",
    },
    timestamp: "1:30:45",
    theme: "daredevil",
    colors: ["#DC2626", "#1F2937", "#F8FAFC"],
    filter: "saturate(1.4) contrast(1.3)",
  },
  {
    id: 27,
    character: "Frank Castle",
    quote: {
      en: "I've lost everything... except my love for you.",
      es: "He perdido todo... excepto mi amor por ti.",
    },
    source: {
      en: "The Punisher (2004)",
      es: "El Castigador (2004)",
    },
    timestamp: "1:45:30",
    theme: "punisher",
    colors: ["#1F2937", "#F8FAFC", "#DC2626"],
    filter: "grayscale(0.4) contrast(1.3) brightness(0.8)",
  },
  {
    id: 28,
    character: "Miles Morales",
    quote: {
      en: "Anyone can wear the mask... but only you can wear my heart.",
      es: "Cualquiera puede usar la máscara... pero solo tú puedes llevar mi corazón.",
    },
    source: {
      en: "Spider-Man: Into the Spider-Verse (2018)",
      es: "Spider-Man: Un Nuevo Universo (2018)",
    },
    timestamp: "1:20:15",
    theme: "miles-morales",
    colors: ["#1F2937", "#DC2626", "#FCD34D"],
    filter: "saturate(1.3) hue-rotate(350deg) contrast(1.2)",
  },
  {
    id: 29,
    character: "Gwen Stacy",
    quote: {
      en: "In every universe, in every timeline... I choose you.",
      es: "En cada universo, en cada línea temporal... te elijo a ti.",
    },
    source: {
      en: "Spider-Man: Across the Spider-Verse (2023)",
      es: "Spider-Man: A Través del Spider-Verso (2023)",
    },
    timestamp: "1:35:40",
    theme: "spider-gwen",
    colors: ["#F8FAFC", "#EC4899", "#1E40AF"],
    filter: "saturate(1.2) hue-rotate(300deg) brightness(1.1)",
  },
  {
    id: 30,
    character: "Miguel O'Hara",
    quote: {
      en: "The multiverse is vast, but my love for you is infinite.",
      es: "El multiverso es vasto, pero mi amor por ti es infinito.",
    },
    source: {
      en: "Spider-Man: Across the Spider-Verse (2023)",
      es: "Spider-Man: A Través del Spider-Verso (2023)",
    },
    timestamp: "2:05:20",
    theme: "spider-man-2099",
    colors: ["#1E40AF", "#DC2626", "#1F2937"],
    filter: "saturate(1.3) hue-rotate(220deg) contrast(1.2)",
  },
  // ¡Aquí está tu frase especial con Nesquik! 💜
  {
    id: 31,
    character: "Nesquik",
    quote: {
      en: "In one minute, I noticed you. In five, I already cared. In one hour, I couldn't stop thinking about you. In a day, you became my safe place. In a week, my everything. In a month, my love. In a year, my life… and in a lifetime, simply you.",
      es: "“En un minuto te noté, en cinco ya te quería, en una hora no podía dejar de pensarte, en un día eras mi lugar, en una semana mi todo, en un mes mi amor, en un año mi vida… y en una vida entera, simplemente tú.”",
    },
    source: {
      en: "From my heart to yours (2024)",
      es: "De mi corazón al tuyo (2025)",
    },
    timestamp: "Siempre",
    theme: "nesquik-love",
    colors: ["#8B4513", "#FFD700", "#FF69B4"],
    filter: "saturate(1.4) hue-rotate(30deg) brightness(1.2) contrast(1.1)",
  },
]

// Textos de la interfaz
const interfaceTexts = {
  es: {
    title: "Para ti, en todos los universos 💜",
    playButton: "Escuchar frase",
    playing: "Reproduciendo...",
    footerText: '"En cada universo, en cada realidad, en cada línea temporal... mi amor por ti es constante." 💫',
    languageButton: "English",
  },
  en: {
    title: "For you, in all universes 💜",
    playButton: "Listen to quote",
    playing: "Playing...",
    footerText: '"In every universe, in every reality, in every timeline... my love for you is constant." 💫',
    languageButton: "Español",
  },
}

// Variables globales
let selectedQuote = null
let isPlaying = false
let currentSpeech = null
let currentLanguage = "es" // Idioma por defecto
const anime = window.anime // Declare the anime variable

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initializeParticles()
  renderQuoteCards()
  setupEventListeners()
  animateEntrance()
  updateInterface()
})

// Crear partículas de fondo
function initializeParticles() {
  const container = document.getElementById("particles-container")
  const particleCount = 100

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.animationDelay = Math.random() * 3 + "s"
    particle.style.animationDuration = 2 + Math.random() * 3 + "s"
    container.appendChild(particle)
  }
}

// Renderizar tarjetas de frases
function renderQuoteCards() {
  const grid = document.getElementById("cards-grid")
  grid.innerHTML = "" // Limpiar grid

  marvelQuotes.forEach((quote, index) => {
    const card = document.createElement("div")
    card.className = "quote-card"
    card.dataset.quoteId = quote.id

    card.innerHTML = `
            <div class="card-header">
                <i class="fas fa-heart card-icon"></i>
                <span class="card-character">${quote.character}</span>
            </div>
            <p class="card-quote">"${quote.quote[currentLanguage]}"</p>
            <p class="card-info">${quote.source[currentLanguage]}</p>
            <p class="card-timestamp">${quote.timestamp}</p>
            <div class="card-colors">
                ${quote.colors.map((color) => `<div class="color-dot" style="background-color: ${color}"></div>`).join("")}
            </div>
        `

    card.addEventListener("click", () => handleQuoteClick(quote))
    grid.appendChild(card)

    // Animación de entrada escalonada
    setTimeout(() => {
      card.classList.add("slide-up")
    }, index * 50)
  })
}

// Manejar clic en tarjeta
function handleQuoteClick(quote) {
  // Remover selección anterior
  document.querySelectorAll(".quote-card").forEach((card) => {
    card.classList.remove("selected")
  })

  // Seleccionar nueva tarjeta
  const clickedCard = document.querySelector(`[data-quote-id="${quote.id}"]`)
  clickedCard.classList.add("selected")

  selectedQuote = quote
  updateQuotePanel(quote)
  changeTheme(quote)
  createSpecialEffects(quote)
  playClickSound()
}

// Actualizar panel de información
function updateQuotePanel(quote) {
  const panel = document.getElementById("quote-panel")
  const character = document.getElementById("selected-character")
  const quoteText = document.getElementById("selected-quote")
  const source = document.getElementById("selected-source")
  const timestamp = document.getElementById("selected-timestamp")

  character.textContent = quote.character
  quoteText.textContent = `"${quote.quote[currentLanguage]}"`
  source.textContent = quote.source[currentLanguage]
  timestamp.textContent = quote.timestamp

  panel.classList.remove("hidden")

  // Animación de aparición
  setTimeout(() => {
    panel.classList.add("visible")
  }, 100)

  // Actualizar imagen principal
  const mainImage = document.getElementById("main-image")
  mainImage.style.filter = quote.filter

  // Activar anillo de la imagen
  const imageRing = document.querySelector(".image-ring")
  imageRing.classList.add("active")
}

// Cambiar tema visual
function changeTheme(quote) {
  const body = document.body

  // Remover temas anteriores
  body.className = body.className.replace(/theme-\w+/g, "")

  // Aplicar nuevo tema
  body.classList.add(`theme-${quote.theme}`)

  // Animación suave del cambio de fondo
  anime({
    targets: body,
    duration: 1000,
    easing: "easeInOutQuad",
  })
}

// Crear efectos especiales
function createSpecialEffects(quote) {
  const effectsContainer = document.getElementById("special-effects")
  effectsContainer.innerHTML = "" // Limpiar efectos anteriores

  switch (quote.theme) {
    case "doctor-strange":
      createMagicCircles()
      break
    case "iron-man":
      createEnergyPulses()
      break
    case "thor":
      createLightningEffect()
      break
    case "hulk":
      createShockwaves()
      break
    case "nesquik-love":
      createChocolateHearts()
      break
    default:
      createGenericEffect()
  }
}

// Efectos específicos
function createMagicCircles() {
  const container = document.getElementById("special-effects")

  for (let i = 0; i < 3; i++) {
    const circle = document.createElement("div")
    circle.className = "magic-circle"
    circle.style.width = 100 + i * 50 + "px"
    circle.style.height = 100 + i * 50 + "px"
    circle.style.top = "50%"
    circle.style.left = "50%"
    circle.style.transform = "translate(-50%, -50%)"
    circle.style.animationDelay = i * 0.5 + "s"
    container.appendChild(circle)
  }
}

function createEnergyPulses() {
  const container = document.getElementById("special-effects")

  for (let i = 0; i < 5; i++) {
    const pulse = document.createElement("div")
    pulse.className = "energy-pulse"
    pulse.style.width = "100px"
    pulse.style.height = "100px"
    pulse.style.top = Math.random() * 100 + "%"
    pulse.style.left = Math.random() * 100 + "%"
    pulse.style.animationDelay = i * 0.3 + "s"
    container.appendChild(pulse)
  }
}

function createLightningEffect() {
  // Efecto de relámpago simulado con flashes
  const body = document.body
  let flashCount = 0

  const flash = setInterval(() => {
    body.style.filter = flashCount % 2 === 0 ? "brightness(1.5)" : "brightness(1)"
    flashCount++

    if (flashCount > 6) {
      clearInterval(flash)
      body.style.filter = "brightness(1)"
    }
  }, 100)
}

function createShockwaves() {
  const container = document.getElementById("special-effects")

  for (let i = 0; i < 3; i++) {
    const wave = document.createElement("div")
    wave.style.position = "absolute"
    wave.style.top = "50%"
    wave.style.left = "50%"
    wave.style.width = "0"
    wave.style.height = "0"
    wave.style.border = "2px solid rgba(34, 139, 34, 0.5)"
    wave.style.borderRadius = "50%"
    wave.style.transform = "translate(-50%, -50%)"
    container.appendChild(wave)

    anime({
      targets: wave,
      width: "300px",
      height: "300px",
      opacity: [0.5, 0],
      duration: 1500,
      delay: i * 300,
      easing: "easeOutQuad",
      complete: () => wave.remove(),
    })
  }
}

// ¡Efecto especial para la frase del Nesquik! 🍫💜
function createChocolateHearts() {
  const container = document.getElementById("special-effects")

  // Crear corazones de chocolate flotantes
  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("div")
    heart.innerHTML = "🍫💜"
    heart.style.position = "absolute"
    heart.style.fontSize = "24px"
    heart.style.left = Math.random() * 100 + "%"
    heart.style.top = "100%"
    heart.style.pointerEvents = "none"
    heart.style.zIndex = "100"
    container.appendChild(heart)

    anime({
      targets: heart,
      translateY: -window.innerHeight - 100,
      translateX: (Math.random() - 0.5) * 200,
      rotate: 360,
      opacity: [1, 0],
      duration: 4000,
      delay: i * 300,
      easing: "easeOutQuad",
      complete: () => heart.remove(),
    })
  }

  // Crear efecto de "lluvia de Nesquik"
  for (let i = 0; i < 15; i++) {
    const nesquik = document.createElement("div")
    nesquik.style.position = "absolute"
    nesquik.style.width = "6px"
    nesquik.style.height = "6px"
    nesquik.style.background = "#8B4513"
    nesquik.style.borderRadius = "50%"
    nesquik.style.left = Math.random() * 100 + "%"
    nesquik.style.top = "-10px"
    nesquik.style.boxShadow = "0 0 10px #FFD700"
    container.appendChild(nesquik)

    anime({
      targets: nesquik,
      translateY: window.innerHeight + 100,
      translateX: (Math.random() - 0.5) * 100,
      duration: 3000,
      delay: i * 100,
      easing: "easeInQuad",
      complete: () => nesquik.remove(),
    })
  }
}

function createGenericEffect() {
  const container = document.getElementById("special-effects")

  // Crear partículas flotantes
  for (let i = 0; i < 10; i++) {
    const particle = document.createElement("div")
    particle.style.position = "absolute"
    particle.style.width = "4px"
    particle.style.height = "4px"
    particle.style.background = "#ff6b35"
    particle.style.borderRadius = "50%"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = "100%"
    container.appendChild(particle)

    anime({
      targets: particle,
      translateY: -window.innerHeight - 100,
      translateX: (Math.random() - 0.5) * 200,
      opacity: [1, 0],
      duration: 3000,
      delay: i * 200,
      easing: "easeOutQuad",
      complete: () => particle.remove(),
    })
  }
}

// Reproducir audio
function speakQuote(quote, character) {
  if ("speechSynthesis" in window) {
    // Detener cualquier reproducción anterior
    if (currentSpeech) {
      speechSynthesis.cancel()
    }

    isPlaying = true
    updatePlayButton(true)

    const utterance = new SpeechSynthesisUtterance(quote)
    utterance.rate = 0.8
    utterance.pitch = 1
    utterance.volume = 0.8

    // Configurar idioma
    utterance.lang = currentLanguage === "es" ? "es-ES" : "en-US"

    // Intentar usar voces específicas
    const voices = speechSynthesis.getVoices()
    const preferredVoice = voices.find((voice) => voice.lang.startsWith(currentLanguage === "es" ? "es" : "en"))
    if (preferredVoice) utterance.voice = preferredVoice

    utterance.onend = () => {
      isPlaying = false
      updatePlayButton(false)
      currentSpeech = null
    }

    utterance.onerror = () => {
      isPlaying = false
      updatePlayButton(false)
      currentSpeech = null
    }

    currentSpeech = utterance
    speechSynthesis.speak(utterance)
  }
}

// Actualizar botón de reproducción
function updatePlayButton(playing) {
  const button = document.getElementById("play-audio")
  const text = document.getElementById("play-text")

  if (playing) {
    button.classList.add("playing")
    button.disabled = true
    text.textContent = interfaceTexts[currentLanguage].playing
  } else {
    button.classList.remove("playing")
    button.disabled = false
    text.textContent = interfaceTexts[currentLanguage].playButton
  }
}

// Cambiar idioma
function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es"
  updateInterface()
  renderQuoteCards()

  // Si hay una frase seleccionada, actualizar el panel
  if (selectedQuote) {
    updateQuotePanel(selectedQuote)
  }
}

// Actualizar interfaz según el idioma
function updateInterface() {
  const texts = interfaceTexts[currentLanguage]

  document.getElementById("main-title").textContent = texts.title
  document.getElementById("footer-text").textContent = texts.footerText
  document.getElementById("language-text").textContent = texts.languageButton
  document.getElementById("play-text").textContent = texts.playButton
}

// Reproducir sonido de clic
function playClickSound() {
  const clickSound = document.getElementById("click-sound")
  clickSound.currentTime = 0
  clickSound.play().catch(() => {
    // Ignorar errores de audio si no se puede reproducir
  })
}

// Configurar event listeners
function setupEventListeners() {
  const playButton = document.getElementById("play-audio")
  const languageButton = document.getElementById("language-btn")

  playButton.addEventListener("click", () => {
    if (selectedQuote && !isPlaying) {
      speakQuote(selectedQuote.quote[currentLanguage], selectedQuote.character)
    }
  })

  languageButton.addEventListener("click", toggleLanguage)

  // Cargar voces cuando estén disponibles
  if ("speechSynthesis" in window) {
    speechSynthesis.onvoiceschanged = () => {
      // Las voces están ahora disponibles
    }
  }
}

// Animación de entrada
function animateEntrance() {
  // Animar título
  anime({
    targets: ".main-title",
    opacity: [0, 1],
    translateY: [-50, 0],
    duration: 1500,
    easing: "easeOutQuad",
  })

  // Animar imagen
  anime({
    targets: ".image-wrapper",
    opacity: [0, 1],
    scale: [0.8, 1],
    duration: 1200,
    delay: 500,
    easing: "easeOutBack",
  })

  // Animar botón de idioma
  anime({
    targets: ".language-toggle",
    opacity: [0, 1],
    translateX: [50, 0],
    duration: 1000,
    delay: 800,
    easing: "easeOutQuad",
  })

  // Animar partículas
  anime({
    targets: ".particle",
    opacity: [0, 0.6],
    duration: 2000,
    delay: anime.stagger(50),
    easing: "easeOutQuad",
  })
}

// Efectos adicionales con anime.js
function createFloatingHearts() {
  const container = document.getElementById("special-effects")

  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div")
    heart.innerHTML = "💜"
    heart.style.position = "absolute"
    heart.style.fontSize = "20px"
    heart.style.left = Math.random() * 100 + "%"
    heart.style.top = "100%"
    heart.style.pointerEvents = "none"
    container.appendChild(heart)

    anime({
      targets: heart,
      translateY: -window.innerHeight - 100,
      translateX: (Math.random() - 0.5) * 100,
      rotate: 360,
      opacity: [1, 0],
      duration: 4000,
      delay: i * 500,
      easing: "easeOutQuad",
      complete: () => heart.remove(),
    })
  }
}

// Ejecutar corazones flotantes cada cierto tiempo
setInterval(createFloatingHearts, 12000)
