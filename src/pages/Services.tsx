import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Custom Business Applications",
      desc: "We build internal tools, portals, and line-of-business applications that solve specific operational problems.",
      points: [
        "Staff portals and dashboards",
        "Customer self-service platforms",
        "Workflow and approval systems",
        "Database-backed internal tools",
      ],
    },
    {
      title: "API Development & Integration",
      desc: "We connect systems so data flows reliably between your CRM, ERP, accounting, and custom applications.",
      points: [
        "REST API development",
        "Third-party system integration",
        "Legacy system modernisation",
        "Authentication and access control",
      ],
    },
    {
      title: "Workflow Automation",
      desc: "We replace manual, email-based processes with auditable digital workflows.",
      points: [
        "Digital forms and validation",
        "Automated routing and notifications",
        "Audit trails and compliance logging",
        "Integration with existing systems",
      ],
    },
    {
      title: "Cloud Deployment & Handover",
      desc: "We deploy applications to modern cloud environments and hand over the keys.",
      points: [
        "Microsoft Azure deployment",
        "CI/CD pipeline setup",
        "Infrastructure as Code (Terraform)",
        "Technical documentation and training",
      ],
    },
  ];

  return (
    <>
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="font-sans text-sm text-gold mb-4 uppercase tracking-wider">
              Services
            </div>
            <h1 className="text-text-primary mb-6">What we build</h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              We focus on practical engineering. We do not sell every technology
              we know; we sell the specific work required to solve your problem.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding light-section">
        <div className="container-custom max-w-4xl">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="border-t border-border-light pt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="text-sm font-sans text-gold mb-2">
                      0{index + 1}
                    </div>
                    <h2 className="text-2xl mb-2 text-black">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-text-muted mb-6 leading-relaxed text-lg">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start text-sm text-text-dark"
                        >
                          <span className="text-gold mr-2 mt-0.5 font-bold">
                            ✓
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-main border-t border-border-subtle">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="mb-4 text-text-primary">
            Have a specific project in mind?
          </h2>
          <p className="text-text-secondary mb-8">
            Tell us what you are trying to build. We will tell you if we can
            help, and how we would approach it.
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
