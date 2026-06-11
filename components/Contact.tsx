import { siteContent } from "@/lib/content";

const content = siteContent.en;

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-subtle px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Contact
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-text-muted">
          Open to conversations about Data Science and AI Lead roles in Berlin
          and the DACH region. Hybrid or remote.
        </p>

        <a
          href={`mailto:${content.email}`}
          className="mt-8 block break-words text-2xl font-bold tracking-tight text-primary transition-colors hover:text-primary-light md:text-3xl"
        >
          {content.email}
        </a>

        <a
          href={content.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex min-h-11 items-center justify-center border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:border-primary-light hover:text-primary-light"
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
}
