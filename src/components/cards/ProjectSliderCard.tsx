"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, EffectCoverflow } from 'swiper/modules';

type ProjectSliderCardProps = {
    imageUrl: string[];
    title: string;
};

export default function ProjectSliderCard({ imageUrl, title }: ProjectSliderCardProps) {
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            modules={[EffectCoverflow, Pagination, Autoplay,]}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 100,
                stretch: 0,
                depth: 500,
                modifier: 1,
                slideShadows: true,
              }}
            spaceBetween={30}
            loop={true}
            centeredSlides={true}
            speed={1200}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            className="mySwiper w-full !pb-10"
        >
            {imageUrl.map((url, index) => (
            <SwiperSlide key={index}>
                <Image
                src={url}
                alt={title}
                width={400}
                height={400}
                className="rounded-lg mb-3 w-full h-auto"
                priority
                />
            </SwiperSlide>
            ))}
        </Swiper>
    );
}
