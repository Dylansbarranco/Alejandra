  const gustoItems = document.querySelectorAll('.gusto-item');
        
        function checkScroll() {
            gustoItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight - 100) {
                    item.classList.add('visible');
                }
            });
        }
        
        window.addEventListener('load', checkScroll);
    
        window.addEventListener('scroll', checkScroll);
        
        const secretButton = document.getElementById('secretButton');
        const secretSection = document.getElementById('secretSection');
        
        secretButton.addEventListener('click', () => {
            secretSection.classList.toggle('revealed');
            if (secretSection.classList.contains('revealed')) {
                secretButton.textContent = 'Ocultar mensaje secreto';
            
                createFloatingHearts();
            } else {
                secretButton.textContent = 'Descubrir mensaje secreto';
            }
        });
        
       
        const modeToggle = document.getElementById('modeToggle');
        const htmlElement = document.documentElement;
        
        modeToggle.addEventListener('click', () => {
            htmlElement.classList.toggle('dark-mode');
            if (htmlElement.classList.contains('dark-mode')) {
                modeToggle.textContent = '☀️';
            } else {
                modeToggle.textContent = '🌙';
            }
        });
        

        function createFloatingHearts() {
            const hearts = ['❤️', '💜', '💖', '💕', '💓', '💗', '💘', '💝'];
            const container = document.querySelector('.container');
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'floating-heart';
                    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
                    
                   
                    const startX = Math.random() * container.offsetWidth;
                    const startY = secretSection.offsetTop + secretSection.offsetHeight / 2;
                    
                    heart.style.left = `${startX}px`;
                    heart.style.top = `${startY}px`;
                    
             
                    const duration = 3 + Math.random() * 3;
                    heart.style.animationDuration = `${duration}s`;
                    
                    document.body.appendChild(heart);
                    
               
                    setTimeout(() => {
                        heart.remove();
                    }, duration * 1000);
                }, i * 200);
            }
        }