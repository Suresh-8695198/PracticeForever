import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../../context/ThemeContext';

// ─────────────────────────────────────────────
//  ANIMATED LOGO: "PracticeForever"
//  Playful character animation with smooth motion
// ─────────────────────────────────────────────

const AnimatedLogo = ({ 
  size = 'md', // 'sm' | 'md' | 'lg' | 'xl'
  autoPlay = true, 
  loopInterval = 12000, // ms between replay loops
  className = '',
  onClick,
}) => {
  const { isDark } = useTheme();
  const [animationKey, setAnimationKey] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [idlePhase, setIdlePhase] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  // Size variants
  const sizeMap = {
    sm: { fontSize: 20, gap: 0 },
    md: { fontSize: 28, gap: 0 },
    lg: { fontSize: 36, gap: 1 },
    xl: { fontSize: 48, gap: 2 },
  };

  const { fontSize } = sizeMap[size] || sizeMap.md;

  // Trigger idle phase after initial animation completes
  useEffect(() => {
    const idleTimer = setTimeout(() => setIdlePhase(true), 2800);
    return () => clearTimeout(idleTimer);
  }, [animationKey]);

  // Auto-replay loop
  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setIdlePhase(false);
      setAnimationKey(k => k + 1);
    }, loopInterval);
    return () => clearInterval(interval);
  }, [autoPlay, loopInterval]);

  // Sparkle generation
  const generateSparkle = useCallback(() => {
    const id = Date.now() + Math.random();
    const sparkle = {
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 1000 + 800,
      delay: Math.random() * 500,
    };
    setSparkles(prev => [...prev.slice(-5), sparkle]);
    setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== id)), sparkle.duration + sparkle.delay + 200);
  }, []);

  // Occasional sparkles during idle
  useEffect(() => {
    if (!idlePhase) return;
    const sparkleInterval = setInterval(generateSparkle, 2500);
    return () => clearInterval(sparkleInterval);
  }, [idlePhase, generateSparkle]);

  // Hover replay
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIdlePhase(false);
    setAnimationKey(k => k + 1);
  };
  const handleMouseLeave = () => setIsHovered(false);

  const practiceLetters = 'Practice'.split('');
  const foreverLetters = 'Forever'.split('');

  // Per-letter animation configs for "Practice"
  const practiceConfigs = [
    { anim: 'pop-bounce', delay: 0 },       // P
    { anim: 'wiggle-wake', delay: 80 },      // r
    { anim: 'wiggle-wake', delay: 140 },     // a
    { anim: 'wiggle-wake', delay: 200 },     // c
    { anim: 'wiggle-wake', delay: 250 },     // t
    { anim: 'wiggle-wake', delay: 300 },     // i
    { anim: 'wiggle-wake', delay: 350 },     // c
    { anim: 'wiggle-wake', delay: 400 },     // e
  ];

  // Per-letter animation configs for "Forever"
  const foreverConfigs = [
    { anim: 'swing-in', delay: 500 },        // F - swings
    { anim: 'spin-gentle', delay: 580 },      // o - spins
    { anim: 'hop-in', delay: 660 },           // r - hops
    { anim: 'stretch-in', delay: 740 },       // e - stretches
    { anim: 'flip-in', delay: 820 },          // v - flips
    { anim: 'blink-in', delay: 900 },         // e - blinks
    { anim: 'land-bounce', delay: 980 },      // r - lands with bounce
  ];

  return (
    <div
      className={`animated-logo-root ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        position: 'relative',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        lineHeight: 1.1,
      }}
    >
      {/* Sparkle particles */}
      {sparkles.map(s => (
        <span
          key={s.id}
          className="logo-sparkle"
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}ms`,
            animationDelay: `${s.delay}ms`,
          }}
        />
      ))}

      {/* "Practice" word */}
      <span className="logo-word-practice" style={{ display: 'inline-flex', alignItems: 'baseline' }}>
        {practiceLetters.map((char, i) => {
          const config = practiceConfigs[i];
          return (
            <span
              key={`p-${i}-${animationKey}`}
              className={`logo-letter logo-letter-practice logo-anim-${config.anim} ${idlePhase ? 'logo-idle' : ''}`}
              style={{
                fontSize,
                animationDelay: `${config.delay}ms`,
                '--idle-delay': `${i * 0.15}s`,
                '--char-index': i,
                display: 'inline-block',
                fontFamily: "'Delius Swash Caps', cursive",
                fontWeight: 800,
                color: isDark ? '#ffffff' : '#111111',
                position: 'relative',
                transformOrigin: 'center bottom',
                letterSpacing: '0.01em',
              }}
            >
              {char}
              {/* Tiny personality dot (subtle "eye") on P */}
              {i === 0 && (
                <span
                  className={`logo-eye ${idlePhase ? 'logo-eye-blink' : ''}`}
                  style={{
                    position: 'absolute',
                    top: '22%',
                    right: '28%',
                    width: Math.max(3, fontSize * 0.08),
                    height: Math.max(3, fontSize * 0.08),
                    borderRadius: '50%',
                    background: '#c89b3c',
                    opacity: 0.7,
                    pointerEvents: 'none',
                  }}
                />
              )}
            </span>
          );
        })}
      </span>

      {/* "Forever" word */}
      <span className="logo-word-forever" style={{ display: 'inline-flex', alignItems: 'baseline' }}>
        {foreverLetters.map((char, i) => {
          const config = foreverConfigs[i];
          return (
            <span
              key={`f-${i}-${animationKey}`}
              className={`logo-letter logo-letter-forever logo-anim-${config.anim} ${idlePhase ? 'logo-idle' : ''}`}
              style={{
                fontSize,
                animationDelay: `${config.delay}ms`,
                '--idle-delay': `${(i + 8) * 0.15}s`,
                '--char-index': i + 8,
                display: 'inline-block',
                fontFamily: "'Delius Swash Caps', cursive",
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FFC107 0%, #FF8C00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
                transformOrigin: 'center bottom',
                letterSpacing: '0.01em',
              }}
            >
              {char}
            </span>
          );
        })}
      </span>

      {/* Global animation styles */}
      <style jsx global>{`
        /* ══════════════════════════════════════
           BASE LETTER RESET
           ══════════════════════════════════════ */
        .logo-letter {
          opacity: 0;
          transform: translateY(20px) scale(0.5);
          will-change: transform, opacity;
        }

        /* ══════════════════════════════════════
           ENTRANCE: P — big pop bounce
           ══════════════════════════════════════ */
        .logo-anim-pop-bounce {
          animation: logoPop 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes logoPop {
          0% { opacity: 0; transform: translateY(30px) scale(0.3) rotate(-8deg); }
          40% { opacity: 1; transform: translateY(-8px) scale(1.15) rotate(3deg); }
          60% { transform: translateY(3px) scale(0.95) rotate(-1deg); }
          80% { transform: translateY(-2px) scale(1.03) rotate(0.5deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }

        /* ══════════════════════════════════════
           ENTRANCE: ractice — wiggle wake up
           ══════════════════════════════════════ */
        .logo-anim-wiggle-wake {
          animation: logoWiggle 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes logoWiggle {
          0% { opacity: 0; transform: translateY(18px) scale(0.4) rotate(12deg); }
          30% { opacity: 1; transform: translateY(-5px) scale(1.08) rotate(-6deg); }
          50% { transform: translateY(2px) scale(0.97) rotate(4deg); }
          70% { transform: translateY(-1px) scale(1.02) rotate(-2deg); }
          85% { transform: translateY(0.5px) scale(1) rotate(1deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }

        /* ══════════════════════════════════════
           ENTRANCE: F — swing in
           ══════════════════════════════════════ */
        .logo-anim-swing-in {
          animation: logoSwing 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          transform-origin: top center;
        }
        @keyframes logoSwing {
          0% { opacity: 0; transform: translateY(20px) rotate(-25deg) scale(0.5); }
          35% { opacity: 1; transform: translateY(-3px) rotate(12deg) scale(1.05); }
          55% { transform: translateY(1px) rotate(-6deg) scale(0.98); }
          75% { transform: translateY(-1px) rotate(3deg) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) rotate(0deg) scale(1); }
        }

        /* ══════════════════════════════════════
           ENTRANCE: o — gentle spin
           ══════════════════════════════════════ */
        .logo-anim-spin-gentle {
          animation: logoSpin 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes logoSpin {
          0% { opacity: 0; transform: translateY(20px) scale(0.3) rotate(-180deg); }
          50% { opacity: 1; transform: translateY(-4px) scale(1.1) rotate(20deg); }
          70% { transform: translateY(1px) scale(0.97) rotate(-8deg); }
          85% { transform: translateY(-1px) scale(1.02) rotate(3deg); }
          100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
        }

        /* ══════════════════════════════════════
           ENTRANCE: r — hop in
           ══════════════════════════════════════ */
        .logo-anim-hop-in {
          animation: logoHop 0.65s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes logoHop {
          0% { opacity: 0; transform: translateY(30px) scale(0.4); }
          30% { opacity: 1; transform: translateY(-12px) scale(1.1); }
          50% { transform: translateY(4px) scale(0.95); }
          70% { transform: translateY(-3px) scale(1.03); }
          85% { transform: translateY(1px) scale(0.99); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ══════════════════════════════════════
           ENTRANCE: e — stretch in
           ══════════════════════════════════════ */
        .logo-anim-stretch-in {
          animation: logoStretch 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes logoStretch {
          0% { opacity: 0; transform: translateY(20px) scaleY(0.3) scaleX(1.3); }
          30% { opacity: 1; transform: translateY(-5px) scaleY(1.2) scaleX(0.85); }
          50% { transform: translateY(2px) scaleY(0.92) scaleX(1.06); }
          70% { transform: translateY(-1px) scaleY(1.05) scaleX(0.98); }
          100% { opacity: 1; transform: translateY(0) scaleY(1) scaleX(1); }
        }

        /* ══════════════════════════════════════
           ENTRANCE: v — flip in
           ══════════════════════════════════════ */
        .logo-anim-flip-in {
          animation: logoFlip 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          perspective: 400px;
        }
        @keyframes logoFlip {
          0% { opacity: 0; transform: translateY(20px) rotateX(90deg) scale(0.5); }
          40% { opacity: 1; transform: translateY(-3px) rotateX(-15deg) scale(1.05); }
          60% { transform: translateY(1px) rotateX(8deg) scale(0.98); }
          80% { transform: translateY(-0.5px) rotateX(-3deg) scale(1.01); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg) scale(1); }
        }

        /* ══════════════════════════════════════
           ENTRANCE: e — blink in
           ══════════════════════════════════════ */
        .logo-anim-blink-in {
          animation: logoBlink 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes logoBlink {
          0% { opacity: 0; transform: translateY(18px) scale(0.4); }
          25% { opacity: 1; transform: translateY(-4px) scale(1.08); }
          35% { opacity: 0.3; transform: translateY(-2px) scale(1.05); }
          45% { opacity: 1; transform: translateY(-1px) scale(1.02); }
          60% { opacity: 0.4; transform: translateY(0) scale(1); }
          70% { opacity: 1; }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ══════════════════════════════════════
           ENTRANCE: r — land bounce
           ══════════════════════════════════════ */
        .logo-anim-land-bounce {
          animation: logoLand 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes logoLand {
          0% { opacity: 0; transform: translateY(-40px) scale(0.5); }
          30% { opacity: 1; transform: translateY(6px) scale(1.1) scaleY(0.88); }
          45% { transform: translateY(-8px) scale(0.98) scaleY(1.05); }
          60% { transform: translateY(3px) scale(1.02) scaleY(0.97); }
          75% { transform: translateY(-2px) scale(1) scaleY(1.01); }
          100% { opacity: 1; transform: translateY(0) scale(1) scaleY(1); }
        }

        /* ══════════════════════════════════════
           IDLE: breathing + wave
           ══════════════════════════════════════ */
        .logo-letter.logo-idle {
          animation: logoIdle 3.5s cubic-bezier(0.45, 0.05, 0.55, 0.95) infinite !important;
          animation-delay: var(--idle-delay) !important;
          opacity: 1 !important;
        }
        @keyframes logoIdle {
          0%, 100% { transform: translateY(0px) scale(1) rotate(0deg); }
          20% { transform: translateY(-1.5px) scale(1.01) rotate(0.3deg); }
          40% { transform: translateY(-0.5px) scale(1.005) rotate(-0.2deg); }
          60% { transform: translateY(-2px) scale(1.015) rotate(0.2deg); }
          80% { transform: translateY(-0.8px) scale(1.008) rotate(-0.1deg); }
        }

        /* ══════════════════════════════════════
           "P" eye blink during idle
           ══════════════════════════════════════ */
        .logo-eye {
          transition: transform 0.15s ease;
        }
        .logo-eye-blink {
          animation: eyeBlink 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        @keyframes eyeBlink {
          0%, 92%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
          97% { transform: scaleY(1); }
        }

        /* ══════════════════════════════════════
           SPARKLE PARTICLE
           ══════════════════════════════════════ */
        .logo-sparkle {
          background: radial-gradient(circle, #FFC107 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10;
          animation: sparkleFloat ease-out forwards;
        }
        @keyframes sparkleFloat {
          0% { opacity: 0; transform: scale(0) translateY(0); }
          30% { opacity: 0.9; transform: scale(1.2) translateY(-4px); }
          60% { opacity: 0.6; transform: scale(1) translateY(-10px); }
          100% { opacity: 0; transform: scale(0.3) translateY(-18px); }
        }

        /* ══════════════════════════════════════
           HOVER GLOW EFFECT
           ══════════════════════════════════════ */
        .animated-logo-root {
          transition: filter 0.3s ease;
        }
        .animated-logo-root:hover .logo-letter-forever {
          filter: brightness(1.12);
        }

        /* ══════════════════════════════════════
           SOFT TEXT SHADOW
           ══════════════════════════════════════ */
        .logo-letter-practice {
          text-shadow: 0 1px 3px rgba(0,0,0,0.06);
        }
        .logo-letter-forever {
          filter: drop-shadow(0 1px 2px rgba(255,140,0,0.15));
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogo;
