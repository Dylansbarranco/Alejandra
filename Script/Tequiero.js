function createFloatingHearts() {
            const floatingHeartsElement = document.getElementById('floating-hearts');
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.className = 'heart';
                    
                    
                    const left = Math.random() * 100;
                    heart.style.left = `${left}%`;
                    
                  
                    const size = Math.random() * 15 + 10;
                    heart.style.width = `${size}px`;
                    heart.style.height = `${size}px`;
                    
                    
                    const duration = Math.random() * 10 + 10;
                    heart.style.animation = `floatHeart ${duration}s linear infinite`;
                    
                  
                    heart.style.animationDelay = `${Math.random() * 10}s`;
                    
                 
                    heart.style.opacity = Math.random() * 0.5 + 0.1;
                    
                    floatingHeartsElement.appendChild(heart);
                }, i * 200);
            }
        }

        
        document.addEventListener('DOMContentLoaded', function() {
            createFloatingHearts();
            
     
            const cards = document.querySelectorAll('.love-card');
            cards.forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
            });
        });