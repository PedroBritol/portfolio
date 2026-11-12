/** srcset para os prints em /public/img: a versão de 720px (gerada ao lado, "-720.webp") e a original. */
export function srcSet(src: string, width: number) {
  if (width <= 720) return undefined;
  return `${src.replace(/\.webp$/, "-720.webp")} 720w, ${src} ${width}w`;
}
