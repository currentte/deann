document.querySelector('.hug-btn').addEventListener('click', function() {
    const hug = document.createElement('div');
    hug.className = 'hug-effect';
    hug.innerHTML = '🤗';
    document.body.appendChild(hug);
    
    // Position the hug randomly
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    hug.style.left = `${x}px`;
    hug.style.top = `${y}px`;
    
    // Animation
    hug.style.transform = 'scale(0)';
    setTimeout(() => {
      hug.style.transform = 'scale(3)';
      hug.style.opacity = '1';
    }, 10);
    
    setTimeout(() => {
      hug.style.transform = 'scale(0)';
      hug.style.opacity = '0';
    }, 1000);
    
    // Remove after animation
    setTimeout(() => {
      hug.remove();
    }, 1500);
  });
  
  // Add some floating hearts periodically
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    document.querySelector('.hearts').appendChild(heart);
    
    // Random position
    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight + 20;
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;
    
    // Random size
    const size = Math.random() * 20 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    
    // Animation
    const duration = Math.random() * 5 + 5;
    heart.style.animation = `float ${duration}s linear forwards`;
    
    // Remove after animation
    setTimeout(() => {
      heart.remove();
    }, duration * 1000);
  }, 1000);
  