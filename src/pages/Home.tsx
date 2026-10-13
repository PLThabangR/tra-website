import { Link } from "react-router-dom";
import {
  Users,
  Workflow,
  ShoppingCart,
  Database,
  Plug,
  RefreshCw,
  Cloud,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Code2,
  GitBranch,
  Server,
} from "lucide-react";

export default function Home() {
  const outcomes = [
    {
      icon: Users,
      title: "Staff Portals",
      desc: "One place for tasks, documents, leave and approvals. No more hunting through email.",
    },
    {
      icon: Workflow,
      title: "Workflow Digitisation",
      desc: "Replace paper forms and email approvals with digital workflows and audit trails.",
    },
    {
      icon: ShoppingCart,
      title: "Customer Portals",
      desc: "Give customers self-service access to orders, invoices and status.",
    },
    {
      icon: Database,
      title: "Custom Business Applications",
      desc: "Replace spreadsheets with proper systems. Roles, reporting, dashboards.",
    },
    {
      icon: Plug,
      title: "API Integration",
      desc: "Make your CRM, accounting and HR systems talk to each other.",
    },
    {
      icon: RefreshCw,
      title: "Application Modernisation",
      desc: "Modernise slow, hard-to-change systems without replacing them.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      desc: "Deploy to Microsoft Azure with reliability, scalability and security.",
    },
    {
      icon: BarChart3,
      title: "Reporting & Dashboards",
      desc: "See what is happening in your business in real time.",
    },
  ];

  const services = [
    {
      icon: Code2,
      title: "Custom Application Development",
      description:
        "Staff portals, workflow systems, customer portals and line-of-business applications.",
    },
    {
      icon: Plug,
      title: "Systems Integration",
      description:
        "Connect CRM, ERP, HR, payroll and legacy systems through secure APIs.",
    },
    {
      icon: RefreshCw,
      title: "Application Modernisation",
      description:
        "Move legacy .NET applications to modern architectures with API enablement.",
    },
    {
      icon: Cloud,
      title: "Cloud Deployment",
      description:
        "Deploy to Microsoft Azure with App Service, Azure SQL, Functions and API Management.",
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD",
      description:
        "Automated builds, testing, and deployment pipelines using Azure DevOps and Docker.",
    },
    {
      icon: Server,
      title: "Infrastructure as Code",
      description:
        "Repeatable, version-controlled Azure infrastructure using Terraform.",
    },
  ];

  const process = [
    {
      num: "01",
      title: "Discovery",
      desc: "Requirements analysis, technical assessment, architecture.",
    },
    {
      num: "02",
      title: "Architecture",
      desc: "Application, API, database, cloud, and integration design.",
    },
    {
      num: "03",
      title: "Development",
      desc: "Iterative development using .NET, React or Angular and SQL.",
    },
    {
      num: "04",
      title: "Integration",
      desc: "Connect to existing systems, APIs and data sources.",
    },
    {
      num: "05",
      title: "Testing",
      desc: "Automated and manual testing across the application.",
    },
    {
      num: "06",
      title: "CI/CD",
      desc: "Automated build, test and deployment pipelines.",
    },
    {
      num: "07",
      title: "Deployment",
      desc: "Azure deployment using Terraform and Docker.",
    },
    {
      num: "08",
      title: "Handover",
      desc: "Documentation, training and full code ownership.",
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
            <div className="badge-azure mb-6 bg-azure/20 text-azure">
              <CheckCircle2 size={14} />A Division of TR Software Development
              Consulting (Pty) Ltd
            </div>
            <h1 className="text-white mb-6">
              We design, build and integrate practical business applications.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl">
              Application development, systems integration, and cloud
              deployment. Built to enterprise grade standards. Priced and
              delivered for mid-market organisations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary">
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link to="/work" className="btn-ghost">
                See Our Work
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

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4">
              We build the applications that run your business.
            </h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              Staff portals, customer portals, workflow systems, dashboards,
              APIs and the integrations that connect them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((item) => (
              <div key={item.title} className="card">
                <div className="card-icon">
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

      {/* What this means */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <h2 className="mb-8">What that means for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Your staff stop wasting time looking for documents and approvals",
              "Your customers stop phoning to check status",
              "Your systems stop living in Excel",
              "Your CRM and accounting finally talk to each other",
              "Your old system gets modernised, not replaced",
              "Your dashboard shows you what is actually happening",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 items-start bg-white p-5 rounded-xl border border-slate-200"
              >
                <CheckCircle2
                  className="text-african-green flex-shrink-0 mt-0.5"
                  size={18}
                />
                <span className="text-slate-gray text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-16">
            <h2 className="mb-4">Core services</h2>
            <p className="text-lg text-slate-gray leading-relaxed">
              Full application delivery  from requirements and architecture
              through development, integration and cloud deployment.
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
              View all services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-slate-50">
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
            Have an application to build, integrate or modernise?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            We start with a discovery engagement. Requirements, architecture,
            integration analysis and a delivery roadmap  before any code is
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
