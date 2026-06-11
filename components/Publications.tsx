type Publication = {
  title: string;
  source: string;
  link?: string;
  tag?: "First-author publication" | "Academic publication";
};

const publications: Publication[] = [
  {
    title:
      "An Ontology-Based Approach to Enable Data-Driven Research in the Field of NDT in Civil Engineering",
    source: "MDPI Remote Sensing",
    link: "https://www.mdpi.com/2072-4292/13/12/2426",
    tag: "First-author publication",
  },
  {
    title:
      "Concreting a sustainable future: A dataset of alkali-activated concrete and its properties",
    source: "ScienceDirect",
    link: "https://www.sciencedirect.com/science/article/pii/S235234092300625X",
    tag: "First-author publication",
  },
  {
    title:
      "Reincarnate D1.3 - Probabilistic methods for lifecycle assessment and prediction of buildings and construction products",
    source: "Zenodo",
    link: "https://zenodo.org/records/17407558",
    tag: "First-author publication",
  },
  {
    title:
      "Presenting SLAMD - A Sequential Learning Based Software for the Inverse Design of Sustainable Cementitious Materials",
    source: "NanoWorld Journal, 2023",
    link: "https://jnanoworld.com/2023/09/27/presenting-slamd-a-sequential-learning-based-software-for-the-inverse-design-of-sustainable-cementitious-materials/",
  },
  {
    title:
      "Data driven design of alkali-activated concrete using sequential learning",
    source: "ScienceDirect",
    link: "https://www.sciencedirect.com/science/article/pii/S095965262302379X",
  },
  {
    title: "The Intersection Between Semantic Web and Materials Science",
    source: "Advanced Intelligent Systems",
    link: "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/aisy.202300051",
  },
  {
    title:
      "A Perspective on Digital Knowledge Representation in Materials Science and Engineering",
    source: "Advanced Engineering Materials",
    link: "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adem.202101176",
  },
  {
    title:
      "Meta-Learning for Adaptive Mix Design of Alkali-Activated Concrete",
    source: "Springer",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-14170-5_27",
  },
  {
    title:
      "An Adaptive Upscaling Approach for Assessing Materials' Circularity Potential with Non-destructive Testing (NDT)",
    source: "Springer",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-70277-8_38",
  },
  {
    title:
      "REINCARNATE: Shaping a Sustainable Future in Construction Through Digital Innovation",
    source: "Springer",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-70281-5_32",
  },
  {
    title:
      "A case study of structural monitoring as a control tool in the restoration process of Heritage Structures: The strengthening of the Vistabella Church's Tower",
    source: "UPCommons",
    link: "https://upcommons.upc.edu/entities/publication/c24ad145-4819-491a-96a7-d551cda1c446",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="bg-bg-subtle px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Publications
        </h2>

        <div className="mt-10 grid gap-5">
          {publications.map((publication) => (
            <article
              key={publication.title}
              className="border border-border bg-white p-6"
            >
              <span className="inline-flex border border-primary px-3 py-1 text-xs font-medium text-primary">
                {publication.tag ?? "Academic publication"}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-text">
                {publication.title}
              </h3>
              <p className="mt-3 text-sm font-semibold text-primary">
                {publication.source}
              </p>
              {publication.link ? (
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors hover:text-primary-light"
                >
                  View publication -&gt;
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
