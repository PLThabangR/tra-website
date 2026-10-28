import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-bg-main border-t border-border-subtle">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gold flex items-center justify-center font-bold text-btn-text text-sm rounded-sm">
                TR
              </div>
              <div>
                <div className="font-sans font-semibold text-sm text-text-primary tracking-wide">
                  TR APPLICATION DEVELOPMENT
                </div>
                <div className="font-sans text-xs text-text-secondary">
                  A division of TR Software Development Consulting (Pty) Ltd
                </div>
              </div>
            </div>
            <p className="text-text-secondary text-sm max-w-sm mb-6 leading-relaxed">
              We design, build and integrate business applications that help
              teams work more effectively from internal tools and workflow
              automation to API integrations and cloud deployed solutions.
            </p>
            <a
              href="https://tr-software.co.za"
              className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-hover transition-colors"
            >
              Looking for application support instead? Visit the parent company{" "}
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div>
            <h4 className="text-text-primary mb-4 text-sm font-semibold">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-gold transition-colors"
                >
                  Custom Applications
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-gold transition-colors"
                >
                  API Integration
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-gold transition-colors"
                >
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-gold transition-colors"
                >
                  Cloud Deployment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary mb-4 text-sm font-semibold">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-gold shrink-0 mt-0.5" />
                <a
                  href="mailto:rakgoropothabang@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  rakgoropothabang@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-gold shrink-0 mt-0.5" />
                <a
                  href="tel:+27696350962"
                  className="hover:text-gold transition-colors"
                >
                  (+27) 70 762 0683
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>Midrand, Gauteng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border-subtle mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
          <p>
            © {new Date().getFullYear()} TR Software Development Consulting
            (Pty) Ltd. All rights reserved.
          </p>
          <p>
             TR Software Development
            Consulting (Pty) Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
