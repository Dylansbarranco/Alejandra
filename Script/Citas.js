// Estado de la aplicación
let currentPage = "cover"
let currentDate = 1

// Datos completos para las 100 citas basados en tu lista
const datesData = {
  1: {
    title: 'Día 1 - "Videollamada mirándose sin hablar por 5 minutos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  2: {
    title: 'Día 2 - "Cena virtual sincronizada"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  3: {
    title: 'Día 3 - "Jugar 20 preguntas sobre su infancia"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  4: {
    title: 'Día 4 - "Hacer una playlist con canciones que los definan"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  5: {
    title: 'Día 5 - "Contarse una anécdota vergonzosa"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  6: {
    title: 'Día 6 - "Dibujarse mutuamente y mostrarse el resultado"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  7: {
    title: 'Día 7 - "Escribirse una carta digital para leer en llamada"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  8: {
    title: 'Día 8 - "Jugar Skribbl.io o Gartic"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  9: {
    title: 'Día 9 - "Enviar memes del día y votar cuál es el mejor"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  10: {
    title: 'Día 10 - "Jugar a ¿Quién conoce más al otro?"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  11: {
    title: 'Día 11 - "Hacer un reto de TikTok juntos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  12: {
    title: 'Día 12 - "Armar memes con sus fotos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  13: {
    title: 'Día 13 - "Jugar Adivina la canción con solo emojis"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  14: {
    title: 'Día 14 - "Torneo de juego online"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  15: {
    title: 'Día 15 - "Escribir una historia juntos, línea por línea"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  16: {
    title: 'Día 16 - "Hacer un dibujo a ciegas con instrucciones del otro"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  17: {
    title: 'Día 17 - "Inventar una receta y compartirla"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  18: {
    title: 'Día 18 - "Diseñar el logo de su amor"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  19: {
    title: 'Día 19 - "Grabar una nota de voz actuando como personajes"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  20: {
    title: 'Día 20 - "Crear juntos un álbum de recuerdos digital"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  21: {
    title: 'Día 21 - "Escribir un poema entre los dos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  22: {
    title: 'Día 22 - "Contarse sus miedos más grandes"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  23: {
    title: 'Día 23 - "Hacer una lista de sueños a futuro juntos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  24: {
    title: 'Día 24 - "Jugar si estuviéramos juntos, ahora haríamos..."',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  25: {
    title: 'Día 25 - "Leer una carta o texto de amor en voz alta"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  26: {
    title: 'Día 26 - "Contarse qué admiran uno del otro"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  27: {
    title: 'Día 27 - "Hacer un test de personalidad y comparar resultados"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  28: {
    title: 'Día 28 - "Recordar su primer te quiero o te amo"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  29: {
    title: 'Día 29 - "Explorar una ciudad en Google Maps como turistas"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  30: {
    title: 'Día 30 - "Visitar un museo virtual"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  31: {
    title: 'Día 31 - "Planear juntos un viaje ficticio"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  32: {
    title: 'Día 32 - "Ver un documental de otro país"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  33: {
    title: 'Día 33 - "Inventar su propio país con reglas, bandera y cultura"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  34: {
    title: 'Día 34 - "Ver un vlog de viajes y comentarlo"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  35: {
    title: 'Día 35 - "Aprender juntos 5 frases en otro idioma"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  36: {
    title: 'Día 36 - "Hacer videollamada mientras desayunan"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  37: {
    title: 'Día 37 - "Escuchar la misma playlist todo el día"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  38: {
    title: 'Día 38 - "Enviar una foto de su lugar favorito en casa"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  39: {
    title: 'Día 39 - "Contarse cómo fue su día, pero en tercera persona"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  40: {
    title: 'Día 40 - "Hacer limpieza con música y llamarse al mismo tiempo"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  41: {
    title: 'Día 41 - "Dibujar su rutina diaria como historieta"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  42: {
    title: 'Día 42 - "Vestirse igual para la videollamada"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  43: {
    title: 'Día 43 - "Jugar Yo nunca nunca versión romántica"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  44: {
    title: 'Día 44 - "Escribir una mini historia sensual"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  45: {
    title: 'Día 45 - "Jugar a decirse frases provocadoras sin reírse"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  46: {
    title: 'Día 46 - "Compartir una fantasía"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  47: {
    title: 'Día 47 - "Hacer una videollamada con temática sexy light"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  48: {
    title: 'Día 48 - "Crear una lista de cosas que haremos al vernos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  49: {
    title: 'Día 49 - "Mandar un audio con una confesión cariñosa"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  50: {
    title: 'Día 50 - "Ver una peli romántica y comentarla"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  51: {
    title: 'Día 51 - "Maratón de cortos animados"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  52: {
    title: 'Día 52 - "Doblar una escena de película con sus voces"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  53: {
    title: 'Día 53 - "Escoger una película para ver al mismo tiempo"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  54: {
    title: 'Día 54 - "Recrear una escena cliché por videollamada"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  55: {
    title: 'Día 55 - "Ver su película favorita del otro"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  56: {
    title: 'Día 56 - "Grabar sus reacciones viendo una peli intensa"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  57: {
    title: 'Día 57 - "Diseñar su casa ideal en dibujo o Canva"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  58: {
    title: 'Día 58 - "Escribir una canción sencilla juntos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  59: {
    title: 'Día 59 - "Hacer un reel con fotos juntos o recuerdos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  60: {
    title: 'Día 60 - "Escribir un cuento sobre cómo se conocieron"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  61: {
    title: 'Día 61 - "Diseñar su escudo de pareja"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  62: {
    title: 'Día 62 - "Crear un fondo de pantalla para ambos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  63: {
    title: 'Día 63 - "Escribir una carta para el futuro"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  64: {
    title: 'Día 64 - "Debatir un tema serio"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  65: {
    title: 'Día 65 - "Preguntarse mutuamente: ¿Qué harías si...?"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  66: {
    title: 'Día 66 - "Contarse qué harían si cambiaran de cuerpo un día"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  67: {
    title: 'Día 67 - "Responder cómo sería nuestra vida en 10 años"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  68: {
    title: 'Día 68 - "Hacer un test random y compartir"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  69: {
    title: 'Día 69 - "Hacerse preguntas locas tipo ¿serías un pan o un gato?"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  70: {
    title: 'Día 70 - "Planear un negocio ficticio juntos"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  71: {
    title: 'Día 71 - "Crear un saludo virtual solo de ustedes"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  72: {
    title: 'Día 72 - "Mandarse un mensaje todos los días a la misma hora"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  73: {
    title: 'Día 73 - "Leer juntos una carta de amor famosa"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  74: {
    title: 'Día 74 - "Hacer un altar de recuerdos digitales"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  75: {
    title: 'Día 75 - "Hacerse un tatuaje falso con las iniciales del otro"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  76: {
    title: 'Día 76 - "Establecer una frase clave para cuando se extrañen"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  77: {
    title: 'Día 77 - "Grabar una promesa de amor en video"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  78: {
    title: 'Día 78 - "Hacer una meditación juntos por videollamada"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  79: {
    title: 'Día 79 - "Enviarse un audio relajante antes de dormir"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  80: {
    title: 'Día 80 - "Hacer yoga juntos por Zoom"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  81: {
    title: 'Día 81 - "Escuchar la misma música mientras se relajan"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  82: {
    title: 'Día 82 - "Compartir su zona segura emocional"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  83: {
    title: 'Día 83 - "Contar qué parte del cuerpo del otro más aman"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  84: {
    title: 'Día 84 - "Dormir con llamada encendida y solo audio"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  85: {
    title: 'Día 85 - "Enviarle un correo sorpresa con palabras bonitas"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  86: {
    title: 'Día 86 - "Mandarle algo por correo real"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  87: {
    title: 'Día 87 - "Grabarle un video sorpresa diciendo cuánto la amas"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  88: {
    title: 'Día 88 - "Hacer un edit de fotos de ustedes"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  89: {
    title: 'Día 89 - "Mandar un paquete digital con stickers y memes personalizados"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  90: {
    title: 'Día 90 - "Enviar un mensaje con una historia inventada sobre ustedes en el futuro"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  91: {
    title: 'Día 91 - "Enviarse flores virtuales"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  92: {
    title: 'Día 92 - "Hacer un resumen de sus citas favoritas"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  93: {
    title: 'Día 93 - "Volver a hacer la primera cita (con mejoras)"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  94: {
    title: 'Día 94 - "Releer las cartas o audios enviados"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  95: {
    title: 'Día 95 - "Hacer una videollamada larga tipo noche de cita"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  96: {
    title: 'Día 96 - "Crear un video resumen de estos 100 días"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  97: {
    title: 'Día 97 - "Escribir 10 razones por las que el otro es tu persona"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  98: {
    title: 'Día 98 - "Hacer un test: ¿qué tan bien me conoces?"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  99: {
    title: 'Día 99 - "Grabar un mensaje como si estuvieran juntos físicamente"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
  100: {
    title: 'Día 100 - "Cerrar con una carta de agradecimiento por estos 100 días"',
    description: "[Aquí va la descripción de cómo fue esta cita]",
    phrase: "[Aquí va la frase del día]",
    song: "[Aquí va la canción de Spotify del día]",
    spotifyLink: "https://open.spotify.com/",
    image1: "/placeholder.svg?height=300&width=400",
    image2: "/placeholder.svg?height=300&width=400",
    reflection: "[Aquí va la reflexión del día]",
  },
}

// Inicializar la aplicación
function initApp() {
  setCurrentDate()
  showPage("cover")
}

// Establecer fechas actuales
function setCurrentDate() {
  const today = new Date()
  const dateString = today.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  document.getElementById("contract-date").textContent = dateString
  document.getElementById("contract-date-2").textContent = dateString
  document.getElementById("publication-date").textContent = dateString
}

// Navegación entre páginas
function showPage(pageId) {
  // Ocultar todas las páginas
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active")
  })

  // Mostrar la página seleccionada
  document.getElementById(pageId).classList.add("active")
  currentPage = pageId

  // Cerrar menú flotante
  document.getElementById("menu-items").classList.remove("active")
}

function nextPage() {
  const pages = ["cover", "intro", "contract", "index", "dates", "back-cover"]
  const currentIndex = pages.indexOf(currentPage)

  if (currentIndex < pages.length - 1) {
    showPage(pages[currentIndex + 1])
  }
}

function prevPage() {
  const pages = ["cover", "intro", "contract", "index", "dates", "back-cover"]
  const currentIndex = pages.indexOf(currentPage)

  if (currentIndex > 0) {
    showPage(pages[currentIndex - 1])
  }
}

function goToPage(pageId) {
  showPage(pageId)
}

function goToStart() {
  showPage("cover")
}

function goToIndex() {
  showPage("index")
}

// Navegación de citas
function showDates() {
  currentDate = 1
  updateDateContent()
  showPage("dates")
}

function nextDate() {
  if (currentDate < 100) {
    currentDate++
    updateDateContent()
  }
}

function prevDate() {
  if (currentDate > 1) {
    currentDate--
    updateDateContent()
  }
}

function updateDateContent() {
  const dateData = datesData[currentDate]

  document.getElementById("date-title").textContent = dateData.title
  document.getElementById("current-date").textContent = currentDate
  document.getElementById("date-desc").textContent = dateData.description
  document.getElementById("date-phrase").textContent = dateData.phrase
  document.getElementById("song-name").textContent = dateData.song
  document.getElementById("spotify-link").href = dateData.spotifyLink
  document.getElementById("date-photo-1").src = dateData.image1
  document.getElementById("date-photo-2").src = dateData.image2
  document.getElementById("date-photo-1").alt = `Foto 1 del ${dateData.title}`
  document.getElementById("date-photo-2").alt = `Foto 2 del ${dateData.title}`
  document.getElementById("date-reflection-text").textContent = dateData.reflection

  // Actualizar botones de navegación
  document.getElementById("prev-date-btn").disabled = currentDate === 1
  document.getElementById("next-date-btn").disabled = currentDate === 100

  if (currentDate === 1) {
    document.getElementById("prev-date-btn").style.opacity = "0.5"
  } else {
    document.getElementById("prev-date-btn").style.opacity = "1"
  }

  if (currentDate === 100) {
    document.getElementById("next-date-btn").style.opacity = "0.5"
  } else {
    document.getElementById("next-date-btn").style.opacity = "1"
  }
}

// Menú flotante
function toggleMenu() {
  const menuItems = document.getElementById("menu-items")
  menuItems.classList.toggle("active")
}

// Cerrar menú al hacer clic fuera
document.addEventListener("click", (event) => {
  const menu = document.querySelector(".floating-menu")
  const menuItems = document.getElementById("menu-items")

  if (!menu.contains(event.target)) {
    menuItems.classList.remove("active")
  }
})

// Navegación con teclado
document.addEventListener("keydown", (event) => {
  if (currentPage === "dates") {
    if (event.key === "ArrowLeft" && currentDate > 1) {
      prevDate()
    } else if (event.key === "ArrowRight" && currentDate < 100) {
      nextDate()
    }
  }
})

// Inicializar cuando se carga la página
document.addEventListener("DOMContentLoaded", initApp)

// Animaciones adicionales
function addHeartAnimation() {
  const heart = document.createElement("div")
  heart.innerHTML = "💜"
  heart.style.position = "fixed"
  heart.style.left = Math.random() * window.innerWidth + "px"
  heart.style.top = window.innerHeight + "px"
  heart.style.fontSize = "2rem"
  heart.style.pointerEvents = "none"
  heart.style.zIndex = "9999"
  heart.style.animation = "floatUp 3s ease-out forwards"

  document.body.appendChild(heart)

  setTimeout(() => {
    heart.remove()
  }, 3000)
}

// CSS para la animación de corazones
const style = document.createElement("style")
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Activar animación de corazones ocasionalmente
setInterval(() => {
  if (Math.random() < 0.1) {
    // 10% de probabilidad cada 5 segundos
    addHeartAnimation()
  }
}, 5000)
