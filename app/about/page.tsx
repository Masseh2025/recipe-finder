import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero / Our mission */}
        <section className="max-w-6xl mx-auto px-5 py-16 sm:px-10 sm:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
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
              <div className="aspect-3/4 max-h-[500px] rounded-2xl overflow-hidden bg-neutral-200 relative">
                {/* Asset from challenge: add as public/images/about-hero.jpg */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-hero.jpg"
                  alt="Person chopping fresh vegetables in a kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="absolute -bottom-4 -right-4 w-24 h-16 text-teal-500/80"
                aria-hidden
              >
                <svg viewBox="0 0 96 64" fill="none" className="w-full h-full">
                  <path
                    d="M0 32 Q24 8 48 32 T96 32"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </div>
          </div>
        </section>

        {/* Why we exist */}
        <section className="max-w-6xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
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
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      className="rotate-0"
                    >
                      <path d="M2 2 L10 6 L2 10 Z" />
                    </svg>
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
        </section>

        {/* Our food philosophy */}
        <section className="max-w-6xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
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
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                    >
                      <path d="M2 2 L10 6 L2 10 Z" />
                    </svg>
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
        </section>

        {/* Beyond the plate */}
        <section className="max-w-6xl mx-auto px-5 py-12 sm:px-10 sm:py-16">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
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
              <div className="aspect-3/4 max-h-[500px] rounded-2xl overflow-hidden bg-neutral-200 relative">
                {/* Asset from challenge: add as public/images/about-beyond.jpg */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/about-beyond.jpg"
                  alt="Family in kitchen with fresh produce"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="max-w-6xl mx-auto px-5 py-12 sm:px-10 sm:py-16"
          aria-labelledby="cta-heading"
        >
          <div className="relative rounded-2xl bg-neutral-200 px-8 py-14 sm:px-14 sm:py-16 text-center overflow-hidden">
            <span
              className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400/60 w-12 h-12"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-full h-full"
              >
                <path d="M8 4 L8 20 M16 4 L16 20 M4 8 L20 8 M4 16 L20 16" />
              </svg>
            </span>
            <span
              className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-400/60 w-10 h-10"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-full h-full"
              >
                <path d="M4 4 L20 20 M20 4 L4 20" />
              </svg>
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
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-0 mt-auto">
        <div className="max-w-6xl mx-auto px-5 py-6 sm:px-10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-neutral-800 text-sm">
            Made with <span aria-label="love">❤️</span> and{" "}
            <span aria-label="sparkle">✨</span>
          </p>
          <div className="flex items-center gap-5" aria-label="Social links">
            <a
              href="https://instagram.com"
              className="text-neutral-800 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Instagram</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              className="text-neutral-800 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X (Twitter)</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://pinterest.com"
              className="text-neutral-800 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Pinterest</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.233 7.464-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              className="text-neutral-800 hover:text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">TikTok</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
