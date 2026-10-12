import { Link } from "react-router-dom";
import {
  Landmark,
  Building2,
  ShoppingCart,
  HeartPulse,
  Radio,
  Truck,
  Briefcase,
  Cpu,
  ArrowRight,
  Handshake,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Landmark,
      title: "Government & Public Sector",
      description:
        "National departments, provincial departments, municipalities, government agencies, public entities, and state-owned enterprises.",
      needs: [
        "Digital applications",
        "Citizen-facing portals",
        "Internal applications",
        "API development",
        "System integration",
        "Cloud deployment",
        "Application modernisation",
        "Data-driven systems",
      ],
    },
    {
      icon: Building2,
      title: "Financial Services",
      description:
        "Banks, insurers, fintech organisations, and investment firms.",
      needs: [
        "Customer-facing applications",
        "Internal workflow systems",
        "API development",
        "System integration",
        "Cloud deployment",
        "Legacy modernisation",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description:
        "Retail groups, e-commerce platforms, and distribution organisations.",
      needs: [
        "Customer portals",
        "Order management systems",
        "API integrations",
        "Cloud deployment",
        "Reporting and analytics",
      ],
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description:
        "Healthcare organisations, medical technology companies, and healthcare administration.",
      needs: [
        "Patient portals",
        "Internal systems",
        "Systems integration",
        "Data-driven applications",
        "Cloud deployment",
      ],
    },
    {
      icon: Radio,
      title: "Telecommunications",
      description: "Telecom companies and technology providers.",
      needs: [
        "Enterprise applications",
        "API development",
        "Systems integration",
        "Cloud deployment",
        "Application modernisation",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description:
        "Logistics companies, transportation, and supply-chain organisations.",
      needs: [
        "Dispatch and tracking systems",
        "Customer portals",
        "API integrations",
        "Reporting dashboards",
        "Cloud deployment",
      ],
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description:
        "Engineering, consulting, legal, accounting, and property firms.",
      needs: [
        "Client portals",
        "Internal systems",
        "Workflow applications",
        "API integrations",
        "Reporting and analytics",
      ],
    },
    {
      icon: Cpu,
      title: "Technology Companies & System Integrators",
      description:
        "Larger ICT companies that require additional application engineering capacity.",
      needs: [
        "Development partner capacity",
        "Subcontracted .NET development",
        "Integration partner work",
        "Azure implementation",
        "Application engineering",
      ],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-azure rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-tech-blue rounded-full blur-3xl" />
        </div>
        <div className="relative container-custom">
          <div className="badge-azure mb-6 bg-azure/20 text-azure">
            Industries
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            Where software and system integration are strategically important.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            We work with organisations that need modern, integrated, and
            deployable applications not just websites.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry) => (
              <div key={industry.title} className="card">
                <div className="card-icon">
                  <industry.icon size={22} />
                </div>
                <h3 className="mb-3">{industry.title}</h3>
                <p className="text-slate-gray mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <h4 className="text-sm uppercase tracking-wider text-slate-gray mb-3">
                  Typical needs
                </h4>
                <div className="flex flex-wrap gap-2">
                  {industry.needs.map((need) => (
                    <span key={need} className="tech-tag">
                      {need}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sector focus */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">Where we focus in Year 1</h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              We serve eight sectors, but we concentrate our Year 1 sales
              efforts on the two segments most likely to buy from a new firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl border-2 border-tech-blue/30">
              <div className="text-sm font-semibold text-tech-blue uppercase tracking-wider mb-3">
                Primary focus  Year 1
              </div>
              <h3 className="mb-4">Mid-Market Businesses</h3>
              <p className="text-slate-gray mb-6 leading-relaxed">
                Organisations with R100M–R1B turnover that need custom software
                but lack internal capacity. Faster decisions, simpler
                procurement, direct access to decision-makers.
              </p>
              <div className="space-y-2 text-sm text-slate-gray">
                <div className="flex gap-3">
                  <span className="text-african-green">✓</span>
                  <span>Staff portals and workflow systems</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-african-green">✓</span>
                  <span>Custom business applications</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-african-green">✓</span>
                  <span>Systems integration and dashboards</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-african-green">✓</span>
                  <span>Projects in the R80,000 – R300,000 range</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200">
              <div className="text-sm font-semibold text-slate-gray uppercase tracking-wider mb-3">
                Secondary focus  Year 2
              </div>
              <h3 className="mb-4">Enterprises & Government</h3>
              <p className="text-slate-gray mb-6 leading-relaxed">
                Larger organisations with more complex procurement. We build the
                references and partner relationships needed to win these
                contracts over the next 12–18 months.
              </p>
              <div className="space-y-2 text-sm text-slate-gray">
                <div className="flex gap-3">
                  <span className="text-slate-gray">✓</span>
                  <span>Enterprise custom applications</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-gray">✓</span>
                  <span>Application modernisation</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-gray">✓</span>
                  <span>Systems integration and cloud deployment</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-slate-gray">✓</span>
                  <span>Projects in the R300,000 – R800,000+ range</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-light-blue flex items-center justify-center text-tech-blue">
                <Handshake size={22} />
              </div>
              <h2 className="mb-0">Partnership with larger ICT companies</h2>
            </div>
            <p className="text-lg text-slate-gray leading-relaxed">
              A larger technology company may win an enterprise or government
              contract but require additional application engineering capacity.
              TR can participate as a development partner, subcontractor, .NET
              development partner, integration partner, or Azure implementation
              partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Development Partner",
                desc: "Additional .NET, React, or Angular engineering capacity for enterprise projects.",
              },
              {
                title: "Integration Partner",
                desc: "Systems integration, API development, and Azure integration services.",
              },
              {
                title: "Azure Implementation Partner",
                desc: "Cloud deployment, Terraform, Docker, and CI/CD pipelines.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200"
              >
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-light-blue rounded-xl border border-tech-blue/20">
            <p className="text-navy font-semibold mb-2">
              If you are an ICT company or system integrator:
            </p>
            <p className="text-slate-gray text-sm leading-relaxed">
              We offer subcontracted .NET and Azure engineering capacity under
              your brand or ours. You keep the client relationship. We deliver
              the technical work. Contact us to discuss a partnership
              arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">
            Do you have a project that needs application engineering?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tell us about your requirements. We respond within one business day.
          </p>
          <Link to="/contact" className="btn-primary">
            Start a Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
