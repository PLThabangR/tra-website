import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

export default function About() {
  const team = [
    {
      role: "Founder & Principal Consultant",
      focus: "Sales, architecture, client relationships, delivery oversight",
    },
    {
      role: "Senior Application Developer",
      focus: ".NET/C# backend, API development, database design",
    },
    {
      role: "Senior Application Developer",
      focus: "React/Angular frontend, integration, testing",
    },
    { role: "Contract Designer", focus: "UI/UX design, engaged per project" },
  ];

  return (
    <>
      {/* Dark Header */}
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-24">
          <div className="max-w-3xl">
            <div className="font-sans text-sm text-gold mb-4 uppercase tracking-wider">
              About
            </div>
            <h1 className="text-text-primary mb-4">
              A focused application engineering team.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              TR Application Development is a division of TR Software
              Development Consulting (Pty) Ltd. We design, build and integrate
              practical business applications
            </p>
          </div>
        </div>
      </section>

      {/* Light Content */}
      <section className="section-padding light-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Our positioning</h2>
              <div className="space-y-4 text-text-dark leading-relaxed">
                <p>
                  We build the applications that run your business. Staff
                  portals, customer portals, workflow systems, dashboards, APIs
                  and the integrations that connect them
                </p>
                <p>
                  Our primary technology ecosystem is Microsoft .NET, Azure, SQL
                  Server and Azure DevOps with modern React and Angular
                  frontends
                </p>
                <p>
                  TR Application Development is intentionally not positioned as
                  a managed-services or maintenance provider. Those activities
                  are handled by the parent company under a separate agreement.
                  This keeps our focus clean: we build, integrate and deploy
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6">Our team</h2>
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div
                    key={member.role}
                    className="flex gap-4 items-start bg-slate-50 p-5 rounded-lg border border-border-light"
                  >
                    <div className="w-8 h-8 rounded bg-gold text-btn-text flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm text-black">{member.role}</h4>
                      <p className="text-text-muted text-sm">{member.focus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Light Values Section */}
      <section className="section-padding light-section border-t border-border-light bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-12">Our values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Practical delivery",
                desc: "We build applications that solve real business problems not theoretical architectures.",
              },
              {
                title: "Full code ownership",
                desc: "No vendor lock-in. You receive the code, the documentation and the infrastructure.",
              },
              {
                title: "Delivery flexibility",
                desc: "SMME agility with less organisational overhead than large consulting organisations.",
              },
              {
                title: "Microsoft focus",
                desc: "Deep capability around .NET, Azure, SQL Server and Azure DevOps.",
              },
              {
                title: "Integration capability",
                desc: "We connect applications to the wider technology environment.",
              },
              {
                title: "Compliance by design",
                desc: "POPIA compliance with data processing agreements. B-BBEE EME Level 4.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-lg border border-border-light shadow-sm"
              >
                <div className="flex gap-3 mb-2">
                  <Check className="text-gold shrink-0 mt-1" size={18} />
                  <h4 className="text-black">{value.title}</h4>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="section-padding bg-bg-main border-t border-border-subtle">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-text-primary mb-4">
            Let's talk about your application
          </h2>
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            Whether you need to build, integrate, modernise or deploy we start
            with understanding
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
