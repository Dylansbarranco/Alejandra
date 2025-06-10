 
        const heartsContainer = document.getElementById('hearts');
        const colors = ['#ff6b6b', '#f06595', '#cc5de8', '#5c7cfa', '#339af0'];
        const symbols = ['♪', '♫', '🎵', '🎶', '🎼'];
        
        function createHearts() {
            for (let i = 0; i < 20; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 6 + 3) + 's';
                heart.style.animationDelay = Math.random() * 5 + 's';
                heart.style.color = colors[Math.floor(Math.random() * colors.length)];
                heartsContainer.appendChild(heart);
            }
        }
        
        createHearts();
        
   
        document.querySelector('.btn').addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        document.querySelector('.btn').addEventListener('mouseup', function() {
            this.style.transform = 'scale(1.05)';
        });