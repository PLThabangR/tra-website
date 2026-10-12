import { Link } from "react-router-dom";
import {
  Server,
  Layout,
  Database,
  Cloud,
  GitBranch,
  Plug,
  ArrowRight,
  Check,
  Layers,
} from "lucide-react";

export default function Technology() {
  const stack = [
    {
      icon: Server,
      layer: "Backend",
      summary: "Application logic, APIs, and business rules built on .NET.",
      items: [
        { name: "C#", desc: "Primary language for application development" },
        { name: ".NET / .NET 8", desc: "Modern runtime and framework" },
        { name: "ASP.NET Core", desc: "Web APIs and server-side applications" },
        { name: "Entity Framework Core", desc: "ORM and data access layer" },
        { name: "REST APIs", desc: "Service architecture and endpoints" },
        {
          name: "Clean Architecture",
          desc: "Separation of Domain, Application, Infrastructure, API",
        },
      ],
    },
    {
      icon: Layout,
      layer: "Frontend",
      summary:
        "Modern, responsive user interfaces built for enterprise usability.",
      items: [
        {
          name: "React",
          desc: "Component-based frontend for modern applications",
        },
        {
          name: "Angular",
          desc: "Enterprise SPA framework for large-scale apps",
        },
        {
          name: "TypeScript",
          desc: "Type-safe JavaScript across the frontend",
        },
        { name: "Tailwind CSS", desc: "Utility-first styling system" },
        {
          name: "Redux Toolkit / NgRx",
          desc: "State management for complex UIs",
        },
        { name: "HTML5 / CSS3", desc: "Semantic markup and modern styling" },
      ],
    },
    {
      icon: Database,
      layer: "Database",
      summary: "Reliable relational data platforms with well-designed schemas.",
      items: [
        { name: "SQL Server", desc: "Enterprise relational database" },
        { name: "Azure SQL", desc: "Managed cloud database with built-in HA" },
        { name: "PostgreSQL", desc: "Open-source relational database" },
        {
          name: "Entity Framework Core",
          desc: "Code-first data access and migrations",
        },
        {
          name: "Relational Design",
          desc: "Normalised schema and data modelling",
        },
        { name: "Query Optimisation", desc: "Indexing, performance tuning" },
      ],
    },
    {
      icon: Cloud,
      layer: "Cloud",
      summary:
        "Microsoft Azure as our primary cloud platform for enterprise applications.",
      items: [
        { name: "Azure App Service", desc: "Managed application hosting" },
        { name: "Azure SQL", desc: "Managed relational database" },
        {
          name: "Azure Functions",
          desc: "Serverless compute for integration and background work",
        },
        { name: "Azure Storage", desc: "Blob, file, and queue storage" },
        {
          name: "Azure API Management",
          desc: "API gateway, throttling, and security",
        },
        {
          name: "Azure Service Bus",
          desc: "Reliable message-based integration",
        },
      ],
    },
    {
      icon: GitBranch,
      layer: "DevOps",
      summary:
        "Automated pipelines and repeatable infrastructure for every project.",
      items: [
        { name: "Azure DevOps", desc: "Repositories, pipelines, boards" },
        {
          name: "GitHub / GitHub Actions",
          desc: "Source control and CI/CD workflows",
        },
        {
          name: "Docker",
          desc: "Containerisation for consistent environments",
        },
        {
          name: "Terraform",
          desc: "Infrastructure as Code for Azure resources",
        },
        {
          name: "CI/CD Pipelines",
          desc: "Automated build, test, and deployment",
        },
        {
          name: "Environment Management",
          desc: "Dev, staging, and production parity",
        },
      ],
    },
    {
      icon: Plug,
      layer: "Integration",
      summary:
        "Connecting your systems — even the ones that were never meant to talk.",
      items: [
        { name: "REST APIs", desc: "System-to-system communication" },
        {
          name: "Web APIs (ASP.NET Core)",
          desc: "Service endpoints with authentication",
        },
        { name: "Azure API Management", desc: "Centralised API gateway" },
        {
          name: "Azure Service Bus",
          desc: "Asynchronous message-based integration",
        },
        {
          name: "RabbitMQ",
          desc: "Open-source message broker where appropriate",
        },
        {
          name: "Webhooks",
          desc: "Event-driven integration with third parties",
        },
      ],
    },
  ];

  const architecture = [
    {
      step: "Frontend",
      detail: "React / Angular + TypeScript",
      sub: "User-facing application",
    },
    {
      step: "API Layer",
      detail: "ASP.NET Core REST APIs",
      sub: "Business logic and endpoints",
    },
    {
      step: "Domain",
      detail: "Clean Architecture + CQRS",
      sub: "Business rules and use cases",
    },
    {
      step: "Data",
      detail: "SQL Server / Azure SQL + EF Core",
      sub: "Persistent storage and access",
    },
    {
      step: "Cloud",
      detail: "Azure App Service + Azure SQL",
      sub: "Hosting and managed services",
    },
    {
      step: "Delivery",
      detail: "Azure DevOps + Terraform + Docker",
      sub: "Automated deployment and IaC",
    },
  ];

  const environments = [
    { name: "Java", desc: "Enterprise backend systems" },
    { name: "Oracle", desc: "Legacy databases and ERP" },
    { name: "PostgreSQL", desc: "Open-source relational databases" },
    { name: "SAP", desc: "Enterprise resource planning" },
    { name: "Salesforce", desc: "Customer relationship management" },
    { name: "Dynamics 365", desc: "Microsoft business applications" },
    { name: "Legacy .NET", desc: ".NET Framework and older applications" },
    { name: "Node.js", desc: "JavaScript-based backends" },
    { name: "Custom APIs", desc: "Client-built or third-party APIs" },
    { name: "Government systems", desc: "Public-sector platforms and portals" },
    { name: "Payment gateways", desc: "PayFast, Stripe, and local providers" },
    { name: "Third-party SaaS", desc: "Any service with an API" },
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
            Technology
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            Microsoft focused engineering. Built for real client environments.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Our primary ecosystem is Microsoft  .NET, Azure, SQL Server, and
            Azure DevOps with modern React and Angular frontends. We also
            integrate with heterogeneous environments including Java, Oracle,
            SAP, Salesforce, and legacy systems.
          </p>
        </div>
      </section>

      {/* Stack by layer */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4">Our technology stack</h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              Every layer is chosen to work well with the others. From
              application code through deployment, we deliver on a coherent
              platform.
            </p>
          </div>

          <div className="space-y-12">
            {stack.map((group) => (
              <div key={group.layer}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-light-blue flex items-center justify-center text-tech-blue flex-shrink-0">
                    <group.icon size={22} />
                  </div>
                  <div>
                    <h3 className="mb-1">{group.layer}</h3>
                    <p className="text-slate-gray text-sm">{group.summary}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-white p-5 rounded-xl border border-slate-200 hover:border-tech-blue/30 hover:shadow-sm transition-all"
                    >
                      <div className="font-mono text-sm font-semibold text-navy mb-1">
                        {item.name}
                      </div>
                      <div className="text-slate-gray text-xs leading-relaxed">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reference architecture */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="mb-4">Reference architecture</h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              Every application we build follows a coherent architecture from
              frontend to deployment. This is what a typical project looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {architecture.map((layer, index) => (
              <div
                key={layer.step}
                className="relative bg-white p-6 rounded-xl border border-slate-200"
              >
                <div className="text-xs font-mono text-tech-blue mb-2">
                  Layer {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="mb-2">{layer.step}</h4>
                <div className="font-mono text-sm text-navy mb-1">
                  {layer.detail}
                </div>
                <div className="text-slate-gray text-xs">{layer.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Microsoft */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Why Microsoft is our primary ecosystem</h2>
              <p className="text-slate-gray mb-6 leading-relaxed">
                The Microsoft platform provides a coherent enterprise
                application platform spanning application code, database, cloud
                infrastructure, and automated deployment. It is the stack most
                South African enterprises already use.
              </p>
              <ul className="space-y-3">
                {[
                  "Coherent path from .NET application to SQL Server to Azure to Azure DevOps",
                  "Terraform and Docker extend the platform for infrastructure automation",
                  "Enterprise-grade tooling used by most South African enterprises",
                  "Deep integration with existing Microsoft environments (M365, Dynamics 365, Power Platform)",
                  "Azure South Africa regions for POPIA-compliant data residency",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check
                      className="text-african-green flex-shrink-0 mt-1"
                      size={18}
                    />
                    <span className="text-slate-gray text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-6">
                We integrate with heterogeneous environments
              </h2>
              <p className="text-slate-gray mb-6 leading-relaxed">
                We do not reject technologies outside the Microsoft ecosystem.
                Enterprise clients often run combinations of platforms.
                Integration across them is a core capability.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {environments.map((env) => (
                  <div
                    key={env.name}
                    className="bg-slate-50 p-4 rounded-lg border border-slate-200"
                  >
                    <div className="font-mono text-sm font-semibold text-navy mb-1">
                      {env.name}
                    </div>
                    <div className="text-slate-gray text-xs">{env.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <h2 className="text-white mb-12">Engineering principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Clean Architecture",
                desc: "Domain, Application, Infrastructure, and API layers are separated. Business logic does not depend on infrastructure.",
              },
              {
                title: "Automated testing",
                desc: "Unit tests for business logic. Integration tests for critical paths. Automated where it matters.",
              },
              {
                title: "CI/CD from day one",
                desc: "Every project has automated build, test, and deployment pipelines. No manual deployment.",
              },
              {
                title: "Infrastructure as Code",
                desc: "Terraform manages all Azure resources. Environments are reproducible and version-controlled.",
              },
              {
                title: "Full code ownership",
                desc: "The client receives the code, the documentation, and the infrastructure. No vendor lock-in.",
              },
              {
                title: "Documentation",
                desc: "Architecture docs, API docs, and setup guides. The next person who works on the system understands it.",
              },
            ].map((principle) => (
              <div
                key={principle.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="flex gap-3 mb-2">
                  <Layers
                    className="text-tech-blue flex-shrink-0 mt-1"
                    size={18}
                  />
                  <h4 className="text-white">{principle.title}</h4>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="mb-4">Have a technology question?</h2>
          <p className="text-xl text-slate-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            We assess your existing environment and recommend the right
            architecture before any implementation commitment.
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
