   document.getElementById('showMessage').addEventListener('click', function() {
            const message = document.getElementById('specialMessage');
            message.classList.add('show');
            this.style.display = 'none';
            
          
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createHeart();
                }, i * 300);
            }
        });
        
        
        function createHeart() {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            
         
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            
         
            const size = Math.random() * 20 + 10;
            heart.style.width = size + 'px';
            heart.style.height = size + 'px';
            
            heart.style.before = {
                width: size + 'px',
                height: size + 'px'
            };
            
            heart.style.after = {
                width: size + 'px',
                height: size + 'px'
            };
            
        
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            
            document.body.appendChild(heart);
            
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
        
        
        document.getElementById('createHearts').addEventListener('click', function() {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    createFirework();
                }, i * 100);
            }
            
           
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    createHeart();
                }, i * 200);
            }
        });
        
        function createFirework() {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            
            
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 100 + 'vh';
            
          
            const colors = ['#ff9a9e', '#fad0c4', '#e83e8c', '#ff5e94', '#f8bbd0'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            firework.style.boxShadow = `0 0 10px 5px ${color}`;
            
            document.body.appendChild(firework);
            
            
            setTimeout(() => {
                firework.remove();
            }, 1000);
        }
        
        
        document.querySelector('.photo-placeholder').addEventListener('click', function() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.onchange = function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        const img = document.getElementById('photo');
                        img.src = event.target.result;
                        img.classList.remove('hidden');
                        document.querySelector('.photo-placeholder').classList.add('hidden');
                    };
                    reader.readAsDataURL(file);
                }
            };
            
            input.click();
        });
        
      
        window.addEventListener('load', function() {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createHeart();
                }, i * 1000);
            }
        });