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
        "Modernisation",
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
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge-azure mb-6 bg-azure/20 text-azure">
            Industries
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            Where software and system integration are strategically important.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            We work with organisations that need modern, integrated, and
            deployable applications — not just websites.
          </p>
        </div>
      </section>

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

      {/* Partnership */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">Partnership with larger ICT companies</h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              A larger technology company may win an enterprise contract but
              require additional application engineering capacity. TR can
              participate as a development partner, subcontractor, .NET
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
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
