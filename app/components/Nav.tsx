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
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="bg-neutral-0 border-b px-2 py-4 border-neutral-200">
      <div className="max-w-6xl mx-auto">
        <nav className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex md:block justify-between w-full md:w-auto">
            <Image
              src="assets/images/logo.svg"
              alt="Healthy Recipe Finder"
              width={200}
              height={200}
            />
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center bg-neutral-200 rounded-md"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <Image
                src="/assets/images/icon-hamburger-menu.svg"
                alt="Menu"
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </button>
          </div>

          <ul className="hidden md:flex items-center gap-6 list-none p-0 m-0">
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
            className="hidden md:block ml-2 px-5 py-2.5 bg-neutral-900 text-neutral-0 font-semibold rounded-lg hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 transition-colors"
          >
            Browse recipes
          </Link>
          {/*"mobile nav"*/}
          {openMenu && (
            <motion.ul
              animate={{
                opacity: 1,
                y: 0,
              }}
              initial={{ opacity: 0, y: -100 }}
              className="flex flex-col md:hidden items-center gap-6 list-none p-0 m-0"
            >
              <motion.li className="relative">
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
                    className="rounded-full w-full absolute bottom-0 left-0 h-full bg-orange-500/50"
                  ></motion.span>
                )}
              </motion.li>

              <motion.li className="relative">
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
                    className=" rounded-full w-full absolute bottom-0 left-0 h-full bg-orange-500/50"
                  ></motion.span>
                )}
              </motion.li>

              <motion.li className="relative">
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
                    className="rounded-full w-full absolute bottom-0 left-0 h-full bg-orange-500/50"
                  ></motion.span>
                )}
              </motion.li>
            </motion.ul>
          )}
          {/*"end mobile nav"*/}
        </nav>
      </div>
    </header>
  );
}
