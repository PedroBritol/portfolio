'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import type { LiquidEtherProps } from '../../../Reactbits/LiquidEther';
import type { ParticlesProps } from '../../../Reactbits/Particles';

const HeroAmbientFallback = () => (
  <div
    aria-hidden="true"
    className="w-full h-full bg-[radial-gradient(ellipse_at_72%_24%,rgba(82,39,255,0.24),transparent_58%),radial-gradient(ellipse_at_24%_78%,rgba(154,92,255,0.18),transparent_55%)]"
  />
);

const DynamicLiquidEther = dynamic(
  () => import('../../../Reactbits/LiquidEther'),
  {
    ssr: false,
    loading: HeroAmbientFallback,
  }
);

const DynamicParticles = dynamic(
  () => import('../../../Reactbits/Particles'),
  {
    ssr: false,
  }
);

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

function hasHardwareAcceleratedWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2', { failIfMajorPerformanceCaveat: true }) ||
      canvas.getContext('webgl', { failIfMajorPerformanceCaveat: true });
    if (!gl) return false;
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    return true;
  } catch {
    return false;
  }
}

function useDesktopWebGLEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const hasFinePointer = window.matchMedia?.('(pointer: fine)').matches;
    const isDesktopViewport = window.innerWidth >= 768;
    const saveData = Boolean((navigator as NavigatorWithConnection).connection?.saveData);

    if (
      prefersReduced ||
      !hasFinePointer ||
      !isDesktopViewport ||
      saveData ||
      !hasHardwareAcceleratedWebGL()
    ) {
      return;
    }

    const activate = () => setEnabled(true);

    if (typeof window.requestIdleCallback === 'function') {
      const idleId = window.requestIdleCallback(activate, { timeout: 600 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timerId = window.setTimeout(activate, 200);
    return () => window.clearTimeout(timerId);
  }, []);

  return enabled;
}

export function LazyLiquidEther(props: LiquidEtherProps) {
  const enabled = useDesktopWebGLEnabled();
  if (!enabled) {
    return <HeroAmbientFallback />;
  }
  return <DynamicLiquidEther {...props} />;
}

export function LazyParticles(props: ParticlesProps) {
  const enabled = useDesktopWebGLEnabled();
  if (!enabled) {
    return null;
  }
  return <DynamicParticles {...props} />;
}
