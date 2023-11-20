"use client";

import Link from "next/link";
import Image from "next/legacy/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowRight, ChevronRight } from "lucide-react";

import { RoomInspiration } from "@/interface/room";

import { Button } from "@/components/ui";

import { mockRoomInspiration } from "@/data/room-inspiration";

import { roomInspirationOption } from "@/config/swiper.config";

const RoomInspiration = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div className="h-full w-full bg-secondary">
      <div className="mx-auto mb-14 flex flex-col items-center justify-between lg:flex-row">
        <div className="mx-8 my-11 max-w-full text-center md:mx-auto md:mb-0 lg:mb-0 lg:max-w-md lg:whitespace-pre-line lg:text-start">
          <h1 className="mb-1.5 text-4xl font-bold text-gray-500">
            {`50+ Beautiful rooms\ninspiration`}
          </h1>
          <p className="mb-6">
            {`Our designer already made a lot of beautiful\n prototipe of rooms that
            inspire you`}
          </p>
          <Button className="min-w-[176px]">Explore More</Button>
        </div>
        <div
          id="room-slider"
          className="relative mt-0 flex h-[580px] w-full pl-0 md:my-11 md:pl-8 lg:w-3/5 lg:pl-0"
        >
          <Swiper
            className="h-full w-full"
            navigation={{ prevEl, nextEl }}
            {...roomInspirationOption}
          >
            <div className="swiper-button-prev" ref={(e) => setPrevEl(e)} />
            <div
              className="absolute bottom-2/4 right-[308px] z-10 hidden h-12 w-full max-w-[48px] cursor-pointer items-center justify-center rounded-full bg-white shadow-lg md:flex lg:right-[348px]"
              ref={(e) => setNextEl(e)}
            >
              <ChevronRight className="text-primary-500" />
            </div>
            {mockRoomInspiration?.map((item: RoomInspiration, index) => (
              <SwiperSlide key={index} className="rooms__slide">
                <Image
                  layout="fill"
                  src={item.thumbnail}
                  alt={item.name}
                  className="h-full w-full object-cover"
                  draggable={false}
                />
                <div className="rooms__slide-container absolute bottom-0 left-0 flex h-[130px] w-full max-w-[265px] items-end opacity-0 4xl:opacity-100">
                  <div className="rooms__slide-text flex h-[130px] w-full max-w-[217px] flex-col items-center justify-center">
                    <p className="mb-3 w-full max-w-[135px] text-base text-slate-700">
                      {item.no}
                      <span className="mx-1 mb-1 inline-block w-full max-w-[27px] border border-slate-400 capitalize" />
                      {item.name}
                    </p>
                    <p className="text-2xl font-semibold text-slate-700">
                      {item.description}
                    </p>
                  </div>
                  <Button className="flex h-12 w-full max-w-[48px]" size="icon">
                    <Link href={item.href}>
                      <ArrowRight className="text-white" />
                    </Link>
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;
