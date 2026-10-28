import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Approach() {
  const phases = [
    {
      step: "01",
      title: "Discovery & Requirements",
      desc: "We start by understanding the business problem. We gather requirements, discuss constraints and identify what a successful system actually looks like.",
    },
    {
      step: "02",
      title: "Solution Design & Scope",
      desc: "We design the architecture, database schema, and API contracts. We provide a fixed-scope proposal with timelines and costs before writing any code.",
    },
    {
      step: "03",
      title: "Implementation & Testing",
      desc: "We build in iterative phases, demonstrating working software regularly. We write automated tests to ensure the application remains stable as it grows.",
    },
    {
      step: "04",
      title: "Deployment & Handover",
      desc: "We deploy to production, set up CI/CD pipelines, and hand over the source code, documentation and infrastructure.",
    },
  ];

  return (
    <>
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="font-sans text-sm text-gold mb-4 uppercase tracking-wider">
              Our Approach
            </div>
            <h1 className="text-text-primary mb-6">How we deliver software</h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              We treat software development as an engineering discipline, not a
              creative guessing game.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding light-section">
        <div className="container-custom max-w-4xl">
          <div className="space-y-12">
            {phases.map((phase) => (
              <div
                key={phase.step}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-border-light pt-8"
              >
                <div className="md:col-span-1">
                  <div className="text-3xl font-bold font-sans text-gold/30">
                    {phase.step}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="mb-3 text-black">{phase.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-main border-t border-border-subtle">
        <div className="container-custom max-w-4xl">
          <h2 className="mb-8 text-text-primary">Engineering principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Full Code Ownership",
                desc: "You receive the source code, the database scripts and the infrastructure configuration. No vendor lock-in.",
              },
              {
                title: "Automated Testing",
                desc: "We write unit and integration tests for critical business logic to prevent regressions.",
              },
              {
                title: "Documentation",
                desc: "We document the architecture, API endpoints, and deployment process so your team can maintain the system.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h4 className="mb-2 text-text-primary">{item.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding light-section border-t border-border-light">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="mb-4 text-black">Ready to scope your project?</h2>
          <p className="text-text-muted mb-8">
            We start every engagement with a discovery phase. Tell us what you
            need, and we will tell you how we would build it.
          </p>
          <Link to="/contact" className="btn-primary">
            Discuss Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
