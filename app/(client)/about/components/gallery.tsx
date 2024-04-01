"use client";

import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

import Halo from "@/components/ui/halo";

import { GeistMono } from "geist/font/mono";

type PhotoProps = {
  src: StaticImageData | string;
  meta?: ReactNode;
  filename?: string;
  alt: string;
  width: number;
  height: number;
  rotate: number;
  left: number;
  index: number;
  flipDirection?: "left" | "right";
  children?: ReactNode;
};

function Photo({
  src,
  alt,
  filename,
  width,
  height,
  rotate,
  left,
  index,
  flipDirection,
  meta,
  children,
}: PhotoProps) {
  const fileName =
    filename ||
    (typeof src !== "string" &&
      `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`);
  const shared = "absolute h-full w-full rounded-2xl overflow-hidden";
  return (
    <motion.div
      className={`absolute mx-auto cursor-grab rounded-2xl hover:before:block hover:before:w-[calc(100%+55px)] hover:before:h-[300px] hover:before:absolute hover:before:-top-8 hover:before:-left-7`}
      style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
      initial={{
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index === 1 ? -60 : index === 2 ? -30 : index === 3 ? 30 : 60,
        opacity: 0,
      }}
      transition={{
        default: {
          type: "spring",
          bounce: 0.2,
          duration:
            index === 1 ? 0.8 : index === 2 ? 0.85 : index === 3 ? 0.9 : 1,
          delay: index * 0.15,
        },
        opacity: {
          duration: 0.7,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.15,
        },
        scale: { duration: 0.12 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
      whileHover="flipped"
    >
      <motion.div
        className="relative duration-100 w-full h-full shadow-md rounded-2xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === "right" ? -180 : 180,
            rotateX: 5,
          },
        }}
      >
        <div className={shared} style={{ backfaceVisibility: "hidden" }}>
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="absolute inset-0 object-cover w-full h-full bg-card pointer-events-none rounded-lg"
            priority
          />
          {children}
        </div>
        <div
          className={clsx(
            shared,
            "bg-primary flex items-center rounded-2xl overflow-hidden"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <Halo strength={50} className="flex items-center">
            <span className="absolute w-[500px] h-[500px] rotate-[-20deg] bg-repeat bg-[length:280px] bg-[url('/photopaper.png')]" />
            <div className="z-[1] px-6">
              <div
                className={clsx(
                  GeistMono.className,
                  "flex flex-col gap-1 uppercase"
                )}
              >
                <p className="text-sm text-[#3a3a3a]">{fileName}</p>
                {meta && <p className="text-sm text-[#3a3a3a]">{meta}</p>}
              </div>
            </div>
          </Halo>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <>
      <section className="flex gap-4 h-[268px] relative">
        <Photo
          src="/gallery/four.jpg"
          filename="🎂 ❤️"
          meta="2024-03-02"
          alt="Brian and Lily"
          width={300}
          height={239}
          rotate={-6}
          left={0}
          index={1}
          flipDirection="left"
        />
        <Photo
          src="/gallery/three.jpg"
          meta="2023-06-04"
          alt="me"
          width={230}
          height={250}
          rotate={6.3}
          left={218}
          index={2}
          flipDirection="left"
        />
        <Photo
          src="/gallery/one.jpeg"
          meta="2023-05-04"
          alt="me"
          width={280}
          height={235}
          rotate={-5.4}
          left={373}
          index={3}
          flipDirection="left"
        />
        <Photo
          src="/gallery/two.jpg"
          meta="2024-06-01"
          alt={"Snowboarding in Colorado"}
          width={260}
          height={260}
          rotate={7.6}
          left={587}
          index={4}
          flipDirection="left"
        />
      </section>
    </>
  );
}