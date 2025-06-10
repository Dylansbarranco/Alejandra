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

        
        function drawStars() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#0a0a2a';
            ctx.fillRect(0, 0, width, height);

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.fill();

             
                star.y += star.speed;

                
                if (star.y > height) {
                    star.y = 0;
                    star.x = Math.random() * width;
                }
            });

            requestAnimationFrame(drawStars);
        }

        function createShootingStar() {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star';
            
           
            const startX = Math.random() * width;
            const startY = Math.random() * (height / 2);
            
            shootingStar.style.left = `${startX}px`;
            shootingStar.style.top = `${startY}px`;
            
       
            shootingStar.style.animation = `shootingStar ${Math.random() * 2 + 1}s linear forwards`;
            
            document.body.appendChild(shootingStar);
            
           
            setTimeout(() => {
                document.body.removeChild(shootingStar);
            }, 3000);
        }

        
        function startShootingStars() {
            setInterval(createShootingStar, 3000);
        }

       
        const activities = [
            // Experiencias cotidianas
            { title: "Ver el amanecer juntos", message: "Despertar temprano y contemplar cómo el sol pinta el cielo de colores mientras sostengo tu mano." },
            { title: "Cocinar una cena especial", message: "Preparar juntos nuestros platillos favoritos, entre risas y pequeños accidentes en la cocina." },
            { title: "Pasear bajo la lluvia", message: "Caminar sin prisa bajo una lluvia suave, compartiendo un paraguas y sintiendo las gotas en nuestros rostros." },
            { title: "Ver una película abrazados", message: "Acurrucarnos bajo una manta, con palomitas de maíz, viendo una película que nos haga reír y llorar." },
            { title: "Leer un libro juntos", message: "Turnarnos para leer en voz alta nuestro libro favorito, creando voces para los personajes." },
            { title: "Desayunar en la cama", message: "Sorprenderte con un desayuno especial en la cama en un domingo perezoso." },
            { title: "Hacer un picnic", message: "Extender una manta en un parque y disfrutar de comida simple pero deliciosa mientras conversamos sin prisa." },
            { title: "Observar las estrellas", message: "Acostarnos sobre el césped en una noche clara para identificar constelaciones y compartir sueños." },
            { title: "Caminar por la playa", message: "Sentir la arena entre los dedos mientras caminamos por la orilla del mar, dejando nuestras huellas juntas." },
            { title: "Bailar en la sala", message: "Poner nuestra canción favorita y bailar torpemente en la sala, sin importar si alguien nos ve." },
            { title: "Hornear galletas", message: "Ensuciar la cocina con harina mientras intentamos seguir una receta de galletas, probando la masa a escondidas." },
            { title: "Tomar café en silencio", message: "Disfrutar de la compañía del otro en un cómodo silencio, simplemente existiendo juntos." },
            { title: "Hacer un álbum de fotos", message: "Recopilar nuestros momentos favoritos y crear un álbum físico que podamos hojear en el futuro." },
            { title: "Plantar un jardín", message: "Ensuciarnos las manos plantando flores y vegetales, creando vida juntos." },
            { title: "Aprender a bailar", message: "Tomar clases de baile juntos, tropezando y riéndonos mientras aprendemos nuevos pasos." },
            { title: "Decorar para las fiestas", message: "Poner adornos navideños o de otra celebración, creando tradiciones propias." },
            { title: "Hacer ejercicio juntos", message: "Motivarnos mutuamente para mantenernos saludables, ya sea corriendo en el parque o haciendo yoga en casa." },
            { title: "Comprar muebles", message: "Recorrer tiendas discutiendo sobre qué sofá o mesa quedaría mejor en nuestro espacio." },
            { title: "Cuidar el uno del otro cuando estemos enfermos", message: "Preparar sopa caliente y asegurarnos de que el otro esté cómodo cuando no se sienta bien." },
            { title: "Celebrar logros pequeños", message: "Brindar por esas pequeñas victorias del día a día que a veces pasan desapercibidas." },
            
            // Aventuras y viajes
            { title: "Viajar a otro país", message: "Explorar juntos una cultura diferente, perdiéndonos en calles desconocidas y creando recuerdos inolvidables." },
            { title: "Hacer un viaje por carretera", message: "Conducir sin un destino fijo, con música a todo volumen y paradas espontáneas en lugares interesantes." },
            { title: "Acampar bajo las estrellas", message: "Montar una tienda de campaña, hacer una fogata y contar historias mientras asamos malvaviscos." },
            { title: "Visitar un parque de diversiones", message: "Gritar juntos en las montañas rusas y disfrutar de algodón de azúcar como niños." },
            { title: "Explorar una ciudad desconocida", message: "Perdernos en calles nuevas, descubriendo rincones encantadores y cafeterías escondidas." },
            { title: "Hacer senderismo", message: "Conquistar juntos una montaña y maravillarnos con la vista desde la cima." },
            { title: "Nadar en el océano", message: "Sumergirnos en aguas cristalinas, flotando de espaldas mientras miramos el cielo infinito." },
            { title: "Visitar un museo", message: "Recorrer salas llenas de arte e historia, compartiendo nuestras interpretaciones y preferencias." },
            { title: "Asistir a un concierto", message: "Cantar a todo pulmón nuestras canciones favoritas, rodeados de la energía de la multitud." },
            { title: "Hacer un safari fotográfico", message: "Capturar la belleza natural y los momentos especiales a través de nuestras cámaras." },
            { title: "Navegar en kayak", message: "Remar juntos por un río tranquilo, disfrutando del silencio y la naturaleza." },
            { title: "Visitar un parque nacional", message: "Maravillarnos con la belleza natural preservada, caminando por senderos entre árboles centenarios." },
            { title: "Hacer snorkel o buceo", message: "Explorar el mundo submarino, descubriendo juntos la vida colorida bajo el agua." },
            { title: "Volar en globo aerostático", message: "Elevarnos sobre el paisaje al amanecer, sintiendo la tranquilidad de flotar en el aire." },
            { title: "Esquiar o hacer snowboard", message: "Deslizarnos por las montañas nevadas, cayéndonos y levantándonos entre risas." },
            { title: "Visitar un lugar histórico", message: "Caminar por ruinas antiguas o castillos, imaginando las vidas de quienes estuvieron allí antes." },
            { title: "Hacer un crucero", message: "Navegar por días, despertando cada mañana en un lugar diferente para explorar." },
            { title: "Asistir a un festival", message: "Sumergirnos en la música, el arte o la gastronomía de un festival local o internacional." },
            { title: "Hacer parapente o paracaidismo", message: "Vencer juntos el miedo a las alturas y sentir la adrenalina de volar." },
            { title: "Visitar un zoológico o acuario", message: "Maravillarnos con la diversidad de la vida animal, como niños emocionados ante cada nueva criatura." },
            
            // Momentos especiales
            { title: "Celebrar nuestro aniversario", message: "Conmemorar cada año juntos con algo especial que refleje nuestro crecimiento como pareja." },
            { title: "Pasar la Navidad juntos", message: "Crear nuestras propias tradiciones navideñas, desde decorar el árbol hasta intercambiar regalos." },
            { title: "Recibir el Año Nuevo", message: "Contar juntos los últimos segundos del año y sellar el inicio del nuevo con un beso." },
            { title: "Celebrar cumpleaños", message: "Hacer que tu día especial sea memorable con sorpresas y detalles que te hagan sentir amada." },
            { title: "Asistir a una boda", message: "Bailar juntos en la celebración del amor de otros, imaginando quizás nuestro propio futuro." },
            { title: "Organizar una cena con amigos", message: "Abrir nuestro espacio para compartir risas y buena comida con las personas que queremos." },
            { title: "Celebrar logros importantes", message: "Estar ahí para aplaudir tus éxitos y que tú celebres los míos, siendo el mayor apoyo del otro." },
            { title: "Pasar un día festivo con la familia", message: "Compartir tradiciones familiares y crear nuevas juntos, uniendo nuestros mundos." },
            { title: "Tener una cita de aniversario", message: "Recrear nuestra primera cita o inventar una nueva tradición para celebrar nuestro tiempo juntos." },
            { title: "Hacer una fiesta sorpresa", message: "Ver tu cara de asombro cuando entres a una habitación llena de personas que te quieren." },
            { title: "Celebrar San Valentín", message: "Dedicar un día entero a celebrar nuestro amor, ya sea de manera tradicional o con nuestro propio estilo." },
            { title: "Asistir a la graduación del otro", message: "Estar en primera fila para aplaudir cuando recibas tu diploma, lleno de orgullo por ti." },
            { title: "Celebrar un ascenso o nuevo trabajo", message: "Brindar por tus éxitos profesionales y estar ahí para apoyarte en cada paso de tu carrera." },
            { title: "Pasar las vacaciones juntos", message: "Desconectar del mundo y conectar el uno con el otro durante días de descanso y aventura." },
            { title: "Organizar una fiesta temática", message: "Disfrazarnos y transformar nuestro espacio para una celebración divertida y original." },
            { title: "Asistir a una reunión de ex-alumnos", message: "Conocer tu pasado a través de las historias de quienes te conocieron antes que yo." },
            { title: "Celebrar el Día de la Madre/Padre", message: "Honrar a nuestras familias juntos, mostrando gratitud por quienes nos criaron." },
            { title: "Tener una ceremonia de compromiso", message: "Hacer oficial nuestra promesa de construir un futuro juntos, rodeados de nuestros seres queridos." },
            { title: "Celebrar aniversarios de momentos importantes", message: "Recordar no solo el inicio de nuestra relación, sino otros momentos clave que nos han definido." },
            { title: "Crear nuestras propias festividades", message: "Inventar días especiales que celebren aspectos únicos de nuestra relación." },
            
            // Crecimiento personal y en pareja
            { title: "Aprender un idioma juntos", message: "Estudiar un nuevo idioma, practicando juntos y quizás planeando un viaje para usarlo." },
            { title: "Tomar una clase de cocina", message: "Aprender a preparar platillos de una cocina que nos guste, mejorando nuestras habilidades culinarias." },
            { title: "Leer el mismo libro y discutirlo", message: "Compartir nuestras interpretaciones y opiniones, como nuestro propio club de lectura privado." },
            { title: "Establecer metas conjuntas", message: "Soñar juntos sobre nuestro futuro y planificar los pasos para alcanzar esos sueños." },
            { title: "Aprender a tocar un instrumento", message: "Practicar juntos, soportando los sonidos desafinados iniciales hasta lograr tocar una canción." },
            { title: "Tomar un curso de fotografía", message: "Aprender a capturar momentos especiales con mejor técnica, documentando nuestra historia juntos." },
            { title: "Hacer voluntariado", message: "Dedicar tiempo a una causa que nos importe, trabajando juntos para hacer una diferencia." },
            { title: "Aprender a bailar salsa", message: "Movernos al ritmo de la música latina, tropezando al principio pero mejorando con la práctica." },
            { title: "Meditar juntos", message: "Encontrar paz interior lado a lado, compartiendo un momento de tranquilidad en medio del ajetreo diario." },
            { title: "Hacer un retiro espiritual", message: "Conectar con nuestro lado espiritual, sea cual sea nuestra creencia, apoyándonos mutuamente." },
            { title: "Tomar clases de arte", message: "Explorar nuestra creatividad con pintura, cerámica o cualquier forma de expresión artística." },
            { title: "Aprender sobre inversiones", message: "Educarnos juntos sobre finanzas personales y planificar un futuro económicamente estable." },
            { title: "Tomar un curso de primeros auxilios", message: "Aprender habilidades que podrían salvar vidas, incluyendo la del otro." },
            { title: "Aprender a programar", message: "Adentrarnos en el mundo de la tecnología, creando pequeños proyectos juntos." },
            { title: "Estudiar astronomía", message: "Aprender sobre las estrellas y planetas, para luego identificarlos cuando las observemos." },
            { title: "Tomar clases de yoga", message: "Mejorar nuestra flexibilidad y equilibrio, tanto físico como mental." },
            { title: "Aprender sobre vinos", message: "Educar nuestro paladar y disfrutar descubriendo nuevos sabores y maridajes." },
            { title: "Tomar un taller de escritura", message: "Explorar nuestra creatividad a través de las palabras, quizás escribiendo cartas o poemas el uno para el otro." },
            { title: "Aprender jardinería", message: "Descubrir juntos cómo cultivar plantas y flores, creando un espacio verde que crezca con nosotros." },
            
            // Construir un hogar
            { title: "Buscar nuestro primer apartamento", message: "Recorrer diferentes lugares, imaginando cómo sería nuestra vida en cada uno de ellos." },
            { title: "Comprar muebles juntos", message: "Debatir sobre estilos y colores, encontrando un equilibrio que refleje a ambos." },
            { title: "Decorar nuestro espacio", message: "Transformar cuatro paredes en un hogar que cuente nuestra historia." },
            { title: "Cocinar en nuestra cocina", message: "Preparar nuestra primera comida en nuestro propio espacio, aunque sea algo simple." },
            { title: "Plantar un jardín o tener plantas", message: "Añadir vida a nuestro hogar, cuidando juntos de seres vivos que dependen de nosotros." },
            { title: "Organizar una fiesta de inauguración", message: "Invitar a amigos y familia para bendecir nuestro nuevo comienzo." },
            { title: "Crear un rincón de lectura", message: "Designar un espacio acogedor donde podamos perdernos en historias, juntos o por separado." },
            { title: "Colgar fotos y recuerdos", message: "Decorar las paredes con momentos que hemos compartido y queremos recordar." },
            { title: "Establecer rutinas hogareñas", message: "Crear pequeños rituales diarios que hagan de nuestro hogar un refugio." },
            { title: "Adoptar una mascota", message: "Ampliar nuestra familia con un amigo peludo que llene de alegría nuestros días que se llame tulus." },
            { title: "Hacer mejoras en el hogar", message: "Trabajar juntos en pequeños proyectos para hacer nuestro espacio más funcional y acogedor." },
            { title: "Tener una noche de juegos en casa", message: "Invitar amigos para compartir risas y competencia amistosa en nuestro espacio." },
            { title: "Crear un huerto urbano", message: "Cultivar nuestros propios vegetales y hierbas, por pequeño que sea el espacio." },
            { title: "Diseñar un espacio de trabajo", message: "Crear un rincón donde cada uno pueda desarrollar sus proyectos y pasiones." },
            { title: "Hacer manualidades para decorar", message: "Crear juntos elementos decorativos que tengan un significado especial para nosotros." },
            { title: "Organizar una biblioteca compartida", message: "Unir nuestras colecciones de libros y descubrir nuevos títulos a través del otro." },
            { title: "Establecer tradiciones domésticas", message: "Crear pequeños rituales que hagan especial nuestra vida cotidiana." },
            { title: "Planificar renovaciones", message: "Soñar con cambios que podríamos hacer para mejorar nuestro espacio con el tiempo." },
            { title: "Crear un álbum de recuerdos del hogar", message: "Documentar la evolución de nuestro espacio y los momentos vividos en él." },
            { title: "Hacer de nuestro hogar un refugio", message: "Crear un espacio donde ambos nos sintamos seguros, amados y en paz." },
            
            // Experiencias culturales
            { title: "Ir a la ópera", message: "Vestirnos elegantemente y dejarnos llevar por la música y el drama en un teatro histórico." },
            { title: "Visitar una galería de arte", message: "Caminar lentamente entre obras que nos conmuevan, compartiendo nuestras interpretaciones." },
            { title: "Asistir a un ballet", message: "Maravillarnos con la gracia y precisión de los bailarines contando historias sin palabras." },
            { title: "Ver una obra de teatro", message: "Sumergirnos en una historia interpretada en vivo, sintiendo las emociones de los personajes." },
            { title: "Ir a un concierto de música clásica", message: "Cerrar los ojos y dejarnos transportar por la orquesta a mundos de emoción." },
            { title: "Explorar un mercado local", message: "Descubrir sabores, aromas y artesanías que reflejen la cultura del lugar." },
            { title: "Asistir a un festival cultural", message: "Sumergirnos en las tradiciones y expresiones artísticas de diferentes culturas." },
            { title: "Visitar sitios históricos", message: "Caminar por lugares donde la historia ocurrió, imaginando las vidas de quienes estuvieron allí." },
            { title: "Probar cocina de diferentes países", message: "Aventurarnos con sabores nuevos, ampliando nuestros horizontes culinarios." },
            { title: "Asistir a una lectura de poesía", message: "Escuchar palabras que conmueven el alma en un ambiente íntimo y reflexivo." },
            { title: "Ver cine independiente", message: "Descubrir películas fuera del circuito comercial que nos hagan pensar y sentir profundamente." },
            { title: "Visitar un museo de ciencias", message: "Despertar nuestra curiosidad con exhibiciones interactivas que expliquen el mundo." },
            { title: "Asistir a una feria del libro", message: "Perdernos entre estantes de libros, descubriendo nuevos autores y títulos." },
            { title: "Participar en un taller de artesanía local", message: "Aprender técnicas tradicionales de la mano de artesanos experimentados." },
            { title: "Ver un espectáculo de danza contemporánea", message: "Apreciar la expresión corporal como forma de arte y comunicación." },
            { title: "Asistir a una conferencia interesante", message: "Aprender juntos sobre un tema que nos apasione o intrigue." },
            { title: "Explorar arquitectura histórica", message: "Admirar edificios que han resistido el paso del tiempo, apreciando sus detalles y significado." },
            { title: "Participar en una ceremonia tradicional", message: "Respetuosamente experimentar rituales culturales diferentes a los nuestros." },
            { title: "Visitar un jardín botánico", message: "Pasear entre plantas de todo el mundo, aprendiendo sobre biodiversidad y conservación." },
            { title: "Asistir a un festival de cine", message: "Ver múltiples películas en pocos días, discutiendo nuestras impresiones entre funciones." },
            
            // Aventuras al aire libre
            { title: "Hacer una caminata por el bosque", message: "Adentrarnos en la naturaleza, escuchando los sonidos del bosque y respirando aire puro." },
            { title: "Acampar bajo las estrellas", message: "Dormir en una tienda de campaña, contando estrellas fugaces antes de dormir." },
            { title: "Hacer un picnic en un prado", message: "Extender una manta sobre la hierba y disfrutar de comida simple en un entorno hermoso." },
            { title: "Navegar en canoa por un río", message: "Remar juntos, coordinando nuestros movimientos mientras disfrutamos del paisaje." },
            { title: "Montar en bicicleta por un sendero", message: "Sentir el viento en la cara mientras pedaleamos por rutas escénicas." },
            { title: "Observar aves", message: "Armados con binoculares, identificar diferentes especies en su hábitat natural." },
            { title: "Escalar una montaña", message: "Apoyarnos mutuamente para alcanzar la cima y maravillarnos con la vista panorámica." },
            { title: "Nadar en un lago", message: "Sumergirnos en aguas tranquilas, rodeados de naturaleza y silencio." },
            { title: "Hacer un safari fotográfico", message: "Capturar la belleza de la fauna salvaje a través de nuestras cámaras." },
            { title: "Pasear a caballo", message: "Recorrer senderos montados a caballo, conectando con estos nobles animales." },
            { title: "Hacer rafting", message: "Sentir la adrenalina mientras navegamos por rápidos, confiando el uno en el otro." },
            { title: "Explorar una cueva", message: "Adentrarnos en el mundo subterráneo, maravillándonos con formaciones milenarias." },
            { title: "Hacer snorkel en un arrecife", message: "Descubrir el colorido mundo submarino, señalándonos mutuamente descubrimientos." },
            { title: "Acampar en la playa", message: "Dormir arrullados por el sonido de las olas, despertando con la primera luz sobre el mar." },
            { title: "Hacer parapente", message: "Volar juntos sobre paisajes impresionantes, sintiendo la libertad del aire." },
            { title: "Observar una lluvia de estrellas", message: "Acostados sobre una manta, contar estrellas fugaces y pedir deseos." },
            { title: "Hacer sandboard en dunas", message: "Deslizarnos sobre la arena, cayendo y levantándonos entre risas." },
            { title: "Explorar un bosque lluvioso", message: "Caminar bajo el dosel de árboles centenarios, descubriendo la biodiversidad tropical." },
            { title: "Hacer una excursión en globo aerostático", message: "Flotar silenciosamente sobre el paisaje al amanecer, viendo el mundo despertar." },
            { title: "Bucear en aguas profundas", message: "Explorar las profundidades marinas, descubriendo juntos un mundo diferente." },
            
            // Pequeños gestos de amor
            { title: "Escribirte cartas de amor", message: "Plasmar mis sentimientos en papel, creando recuerdos tangibles que puedas atesorar." },
            { title: "Prepararte el desayuno en la cama", message: "Despertarte con el aroma de café recién hecho y tu desayuno favorito." },
            { title: "Darte un masaje después de un día difícil", message: "Ayudarte a relajarte y liberar tensiones con mis manos y un poco de aceite aromático." },
            { title: "Sorprenderte con pequeños regalos", message: "Dejarte detalles que encuentre y me recuerden a ti, sin necesidad de una ocasión especial." },
            { title: "Preparar un baño relajante", message: "Llenar la bañera con agua caliente, sales y pétalos, encender velas y dejarte disfrutar." },
            { title: "Dejarte notas en lugares inesperados", message: "Esconder pequeños mensajes de amor que encuentres a lo largo del día." },
            { title: "Recordar fechas importantes", message: "Celebrar no solo los grandes aniversarios, sino también los pequeños hitos de nuestra relación." },
            { title: "Traerte tu comida favorita", message: "Sorprenderte con ese platillo que tanto te gusta cuando menos lo esperes." },
            { title: "Cuidarte cuando estés enferma", message: "Estar a tu lado con sopa caliente, medicinas y todo mi cariño cuando no te sientas bien." },
            { title: "Escuchar atentamente", message: "Darte toda mi atención cuando me cuentes sobre tu día o tus preocupaciones." },
            { title: "Enviarte mensajes durante el día", message: "Hacerte saber que pienso en ti incluso cuando estamos ocupados o separados." },
            { title: "Hacer tareas que no te gustan", message: "Encargarme de esas pequeñas responsabilidades que sé que no disfrutas." },
            { title: "Apoyar tus sueños", message: "Ser tu mayor animador en cada proyecto o meta que te propongas." },
            { title: "Recordar detalles que mencionas", message: "Prestar atención a las pequeñas cosas que dices para sorprenderte más adelante." },
            { title: "Crear una playlist para ti", message: "Seleccionar canciones que me recuerden a ti o a momentos especiales juntos." },
            { title: "Hacerte reír cuando estés triste", message: "Esforzarme por levantarte el ánimo en los días difíciles." },
            { title: "Traerte flores sin motivo", message: "Sorprenderte con tus flores favoritas simplemente porque me acordé de ti." },
            { title: "Preparar tu bebida favorita", message: "Tener lista esa taza de té o café justo como te gusta cuando la necesites." },
            { title: "Abrazarte por sorpresa", message: "Rodearte con mis brazos cuando menos lo esperes, solo porque puedo." },
            { title: "Decirte 'te quiero' todos los días", message: "Recordarte constantemente lo importante que eres para mí." },
            
            // Sueños a largo plazo
            { title: "Planear nuestro futuro", message: "Sentarnos a hablar sobre dónde nos vemos en 5, 10 o 20 años, soñando juntos." },
            { title: "Ahorrar para una casa", message: "Trabajar juntos hacia la meta de tener nuestro propio hogar algún día." },
            { title: "Viajar por el mundo", message: "Crear una lista de lugares que queremos visitar y empezar a planificar cómo hacerlo realidad." },
            { title: "Aprender el idioma del otro", message: "Sumergirme en tu cultura a través del lenguaje, para entenderte mejor." },
            { title: "Crear tradiciones familiares", message: "Establecer rituales y costumbres que sean únicamente nuestros y que podamos pasar a otros." },
            { title: "Envejecer juntos", message: "Imaginar cómo seremos cuando seamos mayores, aún tomados de la mano y enamorados." },
            { title: "Celebrar aniversarios importantes", message: "Planear algo especial para marcar cada año que pasamos juntos." },
            { title: "Superar desafíos juntos", message: "Enfrentar las dificultades de la vida como un equipo, saliendo más fuertes de cada prueba." },
            { title: "Construir una biblioteca compartida", message: "Coleccionar libros que ambos amemos, creando un tesoro de historias e ideas." },
            { title: "Plantar un árbol", message: "Sembrar algo que crezca con nosotros a lo largo de los años, simbolizando nuestro amor." },
            { title: "Aprender a bailar para nuestro aniversario", message: "Practicar un baile especial para celebrar cada año juntos." },
            { title: "Renovar votos", message: "Reafirmar nuestro compromiso en momentos significativos de nuestro camino juntos." },
            { title: "Escribir un diario conjunto", message: "Documentar nuestra historia de amor a lo largo de los años, alternando entradas." },
            { title: "Crear un álbum de recuerdos", message: "Guardar tickets, fotos y pequeños objetos que cuenten la historia de nuestra relación." },
            { title: "Aprender a cocinar platos de nuestras familias", message: "Preservar tradiciones culinarias de ambas familias, fusionándolas." },
            { title: "Establecer metas financieras juntos", message: "Planificar nuestro futuro económico para tener estabilidad y cumplir sueños." },
            { title: "Crear un jardín que crezca con nosotros", message: "Plantar flores y árboles que florezcan año tras año, como nuestro amor." },
            { title: "Apoyarnos en nuestras carreras", message: "Ser el mayor apoyo del otro en los altibajos profesionales y celebrar cada logro." },
            { title: "Mantener viva la chispa", message: "Comprometernos a seguir sorprendiéndonos y enamorándonos cada día." },
            { title: "Crear un legado juntos", message: "Dejar una marca positiva en el mundo, ya sea a través de nuestro trabajo, acciones o amor." }
        ];

        
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

        
        let discoveredActivities = 0;
        let totalActivities = activities.length;
        let discoveredIndices = [];
        let currentGalaxy = 0;
        const galaxiesCount = 10;
        const activitiesPerGalaxy = Math.ceil(totalActivities / galaxiesCount);

       
        const intro = document.getElementById('intro');
        const startButton = document.getElementById('start-button');
        const universeContainer = document.getElementById('universe-container');
        const messageModal = document.getElementById('message-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        const activityNumber = document.getElementById('activity-number');
        const closeButton = document.getElementById('close-button');
        const progressContainer = document.getElementById('progress-container');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const finalMessage = document.getElementById('final-message');
        const galaxyIndicator = document.getElementById('galaxy-indicator');
        const navigation = document.getElementById('navigation');
        const prevGalaxyBtn = document.getElementById('prev-galaxy');
        const nextGalaxyBtn = document.getElementById('next-galaxy');

     
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

        
        closeButton.addEventListener('click', () => {
            messageModal.classList.remove('active');
        });

       
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

        
        function createGalaxies() {
            for (let g = 0; g < galaxiesCount; g++) {
                const galaxy = document.createElement('div');
                galaxy.className = 'galaxy';
                galaxy.id = `galaxy-${g}`;
                
                const startIndex = g * activitiesPerGalaxy;
                const endIndex = Math.min((g + 1) * activitiesPerGalaxy, totalActivities);
                
                for (let i = startIndex; i < endIndex; i++) {
                    const isEven = i % 2 === 0;
                    const element = document.createElement('div');
                    element.className = `celestial-object ${isEven ? 'planet' : 'star'}`;
                    element.dataset.index = i;

                    
                    const size = isEven ? 
                        Math.floor(Math.random() * 40) + 40 : 
                        Math.floor(Math.random() * 20) + 20;  
                    
                    element.style.width = `${size}px`;
                    element.style.height = `${size}px`;

                
                    const margin = size + 20;
                    const left = Math.floor(Math.random() * (width - 2 * margin)) + margin;
                    const top = Math.floor(Math.random() * (height - 2 * margin)) + margin;
                    
                    element.style.left = `${left}px`;
                    element.style.top = `${top}px`;

                    
                    if (isEven) {
                        const colorIndex = Math.floor(i / 2) % planetColors.length;
                        element.style.background = planetColors[colorIndex];
                        element.textContent = (i + 1);
                    }

                    
                    element.addEventListener('click', () => {
                        showActivity(i);
                    });

                    galaxy.appendChild(element);
                }
                
                universeContainer.appendChild(galaxy);
            }
        }


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
            
      
            prevGalaxyBtn.disabled = currentGalaxy === 0;
            nextGalaxyBtn.disabled = currentGalaxy === galaxiesCount - 1;
        }


        function showActivity(index) {
            if (!discoveredIndices.includes(index)) {
                discoveredIndices.push(index);
                discoveredActivities++;
                updateProgress();
            }

            const activity = activities[index];
            modalTitle.textContent = activity.title;
            modalMessage.textContent = activity.message;
            activityNumber.textContent = index + 1;
            messageModal.classList.add('active');

           
            if (discoveredActivities === totalActivities) {
                setTimeout(() => {
                    showFinalMessage();
                }, 1500);
            }
        }

 
        function updateProgress() {
            const percentage = (discoveredActivities / totalActivities) * 100;
            progressBar.style.width = `${percentage}%`;
            progressText.textContent = `${discoveredActivities}/${totalActivities} deseos descubiertos`;
        }

       
        function showFinalMessage() {
            finalMessage.classList.add('active');
        }

        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawStars();