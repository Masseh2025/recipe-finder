"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-5 py-12 sm:px-10 sm:py-16"
      aria-labelledby="cta-heading"
    >
      <div className="relative rounded-2xl bg-neutral-200 px-8 py-14 sm:px-14 sm:py-16 text-center overflow-hidden">
        <span
          className="hidden md:block absolute left-6 top-1/2 translate-x-1/2 text-neutral-400/60 w-40 h-40"
          aria-hidden
        >
          <Image
            src="/assets/images/pattern-fork.svg"
            alt="Pattern fork"
            width={160}
            height={160}
            className="w-full h-full"
          />
        </span>
        <span
          className="hidden md:block absolute right-14 translate-x-1/2 text-neutral-400/60 w-40 h-40"
          aria-hidden
        >
          <Image
            src="/assets/images/pattern-knife.svg"
            alt="Pattern knife"
            width={160}
            height={160}
            className="w-full h-full"
          />
        </span>
        <h2
          id="cta-heading"
          className="font-(family-name:--font-nunito) font-extrabold text-3xl sm:text-4xl text-neutral-900 mb-3"
        >
          Ready to cook smarter?
        </h2>
        <p className="text-neutral-800 text-lg max-w-xl mx-auto mb-8">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <Link
          href="/recipes"
          className="inline-block px-6 py-3 bg-neutral-900 text-neutral-0 font-semibold rounded-lg hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 transition-colors"
        >
          Browse recipes
        </Link>
      </div>
    </motion.section>
  );
}
