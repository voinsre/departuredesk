import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export const metadata: Metadata = {
  title: "Dubai Expat Remote Closure Services & Pricing — Departure Desk",
  description:
    "Apartment handover, car sale, deposit recovery, visa cancellation, company wind-down. Full pricing. No hidden fees. AED 1,800–28,000 based on scope.",
};

const packages = [
  {
    name: "ESSENTIALS",
    price: "AED 1,800–2,800",
    bestFor:
      "You left recently. Someone's still in Dubai for physical tasks. You need the admin handled.",
    items: [
      "DEWA, du/Etisalat, internet account closures",
      "Utility deposit recovery coordination",
      "UAE bank account remote closure guidance",
      "Mail forwarding setup (30 days)",
      "Document collection from your home/office and international courier",
      "Residency visa cancellation guidance with referral to licensed PRO team",
      "60-minute remote advisory call: what you must do in the first 30 days",
    ],
    highlight: {
      label: "Typical margin on deposits recovered",
      value: "AED 2,000–10,000",
      cost: "Your cost to protect that: AED 1,800–2,800",
    },
  },
  {
    name: "STANDARD",
    price: "AED 4,500–6,500",
    bestFor:
      "You need your apartment closed out properly and your deposit back. The most common starting point.",
    items: [
      "Everything in Essentials, plus:",
      "Power of Attorney facilitation (notarized, enabling us to act on your behalf)",
      "Full apartment/villa move-out project management",
      "Landlord communication and negotiation — written and in-person",
      "Move-out inspection attendance with condition documentation (photo + video)",
      "Professional cleaning coordination to RERA move-out standard",
      "Minor repair coordination to protect your deposit",
      "Security deposit recovery management — RERA dispute filing if required",
      "Keys, access cards, building passes returned with signed receipt",
    ],
    highlight: {
      label: "Typical deposit at risk",
      value: "AED 5,000–100,000+",
      cost: "Your cost to protect that: AED 4,500–6,500",
    },
  },
  {
    name: "FULL CLOSURE",
    price: "AED 8,000–13,000",
    bestFor:
      "You left behind an apartment, a car, and a home full of furniture. You want everything handled.",
    items: [
      "Everything in Standard, plus:",
      "Vehicle disposal: fines cleared, finance settled, sale managed, proceeds transferred",
      "Full household contents: sold (Dubizzle, Facebook, bulk buyer), donated, shipped, or stored",
      "Electronics and valuables catalogued with your sign-off on every disposal decision",
      "Self-storage procurement for items to be shipped later",
      "International freight coordination with preferred forwarder",
      "Building management account closure and final service charge reconciliation",
    ],
    highlight: {
      label: "Typical assets at risk",
      value: "AED 50,000–250,000+",
      cost: "Your cost to recover and liquidate: AED 8,000–13,000",
    },
  },
  {
    name: "WHITE GLOVE",
    price: "AED 15,000–28,000",
    bestFor:
      "DIFC professionals, business owners, and HNW clients with multiple properties, companies, and complex affairs.",
    items: [
      "Everything in Full Closure, plus:",
      "UAE company/trade license wind-down (freezone and mainland)",
      "VAT deregistration coordination",
      "School withdrawal and deposit recovery (per child)",
      "UAE gratuity entitlement calculation and recovery guidance",
      "Pet transport coordination (IATA-certified partner)",
      "MOFA document attestation (educational, professional, personal certificates)",
      "Medical and dental record collection and international forwarding",
      "30-day post-closure concierge: anything that comes up after the main work is done",
    ],
    highlight: {
      label: "",
      value: "",
      cost: "For people who left behind a life, not just an apartment.",
    },
  },
  {
    name: "CORPORATE",
    price: "AED 2,800–4,500 per employee",
    bestFor:
      "Companies that evacuated UAE-based staff and need one vendor to handle everything.",
    items: [
      "Full Closure scope for each employee, scoped individually at intake",
      "Dedicated account manager — single point of contact for HR",
      "Fortnightly progress reports in corporate format",
      "Volume pricing: 10–50 staff, 51–200 staff, 200+ staff tiers",
      "SLA-backed completion timelines",
      "Individual employee communication handled by us — zero HR bandwidth required",
      "Consolidated end-of-programme report",
    ],
    highlight: {
      label: "",
      value: "",
      cost: "Minimum 10 employees.",
    },
  },
];

const addOns = [
  { service: "Power of Attorney facilitation", price: "AED 900–1,400" },
  { service: "Rush / 48-hour mobilization", price: "AED 1,500–2,500" },
  { service: "Vehicle sale commission", price: "6–8% of sale price" },
  { service: "Furniture sale commission", price: "15–20% of proceeds" },
  { service: "Pet transport coordination", price: "AED 1,500–3,500" },
  { service: "School deposit recovery", price: "AED 500 + 15% of recovered amount" },
  { service: "UAE gratuity recovery", price: "AED 800 + 12% of recovered amount" },
  { service: "MOFA document attestation", price: "AED 600–2,000 per document set" },
  { service: "International freight coordination", price: "AED 500 + cost at 15% markup" },
  { service: "Storage procurement", price: "AED 500 + cost pass-through" },
  { service: "Monthly mail forwarding", price: "AED 200–350/month recurring" },
  { service: "Company wind-down (via licensed PRO partner)", price: "AED 5,000–15,000 per entity" },
  { service: "Visa/residency cancellation", price: "AED 800–1,500 per person" },
];

const pricingPrinciples = [
  "All packages are quoted after a short assessment form. No package has a blind fixed price — your quote reflects your actual situation.",
  "50% on signing. 50% on completion. We don't get the second half unless we deliver.",
  "Commissions on vehicle and furniture sales are earned on proceeds achieved. If we don't sell it, you don't pay commission.",
  "No hidden costs. Your quote shows every line item — not just a total.",
  "Corporate clients: 30% on signing, 40% at midpoint, 30% on completion.",
];

export default function ServicesPage() {
  return (
    <ScrollAnimationWrapper>
      {/* ===== HEADER ===== */}
      <section className="relative bg-navy-900 pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services-header.png"
            alt="Interior of an upscale empty Dubai apartment overlooking Palm Jumeirah"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="relative max-w-content mx-auto px-6 lg:px-8">
          <p className="animate-fade-up section-label text-gold-400 mb-4">Services &amp; Pricing</p>
          <h1 className="animate-fade-up stagger-1 font-display text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Every Service. Every Price. No Surprises.
          </h1>
          <p className="animate-fade-up stagger-2 text-white/70 text-lg mt-6 max-w-2xl leading-relaxed">
            We don&apos;t do vague estimates. Below is exactly what&apos;s included in each package, what it
            costs, and what you can add on. Your custom quote will be based on your specific
            situation — but you&apos;ll know the range before we ever get on a call.
          </p>
        </div>
      </section>

      {/* ===== PACKAGES ===== */}
      <section className="bg-slate-100 py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className="animate-fade-up bg-navy-800 rounded-lg overflow-hidden"
              >
                <div className="p-8 sm:p-10">
                  {/* Package header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                    <h2 className="section-label text-gold-400 text-base tracking-wider">
                      {pkg.name}
                    </h2>
                    <span className="text-white font-sans text-2xl font-bold">{pkg.price}</span>
                  </div>

                  <p className="text-white/50 text-sm mb-8 italic">{pkg.bestFor}</p>

                  {/* Service items */}
                  <div className="border-t border-white/10 pt-6">
                    <ul className="space-y-3">
                      {pkg.items.map((item, j) => (
                        <li key={j} className="text-white/70 text-sm leading-relaxed flex">
                          <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Value highlight */}
                  {pkg.highlight.cost && (
                    <div className="mt-8 pt-6 border-t border-white/10">
                      {pkg.highlight.label && (
                        <p className="text-white/40 text-sm">
                          {pkg.highlight.label}:{" "}
                          <span className="text-gold-400 font-semibold">
                            {pkg.highlight.value}
                          </span>
                        </p>
                      )}
                      <p className="text-white/60 text-sm font-medium mt-1">
                        {pkg.highlight.cost}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ADD-ONS ===== */}
      <section className="bg-white py-24 lg:py-28 border-t border-slate-200">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2 className="animate-fade-up font-sans text-navy-900 text-3xl sm:text-4xl font-bold mb-12">
            Add-On Services
          </h2>
          <div className="animate-fade-up">
            <div className="grid grid-cols-1 gap-0 border-t border-slate-200">
              {addOns.map((addon, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-4 border-b border-slate-200 gap-1 sm:gap-4"
                >
                  <span className="text-navy-900 text-sm">{addon.service}</span>
                  <span className="text-slate-400 text-sm font-medium sm:text-right whitespace-nowrap">
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW PRICING WORKS ===== */}
      <section className="bg-slate-100 py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2 className="animate-fade-up font-sans text-navy-900 text-3xl sm:text-4xl font-bold">
            Transparent Pricing. Aligned Incentives.
          </h2>
          <p className="animate-fade-up stagger-1 text-slate-400 text-lg mt-4">
            We don&apos;t charge for what we don&apos;t deliver.
          </p>

          <ul className="mt-10 space-y-4">
            {pricingPrinciples.map((principle, i) => (
              <li key={i} className="animate-fade-up flex text-navy-900/80 text-base leading-relaxed">
                <span className="text-gold-400 mr-3 flex-shrink-0">—</span>
                <span>{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-navy-900 border-t-2 border-gold-400/30 py-24 lg:py-28">
        <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
          <h2 className="animate-fade-up font-display text-white text-3xl sm:text-4xl font-bold">
            Not Sure Which Package You Need?
          </h2>
          <p className="animate-fade-up stagger-1 text-white/70 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
            Fill out the assessment form. Takes 60 seconds. We&apos;ll review your situation, recommend the
            right scope, and send you an itemized quote within 24 hours.
          </p>
          <div className="animate-fade-up stagger-2 mt-10">
            <Link
              href="/assessment"
              className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 px-10 py-5 text-lg font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
            >
              Get Your Free Assessment →
            </Link>
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}
