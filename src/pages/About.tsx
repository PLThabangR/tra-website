import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge-azure mb-6 bg-azure/20 text-azure">About</div>
          <h1 className="text-white mb-4 max-w-3xl">
            A specialised application engineering division.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            TR Application Development is a division of TR Software Development
            Consulting (Pty) Ltd, focused on enterprise application development,
            systems integration, and cloud deployment.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Our positioning</h2>
              <div className="space-y-4 text-slate-gray leading-relaxed">
                <p>
                  TR Application Development was formerly positioned as "TR Web
                  Development Consulting." It was renamed and repositioned to
                  reflect its broader capability: enterprise application
                  engineering, not just web development.
                </p>
                <p>
                  The division maintains a Microsoft-focused engineering
                  strategy while remaining capable of working with modern web
                  technologies and integrating with heterogeneous client
                  environments.
                </p>
                <p>
                  Strategic boundary: TR Application Development is
                  intentionally not positioned as a managed-services or
                  application-maintenance business. Those activities remain
                  within the broader capabilities of TR Software Development
                  Consulting (Pty) Ltd.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6">What we are not</h2>
              <p className="text-slate-gray mb-6 leading-relaxed">
                To protect the division's positioning, the following should not
                be its primary commercial identity:
              </p>
              <div className="space-y-2">
                {[
                  "Website design agency",
                  "Generic freelance development",
                  "MERN development agency",
                  "MEAN development agency",
                  "Mobile application company",
                  "IT helpdesk",
                  "General hardware supplier",
                  "Managed-services provider",
                  "Application maintenance company",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 text-sm text-slate-gray"
                  >
                    <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-12">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Engineering quality",
                desc: "Architecture, source control, automated testing, CI/CD, and documented delivery processes.",
              },
              {
                title: "Full code ownership",
                desc: "No vendor lock-in. You receive the code, the documentation, and the infrastructure.",
              },
              {
                title: "Delivery flexibility",
                desc: "SMME agility with less organisational overhead than large consulting organisations.",
              },
              {
                title: "Microsoft focus",
                desc: "Deep capability around .NET, Azure, SQL Server, and Azure DevOps.",
              },
              {
                title: "Integration capability",
                desc: "We connect applications to the wider technology environment.",
              },
              {
                title: "Compliance by design",
                desc: "POPIA compliance with data processing agreements. B-BBEE EME status with sworn affidavit.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <div className="flex gap-3 mb-2">
                  <Check
                    className="text-african-green flex-shrink-0 mt-1"
                    size={18}
                  />
                  <h4>{value.title}</h4>
                </div>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">
            Let's talk about your application.
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need to build, integrate, modernise, or deploy — we
            start with understanding.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Conversation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
