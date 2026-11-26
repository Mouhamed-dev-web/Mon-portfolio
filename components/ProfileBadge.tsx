"use client";


import { useCallback, useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { Code2, User } from "lucide-react";

/** Déposer la photo ici : public/images/profile.jpg (portrait, visage centré en haut) */
const PHOTO_SRC = "/images/Mouhamed.jpeg";
const SWING_DEG = 3.5;

export function ProfileBadge() {
  const reduceMotion = useReducedMotion();
  const [photoOk, setPhotoOk] = useState(true);
  const angle = useMotionValue(0);
  const controls = useRef<ReturnType<typeof animate> | null>(null);

  // Balancement permanent de pendule, autour du haut de la sangle.
  const startSwing = useCallback(() => {
    if (reduceMotion) return;
    controls.current?.stop();
    controls.current = animate(angle, [-SWING_DEG, SWING_DEG], {
      duration: 2.8,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
  }, [angle, reduceMotion]);

  useEffect(() => {
    startSwing();
    return () => controls.current?.stop();
  }, [startSwing]);

  // Interaction : on attrape le badge et on le tire, il revient en oscillant.
  const onPanStart = () => {
    if (!reduceMotion) controls.current?.stop();
  };
  const onPan = (_: unknown, info: PanInfo) => {
    if (reduceMotion) return;
    angle.set(Math.max(-16, Math.min(16, info.offset.x / 6)));
  };
  const onPanEnd = () => {
    if (reduceMotion) return;
    controls.current?.stop();
    controls.current = animate(angle, 0, {
      type: "spring",
      stiffness: 40,
      damping: 4,
      mass: 1.2,
      onComplete: startSwing,
    });
  };

  return (
    <div className="relative -mt-16 flex justify-center md:-mt-24">
      {/* Halo lumineux derrière le badge */}
      <div className="pointer-events-none absolute left-1/2 top-48 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,var(--accent-soft)_0%,transparent_70%)] md:h-80 md:w-80" />

      <motion.div
        style={{ rotate: angle, transformOrigin: "50% 0%", touchAction: "pan-y" }}
        onPanStart={onPanStart}
        onPan={onPan}
        onPanEnd={onPanEnd}
        className={reduceMotion ? "" : "cursor-grab active:cursor-grabbing"}
      >
        <div className="relative flex flex-col items-center">
          {/* Sangle (tour de cou) */}
          <div className="h-36 w-7 border-x border-white/10 bg-[#0d1220] md:h-44" />

          {/* Mousqueton métallique */}
          <svg
            width="44"
            height="64"
            viewBox="0 0 44 64"
            aria-hidden="true"
            className="relative z-10 -mb-[18px] -mt-1"
          >
            <defs>
              <linearGradient id="badge-metal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f1f5f9" />
                <stop offset="0.5" stopColor="#94a3b8" />
                <stop offset="1" stopColor="#475569" />
              </linearGradient>
            </defs>
            <ellipse cx="22" cy="12" rx="12" ry="10" fill="none" stroke="url(#badge-metal)" strokeWidth="3" />
            <rect x="17" y="20" width="10" height="26" rx="4" fill="url(#badge-metal)" />
            <path d="M17 42 q-4 13 5 18 q9 -5 5 -18 z" fill="url(#badge-metal)" />
          </svg>

          {/* Carte */}
          <div className="relative h-[26rem] w-60 overflow-hidden rounded-2xl bg-gradient-to-b from-[#1e40af] to-[#0f2a7a] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] md:h-[27rem] md:w-64">
            {/* Fente d'accroche */}
            <div className="absolute left-1/2 top-3 h-2.5 w-9 -translate-x-1/2 rounded-full border border-white/25 bg-black/40" />
            {/* Reflet */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />

            {/* Logo */}
            <div className="absolute inset-x-0 top-10 flex items-center justify-center gap-2 text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-[#1e40af]">
                <Code2 size={16} strokeWidth={2.25} />
              </span>
              <span className="font-display text-sm font-medium">
                Mouhamed<span className="text-[#9db8ff]">.dev</span>
              </span>
            </div>

            {/* Décor décalé derrière la photo */}
            <div className="absolute left-9 right-2 top-[23%] h-[54%] rounded-xl bg-cta" />

            {/* Photo */}
            <div className="absolute left-5 right-5 top-[21%] h-[56%] overflow-hidden rounded-xl border border-white/25 bg-[#16348f]">
              {photoOk ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={PHOTO_SRC}
                  alt="Mouhamed Niang"
                  draggable={false}
                  onError={() => setPhotoOk(false)}
                  className="h-full w-full select-none object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-white/60">
                  <User size={48} strokeWidth={1.25} />
                  <span className="px-4 text-center font-mono text-[10px]">
                    Ajoute ta photo : public/images/profile.jpg
                  </span>
                </div>
              )}
            </div>

            {/* Panneau nom / fonction */}
            <div className="absolute bottom-0 left-0 w-[92%] rounded-tr-3xl bg-white px-5 pb-5 pt-4">
              <p className="font-display text-xl font-semibold leading-tight text-[#0f2a7a]">
                Mouhamed Niang
              </p>
              <p className="text-sm font-medium text-cta">Full-Stack Developer</p>
              <p className="mt-2 flex items-center gap-1.5 text-[11px] text-slate-500">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5b8cff] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5b8cff]" />
                </span>
                Available for projects
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
