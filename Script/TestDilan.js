 // Base de datos de 100 preguntas organizadas por categorías
        const questions = [
            // GUSTOS PERSONALES (20 preguntas)
            {
                category: "Gustos",
                question: "¿Cuál es mi comida favorita?",
                options: ["🍕 Pizza", "🍝 Pasta", "🍔 Hamburguesas", "🧀 Tajaditas con queso"],
                correct: 3
            },
            {
                category: "Gustos",
                question: "¿Qué bebida prefiero?",
                options: ["☕ Café", "🧃 Jugo natural", "🥤 Coca-cola", "🍺 Cerveza"],
                correct: 1
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi color favorito?",
                options: ["🔵 Azul", "🟣 Morado", "🟢 Verde", "⚫ Negro"],
                correct: 1
            },
            {
                category: "Gustos",
                question: "¿Qué tipo de música me gusta más?",
                options: ["🎵 Pop", "🎸 Rock", "🎤 Reggaeton", "🎶 Bad bunny"],
                correct: 2
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi postre favorito?",
                options: ["🍰 Pastel", "🍦 Helado", "🍫 Chocolate", "🍪 Galletas"],
                correct: 1
            },
            {
                category: "Gustos",
                question: "¿Qué tipo de películas prefiero?",
                options: ["😂 Comedias", "🎬 Drama", "🚀 Ciencia ficción", "🏹 Plomo"],
                correct: 3
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi estación del año favorita?",
                options: ["🌸 Primavera", "☀️ Verano", "🍂 Otoño", "❄️ Invierno"],
                correct: 2
            },
            {
                category: "Gustos",
                question: "¿Qué animal me gusta más?",
                options: ["🐶 Perros", "🐱 Gatos", "🐦 Pájaros", "🐠 Peces"],
                correct: 2
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi género de libros favorito?",
                options: ["📚 Ficción", "📖 Biografías", "🔍 Misterio", "💕 Romance"],
                correct: 0
            },
            {
                category: "Gustos",
                question: "¿Qué tipo de ropa prefiero?",
                options: ["👔 Formal", "👕 Casual", "🏃‍♂️ Deportiva", "🎨 Alternativa"],
                correct: 3
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi sabor de helado favorito?",
                options: ["🍓 Fresa", "🍫 Chocolate", "🍦 Vainilla", "🥭 Mango"],
                correct: 2
            },
            {
                category: "Gustos",
                question: "¿Qué tipo de vacaciones prefiero?",
                options: ["🏖️ Playa", "🏔️ Montaña", "🏛️ Ciudad", "🏕️ Camping"],
                correct: 0
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi hora favorita del día?",
                options: ["🌅 Amanecer", "☀️ Mediodía", "🌅 Atardecer", "🌙 Noche"],
                correct: 0
            },
            {
                category: "Gustos",
                question: "¿Qué tipo de ejercicio prefiero?",
                options: ["🏃‍♂️ Correr", "🏋️‍♂️ Gym", "⛸️ patinaje", "🧘‍♂️ Yoga"],
                correct: 2
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi tipo de pizza favorita?",
                options: ["🍕 Pepperoni", "🧀 Queso", "🍄 Vegetariana", "🍖 Carnes"],
                correct: 1
            },
            {
                category: "Gustos",
                question: "¿Qué red social uso más?",
                options: ["📘 Facebook", "📷 Instagram", "🐦 Twitter", "📱 TikTok"],
                correct: 1
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi tipo de café favorito?",
                options: ["☕ Americano", "🥛 Con leche", "🍮 Cappuccino", "🧊 Frío"],
                correct: 3
            },
            {
                category: "Gustos",
                question: "¿Qué tipo de juegos prefiero?",
                options: ["🎮 Videojuegos", "🃏 Cartas", "🎲 Mesa", "🧩 Puzzles"],
                correct: 0
            },
            {
                category: "Gustos",
                question: "¿Cuál es mi tipo de transporte favorito?",
                options: ["🚗 Auto", "🚌 Transporte público", "🚴‍♂️ Bicicleta", "🚶‍♂️ Caminar"],
                correct: 3
            },
            {
                category: "Gustos",
                question: "¿Qué tipo de clima prefiero?",
                options: ["☀️ Soleado", "🌧️ Lluvioso", "❄️ Frío", "🌤️ Nublado"],
                correct: 3
            },

            // PERSONALIDAD (20 preguntas)
            {
                category: "Personalidad",
                question: "¿Cómo soy en las fiestas?",
                options: ["🎉 El alma de la fiesta", "😊 Sociable pero tranquilo", "🤐 Tímido al principio", "🏠 Prefiero quedarme en casa"],
                correct: 1
            },
            {
                category: "Personalidad",
                question: "¿Cuál es mi mayor virtud?",
                options: ["💝 Generoso", "😂 Divertido", "🤗 Comprensivo", "💪 Determinado"],
                correct: 1
            },
            {
                category: "Personalidad",
                question: "¿Cómo manejo el estrés?",
                options: ["😤 Me enojo fácil", "🧘‍♂️ Me mantengo calmado", "😰 Me pongo nervioso", "🤔 Busco soluciones"],
                correct: 1
            },
            {
                category: "Personalidad",
                question: "¿Qué me motiva más?",
                options: ["🏆 El éxito", "👨‍👩‍👧‍👦 La familia", "💰 El dinero", "🌟 Ayudar a otros"],
                correct: 1
            },
            {
                category: "Personalidad",
                question: "¿Cómo tomo las decisiones?",
                options: ["⚡ Rápido e intuitivo", "🤔 Analizo mucho", "👥 Pido consejos", "📊 Uso datos"],
                correct: 1
            },
            {
                category: "Personalidad",
                question: "¿Qué me hace reír más?",
                options: ["😂 Chistes tontos", "🎭 Comedia inteligente", "😅 Situaciones absurdas", "🤪 Humor negro"],
                correct: 0
            },
            {
                category: "Personalidad",
                question: "¿Cómo expreso mis emociones?",
                options: ["💬 Hablando mucho", "🤐 Las guardo para mí", "😭 Lloro fácil", "🎨 De forma creativa"],
                correct: 3
            },
            {
                category: "Personalidad",
                question: "¿Qué me da más energía?",
                options: ["👥 Estar con gente", "🏠 Estar solo", "🌿 La naturaleza", "🎵 La música"],
                correct: 3
            },
            {
                category: "Personalidad",
                question: "¿Cómo soy con el dinero?",
                options: ["💸 Gastador", "💰 Ahorrador", "📊 Planificador", "🤷‍♂️ Desorganizado"],
                correct: 3
            },
            {
                category: "Personalidad",
                question: "¿Qué me frustra más?",
                options: ["⏰ La impuntualidad", "🤥 Las mentiras", "😴 La pereza", "🗣️ La grosería"],
                correct: 1
            },
            {
                category: "Personalidad",
                question: "¿Cómo soy en el trabajo?",
                options: ["👑 Líder natural", "🤝 Trabajo en equipo", "🎯 Enfocado en resultados", "🎨 Creativo"],
                correct: 0
            },
            {
                category: "Personalidad",
                question: "¿Qué me da más miedo?",
                options: ["🕷️ Arañas", "👥 Hablar en público", "✈️ Volar", "🪱 Los cien pie"],
                correct: 3
            },
            {
                category: "Personalidad",
                question: "¿Cómo prefiero resolver conflictos?",
                options: ["💬 Hablando directamente", "🤐 Evitándolos", "🤝 Buscando compromiso", "⏰ Dejando que pase el tiempo"],
                correct: 0
            },
            {
                category: "Personalidad",
                question: "¿Qué me hace sentir más orgulloso?",
                options: ["🏆 Mis logros", "👨‍👩‍👧‍👦 Mi familia", "🤝 Ayudar a otros", "💪 Superar obstáculos"],
                correct: 3
            },
            {
                category: "Personalidad",
                question: "¿Cómo soy con los secretos?",
                options: ["🤐 Los guardo muy bien", "😅 A veces se me escapan", "🗣️ No soy bueno guardándolos", "🤔 Depende del secreto"],
                correct: 1
            },
            {
                category: "Personalidad",
                question: "¿Qué me relaja más?",
                options: ["🎵 Música", "📚 Leer", "🛁 Un baño", "🌿 Naturaleza"],
                correct: 3
            },
            {
                category: "Personalidad",
                question: "¿Cómo soy con las críticas?",
                options: ["😤 Me molestan", "🤔 Las analizo", "🤗 Me dan igual", "💪 Me motivan"],
                correct: 3
            },
            {
                category: "Personalidad",
                question: "¿Qué me hace más feliz?",
                options: ["🎉 Las sorpresas", "🏠 La rutina", "🆕 Cosas nuevas", "👥 Tiempo con seres queridos"],
                correct: 3
            },
            {
                category: "Personalidad",
                question: "¿Cómo soy con la puntualidad?",
                options: ["⏰ Siempre puntual", "😅 Casi siempre tarde", "🎯 Justo a tiempo", "⏳ Llego muy temprano"],
                correct: 0
            },
            {
                category: "Personalidad",
                question: "¿Qué me caracteriza más?",
                options: ["🧠 Inteligente", "😂 Divertido", "💝 Cariñoso", "💪 Fuerte"],
                correct: 1
            },

            // SUEÑOS Y METAS (15 preguntas)
            {
                category: "Sueños",
                question: "¿Cuál es mi mayor sueño?",
                options: ["🌍 Viajar por el mundo", "💼 Tener mi empresa", "👨‍👩‍👧‍👦 Formar una familia", "🎓 Seguir estudiando"],
                correct: 1
            },
            {
                category: "Sueños",
                question: "¿Dónde me veo en 5 años?",
                options: ["🏠 En nuestra casa", "🌍 Viviendo en otro país", "💼 En mi trabajo ideal", "🎯 Cumpliendo mis metas"],
                correct: 0
            },
            {
                category: "Sueños",
                question: "¿Qué país me gustaría visitar más?",
                options: [" Mexico", "🇮🇹 Italia", "🇫🇷 Francia", "🇦🇺 Australia"],
                correct: 0
            },
            {
                category: "Sueños",
                question: "¿Qué me gustaría aprender?",
                options: ["🎸 Tocar guitarra", "🗣️ Otro idioma", "🍳 Cocinar mejor", "💻 Programación"],
                correct: 3
            },
            {
                category: "Sueños",
                question: "¿Cuál es mi meta profesional?",
                options: ["👑 Ser jefe", "💰 Ganar más dinero", "😊 Ser feliz trabajando", "🌟 Ser reconocido"],
                correct: 2
            },
            {
                category: "Sueños",
                question: "¿Qué tipo de casa me gustaría tener?",
                options: ["🏠 Casa con jardín", "🏢 Apartamento moderno", "🏡 Casa en el campo", "🏖️ Casa en la playa"],
                correct: 0
            },
            {
                category: "Sueños",
                question: "¿Cuántos hijos me gustaría tener?",
                options: ["1️⃣ Uno", "2️⃣ Dos", "3️⃣ Tres", "🤷‍♂️ No estoy seguro"],
                correct: 1
            },
            {
                category: "Sueños",
                question: "¿Qué deporte me gustaría practicar?",
                options: ["⚽ Fútbol", "🏀 Básquet", "🎾 Tenis", "🏊‍♂️ Natación"],
                correct: 3
            },
            {
                category: "Sueños",
                question: "¿Qué me gustaría hacer cuando me jubile?",
                options: ["🌍 Viajar", "🎨 Hobbies", "👨‍👩‍👧‍👦 Tiempo con familia", "🏠 Descansar"],
                correct: 2
            },
            {
                category: "Sueños",
                question: "¿Qué tipo de auto me gustaría tener?",
                options: ["🏎️ Deportivo", "🚙 SUV", "🚗 Sedán", "🚐 Familiar"],
                correct: 3
            },
            {
                category: "Sueños",
                question: "¿Qué me gustaría lograr este año?",
                options: ["💪 Estar en forma", "💰 Ahorrar más", "📚 Aprender algo nuevo", "😊 Ser más feliz"],
                correct: 2
            },
            {
                category: "Sueños",
                question: "¿Dónde me gustaría vivir?",
                options: ["🏙️ En la ciudad", "🏡 En el campo", "🏖️ Cerca del mar", "🏔️ En las montañas"],
                correct: 2
            },
            {
                category: "Sueños",
                question: "¿Qué negocio me gustaría tener?",
                options: ["🍕 Restaurante", "🏪 Tienda", "💻 Empresa de tecnología", "🎨 Algo creativo"],
                correct: 2
            },
            {
                category: "Sueños",
                question: "¿Qué me gustaría hacer en mi tiempo libre?",
                options: ["🎨 Arte", "🎵 Música", "📚 Leer", "🏃 Deporte"],
                correct: 3
            },
            {
                category: "Sueños",
                question: "¿Cuál es mi mayor ambición?",
                options: ["💰 Ser rico", "🌟 Ser famoso", "😊 Ser feliz", "🤝 Ayudar a otros"],
                correct: 2
            },

            // RECUERDOS Y EXPERIENCIAS (15 preguntas)
            {
                category: "Recuerdos",
                question: "¿Cuál fue mi mejor cumpleaños?",
                options: ["🎂 El de los 18", "🎉 El del año pasado", "👨‍👩‍👧‍👦 Uno en familia", "💕 El que pasé contigo"],
                correct: 2
            },
            {
                category: "Recuerdos",
                question: "¿Cuál es mi recuerdo de la infancia favorito?",
                options: ["🎮 Jugando videojuegos", "🏖️ Vacaciones familiares", "🎂 Fiestas de cumpleaños", "🏫 Días de escuela"],
                correct: 0
            },
            {
                category: "Recuerdos",
                question: "¿Cuál fue mi primera mascota?",
                options: ["🐶 Un perro", "🐱 Un gato", "🐦 Un pájaro", "🐠 Un pez"],
                correct: 0
            },
            {
                category: "Recuerdos",
                question: "¿Qué me daba más miedo de niño?",
                options: ["👻 Los fantasmas", "🌙 La oscuridad", "🎭 Los payasos", "🏥 Ir al doctor"],
                correct: 1
            },
            {
                category: "Recuerdos",
                question: "¿Cuál fue mi materia favorita en la escuela?",
                options: ["📊 Matemáticas", "📚 Español", "🔬 Ciencias", "🎨 Arte"],
                correct: 0
            },
            {
                category: "Recuerdos",
                question: "¿Cuál es mi viaje más memorable?",
                options: ["🏖️ A la playa", "🏔️ A las montañas", "🏛️ A una ciudad", "👨‍👩‍👧‍👦 Viaje familiar"],
                correct: 2
            },
            {
                category: "Recuerdos",
                question: "¿Qué me gustaba hacer los fines de semana de niño?",
                options: ["📺 Ver televisión", "🏃‍♂️ Jugar afuera", "🎮 Videojuegos", "👥 Estar con amigos"],
                correct: 1
            },
            {
                category: "Recuerdos",
                question: "¿Cuál fue mi primer trabajo?",
                options: ["🏪 En una tienda", "🍔 En comida rápida", "📞 Call center", "Vender Helado"],
                correct: 3
            },
            {
                category: "Recuerdos",
                question: "¿Qué deporte practicaba de joven?",
                options: ["⚽ Fútbol", "🏀 Básquet", "🏐 Voleibol", "🏃‍♂️ Atletismo"],
                correct: 0
            },
            {
                category: "Recuerdos",
                question: "¿Cuál es mi tradición familiar favorita?",
                options: ["🎄 Navidad", "🎂 Cumpleaños", "🦃 Día de Acción de Gracias", "👨‍👩‍👧‍👦 Reuniones dominicales"],
                correct: 0
            },
            {
                category: "Recuerdos",
                question: "¿Qué me gustaba coleccionar?",
                options: ["🃏 Cartas", "🪙 Monedas", "📚 Libros", "🎮 Videojuegos"],
                correct: 0
            },
            {
                category: "Recuerdos",
                question: "¿Cuál fue mi primera cita?",
                options: ["🎬 Al cine", "🍕 A comer", "🌳 Al parque", "🏠 En casa"],
                correct: 0
            },
            {
                category: "Recuerdos",
                question: "¿Qué me daba más vergüenza de adolescente?",
                options: ["🗣️ Hablar en público", "💃 Bailar", "📸 Las fotos", "👥 Conocer gente nueva"],
                correct: 0
            },
            {
                category: "Recuerdos",
                question: "¿Cuál era mi programa de TV favorito de niño?",
                options: ["📺 Caricaturas", "🎭 Comedias", "🔬 Documentales", "🏃‍♂️ Deportes"],
                correct: 2
            },
            {
                category: "Recuerdos",
                question: "¿Qué quería ser cuando fuera grande?",
                options: ["👨‍🚒 Bombero", "👨‍⚕️ Doctor", "👨‍🏫 Maestro", "👨‍💼 Criminalista"],
                correct: 3
            },

            // RELACIÓN Y AMOR (15 preguntas)
            {
                category: "Amor",
                question: "¿Qué fue lo primero que note de ti?",
                options: ["👀 ojos", "😊 sonrisa", "💬 forma de hablar", "✨ personalidad"],
                correct: 3
            },
            {
                category: "Amor",
                question: "¿Cuál es mi forma favorita de demostrar amor?",
                options: ["💬 Palabras bonitas", "🤗 Abrazos y caricias", "🎁 Regalos", "🤝 Actos de servicio"],
                correct: 3
            },
            {
                category: "Amor",
                question: "¿Qué es lo que más amo de nuestra relación?",
                options: ["💬 Nuestras conversaciones", "😂 Como nos reímos", "🤗 La intimidad", "🌟 Como me haces sentir"],
                correct: 3
            },
            {
                category: "Amor",
                question: "¿Cómo me gustas más?",
                options: ["💻 Cuando te veo por videollamada", "📸 En las fotos que me mandas", "📝 Cuando me escribes algo bonito", "🤗 Cuando te imagino abrazándome"],
                correct: 3

            },
            {
                category: "Amor",
                question: "¿Qué me enamora más de ti?",
                options: ["💝 Tu corazón", "🧠 Tu inteligencia", "😂 Tu humor", "👀 Tu belleza"],
                correct: 0
            },
            {
                category: "Amor",
                question: "¿Cuál es mi apodo favorito para ti?",
                options: ["💕 Amor", "👸 Princesa", "☀️ Sol", " 🥋 Chica taekwondo  "],
                correct: 3
            },
            {
                category: "Amor",
                question: "¿Qué actividad me gusta más hacer contigo?",
                options: ["🎬 Ver películas", "🚶‍♂️ Caminar", "💬 Conversar", "🍽️ Comer juntos"],
                correct: 2
            },
            {
                category: "Amor",
                question: "¿Cuál es mi mayor temor en la relación?",
                options: ["💔 Perderte", "😢 Lastimarte", "🤐 No comunicarme bien", "⏰ No tener tiempo"],
                correct: 2
            },
            {
                category: "Amor",
                question: "¿Qué me hace sentir más amado?",
                options: ["💬 Cuando me dices que me amas", "🤗 Tus abrazos", "👀 Como me miras", "⏰ El tiempo que me das"],
                correct: 3
            },
            {
                category: "Amor",
                question: "¿Cuál es mi plan ideal para una cita?",
                options: ["🍽️Cocinar", "🌅 Ver el atardecer", "🏠 Noche en casa", "🎪 Algo divertido"],
                correct: 0
            },
            {
                category: "Amor",
                question: "¿Qué es lo que más admiro de ti?",
                options: ["💪 Tu fortaleza", "💝 Tu bondad", "🧠 Tu inteligencia", "😂 Tu alegría"],
                correct: 0
            },
            {
                category: "Amor",
                question: "¿Cuál es mi mayor deseo para nosotros?",
                options: ["💒 Casarnos", "🌍 Viajar juntos", "🏠 Vivir juntos", "👨‍👩‍👧‍👦 Formar una familia"],
                correct: 3
            },
            {
                category: "Amor",
                question: "¿Qué me pone más celoso?",
                options: ["👥 Cuando hablas con otros", "📱 Cuando no contestas", "⏰ Cuando no tenemos tiempo", "🤷‍♂️ No soy celoso"],
                correct: 3
            },
            {
                category: "Amor",
                question: "¿Cuál es mi forma favorita de pasar tiempo contigo?",
                options: ["🎬 Viendo series", "💬 Conversando", "🚶‍♂️ Paseando", "🤗 Abrazados"],
                correct: 1
            },
            {
                category: "Amor",
                question: "¿Qué me hace más feliz de ti?",
                options: ["😊 Tu sonrisa", "💬 Tu voz", "🤗 Tus abrazos", "👀 Verte feliz"],
                correct: 3
            },

            // CURIOSIDADES Y DATOS RANDOM (15 preguntas)
            {
                category: "Curiosidades",
                question: "¿Cuál es mi número favorito?",
                options: ["2️⃣ Dos", "🔟 Diez", "1️⃣3️⃣ Trece", "2️⃣1️⃣ Veintiuno"],
                correct: 0
            },
            {
                category: "Curiosidades",
                question: "¿Qué lado de la cama prefiero?",
                options: ["⬅️ Izquierdo", "➡️ Derecho", "🎯 En el medio", "🤷‍♂️ No tengo preferencia"],
                correct: 3
            },
            {
                category: "Curiosidades",
                question: "¿Cuál es mi superstición?",
                options: ["🍀 Trébol de 4 hojas", "🪜 No pasar bajo escaleras", "🐱 Gatos negros", "🤷‍♂️ No soy supersticioso"],
                correct: 3
            },
            {
                category: "Curiosidades",
                question: "¿Qué hago cuando no puedo dormir?",
                options: ["📱 Revisar el teléfono", "📚 Leer", "🎵 Escuchar música", "🤔 Pensar"],
                correct: 0
            },
            {
                category: "Curiosidades",
                question: "¿Cuál es mi manía más rara?",
                options: ["🧹 Ordenar todo", "✅ Revisar todo dos veces", "🎵 Tararear", "🤷‍♂️ No tengo manías"],
                correct: 0
            },
            {
                category: "Curiosidades",
                question: "¿Qué me da más risa?",
                options: ["😂 Memes", "🎭 Comedias", "😅 Situaciones tontas", "🤪 Chistes malos"],
                correct: 3
            },
            {
                category: "Curiosidades",
                question: "¿Cuál es mi talento oculto?",
                options: ["🎵 Cantar", "🎨 Dibujar", "🤹‍♂️ Hacer trucos", "🍳 Cocinar"],
                correct: 2
            },
            {
                category: "Curiosidades",
                question: "¿Qué me relaja más antes de dormir?",
                options: ["📚 Leer", "🎵 Música suave", "📺 Ver algo", "🧘‍♂️ Hablarte"],
                correct: 3
            },
            {
                category: "Curiosidades",
                question: "¿Cuál es mi emoji favorito?",
                options: ["😂 Cara llorando de risa", "❤️ Corazón rojo", "😊 Cara sonriente", "😏 Cara de picardía"],
                correct: 3
            },
            {
                category: "Curiosidades",
                question: "¿Qué hago primero al despertar?",
                options: ["📱 Revisar el teléfono", "🚿 Ducharme", "☕ Tomar café", "🤸‍♂️ Estirarme"],
                correct: 3
            },
            {
                category: "Curiosidades",
                question: "¿Cuál es mi palabra favorita?",
                options: ["💕 Alejandra", "😊 Felicidad", "🌟 Increíble", "🤷‍♂️ No tengo una"],
                correct: 0
            },
            {
                category: "Curiosidades",
                question: "¿Qué me da más nostalgia?",
                options: ["🎵 Música vieja", "📸 Ver fotos", "🏫 Recuerdos de la escuela", "👨‍👩‍👧‍👦 Momentos familiares"],
                correct: 1
            },
            {
                category: "Curiosidades",
                question: "¿Cuál es mi ritual matutino?",
                options: ["☕ Café primero", "🚿 Ducha", "📱 Revisar mensajes", "🤸‍♂️ Ejercicio"],
                correct: 0
            },
            
            {
                category: "Curiosidades",
                question: "¿Qué me da más energía?",
                options: ["☕ Café", "🎵 Música", "💬 Conversar contigo", "☀️ El sol"],
                correct: 3
            },
            {
                category: "Curiosidades",
                question: "¿Cuál es mi mayor logro personal?",
                options: ["🎓 Graduarme", "💼 Mi trabajo actual", "💕 Nuestra relación", "🎯 Cumplir mis metas"],
                correct: 3
            }
        ];

        // Variables del juego
        let currentQuestion = 0;
        let answers = [];
        const totalQuestions = questions.length;

        // Inicializar el test
        function initTest() {
            generateQuestions();
            updateProgress();
            setupEventListeners();
        }

        // Generar todas las preguntas dinámicamente
        function generateQuestions() {
            const container = document.getElementById('questionsContainer');
            
            questions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.className = 'question-container';
                questionDiv.dataset.question = index;
                if (index === 0) questionDiv.classList.add('active');

                questionDiv.innerHTML = `
                    <div class="question">
                        <h3>
                            <span class="question-number">${index + 1}</span>
                            ${q.question}
                            <span class="category-badge">${q.category}</span>
                        </h3>
                        <div class="options">
                            ${q.options.map((option, optIndex) => 
                                `<div class="option" data-value="${optIndex}">${option}</div>`
                            ).join('')}
                        </div>
                    </div>
                `;
                
                container.appendChild(questionDiv);
            });
        }

        // Configurar event listeners
        function setupEventListeners() {
            document.addEventListener('click', function(e) {
                if (e.target.classList.contains('option')) {
                    selectOption(e.target);
                }
            });
        }

        // Seleccionar una opción
        function selectOption(selectedOption) {
            const questionContainer = selectedOption.closest('.question-container');
            const options = questionContainer.querySelectorAll('.option');
            
            options.forEach(option => option.classList.remove('selected'));
            selectedOption.classList.add('selected');
            
            const questionIndex = parseInt(questionContainer.dataset.question);
            const answerValue = parseInt(selectedOption.dataset.value);
            answers[questionIndex] = answerValue;
            
            updateNavigationButtons();
        }

        // Actualizar botones de navegación
        function updateNavigationButtons() {
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const finishBtn = document.getElementById('finishBtn');
            
            prevBtn.disabled = currentQuestion === 0;
            
            if (currentQuestion === totalQuestions - 1) {
                nextBtn.style.display = 'none';
                finishBtn.style.display = answers[currentQuestion] !== undefined ? 'inline-block' : 'none';
            } else {
                nextBtn.style.display = 'inline-block';
                finishBtn.style.display = 'none';
                nextBtn.disabled = answers[currentQuestion] === undefined;
            }
        }

        // Ir a la siguiente pregunta
        function nextQuestion() {
            if (currentQuestion < totalQuestions - 1) {
                document.querySelector(`[data-question="${currentQuestion}"]`).classList.remove('active');
                currentQuestion++;
                document.querySelector(`[data-question="${currentQuestion}"]`).classList.add('active');
                updateProgress();
                updateNavigationButtons();
            }
        }

        // Ir a la pregunta anterior
        function previousQuestion() {
            if (currentQuestion > 0) {
                document.querySelector(`[data-question="${currentQuestion}"]`).classList.remove('active');
                currentQuestion--;
                document.querySelector(`[data-question="${currentQuestion}"]`).classList.add('active');
                updateProgress();
                updateNavigationButtons();
            }
        }

        // Actualizar barra de progreso
        function updateProgress() {
            const progress = ((currentQuestion + 1) / totalQuestions) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
            document.getElementById('progressText').textContent = `Pregunta ${currentQuestion + 1} de ${totalQuestions}`;
        }

        // Mostrar resultados
        function showResults() {
            document.getElementById('navigation').style.display = 'none';
            document.querySelectorAll('.question-container').forEach(container => {
                container.style.display = 'none';
            });
            
            calculateAndDisplayResults();
            document.getElementById('resultContainer').classList.add('active');
        }

        // Calcular y mostrar resultados
        function calculateAndDisplayResults() {
            let totalScore = 0;
            const categoryScores = {};
            
            // Calcular puntuación total y por categorías
            questions.forEach((q, index) => {
                if (answers[index] === q.correct) {
                    totalScore++;
                    categoryScores[q.category] = (categoryScores[q.category] || 0) + 1;
                }
            });

            // Contar preguntas por categoría
            const categoryTotals = {};
            questions.forEach(q => {
                categoryTotals[q.category] = (categoryTotals[q.category] || 0) + 1;
            });

            // Mostrar puntuación total
            document.getElementById('scoreText').textContent = `${totalScore}/${totalQuestions}`;
            
            // Determinar mensaje según puntuación
            const percentage = (totalScore / totalQuestions) * 100;
            let resultData;
            
            if (percentage >= 95) {
                resultData = {
                    title: "🏆 ¡ERES MI ALMA GEMELA CERTIFICADA! 🏆",
                    description: `¡INCREÍBLE! Obtuviste ${totalScore}/${totalQuestions} (${Math.round(percentage)}%). Me conoces mejor que yo mismo. Oficialmente eres la persona perfecta para mí. ¡Te amo infinitamente! 💕✨🌟`
                };
                createHeartAnimation();
            } else if (percentage >= 85) {
                resultData = {
                    title: "💖 ¡CONEXIÓN CÓSMICA TOTAL! 💖",
                    description: `¡EXCELENTE! Obtuviste ${totalScore}/${totalQuestions} (${Math.round(percentage)}%). Tenemos una conexión increíble. Definitivamente las estrellas se alinearon cuando nos conocimos. ¡Eres increíble! ✨💫`
                };
                createHeartAnimation();
            } else if (percentage >= 75) {
                resultData = {
                    title: "🌟 ¡COMPATIBILIDAD PERFECTA! 🌟",
                    description: `¡MUY BIEN! Obtuviste ${totalScore}/${totalQuestions} (${Math.round(percentage)}%). Me conoces súper bien, mi amor. Somos el equipo perfecto. ¡Te adoro! 💝🎯`
                };
            } else if (percentage >= 65) {
                resultData = {
                    title: "😊 ¡GRAN CONEXIÓN! 😊",
                    description: `¡BIEN! Obtuviste ${totalScore}/${totalQuestions} (${Math.round(percentage)}%). Conoces muchas cosas importantes sobre mí. Aunque hay algunas cositas que aún puedes descubrir. ¡Sigamos conociéndonos más! 💭💕`
                };
            } else if (percentage >= 50) {
                resultData = {
                    title: "🤔 ¡BUEN COMIENZO! 🤔",
                    description: `Obtuviste ${totalScore}/${totalQuestions} (${Math.round(percentage)}%). Conoces lo básico sobre mí, pero hay mucho más por descubrir. ¡Tenemos que pasar más tiempo juntos y tener más conversaciones profundas! 💑📚`
                };
            } else {
                resultData = {
                    title: "😅 ¡MISIÓN: CONOCERME MÁS! 😅",
                    description: `Obtuviste ${totalScore}/${totalQuestions} (${Math.round(percentage)}%). Parece que necesitamos muchas más citas, conversaciones y aventuras juntos. ¡Pero no te preocupes, tenemos toda la vida para conocernos mejor! El amor verdadero se construye día a día. 💑🌱`
                };
            }
            
            document.getElementById('resultTitle').textContent = resultData.title;
            document.getElementById('resultDescription').textContent = resultData.description;
            
            // Mostrar resultados por categoría
            displayCategoryResults(categoryScores, categoryTotals);
        }

        // Mostrar resultados por categoría
        function displayCategoryResults(categoryScores, categoryTotals) {
            const container = document.getElementById('categoryResults');
            container.innerHTML = '';
            
            Object.keys(categoryTotals).forEach(category => {
                const score = categoryScores[category] || 0;
                const total = categoryTotals[category];
                const percentage = Math.round((score / total) * 100);
                
                const categoryDiv = document.createElement('div');
                categoryDiv.className = 'category-result';
                categoryDiv.innerHTML = `
                    <h4>${category}</h4>
                    <div class="category-score">${score}/${total}</div>
                    <div>${percentage}%</div>
                `;
                container.appendChild(categoryDiv);
            });
        }

        // Crear animación de corazones
        function createHeartAnimation() {
            const hearts = ['💖', '💕', '💗', '💝', '💘'];
            
            for (let i = 0; i < 15; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
                    heart.style.position = 'fixed';
                    heart.style.left = Math.random() * window.innerWidth + 'px';
                    heart.style.top = window.innerHeight + 'px';
                    heart.style.fontSize = (Math.random() * 2 + 1) + 'em';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '1000';
                    heart.style.animation = 'floatUp 4s ease-out forwards';
                    
                    document.body.appendChild(heart);
                    
                    setTimeout(() => {
                        heart.remove();
                    }, 4000);
                }, i * 300);
            }
        }

        // Reiniciar el test
        function restartTest() {
            currentQuestion = 0;
            answers = [];
            
            document.querySelectorAll('.option').forEach(option => {
                option.classList.remove('selected');
            });
            
            document.querySelectorAll('.question-container').forEach(container => {
                container.classList.remove('active');
            });
            
            document.querySelector('[data-question="0"]').classList.add('active');
            document.getElementById('resultContainer').classList.remove('active');
            document.getElementById('navigation').style.display = 'flex';
            
            updateProgress();
            updateNavigationButtons();
        }

        // Agregar estilos para animaciones
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-120vh) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Inicializar cuando la página carga
        document.addEventListener('DOMContentLoaded', initTest);