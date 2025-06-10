 // Cursor personalizado
        const cursor = document.getElementById('cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Crear luces misteriosas
        function createMysteriousLights() {
            const lightsContainer = document.getElementById('lights');
            const numberOfLights = 15;
            
            for (let i = 0; i < numberOfLights; i++) {
                const light = document.createElement('div');
                light.className = 'light';
                light.style.left = Math.random() * 100 + '%';
                light.style.top = Math.random() * 100 + '%';
                light.style.animationDelay = Math.random() * 4 + 's';
                light.style.animationDuration = (Math.random() * 2 + 3) + 's';
                lightsContainer.appendChild(light);
            }
        }
        
        // Crear humo misterioso
        function createSmoke() {
            const smoke = document.createElement('div');
            smoke.className = 'smoke';
            smoke.style.left = Math.random() * 100 + '%';
            smoke.style.bottom = '0px';
            smoke.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(smoke);
            
            setTimeout(() => {
                smoke.remove();
            }, 8000);
        }
        
        function revealSecret() {
            const forbiddenSecrets = [
                "🌙 El secreto ha sido revelado... Nuestras almas están entrelazadas por la eternidad 🌙",
                "🔥 En la oscuridad de la noche, nuestros corazones laten como uno solo 🔥",
                "💀 El destino nos ha unido en un baile macabro de pasión infinita 💀",
                "🖤 Somos dos sombras que se funden en una sola esencia prohibida 🖤",
                "⚡ La electricidad entre nosotros podría incendiar el mundo entero ⚡",
                "🌹 Como rosas negras en un jardín maldito, florecemos en la oscuridad 🌹"
            ];
            
            const randomSecret = forbiddenSecrets[Math.floor(Math.random() * forbiddenSecrets.length)];
            
            // Crear efecto de revelación dramática
            document.body.style.animation = 'flash 0.5s ease-in-out';
            
            setTimeout(() => {
                alert(randomSecret);
                document.body.style.animation = '';
            }, 250);
            
            // Crear explosión de humo
            createSmokeExplosion();
            
            // Crear luces parpadeantes intensas
            createIntenseLights();
        }
        
        function createSmokeExplosion() {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const smoke = document.createElement('div');
                    smoke.innerHTML = '💨';
                    smoke.style.position = 'fixed';
                    smoke.style.left = '50%';
                    smoke.style.top = '50%';
                    smoke.style.fontSize = Math.random() * 15 + 10 + 'px';
                    smoke.style.color = `rgba(139, 0, 0, ${Math.random() * 0.8 + 0.2})`;
                    smoke.style.pointerEvents = 'none';
                    smoke.style.zIndex = '1000';
                    smoke.style.textShadow = '0 0 10px rgba(139, 0, 0, 0.8)';
                    
                    const angle = (i / 20) * 360;
                    const distance = Math.random() * 200 + 50;
                    smoke.style.setProperty('--angle', angle + 'deg');
                    smoke.style.setProperty('--distance', distance + 'px');
                    smoke.style.animation = 'smokeExplosion 4s ease-out forwards';
                    
                    document.body.appendChild(smoke);
                    
                    setTimeout(() => {
                        smoke.remove();
                    }, 4000);
                }, i * 50);
            }
        }
        
        function createIntenseLights() {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const light = document.createElement('div');
                    light.style.position = 'fixed';
                    light.style.width = '4px';
                    light.style.height = '4px';
                    light.style.background = '#8b0000';
                    light.style.borderRadius = '50%';
                    light.style.left = Math.random() * 100 + '%';
                    light.style.top = Math.random() * 100 + '%';
                    light.style.boxShadow = '0 0 20px #8b0000, 0 0 40px #8b0000';
                    light.style.animation = 'intenseBlink 0.2s ease-in-out infinite';
                    light.style.zIndex = '1000';
                    document.body.appendChild(light);
                    
                    setTimeout(() => {
                        light.remove();
                    }, 2000);
                }, i * 100);
            }
        }
        
        // Agregar estilos de animación
        const mysteriousStyle = document.createElement('style');
        mysteriousStyle.textContent = `
            @keyframes smokeExplosion {
                0% { 
                    opacity: 1; 
                    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(1); 
                }
                100% { 
                    opacity: 0; 
                    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance)) scale(2); 
                }
            }
            
            @keyframes intenseBlink {
                0%, 100% { opacity: 0.3; transform: scale(1); }
                50% { opacity: 1; transform: scale(1.5); }
            }
            
            @keyframes flash {
                0%, 100% { background: radial-gradient(ellipse at center, #0a0a0a 0%, #1a0a1a 30%, #2a0a0a 60%, #000000 100%); }
                50% { background: radial-gradient(ellipse at center, #2a0a0a 0%, #4a0a2a 30%, #6a0a0a 60%, #1a0a1a 100%); }
            }
        `;
        document.head.appendChild(mysteriousStyle);
        
        // Inicializar efectos
        createMysteriousLights();
        
        // Crear humo cada 3 segundos
        setInterval(createSmoke, 3000);
        
        // Efecto de cursor que deja rastro misterioso
        document.addEventListener('mousemove', function(e) {
            if (Math.random() > 0.92) {
                const trail = document.createElement('div');
                trail.innerHTML = '🔥';
                trail.style.position = 'fixed';
                trail.style.left = e.clientX + 'px';
                trail.style.top = e.clientY + 'px';
                trail.style.pointerEvents = 'none';
                trail.style.fontSize = '12px';
                trail.style.zIndex = '1000';
                trail.style.color = '#8b0000';
                trail.style.textShadow = '0 0 10px #8b0000';
                trail.style.animation = 'trailFade 2s ease-out forwards';
                document.body.appendChild(trail);
                
                setTimeout(() => {
                    trail.remove();
                }, 2000);
            }
        });
        
        // Agregar animación de rastro
        const trailStyle = document.createElement('style');
        trailStyle.textContent = `
            @keyframes trailFade {
                0% { opacity: 1; transform: scale(1); }
                100% { opacity: 0; transform: scale(2) rotate(180deg); }
            }
        `;
        document.head.appendChild(trailStyle);