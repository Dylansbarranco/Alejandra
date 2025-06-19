
    const totalPages = pages.length;
    let isAnimating = false;
    let isDayTime = false;

    // Inicialización
    totalPagesSpan.textContent = tdocument.addEventListener('DOMContentLoaded', function() {
    // Elementos principales
    const book = document.getElementById('book');
    const pages = document.querySelectorAll('.page');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    const galaxy = document.getElementById('galaxy');
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const solarSystem = document.getElementById('solar-system');

    // Variables de estado
    let currentPage = 0;otalPages;
    detectTimeOfDay();
    createGalaxyEffects();
    setupPages();

    // Detectar si es día o noche
    function detectTimeOfDay() {
        const now = new Date();
        const hour = now.getHours();
        
        // Día: 6 AM - 6 PM, Noche: 6 PM - 6 AM
        isDayTime = hour >= 6 && hour < 18;
        
        updateDayNightMode();
    }

    // Actualizar modo día/noche
    function updateDayNightMode() {
        const body = document.body;
        
        if (isDayTime) {
            body.classList.add('day-mode');
            body.classList.remove('night-mode');
            sun.style.opacity = '1';
            sun.style.transform = 'scale(1)';
            moon.style.opacity = '0';
            moon.style.transform = 'scale(0.8)';
        } else {
            body.classList.add('night-mode');
            body.classList.remove('day-mode');
            sun.style.opacity = '0';
            sun.style.transform = 'scale(0.8)';
            moon.style.opacity = '1';
            moon.style.transform = 'scale(1)';
        }
        
        // Actualizar colores de las páginas
        updatePageColors();
    }

    // Actualizar colores de las páginas según el modo
    function updatePageColors() {
        const pageColor = isDayTime ? 
            'rgba(135, 206, 235, 0.9)' : 
            'rgba(26, 26, 58, 0.95)';
            
        pages.forEach(page => {
            page.style.background = pageColor;
        });
    }

    // Crear efectos galácticos
    function createGalaxyEffects() {
        createStars();
        createPlanets();
        createShootingStars();
        createComets();
        createAsteroids();
    }

    // Crear estrellas dinámicas
    function createStars() {
        const starCount = 200;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.position = 'absolute';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.background = isDayTime ? '#FFD700' : '#FFFFFF';
            star.style.borderRadius = '50%';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animation = `starTwinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.boxShadow = `0 0 ${Math.random() * 10 + 5}px currentColor`;
            
            galaxy.appendChild(star);
        }
    }

    // Crear planetas del sistema solar
    function createPlanets() {
        const planets = [
            { name: 'mercury', size: 15, color: '#8C7853', distance: 100, speed: 8 },
            { name: 'venus', size: 20, color: '#FFC649', distance: 150, speed: 12 },
            { name: 'earth', size: 22, color: '#6B93D6', distance: 200, speed: 16 },
            { name: 'mars', size: 18, color: '#CD5C5C', distance: 250, speed: 20 },
            { name: 'jupiter', size: 40, color: '#D8CA9D', distance: 350, speed: 30 },
            { name: 'saturn', size: 35, color: '#FAD5A5', distance: 400, speed: 35 }
        ];

        planets.forEach((planetData, index) => {
            const planet = document.createElement('div');
            planet.className = `planet ${planetData.name}`;
            planet.style.width = planetData.size + 'px';
            planet.style.height = planetData.size + 'px';
            planet.style.background = `radial-gradient(circle at 30% 30%, ${planetData.color}, ${adjustColor(planetData.color, -30)})`;
            planet.style.borderRadius = '50%';
            planet.style.position = 'absolute';
            planet.style.boxShadow = `0 0 ${planetData.size/2}px ${planetData.color}40`;
            
            // Posicionar planeta en órbita
            const angle = (index * 60) * Math.PI / 180;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const x = centerX + Math.cos(angle) * planetData.distance;
            const y = centerY + Math.sin(angle) * planetData.distance;
            
            planet.style.left = x + 'px';
            planet.style.top = y + 'px';
            planet.style.animation = `planetOrbit ${planetData.speed}s linear infinite`;
            planet.style.animationDelay = index * 2 + 's';
            
            solarSystem.appendChild(planet);
        });
    }

    // Función para ajustar color
    function adjustColor(color, amount) {
        return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
    }

    // Crear estrellas fugaces
    function createShootingStars() {
        setInterval(() => {
            if (Math.random() > 0.8) { // 20% de probabilidad
                const shootingStar = document.createElement('div');
                shootingStar.style.position = 'absolute';
                shootingStar.style.width = '3px';
                shootingStar.style.height = '3px';
                shootingStar.style.background = isDayTime ? '#FFD700' : '#FFFFFF';
                shootingStar.style.borderRadius = '50%';
                shootingStar.style.boxShadow = `0 0 10px currentColor`;
                shootingStar.style.pointerEvents = 'none';
                shootingStar.style.zIndex = '999';
                
                shootingStar.style.left = Math.random() * 100 + '%';
                shootingStar.style.top = Math.random() * 30 + '%';
                
                // Crear cola de la estrella fugaz
                shootingStar.style.background = `linear-gradient(45deg, ${isDayTime ? '#FFD700' : '#FFFFFF'}, transparent)`;
                shootingStar.style.width = '50px';
                shootingStar.style.height = '2px';
                shootingStar.style.borderRadius = '0';
                
                galaxy.appendChild(shootingStar);
                
                // Animar estrella fugaz
                shootingStar.style.animation = 'shootingStarMove 3s linear forwards';
                
                // Remover después de la animación
                setTimeout(() => {
                    if (shootingStar.parentNode) {
                        shootingStar.parentNode.removeChild(shootingStar);
                    }
                }, 3000);
            }
        }, 4000);
    }

    // Crear cometas
    function createComets() {
        setInterval(() => {
            if (Math.random() > 0.95) { // 5% de probabilidad
                const comet = document.createElement('div');
                comet.style.position = 'absolute';
                comet.style.width = '8px';
                comet.style.height = '8px';
                comet.style.background = '#00FFFF';
                comet.style.borderRadius = '50%';
                comet.style.boxShadow = '0 0 20px #00FFFF, 0 0 40px #00FFFF';
                comet.style.pointerEvents = 'none';
                comet.style.zIndex = '998';
                
                comet.style.left = '-50px';
                comet.style.top = Math.random() * 100 + '%';
                
                galaxy.appendChild(comet);
                
                // Animar cometa
                comet.style.animation = 'cometMove 8s linear forwards';
                
                // Remover después de la animación
                setTimeout(() => {
                    if (comet.parentNode) {
                        comet.parentNode.removeChild(comet);
                    }
                }, 8000);
            }
        }, 15000);
    }

    // Crear asteroides
    function createAsteroids() {
        for (let i = 0; i < 5; i++) {
            const asteroid = document.createElement('div');
            asteroid.style.position = 'absolute';
            asteroid.style.width = Math.random() * 10 + 5 + 'px';
            asteroid.style.height = asteroid.style.width;
            asteroid.style.background = '#8B4513';
            asteroid.style.borderRadius = '50%';
            asteroid.style.left = Math.random() * 100 + '%';
            asteroid.style.top = Math.random() * 100 + '%';
            asteroid.style.animation = `asteroidFloat ${Math.random() * 20 + 15}s linear infinite`;
            asteroid.style.animationDelay = Math.random() * 10 + 's';
            asteroid.style.opacity = '0.7';
            
            galaxy.appendChild(asteroid);
        }
    }

    // Configurar páginas
    function setupPages() {
        pages.forEach((page, index) => {
            page.style.zIndex = totalPages - index;
        });
    }

    // Animar elementos de texto cuando aparecen
    function animateTextElements(page) {
        const textElements = page.querySelectorAll('.animate-text-reveal');
        const quotes = page.querySelectorAll('.animate-quote-reveal');
        const reasonItems = page.querySelectorAll('.reason-item');
        
        // Animar elementos de texto con delay escalonado
        textElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
        });
        
        // Animar citas
        quotes.forEach((quote, index) => {
            setTimeout(() => {
                quote.style.opacity = '1';
                quote.style.transform = 'scale(1) translateY(0)';
            }, (textElements.length * 200) + (index * 300));
        });
        
        // Animar lista de razones
        if (reasonItems.length > 0) {
            reasonItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                }, index * 100);
            });
        }
    }

    // Crear efecto de partículas al pasar página
    function createPageParticles() {
        const particleCount = 30;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = isDayTime ? '#FFD700' : '#FFFFFF';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            particle.style.boxShadow = '0 0 10px currentColor';
            
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            
            document.body.appendChild(particle);
            
            // Animar partícula
            particle.style.animation = 'particleFloat 3s ease-out forwards';
            
            // Remover después de la animación
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 3000);
        }
    }

    // Actualizar página con animaciones
    function updatePage() {
        if (isAnimating) return;
        
        isAnimating = true;
        
        // Actualizar clases de páginas
        pages.forEach((page, index) => {
            page.classList.remove('active', 'flipped', 'turning');
            
            if (index < currentPage) {
                page.classList.add('flipped');
            } else if (index === currentPage) {
                page.classList.add('active');
                
                // Animar elementos de la página activa
                setTimeout(() => {
                    animateTextElements(page);
                }, 300);
            }
        });
        
        // Crear partículas al pasar página
        createPageParticles();
        
        // Actualizar indicadores
        currentPageSpan.textContent = currentPage + 1;
        
        // Actualizar botones
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === totalPages - 1;
        
        // Simular el sonido de pasar página
        playSpacePageSound();
        
        setTimeout(() => {
            isAnimating = false;
        }, 1500);
    }

    // Event listeners para navegación
    prevBtn.addEventListener('click', function() {
        if (currentPage > 0 && !isAnimating) {
            currentPage--;
            updatePage();
        }
    });

    nextBtn.addEventListener('click', function() {
        if (currentPage < totalPages - 1 && !isAnimating) {
            currentPage++;
            updatePage();
        }
    });

    // Navegación con teclado
    document.addEventListener('keydown', function(e) {
        if (isAnimating) return;
        
        if (e.key === 'ArrowLeft' && currentPage > 0) {
            currentPage--;
            updatePage();
        } else if (e.key === 'ArrowRight' && currentPage < totalPages - 1) {
            currentPage++;
            updatePage();
        } else if (e.key === 'Home') {
            currentPage = 0;
            updatePage();
        } else if (e.key === 'End') {
            currentPage = totalPages - 1;
            updatePage();
        }
    });

    // Navegación táctil
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (isAnimating) return;
        
        const swipeThreshold = 50;
        const horizontalDistance = Math.abs(touchEndX - touchStartX);
        
        if (horizontalDistance > swipeThreshold) {
            if (touchEndX + swipeThreshold < touchStartX && currentPage < totalPages - 1) {
                currentPage++;
                updatePage();
            } else if (touchEndX > touchStartX + swipeThreshold && currentPage > 0) {
                currentPage--;
                updatePage();
            }
        }
    }

    // Función para simular el sonido espacial de pasar página
    function playSpacePageSound() {
        // Vibración si está disponible
        if (navigator.vibrate) {
            navigator.vibrate([25, 10, 25, 10, 25]);
        }
        
        // Efecto visual de "destello galáctico"
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.background = `radial-gradient(circle, ${isDayTime ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)'} 0%, transparent 70%)`;
        flash.style.pointerEvents = 'none';
        flash.style.zIndex = '9999';
        flash.style.opacity = '0';
        flash.style.transition = 'opacity 0.3s';
        
        document.body.appendChild(flash);
        
        setTimeout(() => {
            flash.style.opacity = '1';
            setTimeout(() => {
                flash.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(flash);
                }, 300);
            }, 100);
        }, 10);
    }

    // Efecto de paralaje espacial
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        // Mover estrellas con paralaje
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            const speed = (index % 3 + 1) * 0.3;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            
            star.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // Inclinar libro ligeramente
        const rotateX = 5 - mouseY * 3;
        const rotateY = -1 + mouseX * 2;
        
        book.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    // Añadir CSS para animaciones dinámicas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shootingStarMove {
            0% {
                transform: translateX(0) translateY(0);
                opacity: 1;
            }
            100% {
                transform: translateX(400px) translateY(200px);
                opacity: 0;
            }
        }
        
        @keyframes cometMove {
            0% {
                transform: translateX(0) translateY(0);
                opacity: 1;
            }
            100% {
                transform: translateX(${window.innerWidth + 100}px) translateY(100px);
                opacity: 0;
            }
        }
        
        @keyframes asteroidFloat {
            0% {
                transform: translateX(0) rotate(0deg);
            }
            100% {
                transform: translateX(${window.innerWidth + 50}px) rotate(360deg);
            }
        }
        
        @keyframes particleFloat {
            0% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-150px) scale(0);
            }
        }
        
        @keyframes planetOrbit {
            0% {
                transform: rotate(0deg) translateX(var(--orbit-radius, 200px)) rotate(0deg);
            }
            100% {
                transform: rotate(360deg) translateX(var(--orbit-radius, 200px)) rotate(-360deg);
            }
        }
        
        @keyframes starTwinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
    `;
    document.head.appendChild(style);

    // Cambiar modo día/noche cada 30 segundos para demostración
    // (En producción, esto se basaría en la hora real)
    setInterval(() => {
        isDayTime = !isDayTime;
        updateDayNightMode();
        
        // Actualizar estrellas existentes
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.style.background = isDayTime ? '#FFD700' : '#FFFFFF';
        });
    }, 30000);

    // Inicializar
    updatePage();

    // Manejar cambios de orientación
    window.addEventListener('orientationchange', function() {
        setTimeout(() => {
            updatePage();
        }, 500);
    });

    // Manejar visibilidad de la página
    document.addEventListener('visibilitychange', function() {
        const animatedElements = document.querySelectorAll('[style*="animation"]');
        
        if (document.hidden) {
            animatedElements.forEach(element => {
                element.style.animationPlayState = 'paused';
            });
        } else {
            animatedElements.forEach(element => {
                element.style.animationPlayState = 'running';
            });
        }
    });
});

// Añadir soporte para el modo oscuro en navegadores modernos
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('night-mode');
}           