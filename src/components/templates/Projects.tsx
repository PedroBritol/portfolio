"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import ProjectCard from './../cards/ProjectCard';
import {projects} from '@/data/projects';



  export default function Projects() {
    return (
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((card, index) => (
                <ProjectCard
                  key={index}
                  id={card.id}
                  imageUrl={card.imageUrl}
                  title={card.title}
                  description={card.description}
                  stack={card.stack}
                />
              ))}
          </div>
          {/* <div className="mt-8 py-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, A11y]}
              navigation={false}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              centeredSlides={true}
              grabCursor={true}
              breakpoints={{
                480: { slidesPerView: 2, spaceBetween: 0 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 30 },
              }}
              className="custom-swiper !pb-12 !py-3"
            >
              {projects.map((card) => (
                <SwiperSlide key={card.id}>
                  <ProjectCard
                    id={card.id}
                    imageUrl={card.imageUrl}
                    title={card.title}
                    description={card.description}
                    stack={card.stack}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
      </section>
    );
  }