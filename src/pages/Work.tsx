import { Link } from "react-router-dom";
import { ArrowRight, Car, Users, ShoppingCart, Workflow } from "lucide-react";

export default function Work() {
  const projects = [
    {
      icon: Car,
      title: "Motor Insurance App",
      status: "Completed  Flagship Reference",
      description:
        "A full-stack motor insurance management application built end-to-end on .NET, React, TypeScript, SQL Server and Azure.",
      outcomes: [
        "Policy and quote management",
        "Claims workflow",
        "Customer self-service portal",
        "Reporting dashboard",
        "Role-based access control",
      ],
      stack: [
        "ASP.NET Core",
        "React",
        "TypeScript",
        "SQL Server",
        "Azure",
        "Docker",
        "Terraform",
      ],
      featured: true,
    },
    {
      icon: Users,
      title: "Staff Portal & Workflow",
      status: "In Development",
      description:
        "A staff portal with workflow digitisation, role-based access and audit trails for a mid-market professional services firm.",
      outcomes: [
        "Digital leave requests and approvals",
        "Document repository with permissions",
        "Task dashboard",
        "Audit trail for all approvals",
      ],
      stack: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
      featured: false,
    },
    {
      icon: ShoppingCart,
      title: "Order Status Self-Service Portal",
      status: "Planned",
      description:
        "A customer-facing portal for real-time order status, invoice history and document access.",
      outcomes: [
        "Real-time order tracking",
        "Invoice and document download",
        "API integration with ERP",
        "Automated notifications",
      ],
      stack: ["ASP.NET Core", "React", "Azure SQL", "Azure Functions"],
      featured: false,
    },
    {
      icon: Workflow,
      title: "Approval Workflow System",
      status: "Planned",
      description:
        "A workflow digitisation platform for replacing paper-based and email-based approvals with auditable digital processes.",
      outcomes: [
        "Configurable approval flows",
        "Digital forms with validation",
        "Automated notifications",
        "Compliance-ready audit trail",
      ],
      stack: ["ASP.NET Core", "Angular", "SQL Server", "Azure"],
      featured: false,
    },
  ];

  return (
    <>
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />
        <div className="relative container-custom">
          <div className="badge-azure mb-6 bg-azure/20 text-azure">
            Our Work
          </div>
          <h1 className="text-white mb-4 max-w-3xl">
            Applications we have built and systems we have connected.
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Every project is delivered with full code ownership, milestone
            payments and a written scope. Here is what we have built.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`p-8 rounded-xl border transition-all ${
                  project.featured
                    ? "bg-light-blue border-tech-blue/30"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          project.featured
                            ? "bg-tech-blue text-white"
                            : "bg-light-blue text-tech-blue"
                        }`}
                      >
                        <project.icon size={22} />
                      </div>
                      <div>
                        <h3 className="mb-1">{project.title}</h3>
                        <div
                          className={`text-xs font-semibold uppercase tracking-wider ${
                            project.featured
                              ? "text-tech-blue"
                              : "text-slate-gray"
                          }`}
                        >
                          {project.status}
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-gray mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-slate-gray mb-3">
                      Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {project.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="flex gap-2 text-sm text-slate-gray"
                        >
                          <span className="text-african-green">✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">
            Want to see a detailed case study?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We can walk you through the Motor Insurance App architecture,
            decisions and outcomes. No sales pitch just the technical story.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Walkthrough
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
