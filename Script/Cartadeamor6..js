        // Crear pétalos cayendo
        function createPetal() {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (Math.random() * 3 + 2) + 's';
            petal.style.animationDelay = Math.random() * 2 + 's';
            document.getElementById('petals').appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 5000);
        }

        // Crear corazones flotantes
        function createFloatingHeart() {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = '💜';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            document.getElementById('floating-hearts').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 7000);
        }

        // Generar pétalos y corazones continuamente
        setInterval(createPetal, 300);
        setInterval(createFloatingHeart, 2000);

        // Efecto de escritura para el título
        const title = document.querySelector('.title');
        const titleText = title.textContent;
        title.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < titleText.length) {
                title.textContent += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);

        // Efecto de hover en la foto
        const photo = document.querySelector('.photo');
        photo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });

        // Crear más flores decorativas aleatoriamente
        function createRandomFlower() {
            const flowers = ['🌸', '🌺', '🌷', '💜', '🌻'];
            const flower = document.createElement('div');
            flower.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.position = 'fixed';
            flower.style.left = Math.random() * 100 + '%';
            flower.style.top = Math.random() * 100 + '%';
            flower.style.fontSize = '20px';
            flower.style.opacity = '0.3';
            flower.style.pointerEvents = 'none';
            flower.style.zIndex = '1';
            flower.style.animation = 'fadeIn 2s ease-in-out';
            
            document.body.appendChild(flower);
            
            setTimeout(() => {
                flower.style.animation = 'fadeOut 2s ease-in-out';
                setTimeout(() => flower.remove(), 2000);
            }, 3000);
        }

        setInterval(createRandomFlower, 4000);