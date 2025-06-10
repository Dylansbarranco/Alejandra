 const rollerCoaster = document.getElementById('rollerCoaster');
        const progressBar = document.getElementById('progressBar');
        const cart = document.getElementById('cart');
        const btnYes = document.getElementById('btnYes');
        const btnNo = document.getElementById('btnNo');
        const hearts = document.getElementById('hearts');
        const celebration = document.getElementById('celebration');
        const soundBtn = document.getElementById('soundBtn');
        const musicNotification = document.getElementById('musicNotification');
        const activateMusic = document.getElementById('activateMusic');
        const spotifyContainer = document.getElementById('spotifyContainer');
        
       
        setTimeout(() => {
            musicNotification.style.display = 'block';
        }, 2000);
        
       
        let isSpotifyVisible = false;
        
        
        function toggleSpotify() {
            if (isSpotifyVisible) {
                spotifyContainer.style.display = 'none';
                soundBtn.innerHTML = '🔊<div class="sound-tooltip">Haz clic para mostrar Spotify</div>';
                isSpotifyVisible = false;
            } else {
                spotifyContainer.style.display = 'block';
                soundBtn.innerHTML = '🔇<div class="sound-tooltip">Haz clic para ocultar Spotify</div>';
                isSpotifyVisible = true;
                musicNotification.style.display = 'none';
            }
        }
        
       
        activateMusic.addEventListener('click', () => {
            toggleSpotify();
            musicNotification.style.display = 'none';
        });
        
       
        soundBtn.addEventListener('click', toggleSpotify);
        
        
        rollerCoaster.addEventListener('scroll', () => {
            const scrollTop = rollerCoaster.scrollTop;
            const scrollHeight = rollerCoaster.scrollHeight - rollerCoaster.clientHeight;
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            
            progressBar.style.width = scrollPercentage + '%';
            
           
            const cartMovement = Math.sin(scrollTop / 200) * 20;
            cart.style.transform = `translateX(calc(-50% + ${cartMovement}px))`;
            
            
            if (scrollPercentage > 20 && scrollPercentage < 30 || 
                scrollPercentage > 60 && scrollPercentage < 70) {
                document.body.style.animation = 'shake 0.1s infinite';
            } else {
                document.body.style.animation = 'none';
            }
        });
        
       
        btnYes.addEventListener('click', () => {
            
            if (!isSpotifyVisible) {
                toggleSpotify();
            }
            
            
            hearts.style.display = 'block';
            celebration.style.display = 'block';
            
           
            createHearts();
            createFireworks();
            createConfetti();
           
            setTimeout(() => {
                alert('¡Sabía que dirías que sí! ❤️ Nuestra aventura apenas comienza.');
            }, 1500);
        });
        
        
        btnNo.addEventListener('mouseover', () => {
            const randomX = Math.random() * 200 - 100;
            const randomY = Math.random() * 200 - 100;
            
            btnNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
        
       
        function createHearts() {
            const heartEmojis = ['❤️', '💖', '💕', '💓', '💗', '💘', '💝', '💞'];
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
                    heart.style.left = Math.random() * 100 + 'vw';
                    heart.style.top = '100vh';
                    heart.style.fontSize = (Math.random() * 2 + 1) + 'rem';
                    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    hearts.appendChild(heart);
                    
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 5000);
                }, i * 100);
            }
        }
        
        
        function createFireworks() {
            const fireEmojis = ['✨', '🎆', '🎇', '🌟', '⭐', '💫', '🔥'];
            
            for (let i = 0; i < 30; i++) {
                setTimeout(() => {
                    const fire = document.createElement('div');
                    fire.classList.add('fire');
                    fire.innerHTML = fireEmojis[Math.floor(Math.random() * fireEmojis.length)];
                    fire.style.left = Math.random() * 100 + 'vw';
                    fire.style.top = Math.random() * 50 + 50 + 'vh';
                    fire.style.fontSize = (Math.random() * 2 + 1) + 'rem';
                    fire.style.animationDuration = (Math.random() * 2 + 1) + 's';
                    hearts.appendChild(fire);
                    
                  
                    setTimeout(() => {
                        fire.remove();
                    }, 3000);
                }, i * 150);
            }
        }
        
  
        function createConfetti() {
            const colors = ['#ff3366', '#ff9933', '#ffcc66', '#66ccff', '#cc66ff'];
            
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = -20 + 'px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.width = (Math.random() * 10 + 5) + 'px';
                confetti.style.height = (Math.random() * 10 + 5) + 'px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                
           
                const animationDuration = (Math.random() * 3 + 2);
                confetti.style.animation = `float ${animationDuration}s ease-in-out forwards`;
                confetti.style.animationDelay = (Math.random() * 3) + 's';
                
                celebration.appendChild(confetti);
                
             
                setTimeout(() => {
                    confetti.remove();
                }, animationDuration * 1000 + 3000);
            }
        }
        
        
        window.addEventListener('load', () => {
            const sections = document.querySelectorAll('.section');
            
            rollerCoaster.addEventListener('scroll', () => {
                const scrollTop = rollerCoaster.scrollTop;
                
                sections.forEach((section, index) => {
                    const speed = index % 2 === 0 ? 0.2 : -0.2;
                    const yPos = scrollTop * speed;
                    section.style.transform = `translateY(${yPos}px)`;
                });
            });
        });
        
       
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                @keyframes shake {
                    0% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    50% { transform: translateX(5px); }
                    75% { transform: translateX(-5px); }
                    100% { transform: translateX(5px); }
                }
            </style>
        `);