"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "a.png", //main img
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
    "b.jpeg",
  ];
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
