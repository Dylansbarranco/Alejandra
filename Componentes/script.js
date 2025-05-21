// Actualizar el año en el footer
document.getElementById("year").textContent = new Date().getFullYear()

// Animación de aparición al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  // Observar todos los elementos que queremos animar
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Efecto parallax para el fondo de estrellas
  window.addEventListener("scroll", () => {
    const scrollPosition = window.pageYOffset
    document.querySelector(".stars").style.transform = `translateY(${scrollPosition * 0.4}px)`
  })

  // Cambiar el header al hacer scroll
  const header = document.querySelector("header")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.padding = "5px 0"
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    } else {
      header.style.padding = "0"
      header.style.backgroundColor = "rgba(255, 255, 255, 0.9)"
    }
  })

  // Animación para la galería
  const galleryItems = document.querySelectorAll(".gallery-item")
  galleryItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`
  })

  // Animación para las tarjetas de proyectos
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })

  // Añadir clase para animación de entrada
  document.querySelectorAll(".fade-in").forEach((el) => {
    el.classList.add("hidden")
  })
})

// Estilos CSS adicionales para las animaciones
const style = document.createElement("style")
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .gallery-item, .project-card {
        animation: fadeInUp 0.6s ease forwards;
        opacity: 0;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Ajuste para el header fijo
        behavior: "smooth",
      })
    }
  })
})

