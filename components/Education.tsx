const education = [
  {
    degree: "PhD, Semantic Web Applications for Materials Discovery",
    institution: "Technische Universitat Berlin",
    year: "Ongoing",
  },
  {
    degree: "Master in Architecture (375 ECTS)",
    institution: "Universitat de Girona",
    year: "2005-2011",
  },
  {
    degree: "Master in Mathematics for Industry (60 ECTS)",
    institution: "Universitat Autonoma de Barcelona",
    year: "2001",
  },
  {
    degree: "Degree in Mathematics (300 ECTS)",
    institution: "Universitat Autonoma de Barcelona",
    year: "1994-2000",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-bg px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-text md:text-4xl">
          Education
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {education.map((item) => (
            <article
              key={item.degree}
              className="grid gap-2 py-6 sm:grid-cols-[1fr_auto] sm:gap-6"
            >
              <div>
                <h3 className="font-bold text-text">{item.degree}</h3>
                <p className="mt-1 text-text-muted">{item.institution}</p>
              </div>
              <p className="text-sm font-semibold text-primary sm:text-right">
                {item.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
