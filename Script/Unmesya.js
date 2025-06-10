 // Fecha de inicio de la relación (13 de abril de 2025 a las 14:56)
        const startDate = new Date(2025, 3, 13, 14, 56, 0); // Meses en JavaScript son 0-11, por lo que abril es 3
        
        // Actualizar contador
        function updateCounter() {
            const now = new Date();
            
            // Si la fecha actual es anterior a la fecha de inicio, mostrar ceros
            if (now < startDate) {
                document.getElementById('days').textContent = "0";
                document.getElementById('hours').textContent = "0";
                document.getElementById('minutes').textContent = "0";
                document.getElementById('seconds').textContent = "0";
                return;
            }
            
            const diff = now - startDate;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days;
            document.getElementById('hours').textContent = hours;
            document.getElementById('minutes').textContent = minutes;
            document.getElementById('seconds').textContent = seconds;
        }
        
        // Actualizar cada segundo
        setInterval(updateCounter, 1000);
        updateCounter(); // Actualizar inmediatamente
        
        // Animación de la línea de tiempo
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        function checkIfInView() {
            timelineItems.forEach(item => {
                const rect = item.getBoundingClientRect();
                const isInView = (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );
                
                if (isInView) {
                    item.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('scroll', checkIfInView);
        window.addEventListener('resize', checkIfInView);
        window.addEventListener('load', checkIfInView);
        
        // Crear corazones flotantes (versión mejorada con más corazones)
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart-animation');
            
            // Variedad de emojis de corazón y cosas lindas
            const heartEmojis = ['❤️', '💖', '💕', '💓', '💗', '💘', '💝', '💞', '💟', '♥️'];
            heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            
            // Posición aleatoria
            const leftPos = Math.random() * 100;
            heart.style.left = leftPos + 'vw';
            
            // Tamaño aleatorio
            const size = Math.random() * 1 + 0.5;
            heart.style.fontSize = size + 'rem';
            
            // Duración aleatoria
            const duration = Math.random() * 3 + 3;
            heart.style.animationDuration = duration + 's';
            
            document.body.appendChild(heart);
            
            // Eliminar después de la animación
            setTimeout(() => {
                if (heart.parentNode === document.body) {
                    document.body.removeChild(heart);
                }
            }, duration * 1000);
        }
        
        // Crear lluvia de corazones
        function createHeartRain() {
            const heart = document.createElement('div');
            heart.classList.add('heart-rain');
            
            // Variedad de emojis de corazón y cosas lindas
            const heartEmojis = ['❤️', '💖', '💕', '💓', '💗', '💘', '💝', '💞', '💟', '♥️', '😍', '🥰', '😘', '🌹', '✨', '🌟', '⭐', '🎵', '🎶'];
            heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            
            // Posición aleatoria horizontal
            const leftPos = Math.random() * 100;
            heart.style.left = leftPos + 'vw';
            
            // Tamaño aleatorio
            const size = Math.random() * 1.5 + 0.8;
            heart.style.fontSize = size + 'rem';
            
            // Duración aleatoria
            const duration = Math.random() * 5 + 5;
            heart.style.animationDuration = duration + 's';
            
            document.body.appendChild(heart);
            
            // Eliminar después de la animación
            setTimeout(() => {
                if (heart.parentNode === document.body) {
                    document.body.removeChild(heart);
                }
            }, duration * 1000);
        }
        
        // Crear emojis flotantes
        function createFloatingEmoji() {
            const emoji = document.createElement('div');
            emoji.classList.add('floating-emoji');
            
            // Variedad de emojis lindos
            const emojis = ['🌈', '🦋', '🌸', '🌺', '🌷', '🌻', '🌼', '🍀', '✨', '⭐', '🌟', '💫', '🎵', '🎶', '🎀', '🎁', '🎊', '🎉'];
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Posición aleatoria
            const leftPos = Math.random() * 90 + 5;
            const topPos = Math.random() * 90 + 5;
            emoji.style.left = leftPos + 'vw';
            emoji.style.top = topPos + 'vh';
            
            // Tamaño aleatorio
            const size = Math.random() * 1.5 + 1;
            emoji.style.fontSize = size + 'rem';
            
            // Duración aleatoria
            const duration = Math.random() * 10 + 15;
            emoji.style.animationDuration = duration + 's';
            
            document.body.appendChild(emoji);
            
            // Eliminar después de un tiempo
            setTimeout(() => {
                if (emoji.parentNode === document.body) {
                    document.body.removeChild(emoji);
                }
            }, duration * 1000);
        }
        
        // Crear corazones periódicamente (más frecuentes)
        setInterval(createFloatingHeart, 500);
        
        // Crear lluvia de corazones periódicamente
        setInterval(createHeartRain, 300);
        
        // Crear emojis flotantes periódicamente
        setInterval(createFloatingEmoji, 3000);
        
        // Crear varios corazones y emojis al cargar la página
        window.addEventListener('load', () => {
            // Hacer visible todos los elementos de la línea de tiempo al cargar
            timelineItems.forEach(item => {
                item.classList.add('visible');
            });
            
            // Crear corazones iniciales
            for (let i = 0; i < 20; i++) {
                setTimeout(createFloatingHeart, i * 100);
            }
            
            // Crear lluvia de corazones inicial
            for (let i = 0; i < 30; i++) {
                setTimeout(createHeartRain, i * 100);
            }
            
            // Crear emojis flotantes iniciales
            for (let i = 0; i < 10; i++) {
                setTimeout(createFloatingEmoji, i * 300);
            }
            
            // Intentar reproducir Spotify automáticamente
            try {
                document.getElementById('spotifyFrame').contentWindow.postMessage('{"command":"play"}', '*');
            } catch (e) {
                console.log('No se pudo reproducir automáticamente Spotify');
            }
        });
        
        // Control de música local
        const musicControl = document.getElementById('musicControl');
        let audio = null;
        let isPlaying = false;
        
        musicControl.addEventListener('click', () => {
            if (!audio) {
                audio = new Audio();
                // Usa una URL directa a un archivo MP3 (no un enlace de Spotify)
                audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // Ejemplo de música
                audio.loop = true;
            }
            
            if (isPlaying) {
                audio.pause();
                musicControl.textContent = '🎵';
            } else {
                audio.play().catch(e => {
                    // Manejar error si el navegador bloquea la reproducción automática
                    console.log('Reproducción automática bloqueada por el navegador');
                });
                musicControl.textContent = '🔇';
            }
            
            isPlaying = !isPlaying;
        });
        
        // Control del reproductor de Spotify
        const spotifyToggle = document.getElementById('spotifyToggle');
        const spotifyPlayer = document.getElementById('spotifyPlayer');
        let spotifyVisible = true; // Cambiado a true para que se muestre por defecto
        
        spotifyToggle.addEventListener('click', () => {
            if (spotifyVisible) {
                spotifyPlayer.style.display = 'none';
                spotifyToggle.textContent = '🎧';
            } else {
                spotifyPlayer.style.display = 'block';
                spotifyToggle.textContent = '✖️';
                
                // Si hay música local reproduciéndose, pausarla
                if (audio && isPlaying) {
                    audio.pause();
                    musicControl.textContent = '🎵';
                    isPlaying = false;
                }
            }
            
            spotifyVisible = !spotifyVisible;
        });
        
        // Configuración del lightbox para ver imágenes a pantalla completa
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const lightboxClose = document.getElementById('lightboxClose');
        const galleryImages = document.querySelectorAll('.gallery-image');
        const timelineImages = document.querySelectorAll('.timeline-image');
        
        // Función para abrir el lightbox
        function openLightbox(imageSrc) {
            lightboxImage.src = imageSrc;
            lightbox.style.display = 'flex';
        }
        
        // Cerrar el lightbox al hacer clic en el botón de cerrar
        lightboxClose.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });
        
        // Cerrar el lightbox al hacer clic fuera de la imagen
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
        
        // Abrir lightbox al hacer clic en imágenes de la galería
        galleryImages.forEach(image => {
            image.addEventListener('click', () => {
                openLightbox(image.src);
                
                // Crear varios corazones al hacer clic
                for (let i = 0; i < 15; i++) {
                    setTimeout(createFloatingHeart, i * 100);
                }
            });
        });
        
        // Abrir lightbox al hacer clic en imágenes de la línea de tiempo
        timelineImages.forEach(image => {
            image.addEventListener('click', () => {
                openLightbox(image.src);
                
                // Crear varios corazones al hacer clic
                for (let i = 0; i < 15; i++) {
                    setTimeout(createFloatingHeart, i * 100);
                }
            });
        });
        
        // Iniciar Spotify automáticamente
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            const element = document.getElementById('spotifyFrame');
            const options = {
                uri: 'spotify:track:5rGphVLnbPdyBQ5X3rjb2X',
                width: '100%',
                height: '80',
                autoplay: true
            };
            const callback = (EmbedController) => {
                EmbedController.play();
            };
            IFrameAPI.createController(element, options, callback);
        };