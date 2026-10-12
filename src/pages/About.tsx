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
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge-azure mb-6 bg-azure/20 text-azure">About</div>
          <h1 className="text-white mb-4 max-w-3xl">
            A focused application engineering team.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            TR Application Development is a division of TR Software Development
            Consulting (Pty) Ltd. We design, build and integrate practical
            business applications.
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
                  We build the applications that run your business. Staff
                  portals, customer portals, workflow systems, dashboards, APIs
                  and the integrations that connect them.
                </p>
                <p>
                  Our primary technology ecosystem is Microsoft .NET, Azure,
                  SQL Server and Azure DevOps with modern React and Angular
                  frontends.
                </p>
                <p>
                  TR Application Development is intentionally not positioned as
                  a managed-services or maintenance provider. Those activities
                  are handled by the parent company under a separate agreement.
                  This keeps our focus clean: we build, integrate and deploy.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6">Our team</h2>
              <div className="space-y-4">
                {team.map((member, index) => (
                  <div
                    key={member.role}
                    className="flex gap-4 items-start bg-slate-50 p-5 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-lg bg-tech-blue text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm">{member.role}</h4>
                      <p className="text-slate-gray text-sm">{member.focus}</p>
                    </div>
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
                title: "Practical delivery",
                desc: "We build applications that solve real business problems, not theoretical architectures.",
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
                desc: "POPIA compliance with data processing agreements. B-BBEE EME Level 4.",
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
            Whether you need to build, integrate, modernise or deploy we
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
