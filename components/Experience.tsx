const experience = [
  {
    role: "Research Associate, AI & Data · Work Package Leader",
    company: "Technische Universität Berlin · Horizon Europe project REINCARNATE (circular construction materials)",
    location: "Berlin, Germany",
    dates: "April 2023 - May 2026",
    bullets: [
      "Led the Demonstrations in Buildings work package, coordinating 6 partner organizations across 4 countries and owning deliverables, timelines, and integration of results.",
      "Co-authored SLAMD (Sequential Learning App for Materials Discovery), an open-source active-learning tool for sustainable materials design (NanoWorld Journal, 2023), and coordinated its industrial application in the project.",
      "Designed an ontology-based data architecture (OWL/RDF/SPARQL) for FAIR interoperability across heterogeneous research datasets.",
      "Developed probabilistic life-cycle models for construction products; first author of project deliverable D1.3 on probabilistic methods for life-cycle assessment.",
      "Supervised 4 graduate researchers in AI and digital construction, guiding projects from scoping to publication-ready outputs.",
      "Managed stakeholder communication across academia, industry, and EU project officers.",
    ],
    tags: [
      "Horizon Europe",
      "Ontology Engineering",
      "Python",
      "FAIR Data",
      "Sequential Learning",
    ],
  },
  {
    role: "Machine Learning Researcher",
    company: "BAM - Federal Institute for Materials Research",
    location: "Berlin, Germany",
    dates: "2020 - January 2023",
    bullets: [
      "Built predictive ML models (clustering, regression, ensembles) for material durability and circularity assessment.",
      "Structured and analyzed databases on Alkali-Activated Concretes from heterogeneous experimental sources.",
      "Developed data pipelines for EU digitalization projects, improving cross-institutional data quality.",
      "Collaborated with chemists, physicists, and engineers to translate domain expertise into ML feature engineering.",
    ],
    tags: ["Machine Learning", "Materials Science", "Python", "Data Pipelines"],
  },
  {
    role: "Data Scientist & ML Engineer",
    company: "3S'TECH S.L.",
    location: "Girona, Spain",
    dates: "2016 - 2020",
    bullets: [
      "Developed predictive algorithms for real-time structural health monitoring using IoT sensor networks.",
      "Designed end-to-end data pipelines for sensor data ingestion, cleaning, transformation, and anomaly detection.",
      "Implemented ML models for engineering databases and concrete testing.",
    ],
    tags: ["IoT", "Structural Health Monitoring", "ML Engineering", "Python"],
  },
  {
    role: "Data Scientist - NLP & Analytics",
    company: "Symanto GmbH",
    location: "Nürnberg, Germany",
    dates: "Aug 2012 – May 2016",
    bullets: [
      "Built Python and C# tools for social media sentiment analysis and market research.",
      "Contributed to NLP pipelines (text classification, entity extraction) and graph-based influencer analytics.",
      "Delivered data insights for digital marketing campaigns.",
    ],
    tags: ["NLP", "Python", "C#", "Graph Analytics"],
  },
  {
    role: "Structural Designer & Architectural Engineer",
    company: "Various Firms",
    location: "Spain",
    dates: "2005 - 2011",
    bullets: [
      "Structural design, planning, and valuation across residential, heritage, and public projects including the Disseny Hub Barcelona.",
      "Developed systems-thinking and spatial reasoning skills that now underpin a distinctive approach to data architecture and ML system design.",
    ],
    tags: ["Architecture", "Structural Engineering", "Systems Thinking"],
  },
];

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="border border-primary px-3 py-1 text-xs font-medium text-primary"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="bg-bg px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Experience
        </h2>

        <div className="mt-12 border-l-2 border-primary">
          {experience.map((item) => (
            <article key={item.role} className="relative pb-12 pl-8 last:pb-0">
              <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary" />
              <div>
                <p className="text-sm text-text-muted">{item.dates}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-primary">
                  {item.role}
                </h3>
                <p className="mt-1 font-bold text-text">
                  {item.company}{" "}
                  <span className="font-normal text-text-muted">
                    · {item.location}
                  </span>
                </p>
                <ul className="mt-5 list-disc space-y-2 pl-5 text-text-muted">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Tags tags={item.tags} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
