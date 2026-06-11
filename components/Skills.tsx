const skillGroups = [
  {
    title: "ML / AI",
    skills: [
      "Bayesian Networks",
      "Markov Chains",
      "LSTMs",
      "NLP",
      "Graph Analytics",
      "Clustering",
      "Regression",
      "Ensemble Methods",
      "Sequential Learning",
    ],
  },
  {
    title: "Programming",
    skills: ["Python (primary)", "R", "C#", "SQL"],
  },
  {
    title: "Data & Semantic Web",
    skills: [
      "Ontologies (OWL, RDF, SPARQL)",
      "FAIR Data Principles",
      "Semantic Web",
      "Linked Data",
      "Data Pipeline Design",
    ],
  },
  {
    title: "Leadership & Project Management",
    skills: [
      "Horizon Europe",
      "Multi-stakeholder coordination",
      "International consortium management",
      "Graduate researcher supervision",
      "Technology transfer",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-bg px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Skills
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-bold text-primary">{group.title}</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-text-muted">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
