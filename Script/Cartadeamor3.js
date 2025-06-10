 // Crear pétalos flotantes (más morados para coincidir con las flores)
        function createPetals() {
            const petalsContainer = document.getElementById('petals');
            const petalEmojis = ['🌸', '💜', '✨', '🔮', '💫'];
            
            setInterval(() => {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.innerHTML = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];
                petal.style.left = Math.random() * 100 + '%';
                petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
                petal.style.animationDelay = Math.random() * 2 + 's';
                
                petalsContainer.appendChild(petal);
                
                setTimeout(() => {
                    petal.remove();
                }, 5000);
            }, 300);
        }

        // Crear corazones flotantes
        function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const heartEmojis = ['💜', '💖', '✨', '💫', '🌟'];
            
            for (let i = 0; i < 8; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 6 + 's';
                
                heartsContainer.appendChild(heart);
            }
        }

        // Crear notas musicales y brillos
        function createMusicNotes() {
            const musicContainer = document.getElementById('musicNotes');
            const notes = ['🎵', '✨', '💫', '🌟'];
            
            setInterval(() => {
                const note = document.createElement('div');
                note.className = 'music-note';
                note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
                note.style.left = Math.random() * 100 + '%';
                note.style.animationDuration = (Math.random() * 2 + 3) + 's';
                
                musicContainer.appendChild(note);
                
                setTimeout(() => {
                    note.remove();
                }, 5000);
            }, 2000);
        }

        // Establecer fecha actual
        function setCurrentDate() {
            const now = new Date();
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
            };
            const dateString = now.toLocaleDateString('es-ES', options);
            document.getElementById('currentDate').textContent = dateString;
        }

        // Crear corazones que aparecen al hacer click
        function createClickHearts(e) {
            for (let i = 0; i < 5; i++) {
                const heart = document.createElement('div');
                heart.innerHTML = '💜';
                heart.style.position = 'fixed';
                heart.style.left = (e.clientX - 15 + Math.random() * 30) + 'px';
                heart.style.top = (e.clientY - 15 + Math.random() * 30) + 'px';
                heart.style.fontSize = '20px';
                heart.style.pointerEvents = 'none';
                heart.style.zIndex = '1000';
                heart.style.animation = 'floatHeart 2s ease-out forwards';
                
                document.body.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 2000);
            }
        }

        // Inicializar todo
        document.addEventListener('DOMContentLoaded', function() {
            setCurrentDate();
            createPetals();
            createHearts();
            createMusicNotes();
            
            // Agregar corazones al hacer click
            document.addEventListener('click', createClickHearts);
            
            // Agregar efecto de brillo a las cartas al pasar el mouse
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                    this.style.boxShadow = '0 25px 50px rgba(0,0,0,0.15)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                });
            });
        });

        // Agregar más efectos especiales
        setInterval(() => {
            const randomCard = document.querySelectorAll('.reason-card')[Math.floor(Math.random() * 4)];
            randomCard.style.transform = 'translateY(-5px) scale(1.02)';
            setTimeout(() => {
                randomCard.style.transform = 'translateY(0) scale(1)';
            }, 1000);
        }, 3000);