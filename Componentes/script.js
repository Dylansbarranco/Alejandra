// Configuración y utilidades
const CONFIG = {
  SCROLL_THRESHOLD: 100,
  PARALLAX_SPEED: 0.4,
  ANIMATION_DELAY: 0.1,
  HEADER_OFFSET: 70
};

// Optimización del performance con throttle
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Lazy loading para imágenes
function setupLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// Función para cargar imágenes de forma progresiva
function loadImagesProgressively() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  lazyImages.forEach((img, index) => {
    // Añadir un pequeño retraso para mejorar la experiencia de carga
    setTimeout(() => {
      img.style.opacity = '1';
      img.classList.add('loaded');
    }, index * 100);
  });
}

// Función para manejar errores de carga de imágenes
function handleImageErrors() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('error', function() {
      this.style.display = 'none';
      console.warn(`No se pudo cargar la imagen: ${this.src}`);
    });
    
    // Solo aplicar efecto de carga suave a imágenes con loading="lazy"
    if (img.hasAttribute('loading') && img.getAttribute('loading') === 'lazy') {
      img.style.filter = 'blur(5px)';
      img.style.transition = 'filter 0.3s ease';
      
      img.addEventListener('load', function() {
        this.style.filter = 'blur(0)';
      });
    }
  });
}

// Función para mejorar la navegación
function setupSmoothNavigation() {
  // Añadir indicador de página activa
  const sections = document.querySelectorAll('.section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-70px 0px -70px 0px'
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(section => sectionObserver.observe(section));
}

// Función para animaciones de entrada staggered
function setupStaggeredAnimations() {
  const projectCards = document.querySelectorAll(".project-card");
  const galleryItems = document.querySelectorAll(".gallery-item");
  
  projectCards.forEach((card, index) => {
    card.style.animationDelay = `${index * CONFIG.ANIMATION_DELAY}s`;
  });
  
  galleryItems.forEach((item, index) => {
    item.style.animationDelay = `${index * CONFIG.ANIMATION_DELAY}s`;
  });
}

// Función para mejorar el rendimiento de scroll
function optimizeScrollPerformance() {
  // Usar requestAnimationFrame para animaciones
  let ticking = false;
  
  function updateParallax() {
    const scrollPosition = window.pageYOffset;
    const stars = document.querySelector(".stars");
    if (stars) {
      stars.style.transform = `translateY(${scrollPosition * CONFIG.PARALLAX_SPEED}px)`;
    }
    ticking = false;
  }
  
  function updateHeader() {
    const header = document.querySelector("header");
    if (window.scrollY > CONFIG.SCROLL_THRESHOLD) {
      header.style.padding = "5px 0";
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.padding = "15px 0";
      header.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
      header.style.backdropFilter = "blur(5px)";
    }
  }
  
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateParallax();
        updateHeader();
      });
      ticking = true;
    }
  });
}

// Función para añadir efectos de hover mejorados
function setupEnhancedInteractions() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-15px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });
  });
}

// Función para verificar si las animaciones están soportadas
function checkAnimationSupport() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    document.body.classList.add('reduce-motion');
  }
  
  prefersReducedMotion.addEventListener('change', (e) => {
    if (e.matches) {
      document.body.classList.add('reduce-motion');
    } else {
      document.body.classList.remove('reduce-motion');
    }
  });
}

// Actualizar el año en el footer
function updateFooterYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Animación de aparición al hacer scroll mejorada
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar todas las funcionalidades
  updateFooterYear();
  setupLazyLoading();
  loadImagesProgressively();
  handleImageErrors();
  setupSmoothNavigation();
  setupStaggeredAnimations();
  optimizeScrollPerformance();
  setupEnhancedInteractions();
  checkAnimationSupport();
  
  // Nuevas funcionalidades románticas
  createFloatingHearts();
  setupQualityTooltips();
  
  // Observer para animaciones de entrada
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Opcional: dejar de observar el elemento después de animarlo
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '50px'
    }
  );

  // Observar todos los elementos que queremos animar
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("fade-in");
    observer.observe(section);
  });

  // Añadir clase para animación de entrada
  document.querySelectorAll(".fade-in").forEach((el) => {
    el.classList.add("hidden");
  });
});

// Navegación suave mejorada
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Animación más suave
      const headerOffset = CONFIG.HEADER_OFFSET;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Añadir clase activa al enlace
      document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Corazones flotantes románticos
function createFloatingHearts() {
  const heartsContainer = document.querySelector('.floating-hearts');
  if (!heartsContainer) return;

  const heartEmojis = ['💖', '💕', '💗', '💝', '💘', '💞', '💓', '💟'];

  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
    
    // Posición aleatoria
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
    
    heartsContainer.appendChild(heart);
    
    // Eliminar el corazón después de la animación
    setTimeout(() => {
      if (heart.parentNode) {
        heart.parentNode.removeChild(heart);
      }
    }, 12000);
  }

  // Crear corazones periódicamente
  setInterval(createHeart, 3000);
  
  // Crear algunos corazones iniciales
  for (let i = 0; i < 3; i++) {
    setTimeout(createHeart, i * 1000);
  }
}

// Sistema de tooltips para las cualidades
function setupQualityTooltips() {
  const qualities = document.querySelectorAll('.floating-quality');
  const tooltip = document.getElementById('quality-tooltip');
  const tooltipText = tooltip.querySelector('.tooltip-text');
  
  if (!tooltip || !tooltipText) return;

  let currentTimeout;

  qualities.forEach(quality => {
    quality.addEventListener('mouseenter', (e) => {
      const message = e.currentTarget.getAttribute('data-message');
      if (message) {
        // Limpiar cualquier timeout pendiente
        if (currentTimeout) {
          clearTimeout(currentTimeout);
        }

        tooltipText.textContent = message;
        
        // Mostrar temporalmente para calcular dimensiones
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
        tooltip.style.display = 'block';
        
        // Posicionar el tooltip
        const rect = e.currentTarget.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        const isMobile = window.innerWidth <= 768;
        const maxWidth = isMobile ? Math.min(window.innerWidth - 40, 280) : 400;
        const tooltipWidth = Math.min(tooltipRect.width, maxWidth);
        const tooltipHeight = tooltipRect.height;
        
        let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
        let top = rect.top - tooltipHeight - 15; // Espaciado arriba
        
        // Ajustar si se sale de la pantalla horizontalmente
        const margin = isMobile ? 20 : 10;
        if (left < margin) left = margin;
        if (left + tooltipWidth > window.innerWidth - margin) {
          left = window.innerWidth - tooltipWidth - margin;
        }
        
        // Ajustar si se sale de la pantalla verticalmente
        if (top < margin) {
          top = rect.bottom + 15; // Mover abajo del elemento
        }
        
        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
        tooltip.style.display = '';
        tooltip.style.visibility = '';
        
        // Forzar estilos para evitar interferencias
        tooltip.style.backgroundColor = '#ffffff';
        tooltip.style.background = '#ffffff';
        tooltip.style.color = '#333';
        tooltipText.style.color = '#333';
        tooltipText.style.backgroundColor = 'transparent';
        tooltipText.style.background = 'transparent';
        
        // Pequeño delay para evitar parpadeos
        currentTimeout = setTimeout(() => {
          tooltip.classList.add('show');
          // Forzar estilos una vez más después de mostrar
          tooltip.style.backgroundColor = '#ffffff';
          tooltip.style.background = '#ffffff';
          tooltip.style.color = '#333';
          tooltipText.style.color = '#333';
        }, 100);
      }
    });

    quality.addEventListener('mouseleave', () => {
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      tooltip.classList.remove('show');
    });

    // Efecto especial al hacer click
    quality.addEventListener('click', (e) => {
      // Crear efecto de corazones al hacer click
      createClickHearts(e.currentTarget);
      
      // Vibración suave (si el dispositivo lo soporta)
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    });
  });

  // Ocultar tooltip si se hace click en cualquier parte
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.floating-quality')) {
      tooltip.classList.remove('show');
    }
  });
}

// Crear corazones al hacer click en las cualidades
function createClickHearts(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.innerHTML = '💕';
      heart.style.position = 'fixed';
      heart.style.left = centerX + 'px';
      heart.style.top = centerY + 'px';
      heart.style.fontSize = '1.5rem';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '9999';
      heart.style.color = '#ff6b6b';
      heart.style.animation = `clickHeartFloat 2s ease-out forwards`;
      
      // Dirección aleatoria
      const angle = (Math.PI * 2 * i) / 5;
      heart.style.setProperty('--dx', Math.cos(angle) * 100 + 'px');
      heart.style.setProperty('--dy', Math.sin(angle) * 100 + 'px');
      
      document.body.appendChild(heart);
      
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 2000);
    }, i * 100);
  }
}

// Estilos CSS adicionales para las animaciones mejoradas
const style = document.createElement("style");
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                    transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .gallery-item, .project-card {
        animation: fadeInUp 0.8s ease forwards;
        opacity: 0;
        will-change: transform, opacity;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Mejoras visuales */
    nav a.active {
        color: var(--primary-color);
        font-weight: 700;
    }
    
    nav a.active::after {
        width: 100%;
    }
    
    /* Respeto por preferencias de movimiento reducido */
    .reduce-motion .fade-in,
    .reduce-motion .project-card,
    .reduce-motion .gallery-item {
        transition: none !important;
        animation: none !important;
    }
    
    .reduce-motion .heart:before,
    .reduce-motion .heart:after {
        animation: none !important;
    }
    
    /* Mejoras de loading */
    img {
        transition: filter 0.3s ease, opacity 0.3s ease;
    }
    
    img[loading="lazy"] {
        opacity: 0;
    }
    
    img[loading="lazy"].loaded {
        opacity: 1;
    }

    /* Estilos para los corazones flotantes */
    .floating-hearts {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        overflow: hidden;
        z-index: 9999;
    }
    
    .floating-heart {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        opacity: 0;
        animation: floatHeart 8s ease-in-out infinite;
    }
    
    @keyframes floatHeart {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        50% {
            transform: translate(calc(-50% + var(--dx)), calc(-50% - var(--dy))) scale(1.2);
            opacity: 0.7;
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
    
    /* Estilos para el tooltip de cualidades */
    #quality-tooltip {
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    #quality-tooltip.show {
        opacity: 1;
    }
    
    .tooltip-text {
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 0.9rem;
        max-width: 300px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;
document.head.appendChild(style);
