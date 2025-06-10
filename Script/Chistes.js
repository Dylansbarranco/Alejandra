 // Elementos del DOM
        const messageBox = document.getElementById('messageBox');
        const categoryButtons = document.querySelectorAll('.category-btn');
        const surpriseBtn = document.getElementById('surpriseBtn');
        const surpriseBox = document.getElementById('surpriseBox');
        const closeSurprise = document.getElementById('closeSurprise');
        const emojiRain = document.getElementById('emojiRain');
        
        // Mensajes por categoría
        const messages = {
            cumplidos: [
                "Tu sonrisa ilumina hasta el día más oscuro. ¡Es mi favorita en todo el mundo!",
                "Eres tan hermosa por dentro como por fuera, y eso te hace única.",
                "Tu forma de ver el mundo me inspira a ser mejor persona cada día.",
                "Admiro tu fortaleza y cómo enfrentas los desafíos con tanta valentía.",
                "Tu inteligencia, forma de pensar me deja sin palabras.",
                "Tienes el don de hacer sentir especial a cualquiera que esté a tu lado.",
                "Eres el pensamiento más bonito que tengo cada mañana al despertar y claro, al irme a dormir.",
                "Tu risa es mi sonido favorito en todo el universo.",
                "Me distraigo muy facil viendote cuando estamos en video llamada.",
                "Eres el sueño que nunca supe que tenía hasta que te conocí.",
                "Eres esa oracion que nunca hice, pero aqui estas, te quiero mucho ❤️"
            ],
            chistes: [
                "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter 🐦",
                "¿Qué le dice un pez a otro? Nada 🐠",
                "¿Sabes por qué no se puede confiar en los árboles? Porque tienen muchas ramas 🌳",
                "¿Qué hace una abeja en el gimnasio? ¡Zum-ba! 🐝",
                "¿Por qué las focas del circo miran hacia arriba? Porque es donde están los focos 🎪",
                "¿Cómo se llama el campeón de buceo japonés? Tokofondo 🏊‍♂️",
                "¿Qué le dice un semáforo a otro? No me mires que me estoy cambiando 🚦",
                "¿Por qué los esqueletos no pelean entre ellos? Porque no tienen agallas ☠️",
                "¿Qué hace una vaca cuando se ríe? Leche con chocolate, porque se le sacude el Nesquik 🐄",
                "¿Qué le dice un jaguar a otro jaguar? Jaguar you 🐆"
            ],
            razones: [
                "Me encanta cómo sonríes cuando estás feliz.",
                "Me encanta cómo tus ojos brillan cuando me miras.",
                "Me encanta la forma en que dices mi nombre.",
                "Me encanta tu honestidad, incluso cuando es difícil.",
                "Me encanta tu risa contagiosa.",
                "Me encanta cómo me escuchas de verdad.",
                "Me encanta tu inteligencia que me desafía.",
                "Me encanta tu y solo  tu.",
                "Me encanta como me hacer ser.",
                "Me encanta tu vulnerabilidad cuando te abres conmigo."
            ],
            recuerdos: [
                "¿Recuerdas nuestra primera conversación? Yo la guardo como un tesoro.",
                "Nunca olvidare ese 22 de abril cuando hicimos llamada por primera vez.",
                "Pienso mucho en ese dia que nos abrimos por primera vez.",
                "Atesoro cada mensaje que me has enviado, especialmente cuando más lo necesitaba.",
                "Siempre sonrío al recordar cómo nos empezamos a conocer",
                "Ese dia que hicismo racha por tick tock.",
                "Las horas hablando contigo pasan volando, y cada una es un recuerdo precioso.",
                "Cuando pienso en momentos felices, tú estás en la mayoría de ellos.",
                "Nunca olvidare que eres un tomate.",
                "Cada recuerdo contigo es como una estrella en mi cielo personal."
            ]
        };
        
        // Emojis para la lluvia
        const emojis = ["❤️", "😊", "🥰", "💕", "💖", "✨", "🌟", "💫", "🎵", "🎶", "🦋", "🌈", "🌺", "🌸", "🍭"];
        
        // Colores para los confetis
        const confettiColors = [
            "#ff9a9e", "#fad0c4", "#e83e8c", "#ff5e94", "#f8bbd0", 
            "#a1c4fd", "#c2e9fb", "#ffecd2", "#fcb69f", "#fd868c"
        ];
        
        // Evento para los botones de categoría
        categoryButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.dataset.category;
                const messageList = messages[category];
                const randomMessage = messageList[Math.floor(Math.random() * messageList.length)];
                
                // Mostrar el mensaje
                messageBox.innerHTML = randomMessage;
                
                // Crear corazones flotantes
                createFloatingHearts();
                
                // Cambiar color del mensaje según la categoría
                switch(category) {
                    case 'cumplidos':
                        messageBox.style.color = '#e83e8c';
                        break;
                    case 'chistes':
                        messageBox.style.color = '#4a148c';
                        break;
                    case 'razones':
                        messageBox.style.color = '#0277bd';
                        break;
                    case 'recuerdos':
                        messageBox.style.color = '#00695c';
                        break;
                }
            });
        });
        
        // Evento para el botón de sorpresa
        surpriseBtn.addEventListener('click', function() {
            surpriseBox.style.opacity = 1;
            surpriseBox.style.pointerEvents = 'auto';
            
            // Crear lluvia de emojis
            startEmojiRain();
            
            // Crear confeti
            createConfetti();
        });
        
        // Cerrar la sorpresa
        closeSurprise.addEventListener('click', function() {
            surpriseBox.style.opacity = 0;
            surpriseBox.style.pointerEvents = 'none';
            
            // Detener lluvia de emojis
            emojiRain.style.display = 'none';
            emojiRain.innerHTML = '';
        });
        
        // Función para crear corazones flotantes
        function createFloatingHearts() {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('floating-heart');
                    heart.innerHTML = '❤️';
                    
                    // Posición aleatoria
                    const leftPos = Math.random() * 100;
                    heart.style.left = leftPos + '%';
                    
                    // Tamaño aleatorio
                    const size = Math.random() * 1 + 0.5;
                    heart.style.fontSize = size + 'rem';
                    
                    // Duración aleatoria
                    const duration = Math.random() * 3 + 2;
                    heart.style.animationDuration = duration + 's';
                    
                    messageBox.appendChild(heart);
                    
                    // Eliminar después de la animación
                    setTimeout(() => {
                        if (heart.parentNode === messageBox) {
                            messageBox.removeChild(heart);
                        }
                    }, duration * 1000);
                }, i * 300);
            }
        }
        
        // Función para iniciar la lluvia de emojis
        function startEmojiRain() {
            emojiRain.style.display = 'block';
            emojiRain.innerHTML = '';
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    createEmojiDrop();
                }, i * 200);
            }
        }
        
        // Función para crear una gota de emoji
        function createEmojiDrop() {
            const emoji = document.createElement('div');
            emoji.classList.add('emoji');
            
            // Emoji aleatorio
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.innerHTML = randomEmoji;
            
            // Posición aleatoria
            const leftPos = Math.random() * 100;
            emoji.style.left = leftPos + '%';
            
            // Tamaño aleatorio
            const size = Math.random() * 1 + 1;
            emoji.style.fontSize = size + 'rem';
            
            // Duración aleatoria
            const duration = Math.random() * 3 + 3;
            emoji.style.animationDuration = duration + 's';
            
            // Retraso aleatorio
            const delay = Math.random() * 5;
            emoji.style.animationDelay = delay + 's';
            
            emojiRain.appendChild(emoji);
            
            // Eliminar después de la animación
            setTimeout(() => {
                if (emoji.parentNode === emojiRain) {
                    emojiRain.removeChild(emoji);
                }
            }, (duration + delay) * 1000);
        }
        
        // Función para crear confeti
        function createConfetti() {
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti');
                    
                    // Posición aleatoria
                    const leftPos = Math.random() * 100;
                    confetti.style.left = leftPos + '%';
                    
                    // Tamaño aleatorio
                    const size = Math.random() * 8 + 5;
                    confetti.style.width = size + 'px';
                    confetti.style.height = size + 'px';
                    
                    // Color aleatorio
                    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                    confetti.style.backgroundColor = color;
                    
                    // Forma aleatoria
                    const shapes = ['circle', 'square', 'rectangle'];
                    const shape = shapes[Math.floor(Math.random() * shapes.length)];
                    
                    if (shape === 'circle') {
                        confetti.style.borderRadius = '50%';
                    } else if (shape === 'rectangle') {
                        confetti.style.width = size * 2 + 'px';
                    }
                    
                    // Duración aleatoria
                    const duration = Math.random() * 3 + 2;
                    confetti.style.animationDuration = duration + 's';
                    
                    document.body.appendChild(confetti);
                    
                    // Eliminar después de la animación
                    setTimeout(() => {
                        if (confetti.parentNode === document.body) {
                            document.body.removeChild(confetti);
                        }
                    }, duration * 1000);
                }, i * 50);
            }
        }
        
        // Crear algunos corazones flotantes al cargar la página
        window.addEventListener('load', function() {
            setTimeout(() => {
                createFloatingHearts();
            }, 1000);
        });