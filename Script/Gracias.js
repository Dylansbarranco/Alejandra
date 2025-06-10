 // Parallax effect for background
        window.addEventListener('scroll', function() {
            const scrollY = window.scrollY;
            const parallaxBg = document.getElementById('parallax-bg');
            if (parallaxBg) {
                parallaxBg.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        });
        
        // Love button effect
        document.getElementById('love-button').addEventListener('click', function() {
            const heartsContainer = document.getElementById('hearts-container');
            heartsContainer.style.display = 'block';
            heartsContainer.innerHTML = '';
            
            // Create floating hearts
            for (let i = 0; i < 100; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('floating-heart');
                    
                    const colors = ['#9333ea', '#ec4899', '#ef4444', '#f59e0b', '#22c55e', '#3b82f6'];
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    heart.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" width="${Math.random() * 50 + 20}" height="${Math.random() * 50 + 20}" viewBox="0 0 24 24" fill="${randomColor}" stroke="none">
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                    `;
                    heart.style.left = `${Math.random() * 100}vw`;
                    heart.style.opacity = Math.random() * 0.8 + 0.2;
                    heartsContainer.appendChild(heart);
                }, i * 40);
            }
            
            // Hide hearts container after animation
            setTimeout(() => {
                heartsContainer.style.display = 'none';
            }, 5000);
        });
        
        // Create floating elements
        const floatingElements = document.getElementById('floating-elements');
        const icons = [
            // Phone icon
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>`,
            // Star icon
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9333ea" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>`,
            // Mountain icon
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
            </svg>`,
            // Heart icon
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>`,
            // Message icon
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>`,
            // Video icon
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="23 7 16 12 23 17 23 7"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
            </svg>`,
            // Globe icon
            `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>`
        ];
        
        for (let i = 0; i < 30; i++) {
            const element = document.createElement('div');
            element.classList.add('floating-element');
            element.innerHTML = icons[Math.floor(Math.random() * icons.length)];
            element.style.left = `${Math.random() * 100}vw`;
            element.style.top = `-50px`;
            element.style.animationDuration = `${Math.random() * 30 + 20}s`;
            element.style.animationDelay = `${Math.random() * 20}s`;
            element.style.opacity = Math.random() * 0.4 + 0.2;
            element.style.transform = `scale(${Math.random() * 0.8 + 0.5})`;
            floatingElements.appendChild(element);
        }
        
        // Add scroll animations for thanks items
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe all thanks items
        document.querySelectorAll('.thanks-item').forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
            observer.observe(item);
        });
        
        // Add hover effects to thanks items
        document.querySelectorAll('.thanks-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });