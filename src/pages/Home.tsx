import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code2,
  Plug,
  GitBranch,
  Cloud
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Custom Business Applications",
      desc: "Internal tools and platforms built to match specific workflows",
    },
    {
      icon: Plug,
      title: "API Integration",
      desc: "Connecting systems so data flows reliably between them",
    },
    {
      icon: GitBranch,
      title: "Workflow Automation",
      desc: "Replacing manual processes with auditable digital workflows",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      desc: "Deploying applications into modern cloud environments",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="font-sans text-sm text-gold mb-4 uppercase tracking-wider">
                Software Engineering · Integration · Cloud
              </div>
              <h1 className="text-text-primary mb-6">
                We build practical software for real business needs
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 leading-relaxed">
                We design, build and integrate business applications that help
                teams work more effectivelyfrom internal tools and workflow
                automation to API integrations and cloud deployed solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary">
                  Discuss Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link to="/work" className="btn-ghost">
                  View our work
                </Link>
              </div>
              <div className="mt-8 text-sm font-sans text-text-secondary">
                Application development · Integrations · Workflow automation ·
                Cloud deployment
              </div>
            </div>

            {/* Technical visual */}
            <div className="hidden lg:block">
              <div className="bg-bg-main border border-border-subtle p-1 rounded-md">
                <div className="bg-[#0a0809] border border-border-subtle p-6 font-mono text-sm overflow-hidden relative rounded-sm">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-gold/80"></div>
                    <div className="w-3 h-3 rounded-full bg-african-green/80"></div>
                  </div>
                  <div className="text-text-secondary space-y-2">
                    <div>
                      <span className="text-gold">POST</span>{" "}
                      /api/v1/workflows/initiate
                    </div>
                    <div className="text-text-secondary/70">
                      Host: api.tr-app-dev.co.za
                    </div>
                    <div className="text-text-secondary/70">
                      Authorization: Bearer *****
                    </div>
                    <div className="pt-2">
                      <span className="text-text-secondary">{`{`}</span>
                      <br />
                      <span className="ml-4 text-text-secondary">
                        "process": "onboarding",
                      </span>
                      <br />
                      <span className="ml-4 text-text-secondary">
                        "status":{" "}
                      </span>
                      <span className="text-african-green">"active"</span>
                      <span className="text-text-secondary">,</span>
                      <br />
                      <span className="ml-4 text-text-secondary">
                        "services": ["crm", "erp"]
                      </span>
                      <br />
                      <span className="text-text-secondary">{`}`}</span>
                    </div>
                    <div className="pt-4 text-african-green">
                      <span className="inline-block w-2 h-2 bg-african-green rounded-full mr-2"></span>
                      200 OK — 45ms
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-bg-main border-b border-border-subtle">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-4">What we build</h2>
            <p className="text-text-secondary">
              We focus on the specific engineering work required to solve
              business problems, not generic digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="border-t border-border-subtle pt-6"
              >
                <div className="text-gold mb-4">
                  <item.icon size={24} />
                </div>
                <h4 className="mb-2 text-text-primary">{item.title}</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding light-section">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <h2 className="mb-4 text-black">How we deliver</h2>
            <p className="text-text-muted">
              Projects are scoped before work begins. We agree on deliverables,
              timelines, and pricing before writing any code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                desc: "Requirements gathering and technical constraints.",
              },
              {
                step: "2",
                title: "Design",
                desc: "Architecture, database schema, and API contracts.",
              },
              {
                step: "3",
                title: "Build",
                desc: "Iterative development with weekly demos.",
              },
              {
                step: "4",
                title: "Deploy",
                desc: "Testing, cloud deployment, and technical handover.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-xl font-bold font-sans text-gold mb-3">
                  0{item.step}
                </div>
                <h4 className="mb-2 text-black">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-main text-text-primary border-t border-border-subtle">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-text-primary mb-4">
            Have a project that needs engineering?
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
