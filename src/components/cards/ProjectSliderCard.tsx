'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiMaximize2, FiX } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type ProjectSliderCardProps = {
  imageUrl: string[];
  title: string;
};

export default function ProjectSliderCard({ imageUrl, title }: ProjectSliderCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hasMultiple = imageUrl.length > 1;

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight' && hasMultiple) {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % imageUrl.length));
      } else if (e.key === 'ArrowLeft' && hasMultiple) {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + imageUrl.length) % imageUrl.length
        );
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, hasMultiple, imageUrl.length]);

  return (
    <>
      <div className="relative w-full rounded-2xl border border-white/10 bg-neutral-900/70 backdrop-blur-sm p-3 sm:p-4 shadow-2xl">
        <div className="flex items-center justify-between mb-3 px-1">
          <span className="text-xs font-medium text-neutral-400">
            Capturas de tela ({activeIndex + 1} / {imageUrl.length})
          </span>
          <button
            type="button"
            onClick={() => setLightboxIndex(activeIndex)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-violet-300 hover:text-violet-200 cursor-pointer"
          >
            <FiMaximize2 className="size-3.5" />
            <span>Ampliar imagem</span>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          slidesPerView={1}
          spaceBetween={20}
          loop={hasMultiple}
          speed={600}
          autoplay={
            hasMultiple
              ? {
                  delay: 3500,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          navigation={hasMultiple}
          pagination={hasMultiple ? { clickable: true } : false}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="mySwiper w-full !pb-10"
        >
          {imageUrl.map((url, index) => (
            <SwiperSlide key={url}>
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={`Ampliar captura ${index + 1} de ${title}`}
                className="relative block w-full aspect-video rounded-xl overflow-hidden bg-neutral-950 border border-white/10 cursor-zoom-in group"
              >
                <Image
                  src={url}
                  alt={`${title} - Captura ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  priority={index === 0}
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Visualização ampliada de ${title}`}
          onClick={() => setLightboxIndex(null)}
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Fechar visualização ampliada"
            className="absolute top-4 right-4 z-10 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <FiX className="size-6" />
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex - 1 + imageUrl.length) % imageUrl.length);
                }}
                aria-label="Imagem anterior"
                className="absolute left-3 sm:left-6 z-10 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % imageUrl.length);
                }}
                aria-label="Próxima imagem"
                className="absolute right-3 sm:right-6 z-10 size-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FiChevronRight className="size-6" />
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageUrl[lightboxIndex]}
              alt={`${title} - Captura ampliada ${lightboxIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 text-xs text-neutral-200">
            {lightboxIndex + 1} / {imageUrl.length}
          </div>
        </div>
      )}
    </>
  );
}
