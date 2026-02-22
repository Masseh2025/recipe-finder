import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="relative max-w-6xl mx-auto px-5 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-24 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background shapes */}
        <span
          className="absolute top-0 right-0 w-[280px] sm:w-[360px] h-[320px] text-indigo-500/30 pointer-events-none"
          aria-hidden
        >
          <Image
            src="/assets/images/pattern-squiggle-2.svg"
            alt=""
            width={360}
            height={320}
            className="w-full h-full object-contain object-top-right"
          />
        </span>
        <span
          className="absolute left-0 top-[120px] sm:top-[180px] w-[180px] sm:w-[220px] h-[200px] text-indigo-500/30 pointer-events-none"
          aria-hidden
        >
          <Image
            src="/assets/images/pattern-squiggle-1.svg"
            alt=""
            width={220}
            height={200}
            className="w-full h-full object-contain"
          />
        </span>

        <div className="relative text-center max-w-3xl mx-auto">
          <h1
            id="hero-heading"
            className="font-[--font-nunito] font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-neutral-900 leading-[1.1] tracking-tight mb-6"
          >
            <span className="relative">
              <span className="relative z-10 bg-orange-500/25 px-1 rounded">
                Healthy
              </span>
            </span>{" "}
            meals, zero fuss
          </h1>
          <p className="text-neutral-800 text-lg sm:text-xl leading-relaxed mb-8">
            Discover eight quick, whole-food recipes that you can cook
            tonight—no processed junk, no guesswork.
          </p>
          <Link
            href="/recipies"
            className="inline-block px-6 py-3.5 bg-neutral-900 text-neutral-0 font-semibold rounded-lg hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 transition-colors"
          >
            Start exploring
          </Link>

          <div className="mt-12 sm:mt-16 relative">
            <div className="rounded-2xl overflow-hidden bg-neutral-200 shadow-lg max-w-4xl mx-auto">
              <Image
                src="/assets/images/image-about-our-mission-large.webp"
                alt="Person chopping fresh vegetables in a bright kitchen"
                width={800}
                height={500}
                className="w-full h-auto object-cover hidden md:block"
              />
              <Image
                src="/assets/images/image-about-our-mission-small.webp"
                alt="Person chopping fresh vegetables in a bright kitchen"
                width={600}
                height={400}
                className="w-full h-auto object-cover md:hidden"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section
        className="max-w-6xl mx-auto px-5 py-16 sm:px-10 sm:py-20"
        aria-labelledby="what-you-get-heading"
      >
        <h2
          id="what-you-get-heading"
          className="font-[--font-nunito] font-extrabold text-3xl sm:text-4xl text-neutral-900 text-center mb-12 sm:mb-16"
        >
          What you&apos;ll get
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          <article className="text-center md:text-left">
            <span className="inline-block mb-4 text-teal-500" aria-hidden>
              <Image
                src="/assets/images/icon-whole-food-recipes.svg"
                alt=""
                width={48}
                height={48}
              />
            </span>
            <h3 className="font-[--font-nunito] font-bold text-xl text-neutral-900 mb-2">
              Whole-food recipes
            </h3>
            <p className="text-neutral-800 leading-relaxed">
              Each dish uses everyday, unprocessed ingredients.
            </p>
          </article>
          <article className="text-center md:text-left">
            <span className="inline-block mb-4 text-teal-500" aria-hidden>
              <Image
                src="/assets/images/icon-minimum-fuss.svg"
                alt=""
                width={48}
                height={48}
              />
            </span>
            <h3 className="font-[--font-nunito] font-bold text-xl text-neutral-900 mb-2">
              Minimum fuss
            </h3>
            <p className="text-neutral-800 leading-relaxed">
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </article>
          <article className="text-center md:text-left">
            <span className="inline-block mb-4 text-teal-500" aria-hidden>
              <Image
                src="/assets/images/icon-search-in-seconds.svg"
                alt=""
                width={48}
                height={48}
              />
            </span>
            <h3 className="font-[--font-nunito] font-bold text-xl text-neutral-900 mb-2">
              Search in seconds
            </h3>
            <p className="text-neutral-800 leading-relaxed">
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </article>
        </div>
      </section>

      {/* Built for real life */}
      <section
        className="max-w-6xl mx-auto px-5 py-16 sm:px-10 sm:py-20"
        aria-labelledby="built-for-real-life-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2
              id="built-for-real-life-heading"
              className="font-[--font-nunito] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-tight mb-6"
            >
              Built for real life
            </h2>
            <p className="text-neutral-800 text-lg leading-relaxed mb-4">
              Cooking shouldn&apos;t be complicated. These recipes come in under{" "}
              <strong className="text-orange-500 font-semibold">
                30 minutes
              </strong>{" "}
              of active time, fit busy schedules, and taste good enough to
              repeat.
            </p>
            <p className="text-neutral-800 text-lg leading-relaxed">
              Whether you&apos;re new to the kitchen or just need fresh ideas,
              we&apos;ve got you covered.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-neutral-200 shadow-lg">
              <Image
                src="/assets/images/image-about-beyond-the-plate-large.webp"
                alt="Hands chopping fresh green vegetables on a cutting board"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to cook smarter? CTA */}
      <section
        className="relative bg-teal-500/15 py-16 sm:py-20 overflow-hidden"
        aria-labelledby="cta-heading"
      >
        <span
          className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 text-neutral-300/70 pointer-events-none"
          aria-hidden
        >
          <Image
            src="/assets/images/pattern-fork.svg"
            alt=""
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </span>
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 text-teal-500/40 pointer-events-none"
          aria-hidden
        >
          <Image
            src="/assets/images/pattern-knife.svg"
            alt=""
            width={160}
            height={160}
            className="w-full h-full object-contain"
          />
        </span>
        <div className="relative max-w-6xl mx-auto px-5 sm:px-10 text-center">
          <h2
            id="cta-heading"
            className="font-[--font-nunito] font-extrabold text-3xl sm:text-4xl text-neutral-900 mb-3"
          >
            Ready to cook smarter?
          </h2>
          <p className="text-neutral-800 text-lg max-w-xl mx-auto mb-8">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <Link
            href="/recipies"
            className="inline-block px-6 py-3.5 bg-neutral-900 text-neutral-0 font-semibold rounded-lg hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 transition-colors"
          >
            Browse recipes
          </Link>
        </div>
      </section>
    </main>
  );
}
