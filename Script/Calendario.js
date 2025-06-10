
        const events = [
            {
            date: new Date(2025, 3, 11), // 11 de abril de 2025
            title: "Nos conocimos",
            description: "El día que el destino nos unió en un grupo de WhatsApp de la universidad. Aunque no lo sabíamos en ese momento, nuestras vidas estaban a punto de cambiar para siempre. Recuerdo tu mensaje: 'Tu futuro corazón 123', y yo respondí: 'JAJAJAJ si'. Tú, con esa seguridad que tanto admiro, me dijiste: 'Checa y verás'. Ese día marcó el inicio de algo hermoso.."
            },
            {
            date: new Date(2025, 3, 13), // 13 de abril de 2025
            title: "Empezamos a chatear",
            description: "Nuestras primeras conversaciones privadas comenzaron este día. Le diste besitos al suelo hoy, no? Fue el mensaje que lo cambio todo "
            },
            {
            date: new Date(2025, 3, 17), // 17 de abril de 2025
            title: "Mi primer detalle para ti",
            description: "Te sorprendí con una página web que mostraba que éramos 99% compatibles. La forma en la que te emocionas con cada uno de mis detalles es algo que valoro mucho."
            },
            {
            date: new Date(2025, 3, 21), // 21 de abril de 2025
            title: "Nuestra primera llamada",
            description: "Hablamos por más de 10 horas sin darnos cuenta del paso del tiempo. Jugamos Plato y nos reímos como nunca. Desde ese día, nos llamamos todas las noches y nos quedamos dormidos en llamada, con el sonido de tu respiración como mi nana favorita."
            },
            {
            date: new Date(2025, 3, 22), // 22 de abril de 2025
            title: "Racha en TikTok",
            description: "Comenzamos nuestra racha de videos en TikTok, compartiendo momentos divertidos y creando recuerdos digitales juntos. Cada video capturaba un poco más de nuestra creciente complicidad."
            },
            {
            date: new Date(2025, 3, 24), // 24 de abril de 2025
            title: "Me dijiste 'Te quiero' por primera vez",
            description: "Escuchar esas palabras de tus labios hizo que mi corazón se detuviera por un segundo. También programamos juntos por primera vez este día, creando una hermosa carta digital. Fue mágico compartir contigo mi pasión por la programación."
            },
            {
            date: new Date(2025, 3, 25), // 25 de abril de 2025
            title: "Te declaré mi familia para siempre",
            description: "Te abrí mi corazón completamente y te dije que serías mi familia por siempre. En ese momento supe que lo que teníamos era especial, algo que trascendería el tiempo y la distancia."
            },
            {
            date: new Date(2025, 3, 26), // 26 de abril de 2025
            title: "Nos abrimos el uno al otro",
            description: "Compartimos nuestros miedos más profundos, nuestros sueños más grandes y nuestros secretos mejor guardados. La vulnerabilidad que mostramos ese día fortaleció nuestra conexión de una manera que nunca imaginé posible."
            },
            {
            date: new Date(2025, 3, 29), // 29 de abril de 2025
            title: "Te programé un libro digital",
            description: "Pasé horas creando un libro digital que contaba nuestra historia. Cada página estaba llena de recuerdos, promesas y todo el amor que sentía por ti. Además, aprendiste código Morse para sorprenderme con un mensaje especial. Ese detalle me conmovió profundamente."
            }
        ];
        events.push(
            {
            date: new Date(2025, 4, 5), // 5 de mayo de 2025
            title: "Eres mi inspiración",
            description: "Alejandra, cada día contigo me inspiras a ser mejor. Tu sonrisa ilumina mi mundo y tu amor llena mi corazón. ❤"
            },
            {
            date: new Date(2025, 4, 12), // 12 de mayo de 2025
            title: "Mi razón de ser",
            description: "Eres la razón por la que me despierto con una sonrisa. Tu amor me da fuerzas para enfrentar cualquier desafío. Te quiero más de lo que las palabras pueden expresar."
            },
            {
            date: new Date(2025, 4, 18), // 18 de mayo de 2025
            title: "Eres única",
            description: "Alejandra, no hay nadie como tú. Eres única, especial y perfecta para mí. Cada momento contigo es un tesoro que guardo en mi corazón."
            },
            {
            date: new Date(2025, 4, 25), // 25 de mayo de 2025
            title: "Mi estrella brillante",
            description: "Eres mi estrella brillante en las noches más oscuras. Tu amor ilumina mi vida y me guía hacia la felicidad. Te quiero infinitamente."
            },
            {
            date: new Date(2025, 5, 2), // 2 de junio de 2025
            title: "Eres mi todo",
            description: "Alejandra, eres mi todo. Mi compañera, mi amiga, mi amor eterno. No puedo imaginar mi vida sin ti. ❤"
            },
            {
            date: new Date(2025, 5, 10), // 10 de junio de 2025
            title: "Eres mi felicidad",
            description: "Tu risa es la melodía más hermosa que he escuchado. Eres mi felicidad, mi refugio y mi mayor bendición. Te quiero con todo mi ser."
            },
            {
            date: new Date(2025, 5, 15), // 15 de junio de 2025
            title: "Eres mi sueño hecho realidad",
            description: "Alejandra, eres mi sueño hecho realidad. Cada día contigo es una nueva aventura llena de amor y alegría. Gracias por ser tú."
            },
            {
            date: new Date(2025, 5, 20), // 20 de junio de 2025
            title: "Eres mi fortaleza",
            description: "En los momentos difíciles, tu amor me da la fortaleza para seguir adelante. Eres mi roca, mi apoyo y mi mayor bendición."
            },
            {
            date: new Date(2025, 5, 27), // 27 de junio de 2025
            title: "Eres mi razón para sonreír",
            description: "Alejandra, cada vez que pienso en ti, no puedo evitar sonreír. Eres mi alegría, mi amor y mi todo. ❤"
            },
            {
            date: new Date(2025, 6, 3), // 3 de julio de 2025
            title: "Eres mi amor eterno",
            description: "No importa cuánto tiempo pase, mi amor por ti será eterno. Eres mi alma gemela, mi compañera y mi razón."
            }
        );

        let currentDate = new Date(2025, 3, 1); 
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();
        let selectedDate = null;
        let selectedEvent = null;

        const calendarDays = document.getElementById('calendar-days');
        const monthYearElement = document.getElementById('month-year');
        const prevMonthButton = document.getElementById('prev-month');
        const nextMonthButton = document.getElementById('next-month');
        const eventDetailsElement = document.getElementById('event-details');
        const timelineElement = document.querySelector('.timeline');
        const floatingHeartsElement = document.getElementById('floating-hearts');

        function initCalendar() {
            renderCalendar();
            renderTimeline();
            createFloatingHearts();

            prevMonthButton.addEventListener('click', () => {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                }
                renderCalendar();
            });

            nextMonthButton.addEventListener('click', () => {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                }
                renderCalendar();
            });
        }

        function renderCalendar() {
            calendarDays.innerHTML = '';
            
            const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            monthYearElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
            
            const firstDay = new Date(currentYear, currentMonth, 1);
            const lastDay = new Date(currentYear, currentMonth + 1, 0);
            
            const firstDayOfWeek = firstDay.getDay();
            
            const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
            for (let i = firstDayOfWeek - 1; i >= 0; i--) {
                const dayElement = createDayElement(prevMonthLastDay - i, 'other-month');
                calendarDays.appendChild(dayElement);
            }
            
            for (let i = 1; i <= lastDay.getDate(); i++) {
                const date = new Date(currentYear, currentMonth, i);
                let classes = [];
                
                if (date.toDateString() === new Date().toDateString()) {
                    classes.push('today');
                }
                
                const hasEvent = events.some(event => 
                    event.date.getDate() === i && 
                    event.date.getMonth() === currentMonth && 
                    event.date.getFullYear() === currentYear
                );
                
                if (hasEvent) {
                    classes.push('has-event');
                }
                
                if (selectedDate && 
                    selectedDate.getDate() === i && 
                    selectedDate.getMonth() === currentMonth && 
                    selectedDate.getFullYear() === currentYear) {
                    classes.push('selected');
                }
                
                const dayElement = createDayElement(i, classes.join(' '));
                
                dayElement.addEventListener('click', () => {
                    const clickedDate = new Date(currentYear, currentMonth, i);
                    selectDate(clickedDate);
                });
                
                calendarDays.appendChild(dayElement);
            }
            
            const totalDaysDisplayed = calendarDays.children.length;
            const remainingCells = 42 - totalDaysDisplayed; 
            
            for (let i = 1; i <= remainingCells; i++) {
                const dayElement = createDayElement(i, 'other-month');
                calendarDays.appendChild(dayElement);
            }
        }

        function createDayElement(dayNumber, classes) {
            const dayElement = document.createElement('div');
            dayElement.className = `day ${classes}`;
            
            const dayNumberElement = document.createElement('span');
            dayNumberElement.className = 'day-number';
            dayNumberElement.textContent = dayNumber;
            
            dayElement.appendChild(dayNumberElement);
            
            return dayElement;
        }

        function selectDate(date) {
            selectedDate = date;
            renderCalendar();
            
            const eventsForDate = events.filter(event => 
                event.date.getDate() === date.getDate() && 
                event.date.getMonth() === date.getMonth() && 
                event.date.getFullYear() === date.getFullYear()
            );
            
            if (eventsForDate.length > 0) {
                selectedEvent = eventsForDate[0]; 
                showEventDetails(selectedEvent);
            } else {
                showNoEvent(date);
            }
        }

        function showEventDetails(event) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = event.date.toLocaleDateString('es-ES', options);
            
            eventDetailsElement.innerHTML = `
                <div class="event-date">${formattedDate}</div>
                <h3 class="event-title"><span class="heart-icon">❤</span> ${event.title}</h3>
                <p class="event-description">${event.description}</p>
                
            `;
            
            eventDetailsElement.classList.add('active');
            
            eventDetailsElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function showNoEvent(date) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('es-ES', options);
            
            eventDetailsElement.innerHTML = `
                <div class="event-date">${formattedDate}</div>
                <div class="no-event">
                    <p>No hay eventos registrados para esta fecha.</p>
                    <p>Pero cada día contigo es especial, incluso sin un evento marcado en el calendario.</p>
                </div>
            `;
            
            eventDetailsElement.classList.add('active');
        }

        function renderTimeline() {
            const sortedEvents = [...events].sort((a, b) => a.date - b.date);
            
            sortedEvents.forEach((event, index) => {
                const timelineItem = document.createElement('div');
                timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
                
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = event.date.toLocaleDateString('es-ES', options);
                
                timelineItem.innerHTML = `
                    <div class="timeline-content">
                        <div class="timeline-date">${formattedDate}</div>
                        <h3 class="timeline-title">${event.title}</h3>
                        <p class="timeline-text">${event.description}</p>
                    </div>
                `;
                
                timelineElement.appendChild(timelineItem);
            });
        }

        function createFloatingHearts() {
            for (let i = 0; i < 15; i++) {
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
            initCalendar();
            
           
            const firstEventDate = new Date(2025, 3, 11);
            currentMonth = firstEventDate.getMonth();
            currentYear = firstEventDate.getFullYear();
            renderCalendar();
            selectDate(firstEventDate);
        });