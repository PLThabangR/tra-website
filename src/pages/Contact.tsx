import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project_type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call / submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // TODO: Add your actual form submission logic here (e.g., fetch to backend, Formspree, EmailJS)
    console.log("Form submitted:", formData);

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="section-padding light-section">
        <div className="container-custom max-w-2xl text-center">
          <CheckCircle2 className="text-gold mx-auto mb-6" size={48} />
          <h1 className="mb-4 text-black">Thank you.</h1>
          <p className="text-text-muted">
            We have received your message and will respond within one business
            day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-bg-main text-text-primary border-b border-border-subtle">
        <div className="container-custom py-16">
          <div className="max-w-3xl">
            <h1 className="text-text-primary mb-4">Discuss Your Project</h1>
            <p className="text-lg text-text-secondary">
              Tell us what you are trying to build. We will tell you if we can
              help, and how we would approach it.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding light-section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <h2 className="text-2xl mb-6 text-black">Project details</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Your name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-black mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="project_type"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Type of project *
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    value={formData.project_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="custom-app">Custom application</option>
                    <option value="integration">
                      API / System integration
                    </option>
                    <option value="workflow">Workflow automation</option>
                    <option value="cloud">Cloud deployment</option>
                    <option value="modernisation">
                      Application modernisation
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-black mb-2"
                  >
                    Project description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What problem are you trying to solve? What systems are involved?"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border-light focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {!isSubmitting && <Send size={18} />}
                </button>
                <p className="text-xs text-text-muted">
                  We respond within one business day
                </p>
              </form>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-50 p-8 rounded-lg border border-border-light sticky top-24">
                <h3 className="text-xl mb-6 text-black">Direct contact</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-3">
                    <Mail className="text-gold shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-black">Email</div>
                      <a
                        href="mailto:rakgoropothabang@gmail.com"
                        className="text-text-muted hover:text-gold transition-colors text-sm"
                      >
                        rakgoropothabang@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="text-gold shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-black">Phone</div>
                      <a
                        href="tel:+27696350962"
                        className="text-text-muted hover:text-gold transition-colors text-sm"
                      >
                        (+27) 69 635 0962
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="text-gold shrink-0 mt-1" size={20} />
                    <div>
                      <div className="font-medium text-black">Location</div>
                      <div className="text-text-muted text-sm">
                        Midrand, Gauteng
                        <br />
                        South Africa
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
