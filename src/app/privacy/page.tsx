import type { Metadata } from "next";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy — Departure Desk",
  description:
    "How Departure Desk collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <ScrollAnimationWrapper>
      {/* ===== HEADER ===== */}
      <section className="bg-navy-900 pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <p className="animate-fade-up section-label text-gold-400 mb-4">Legal</p>
          <h1 className="animate-fade-up stagger-1 font-display text-white text-4xl sm:text-5xl font-bold leading-tight">
            Privacy Policy
          </h1>
          <p className="animate-fade-up stagger-2 text-white/50 text-sm mt-6">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-12">
          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">1. Who We Are</h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Departure Desk is a Dubai-based life-closure service that helps expats who have left
              the UAE manage property handovers, vehicle sales, deposit recovery, visa cancellations,
              and related administrative tasks remotely. We operate in partnership with Euro Fast
              Track under a fully licensed UAE business consultancy.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">
              2. Information We Collect
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-4">
              When you submit our assessment form, we collect:
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Your full name</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Email address</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Phone number</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Your current location (city and country)</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Details of what you left behind in Dubai (e.g., apartment, vehicle, trade license)</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Your urgency level</span>
              </li>
            </ul>
            <p className="text-slate-400 text-base leading-relaxed mt-4">
              We do not collect payment information through this website. Payment details are
              collected separately through secure, encrypted channels when you engage our services.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-4">
              We use the information you provide to:
            </p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Assess your situation and determine which services you need</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Provide you with an itemized quote</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Contact you to discuss your case</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Deliver the services you engage us for</span>
              </li>
            </ul>
            <p className="text-slate-400 text-base leading-relaxed mt-4">
              We will never sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">
              4. Data Storage and Security
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Form submissions are processed through Google Forms and stored in Google Sheets,
              protected by Google&apos;s enterprise-grade security infrastructure. Access to your data
              is restricted to authorized members of the Departure Desk team. We retain your
              information only for as long as necessary to provide our services and comply with
              legal obligations.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">
              5. Third-Party Service Providers
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              In the course of delivering our services, we may share relevant information with
              licensed PRO service providers, legal consultants, real estate agents, vehicle dealers,
              or logistics partners — strictly on a need-to-know basis and only to execute the
              services you have engaged us for. All service partners are bound by confidentiality
              obligations.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">
              6. Cookies and Analytics
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              This website does not use tracking cookies or third-party analytics tools. We do not
              track your browsing behavior across other websites.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-slate-400 text-base leading-relaxed mb-4">You have the right to:</p>
            <ul className="space-y-2">
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Request access to the personal data we hold about you</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Request correction or deletion of your data</span>
              </li>
              <li className="text-slate-400 text-base leading-relaxed flex">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>Withdraw consent for us to contact you at any time</span>
              </li>
            </ul>
            <p className="text-slate-400 text-base leading-relaxed mt-4">
              To exercise any of these rights, email us at info@departure-desk.com.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">
              8. Changes to This Policy
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              We may update this policy from time to time. Any changes will be posted on this page
              with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </div>

          <div className="animate-fade-up">
            <h2 className="font-sans text-navy-900 text-xl font-bold mb-4">9. Contact</h2>
            <p className="text-slate-400 text-base leading-relaxed">
              If you have questions about this privacy policy or how we handle your data, contact us
              at info@departure-desk.com.
            </p>
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}
