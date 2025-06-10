 const riddles = [
            {
                question: "En un grupo de mensajes nos conocimos, ¿recuerdas la fecha de ese primer encuentro virtual?",
                answer: ["11 de abril", "11 abril", "11/04", "abril 11", "11 De Abril", "11 Abril", "11/04", "Abril 11"],
                hint: "Fue en abril, un día antes de que se celebre el Día del Niño en algunos países."
            },
            {
                question: "Dos días después de conocernos, algo especial comenzó. ¿Qué fecha marca el verdadero inicio de nuestra historia?",
                answer: ["13 de abril", "13 abril", "13/04", "abril 13", "13 De Abril", "13 Abril", "13/04", "Abril 13"],
                hint: "Fue cuando decidimos hablar en privado, dejando atrás el grupo donde nos conocimos."
            },
            {
                question: "Un color nos une, tanto a ti como a mí. ¿Cuál es ese tono que ambos preferimos?",
                answer: ["morado", "purpura", "lila", "violeta", "Morado", "Purpura", "Lila", "Violeta"],
                hint: "Es un color asociado con la realeza, la creatividad y la magia."
            },
            {
                question: "Mi antojo favorito lleva queso encima, ¿cuál es ese snack que tanto disfruto?",
                answer: ["tajaditas con queso", "tajaditas", "tajadas con queso", "tajadas", "Tajaditas con queso", "Tajaditas", "Tajadas con queso", "Tajadas"],
                hint: "Son crujientes y deliciosas, especialmente cuando están cubiertas de queso derretido."
            },
            {
                question: "Hay una palabra que mencionas muy seguido y que me encanta mucho. ¿Cuál es?",
                answer: ["es to", "esto", "Es to", "Esto"],
                hint: "Es una expresión corta que usas para señalar algo o enfatizar."
            },
            {
                question: "Cada noche, antes de dormir, compartimos algo importante. ¿Qué ritual diario mantenemos sin falta?",
                answer: ["contarnos nuestro dia", "contar nuestro dia", "hablar del dia", "contarnos el dia", "contar el dia", "contarnos lo que hicimos", "Contarnos nuestro dia", "Contar nuestro dia", "Hablar del dia", "Contarnos el dia", "Contar el dia", "Contarnos lo que hicimos"],
                hint: "Es una forma de mantenernos conectados a pesar de la distancia, compartiendo las experiencias de cada uno."
            },
            {
                question: "En un juego tenemos una relación especial. ¿Cómo me llamas en ese juego llamado Plato?",
                answer: ["PAPA", "papi", "papa", "papito", "Papi", "Papito"],
                hint: "Es un término que indica una relación familiar, aunque no sea real."
            },
            {
                question: "Tengo una costumbre digital que te hace sonreír. ¿Qué te envío constantemente sin motivo aparente?",
                answer: ["fotos", "fotos random", "fotos aleatorias", "imagenes", "imagenes random", "Fotos", "Fotos random", "Fotos aleatorias", "Imagenes", "Imagenes random"],
                hint: "Capturas visuales de momentos, lugares o cosas que quiero compartir contigo."
            },
            {
                question: "La primera película que vimos juntos nos llevó a una aventura con globos de colores. ¿Cuál fue ese film?",
                answer: ["up", "up una aventura en las alturas", "up una aventura en las nubes", "una aventura en las alturas", "Up", "Up una aventura en las alturas", "Up una aventura en las nubes", "Una aventura en las alturas"],
                hint: "Una película de Pixar sobre un anciano que ata globos a su casa para volar a Sudamérica."
            },
            {
                question: "Cada noche, mientras hablamos, algo sucede que muestra nuestra confianza. ¿Qué hacemos juntos aunque estemos lejos?",
                answer: ["quedarnos dormidos", "dormir juntos", "dormir en llamada", "quedarnos dormidos en llamada", "dormimos en llamada", "dormimos juntos", "Quedarnos dormidos", "Dormir juntos", "Dormir en llamada", "Quedarnos dormidos en llamada", "Dormimos en llamada", "Dormimos juntos"],
                hint: "Cerramos los ojos mientras seguimos conectados, como si estuviéramos en la misma habitación."
            },
            {
                question: "Para ti soy algo muy especial, un refugio emocional. ¿Qué represento para ti según me has dicho?",
                answer: ["lugar seguro", "mi lugar seguro", "un lugar seguro", "mi refugio", "refugio", "Lugar seguro", "Mi lugar seguro", "Un lugar seguro", "Mi refugio", "Refugio"],
                hint: "Un espacio donde te sientes protegida y puedes ser tú misma sin temor."
            },
            {
                question: "Compartimos una pasión por la actividad física. ¿Qué nos gusta hacer para mantenernos en forma?",
                answer: ["gym", "gimnasio", "ejercicio", "entrenar", "hacer ejercicio", "Gym", "Gimnasio", "Ejercicio", "Entrenar", "Hacer ejercicio"],
                hint: "Un lugar con pesas, máquinas y mucho sudor."
            },
            {
                question: "Además del ejercicio, nos une la pasión por los vehículos de dos ruedas. ¿Cuáles son?",
                answer: ["motos", "motocicletas", "moto", "motocicleta", "Motos", "Motocicletas", "Moto", "Motocicleta"],
                hint: "Vehículos que nos dan sensación de libertad y adrenalina al conducirlos."
            },
            {
                question: "¿Qué tipo de regalos suelo darte que representan lo especial que eres para mí?", 
                answer: ["pagina", "cartas", "flores", "regalos personalizados", "sorpresas", "html", "Pagina", "Cartas", "Flores", "Regalos personalizados", "Sorpresas", "Html"],
                hint: "Son cosas que hago o elijo con mucho cariño, pensando en ti y en lo que te gusta."
            },
            {
                question: "¿Qué es lo que más me gusta de ti, considerando que todo en general me encanta de ti?",
                answer: ["todo", "todo de mi", "todo en general", "todo de ti", "Todo", "Todo de mi", "Todo en general", "Todo de ti"],
                hint: "Es una respuesta sencilla, porque no hay nada que no me guste de ti."
            },
            {
                question: "Si tuviera que definir qué es lo que más valoro de nuestra relación, sería la...",
                answer: ["confianza", "comunicacion", "honestidad", "sinceridad", "lealtad", "Confianza", "Comunicacion", "Honestidad", "Sinceridad", "Lealtad"],
                hint: "La base de cualquier relación sólida, especialmente a distancia."
            },
            {
                question: "¿Cuál fue el primer apodo cariñoso que te di?",
                answer: ["amor", "mi amor", "bebe", "mi bebe", "hermosa", "linda", "chica taekwondo", "Amor", "Mi amor", "Bebe", "Mi bebe", "Hermosa", "Linda", "Chida taekwondo"],
                hint: "Una palabra dulce que expresa mi cariño hacia ti."
            },
            {
                question: "Solo para no olvidarlo nunca, ¿quién es la persona que más me encanta en este mundo?",
                answer: ["yo", "mi amor", "alejita", "alejandra", "Yo", "Mi amor", "Alejita", "Alejandra"],
                hint: "Tiene nombre y apellido. Es la razón por la que sonrío cada día."
            },
            {
                question: "¿Qué frase o palabra usamos para despedirnos antes de dormir?",
                answer: ["te quiero", "buenas noches", "dulces sueños", "descansa", "hasta mañana", "Te quiero", "Buenas noches", "Dulces sueños", "Descansa", "Hasta mañana"],
                hint: "Las últimas palabras que nos decimos cada noche."
            },
            {
                question: "¿Cuál es nuestro plan o sueño más grande para el futuro?",
                answer: ["conocernos", "vernos", "estar juntos", "vivir juntos", "viajar juntos", "encontrarnos", "Conocernos", "Vernos", "Estar juntos", "Vivir juntos", "Viajar juntos", "Encontrarnos"],
                hint: "Lo que más anhelamos a pesar de la distancia que nos separa."
            }
        ];

    
        let currentRiddle = 0;
        let solvedRiddles = [];
        
     
        const startBtn = document.getElementById('start-btn');
        const intro = document.getElementById('intro');
        const gameContainer = document.getElementById('game-container');
        const riddleText = document.getElementById('riddle-text');
        const riddleNumber = document.getElementById('riddle-number');
        const answerInput = document.getElementById('answer-input');
        const checkBtn = document.getElementById('check-btn');
        const hintBtn = document.getElementById('hint-btn');
        const hintText = document.getElementById('hint-text');
        const feedback = document.getElementById('feedback');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const riddleList = document.getElementById('riddle-list');
        const progressText = document.getElementById('progress-text');
        const progressBar = document.getElementById('progress-bar');
        const finalMessage = document.getElementById('final-message');

        
        startBtn.addEventListener('click', () => {
            intro.style.display = 'none';
            gameContainer.style.display = 'flex';
            initGame();
        });

        function initGame() {

            for (let i = 0; i < riddles.length; i++) {
                const btn = document.createElement('button');
                btn.className = 'riddle-btn';
                btn.textContent = i + 1;
                btn.addEventListener('click', () => {
                    goToRiddle(i);
                });
                riddleList.appendChild(btn);
            }

          
            updateRiddleButtons();
            
           
            showRiddle(currentRiddle);
        }

        
        function showRiddle(index) {
            riddleNumber.textContent = index + 1;
            riddleText.textContent = riddles[index].question;
            answerInput.value = '';
            feedback.style.display = 'none';
            hintText.style.display = 'none';
            
           
            prevBtn.disabled = index === 0;
            nextBtn.disabled = index === riddles.length - 1;
            
           
            updateRiddleButtons();
            
         
            answerInput.focus();
            
           
            currentRiddle = index;
        }

     
        checkBtn.addEventListener('click', checkAnswer);
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });

        function checkAnswer() {
            const userAnswer = answerInput.value.trim().toLowerCase();
            const correctAnswers = riddles[currentRiddle].answer;
            
            let isCorrect = false;
            
            if (Array.isArray(correctAnswers)) {
                isCorrect = correctAnswers.some(answer => 
                    userAnswer.includes(answer.toLowerCase()) || 
                    answer.toLowerCase().includes(userAnswer)
                );
            } else {
                isCorrect = userAnswer.includes(correctAnswers.toLowerCase()) || 
                           correctAnswers.toLowerCase().includes(userAnswer);
            }
            
            
            feedback.className = isCorrect ? 'feedback correct' : 'feedback incorrect';
            feedback.textContent = isCorrect ? 
                '¡Correcto! Has desbloqueado este recuerdo especial de nuestra historia.' : 
                'Mmm, no es exactamente lo que tenía en mente. Intenta de nuevo o pide una pista, mi amor.';
            feedback.style.display = 'block';
            
            
            if (isCorrect && !solvedRiddles.includes(currentRiddle)) {
                solvedRiddles.push(currentRiddle);
                updateProgress();
                createConfetti();
                
               
                updateRiddleButtons();
                
               
                if (solvedRiddles.length === riddles.length) {
                    setTimeout(() => {
                        finalMessage.style.display = 'block';
                        createManyConfetti();
                    }, 1000);
                }
            }
        }

    
        hintBtn.addEventListener('click', () => {
            hintText.textContent = riddles[currentRiddle].hint;
            hintText.style.display = 'block';
        });

   
        prevBtn.addEventListener('click', () => {
            if (currentRiddle > 0) {
                showRiddle(currentRiddle - 1);
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentRiddle < riddles.length - 1) {
                showRiddle(currentRiddle + 1);
            }
        });

       
        function goToRiddle(index) {
            showRiddle(index);
        }

       
        function updateRiddleButtons() {
            const buttons = riddleList.querySelectorAll('.riddle-btn');
            
            buttons.forEach((btn, index) => {
                btn.classList.remove('active', 'solved');
                
                if (index === currentRiddle) {
                    btn.classList.add('active');
                }
                
                if (solvedRiddles.includes(index)) {
                    btn.classList.add('solved');
                }
            });
        }

       
        function updateProgress() {
            const percentage = (solvedRiddles.length / riddles.length) * 100;
            progressBar.style.width = `${percentage}%`;
            progressText.textContent = `${solvedRiddles.length} de ${riddles.length} acertijos resueltos`;
        }

        
        function createConfetti() {
            for (let i = 0; i < 30; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                
             
                const colors = ['#f39c12', '#e74c3c', '#3498db', '#2ecc71', '#9b59b6'];
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
             
                confetti.style.left = `${Math.random() * 100}%`;
                
               
                const size = Math.random() * 8 + 6;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                
                
                const duration = Math.random() * 3 + 2;
                confetti.style.animation = `confetti ${duration}s ease-in-out forwards`;
                
                document.body.appendChild(confetti);
                
               
                setTimeout(() => {
                    document.body.removeChild(confetti);
                }, duration * 1000);
            }
        }
        function createManyConfetti() {
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    createConfetti();
                }, i * 100);
            }
        }