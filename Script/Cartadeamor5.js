 document.addEventListener('DOMContentLoaded', function() {
            const card = document.getElementById('card');
            const sparklesContainer = document.getElementById('sparkles');
            const heartsContainer = document.getElementById('hearts');
            const celebrateButton = document.getElementById('celebrateButton');
            
       
            function createSparkle() {
                const sparkle = document.createElement('div');
                sparkle.classList.add('sparkle');
                
             
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                sparkle.style.left = `${x}%`;
                sparkle.style.top = `${y}%`;
                
         
                const size = 10 + Math.random() * 15;
                sparkle.style.width = `${size}px`;
                sparkle.style.height = `${size}px`;
                
                
                sparkle.style.animation = `sparkle ${1 + Math.random()}s forwards`;
                
                sparklesContainer.appendChild(sparkle);
                
                
                setTimeout(() => {
                    sparkle.remove();
                }, 2000);
            }
            
        
            function createHeart() {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                heart.style.left = `${x}%`;
                heart.style.top = `${y}%`;
                
                const size = 15 + Math.random() * 20;
                heart.style.width = `${size}px`;
                heart.style.height = `${size}px`;
                
                
                heart.style.animation = `heartBeat ${1 + Math.random()}s infinite`;
                heart.style.opacity = '0';
                
                setTimeout(() => {
                    heart.style.opacity = '0.7';
                }, Math.random() * 500);
                
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.style.opacity = '0';
                    setTimeout(() => {
                        heart.remove();
                    }, 1000);
                }, 3000 + Math.random() * 2000);
            }
            
            setInterval(createSparkle, 300);
            
            celebrateButton.addEventListener('click', function() {
                for (let i = 0; i < 20; i++) {
                    setTimeout(() => {
                        createHeart();
                    }, i * 100);
                }
                
                card.style.transition = 'transform 1s ease';
                card.style.transform = 'rotateY(360deg)';
                
                setTimeout(() => {
                    card.style.transform = 'rotateY(0)';
                }, 1000);
            });
            
            card.addEventListener('mousemove', function(e) {
                const x = e.clientX - card.getBoundingClientRect().left;
                const y = e.clientY - card.getBoundingClientRect().top;
                
                const centerX = card.offsetWidth / 2;
                const centerY = card.offsetHeight / 2;
                
                const angleX = (y - centerY) / 20;
                const angleY = (centerX - x) / 20;
                
                card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            });
            
            card.addEventListener('mouseleave', function() {
                card.style.transform = 'rotateX(0) rotateY(0)';
            });
        });