import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-deep-navy text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-tech-blue to-azure rounded-lg flex items-center justify-center font-bold text-white">
                TR
              </div>
              <div>
                <div className="font-semibold text-sm">
                  TR Application Development
                </div>
                <div className="text-xs text-slate-400">
                  A Division of TR Software Development Consulting (Pty) Ltd
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-sm max-w-md mb-6">
              We engineer and integrate enterprise applications and deploy them
              into modern cloud environments. Application Development + Systems
              Integration + Cloud Deployment.
            </p>
            <p className="text-tech-blue font-semibold text-sm">
              We build applications. We connect systems. We deploy solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm font-semibold uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  Custom Application Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  Systems Integration
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  Application Modernisation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  Cloud Deployment
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-slate-400 hover:text-tech-blue transition-colors"
                >
                  DevOps & CI/CD
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-tech-blue shrink-0" />
                Midrand, Gauteng
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-tech-blue shrink-0" />
                <a
                  href="mailto:rakgoropothabang@gmail.com"
                  className="hover:text-tech-blue transition-colors"
                >
                  rakgoropothabang@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-tech-blue shrink-0" />
                <a
                  href="tel:+27696350962"
                  className="hover:text-tech-blue transition-colors"
                >
                  (+27) 69 635 0962
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>
            © {new Date().getFullYear()} TR Software Development Consulting
            (Pty) Ltd. All rights reserved.
          </p>
          <p className="text-xs">
            TR Application Development Consulting — Enterprise Application
            Engineering
          </p>
        </div>
      </div>
    </footer>
  );
}


