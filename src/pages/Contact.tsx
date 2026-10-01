
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Web3Forms access key
    formData.append("access_key", "0a33dfe3-3ec3-43bb-a264-e64278889345");

    // Email subject
    formData.append(
      "subject",
      "New Website Enquiry - TR Software Development Consulting"
    );

    // Convert FormData to JSON
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(
          result.message ||
            "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        "Unable to send your message. Please try again or contact us directly by email."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success screen
  if (submitted) {
    return (
      <section className="section-padding">
        <div className="container-custom max-w-2xl text-center">
          <div className="w-16 h-16 bg-african-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2
              className="text-african-green"
              size={32}
            />
          </div>

          <h1 className="mb-4">Thank you.</h1>

          <p className="text-lg text-slate-gray mb-8 leading-relaxed">
            We have received your message. We will respond within one
            business day.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-deep-navy to-navy" />

        <div className="relative container-custom">
          <div className="badge-azure mb-6 bg-azure/20 text-azure">
            Contact
          </div>

          <h1 className="text-white mb-4 max-w-3xl">
            Let's talk about your application.
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
            Tell us what you need to build, integrate, modernise, or
            deploy. We will respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Name + Organisation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Your name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Organisation
                    </label>

                    <input
                      id="company"
                      type="text"
                      name="company"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Email *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-navy mb-2"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    What do you need? *
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="custom-app">
                      Custom application development
                    </option>
                    <option value="web-app">
                      Enterprise web application
                    </option>
                    <option value="api">
                      API development
                    </option>
                    <option value="integration">
                      Systems integration
                    </option>
                    <option value="modernisation">
                      Application modernisation
                    </option>
                    <option value="cloud">
                      Cloud deployment
                    </option>
                    <option value="devops">
                      DevOps & CI/CD
                    </option>
                    <option value="discovery">
                      Discovery engagement
                    </option>
                    <option value="partnership">
                      Partnership / subcontracting
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Indicative budget range
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all bg-white"
                  >
                    <option value="">
                      Prefer not to say
                    </option>

                    <option value="discovery">
                      Discovery only (R15,000 – R75,000)
                    </option>

                    <option value="under-150">
                      Under R150,000
                    </option>

                    <option value="150-300">
                      R150,000 – R300,000
                    </option>

                    <option value="300-500">
                      R300,000 – R500,000
                    </option>

                    <option value="above-500">
                      Above R500,000
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy mb-2"
                  >
                    Project details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What are you trying to build, integrate, or modernise? What systems are involved?"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-tech-blue focus:ring-2 focus:ring-tech-blue/20 outline-none transition-all resize-none"
                  />
                </div>

                {/* Honeypot spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* Error */}
                {error && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}

                  {!isSubmitting && <Send size={18} />}
                </button>

                <p className="text-sm text-slate-gray">
                  We respond within one business day. Your information
                  is kept confidential.
                </p>
              </form>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 p-8 rounded-xl space-y-6">

                <div>
                  <h4 className="mb-4">
                    Contact details
                  </h4>

                  <ul className="space-y-4 text-sm">

                    <li className="flex gap-3 items-start">
                      <Mail
                        className="text-tech-blue shrink-0 mt-0.5"
                        size={18}
                      />

                      <a
                        href="mailto:rakgoropothabang@gmail.com"
                        className="text-slate-gray hover:text-tech-blue"
                      >
                        rakgoropothabang@gmail.com
                      </a>
                    </li>

                    <li className="flex gap-3 items-start">
                      <Phone
                        className="text-tech-blue shrink-0 mt-0.5"
                        size={18}
                      />

                      <a
                        href="tel:+27696350962"
                        className="text-slate-gray hover:text-tech-blue"
                      >
                        (+27) 69 635 0962
                      </a>
                    </li>

                    <li className="flex gap-3 items-start">
                      <MapPin
                        className="text-tech-blue shrink-0 mt-0.5"
                        size={18}
                      />

                      <span className="text-slate-gray">
                        Midrand, Gauteng
                      </span>
                    </li>

                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h4 className="mb-3 text-sm">
                    Response time
                  </h4>

                  <p className="text-slate-gray text-sm">
                    We respond to all enquiries within one business day.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <h4 className="mb-3 text-sm">
                    Partnership enquiries
                  </h4>

                  <p className="text-slate-gray text-sm mb-4">
                    If you are an ICT company or system integrator
                    looking for additional .NET or Azure engineering
                    capacity, use the form and select "Partnership /
                    subcontracting."
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
