"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type PATH_NAMES = ["/", "/about", "/recipies"];

export default function Nav() {
  const pathname = usePathname();
  const [currentIndex, setCurrentIndex] = useState<PATH_NAMES[number]>(
    `${pathname as PATH_NAMES[number]}`,
  );
  return (
    <header className="bg-neutral-0 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-5 py-4 sm:px-10 flex items-center justify-between gap-6">
        <nav className="w-full flex items-center  justify-between gap-8">
          <Image
            src="assets/images/logo.svg"
            alt="Healthy Recipe Finder"
            width={200}
            height={200}
          />
          <ul className="flex items-center gap-6 list-none p-0 m-0">
            <li className="relative">
              <Link
                onClick={() => setCurrentIndex("/")}
                href="/"
                className="text-neutral-800 font-medium hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded"
              >
                Home
              </Link>
              {currentIndex === "/" && (
                <motion.span
                  layoutId="underline"
                  className="rounded-full w-full absolute bottom-0 left-0 h-[3px] bg-orange-500"
                ></motion.span>
              )}
            </li>

            <li className="relative">
              <Link
                onClick={() => setCurrentIndex("/about")}
                href="/about"
                className="text-neutral-900 font-semibold pb-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded"
              >
                About
              </Link>
              {currentIndex === "/about" && (
                <motion.span
                  layoutId="underline"
                  className="rounded-full w-full absolute bottom-0 left-0 h-[3px] bg-orange-500"
                ></motion.span>
              )}
            </li>

            <li className="relative">
              <Link
                onClick={() => setCurrentIndex("/recipies")}
                href="/recipies"
                className="text-neutral-800 font-medium hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 rounded"
              >
                Recipes
              </Link>
              {currentIndex === "/recipies" && (
                <motion.span
                  layoutId="underline"
                  className="rounded-full w-full absolute bottom-0 left-0 h-[3px] bg-orange-500"
                ></motion.span>
              )}
            </li>
          </ul>
          <Link
            href="/recipies"
            className="ml-2 px-5 py-2.5 bg-neutral-900 text-neutral-0 font-semibold rounded-lg hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 transition-colors"
          >
            Browse recipes
          </Link>
        </nav>
      </div>
    </header>
  );
}
