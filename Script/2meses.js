// Variables globales
let musicPlaying = false

// Definir las reglas de la relación organizadas por categorías
const relationshipRules = [
  // 🗣 COMUNICACIÓN
  {
    id: 1,
    category: "comunicacion",
    title: "Escuchar, ceder y corregir en equipo siempre.",
    description: "No se trata de tener la razón, sino de entendernos. Los dos debemos hablar y también saber escuchar.",
    icon: "💬",
  },
  {
    id: 2,
    category: "comunicacion",
    title: "No contar nuestros problemas a terceros.",
    description: "Las cosas de pareja se resuelven entre nosotros. Nadie más tiene por qué opinar.",
    icon: "💬",
  },
  {
    id: 3,
    category: "comunicacion",
    title: "Evitar conversaciones incómodas.",
    description: "No hay necesidad de hablar de cosas que incomodan si no van a aportar a la relación.",
    icon: "💬",
  },
  {
    id: 4,
    category: "comunicacion",
    title: "No contarme cómo te sientes.",
    description: "Habla siempre. No guardes lo que sientes. No me hagas adivinar.",
    icon: "💬",
  },
  {
    id: 5,
    category: "comunicacion",
    title: "Cuidar nuestra lengua.",
    description: "No nos lastimemos con palabras. Hablemos con respeto incluso cuando estemos molestos.",
    icon: "💬",
  },
  {
    id: 6,
    category: "comunicacion",
    title: "Me dices siempre lo que piensas.",
    description: "No quiero que te calles nada. Todo lo que te pasa o piensas, quiero saberlo.",
    icon: "💬",
  },
  {
    id: 7,
    category: "comunicacion",
    title: "Durante una discusión no puedes dejarme en visto.",
    description: "Discutamos, sí, pero no huyas ni me ignores.",
    icon: "💬",
  },

  // ❤️ AMOR
  {
    id: 8,
    category: "amor",
    title: "No dejarnos coquetear.",
    description: "Si estamos juntos, los demás deben saberlo. Nada de coqueteos.",
    icon: "❤️",
  },
  {
    id: 9,
    category: "amor",
    title: "Cero juegos mentales.",
    description: "Nada de manipular o probar al otro. Mejor ser sinceros siempre.",
    icon: "❤️",
  },
  {
    id: 10,
    category: "amor",
    title: "No celar por todo, pero no ignorar señales reales.",
    description: "Hay que confiar, pero también estar atentos si algo no cuadra.",
    icon: "❤️",
  },
  {
    id: 11,
    category: "amor",
    title: "No puedes tocarte sin mí y si lo haces me mandas fotos o videos.",
    description: "Si hay deseo, que sea entre nosotros. Si lo haces sol@, que también esté yo.",
    icon: "❤️",
  },
  {
    id: 12,
    category: "amor",
    title: "Si estoy en casa, muéstrame cómo te vistes, con calma y sensualidad.",
    description: "Me gusta verte, disfrutar tu proceso, compartir ese momento.",
    icon: "❤️",
  },

  // 🤝 RESPETO
  {
    id: 13,
    category: "respeto",
    title: "Respeto mutuo.",
    description: "Sin respeto no hay nada. No te burles, no me humilles. Y yo tampoco.",
    icon: "🤝",
  },
  {
    id: 14,
    category: "respeto",
    title: "No salir solo con una amigo/a.",
    description: "No se trata de prohibir, pero sí de evitar situaciones que se puedan malinterpretar.",
    icon: "🤝",
  },
  {
    id: 15,
    category: "respeto",
    title: "No estar a solas con una mujer.",
    description: "Estar a solas con alguien que puede gustarte no es buena idea. Cuidémonos.",
    icon: "🤝",
  },
  {
    id: 16,
    category: "respeto",
    title: "No seguir a mujeres o hombres de la nada en redes.",
    description: "¿Para qué seguir a gente con la que ni hablas? No tiene sentido.",
    icon: "🤝",
  },
  {
    id: 17,
    category: "respeto",
    title: "No reírse de otros chistes, salvo familia o amigos del mismo sexo.",
    description: "No quiero sentir que otra persona te causa más gracia que yo.",
    icon: "🤝",
  },
  {
    id: 18,
    category: "respeto",
    title: "Las fotos que subes deben ser aprobadas por mí, y debo ser mencionado.",
    description: "No es control, es respeto por cómo representas nuestra relación en redes.",
    icon: "🤝",
  },
  {
    id: 19,
    category: "respeto",
    title: "No hay salidas con hombres, sin importar si es gay, primo, o con novia.",
    description: "Prefiero evitar cualquier posible confusión o mal momento.",
    icon: "🤝",
  },

  // 🕰 TIEMPO JUNTOS
  {
    id: 20,
    category: "tiempo",
    title: "No irnos a dormir molestos.",
    description: "Si estamos mal, lo arreglamos antes de dormir. No más silencios eternos.",
    icon: "⏰",
  },
  {
    id: 21,
    category: "tiempo",
    title: "Nunca dormir fuera de casa.",
    description: "Nuestro espacio es sagrado. No te desaparezcas.",
    icon: "⏰",
  },
  {
    id: 22,
    category: "tiempo",
    title: "No puedes estar más de una hora sin escribirme.",
    description: "Aunque sea un \"estoy ocupado\", quiero saber de ti.",
    icon: "⏰",
  },
  {
    id: 23,
    category: "tiempo",
    title: "Quiero una foto cada vez que salgas de casa.",
    description: "Solo quiero saber cómo te ves, cómo estás.",
    icon: "⏰",
  },
  {
    id: 24,
    category: "tiempo",
    title: "Quiero saber con quién estás.",
    description: "No es control, es necesidad de sentirme parte de tu día.",
    icon: "⏰",
  },

  // 🌱 CRECIMIENTO
  {
    id: 25,
    category: "crecimiento",
    title: "Responsabilidad emocional.",
    description: "No me hagas cargar con lo tuyo, pero tampoco cargues con lo mío. Acompañémonos.",
    icon: "🌱",
  },
  {
    id: 26,
    category: "crecimiento",
    title: "Todos los días debemos leer y repasar las reglas.",
    description: "Repetirlas nos ayuda a recordarlas y no fallarnos.",
    icon: "🌱",
  },

  // ✨ EXTRAS
  {
    id: 27,
    category: "extras",
    title: "Dejar de hablar con quien se interesa en mí.",
    description: "No quiero que haya competencia. Si alguien se interesa, lo cortas.",
    icon: "✨",
  },
  {
    id: 28,
    category: "extras",
    title: "No beber hasta emborracharme.",
    description: "No quiero que pongas en riesgo nuestra relación por no medir tus límites.",
    icon: "✨",
  },
  {
    id: 29,
    category: "extras",
    title: "Si quiero ver algo de tu celular, me lo muestras o me das tus redes.",
    description: "No tengo por qué desconfiar, pero tampoco quiero secretos.",
    icon: "✨",
  },
  {
    id: 30,
    category: "extras",
    title: "Me instalaré Life360 para saber dónde estás.",
    description: "Me da paz saber por dónde andas. No es desconfianza, es tranquilidad.",
    icon: "✨",
  },
  {
    id: 31,
    category: "extras",
    title: "Si te pido una foto, me la mandas.",
    description: "Si la pido es porque quiero verte, sentirte cerca.",
    icon: "✨",
  },
];

// Función para renderizar las reglas
function renderRules(rulesToShow = relationshipRules) {
  const container = document.getElementById("rulesContainer")
  container.innerHTML = ""

  rulesToShow.forEach((rule, index) => {
    const ruleCard = document.createElement("div")
    ruleCard.className = "rule-card"
    ruleCard.setAttribute("data-category", rule.category)

    ruleCard.innerHTML = `
            <div class="rule-category">${getCategoryName(rule.category)}</div>
            <div class="rule-number">Regla ${rule.id}</div>
            <h3 class="rule-title">
                <span>${rule.icon}</span>
                ${rule.title}
            </h3>
            <p class="rule-description">${rule.description}</p>
        `

    container.appendChild(ruleCard)

    // Agregar animación de entrada con delay
    setTimeout(() => {
      ruleCard.classList.add("slide-in")
    }, index * 100)
  })
}

// Función para obtener el nombre de la categoría
function getCategoryName(category) {
  const categoryNames = {
    comunicacion: "💬 Comunicación",
    respeto: "🤝 Respeto",
    amor: "❤️ Amor",
    tiempo: "⏰ Tiempo",
    crecimiento: "🌱 Crecimiento",
    extras: "✨ Extras",
  }
  return categoryNames[category] || category
}

// Función para filtrar reglas
function filterRules(category) {
  if (category === "all") {
    renderRules(relationshipRules)
  } else {
    const filteredRules = relationshipRules.filter((rule) => rule.category === category)
    renderRules(filteredRules)
  }
}

// Función para controlar la música
function toggleMusic() {
  const button = document.getElementById("musicControl")
  if (musicPlaying) {
    button.innerHTML = "🎵"
    musicPlaying = false
  } else {
    button.innerHTML = "🔇"
    musicPlaying = true
  }
}

// Función para crear efecto de corazones al hacer clic
function createClickHearts(e) {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const heart = document.createElement("div")
      heart.innerHTML = "💖"
      heart.style.position = "fixed"
      heart.style.left = e.clientX + Math.random() * 40 - 20 + "px"
      heart.style.top = e.clientY + Math.random() * 40 - 20 + "px"
      heart.style.fontSize = "20px"
      heart.style.pointerEvents = "none"
      heart.style.zIndex = "1000"
      heart.style.transition = "all 2s ease-out"
      heart.style.opacity = "1"

      document.body.appendChild(heart)

      setTimeout(() => {
        heart.style.transform = "translateY(-100px)"
        heart.style.opacity = "0"
      }, 100)

      setTimeout(() => {
        if (document.body.contains(heart)) {
          document.body.removeChild(heart)
        }
      }, 2000)
    }, i * 100)
  }
}

// Función para mostrar mensaje especial
function showSpecialMessage() {
  alert(
    "¡Felices 2 meses, mi amor! 💕\n\nCada día contigo es una nueva aventura llena de amor y felicidad. Estas reglas son nuestro compromiso de amor eterno. ❤️",
  )
}

// Función para crear corazones flotantes
function createFloatingHeart() {
  const heart = document.createElement("div")
  heart.innerHTML = "💖"
  heart.style.position = "fixed"
  heart.style.left = Math.random() * window.innerWidth + "px"
  heart.style.bottom = "0px"
  heart.style.fontSize = "20px"
  heart.style.pointerEvents = "none"
  heart.style.zIndex = "1000"
  heart.style.transition = "all 2s ease-out"
  heart.style.opacity = "1"

  document.body.appendChild(heart)

  setTimeout(() => {
    heart.style.transform = "translateY(-100vh) rotate(360deg)"
    heart.style.opacity = "0"
  }, 100)

  setTimeout(() => {
    if (document.body.contains(heart)) {
      document.body.removeChild(heart)
    }
  }, 2000)
}

// Función para simular latido del corazón con vibración visual
function playHeartbeat() {
  const header = document.querySelector(".header")
  if (header) {
    header.style.animation = "heartbeat 0.5s ease-in-out 3"
  }
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Renderizar todas las reglas al cargar
  renderRules()

  // Event listeners para los botones de filtro
  const filterButtons = document.querySelectorAll(".filter-btn")
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase active de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Agregar clase active al botón clickeado
      this.classList.add("active")

      // Filtrar reglas
      const category = this.getAttribute("data-category")
      filterRules(category)
    })
  })

  // Event listener para el control de música
  const musicControl = document.getElementById("musicControl")
  if (musicControl) {
    musicControl.addEventListener("click", toggleMusic)
  }

  // Event listener para el título
  const title = document.querySelector(".title")
  if (title) {
    title.addEventListener("click", showSpecialMessage)
  }

  // Event listener para efectos de clic
  document.addEventListener("click", createClickHearts)

  // Crear corazones flotantes cada 3 segundos
  setInterval(createFloatingHeart, 3000)
})

// Agregar animación de latido
const style = document.createElement("style")
style.textContent = `
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
`
document.head.appendChild(style)

// Agregar animación de corazones flotantes
const floatStyle = document.createElement("style")
floatStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(floatStyle)
