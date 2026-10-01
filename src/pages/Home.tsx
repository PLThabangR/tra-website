import { Link } from "react-router-dom";
import {
  Code2,
  Plug,
  Cloud,
  ArrowRight,
  CheckCircle2,
  Server,
  GitBranch,
  Layers,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Custom Application Development",
      description:
        "Enterprise web applications, business systems, portals, and workflow platforms built to your requirements.",
    },
    {
      icon: Plug,
      title: "Systems Integration",
      description:
        "Connect CRM, ERP, HR, and legacy systems through REST APIs, message queues, and Azure integration services.",
    },
    {
      icon: Layers,
      title: "Application Modernisation",
      description:
        "Move legacy .NET applications to modern architectures with API enablement and cloud-ready design.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description:
        "Deploy applications to Microsoft Azure with App Service, Azure SQL, Functions, and API Management.",
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description:
        "Automated builds, testing, and deployment pipelines using Azure DevOps, GitHub Actions, and Docker.",
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description:
        "Repeatable, version-controlled Azure infrastructure using Terraform for consistent environments.",
    },
  ];

  const techStack = [
    { category: "Backend", items: ["C#", ".NET", "ASP.NET Core", "EF Core"] },
    {
      category: "Frontend",
      items: ["React", "Angular", "TypeScript", "Tailwind"],
    },
    { category: "Database", items: ["SQL Server", "Azure SQL", "PostgreSQL"] },
    {
      category: "Cloud",
      items: [
        "Azure App Service",
        "Azure SQL",
        "Azure Functions",
        "API Management",
      ],
    },
    {
      category: "DevOps",
      items: ["Azure DevOps", "GitHub", "Docker", "Terraform", "CI/CD"],
    },
    {
      category: "Integration",
      items: ["REST APIs", "Service Bus", "RabbitMQ", "Webhooks"],
    },
  ];

  const process = [
    {
      num: "01",
      title: "Discovery",
      desc: "Requirements analysis, technical assessment, architecture, integration analysis.",
    },
    {
      num: "02",
      title: "Architecture",
      desc: "Application, API, database, cloud, and integration architecture design.",
    },
    {
      num: "03",
      title: "Development",
      desc: "Iterative development using .NET, React or Angular, and SQL.",
    },
    {
      num: "04",
      title: "Integration",
      desc: "Connect to existing systems, APIs, and data sources.",
    },
    {
      num: "05",
      title: "Testing",
      desc: "Automated and manual testing across the application and integrations.",
    },
    {
      num: "06",
      title: "CI/CD",
      desc: "Automated build, test, and deployment pipelines.",
    },
    {
      num: "07",
      title: "Deployment",
      desc: "Azure deployment using Terraform and Docker.",
    },
    {
      num: "08",
      title: "Handover",
      desc: "Documentation, training, and full code ownership transfer.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-tech-blue rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-40 w-72 h-72 bg-azure rounded-full blur-3xl" />
        </div>

        <div className="relative container-custom section-padding">
          <div className="max-w-4xl">
            <div className="badge mb-6 bg-azure/20 text-azure">
              <CheckCircle2 size={14} />A Division of TR Software Development
              Consulting (Pty) Ltd
            </div>
            <h1 className="text-white mb-6">
              We engineer and integrate enterprise applications.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              Application Development + Systems Integration + Cloud Deployment.
              Built on the Microsoft ecosystem with modern React and Angular
              frontends. Delivered in weeks, not months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech bar */}
      <section className="bg-white border-b border-slate-200">
        <div className="container-custom py-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-gray">
            <span className="font-semibold text-navy">Core stack:</span>
            {[
              ".NET",
              "ASP.NET Core",
              "React",
              "Angular",
              "TypeScript",
              "SQL Server",
              "Azure",
              "Terraform",
              "Docker",
            ].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2 py-1 bg-slate-50 rounded border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Identity */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4">
              We build applications. We connect systems. We deploy solutions.
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              TR Application Development is a specialised application
              engineering division focused on designing, developing,
              integrating, and deploying modern business applications for
              government, enterprises, and growing organisations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Code2,
                title: "Development",
                desc: ".NET, React, Angular, TypeScript. Applications built to your business requirements.",
              },
              {
                icon: Plug,
                title: "Integration",
                desc: "APIs, REST, messaging, Azure Integration Services. Connecting systems that were never meant to talk.",
              },
              {
                icon: Cloud,
                title: "Deployment",
                desc: "Azure, Docker, Terraform, CI/CD. Applications delivered into production environments.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-50 p-8 rounded-xl border border-slate-200"
              >
                <div className="w-12 h-12 rounded-lg bg-tech-blue/10 flex items-center justify-center text-tech-blue mb-4">
                  <item.icon size={22} />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4">
              Enterprise application engineering services
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              Ten core service areas spanning the full application lifecycle —
              from requirements and architecture through development,
              integration, and cloud deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card">
                <div className="card-icon">
                  <service.icon size={22} />
                </div>
                <h4 className="mb-2">{service.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-tech-blue font-semibold hover:gap-3 transition-all"
            >
              View all ten services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4">Microsoft-focused engineering ecosystem</h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              We develop deep capability around the Microsoft ecosystem because
              it provides a coherent enterprise application platform. We also
              integrate with heterogeneous client environments including Java,
              Oracle, PostgreSQL, and legacy systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <h4 className="mb-4 text-sm uppercase tracking-wider text-slate-gray">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Microsoft */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="text-white mb-4">
              Why Microsoft is our primary ecosystem
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              The Microsoft platform provides a coherent path from application
              code to database, cloud infrastructure, and automated deployment.
              This means we can deliver an application across its full lifecycle
              without stitching together unrelated technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { label: "Application", sub: ".NET / ASP.NET Core" },
              { label: "Data", sub: "SQL Server / Azure SQL" },
              { label: "Cloud", sub: "Microsoft Azure" },
              { label: "CI/CD", sub: "Azure DevOps" },
              { label: "Infrastructure", sub: "Terraform / Docker" },
            ].map((layer, index) => (
              <div key={layer.label} className="relative">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                  <div className="text-tech-blue font-semibold text-sm mb-1">
                    {layer.label}
                  </div>
                  <div className="text-slate-400 text-xs font-mono">
                    {layer.sub}
                  </div>
                </div>
                {index < 4 && (
                  <ArrowRight
                    className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-slate-600"
                    size={16}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-12">How we deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item) => (
              <div key={item.num}>
                <div className="text-5xl font-bold text-tech-blue/20 mb-2 font-mono">
                  {item.num}
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-tech-blue rounded-full blur-3xl opacity-10 -translate-x-1/2" />

        <div className="relative container-custom text-center">
          <h2 className="text-white mb-4">
            Have an application to build, integrate, or modernise?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We start with a discovery engagement. Requirements, architecture,
            integration analysis, and a delivery roadmap — before any code is
            written.
          </p>
          <Link to="/contact" className="btn-primary">
            Start with a Discovery
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
