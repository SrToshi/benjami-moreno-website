const tags = [
  "Sequential Learning",
  "Active Learning",
  "Materials Science",
  "Python",
  "Open Source",
];

export default function Projects() {
  return (
    <section id="projects" className="bg-bg-subtle px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <article className="border border-border border-l-4 border-l-primary bg-white p-6 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Featured Project
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text md:text-4xl">
            SLAMD - Sequential Learning App for Materials Discovery
          </h2>
          <p className="mt-4 text-xl text-text-muted">
            Open-source AI tool for inverse design of sustainable cementitious
            materials
          </p>

          <p className="mt-7 text-lg leading-8 text-text-muted">
            SLAMD applies sequential (active) learning to accelerate the
            discovery of sustainable cement and concrete formulations. By
            iteratively selecting the most informative experiments, it reduces
            the number of lab tests needed to find optimal material compositions
            - making R&D faster and more sustainable.
          </p>

          <p className="mt-6 leading-8 text-text-muted">
            <span className="font-semibold text-text">Role:</span>{" "}
            Co-developer, tester, and co-author. Contributed to design,
            validation, and the NanoWorld Journal publication (2023).
          </p>

          <div className="mt-7 flex flex-col gap-3 text-sm font-semibold text-primary sm:flex-row sm:gap-6">
            <a
              href="https://github.com/BAMresearch/WEBSLAMD"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary-light"
            >
              View on GitHub -&gt;
            </a>
            <a
              href="https://slamd-demo.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary-light"
            >
              Live Demo -&gt;
            </a>
            <a
              href="#publications"
              className="transition-colors hover:text-primary-light"
            >
              Read Publication -&gt;
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-primary px-3 py-1 text-xs font-medium text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
