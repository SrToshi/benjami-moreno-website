import Image from "next/image";
import { siteContent } from "@/lib/content";

const content = siteContent.en;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
    >
      <Image
        src="/pictures/Banner.png?v=3"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
          {content.location}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
          <span className="block">Benjamin</span>
          <span className="block">Moreno Torres</span>
        </h1>
        <p className="mt-6 text-2xl text-white md:text-3xl">{content.title}</p>

        <div className="mx-auto mt-10 flex max-w-sm flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <a
            href={content.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center border border-white bg-white px-5 py-3 text-sm font-semibold text-text transition-colors hover:bg-white/90 sm:w-auto"
          >
            Download CV
          </a>
          <a
            href={content.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-text sm:w-auto"
          >
            View LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 w-full items-center justify-center border border-white px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-text sm:w-auto"
          >
            Get in touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-white md:block"
      >
        <span className="block h-4 w-4 animate-bounce rotate-45 border-b-2 border-r-2 border-current" />
      </a>
    </section>
  );
}
