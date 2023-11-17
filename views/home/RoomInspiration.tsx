"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { Button } from "@/components/ui";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const RoomInspiration = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className="mb-14 flex h-[670px] w-full flex-row items-center bg-secondary">
      <div className="mx-auto max-w-md whitespace-pre-line">
        <h1 className="mb-1.5 text-4xl font-bold text-gray-500">
          {`50+ Beautiful rooms\ninspiration`}
        </h1>
        <p className="mb-6">
          {`Our designer already made a lot of beautiful\n prototipe of rooms that
            inspire you`}
        </p>
        <Button className="min-w-[176px]">Explore More</Button>
      </div>
      <div id="room-slider" className="relative flex h-[580px] w-3/5">
        <div
          className="swiper-button-prev opacity-0"
          ref={(e) => setPrevEl(e)}
        />
        <div
          className="absolute bottom-2/4 right-[20%] z-10 flex h-12 w-full max-w-[48px] cursor-pointer items-center justify-center rounded-full bg-white shadow-lg"
          ref={(e) => setNextEl(e)}
        >
          <ChevronRight className="text-primary-500" />
        </div>
        <Swiper
          className="h-full w-full"
          navigation={{ prevEl, nextEl }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView="auto"
          loop
          draggable
          scrollbar
          freeMode
          resistanceRatio={0}
        >
          <SwiperSlide className="rooms__slide">
            <Image
              layout="fill"
              src="images/room-1.svg"
              alt="room1"
              className="h-full w-full object-cover"
            />
            <div className="rooms__slide-container">
              <div className="rooms__slide-text rooms__slide1-text">
                <p className="mb-3 w-full max-w-[135px] text-base text-slate-700">
                  01
                  <span className="mx-1 mb-1 inline-block w-full max-w-[27px] border border-slate-400" />
                  Bed Room
                </p>
                <p className="text-2xl font-semibold text-slate-700">
                  Inner Peace
                </p>
              </div>
              <Link
                href="#"
                className="flex h-12 w-full max-w-[48px] items-center justify-center bg-primary-500"
              >
                <ArrowRight className="text-white" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rooms__slide">
            <Image
              layout="fill"
              src="images/room-2.svg"
              alt="room2"
              className="h-full w-full object-cover"
            />
            <div className="rooms__slide-container">
              <div className="rooms__slide-text">
                <p className="mb-3 w-full max-w-[135px] text-base text-slate-700">
                  02
                  <span className="mx-1 mb-1 inline-block w-full max-w-[27px] border border-slate-400" />
                  Bed Room
                </p>
                <p className="text-2xl font-semibold text-slate-700">
                  Inner Peace
                </p>
              </div>
              <Link
                href="#"
                className="flex h-12 w-full max-w-[48px] items-center justify-center bg-primary-500"
              >
                <ArrowRight className="text-white" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rooms__slide">
            <Image
              layout="fill"
              src="images/room-3.svg"
              alt="room3"
              className="h-full w-full object-cover"
            />
            <div className="rooms__slide-container">
              <div className="rooms__slide-text">
                <p className="mb-3 w-full max-w-[135px] text-base text-slate-700">
                  03
                  <span className="mx-1 mb-1 inline-block w-full max-w-[27px] border border-slate-400" />
                  Bed Room
                </p>
                <p className="text-2xl font-semibold text-slate-700">
                  Inner Peace
                </p>
              </div>
              <Link
                href="#"
                className="flex h-12 w-full max-w-[48px] items-center justify-center bg-primary-500"
              >
                <ArrowRight className="text-white" />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rooms__slide">
            <Image
              layout="fill"
              src="images/room-4.svg"
              alt="room4"
              className="h-full w-full object-cover"
            />
            <div className="rooms__slide-container">
              <div className="rooms__slide-text">
                <p className="mb-3 w-full max-w-[135px] text-base text-slate-700">
                  04
                  <span className="mx-1 mb-1 inline-block w-full max-w-[27px] border border-slate-400" />
                  Bed Room
                </p>
                <p className="text-2xl font-semibold text-slate-700">
                  Inner Peace
                </p>
              </div>
              <Link
                href="#"
                className="flex h-12 w-full max-w-[48px] items-center justify-center bg-primary-500"
              >
                <ArrowRight className="text-white" />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RoomInspiration;
