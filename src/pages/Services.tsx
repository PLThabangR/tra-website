import { Link } from "react-router-dom";
import {
  Code2,
  Globe,
  Network,
  Plug,
  Layers,
  Cloud,
  GitBranch,
  Server,
  Database,
  Compass,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Code2,
      title: "Custom Application Development",
      description:
        "Applications designed and developed based on specific organisational requirements.",
      features: [
        "Staff portals and dashboards",
        "Workflow digitisation",
        "Customer-facing applications and portals",
        "Internal organisational systems",
        "Business applications replacing spreadsheets",
        "Reporting and data-driven applications",
        "Line-of-business applications",
      ],
    },
    {
      icon: Globe,
      title: "Enterprise Web Application Development",
      description:
        "Modern web applications using React or Angular with ASP.NET Core backend.",
      features: [
        "React + TypeScript frontends",
        "Angular + TypeScript frontends",
        "ASP.NET Core / C# backend",
        "REST / Web API architecture",
        "SQL Server or external API integration",
        "Azure deployment",
      ],
    },
    {
      icon: Network,
      title: "API Development",
      description:
        "REST APIs that connect applications and services across your enterprise.",
      features: [
        "ASP.NET Core Web APIs",
        "Authentication and authorisation",
        "OpenAPI / Swagger documentation",
        "Third-party API integration",
        "API gateways and versioning",
        "API security",
      ],
    },
    {
      icon: Plug,
      title: "Systems Integration",
      description:
        "Enable different business systems to communicate and exchange information.",
      features: [
        "REST API integration",
        "CRM, ERP, and HR system integration",
        "Payment and government-system integration",
        "Database and cloud-service integration",
        "Legacy-system integration",
        "Azure API Management and Service Bus",
      ],
    },
    {
      icon: Layers,
      title: "Application Modernisation",
      description: "Transition legacy applications to modern architectures.",
      features: [
        "Legacy application assessment",
        "API enablement",
        "Monolith modernisation",
        "Database modernisation",
        "Cloud migration and containerisation",
        "Architecture refactoring and technical-debt reduction",
      ],
    },
    {
      icon: Cloud,
      title: "Cloud Application Deployment",
      description:
        "Deploy applications to Microsoft Azure with repeatable processes.",
      features: [
        "Azure App Service deployment",
        "Azure SQL, Storage, and Functions",
        "Azure API Management",
        "Application and environment configuration",
        "Networking integration",
        "Multi-environment deployment",
      ],
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description: "Automated build, test, and deployment pipelines.",
      features: [
        "Azure DevOps implementation",
        "GitHub Actions",
        "Automated builds and testing",
        "Deployment automation",
        "Environment and release management",
        "Docker containerisation",
      ],
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description:
        "Repeatable, version-controlled Azure infrastructure using Terraform.",
      features: [
        "Resource Group provisioning",
        "App Service, Azure SQL, Storage",
        "Networking and monitoring",
        "Version-controlled infrastructure",
        "Reproducible environments",
        "Consistent deployment",
      ],
    },
    {
      icon: Database,
      title: "Database & Data-Driven Applications",
      description: "Applications built on reliable relational data platforms.",
      features: [
        "Database and data modelling",
        "Entity Framework Core implementation",
        "Query optimisation",
        "Database integration",
        "Data migration",
        "Application/database architecture",
      ],
    },
    {
      icon: Compass,
      title: "Technical Architecture",
      description:
        "Architecture services delivered as part of application engagements.",
      features: [
        "Application, API, and database architecture",
        "Cloud, integration, and deployment architecture",
        "Security and container architecture",
        "Clean Architecture and Layered Architecture",
        "Domain-Driven Design and CQRS",
        "Modular monoliths and microservices where justified",
      ],
    },
  ];

  const techStack = [
    {
      category: "Backend",
      items: ["C#", ".NET", "ASP.NET Core", "Entity Framework Core"],
    },
    {
      category: "Frontend",
      items: ["React", "Angular", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Database",
      items: ["SQL Server", "Azure SQL", "PostgreSQL"],
    },
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
      items: ["Azure DevOps", "GitHub Actions", "Docker", "Terraform", "CI/CD"],
    },
    {
      category: "Integration",
      items: ["REST APIs", "Service Bus", "RabbitMQ", "Webhooks"],
    },
  ];

  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge-azure mb-6 bg-azure/20 text-azure">
            Our Services
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            Ten core service areas across the application lifecycle.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            From requirements and architecture through development, integration,
            and cloud deployment we build the applications that run your
            business.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card group">
                <div className="card-icon">
                  <service.icon size={22} />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-slate-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-3 text-sm text-slate-gray"
                    >
                      <Check
                        size={16}
                        className="text-african-green flex-shrink-0 mt-0.5"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-4">Technologies we use</h2>
          <p className="text-lg text-slate-gray mb-12 max-w-3xl leading-relaxed">
            Our primary ecosystem is Microsoft .NET, Azure, SQL Server, and
            Azure DevOps with modern React and Angular frontends. We also
            integrate with heterogeneous client environments including Java,
            Oracle, PostgreSQL, SAP, Salesforce and legacy systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((group) => (
              <div
                key={group.category}
                className="bg-white p-6 rounded-xl border border-slate-200"
              >
                <h4 className="mb-4">{group.category}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-slate-gray text-sm font-mono"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <h2 className="mb-12">How we deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                num: "01",
                title: "Discovery",
                desc: "Requirements, architecture, integration analysis",
              },
              {
                num: "02",
                title: "Design",
                desc: "UI/UX, data model, API design",
              },
              {
                num: "03",
                title: "Build",
                desc: "Iterative development with weekly demos",
              },
              {
                num: "04",
                title: "Deploy",
                desc: "CI/CD, Azure deployment, Infrastructure as Code",
              },
              {
                num: "05",
                title: "Handover",
                desc: "Documentation, training, full code ownership",
              },
            ].map((step) => (
              <div key={step.num}>
                <div className="text-4xl font-bold text-tech-blue/20 mb-2 font-mono">
                  {step.num}
                </div>
                <h4 className="mb-2">{step.title}</h4>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Not sure which service you need?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Start with a discovery engagement. We assess your requirements,
            design the architecture, and give you a delivery roadmap before
            any code is written.
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
