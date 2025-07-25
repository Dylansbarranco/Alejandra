// Variables globales
let currentPage = 1;
const totalPages = 16;
let isNightMode = false;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeBook();
    loadUserPreferences();
    showWelcomeMessage();
});

// Inicializar el libro
function initializeBook() {
    updatePageDisplay();
    updateNavigationButtons();
    
    // Agregar eventos de teclado
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Agregar efecto de página girando
    addPageFlipEffect();
    
    // Inicializar progreso de lectura
    initializeProgress();
}

// Navegación entre páginas
function nextPage() {
    if (currentPage < totalPages) {
        changePage(currentPage + 1);
    }
}

function previousPage() {
    if (currentPage > 1) {
        changePage(currentPage - 1);
    }
}

function goToPage(pageNumber) {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
        changePage(pageNumber);
        closeMenu();
    }
}

function changePage(newPage) {
    const currentPageElement = document.querySelector(`#page${currentPage}`);
    const newPageElement = document.querySelector(`#page${newPage}`);
    
    if (currentPageElement && newPageElement) {
        // Efecto de transición
        currentPageElement.style.transform = 'translateX(-100%)';
        currentPageElement.style.opacity = '0';
        
        setTimeout(() => {
            currentPageElement.classList.remove('active');
            newPageElement.classList.add('active');
            newPageElement.style.transform = 'translateX(0)';
            newPageElement.style.opacity = '1';
            
            currentPage = newPage;
            updatePageDisplay();
            updateNavigationButtons();
            saveProgress();
            
            // Scroll suave al inicio de la página
            newPageElement.scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
}

// Actualizar display de páginas
function updatePageDisplay() {
    const currentPageSpan = document.getElementById('current-page');
    const totalPagesSpan = document.getElementById('total-pages');
    
    if (currentPageSpan) currentPageSpan.textContent = currentPage;
    if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
}

// Actualizar botones de navegación
function updateNavigationButtons() {
    const prevBtn = document.querySelector('.nav-btn');
    const nextBtn = document.querySelectorAll('.nav-btn')[1];
    
    if (prevBtn) {
        prevBtn.disabled = currentPage === 1;
        prevBtn.style.opacity = currentPage === 1 ? '0.5' : '1';
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.style.opacity = currentPage === totalPages ? '0.5' : '1';
    }
}

// Navegación con teclado
function handleKeyboardNavigation(event) {
    switch(event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            previousPage();
            break;
        case 'ArrowRight':
            event.preventDefault();
            nextPage();
            break;
        case 'Home':
            event.preventDefault();
            goToPage(1);
            break;
        case 'End':
            event.preventDefault();
            goToPage(totalPages);
            break;
        case 'Escape':
            event.preventDefault();
            closeMenu();
            break;
    }
}

// Menú de navegación
function toggleMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay) {
        menuOverlay.classList.toggle('active');
    }
}

function closeMenu() {
    const menuOverlay = document.getElementById('menuOverlay');
    if (menuOverlay) {
        menuOverlay.classList.remove('active');
    }
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', function(event) {
    const menuOverlay = document.getElementById('menuOverlay');
    const menuContent = document.querySelector('.menu-content');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menuOverlay && menuOverlay.classList.contains('active')) {
        if (!menuContent.contains(event.target) && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    }
});

// Modo nocturno
function toggleNightMode() {
    isNightMode = !isNightMode;
    document.body.classList.toggle('night-mode', isNightMode);
    
    const nightModeBtn = document.querySelector('.control-btn[title="Modo nocturno"] i');
    if (nightModeBtn) {
        nightModeBtn.className = isNightMode ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    saveUserPreferences();
    
    // Mostrar notificación
    showNotification(isNightMode ? '🌙 Modo nocturno activado' : '☀️ Modo día activado');
}

// Pantalla completa
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().then(() => {
            showNotification('📖 Modo pantalla completa activado');
        });
    } else {
        document.exitFullscreen().then(() => {
            showNotification('📖 Modo pantalla completa desactivado');
        });
    }
}

// Efectos de página
function addPageFlipEffect() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.addEventListener('transitionstart', () => {
            page.style.transformOrigin = 'left center';
        });
    });
}

// Sistema de progreso
function initializeProgress() {
    const progress = getProgress();
    if (progress.lastPage && progress.lastPage > 1) {
        showContinueOption(progress.lastPage);
    }
}

function saveProgress() {
    const progress = {
        lastPage: currentPage,
        timestamp: new Date().toISOString(),
        totalPagesRead: Math.max(getProgress().totalPagesRead || 0, currentPage)
    };
    localStorage.setItem('bibliaPareja_progress', JSON.stringify(progress));
}

function getProgress() {
    const saved = localStorage.getItem('bibliaPareja_progress');
    return saved ? JSON.parse(saved) : {};
}

function showContinueOption(lastPage) {
    const continueReading = confirm(`¿Quieres continuar desde donde lo dejaste (página ${lastPage})?`);
    if (continueReading) {
        goToPage(lastPage);
    }
}

// Preferencias del usuario
function saveUserPreferences() {
    const preferences = {
        nightMode: isNightMode,
        fontSize: document.body.style.fontSize || '16px'
    };
    localStorage.setItem('bibliaPareja_preferences', JSON.stringify(preferences));
}

function loadUserPreferences() {
    const saved = localStorage.getItem('bibliaPareja_preferences');
    if (saved) {
        const preferences = JSON.parse(saved);
        
        if (preferences.nightMode) {
            toggleNightMode();
        }
        
        if (preferences.fontSize) {
            document.body.style.fontSize = preferences.fontSize;
        }
    }
}

// Sistema de notificaciones
function showNotification(message, duration = 3000) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 25px;
        box-shadow: var(--shadow-medium);
        z-index: 2000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        font-family: var(--body-font);
        font-size: 14px;
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar y remover notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, duration);
}

// Mensaje de bienvenida especial
function showWelcomeMessage() {
    const hasVisited = localStorage.getItem('bibliaPareja_hasVisited');
    if (!hasVisited) {
        setTimeout(() => {
            showSpecialWelcome();
            localStorage.setItem('bibliaPareja_hasVisited', 'true');
        }, 1000);
    }
}

function showSpecialWelcome() {
    const welcomeModal = document.createElement('div');
    welcomeModal.className = 'welcome-modal';
    welcomeModal.innerHTML = `
        <div class="welcome-content">
            <div class="welcome-header">
                <i class="fas fa-heart" style="font-size: 48px; color: var(--love-color); margin-bottom: 20px;"></i>
                <h2 style="font-family: var(--title-font); color: var(--primary-color); margin-bottom: 15px;">¡Bienvenida a Nuestra Aventura! 💕</h2>
            </div>
            <div class="welcome-body">
                <p style="font-size: 18px; line-height: 1.6; margin-bottom: 20px; text-align: center;">
                    Has abierto algo muy especial que preparé para nosotros dos. 
                    Esta es mi invitación para crecer juntos en amor y fe.
                </p>
                <div style="background: rgba(220, 20, 60, 0.1); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <p style="font-style: italic; text-align: center; color: var(--love-color);">
                        "Mejor son dos que uno... porque si caen, el uno levantará a su compañero" - Eclesiastés 4:9-10
                    </p>
                </div>
                <p style="text-align: center; margin-bottom: 25px;">
                    ¿Estás lista para este hermoso viaje conmigo? ❤️
                </p>
            </div>
            <div class="welcome-actions">
                <button onclick="closeWelcomeModal()" style="
                    background: var(--love-color);
                    color: white;
                    border: none;
                    padding: 15px 30px;
                    border-radius: 25px;
                    font-family: var(--body-font);
                    font-size: 16px;
                    cursor: pointer;
                    box-shadow: var(--shadow-medium);
                    transition: all 0.3s ease;
                ">
                    ¡Sí, empecemos! 💖
                </button>
            </div>
        </div>
    `;
    
    welcomeModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        z-index: 3000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.5s ease;
    `;
    
    const welcomeContent = welcomeModal.querySelector('.welcome-content');
    welcomeContent.style.cssText = `
        background: var(--paper-color);
        padding: 40px;
        border-radius: 20px;
        max-width: 500px;
        width: 90%;
        text-align: center;
        box-shadow: var(--shadow-heavy);
        animation: slideIn 0.5s ease;
    `;
    
    document.body.appendChild(welcomeModal);
}

function closeWelcomeModal() {
    const modal = document.querySelector('.welcome-modal');
    if (modal) {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 300);
    }
    
    // Pequeña celebración
    createHeartAnimation();
}

// Animación de corazones
function createHeartAnimation() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.cssText = `
                position: fixed;
                font-size: 24px;
                pointer-events: none;
                z-index: 2000;
                left: ${Math.random() * window.innerWidth}px;
                top: ${window.innerHeight}px;
                animation: floatHeart 3s ease-out forwards;
            `;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 3000);
        }, i * 200);
    }
}

// Funciones de utilidad
function getReadingProgress() {
    const progress = getProgress();
    return {
        percentage: Math.round((progress.totalPagesRead || 0) / totalPages * 100),
        pagesRead: progress.totalPagesRead || 0,
        totalPages: totalPages
    };
}

function exportProgress() {
    const progress = getProgress();
    const data = {
        progress: progress,
        preferences: JSON.parse(localStorage.getItem('bibliaPareja_preferences') || '{}'),
        exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'lectura_biblia_pareja_progreso.json';
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('📊 Progreso exportado exitosamente');
}

// Función para crear marcadores
function toggleBookmark() {
    const bookmarks = JSON.parse(localStorage.getItem('bibliaPareja_bookmarks') || '[]');
    const pageIndex = bookmarks.indexOf(currentPage);
    
    if (pageIndex === -1) {
        bookmarks.push(currentPage);
        showNotification('🔖 Página marcada');
    } else {
        bookmarks.splice(pageIndex, 1);
        showNotification('🔖 Marca removida');
    }
    
    localStorage.setItem('bibliaPareja_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkButton();
}

function updateBookmarkButton() {
    const bookmarks = JSON.parse(localStorage.getItem('bibliaPareja_bookmarks') || '[]');
    const isBookmarked = bookmarks.includes(currentPage);
    
    // Actualizar icono si existe botón de marcador
    const bookmarkBtn = document.querySelector('.bookmark-btn');
    if (bookmarkBtn) {
        bookmarkBtn.innerHTML = isBookmarked ? 
            '<i class="fas fa-bookmark"></i>' : 
            '<i class="far fa-bookmark"></i>';
    }
}

// Función para búsqueda rápida
function quickSearch(searchTerm) {
    const pages = document.querySelectorAll('.page');
    const results = [];
    
    pages.forEach((page, index) => {
        const content = page.textContent.toLowerCase();
        if (content.includes(searchTerm.toLowerCase())) {
            results.push({
                page: index + 1,
                preview: extractPreview(content, searchTerm)
            });
        }
    });
    
    return results;
}

function extractPreview(content, searchTerm) {
    const index = content.toLowerCase().indexOf(searchTerm.toLowerCase());
    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + searchTerm.length + 50);
    return content.substring(start, end) + '...';
}

// Añadir CSS para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    
    @keyframes slideIn {
        from { transform: translateY(-50px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
    
    @keyframes floatHeart {
        from {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-100vh) rotate(180deg);
            opacity: 0;
        }
    }
    
    .notification {
        animation: slideInRight 0.3s ease !important;
    }
    
    @keyframes slideInRight {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
`;
document.head.appendChild(style);

// Event listeners adicionales
window.addEventListener('beforeunload', function() {
    saveProgress();
    saveUserPreferences();
});

// Prevenir clic derecho en imágenes para proteger el contenido
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});

// Lazy loading para optimización
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading si hay imágenes
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

console.log('📖 Guía para Leer la Biblia en Pareja - Cargada con amor ❤️');
console.log('🙏 "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos" - Mateo 18:20');