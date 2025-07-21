 // Función para abrir el reproductor
        function openPlayer(title, videoId) {
            const modal = document.getElementById('playerModal');
            const playerTitle = document.getElementById('playerTitle');
            const youtubePlayer = document.getElementById('youtubePlayer');
            
            playerTitle.textContent = title;
            youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
            
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Función para cerrar el reproductor
        function closePlayer() {
            const modal = document.getElementById('playerModal');
            const youtubePlayer = document.getElementById('youtubePlayer');
            
            modal.style.display = 'none';
            youtubePlayer.src = '';
            document.body.style.overflow = 'auto';
        }

        // Cerrar modal al hacer clic fuera
        document.getElementById('playerModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closePlayer();
            }
        });

        // Cerrar modal con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closePlayer();
            }
        });

        // Crear corazones flotantes
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
            heart.style.opacity = Math.random() * 0.5 + 0.1;
            
            document.getElementById('floating-hearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }

        // Crear corazones cada 3 segundos
        setInterval(createFloatingHeart, 3000);

        // Animación de entrada escalonada para las secciones
        window.addEventListener('load', function() {
            const sections = document.querySelectorAll('.song-section');
            sections.forEach((section, index) => {
                section.style.animationDelay = (index * 0.2) + 's';
            });
        });

        // Efecto de partículas al hacer hover en las imágenes
        document.querySelectorAll('.song-image').forEach(img => {
            img.addEventListener('mouseenter', function() {
                createImageParticles(this);
            });
        });

        function createImageParticles(element) {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const particle = document.createElement('div');
                    particle.innerHTML = '✨';
                    particle.style.cssText = `
                        position: absolute;
                        color: #ff6b9d;
                        font-size: 1rem;
                        pointer-events: none;
                        z-index: 1000;
                        animation: particleFloat 2s ease-out forwards;
                    `;
                    
                    const rect = element.getBoundingClientRect();
                    particle.style.left = (rect.left + Math.random() * rect.width) + 'px';
                    particle.style.top = (rect.top + rect.height) + 'px';
                    
                    document.body.appendChild(particle);
                    
                    setTimeout(() => {
                        particle.remove();
                    }, 2000);
                }, i * 100);
            }
        }

        // Agregar animación para partículas
        const particleStyle = document.createElement('style');
        particleStyle.textContent = `
            @keyframes particleFloat {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(0.5);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-50px) scale(1);
                }
            }
        `;
        document.head.appendChild(particleStyle);