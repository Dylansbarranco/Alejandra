function createHearts() {
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const heart = document.createElement('div');
          heart.innerHTML = '❤️';
          heart.className = 'heart';
          heart.style.left = `${Math.random() * 100}%`;
          heart.style.fontSize = `${10 + Math.random() * 20}px`;
          heart.style.animationDuration = `${15 + Math.random() * 10}s`;
          heart.style.animationDelay = `${Math.random() * 5}s`;
          document.body.appendChild(heart);
          
        
          setTimeout(() => {
            heart.remove();
          }, 25000);
        }, i * 1000);
      }
    }

 
    function createParticles() {
      const particleInterval = setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 15 + 5;
        const hue = Math.random() * 60 + 330; 
        const lightness = Math.random() * 30 + 60;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = `hsl(${hue}, 100%, ${lightness}%)`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        document.body.appendChild(particle);
        

        setTimeout(() => {
          particle.remove();
        }, 10000);
      }, 400);
      
      return particleInterval;
    }


    function showMessages() {
      const messages = document.querySelectorAll('.message');
      let currentIndex = 0;
      

      setTimeout(() => {
        messages[0].classList.add('active');
      }, 2500);
      

      const messageInterval = setInterval(() => {
        if (currentIndex < messages.length - 1) {
          messages[currentIndex].classList.remove('active');
          currentIndex++;
          messages[currentIndex].classList.add('active');
          
       
          if (currentIndex === messages.length - 1) {
            setTimeout(() => {
              document.querySelector('.yes-button').classList.add('show');
              document.querySelector('.signature').classList.add('show');
            }, 1000);
          }
        } else {
          clearInterval(messageInterval);
        }
      }, 3000);
      
      return messageInterval;
    }

   
    let particleInterval;
    let messageInterval;
    
    function startAnimation() {
    
      createHearts();
      
  
      particleInterval = createParticles();
      
     
      messageInterval = showMessages();
      
      
      document.querySelector('.yes-button').addEventListener('click', function() {
        alert('"Es to" ¡Qué felicidad! 💖');
      });
    }
   
    function restartAnimation() {
      clearInterval(particleInterval);
      clearInterval(messageInterval);
      
      const messages = document.querySelectorAll('.message');
      messages.forEach(msg => msg.classList.remove('active'));
      
      document.querySelector('.yes-button').classList.remove('show');
      document.querySelector('.signature').classList.remove('show');
      
      document.querySelectorAll('.heart, .particle').forEach(el => el.remove());
      
      setTimeout(startAnimation, 500);
    }
    
    window.addEventListener('load', startAnimation);