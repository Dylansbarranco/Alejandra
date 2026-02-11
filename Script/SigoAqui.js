document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // CONFIGURATION — Song: Daughter - Smother
  // Duration: 3:49 = 229 seconds
  // =============================================
  const SONG_DURATION = 229; // seconds
  const audio = document.getElementById('bg-audio');
  const startScreen = document.getElementById('start-screen');
  const fadeOverlay = document.getElementById('fade-overlay');
  const progressBar = document.getElementById('progress-bar');
  const rainContainer = document.getElementById('rain-container');
  const particlesContainer = document.getElementById('particles-container');

  let started = false;
  let currentVerseIndex = -1;

  // =============================================
  // VERSE TIMELINE — each verse appears at a specific second
  // =============================================
  const verses = document.querySelectorAll('.verse');
  const totalVerses = verses.length;

  // Build timeline: evenly spaced across the song duration
  // with some room at start and end
  const START_DELAY = 5;     // first verse appears at 5s
  const END_BUFFER = 12;     // last 12s: fadeout
  const usableDuration = SONG_DURATION - START_DELAY - END_BUFFER;
  const verseInterval = usableDuration / totalVerses;

  const timeline = [];
  for (let i = 0; i < totalVerses; i++) {
    timeline.push({
      startTime: START_DELAY + (i * verseInterval),
      element: verses[i]
    });
  }

  // =============================================
  // START — Click to begin
  // =============================================
  startScreen.addEventListener('click', () => {
    if (started) return;
    started = true;

    // Start audio
    audio.volume = 0;
    audio.play().then(() => {
      fadeInAudio(audio, 1.0, 3000);
    }).catch(() => {
      // Autoplay blocked, try again
      audio.play();
    });

    // Fade out start screen
    startScreen.classList.add('fade-out');
    setTimeout(() => {
      startScreen.style.display = 'none';
    }, 3000);

    // Start rain
    startRain();
    // Start particles
    startParticles();
    // Start tear drops
    startTears();
    // Begin verse sync loop
    requestAnimationFrame(syncLoop);
  });

  // =============================================
  // AUDIO FADE IN
  // =============================================
  function fadeInAudio(audioEl, targetVol, duration) {
    const steps = 60;
    const stepTime = duration / steps;
    const stepVol = targetVol / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += stepVol;
      if (current >= targetVol) {
        audioEl.volume = targetVol;
        clearInterval(interval);
      } else {
        audioEl.volume = current;
      }
    }, stepTime);
  }

  // =============================================
  // SYNC LOOP — runs every frame, checks current time
  // =============================================
  function syncLoop() {
    if (!started) return;

    const currentTime = audio.currentTime;
    const progress = (currentTime / SONG_DURATION) * 100;

    // Update progress bar
    if (progressBar) {
      progressBar.style.width = Math.min(progress, 100) + '%';
    }

    // Determine which verse should be active
    let targetVerse = -1;
    for (let i = timeline.length - 1; i >= 0; i--) {
      if (currentTime >= timeline[i].startTime) {
        targetVerse = i;
        break;
      }
    }

    // Switch verse if needed
    if (targetVerse !== currentVerseIndex) {
      // Exit current verse
      if (currentVerseIndex >= 0 && currentVerseIndex < totalVerses) {
        verses[currentVerseIndex].classList.remove('active');
        verses[currentVerseIndex].classList.add('exit');
      }

      // Activate new verse
      if (targetVerse >= 0 && targetVerse < totalVerses) {
        // Small delay for transition
        setTimeout(() => {
          verses[targetVerse].classList.remove('exit');
          verses[targetVerse].classList.add('active');
        }, 400);
      }

      currentVerseIndex = targetVerse;
    }

    // FADE OUT at the end
    const fadeStart = SONG_DURATION - END_BUFFER;
    if (currentTime >= fadeStart) {
      fadeOverlay.classList.add('active');
      // Fade out audio in the last seconds
      const fadeProgress = (currentTime - fadeStart) / END_BUFFER;
      audio.volume = Math.max(0, 1.0 - fadeProgress);
    }

    // Song ended
    if (audio.ended || currentTime >= SONG_DURATION) {
      fadeOverlay.classList.add('active');
      return;
    }

    requestAnimationFrame(syncLoop);
  }

  // =============================================
  // RAIN EFFECT
  // =============================================
  let rainInterval = null;

  function startRain() {
    rainInterval = setInterval(() => {
      const drop = document.createElement('div');
      drop.className = 'raindrop';
      drop.style.left = Math.random() * 100 + '%';
      drop.style.height = (Math.random() * 18 + 8) + 'px';
      drop.style.animationDuration = (Math.random() * 1.2 + 0.8) + 's';
      drop.style.opacity = Math.random() * 0.25 + 0.08;
      rainContainer.appendChild(drop);

      setTimeout(() => {
        if (drop.parentNode) drop.remove();
      }, 3500);
    }, 60);
  }

  // =============================================
  // FLOATING PARTICLES
  // =============================================
  function startParticles() {
    function spawn() {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.top = Math.random() * 100 + '%';
      p.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
      p.style.setProperty('--dy', (Math.random() * -180 - 40) + 'px');
      p.style.animationDuration = (Math.random() * 10 + 7) + 's';
      const size = (Math.random() * 3 + 1) + 'px';
      p.style.width = size;
      p.style.height = size;
      particlesContainer.appendChild(p);

      setTimeout(() => {
        if (p.parentNode) p.remove();
      }, 18000);
    }

    // Initial burst
    for (let i = 0; i < 12; i++) {
      setTimeout(spawn, Math.random() * 4000);
    }
    setInterval(spawn, 1000);
  }

  // =============================================
  // TEAR DROPS — periodic
  // =============================================
  function startTears() {
    setInterval(() => {
      if (!started) return;
      // Random chance
      if (Math.random() > 0.4) return;

      const tear = document.createElement('div');
      tear.className = 'tear';
      tear.style.left = (Math.random() * 80 + 10) + '%';
      tear.style.top = (Math.random() * 25 + 5) + '%';
      document.body.appendChild(tear);

      setTimeout(() => {
        if (tear.parentNode) tear.remove();
      }, 5000);
    }, 2500);
  }

});
