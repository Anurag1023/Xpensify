"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
        <Link href="/dashboard">
      <CardContainer className="inter-var cursor-pointer">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] lg:w-[60rem] md:w-[50rem] sm:w-[40rem] w-auto max-w-6xl h-auto rounded-xl p-6 border">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            AI Finance Dashboard
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-left"
          >
            Smart AI-powered budgeting, insights, and transaction tracking. Hover and Tap to explore!
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            
              <Image
                src="/banner.jpeg"
                height={1000}
                width={1000}
                className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
              priority={true}
              />
          </CardItem>
        </CardBody>
      </CardContainer>
        </Link>
  );
}
