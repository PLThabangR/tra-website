import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export default function Technology() {
  const stack = [
    {
      layer: "Backend",
      items: [
        { name: "C#", desc: "Primary language for application development" },
        {
          name: ".NET / ASP.NET Core",
          desc: "Application framework and web APIs",
        },
        { name: "Entity Framework Core", desc: "ORM and data access" },
        { name: "REST APIs", desc: "Service architecture" },
        { name: "Microservices", desc: "Where justified by complexity" },
      ],
    },
    {
      layer: "Frontend",
      items: [
        { name: "React", desc: "Modern component-based UI" },
        { name: "Angular", desc: "Enterprise SPA framework" },
        { name: "TypeScript", desc: "Type-safe JavaScript" },
        { name: "Tailwind CSS", desc: "Utility-first styling" },
        { name: "HTML5 / CSS", desc: "Semantic markup and styling" },
      ],
    },
    {
      layer: "Database",
      items: [
        { name: "SQL Server", desc: "Enterprise relational database" },
        { name: "Azure SQL", desc: "Managed cloud database" },
        { name: "PostgreSQL", desc: "Open-source relational database" },
        { name: "Relational Design", desc: "Schema and data modelling" },
        { name: "EF Core", desc: "Code-first data access" },
      ],
    },
    {
      layer: "Cloud",
      items: [
        { name: "Azure App Service", desc: "Application hosting" },
        { name: "Azure SQL", desc: "Managed database" },
        { name: "Azure Functions", desc: "Serverless compute" },
        { name: "Azure Storage", desc: "Blob, file, and queue storage" },
        { name: "Azure API Management", desc: "API gateway" },
        { name: "Azure Service Bus", desc: "Message-based integration" },
      ],
    },
    {
      layer: "DevOps",
      items: [
        { name: "Azure DevOps", desc: "Pipelines and repositories" },
        { name: "GitHub Actions", desc: "CI/CD workflows" },
        { name: "Docker", desc: "Containerisation" },
        { name: "Terraform", desc: "Infrastructure as Code" },
        { name: "CI/CD", desc: "Automated build and deployment" },
      ],
    },
    {
      layer: "Integration",
      items: [
        { name: "REST APIs", desc: "System-to-system communication" },
        { name: "Web APIs", desc: "ASP.NET Core endpoints" },
        { name: "API Gateways", desc: "Centralised API management" },
        { name: "Message-based", desc: "Asynchronous integration" },
        { name: "Azure Integration Services", desc: "Logic Apps, Service Bus" },
        { name: "RabbitMQ", desc: "Open-source message broker" },
      ],
    },
  ];

  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge-azure mb-6 bg-azure/20 text-azure">
            Technology
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            Microsoft-focused engineering ecosystem.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Deep capability around the Microsoft platform, with modern React and
            Angular frontend engineering, and the ability to integrate with
            heterogeneous client environments.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-16">
            {stack.map((group) => (
              <div key={group.layer}>
                <h2 className="mb-8">{group.layer}</h2>
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

      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Why Microsoft is our primary ecosystem</h2>
              <p className="text-slate-gray mb-6 leading-relaxed">
                The Microsoft platform provides a coherent enterprise
                application platform spanning application code, database, cloud
                infrastructure, and automated deployment.
              </p>
              <ul className="space-y-3">
                {[
                  "Coherent path from .NET application to SQL Server to Azure to Azure DevOps",
                  "Terraform and Docker extend the platform for infrastructure automation",
                  "Enterprise-grade tooling used by most South African enterprises",
                  "Deep integration with existing Microsoft environments (M365, Dynamics, Power Platform)",
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
              <h2 className="mb-6">Heterogeneous client environments</h2>
              <p className="text-slate-gray mb-6 leading-relaxed">
                We do not reject technologies outside the Microsoft ecosystem.
                Enterprise clients often run combinations of platforms, and
                integration across them is a core capability.
              </p>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h4 className="mb-4 text-sm uppercase tracking-wider text-slate-gray">
                  We integrate with
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java",
                    "Oracle",
                    "PostgreSQL",
                    "SAP",
                    "Salesforce",
                    "Legacy .NET",
                    "Node.js",
                    "Custom APIs",
                    "Government systems",
                    "Payment gateways",
                  ].map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Have a technology question?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
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
