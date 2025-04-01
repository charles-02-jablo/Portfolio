import { useEffect, useRef } from 'react';

const StarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize canvas dimensions
    setCanvasDimensions();

    // Handle window resize
    window.addEventListener('resize', setCanvasDimensions);

    // Star properties
    const stars: { x: number; y: number; radius: number; opacity: number; speed: number; color: string }[] = [];
    const STAR_COUNT = 150;

    // Create stars
    for (let i = 0; i < STAR_COUNT; i++) {
      // Create some stars with blue tint
      const blueShade = Math.random() > 0.7 
        ? `rgba(100, 180, 255, ${Math.random()})` 
        : `rgba(255, 255, 255, ${Math.random()})`;
        
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        speed: Math.random() * 0.05,
        color: blueShade
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        
        // Move stars
        star.y += star.speed;
        
        // Reset star position if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default StarBackground;
