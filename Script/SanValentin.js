// ===== SAN VALENTÍN - 14 RAZONES PARA AMARTE =====

// ===== DATOS DE LAS 14 RAZONES =====
const razones = [
    {
        numero: 1,
        emoji: "🔌",
        hint: "Cómo empezó todo...",
        titulo: "Sin manual de usuario",
        texto: "Porque llegaste a mi vida sin manual de usuario… y aun así todo empezó a funcionar.",
        emojiBack: "📖"
    },
    {
        numero: 2,
        emoji: "🧠",
        hint: "Cuando todo falla...",
        titulo: "Claridad al sistema",
        texto: "Porque cuando mi mente está llena de bugs, tú traes claridad al sistema.",
        emojiBack: "🐛"
    },
    {
        numero: 3,
        emoji: "🎨",
        hint: "No eres cualquier cosa...",
        titulo: "Diseño con propósito",
        texto: "Porque eres diseño con propósito, no solo estética bonita.",
        emojiBack: "✨"
    },
    {
        numero: 4,
        emoji: "⚖️",
        hint: "Lo que equilibras en mí...",
        titulo: "Lógica y creatividad",
        texto: "Porque equilibras mi lógica fría con tu creatividad infinita.",
        emojiBack: "🌈"
    },
    {
        numero: 5,
        emoji: "💗",
        hint: "Lo que me enseñaste...",
        titulo: "No todo es código",
        texto: "Porque contigo aprendí que no todo se resuelve con código… a veces se siente.",
        emojiBack: "🫀"
    },
    {
        numero: 6,
        emoji: "🖥️",
        hint: "Mi día a día contigo...",
        titulo: "Mejor interfaz",
        texto: "Porque haces que mis días tengan mejor interfaz y menos errores 404 emocionales.",
        emojiBack: "🚫"
    },
    {
        numero: 7,
        emoji: "🔧",
        hint: "Lo que no intentas...",
        titulo: "Optimizar, no cambiar",
        texto: "Porque no intentas cambiar mi esencia, solo optimizarla.",
        emojiBack: "⚙️"
    },
    {
        numero: 8,
        emoji: "🔄",
        hint: "Cuando discutimos...",
        titulo: "Una actualización",
        texto: "Porque cuando discutimos, no es un \"crash\", es una actualización.",
        emojiBack: "📦"
    },
    {
        numero: 9,
        emoji: "🤫",
        hint: "Mis silencios...",
        titulo: "Lees mi backend",
        texto: "Porque entiendes mis silencios como si leyeras el backend de mi cabeza.",
        emojiBack: "🧩"
    },
    {
        numero: 10,
        emoji: "🔗",
        hint: "Lo que somos juntos...",
        titulo: "Frontend y backend",
        texto: "Porque juntos somos como frontend y backend: diferentes, pero hechos para trabajar conectados.",
        emojiBack: "💻"
    },
    {
        numero: 11,
        emoji: "🚀",
        hint: "Nuestro futuro...",
        titulo: "Compilar el futuro",
        texto: "Porque contigo el futuro no es un proyecto en borrador… es algo que quiero compilar.",
        emojiBack: "📋"
    },
    {
        numero: 12,
        emoji: "♻️",
        hint: "Cuando todo se sobrecarga...",
        titulo: "Reiniciar juntos",
        texto: "Porque aunque a veces el sistema se sobrecargue, seguimos reiniciando juntos.",
        emojiBack: "🔋"
    },
    {
        numero: 13,
        emoji: "🌸",
        hint: "Lo que inspiras...",
        titulo: "Inspiración visual",
        texto: "Porque eres inspiración visual en un mundo lleno de plantillas repetidas.",
        emojiBack: "👑"
    },
    {
        numero: 14,
        emoji: "❤️‍🔥",
        hint: "La razón definitiva...",
        titulo: "Mi versión estable",
        texto: "Porque si mi vida fuera un proyecto, tú serías la versión estable que siempre quiero desplegar.",
        emojiBack: "💝"
    }
];

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createPetals();
    createFloatingHearts();
    renderReasonCards();
    setupScrollAnimations();
    setupScrollProgress();
    startLoveCounter();
    
    // Animación de entrada del hero
    setTimeout(() => {
        document.querySelector('.hero-valentine').classList.add('visible');
    }, 300);
});

// ===== ESTRELLAS DE FONDO =====
function createStars() {
    const container = document.querySelector('.stars-bg');
    if (!container) return;
    const count = 80;

    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (3 + Math.random() * 4) + 's');
        star.style.setProperty('--max-opacity', (0.3 + Math.random() * 0.5).toString());
        star.style.animationDelay = Math.random() * 5 + 's';
        star.style.width = (1 + Math.random() * 2) + 'px';
        star.style.height = star.style.width;
        container.appendChild(star);
    }
}

// ===== PÉTALOS DE ROSA =====
function createPetals() {
    const container = document.querySelector('.petals-container');
    if (!container) return;
    const count = 25;

    for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + '%';
        petal.style.setProperty('--fall-duration', (7 + Math.random() * 8) + 's');
        petal.style.setProperty('--fall-delay', Math.random() * 10 + 's');
        petal.style.width = (12 + Math.random() * 14) + 'px';
        petal.style.height = (14 + Math.random() * 16) + 'px';
        container.appendChild(petal);
    }
}

// ===== CORAZONES FLOTANTES =====
function createFloatingHearts() {
    const container = document.querySelector('.hearts-container');
    if (!container) return;
    const hearts = ['❤️', '💕', '💗', '💖', '💝', '💘', '🩷'];
    const count = 15;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.setProperty('--heart-size', (14 + Math.random() * 18) + 'px');
        heart.style.setProperty('--rise-duration', (8 + Math.random() * 10) + 's');
        heart.style.setProperty('--rise-delay', Math.random() * 12 + 's');
        container.appendChild(heart);
    }
}

// ===== RENDERIZAR TARJETAS =====
function renderReasonCards() {
    const grid = document.getElementById('reasons-grid');
    if (!grid) return;

    razones.forEach((razon, index) => {
        const card = document.createElement('div');
        card.classList.add('reason-card');
        card.dataset.index = index;
        card.style.transitionDelay = (index * 0.08) + 's';

        card.innerHTML = `
            <div class="reason-card-inner">
                <div class="card-front">
                    <div class="card-number">${razon.numero}</div>
                    <div class="card-emoji">${razon.emoji}</div>
                    <div class="card-hint">${razon.hint}</div>
                    <span class="tap-text">Toca para descubrir</span>
                </div>
                <div class="card-back">
                    <span class="card-number-small">#${razon.numero}</span>
                    <div class="reason-emoji">${razon.emojiBack}</div>
                    <div class="reason-title">${razon.titulo}</div>
                    <div class="reason-text">${razon.texto}</div>
                </div>
            </div>
        `;

        card.addEventListener('click', () => toggleCard(card, index));
        grid.appendChild(card);
    });
}

// ===== VOLTEAR TARJETA =====
let flippedCount = 0;
const flippedCards = new Set();

function toggleCard(card, index) {
    card.classList.toggle('flipped');

    if (card.classList.contains('flipped')) {
        if (!flippedCards.has(index)) {
            flippedCards.add(index);
            flippedCount++;
            createMiniHearts(card);

            // Si se descubrieron todas las razones
            if (flippedCount === 14) {
                setTimeout(() => {
                    launchConfetti();
                    showFinalAnimation();
                }, 600);
            }
        }
    }
}

// ===== MINI CORAZONES AL VOLTEAR =====
function createMiniHearts(card) {
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const hearts = ['❤️', '💕', '💗', '🩷'];

    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: ${12 + Math.random() * 12}px;
            pointer-events: none;
            z-index: 200;
            transition: all 1s ease-out;
            opacity: 1;
        `;
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        document.body.appendChild(heart);

        requestAnimationFrame(() => {
            heart.style.left = (centerX + (Math.random() - 0.5) * 150) + 'px';
            heart.style.top = (centerY - 50 - Math.random() * 100) + 'px';
            heart.style.opacity = '0';
            heart.style.transform = `scale(${0.5 + Math.random()}) rotate(${Math.random() * 60 - 30}deg)`;
        });

        setTimeout(() => heart.remove(), 1200);
    }
}

// ===== CONFETTI =====
function launchConfetti() {
    const colors = ['#e91e63', '#ff6b6b', '#ffd700', '#ff69b4', '#ff1493', '#ff4081', '#f48fb1'];
    const shapes = ['circle', 'square', 'heart'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = 6 + Math.random() * 10;

        if (shape === 'heart') {
            confetti.innerHTML = '❤️';
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -20px;
                font-size: ${size}px;
                z-index: 200;
                pointer-events: none;
            `;
        } else {
            confetti.style.cssText = `
                position: fixed;
                left: ${Math.random() * 100}vw;
                top: -20px;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: ${shape === 'circle' ? '50%' : '2px'};
                z-index: 200;
                pointer-events: none;
            `;
        }

        confetti.classList.add('confetti-piece');
        confetti.style.setProperty('--confetti-duration', (2 + Math.random() * 3) + 's');
        confetti.style.setProperty('--confetti-delay', Math.random() * 1.5 + 's');
        confetti.style.setProperty('--confetti-rotation', (360 + Math.random() * 720) + 'deg');

        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// ===== ANIMACIÓN FINAL =====
function showFinalAnimation() {
    const finalMessage = document.querySelector('.final-message');
    if (finalMessage) {
        finalMessage.style.display = 'block';
        setTimeout(() => {
            finalMessage.classList.add('visible');
            finalMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

// ===== SCROLL ANIMATIONS =====
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reason-card, .fade-in').forEach(el => {
        observer.observe(el);
    });
}

// ===== SCROLL PROGRESS BAR =====
function setupScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

// ===== CONTADOR DE AMOR =====
function startLoveCounter() {
    // Fecha desde que son novios: 15 de mayo de 2025
    const startDate = new Date('2025-05-15T00:00:00');

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        const daysEl = document.getElementById('counter-days');
        const hoursEl = document.getElementById('counter-hours');
        const minutesEl = document.getElementById('counter-minutes');
        const secondsEl = document.getElementById('counter-seconds');

        if (daysEl) daysEl.textContent = days;
        if (hoursEl) hoursEl.textContent = hours;
        if (minutesEl) minutesEl.textContent = minutes;
        if (secondsEl) secondsEl.textContent = seconds;
    }

    updateCounter();
    setInterval(updateCounter, 1000);
}
