"use client";

import { useEffect } from "react";

const modules = ["/assets/system.js", "/assets/motion/motion.js", "/assets/layout/layout.js"];

/**
 * Carrega os módulos do kit do taste skill depois que o React hidratou a página,
 * para que eles não mexam no DOM antes da hidratação. Cada página é um carregamento
 * completo (os links internos são <a> comuns), então isso roda uma vez por página.
 */
export default function KitScripts() {
  useEffect(() => {
    for (const src of modules) {
      if (document.querySelector(`script[src="${src}"]`)) continue;
      const s = document.createElement("script");
      s.type = "module";
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}
