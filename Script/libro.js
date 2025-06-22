        document.addEventListener('DOMContentLoaded', function() {
            // Elementos principales
            const book = document.getElementById('book');
            const pages = document.querySelectorAll('.page');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const currentPageSpan = document.getElementById('current-page');
            const totalPagesSpan = document.getElementById('total-pages');
            const galaxy = document.getElementById('galaxy');
            const moon = document.getElementById('moon');
            const solarSystem = document.getElementById('solar-system');
            
            // Elementos del buscador
            const searchInput = document.getElementById('searchInput');
            const searchButton = document.getElementById('searchButton');
            const searchResults = document.getElementById('searchResults');

            // Variables de estado
            let currentPage = 0;
            const totalPages = pages.length;
            let isAnimating = false;

            // Datos de búsqueda - contenido indexado de cada página
            const searchData = [
                {
                    pageIndex: 0,
                    title: "Portada - Nuestra Historia Digital",
                    content: "Nuestra Historia Digital Un viaje a través de nuestro amor Para ti Alejandra que iluminas mi vida con cada mensaje",
                    keywords: ["portada", "historia", "digital", "amor", "alejandra", "mensaje"]
                },
                {
                    pageIndex: 1,
                    title: "Los Protagonistas de Esta Historia",
                    content: "Alejandra Dilan protagonistas historia estrella galaxia viajero espacial corazón",
                    keywords: ["protagonistas", "alejandra", "dilan", "estrella", "galaxia", "viajero", "espacial"]
                },
                {
                    pageIndex: 2,
                    title: "Capítulo I - Cómo Comenzó Todo",
                    content: "WhatsApp universidad grupo conocimos futuro corazón mensaje inesperado abril 2025",
                    keywords: ["capítulo", "comenzó", "whatsapp", "universidad", "conocimos", "abril", "2025", "mensaje"]
                },
                {
                    pageIndex: 3,
                    title: "Capítulo II - Cartas Digitales",
                    content: "cartas digitales lenguaje amor morado girasol canción programadora HTML",
                    keywords: ["cartas", "digitales", "lenguaje", "amor", "morado", "girasol", "canción", "programadora"]
                },
                {
                    pageIndex: 4,
                    title: "Capítulo III - Las Mil Razones",
                    content: "mil razones gustas esencia mente corazón conexión pequeños detalles",
                    keywords: ["mil", "razones", "gustas", "esencia", "mente", "corazón", "conexión", "detalles"]
                },
                {
                    pageIndex: 5,
                    title: "Capítulo IV - 200 Razones Por Las Que Me Encantas",
                    content: "200 razones encantas sonríes ojos brillan honestidad risa inteligencia compasión",
                    keywords: ["200", "razones", "encantas", "sonríes", "ojos", "honestidad", "risa", "inteligencia"]
                },
                {
                    pageIndex: 6,
                    title: "Capítulo V - Por Alejandra",
                    content: "Alejandra turno contar historia lado forma linda querido Cerati",
                    keywords: ["alejandra", "turno", "contar", "historia", "lado", "forma", "linda", "cerati"]
                },
                {
                    pageIndex: 7,
                    title: "Capítulo VI - Un Mes de Nosotros",
                    content: "primer mes juntos treinta días eternidad construido recuerdos aprendido",
                    keywords: ["primer", "mes", "juntos", "treinta", "días", "eternidad", "construido", "recuerdos"]
                },
                {
                    pageIndex: 8,
                    title: "Capítulo VII - Del 19 a 25 de mayo",
                    content: "19 25 mayo semana conocernos sentimientos historias intrigas nesquik",
                    keywords: ["mayo", "semana", "conocernos", "sentimientos", "historias", "intrigas", "nesquik"]
                },
                {
                    pageIndex: 9,
                    title: "Capítulo VIII - Verdades que Sacuden",
                    content: "verdades sacuden amor permanece semana intensa omisión sinceridad",
                    keywords: ["verdades", "sacuden", "amor", "permanece", "intensa", "omisión", "sinceridad"]
                },
                {
                    pageIndex: 10,
                    title: "Capítulo IX - Nuestro Drama de Cimientos",
                    content: "drama cimientos obra semana intensa adversidad firmes retos reflexionar",
                    keywords: ["drama", "cimientos", "obra", "intensa", "adversidad", "firmes", "retos"]
                },
                {
                    pageIndex: 11,
                    title: "Capítulo X - Esta Semana No Fue Perfecta",
                    content: "semana perfecta completamente nuestra discusión charla ajustes TikTok",
                    keywords: ["semana", "perfecta", "nuestra", "discusión", "charla", "ajustes", "tiktok"]
                },
                {
                     pageIndex: 12,
                    title: "Pon el titulo del capitulo",
                    content: "Pon alguna frase que resuma el capitulo",
                    keywords: ["palabra", "palabra", "palabra", "palabra", "palabra", "palabra", "palabra"]

                },
                {
                    pageIndex: 13,
                    title: "Epílogo - Nuestro Capítulo Continúa",
                    content: "epílogo capítulo continúa libro digital fragmento historia mensaje inesperado",
                    keywords: ["epílogo", "capítulo", "continúa", "libro", "digital", "fragmento", "historia"]
                }
            ];

            // Inicialización
            totalPagesSpan.textContent = totalPages;
            createGalaxyEffects();
            setupPages();
            updatePage();

            // Función de búsqueda
            function performSearch(query) {
                if (!query.trim()) {
                    searchResults.style.display = 'none';
                    return;
                }

                const results = searchData.filter(item => {
                    const searchTerm = query.toLowerCase();
                    return item.title.toLowerCase().includes(searchTerm) ||
                           item.content.toLowerCase().includes(searchTerm) ||
                           item.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm));
                });

                displaySearchResults(results, query);
            }

            // Mostrar resultados de búsqueda
            function displaySearchResults(results, query) {
                searchResults.innerHTML = '';
                
                if (results.length === 0) {
                    searchResults.innerHTML = '<div class="search-result-item">No se encontraron resultados</div>';
                } else {
                    results.forEach(result => {
                        const resultItem = document.createElement('div');
                        resultItem.className = 'search-result-item';
                        resultItem.innerHTML = `
                            <div class="result-title">${result.title}</div>
                            <div class="result-preview">${highlightText(result.content.substring(0, 100) + '...', query)}</div>
                        `;
                        resultItem.addEventListener('click', () => {
                            goToPage(result.pageIndex);
                            searchResults.style.display = 'none';
                            searchInput.value = '';
                        });
                        searchResults.appendChild(resultItem);
                    });
                }
                
                searchResults.style.display = 'block';
            }

            // Resaltar texto en resultados
            function highlightText(text, query) {
                const regex = new RegExp(`(${query})`, 'gi');
                return text.replace(regex, '<strong style="color: var(--current-accent);">$1</strong>');
            }

            // Ir a página específica
            function goToPage(pageIndex) {
                if (pageIndex >= 0 && pageIndex < totalPages && !isAnimating) {
                    currentPage = pageIndex;
                    updatePage();
                }
            }

            // Event listeners para búsqueda
            searchInput.addEventListener('input', function() {
                performSearch(this.value);
            });

            searchButton.addEventListener('click', function() {
                performSearch(searchInput.value);
            });

            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    performSearch(this.value);
                }
            });

            // Cerrar resultados al hacer clic fuera
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.search-container')) {
                    searchResults.style.display = 'none';
                }
            });

            // Crear efectos galácticos (solo modo noche)
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
                    star.style.background = '#FFFFFF';
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
                    const x = centerX + Math.cos(angle) * planetData.distance - planetData.size/2;
                    const y = centerY + Math.sin(angle) * planetData.distance - planetData.size/2;
                    
                    planet.style.left = x + 'px';
                    planet.style.top = y + 'px';
                    planet.style.animation = `planetOrbit ${planetData.speed}s linear infinite`;
                    planet.style.animationDelay = index * 2 + 's';
                    
                    solarSystem.appendChild(planet);
                });
            }

            // Crear estrellas fugaces
            function createShootingStars() {
                setInterval(() => {
                    if (Math.random() < 0.3) {
                        const shootingStar = document.createElement('div');
                        shootingStar.className = 'shooting-star';
                        shootingStar.style.position = 'absolute';
                        shootingStar.style.width = '2px';
                        shootingStar.style.height = '2px';
                        shootingStar.style.background = '#FFFFFF';
                        shootingStar.style.borderRadius = '50%';
                        shootingStar.style.boxShadow = '0 0 10px #FFFFFF, 0 0 20px #FFFFFF, 0 0 30px #FFFFFF';
                        
                        const startX = Math.random() * window.innerWidth;
                        const startY = Math.random() * window.innerHeight * 0.3;
                        
                        shootingStar.style.left = startX + 'px';
                        shootingStar.style.top = startY + 'px';
                        
                        const endX = startX + (Math.random() * 300 + 100);
                        const endY = startY + (Math.random() * 200 + 100);
                        
                        shootingStar.style.animation = 'none';
                        shootingStar.animate([
                            { transform: `translate(0, 0) scale(1)`, opacity: 1 },
                            { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`, opacity: 0 }
                        ], {
                            duration: Math.random() * 1000 + 500,
                            easing: 'ease-out'
                        }).onfinish = () => shootingStar.remove();
                        
                        galaxy.appendChild(shootingStar);
                    }
                }, 3000);
            }

            // Crear cometas
            function createComets() {
                const cometCount = 3;
                
                for (let i = 0; i < cometCount; i++) {
                    const comet = document.createElement('div');
                    comet.className = 'comet';
                    comet.style.position = 'absolute';
                    comet.style.width = '4px';
                    comet.style.height = '4px';
                    comet.style.background = 'radial-gradient(circle, #FFD700, #FFA500)';
                    comet.style.borderRadius = '50%';
                    comet.style.boxShadow = '0 0 15px #FFD700, 0 0 30px #FFA500';
                    
                    const orbitRadius = Math.random() * 200 + 300;
                    const speed = Math.random() * 20 + 40;
                    
                    comet.style.left = '50%';
                    comet.style.top = '50%';
                    comet.style.transformOrigin = `0 ${orbitRadius}px`;
                    comet.style.animation = `cometOrbit ${speed}s linear infinite`;
                    comet.style.animationDelay = i * 15 + 's';
                    
                    galaxy.appendChild(comet);
                }
            }

            // Crear asteroides
            function createAsteroids() {
                const asteroidCount = 8;
                
                for (let i = 0; i < asteroidCount; i++) {
                    const asteroid = document.createElement('div');
                    asteroid.className = 'asteroid';
                    asteroid.style.position = 'absolute';
                    const size = Math.random() * 8 + 3;
                    asteroid.style.width = size + 'px';
                    asteroid.style.height = size + 'px';
                    asteroid.style.background = '#8B7355';
                    asteroid.style.borderRadius = '50%';
                    asteroid.style.left = Math.random() * 100 + '%';
                    asteroid.style.top = Math.random() * 100 + '%';
                    asteroid.style.animation = `asteroidFloat ${Math.random() * 30 + 20}s linear infinite`;
                    asteroid.style.animationDelay = Math.random() * 10 + 's';
                    
                    galaxy.appendChild(asteroid);
                }
            }

            // Función auxiliar para ajustar colores
            function adjustColor(color, amount) {
                const usePound = color[0] === '#';
                const col = usePound ? color.slice(1) : color;
                const num = parseInt(col, 16);
                let r = (num >> 16) + amount;
                let g = (num >> 8 & 0x00FF) + amount;
                let b = (num & 0x0000FF) + amount;
                r = r > 255 ? 255 : r < 0 ? 0 : r;
                g = g > 255 ? 255 : g < 0 ? 0 : g;
                b = b > 255 ? 255 : b < 0 ? 0 : b;
                return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
            }

            // Configurar páginas
            function setupPages() {
                pages.forEach((page, index) => {
                    if (index === 0) {
                        page.classList.add('active');
                    } else {
                        page.style.transform = 'translateX(100%)';
                    }
                });
            }

            // Actualizar página actual
            function updatePage() {
                if (isAnimating) return;
                
                isAnimating = true;
                
                pages.forEach((page, index) => {
                    page.classList.remove('active', 'flipped');
                    
                    if (index < currentPage) {
                        page.classList.add('flipped');
                        page.style.transform = 'rotateY(-180deg)';
                    } else if (index === currentPage) {
                        page.classList.add('active');
                        page.style.transform = 'translateX(0) rotateY(0deg)';
                    } else {
                        page.style.transform = 'translateX(100%)';
                    }
                });

                // Actualizar navegación
                currentPageSpan.textContent = currentPage + 1;
                prevBtn.disabled = currentPage === 0;
                nextBtn.disabled = currentPage === totalPages - 1;

                // Agregar animaciones a elementos de la página actual
                setTimeout(() => {
                    const currentPageElement = pages[currentPage];
                    const animatedElements = currentPageElement.querySelectorAll('h1, h2, p, .quote, .reasons-list li');
                    
                    animatedElements.forEach((element, index) => {
                        element.style.opacity = '0';
                        element.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            element.style.transition = 'all 0.6s ease-out';
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                    
                    isAnimating = false;
                }, 500);
            }

            // Event listeners para navegación
            prevBtn.addEventListener('click', () => {
                if (currentPage > 0 && !isAnimating) {
                    currentPage--;
                    updatePage();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentPage < totalPages - 1 && !isAnimating) {
                    currentPage++;
                    updatePage();
                }
            });

            // Navegación con teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft' && currentPage > 0 && !isAnimating) {
                    currentPage--;
                    updatePage();
                } else if (e.key === 'ArrowRight' && currentPage < totalPages - 1 && !isAnimating) {
                    currentPage++;
                    updatePage();
                }
            });

            // Agregar estilos CSS dinámicos para animaciones
            const style = document.createElement('style');
            style.textContent = `
                @keyframes starTwinkle {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); }
                }
                
                @keyframes planetOrbit {
                    0% { transform: rotate(0deg) translateX(var(--orbit-radius, 200px)) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(var(--orbit-radius, 200px)) rotate(-360deg); }
                }
                
                @keyframes cometOrbit {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
                
                @keyframes asteroidFloat {
                    0% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(20px, -15px) rotate(90deg); }
                    50% { transform: translate(-10px, 25px) rotate(180deg); }
                    75% { transform: translate(-25px, -10px) rotate(270deg); }
                    100% { transform: translate(0, 0) rotate(360deg); }
                }
            `;
            document.head.appendChild(style);

            // Efectos de hover para el libro
            book.addEventListener('mouseenter', () => {
                book.style.transform = 'rotateX(2deg) scale(1.02)';
            });

            book.addEventListener('mouseleave', () => {
                book.style.transform = 'rotateX(5deg) scale(1)';
            });

            // Animación inicial
            setTimeout(() => {
                document.body.style.opacity = '1';
                updatePage();
            }, 500);
        });