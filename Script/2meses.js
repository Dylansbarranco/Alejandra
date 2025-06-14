// Variables globales
let musicPlaying = false

// Definir las reglas de la relación organizadas por categorías
const relationshipRules = [
    {
        id: 1,
        category: "comunicacion",
        title: "",
        description: "",
        icon: "💬",
    },
    {
        id: 2,
        category: "respeto",
        title: "",
        description: "",
        icon: "🤝",
    },
    {
        id: 3,
        category: "amor",
        title: "",
        description: "",
        icon: "❤️",
    },
    {
        id: 4,
        category: "tiempo",
        title: "",
        description: "",
        icon: "⏰",
    },
    {
        id: 5,
        category: "crecimiento",
        title: "",
        description: "",
        icon: "🌱",
    },
    {
        id: 6,
        category: "extras",
        title: "",
        description: "",
        icon: "✨",
    },
]

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
