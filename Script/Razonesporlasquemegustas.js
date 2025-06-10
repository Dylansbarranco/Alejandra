 // Configuración y datos
        const CONFIG = {
            AUTOPLAY_INTERVAL: 5000,
            STARS_COUNT: 200,
            PRELOAD_IMAGES: true
        };
        
        // Array con tus fotos y mensajes (las primeras 54 razones)
        const photosAndMessages = [
            {
                photo: "https://i.pinimg.com/736x/72/c4/dd/72c4dd6a2952a7f5ba094e3dc9d32c99.jpg",
                message: "Me encanta tu sonrisa, es como ver una supernova iluminando todo el universo."
            },
            {
                photo: "https://i.pinimg.com/736x/db/bb/61/dbbb616599bd9a63f6a7f9b5092e872d.jpg",
                message: "Tus ojos brillan más que todas las estrellas de la Vía Láctea juntas."
            },
            {
                photo: "https://i.pinimg.com/736x/a9/ee/04/a9ee0493320c1e66dc4abc8185aeb072.jpg",
                message: "Tu belleza es como una galaxia inexplorada, siempre descubro algo nuevo que me maravilla."
            },
            {
                photo: "https://i.pinimg.com/736x/f9/9b/43/f99b43af12bfb77215147364d2c9b94c.jpg",
                message: "Cuando te miro, siento que he encontrado mi lugar en el cosmos."
            },
            {
                photo: "https://i.pinimg.com/736x/30/d8/45/30d84565308670b9c1cef7e5f94f9577.jpg",
                message: "El sonido de tu risa es como música interestelar que alegra mi corazón."
            },
            {
                photo: "https://i.pinimg.com/736x/32/b2/6a/32b26a13441bbd77f4847baaa290de86.jpg",
                message: "Eres mi estrella polar, siempre me guías en la dirección correcta."
            },
            {
                photo: "https://i.pinimg.com/736x/c4/63/11/c463118d1d397df80ec01573ac7a50ff.jpg",
                message: "Tu inteligencia brilla como un quásar en la oscuridad del espacio."
            },
            {
                photo: "https://i.pinimg.com/736x/b7/0e/d3/b70ed3a6df4b52be7a1c111cb08665cd.jpg",
                message: "Contigo, cada día es una nueva aventura espacial que quiero explorar."
            },
            {
                photo: "https://i.pinimg.com/736x/0f/19/e1/0f19e1c3f9456c1471a2cf0164f56751.jpg",
                message: "Tu forma de ver el mundo es tan única como una constelación irrepetible."
            },
            {
                photo: "https://i.pinimg.com/736x/d2/42/62/d2426269201e99785bb57c1eca83694f.jpg",
                message: "Eres el centro de mi universo, todo gira alrededor tuyo."
            },
            {
                photo: "https://i.pinimg.com/736x/f1/90/56/f19056ef0568aca0a2d74c928da21d04.jpg",
                message: "Eres todo lo que siempre he deseado, como un planeta perfecto en el espacio."
            },
            {
                photo: "https://i.pinimg.com/736x/30/c8/a3/30c8a3f198c52c8a0273bc113b180777.jpg",
                message: "Tu ternura derrite cualquier planeta helado."
            },
            {
                photo: "https://i.pinimg.com/736x/1f/73/93/1f73938f9b9e92277d8bd22582a67489.jpg",
                message: "Tu existencia es mi lugar seguro, aunque esté a mil kilómetros de distancia."
            },
            {
                photo: "https://i.pinimg.com/736x/02/b4/d5/02b4d5f2eaebcca5c0683f79a0ae14fa.jpg",
                message: "Eres el pensamiento que ilumina cada rincón de mi mente."
            },
            {
                photo: "https://i.pinimg.com/736x/f9/88/97/f9889773511e7b78ef52a89ce1770d87.jpg",
                message: "Eres el motivo por el que cada mañana vale la pena."
            },
            {
                photo: "https://i.pinimg.com/736x/54/c0/38/54c038b039f0899f83b0b30636ce1365.jpg",
                message: "Eres mi señal estable en un mundo de conexiones inestables."
            },
            {
                photo: "https://i.pinimg.com/736x/09/69/50/0969506ec79cd15cff8052696049f6b4.jpg",
                message: "Eres la melodía que acompaña todos mis momentos en silencio."
            },
            {
                photo: "https://i.pinimg.com/736x/22/d3/f7/22d3f7b07db06352403c26f81f8e30a7.jpg",
                message: "Eres la estrella que siempre encuentro"
            },
            {
                photo: "https://i.pinimg.com/736x/56/0b/d5/560bd5b21b51af9d95358eb86b6011ef.jpg",
                message: "Eres el motivo por el cual incluso la distancia se siente bonita."
            },
            {
                photo: "https://i.pinimg.com/736x/d8/fb/bc/d8fbbc759cc0ad7cd29fc1ab69d86f03.jpg",
                message: "Eres mi rincón favorito del universo, aunque esté a kilómetros de mí"
            },
            {
                photo: "https://i.pinimg.com/736x/7e/fd/14/7efd145ec97a060e06528ab740f92c07.jpg",
                message: "Eres el recuerdo constante que convierte mi presente en poesía."
            },
            {
                photo: "https://i.pinimg.com/736x/b4/12/7b/b4127bfbc3e36b811bc5486187f1b687.jpg",
                message: "Eres mi cielo despejado en días de tormenta emocional."
            },
            {
                photo: "https://i.pinimg.com/736x/c6/bc/3c/c6bc3c3a31f65bcb229f55ed2007de08.jpg",
                message: "Eres la razón por la que sonrío sin razón aparente."
            },
            {
                photo: "https://i.pinimg.com/736x/5a/a9/6d/5aa96d8f4ed2a51956c2b306a0b9207b.jpg",
                message: "Eres mi aurora boreal personal: única, rara y absolutamente maravillosa."
            },
            {
                photo: "https://i.pinimg.com/736x/4e/5b/3f/4e5b3f80ef1701b4376826cafd984493.jpg",
                message: "Eres la chispa que enciende mi día desde cualquier lugar del mundo."
            },
            {
                photo: "https://i.pinimg.com/736x/ce/fd/50/cefd50b09a07930da0d7edd0eed60189.jpg",
                message: "Eres ese pensamiento bonito que se cuela entre mis tareas diarias."
            },
            {
                photo: "https://i.pinimg.com/736x/42/0a/7e/420a7e246e5ae0eac9b18588bcc77fbe.jpg",
                message: "Eres el poema que mi alma recita cuando te piensa."
            },
            {
                photo: "https://i.pinimg.com/736x/ef/e7/e2/efe7e2156f6c7a309e69c6f71723961f.jpg",
                message: "Eres mi punto de partida y también mi destino."
            },
            {
                photo: "https://i.pinimg.com/736x/1e/6d/5d/1e6d5d45098fd60a84ffb9e7d2134c2d.jpg",
                message: "Eres esa presencia que se siente sin estar, pero que nunca se va."
            },
            {
                photo: "https://i.pinimg.com/736x/be/c3/a0/bec3a06370b3147f5a1b807d684987ca.jpg",
                message: "Eres el milagro de todos mis días comunes."
            },
            {
                photo: "https://i.pinimg.com/736x/c2/5e/2f/c25e2f12da2ec383dbf67889a9441409.jpg",
                message: "Eres la explicación científica de mi felicidad."
            },
            {
                photo: "https://i.pinimg.com/736x/95/78/e5/9578e588492a24b6c8cf353d14decc41.jpg",
                message: "Eres mi astronauta favorito en esta misión a largo plazo llamada amor."
            },
            {
                photo: "https://i.pinimg.com/736x/18/a7/07/18a70740113a86bfceb97b5985d37b51.jpg",
                message: "Eres ese pensamiento bonito que se cuela entre mis tareas diarias."
            },
            {
                photo: "https://i.pinimg.com/736x/4c/60/59/4c60594619127e67604e9d9340a8a2f9.jpg",
                message: "Eres el satélite que siempre orbita mi corazón."
            },
            {
                photo: "https://i.pinimg.com/736x/bb/0b/25/bb0b257d19beff370917a38192a958bc.jpg",
                message: "Eres esa coordenada que siempre marca 'hogar'."
            },
            {
                photo: "https://i.pinimg.com/736x/2d/d1/74/2dd17498956858f083bbcecccdbd9499.jpg",
                message: "Eres mi eclipse favorito, imposible de ignorar."
            },
            {
                photo: "https://i.pinimg.com/736x/af/96/07/af96074c92d000350035765f8102388a.jpg",
                message: "Eres la energía que mueve todos mis pensamientos."
            },
            {
                photo: "https://i.pinimg.com/736x/1c/37/a7/1c37a79959f097c7356d25100bca194e.jpg",
                message: "Eres la notificación que más me alegra ver."
            },
            {
                photo: "https://i.pinimg.com/736x/8e/a7/2f/8ea72f4bd63415d426a725f2ad541e59.jpg",
                message: "Eres el motivo por el cual la distancia se siente como un detalle técnico."
            },
            {
                photo: "https://i.pinimg.com/736x/88/13/ba/8813badb51e3135e62f31f1f8bd84ddc.jpg",
                message: "Eres lo primero que pienso al despertar."
            },
            {
                photo: "https://i.pinimg.com/736x/98/0b/be/980bbeae8f9b0f90685a9049debcd27d.jpg",
                message: "Eres mi motivo."
            },
            {
                photo: "https://i.pinimg.com/736x/81/ae/d1/81aed12a77735ad47964bc593916894d.jpg",
                message: "Eres la razón de volver a mirar al cielo."
            },
            {
                photo: "https://i.pinimg.com/736x/5d/1c/d1/5d1cd1b33e9580f9d2b8dab01409c0a8.jpg",
                message: "Eres mi alma gemela, mi otra mitad, mi razón de ser."
            },
            {
                photo: "https://i.pinimg.com/736x/d2/7a/2c/d27a2c8ce5eb0cc6f429c297c05d1618.jpg",
                message: "Eres esa idea que nunca se apaga, siempre brilla en mi mente."
            },
            {
                photo: "https://i.pinimg.com/736x/83/bf/90/83bf901d6d98f26c3d38f701ac6a32e7.jpg",
                message: "Eres muy completa, como un rompecabezas que encaja perfectamente en mi vida."
            },
            {
                photo: "https://i.pinimg.com/736x/c2/ee/bf/c2eebff42efb8472c8519c7c99c34ba0.jpg",
                message: "Eres lo que hace que mi corazón lata más rápido, como un meteoro cruzando el cielo."
            },
            {
                photo: "https://i.pinimg.com/736x/47/90/0d/47900d5f5f2492f99701e8e3d7be47cc.jpg",
                message: "Eres aquello que necesitaba mi vida para ser más brillante."
            },
            {
                photo: "https://i.pinimg.com/736x/bf/e5/5a/bfe55a93877495b9ace6c88b4368cc90.jpg",
                message: "Eres esa oración que nunca me canso de repetir."
            },
            {
                photo: "https://i.pinimg.com/736x/72/d6/a7/72d6a70489d848203d5b2618d9788d47.jpg",
                message: "Eres quien me hace sentir que el amor es posible, incluso en un universo tan vasto."
            },
            {
                photo: "https://i.pinimg.com/736x/03/cc/f7/03ccf76056d156eef5399623ace38c08.jpg",
                message: "Eres quien me acerca más a Dios, quien me hace sentir que el amor es posible."
            },
            {
                photo: "https://i.pinimg.com/736x/66/77/7f/66777f3cac525907fb1be7021d496571.jpg",
                message: "Eres lo que deseo cada día, cada segundo, cada instante."
            },
            {
                photo: "https://i.pinimg.com/736x/ee/05/6c/ee056cde66caddb8dec9c2478cd7f79b.jpg",
                message: "Eres un segundo pensando en ti, un minuto deseándote, una hora soñando contigo, un día esperando verte, una semana queriendo abrazarte, un mes amándote, un año deseando que seas mía, y una vida esperando que seas mi esposa."
            },
            {
                photo: "https://i.pinimg.com/736x/35/f5/d0/35f5d0aa373d44ca19b1bb8b46ba5f3a.jpg",
                message: "Eres la razón por la que creo en el amor a primera vista, mejor dicho a primer mensaje."
            },
            {
                photo: "https://i.pinimg.com/736x/a8/1f/7e/a81f7e75d7dd32384693bfe43a5f1d58.jpg",
                message: "Eres todo y mucho más, eres la razón por la que me despierto cada mañana con una sonrisa."
            }
        ];
        
        // Array con razones adicionales para llegar a 100
        const additionalReasons = [
           "Me gustas porque tu sonrisa me da paz y tu forma de hablar me calma.",

            "Me gustas porque no necesitas estar cerca para hacerme feliz y eso es mágico.",

            "Me gustas porque entiendes mi locura y la haces ver bonita.",

            "Me gustas porque me hablas bonito y me escuchas de verdad.",

            "Me gustas porque eres tú y no necesitas aparentar nada.",

            "Me gustas porque me inspiras a ser mejor y me haces sentir suficiente.",

            "Me gustas porque eres real y aun así pareces un sueño.",

            "Me gustas porque siempre sabes qué decir y cuándo callar.",

            "Me gustas porque haces que la distancia no duela tanto y el tiempo valga más.",

            "Me gustas porque te emocionas por cosas simples y las haces especiales.",

            "Me gustas porque me haces reír y me haces pensar.",

            "Me gustas porque hasta en silencio me haces sentir acompañado.",

            "Me gustas porque no tienes miedo a sentir y a decirlo.",

            "Me gustas porque me haces bien incluso cuando yo no estoy bien.",

            "Me gustas porque no huyes de lo difícil y construyes lo bonito.",

            "Me gustas porque confías en mí y me haces confiar en ti.",

            "Me gustas porque cada parte de ti tiene una historia y quiero conocerlas todas.",

            "Me gustas porque no necesito buscar más cuando te tengo a ti.",

            "Me gustas porque me haces escribir cosas que ni sabía que sentía.",

            "Me gustas porque eres bonita por fuera y aún más por dentro.",

            "Me gustas porque no te rindes fácil y eso me motiva.",

            "Me gustas porque me entiendes sin que tenga que explicar todo.",

            "Me gustas porque eres esa calma en medio de mi caos.",

            "Me gustas porque no me juzgas y me haces sentir libre.",

            "Me gustas porque tu voz es abrigo y tus palabras hogar.",

            "Me gustas porque tienes la risa más linda y el alma más noble.",

            "Me gustas porque haces que quiera contarte todo sin miedo.",

            "Me gustas porque eres fuerte y sensible a la vez.",

            "Me gustas porque no tengo que fingir nada contigo.",

            "Me gustas porque te importo y lo demuestras.",

            "Me gustas porque siempre tienes un plan y aún así improvisas amor.",

            "Me gustas porque me haces ver el mundo con otros ojos.",

            "Me gustas porque eres ternura con actitud.",

            "Me gustas porque me cuidas sin hacerme sentir débil.",

            "Me gustas porque haces arte de lo simple.",

            "Me gustas porque no dejas que la distancia borre el cariño.",

            "Me gustas porque tu forma de pensar me atrapa.",

            "Me gustas porque me haces extrañarte bonito.",

            "Me gustas porque me haces reír como tonto y pensar como sabio.",

            "Me gustas porque crees en mí y eso me hace fuerte.",

            "Me gustas porque contigo todo parece tener sentido.",

            "Me gustas porque no tienes miedo de mostrar quién eres.",

            "Me gustas porque tus dudas también me enamoran.",

            "Me gustas porque eres todo lo que busqué sin saberlo.",

            "Me gustas porque me haces querer compartir cada día contigo.",

            "Me gustas porque haces que lo digital se sienta real.",

            "Me gustas porque eres única y no lo sabes.",

            "Me gustas porque tienes paciencia y carácter.",

            "Me gustas porque hasta tus manías me encantan.",

            "Me gustas porque tu tiempo conmigo lo haces especial.",

            "Me gustas porque no haces promesas vacías, haces acciones reales.",

            "Me gustas porque tu dulzura no es exagerada, es sincera.",

            "Me gustas porque contigo puedo ser cursi sin vergüenza.",

            "Me gustas porque eres más interesante que cualquier serie.",

            "Me gustas porque cuando hablo contigo, todo mejora.",

            "Me gustas porque tu corazón se nota en todo lo que haces.",

            "Me gustas porque no necesitas esfuerzo para conquistarme.",

            "Me gustas porque eres mi lugar seguro desde lejos.",

            "Me gustas porque no importa lo que pase, siempre vuelvo a ti.",

            "Me gustas porque contigo los minutos valen más.",

            "Me gustas porque no necesito verte para sentirte.",

            "Me gustas porque tus textos me hacen sonreír como tonto.",

            "Me gustas porque no eres perfecta, y eso te hace única.",

            "Me gustas porque tus sueños también se parecen a los míos.",

            "Me gustas porque haces del cariño una forma de arte.",

            "Me gustas porque contigo aprendí a querer con calma.",

            "Me gustas porque hasta tus enojos tienen encanto.",

            "Me gustas porque nunca me sentí tan lejos y tan cerca a la vez.",

            "Me gustas porque me haces querer ser mi mejor versión.",

            "Me gustas porque haces que escribirte se sienta como poesía.",

            "Me gustas porque contigo aprendí que lo virtual puede ser real.",

            "Me gustas porque tu forma de ver la vida es inspiradora.",

            "Me gustas porque no hay día que no piense en ti.",

            "Me gustas porque me haces amar el presente y soñar con el futuro.",

            "Me gustas porque no hay filtros que tapen tu esencia.",

            "Me gustas porque eres como el sol que atraviesa la niebla.",

            "Me gustas porque hasta tus errores te hacen más real.",

            "Me gustas porque sabes amar con libertad.",

            "Me gustas porque haces que la espera valga la pena.",

            "Me gustas porque no necesitas estar cerca para abrazarme con palabras.",

            "Me gustas porque contigo no hay miedo a sentir.",

            "Me gustas porque escuchas más allá de lo que digo.",

            "Me gustas porque puedo confiar hasta mis pensamientos más locos.",

            "Me gustas porque no necesito buscar más, ya te encontré.",

            "Me gustas porque tu cariño tiene dirección y propósito.",

            "Me gustas porque lo tuyo no es juego, es entrega.",

            "Me gustas porque lo haces todo con amor.",

            "Me gustas porque me haces esperar por ti con ganas.",

            "Me gustas porque me haces sentir que valgo la pena.",

            "Me gustas porque siempre hay algo nuevo en ti que me encanta.",

            "Me gustas porque incluso lejos, me haces sentir en casa.",

            "Me gustas porque lo que sentimos es verdadero.",

            "Me gustas porque me haces creer que el amor es posible.",

            "Me gustas porque nuestra historia se siente infinita.",

            "Me gustas porque tu forma de querer no se compara.",

            "Me gustas porque eres tú, sin más.",

            "Me gustas porque todo contigo tiene sentido.",

            "Me gustas porque me completas sin robarme nada.",

            "Me gustas por los pequeños detalles que me hacen sonreír cada dia.",

            "Me gustas por como demuestras tu intres y cariño.",

            "Me gustas porque creo que eres la persona más increíble que he conocido.",

            "Me gustas porque eres mia y eso me hace feliz.",

            "Me gustas porque te sonrojas conmigo y eso me encanta.",

            "Me gustas porque eres Alejandra, y eso lo dice todo."
        ];
        
        // Variables globales
        let currentIndex = 0;
        let isAutoPlaying = false;
        let autoPlayInterval;
        let isPresentationMode = false;
        
        // Elementos DOM
        const elements = {
            currentPhoto: document.getElementById('current-photo'),
            currentMessage: document.getElementById('current-message'),
            prevButton: document.getElementById('prev-button'),
            nextButton: document.getElementById('next-button'),
            counter: document.getElementById('counter'),
            thumbnailsContainer: document.getElementById('thumbnails'),
            reasonsList: document.getElementById('reasons-list'),
            presentationButton: document.getElementById('presentation-button'),
            autoplayButton: document.getElementById('autoplay-button'),
            presentationMode: document.getElementById('presentation-mode'),
            presentationPhoto: document.getElementById('presentation-photo'),
            presentationMessage: document.getElementById('presentation-message'),
            presentationCounter: document.getElementById('presentation-counter'),
            presentationPrev: document.getElementById('presentation-prev'),
            presentationNext: document.getElementById('presentation-next'),
            presentationExit: document.getElementById('presentation-exit'),
            backToTop: document.getElementById('back-to-top')
        };
        
        // Crear estrellas
        function createStars() {
            const starsContainer = document.getElementById('stars-container');
            const fragment = document.createDocumentFragment();
            
            for (let i = 0; i < CONFIG.STARS_COUNT; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                const size = Math.random() * 3 + 1;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                star.style.left = `${posX}%`;
                star.style.top = `${posY}%`;
                
                const delay = Math.random() * 5;
                const duration = Math.random() * 3 + 2;
                star.style.animation = `twinkle ${duration}s ease-in-out ${delay}s infinite`;
                
                fragment.appendChild(star);
            }
            
            starsContainer.appendChild(fragment);
        }
        
        // Función para cargar imagen con fallback
        function loadImageWithFallback(src, fallbackSrc = "https://via.placeholder.com/800x600/1a0347/ffffff?text=Foto+no+disponible") {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(src);
                img.onerror = () => resolve(fallbackSrc);
                img.src = src;
            });
        }
        
        // Función para actualizar la foto y mensaje mostrados
        async function updatePhotoAndMessage() {
            const item = photosAndMessages[currentIndex];
            
            // Mostrar loading
            elements.currentMessage.textContent = "Cargando...";
            
            try {
                const imageSrc = await loadImageWithFallback(item.photo);
                elements.currentPhoto.src = imageSrc;
                elements.currentMessage.textContent = item.message;
            } catch (error) {
                console.error('Error loading image:', error);
                elements.currentPhoto.src = "https://via.placeholder.com/800x600/1a0347/ffffff?text=Error+cargando+imagen";
                elements.currentMessage.textContent = item.message;
            }
            
            elements.counter.textContent = `Foto ${currentIndex + 1} de ${photosAndMessages.length}`;
            
            // Actualizar estado de los botones
            elements.prevButton.disabled = currentIndex === 0;
            elements.nextButton.disabled = currentIndex === photosAndMessages.length - 1;
            
            // Actualizar miniaturas activas
            document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
                thumb.classList.toggle('active', index === currentIndex);
                if (index === currentIndex) {
                    thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            });
            
            // Si estamos en modo presentación, actualizar también esos elementos
            if (isPresentationMode) {
                elements.presentationPhoto.src = elements.currentPhoto.src;
                elements.presentationMessage.textContent = item.message;
                elements.presentationCounter.textContent = `${currentIndex + 1} / ${photosAndMessages.length}`;
                elements.presentationPrev.disabled = currentIndex === 0;
                elements.presentationNext.disabled = currentIndex === photosAndMessages.length - 1;
            }
        }
        
        // Generar miniaturas
        async function generateThumbnails() {
            const fragment = document.createDocumentFragment();
            
            for (let index = 0; index < photosAndMessages.length; index++) {
                const item = photosAndMessages[index];
                const thumbnail = document.createElement('img');
                
                thumbnail.alt = `Miniatura ${index + 1}`;
                thumbnail.classList.add('thumbnail');
                thumbnail.setAttribute('role', 'tab');
                thumbnail.setAttribute('aria-label', `Ver foto ${index + 1}`);
                
                if (index === currentIndex) {
                    thumbnail.classList.add('active');
                }
                
                thumbnail.addEventListener('click', () => {
                    currentIndex = index;
                    updatePhotoAndMessage();
                    if (isAutoPlaying) stopAutoPlay();
                });
                
                // Cargar imagen de miniatura
                try {
                    const imageSrc = await loadImageWithFallback(item.photo, `https://via.placeholder.com/60x60/1a0347/ffffff?text=${index + 1}`);
                    thumbnail.src = imageSrc;
                } catch (error) {
                    thumbnail.src = `https://via.placeholder.com/60x60/1a0347/ffffff?text=${index + 1}`;
                }
                
                fragment.appendChild(thumbnail);
            }
            
            elements.thumbnailsContainer.appendChild(fragment);
        }
        
        // Generar lista de 100 razones
        function generateReasonsList() {
            const fragment = document.createDocumentFragment();
            
            // Primero las 54 razones de las fotos
            photosAndMessages.forEach((item, index) => {
                const reasonItem = document.createElement('div');
                reasonItem.classList.add('reason-item');
                reasonItem.innerHTML = `<span class="reason-number">${index + 1}.</span> ${item.message}`;
                reasonItem.addEventListener('click', () => {
                    currentIndex = index;
                    updatePhotoAndMessage();
                    document.querySelector('.gallery-container').scrollIntoView({ behavior: 'smooth' });
                });
                fragment.appendChild(reasonItem);
            });
            
            // Luego las razones adicionales para llegar a 100
            additionalReasons.forEach((reason, index) => {
                const reasonItem = document.createElement('div');
                reasonItem.classList.add('reason-item');
                reasonItem.innerHTML = `<span class="reason-number">${photosAndMessages.length + index + 1}.</span> ${reason}`;
                fragment.appendChild(reasonItem);
            });
            
            elements.reasonsList.appendChild(fragment);
        }
        
        // Iniciar reproducción automática
        function startAutoPlay() {
            if (!isAutoPlaying) {
                isAutoPlaying = true;
                elements.autoplayButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                    Detener
                `;
                
                autoPlayInterval = setInterval(() => {
                    if (currentIndex < photosAndMessages.length - 1) {
                        currentIndex++;
                        updatePhotoAndMessage();
                    } else {
                        stopAutoPlay();
                    }
                }, CONFIG.AUTOPLAY_INTERVAL);
            }
        }
        
        // Detener reproducción automática
        function stopAutoPlay() {
            if (isAutoPlaying) {
                isAutoPlaying = false;
                clearInterval(autoPlayInterval);
                elements.autoplayButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Reproducción Automática
                `;
            }
        }
        
        // Activar modo presentación
        function activatePresentationMode() {
            isPresentationMode = true;
            elements.presentationMode.style.display = 'flex';
            elements.presentationMode.classList.add('presentation-active');
            document.body.style.overflow = 'hidden';
            
            elements.presentationPhoto.src = elements.currentPhoto.src;
            elements.presentationMessage.textContent = photosAndMessages[currentIndex].message;
            elements.presentationCounter.textContent = `${currentIndex + 1} / ${photosAndMessages.length}`;
            
            elements.presentationPrev.disabled = currentIndex === 0;
            elements.presentationNext.disabled = currentIndex === photosAndMessages.length - 1;
        }
        
        // Desactivar modo presentación
        function deactivatePresentationMode() {
            isPresentationMode = false;
            elements.presentationMode.style.display = 'none';
            elements.presentationMode.classList.remove('presentation-active');
            document.body.style.overflow = '';
        }
        
        // Navegación
        function goToPrevious() {
            if (currentIndex > 0) {
                currentIndex--;
                updatePhotoAndMessage();
                if (isAutoPlaying) stopAutoPlay();
            }
        }
        
        function goToNext() {
            if (currentIndex < photosAndMessages.length - 1) {
                currentIndex++;
                updatePhotoAndMessage();
                if (isAutoPlaying) stopAutoPlay();
            }
        }
        
        // Event Listeners
        function setupEventListeners() {
            // Navegación principal
            elements.prevButton.addEventListener('click', goToPrevious);
            elements.nextButton.addEventListener('click', goToNext);
            
            // Controles
            elements.presentationButton.addEventListener('click', activatePresentationMode);
            elements.autoplayButton.addEventListener('click', () => {
                isAutoPlaying ? stopAutoPlay() : startAutoPlay();
            });
            
            // Modo presentación
            elements.presentationExit.addEventListener('click', deactivatePresentationMode);
            elements.presentationPrev.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updatePhotoAndMessage();
                }
            });
            elements.presentationNext.addEventListener('click', () => {
                if (currentIndex < photosAndMessages.length - 1) {
                    currentIndex++;
                    updatePhotoAndMessage();
                }
            });
            
            // Navegación con teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    goToPrevious();
                } else if (e.key === 'ArrowRight') {
                    goToNext();
                } else if (e.key === 'Escape' && isPresentationMode) {
                    deactivatePresentationMode();
                } else if (e.key === ' ') {
                    e.preventDefault();
                    isAutoPlaying ? stopAutoPlay() : startAutoPlay();
                }
            });
            
            // Botón volver arriba
            window.addEventListener('scroll', () => {
                elements.backToTop.classList.toggle('visible', window.pageYOffset > 500);
            });
            
            elements.backToTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            
            // Manejo de errores de imágenes
            window.addEventListener('error', function(e) {
                if (e.target.tagName === 'IMG') {
                    e.target.src = "https://via.placeholder.com/800x600/1a0347/ffffff?text=Imagen+no+disponible";
                }
            }, true);
        }
        
        // Precargar imágenes para mejor rendimiento
        function preloadImages() {
            if (CONFIG.PRELOAD_IMAGES) {
                photosAndMessages.forEach(item => {
                    const img = new Image();
                    img.src = item.photo;
                });
            }
        }
        
        // Inicialización
        async function init() {
            try {
                createStars();
                setupEventListeners();
                await generateThumbnails();
                generateReasonsList();
                await updatePhotoAndMessage();
                preloadImages();
                
                console.log('Página cargada exitosamente ✨');
            } catch (error) {
                console.error('Error inicializando la página:', error);
            }
        }
        
        // Inicializar cuando el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }