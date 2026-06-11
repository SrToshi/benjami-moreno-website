import Image from "next/image";

const paragraphs = [
  "I started as a mathematician. Six years studying the structure of things - probability, logic, the language underneath everything. Then, almost as a detour, I spent five years as an architect. Not because the math stopped mattering, but because I wanted to work with systems you could touch.",
  "Data science found me somewhere between those two worlds. When machine learning started reshaping materials research, structural monitoring, and industrial R&D, I had something rare: the quantitative rigor to model it properly and the physical intuition to know when the model was lying.",
  "For the past ten years I have been applying that combination - Bayesian Networks, Markov Chains, ontology engineering, NLP - to hard R&D problems: predicting material durability, building FAIR data pipelines, leading a Horizon Europe work package across six research institutions. The work has always been at the edge of what ML can do when the domain is genuinely complex.",
  "I am now looking for a Data Science or AI Lead role in an organization with serious R&D - somewhere I can lead a team, own a data strategy, and work on problems that require both technical depth and the ability to communicate across disciplines. Berlin preferred, open to hybrid or remote.",
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
