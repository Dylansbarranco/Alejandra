function revealMessage() {
            document.getElementById('hiddenMessage').style.display = 'block';
            document.querySelector('.reveal-button').style.display = 'none';
            document.querySelector('.initial-message').style.fontSize = '16px';
            
            // Show phrases one by one
            const phrases = document.querySelectorAll('.phrase');
            phrases.forEach((phrase, index) => {
                setTimeout(() => {
                    phrase.style.display = 'block';
                }, 1000 + (index * 800));
            });
            
            // Create floating hearts
            createHearts();
        }
        
        function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const heartSymbols = ['❤️', '💕', '💖', '💗', '💓'];
            
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = Math.random() * 100 + '%';
                heart.style.animation = `float ${3 + Math.random() * 4}s linear infinite`;
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.opacity = '1';
                heartsContainer.appendChild(heart);
            }
        }
        
        function moveButton() {
            const button = document.getElementById('noButton');
            const container = document.querySelector('.container');
            
            const containerRect = container.getBoundingClientRect();
            const buttonRect = button.getBoundingClientRect();
            
            const maxX = containerRect.width - buttonRect.width;
            const maxY = containerRect.height - buttonRect.height;
            
            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);
            
            button.style.position = 'absolute';
            button.style.left = randomX + 'px';
            button.style.top = randomY + 'px';
        }
        
        function sayYes() {
            document.getElementById('hiddenMessage').innerHTML = `
                <h1 style="font-size: 28px; color: #e91e63;">¡Ahora somos novios oficialmente! ❤️</h1>
                <p style="font-size: 20px;">Te prometo quererte, respetarte y estar siempre para ti.</p>
                <p style="font-size: 20px;">Gracias por aceptar ser parte de mi vida de esta manera tan especial.</p>
                <p style="font-size: 24px; margin-top: 30px;">¡TE QUIERO MUCHO! ❤️</p>
            `;
            
            createConfetti();
            document.getElementById('celebration').style.display = 'block';
        }
        
        function createConfetti() {
            const celebrationContainer = document.getElementById('celebration');
            const colors = ['#ff4081', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4'];
            
            for (let i = 0; i < 150; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.width = Math.random() * 10 + 5 + 'px';
                confetti.style.height = Math.random() * 10 + 5 + 'px';
                confetti.style.opacity = '1';
                confetti.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
                confetti.style.animationDelay = Math.random() * 5 + 's';
                celebrationContainer.appendChild(confetti);
            }
        }