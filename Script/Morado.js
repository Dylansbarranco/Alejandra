  function createHearts() {
            const heartsContainer = document.getElementById('hearts');
            const numberOfHearts = 15;
            
            for (let i = 0; i < numberOfHearts; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                
            
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const size = Math.random() * 15 + 10;
                
                heart.style.left = left + 'vw';
                heart.style.animationDelay = delay + 's';
                heart.style.width = size + 'px';
                heart.style.height = size + 'px';
                
                heartsContainer.appendChild(heart);
            }
        }
        
       
        window.addEventListener('load', createHearts);
        
      
        document.querySelector('.action-button').addEventListener('click', function() {
            this.textContent = 'Enviando mensaje...';
            setTimeout(() => {
                this.textContent = 'Volver a hablar contigo';
            }, 2000);
        });