"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <main>
        {/* Hero / Our mission */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-5 py-16 sm:px-10 sm:py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1.5 bg-orange-500 text-neutral-0 text-sm font-semibold rounded-md mb-6">
                Our mission
              </span>
              <h1 className="font-(family-name:--font-nunito) font-extrabold text-4xl sm:text-5xl text-neutral-900 leading-tight tracking-tight mb-6">
                Help more people cook nourishing meals, more often.
              </h1>
              <p className="text-neutral-800 text-lg leading-relaxed mb-4">
                Healthy Recipe Finder was created to prove that healthy eating
                can be convenient, affordable, and genuinely delicious.
              </p>
              <p className="text-neutral-800 text-lg leading-relaxed">
                We showcase quick, whole-food dishes that anyone can master—no
                fancy equipment, no ultra-processed shortcuts—just honest
                ingredients and straightforward steps.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-neutral-200 relative">
                <Image
                  width={500}
                  height={500}
                  src="/assets/images/image-about-our-mission-large.webp"
                  alt="Person chopping fresh vegetables in a kitchen"
                  className="w-full h-full object-cover hidden md:block"
                />
                <Image
                  width={300}
                  height={300}
                  src="/assets/images/image-about-our-mission-small.webp"
                  alt="Person chopping fresh vegetables in a kitchen"
                  className="w-full object-cover md:hidden"
                />
              </div>
              <span
                className="absolute -bottom-4 -right-4 w-40 md:w-20 lg:w-40 h-auto text-teal-500/80"
                aria-hidden
              >
                <Image
                  src="/assets/images/pattern-squiggle-1.svg"
                  alt="Pattern squiggle 1"
                  width={100}
                  height={100}
                  className="w-full h-full"
                />
              </span>
            </div>
          </div>
        </motion.section>

        {/* Why we exist */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-5 py-16 sm:px-10 sm:py-20"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            <h2 className="font-(family-name:--font-nunito) font-extrabold text-4xl sm:text-5xl text-neutral-900 leading-tight">
              Why we exist
            </h2>
            <ul className="space-y-8 list-none p-0 m-0">
              {[
                {
                  title: "Cut through the noise.",
                  body: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.",
                },
                {
                  title: "Empower home kitchens.",
                  body: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
                },
                {
                  title: "Make healthy look good.",
                  body: "High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.",
                },
                {
                  title: "Keep it real.",
                  body: "No gatekeeping, no elitism. Just clear instructions and ingredients you can find at a regular store.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="text-teal-500 mt-1 shrink-0" aria-hidden>
                    <Image
                      src="/assets/images/icon-bullet-point.svg"
                      alt="Why we exist"
                      width={50}
                      height={50}
                      className="w-full"
                    />
                  </span>
                  <div>
                    <h3 className="font-(family-name:--font-nunito) font-bold text-xl text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-800 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Our food philosophy */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-5 py-16 sm:px-10 sm:py-20"
        >
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16">
            <h2 className="font-(family-name:--font-nunito) font-extrabold text-4xl sm:text-5xl text-neutral-900 leading-tight">
              Our food philosophy
            </h2>
            <ul className="space-y-8 list-none p-0 m-0">
              {[
                {
                  title: "Whole ingredients first.",
                  body: "Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.",
                },
                {
                  title: "Flavor without compromise.",
                  body: "Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.",
                },
                {
                  title: "Respect for time.",
                  body: "Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.",
                },
                {
                  title: "Sustainable choices.",
                  body: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="text-teal-500 mt-1 shrink-0" aria-hidden>
                    <Image
                      src="/assets/images/icon-bullet-point.svg"
                      alt="Why we exist"
                      width={50}
                      height={50}
                      className="w-full"
                    />
                  </span>
                  <div>
                    <h3 className="font-(family-name:--font-nunito) font-bold text-xl text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-800 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Beyond the plate */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-5 py-16 sm:px-10 sm:py-20"
        >
          <div className="grid lg:grid-cols-[1.1fr_1.9fr] grid-cols-1 md:grid-cols-1 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="font-(family-name:--font-nunito) font-extrabold text-4xl sm:text-5xl text-neutral-900 leading-tight mb-6">
                Beyond the plate
              </h2>
              <p className="text-neutral-800 text-lg leading-relaxed mb-6">
                We believe food is a catalyst for community and well-being. By
                sharing approachable recipes, we hope to:
              </p>
              <ul className="space-y-3 list-none p-0 m-0">
                {[
                  "Encourage family dinners and social cooking.",
                  "Reduce reliance on single-use packaging and delivery waste.",
                  "Spark curiosity about seasonal produce and local agriculture.",
                ].map((text) => (
                  <li key={text} className="flex gap-3 items-start">
                    <span
                      className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0"
                      aria-hidden
                    />
                    <span className="text-neutral-800 leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className=" rounded-2xl overflow-hidden bg-neutral-200 relative">
                <Image
                  width={600}
                  height={350}
                  src="/assets/images/image-about-beyond-the-plate-large.webp"
                  alt="Family in kitchen with fresh produce"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
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
      </main>
    </>
  );
}
