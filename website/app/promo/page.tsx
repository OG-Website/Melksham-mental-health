'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/* ─────────────────────────────────────────────
   45-second auto-playing promotional showcase
   Scene timing (seconds from start):
   0–5   : Logo burst
   5–12  : "Members Portal is here"
   12–22 : 50 Courses counter
   22–34 : Course category roll
   34–42 : Website & CTA
   42–45 : Logo lock-out outro
───────────────────────────────────────────── */

const SCENE_TIMES = [0, 5, 12, 22, 34, 42, 45];

const CATEGORIES = [
  { label: 'Foundations of Mental Health', num: '01–02' },
  { label: 'Neurodevelopmental Disorders', num: '03–05' },
  { label: 'Trauma & Stress', num: '06–10' },
  { label: 'Mood Disorders', num: '11–13' },
  { label: 'Anxiety Disorders', num: '14–16' },
  { label: 'Clinical Disorders', num: '17–25' },
  { label: 'Social & Life Factors', num: '26–32' },
  { label: 'Life Stages & Identity', num: '33–38' },
  { label: 'Loss, Pain & Wellbeing', num: '39–44' },
  { label: 'Modern Life & Meaning', num: '45–50' },
];

export default function PromoPage() {
  const [elapsed, setElapsed] = useState(0);
  const [started, setStarted] = useState(false);
  const [courseCount, setCourseCount] = useState(0);
  const [catIndex, setCatIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  /* Master timer */
  useEffect(() => {
    if (!started) return;
    const id = setInterval(() => {
      setElapsed((t) => {
        const next = +(t + 0.05).toFixed(2);
        if (next >= 45) {
          clearInterval(id);
          setFinished(true);
          return 45;
        }
        return next;
      });
    }, 50);
    return () => clearInterval(id);
  }, [started]);

  /* Course counter (scene 3: 12–22s, count 0→50 over 8s) */
  useEffect(() => {
    if (elapsed < 12 || elapsed >= 22) return;
    const progress = (elapsed - 12) / 10;
    setCourseCount(Math.min(50, Math.round(progress * 50)));
  }, [elapsed]);

  /* Category ticker (scene 4: 22–34s, one every ~1.2s) */
  useEffect(() => {
    if (elapsed < 22 || elapsed >= 34) return;
    const idx = Math.floor(((elapsed - 22) / 12) * CATEGORIES.length);
    setCatIndex(Math.min(idx, CATEGORIES.length - 1));
  }, [elapsed]);

  const scene = SCENE_TIMES.findIndex((t, i) =>
    elapsed >= t && elapsed < (SCENE_TIMES[i + 1] ?? Infinity)
  );

  /* progress bar width */
  const progress = Math.min(100, (elapsed / 45) * 100);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        overflow: 'hidden',
        fontFamily: "'Arial Black', Impact, sans-serif",
        zIndex: 9999,
      }}
    >
      {/* ── Animated particle background ── */}
      <Particles />

      {/* ── Progress bar ── */}
      {started && !finished && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 4,
            width: `${progress}%`,
            background: 'linear-gradient(90deg,#ff6600,#ff9900)',
            transition: 'width 0.05s linear',
            zIndex: 20,
          }}
        />
      )}

      {/* ══════════════════════════════════
          START SCREEN
      ══════════════════════════════════ */}
      {!started && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 32,
            zIndex: 10,
          }}
        >
          <Image
            src="/logo.png"
            alt="Melksham Mental Health Logo"
            width={380}
            height={124}
            priority
            style={{ filter: 'drop-shadow(0 0 40px rgba(255,102,0,0.8))' }}
          />
          <p style={{ color: '#ff9900', fontSize: 18, letterSpacing: 2, textTransform: 'uppercase' }}>
            45-Second Members Portal Showcase
          </p>
          <button
            onClick={() => setStarted(true)}
            style={{
              background: 'linear-gradient(135deg,#ff6600,#ff9900)',
              border: 'none',
              borderRadius: 8,
              color: '#000',
              fontFamily: "'Arial Black', Impact, sans-serif",
              fontWeight: 900,
              fontSize: 20,
              letterSpacing: 2,
              padding: '16px 48px',
              cursor: 'pointer',
              textTransform: 'uppercase',
              boxShadow: '0 0 30px rgba(255,102,0,0.6)',
            }}
          >
            ▶ Play
          </button>
          <p style={{ color: '#666', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>
            Press play · then use your screen recorder to capture the 45-second video
          </p>
        </div>
      )}

      {/* ══════════════════════════════════
          SCENE 0 — Logo Burst (0–5s)
      ══════════════════════════════════ */}
      {started && scene === 0 && (
        <SceneWrapper>
          <div
            style={{
              animation: 'logoZoom 1.2s cubic-bezier(0.22,1,0.36,1) forwards',
              textAlign: 'center',
            }}
          >
            <Image
              src="/logo.png"
              alt="Melksham Mental Health"
              width={520}
              height={170}
              priority
              style={{
                filter:
                  'drop-shadow(0 0 60px rgba(255,102,0,0.9)) drop-shadow(0 0 120px rgba(255,153,0,0.6))',
                maxWidth: '90vw',
                height: 'auto',
              }}
            />
          </div>
          <p
            style={{
              color: '#ff9900',
              fontSize: 'clamp(18px,3vw,28px)',
              letterSpacing: 4,
              textTransform: 'uppercase',
              marginTop: 32,
              animation: 'fadeUp 1s 0.8s both',
            }}
          >
            Real Struggles. Real Support.
          </p>
        </SceneWrapper>
      )}

      {/* ══════════════════════════════════
          SCENE 1 — Members Portal (5–12s)
      ══════════════════════════════════ */}
      {started && scene === 1 && (
        <SceneWrapper>
          <p
            style={{
              color: '#ff6600',
              fontSize: 'clamp(14px,2vw,20px)',
              letterSpacing: 4,
              textTransform: 'uppercase',
              animation: 'fadeUp 0.6s both',
            }}
          >
            Introducing
          </p>
          <h1
            style={{
              color: '#ffffff',
              fontSize: 'clamp(36px,7vw,96px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 2,
              lineHeight: 1,
              margin: '16px 0',
              textShadow:
                '0 0 20px rgba(255,102,0,0.8), 0 0 40px rgba(255,102,0,0.5), 4px 4px 0 #000',
              animation: 'fadeUp 0.7s 0.2s both',
            }}
          >
            Members
            <br />
            <span style={{ color: '#ff9900' }}>Portal</span>
          </h1>
          <div
            style={{
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginTop: 32,
              animation: 'fadeUp 0.8s 0.6s both',
            }}
          >
            {[
              { icon: '🔐', label: 'Secure Login' },
              { icon: '📚', label: '50 Courses' },
              { icon: '👥', label: 'Community' },
              { icon: '📊', label: 'Track Progress' },
            ].map((f) => (
              <div
                key={f.label}
                style={{
                  background: 'rgba(255,102,0,0.12)',
                  border: '2px solid rgba(255,102,0,0.5)',
                  borderRadius: 12,
                  padding: '20px 28px',
                  textAlign: 'center',
                  minWidth: 120,
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{f.icon}</div>
                <div
                  style={{
                    color: '#ff9900',
                    fontSize: 13,
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: 2,
                  }}
                >
                  {f.label}
                </div>
              </div>
            ))}
          </div>
        </SceneWrapper>
      )}

      {/* ══════════════════════════════════
          SCENE 2 — 50 Courses (12–22s)
      ══════════════════════════════════ */}
      {started && scene === 2 && (
        <SceneWrapper>
          <p
            style={{
              color: '#ff6600',
              fontSize: 'clamp(14px,2vw,20px)',
              letterSpacing: 4,
              textTransform: 'uppercase',
              animation: 'fadeUp 0.6s both',
            }}
          >
            Comprehensive Knowledge
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: 0,
              lineHeight: 1,
              margin: '16px 0 8px',
              animation: 'scaleIn 0.5s 0.1s both',
            }}
          >
            <span
              style={{
                color: '#ff9900',
                fontSize: 'clamp(100px,18vw,200px)',
                fontWeight: 900,
                textShadow:
                  '0 0 30px rgba(255,102,0,0.8), 0 0 60px rgba(255,102,0,0.5), 6px 6px 0 #000',
                lineHeight: 0.9,
              }}
            >
              {courseCount}
            </span>
          </div>
          <h2
            style={{
              color: '#ffffff',
              fontSize: 'clamp(24px,5vw,56px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: 3,
              textShadow: '3px 3px 0 #000',
              margin: '8px 0 24px',
              animation: 'fadeUp 0.6s 0.3s both',
            }}
          >
            Mental Health Modules
          </h2>
          <p
            style={{
              color: '#aaa',
              fontSize: 'clamp(14px,2vw,20px)',
              letterSpacing: 1,
              animation: 'fadeUp 0.6s 0.5s both',
            }}
          >
            Each module · 2 hours · Evidence-based · Live facilitated sessions
          </p>
        </SceneWrapper>
      )}

      {/* ══════════════════════════════════
          SCENE 3 — Category Roll (22–34s)
      ══════════════════════════════════ */}
      {started && scene === 3 && (
        <SceneWrapper>
          <p
            style={{
              color: '#ff6600',
              fontSize: 'clamp(13px,1.8vw,18px)',
              letterSpacing: 4,
              textTransform: 'uppercase',
              marginBottom: 24,
            }}
          >
            Course Topics Include
          </p>
          <div
            key={catIndex}
            style={{
              textAlign: 'center',
              animation: 'slideCategory 0.4s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            <div
              style={{
                color: '#ff9900',
                fontSize: 'clamp(16px,2.5vw,26px)',
                fontWeight: 900,
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              Module {CATEGORIES[catIndex].num}
            </div>
            <h2
              style={{
                color: '#ffffff',
                fontSize: 'clamp(28px,5.5vw,64px)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: 2,
                lineHeight: 1.1,
                textShadow:
                  '0 0 20px rgba(255,102,0,0.6), 4px 4px 0 #000',
                maxWidth: '80vw',
                margin: '0 auto',
              }}
            >
              {CATEGORIES[catIndex].label}
            </h2>
          </div>
          {/* Category progress dots */}
          <div
            style={{
              display: 'flex',
              gap: 8,
              marginTop: 48,
              justifyContent: 'center',
            }}
          >
            {CATEGORIES.map((_, i) => (
              <div
                key={i}
                style={{
                  width: i === catIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === catIndex ? '#ff9900' : 'rgba(255,153,0,0.3)',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </SceneWrapper>
      )}

      {/* ══════════════════════════════════
          SCENE 4 — Website & CTA (34–42s)
      ══════════════════════════════════ */}
      {started && scene === 4 && (
        <SceneWrapper>
          <p
            style={{
              color: '#ff6600',
              fontSize: 'clamp(13px,1.8vw,18px)',
              letterSpacing: 4,
              textTransform: 'uppercase',
              animation: 'fadeUp 0.6s both',
            }}
          >
            Join Us Today
          </p>
          <div
            style={{
              background: 'linear-gradient(135deg,rgba(255,102,0,0.15),rgba(255,153,0,0.08))',
              border: '3px solid rgba(255,102,0,0.6)',
              borderRadius: 20,
              padding: 'clamp(24px,4vw,48px) clamp(32px,6vw,80px)',
              marginTop: 24,
              animation: 'scaleIn 0.7s 0.2s both',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                color: '#ffffff',
                fontSize: 'clamp(14px,2vw,20px)',
                letterSpacing: 3,
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Register at
            </div>
            <div
              style={{
                color: '#ff9900',
                fontSize: 'clamp(22px,4.5vw,54px)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: 2,
                textShadow:
                  '0 0 20px rgba(255,153,0,0.8), 0 0 40px rgba(255,102,0,0.5)',
              }}
            >
              melksham-mentalhealth.us
            </div>
            <div
              style={{
                color: '#aaa',
                fontSize: 'clamp(13px,1.8vw,18px)',
                marginTop: 12,
                letterSpacing: 1,
              }}
            >
              /portal/register
            </div>
          </div>
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              gap: 24,
              flexWrap: 'wrap',
              justifyContent: 'center',
              animation: 'fadeUp 0.7s 0.5s both',
            }}
          >
            {[
              '✅ Free to Join',
              '🔒 Private & Secure',
              '💬 Peer Community',
              '📖 50 Expert Modules',
            ].map((item) => (
              <div
                key={item}
                style={{
                  color: '#fff',
                  fontSize: 'clamp(13px,1.6vw,17px)',
                  fontWeight: 900,
                  letterSpacing: 1,
                  textTransform: 'uppercase',
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </SceneWrapper>
      )}

      {/* ══════════════════════════════════
          SCENE 5 — Logo Outro (42–46s)
      ══════════════════════════════════ */}
      {started && (scene === 5 || finished) && (
        <SceneWrapper>
          <div style={{ animation: 'logoZoom 0.8s cubic-bezier(0.22,1,0.36,1) both' }}>
            <Image
              src="/logo.png"
              alt="Melksham Mental Health"
              width={460}
              height={150}
              style={{
                filter:
                  'drop-shadow(0 0 60px rgba(255,102,0,0.9)) drop-shadow(0 0 120px rgba(255,153,0,0.6))',
                maxWidth: '85vw',
                height: 'auto',
              }}
            />
          </div>
          <p
            style={{
              color: '#ff9900',
              fontSize: 'clamp(16px,2.5vw,24px)',
              letterSpacing: 4,
              textTransform: 'uppercase',
              marginTop: 32,
              animation: 'fadeUp 1s 0.5s both',
            }}
          >
            You Are Not Alone. Help Is Here.
          </p>
          <p
            style={{
              color: '#666',
              fontSize: 'clamp(14px,1.8vw,18px)',
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginTop: 16,
              animation: 'fadeUp 1s 0.9s both',
            }}
          >
            melksham-mentalhealth.us
          </p>
          {finished && (
            <button
              onClick={() => {
                setElapsed(0);
                setStarted(false);
                setFinished(false);
                setCourseCount(0);
                setCatIndex(0);
              }}
              style={{
                marginTop: 48,
                background: 'transparent',
                border: '2px solid rgba(255,102,0,0.5)',
                borderRadius: 8,
                color: '#ff9900',
                fontFamily: "'Arial Black', Impact, sans-serif",
                fontWeight: 900,
                fontSize: 15,
                letterSpacing: 2,
                padding: '12px 32px',
                cursor: 'pointer',
                textTransform: 'uppercase',
                animation: 'fadeUp 0.8s 1.5s both',
              }}
            >
              ↺ Replay
            </button>
          )}
        </SceneWrapper>
      )}

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes logoZoom {
          from { opacity: 0; transform: scale(0.6); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideCategory {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes particleFloat {
          0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.6; }
          90%  { opacity: 0.3; }
          100% { transform: translateY(-20vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ── Helper: full-screen centred wrapper ── */
function SceneWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '24px 32px',
        zIndex: 10,
      }}
    >
      {children}
    </div>
  );
}

/* ── Animated background particles ── */
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${(i * 5.5) % 100}%`,
    size: 4 + (i % 6) * 2,
    delay: `${(i * 0.7) % 8}s`,
    duration: `${6 + (i % 5) * 2}s`,
    color: i % 3 === 0 ? '#ff6600' : i % 3 === 1 ? '#ff9900' : '#cc4400',
  }));

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 1 }}>
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: p.left,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            opacity: 0,
            animation: `particleFloat ${p.duration} ${p.delay} infinite linear`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
