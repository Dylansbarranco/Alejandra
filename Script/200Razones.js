const canvas = document.getElementById('universe');
        const ctx = canvas.getContext('2d');
        let width, height;
        let stars = [];
        const maxStars = 1000;

       
        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initStars();
        }

        // Initialize stars
        function initStars() {
            stars = [];
            for (let i = 0; i < maxStars; i++) {
                stars.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 1.5,
                    opacity: Math.random(),
                    speed: Math.random() * 0.5
                });
            }
        }

        // Draw stars
        function drawStars() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#0a0a2a';
            ctx.fillRect(0, 0, width, height);

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

                // Move star
                star.y += star.speed;

                // Reset star position if it goes off screen
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }
            });

            requestAnimationFrame(drawStars);
        }

        // Create shooting star effect
        function createShootingStar() {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            
            // Random position
            const startX = Math.random() * width;
            const startY = Math.random() * (height / 2);
            
            shootingStar.style.left = `${startX}px`;
            shootingStar.style.top = `${startY}px`;
            
            // Animation
            shootingStar.style.animation = `shootingStar ${Math.random() * 2 + 1}s linear forwards`;
            
            document.body.appendChild(shootingStar);
            
            // Remove after animation
            setTimeout(() => {
                document.body.removeChild(shootingStar);
            }, 3000);
        }

        // Periodically create shooting stars
        function startShootingStars() {
            setInterval(createShootingStar, 3000);
        }

        
        const reasons = [
            
            { title: "Tu sonrisa virtual", message: "puedo sentir tu sonrisa a través de tus llamadas. Ilumina mis días como ninguna otra cosa." },
            { title: "Tu forma de escribir", message: "La manera en que expresas tus pensamientos me fascina. Cada mensaje tuyo es como un pequeño tesoro que guardo con cariño." },
            { title: "Tu inteligencia", message: "Me encanta cómo piensas y analizas las cosas. Nuestras conversaciones siempre me hacen reflexionar y aprender algo nuevo." },
            { title: "Tu sentido del humor", message: "La forma en la que ves el mundo, en la que le sacas una sonrisa a las situaciones difíciles, es sin duda una de las cosas que más me gusta de ti." },
            { title: "Tu empatía", message: "Siempre sabes qué decir. Tu capacidad para entender los sentimientos agenos me gusta mucho" },
            { title: "Tu pasión", message: "La forma en que hablas de las cosas que te gustan me inspira. Tu entusiasmo es contagioso y me hace querer ser mejor cada día." },
            { title: "Tu autenticidad", message: "Nunca pretendes ser alguien que no eres." },
            { title: "Tu paciencia", message: "Agradezco cómo me escuchas y me das tiempo para expresarme. Tu paciencia es como el espacio infinito, acogedor y tranquilo." },
            { title: "Tu creatividad", message: "Las ideas que compartes conmigo son como galaxias inexploradas, llenas de posibilidades y maravillas por descubrir." },
            { title: "Tu fortaleza", message: "Admiro cómo enfrentas los desafíos de la vida. Eres como una supernova, brillante e imparable incluso en los momentos más oscuros." },
            { title: "Nuestra conexión", message: "A pesar de la distancia, siento que hay un hilo invisible que nos conecta, como la gravedad que mantiene unidos a los planetas y las estrellas." },
            { title: "Tu voz", message: "Tu voz es como música celestial para mí, una melodía que resuena en mi corazón." },
            { title: "Tu amabilidad", message: "La forma en que tratas a los demás con respeto y consideración me muestra la belleza de tu alma." },
            { title: "Tu curiosidad", message: "Me encanta cómo siempre estás dispuesta a aprender cosas nuevas y explorar ideas diferentes." },
            { title: "Tu optimismo", message: "Tu capacidad para ver el lado positivo de las situaciones es como un rayo de sol en un día nublado." },
            { title: "Tu sinceridad", message: "Valoro enormemente que siempre me digas lo que piensas, sin filtros ni pretensiones." },
            { title: "Tu manera de escuchar", message: "Cuando hablamos, siento que realmente me escuchas, no solo esperas tu turno para hablar." },
            { title: "Tu sensibilidad", message: "La forma en que te conmueves con las historias y experiencias de otros muestra la profundidad de tu corazón." },
            { title: "Tu determinación", message: "Cuando te propones algo, no hay obstáculo que te detenga. Esa determinación me inspira cada día." },
            { title: "Tu capacidad de perdón", message: "Admiro cómo no guardas rencor y estás dispuesta a perdonar y seguir adelante." },
            
            
            { title: "Nuestras llamadas para dormir", message: "Me gusta dejar mi telefono en mi pecho y saber que estas ahi, me gusta no intentar hacer ruido para no despertarte." },
            { title: "Cómo me haces reflexionar", message: "Las preguntas que me haces y los temas que tocamos me llevan a pensar en cosas que nunca había considerado antes." },
            { title: "Tu forma de pensar", message: "Me encanta como ves el mundo , como vives tus dias y como estoy yo en ellos" },
            { title: "Los silencios cómodos", message: "Incluso cuando no estamos hablando activamente, hay una comodidad en estar conectados, sabiendo que estás ahí." },
            { title: "Tu forma de contar historias", message: "Tienes un don para narrar incluso los eventos más cotidianos de una manera que me mantiene completamente cautivado." },
            { title: "Cómo me animas", message: "Siempre sabes qué decir para levantarme el ánimo cuando estoy pasando por un mal momento." },
            { title: "Tu interés genuino", message: "Cuando me preguntas cómo estoy, sé que realmente quieres saber la respuesta." },
            { title: "Nuestros 'buenos días'", message: "Comenzar el día con un mensaje tuyo hace que todo sea mejor desde el primer momento." },
            { title: "Nuestras 'buenas noches'", message: "Terminar el día hablando contigo me ayuda a dormir con una sonrisa en el rostro." },
            { title: "Cómo haces que cada momento contigo se sienta único", message: "No importa si es una charla corta o una videollamada larga, contigo todo se siente especial." },
            { title: "Cómo me haces reír", message: "Tus ocurrencias inesperadas siempre logran sacarme una carcajada." },
            { title: "Tu honestidad en las conversaciones", message: "Nunca siento que estés fingiendo interés o diciendo lo que crees que quiero oír." },
            { title: "Cómo simplemente hablar contigo mejora mi día", message: "Ya no me imagino un dia en el que no estes." },
            { title: "Cómo compartes tu día", message: "Me encanta cuando me cuentas sobre tu día, me hace sentir parte de tu vida a pesar de la distancia." },
            { title: "Tu interés en mi día", message: "El hecho de que quieras saber cómo fue mi día me hace sentir importante para ti." },
            { title: "Nuestras conversaciones profundas", message: "Esos momentos en que hablamos de la vida, el universo y todo lo demás, explorando juntos las grandes preguntas." },
            { title: "Tu forma de expresar emociones", message: "Aunque sea a través de mensajes, puedo sentir la autenticidad de tus emociones en cada palabra que escribes." },
            { title: "Cómo me desafías", message: "No tienes miedo de cuestionar mis ideas y empujarme a pensar más profundamente." },
            { title: "Tu forma de disculparte", message: "Cuando hay un malentendido, tu manera sincera de disculparte muestra tu madurez y consideración." },
            { title: "Cómo celebras mis logros", message: "Tu entusiasmo genuino cuando te cuento sobre algo bueno que me ha pasado hace que la alegría sea aún mayor." },
            
            // Conexión virtual
            { title: "Cómo acortas la distancia", message: "A pesar de los kilómetros que nos separan, tu presencia virtual hace que te sienta cerca." },
            { title: "Los emojis que usas", message: "Cada emoji que envías parece perfectamente elegido para expresar exactamente lo que sientes." },
            { title: "Tu puntualidad al responder", message: "Aunque sé que tienes una vida ocupada, siempre encuentras tiempo para responder mis mensajes." },
            { title: "Cómo me haces sentir presente", message: "Aunque estemos lejos, me haces sentir que soy parte importante de tu día a día." },
            { title: "Tu forma de compartir tu mundo", message: "A través de fotos, descripciones y anécdotas, me permites ver el mundo a través de tus ojos." },
            { title: "Cómo mantienes viva la conversación", message: "Nunca dejas que la charla se vuelva monótona, siempre encuentras nuevos temas interesantes." },
            { title: "Tu forma de expresar cariño virtualmente", message: "Has encontrado formas creativas de mostrar afecto a pesar de las limitaciones de la comunicación digital." },
            { title: "Cómo me haces olvidar la distancia", message: "Hay momentos en nuestras conversaciones en que olvido completamente que no estamos en el mismo lugar." },
            { title: "Tu presencia constante", message: "Aunque no podamos vernos físicamente, siento tu presencia en mi vida todos los días." },
            { title: "Cómo me incluyes en tu rutina", message: "Me encanta saber que soy parte de tu día a día, aunque sea a través de mensajes." },
            { title: "Tu forma de superar los malentendidos", message: "La comunicación escrita puede llevar a confusiones, pero siempre buscas aclarar las cosas con paciencia." },
            { title: "Cómo me haces sentir especial", message: "Cada mensaje tuyo me hace sentir que soy importante para ti, que no soy solo uno más." },
            { title: "Tu forma de compartir música", message: "Las canciones que me recomiendas me permiten conocer otra faceta de ti y sentirme más conectado." },
            { title: "Cómo compartes tus lecturas", message: "Los libros y artículos que me recomiendas me ayudan a entender mejor tu forma de pensar." },
            { title: "Tu forma de planear nuestro futuro", message: "Me encanta cuando hablamos de las cosas que haremos cuando finalmente nos conozcamos en persona." },
            { title: "Cómo me haces parte de tus decisiones", message: "El hecho de que valores mi opinión y me consultes sobre cosas importantes me hace sentir valorado." },
            { title: "Tu forma de recordar nuestros momentos", message: "Me encanta cuando mencionas conversaciones o bromas que tuvimos en el pasado." },
            { title: "Cómo me das mi espacio", message: "Respetas cuando necesito tiempo para mí, sin presionarme o hacerme sentir culpable." },
            { title: "Tu forma de volver después de una ausencia", message: "Cuando por alguna razón no hemos podido hablar, la forma en que retomamos la conversación es siempre especial." },
            { title: "Cómo me haces sentir en casa", message: "Hablar contigo se siente como llegar a casa después de un largo día, cómodo y reconfortante." },
            
            // Cualidades
            { title: "Tu inteligencia emocional", message: "La forma en que entiendes y manejas tus emociones y las de los demás es realmente admirable." },
            { title: "Tu capacidad de adaptación", message: "Me impresiona cómo te adaptas a diferentes situaciones y circunstancias con tanta facilidad." },
            { title: "Tu generosidad", message: "Siempre estás dispuesta a dar tu tiempo, atención y apoyo sin esperar nada a cambio." },
            { title: "Tu sentido de la justicia", message: "Me encanta cómo defiendes lo que es correcto, incluso cuando no es lo más fácil o conveniente." },
            { title: "Tu humildad", message: "A pesar de tus muchas cualidades y logros, nunca te jactas o presumes de ellos." },
            { title: "Tu capacidad de reflexión", message: "Admiro cómo reflexionas sobre tus acciones y buscas constantemente crecer como persona." },
            { title: "Tu responsabilidad", message: "Siempre cumples con tus compromisos y asumes las consecuencias de tus acciones." },
            { title: "Tu compasión", message: "La forma en que te preocupas por el bienestar de los demás muestra la bondad de tu corazón." },
            { title: "Tu capacidad de perdón", message: "No guardas rencor y siempre estás dispuesta a dar segundas oportunidades, lo que demuestra la grandeza de tu espíritu." },
            { title: "Tu lealtad", message: "Sé que puedo contar contigo y confiar en ti, sin importar las circunstancias." },
            { title: "Tu autenticidad", message: "Nunca finges ser alguien que no eres, y esa honestidad contigo misma es realmente refrescante." },
            { title: "Tu capacidad de aprendizaje", message: "Siempre estás dispuesta a aprender cosas nuevas y crecer como persona." },
            { title: "Tu resiliencia", message: "La forma en que te levantas después de los momentos difíciles me inspira a ser más fuerte." },
            { title: "Tu intuición", message: "Confías en tu instinto y generalmente tienes razón, lo cual es una cualidad muy valiosa." },
            { title: "Tu disciplina", message: "Admiro cómo te comprometes con tus metas y trabajas consistentemente para alcanzarlas." },
            { title: "Tu capacidad de escucha", message: "No solo oyes, sino que realmente escuchas y entiendes lo que los demás quieren comunicar." },
            { title: "Tu sentido de la aventura", message: "Me encanta tu disposición para probar cosas nuevas y salir de tu zona de confort." },
            { title: "Tu capacidad de organización", message: "La forma en que manejas tus responsabilidades y mantienes el orden es realmente admirable." },
            
            // Pequeños detalles
            { title: "Tu forma de usar emojis", message: "Cada emoji que eliges parece perfectamente seleccionado para expresar exactamente lo que quieres decir." },
            { title: "Cómo escribes mi nombre", message: "Hay algo especial en la forma en que escribes mi nombre que me hace sentir importante." },
            { title: "Tus mensajes de buenos días", message: "Comenzar el día con un mensaje tuyo hace que todo sea mejor desde el primer momento." },
            { title: "Tus mensajes de buenas noches", message: "Terminar el día con tus palabras me ayuda a dormir con una sonrisa en el rostro." },
            { title: "Tu puntualidad", message: "Valoro mucho que respetes mi tiempo y el tuyo siendo puntual en nuestras conversaciones programadas." },
            { title: "Cómo compartes pequeñas victorias", message: "Me encanta cuando me cuentas sobre esas pequeñas cosas buenas que te suceden durante el día." },
            { title: "Tu forma de preguntar '¿cómo estás?'", message: "No es solo una formalidad, realmente quieres saber cómo me siento." },
            { title: "Tus recomendaciones", message: "Siempre piensas en mí cuando encuentras algo que crees que me gustaría." },
            { title: "Cómo recuerdas fechas importantes", message: "El hecho de que recuerdes momentos significativos para mí muestra cuánto te importo." },
            { title: "Tu forma de disculparte", message: "Cuando cometes un error, tu manera sincera de disculparte muestra tu madurez y consideración." },
            { title: "Cómo celebras mis logros", message: "Tu entusiasmo genuino cuando te cuento sobre algo bueno que me ha pasado hace que la alegría sea aún mayor." },
            { title: "Tu forma de dar consejos", message: "Nunca impones tu opinión, sino que ofreces tu perspectiva de manera respetuosa." },
            { title: "Cómo compartes tu día", message: "Los pequeños detalles que me cuentas sobre tu rutina me hacen sentir parte de tu vida." },
            { title: "Tu interés en mi día", message: "Las preguntas específicas que haces sobre mi día muestran que realmente te importa." },
            { title: "Tus mensajes sorpresa", message: "Esos mensajes inesperados que me envías sin motivo aparente siempre alegran mi día." },
            { title: "Cómo me das ánimos", message: "Siempre sabes qué decir para motivarme cuando enfrento un desafío." },
            { title: "Tu forma de compartir fotos", message: "Las imágenes que me envías me permiten ver el mundo a través de tus ojos." },
            { title: "Cómo me haces reír", message: "Tienes una habilidad especial para hacerme sonreír incluso en los días más difíciles." },
            { title: "Tu forma de recordar nuestras conversaciones", message: "Me sorprende cómo recuerdas detalles de cosas que hemos hablado hace tiempo." },
            { title: "Cómo respetas mis opiniones", message: "Aunque no siempre estemos de acuerdo, siempre valoras y respetas mi punto de vista." },
            
            // Lo que me haces sentir
            { title: "Me haces sentir valorado", message: "La atención que prestas a lo que digo me hace sentir que mis pensamientos e ideas son importantes." },
            { title: "Me haces sentir comprendido", message: "Contigo nunca tengo que explicarme demasiado, pareces entenderme de una manera que pocos logran." },
            { title: "Me haces sentir seguro", message: "Hay una seguridad en nuestra conexión que me permite ser vulnerable y auténtico." },
            { title: "Me haces sentir inspirado", message: "Tu forma de ver la vida y enfrentar los desafíos me inspira a ser mejor persona." },
            { title: "Me haces sentir en paz", message: "Hablar contigo tiene un efecto calmante, como si todo estuviera bien en el mundo." },
            { title: "Me haces sentir emocionado", message: "La anticipación de hablar contigo me llena de una emoción que pocas cosas logran." },
            { title: "Me haces sentir importante", message: "La forma en que me tratas me hace sentir que soy una prioridad en tu vida." },
            { title: "Me haces sentir aceptado", message: "Contigo puedo ser yo mismo, con todas mis imperfecciones y peculiaridades." },
            { title: "Me haces sentir optimista", message: "Tu actitud positiva es contagiosa y me ayuda a ver el lado bueno de las situaciones." },
            { title: "Me haces sentir acompañado", message: "Aunque estemos lejos, nunca me siento solo sabiendo que estás ahí." },
            { title: "Me haces sentir valiente", message: "Tu apoyo me da el coraje para enfrentar miedos y tomar riesgos que normalmente evitaría." },
            { title: "Me haces sentir en casa", message: "Hablar contigo se siente familiar y cómodo, como llegar a casa después de un largo viaje." },
            { title: "Me haces sentir esperanzado", message: "Tu presencia en mi vida me da esperanza de que existen conexiones genuinas y significativas." },
            { title: "Me haces sentir agradecido", message: "Cada día agradezco la fortuna de haberte conocido, aunque sea virtualmente." },
            { title: "Me haces sentir motivado", message: "Tu determinación y pasión me motivan a perseguir mis propios sueños con más ahínco." },
            { title: "Me haces sentir escuchado", message: "La atención que prestas cuando te hablo me hace sentir que lo que digo realmente importa." },
            { title: "Me haces sentir respetado", message: "Siempre tratas mis opiniones y sentimientos con consideración y respeto." },
            { title: "Me haces sentir interesante", message: "Tu genuino interés en lo que tengo que decir me hace sentir que valgo la pena." },
            { title: "Me haces sentir capaz", message: "Tu confianza en mí me ayuda a creer en mis propias capacidades." },
            { title: "Me haces sentir feliz", message: "Simplemente, me haces feliz. Tu presencia en mi vida trae una alegría que es difícil de explicar." },
            
            // Sueños y esperanzas
            { title: "Sueño con conocerte", message: "A veces me imagino cómo sería finalmente verte en persona, escuchar tu voz directamente y no a través de una pantalla." },
            { title: "Espero compartir experiencias", message: "Pienso en todas las cosas que podríamos hacer juntos, los lugares que podríamos visitar, las conversaciones que tendríamos cara a cara." },
            { title: "Sueño con hacerte reír", message: "Me encantaría poder ver tu sonrisa en persona, escuchar tu risa sin la distorsión de la tecnología." },
            { title: "Espero crear recuerdos", message: "Imagino todos los momentos que podríamos compartir y los recuerdos que crearíamos juntos." },
            { title: "Sueño con mostrarte mi mundo", message: "Me gustaría poder mostrarte los lugares que son importantes para mí, presentarte a las personas que quiero." },
            { title: "Espero conocer tu mundo", message: "Tengo curiosidad por ver los lugares que frecuentas, conocer a las personas que son importantes en tu vida." },
            { title: "Sueño con una conversación sin pantallas", message: "Imagino lo maravilloso que sería hablar contigo sin la barrera de la tecnología entre nosotros." },
            { title: "Espero compartir silencios", message: "A veces pienso en lo bonito que sería simplemente estar en silencio juntos, disfrutando de la compañía del otro." },
            { title: "Sueño con aventuras juntos", message: "Me imagino todas las aventuras que podríamos vivir, los lugares que podríamos explorar lado a lado." },
            { title: "Espero crecer juntos", message: "Me ilusiona pensar en cómo podríamos ayudarnos mutuamente a crecer y evolucionar como personas." },
            { title: "Sueño con apoyarte en persona", message: "Me gustaría poder estar ahí físicamente para ti en los momentos difíciles, no solo a través de palabras en una pantalla." },
            { title: "Espero celebrar contigo", message: "Imagino lo bonito que sería celebrar juntos los logros y momentos especiales, compartiendo la alegría en persona." },
            { title: "Sueño con un abrazo", message: "A veces pienso en cómo sería abrazarte, ese gesto tan simple pero tan significativo que la distancia nos niega." },
            { title: "Espero ver tus expresiones", message: "Tengo curiosidad por ver todas esas pequeñas expresiones y gestos que no se pueden capturar a través de mensajes." },
            { title: "Sueño con momentos cotidianos", message: "Me imagino compartiendo contigo esos momentos simples pero especiales del día a día." },
            { title: "Espero descubrir nuevas facetas", message: "Me emociona pensar en todas las cosas que aún no conozco de ti y que podría descubrir en persona." },
            { title: "Sueño con superar la distancia", message: "Espero que algún día la distancia entre nosotros sea solo un recuerdo, una historia que contar sobre cómo comenzó todo." },
            { title: "Espero un futuro juntos", message: "Me ilusiona pensar en todas las posibilidades que el futuro podría traer para nosotros." },
            { title: "Sueño con el momento de vernos", message: "A veces imagino ese primer momento en que finalmente nos veamos cara a cara, y cómo se sentirá." },
            { title: "Espero que esto sea solo el comienzo", message: "Siento que lo que hemos construido virtualmente es solo el principio de algo mucho más grande y hermoso." },
            
            // Lo que admiro de ti
            { title: "Admiro tu perseverancia", message: "La forma en que sigues adelante a pesar de los obstáculos muestra una fuerza interior admirable." },
            { title: "Admiro tu bondad", message: "Tu capacidad para ser amable y considerada, incluso en situaciones difíciles, es realmente inspiradora." },
            { title: "Admiro tu inteligencia", message: "La forma en que analizas situaciones y resuelves problemas muestra una mente brillante y perspicaz." },
            { title: "Admiro tu creatividad", message: "Tu capacidad para pensar fuera de lo convencional y encontrar soluciones innovadoras es fascinante." },
            { title: "Admiro tu honestidad", message: "Valoro enormemente que siempre seas sincera, incluso cuando la verdad no es fácil de decir o escuchar." },
            { title: "Admiro tu valentía", message: "La forma en que enfrentas tus miedos y sales de tu zona de confort muestra un coraje admirable." },
            { title: "Admiro tu compasión", message: "Tu capacidad para ponerte en el lugar de otros y sentir genuina preocupación por su bienestar es hermosa." },
            { title: "Admiro tu dedicación", message: "La pasión y el compromiso que pones en las cosas que te importan es realmente inspirador." },
            { title: "Admiro tu equilibrio", message: "La forma en que balanceas diferentes aspectos de tu vida muestra una sabiduría que admiro profundamente." },
            { title: "Admiro tu autenticidad", message: "El hecho de que seas fiel a ti misma en todas las situaciones es algo que respeto enormemente." },
            { title: "Admiro tu capacidad de adaptación", message: "La forma en que te ajustas a nuevas situaciones y circunstancias muestra una flexibilidad admirable." },
            { title: "Admiro tu generosidad", message: "Tu disposición para dar tu tiempo, atención y apoyo a otros sin esperar nada a cambio es realmente especial." },
            { title: "Admiro tu paciencia", message: "La calma con la que enfrentas situaciones frustrantes o difíciles muestra una fortaleza interior que admiro." },
            { title: "Admiro tu empatía", message: "Tu capacidad para entender y compartir los sentimientos de los demás crea conexiones genuinas y significativas." },
            { title: "Admiro tu optimismo", message: "La forma en que mantienes una actitud positiva incluso en circunstancias difíciles es realmente inspiradora." },
            { title: "Admiro tu humildad", message: "A pesar de tus muchas cualidades y logros, nunca presumes o te jactas de ellos." },
            { title: "Admiro tu sabiduría", message: "Las perspectivas y consejos que compartes muestran una comprensión profunda de la vida." },
            { title: "Admiro tu sentido de la justicia", message: "Tu compromiso con lo que es correcto y justo, incluso cuando no es lo más conveniente, es admirable." },
            { title: "Admiro tu capacidad de perdón", message: "La forma en que eres capaz de perdonar y seguir adelante muestra una grandeza de espíritu." },
            { title: "Admiro tu autenticidad", message: "El hecho de que nunca pretendes ser alguien que no eres es refrescante y admirable." },
            
            // Momentos especiales
            { title: "Nuestra primera conversación", message: "Recuerdo la emoción que sentí la primera vez que intercambiamos mensajes, sin saber que sería el comienzo de algo tan especial." },
            { title: "Cuando compartiste tu música favorita", message: "Ese momento en que me enviaste tus canciones favoritas me permitió conocerte de una manera más profunda." },
            { title: "Cuando me ayudaste con un problema", message: "Tu disposición para ayudarme cuando estaba pasando por un momento difícil significó mucho para mí." },
            { title: "Cuando nos quedamos hablando hasta tarde", message: "Esas noches en que perdimos la noción del tiempo conversando son algunos de mis recuerdos favoritos." },
            { title: "Cuando me hiciste reír a carcajadas", message: "Hay momentos en que tus mensajes me han hecho reír tanto que me dolía el estómago." },
            { title: "Cuando compartimos nuestros sueños", message: "Abrirnos y hablar sobre nuestras esperanzas y sueños para el futuro creó una conexión más profunda entre nosotros." },
            { title: "Cuando me sorprendiste", message: "Ese momento en que hiciste algo inesperado y considerado que me dejó sin palabras." },
            { title: "Cuando superamos un malentendido", message: "La forma en que trabajamos juntos para resolver un malentendido fortaleció nuestra conexión." },
            { title: "Cuando celebramos juntos", message: "Aunque fuera virtualmente, compartir momentos de celebración contigo los hizo aún más especiales." },
            { title: "Cuando me diste un consejo valioso", message: "Tus palabras de sabiduría en un momento crucial me ayudaron a tomar una decisión importante." },
            { title: "Cuando compartimos un silencio cómodo", message: "Incluso en esos momentos en que no teníamos mucho que decir, había una comodidad en estar conectados." },
            { title: "Cuando me mostraste tu mundo", message: "A través de fotos y descripciones, me permitiste ver y entender el lugar donde vives." },
            { title: "Cuando me enviaste un mensaje inesperado", message: "Esos mensajes sorpresa que llegan justo cuando los necesito siempre alegran mi día." },
            { title: "Cuando compartimos nuestros miedos", message: "Abrirnos sobre nuestras inseguridades y vulnerabilidades creó un nivel más profundo de confianza." },
            { title: "Cuando me apoyaste en un momento difícil", message: "Tu presencia y palabras de aliento durante tiempos complicados significaron más de lo que puedo expresar." },
            { title: "Cuando descubrimos algo en común", message: "Esos momentos de '¡yo también!' que nos hacen sentir más conectados a pesar de la distancia." },
            { title: "Cuando me hiciste ver las cosas desde otra perspectiva", message: "Tu capacidad para mostrarme diferentes puntos de vista ha enriquecido mi forma de pensar." },
            { title: "Cuando compartimos un chiste privado", message: "Esos momentos de complicidad y humor que solo nosotros entendemos." },
            { title: "Cuando me enviaste algo que te recordó a mí", message: "El hecho de que pienses en mí durante tu día a día me hace sentir especial." },
            { title: "Cuando simplemente estuviste ahí", message: "A veces, tu simple presencia, aunque sea virtual, ha sido exactamente lo que necesitaba." },
            
            // Más razones
            { title: "Tu forma de ver el mundo", message: "Tu perspectiva única sobre la vida y el mundo me ayuda a ver las cosas de manera diferente." },
            { title: "Cómo me inspiras", message: "Tu ejemplo me motiva a ser mejor persona y a esforzarme más en todo lo que hago." },
            { title: "Tu autenticidad", message: "Nunca pretendes ser alguien que no eres, y esa honestidad contigo misma es realmente refrescante." },
            { title: "Tu capacidad de superación", message: "La forma en que superas los obstáculos y aprendes de las dificultades es realmente admirable." },
            { title: "Tu forma de expresarte", message: "Las palabras que eliges y cómo las utilizas reflejan una mente brillante y articulada." },
            { title: "Tu sentido de la responsabilidad", message: "Siempre cumples con tus compromisos y asumes las consecuencias de tus acciones." },
            { title: "Tu capacidad de perdón", message: "No guardas rencor y siempre estás dispuesta a dar segundas oportunidades." },
            { title: "Tu forma de apreciar las pequeñas cosas", message: "Me encanta cómo encuentras alegría y belleza en los detalles más simples de la vida." },
            { title: "Tu sentido del humor", message: "La forma en que encuentras el lado divertido de las situaciones hace que cada conversación sea un placer." },
            { title: "Tu capacidad de escucha", message: "No solo oyes, sino que realmente escuchas y entiendes lo que quiero comunicar." },
            { title: "Tu forma de dar consejos", message: "Sabes cómo ofrecer tu perspectiva de manera útil sin ser impositiva." },
            { title: "Tu honestidad", message: "Siempre puedo contar con que me dirás la verdad, incluso cuando no es lo que quiero oír." },
            { title: "Tu lealtad", message: "Sé que puedo contar contigo y confiar en ti, sin importar las circunstancias." },
            { title: "Tu forma de expresar cariño", message: "Aunque estemos lejos, has encontrado formas significativas de mostrar que te importo." },
            { title: "Tu capacidad de adaptación", message: "Me impresiona cómo te ajustas a diferentes situaciones y circunstancias con tanta facilidad." },
            { title: "Tu forma de respetar límites", message: "Aprecias y respetas el espacio personal y los límites, lo cual es muy importante en cualquier relación." },
            { title: "Tu forma de celebrar mis logros", message: "Tu entusiasmo genuino cuando comparto buenas noticias hace que la alegría sea aún mayor." },
            { title: "Tu forma de consolarme", message: "Sabes exactamente qué decir cuando estoy pasando por un momento difícil." },
            { title: "Tu forma de hacerme sentir valorado", message: "Pequeños gestos y palabras que me hacen sentir que soy importante para ti." },
            { title: "Tu forma de compartir tu vida conmigo", message: "Aunque estemos lejos, me haces sentir parte de tu mundo y tu día a día." }
        ];

        // Planet colors
        const planetColors = [
            'linear-gradient(45deg, #FF9AA2, #FFB7B2)',
            'linear-gradient(45deg, #FFDAC1, #E2F0CB)',
            'linear-gradient(45deg, #B5EAD7, #C7CEEA)',
            'linear-gradient(45deg, #E2F0CB, #B5EAD7)',
            'linear-gradient(45deg, #C7CEEA, #FF9AA2)',
            'linear-gradient(45deg, #FFB7B2, #FFDAC1)',
            'linear-gradient(45deg, #C7F0DB, #A1C9F7)',
            'linear-gradient(45deg, #FFD8BE, #FFC1C1)',
            'linear-gradient(45deg, #CFBAE1, #97C1A9)',
            'linear-gradient(45deg, #FFCB91, #FFEFA1)'
        ];

        // Variables for tracking discovered reasons
        let discoveredReasons = 0;
        let totalReasons = reasons.length;
        let discoveredIndices = [];
        let currentGalaxy = 0;
        const galaxiesCount = 10;
        const reasonsPerGalaxy = Math.ceil(totalReasons / galaxiesCount);

        // DOM elements
        const intro = document.getElementById('intro');
        const startButton = document.getElementById('start-button');
        const universeContainer = document.getElementById('universe-container');
        const messageModal = document.getElementById('message-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        const reasonNumber = document.getElementById('reason-number');
        const closeButton = document.getElementById('close-button');
        const progressContainer = document.getElementById('progress-container');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const finalMessage = document.getElementById('final-message');
        const galaxyIndicator = document.getElementById('galaxy-indicator');
        const navigation = document.getElementById('navigation');
        const prevGalaxyBtn = document.getElementById('prev-galaxy');
        const nextGalaxyBtn = document.getElementById('next-galaxy');

        // Start button click event
        startButton.addEventListener('click', () => {
            intro.style.opacity = '0';
            setTimeout(() => {
                intro.style.display = 'none';
                universeContainer.style.display = 'block';
                progressContainer.style.display = 'block';
                galaxyIndicator.style.display = 'block';
                navigation.style.display = 'flex';
                createGalaxies();
                showGalaxy(0);
                startShootingStars();
            }, 1000);
        });

        // Close button click event
        closeButton.addEventListener('click', () => {
            messageModal.classList.remove('active');
        });

        // Navigation buttons events
        prevGalaxyBtn.addEventListener('click', () => {
            if (currentGalaxy > 0) {
                showGalaxy(currentGalaxy - 1);
            }
        });

        nextGalaxyBtn.addEventListener('click', () => {
            if (currentGalaxy < galaxiesCount - 1) {
                showGalaxy(currentGalaxy + 1);
            }
        });

        // Create galaxies with celestial objects
        function createGalaxies() {
            for (let g = 0; g < galaxiesCount; g++) {
                const galaxy = document.createElement('div');
                galaxy.className = 'galaxy';
                galaxy.id = `galaxy-${g}`;
                
                const startIndex = g * reasonsPerGalaxy;
                const endIndex = Math.min((g + 1) * reasonsPerGalaxy, totalReasons);
                
                for (let i = startIndex; i < endIndex; i++) {
                    const isEven = i % 2 === 0;
                    const element = document.createElement('div');
                    element.className = `celestial-object ${isEven ? 'planet' : 'star'}`;
                    element.dataset.index = i;

                    // Random size
                    const size = isEven ? 
                        Math.floor(Math.random() * 40) + 40 : // Planets: 40-80px
                        Math.floor(Math.random() * 20) + 20;  // Stars: 20-40px
                    
                    element.style.width = `${size}px`;
                    element.style.height = `${size}px`;

                    // Random position (avoiding edges)
                    const margin = size + 20;
                    const left = Math.floor(Math.random() * (width - 2 * margin)) + margin;
                    const top = Math.floor(Math.random() * (height - 2 * margin)) + margin;
                    
                    element.style.left = `${left}px`;
                    element.style.top = `${top}px`;

                    // Style planets
                    if (isEven) {
                        const colorIndex = Math.floor(i / 2) % planetColors.length;
                        element.style.background = planetColors[colorIndex];
                        element.textContent = (i + 1);
                    }

                    // Click event
                    element.addEventListener('click', () => {
                        showReason(i);
                    });

                    galaxy.appendChild(element);
                }
                
                universeContainer.appendChild(galaxy);
            }
        }

        // Show specific galaxy
        function showGalaxy(index) {
            const galaxies = document.querySelectorAll('.galaxy');
            galaxies.forEach((galaxy, i) => {
                if (i === index) {
                    galaxy.classList.add('active');
                } else {
                    galaxy.classList.remove('active');
                }
            });
            
            currentGalaxy = index;
            galaxyIndicator.textContent = `Galaxia ${currentGalaxy + 1} de ${galaxiesCount}`;
            
            // Update navigation buttons
            prevGalaxyBtn.disabled = currentGalaxy === 0;
            nextGalaxyBtn.disabled = currentGalaxy === galaxiesCount - 1;
        }

        // Show reason in modal
        function showReason(index) {
            if (!discoveredIndices.includes(index)) {
                discoveredIndices.push(index);
                discoveredReasons++;
                updateProgress();
            }

            const reason = reasons[index];
            modalTitle.textContent = reason.title;
            modalMessage.textContent = reason.message;
            reasonNumber.textContent = index + 1;
            messageModal.classList.add('active');

            // Check if all reasons are discovered
            if (discoveredReasons === totalReasons) {
                setTimeout(() => {
                    showFinalMessage();
                }, 1500);
            }
        }

        // Update progress bar
        function updateProgress() {
            const percentage = (discoveredReasons / totalReasons) * 100;
            progressBar.style.width = `${percentage}%`;
            progressText.textContent = `${discoveredReasons}/${totalReasons} razones descubiertas`;
        }

        // Show final message
        function showFinalMessage() {
            finalMessage.classList.add('active');
        }

        // Initialize
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawStars();