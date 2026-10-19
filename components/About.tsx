import Image from "next/image";

const paragraphs = [
  "Data and AI leader with 10+ years applying machine learning to R&D problems in materials science, structural monitoring, and market intelligence. Trained as a mathematician and an architect, I specialise in sequential learning for materials discovery, ontology engineering, and NLP, backed by hands-on Python and MLOps practice. At TU Berlin I led the building-demonstrations work package of a Horizon Europe project across six partners in four countries, alongside the project's AI and data research. I am looking for a Data Science or AI Lead role in an organization with strong R&D.",
];

function splitLead(text: string) {
  const end = text.indexOf(".");

  if (end === -1) {
    return { lead: text, rest: "" };
  }

  return {
    lead: text.slice(0, end + 1),
    rest: text.slice(end + 1),
  };
}

export default function About() {
  return (
    <section id="about" className="bg-bg-subtle px-6 py-20">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[160px_1fr_220px]">
        <div className="border-primary md:border-l-2 md:pl-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            About
          </p>
        </div>

        <div className="order-2 mx-auto w-[200px] md:order-3 md:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-white">
            <Image
              src="/profile-benjamin-moreno.png"
              alt="Professional portrait of Benjamin Moreno Torres"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-3 space-y-7 md:order-2">
          {paragraphs.map((paragraph) => {
            const { lead, rest } = splitLead(paragraph);

            return (
              <p key={paragraph} className="text-lg leading-8 text-text-muted">
                <span className="font-semibold text-text">{lead}</span>
                {rest}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
