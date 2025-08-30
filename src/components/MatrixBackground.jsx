import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Canvas boyutunu ayarla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix karakterleri
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Her sütun için başlangıç pozisyonu
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Animasyon fonksiyonu
    const draw = () => {
      // Yarı şeffaf siyah arka plan (iz efekti için)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Karakterleri çiz
      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Rastgele karakter seç
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Karakteri çiz
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // İlk karakteri daha parlak yap
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          ctx.fillStyle = '#ffffff';
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
          ctx.fillStyle = '#00ff00';
        }

        // Karakteri aşağı taşı
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Animasyon döngüsü
    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ background: '#000' }}
    />
  );
};

export default MatrixBackground;
