import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export const metadata: Metadata = {
  title: "Close Your Dubai Life Remotely — Departure Desk | Property, Car, Visa, Deposits",
  description:
    "Left Dubai and can't return? Departure Desk handles your apartment handover, car sale, deposit recovery, visa cancellation, and company wind-down — entirely remotely. Free assessment.",
};

const costItems = [
  { amount: "AED 200–800/day", description: "Rent on an apartment nobody's living in" },
  { amount: "AED 25/day", description: "Residency visa overstay fines (after 30 days)" },
  { amount: "AED 50–500/day", description: "Salik tolls, parking fines, insurance lapse on your car" },
  { amount: "AED 5,000–100,000", description: "Security deposit at risk if your landlord claims abandonment" },
  { amount: "AED 500–5,000/mo", description: "Trade license renewal fees still accruing" },
  { amount: "AED 200–2,000/mo", description: "DEWA, internet, phone bills still running" },
];

const services = [
  "Apartment handover and move-out inspection management",
  "Security deposit recovery — including RERA dispute filing if your landlord won't cooperate",
  "Vehicle sale — fines cleared, title transferred, proceeds sent to your international account",
  "Furniture and contents: sold, donated, shipped, or stored — your call",
  "DEWA, du, Etisalat, internet — all closed, deposits recovered",
  "Residency visa cancellation and Emirates ID processing",
  "Company and trade license wind-down (mainland and freezone)",
  "Document collection from your home, office, or school — couriered internationally",
  "School withdrawal and deposit recovery (per child)",
  "Pet transport coordination with IATA-certified partners",
];

const steps = [
  {
    number: "01",
    title: "ASSESSMENT",
    description:
      "Fill out a 60-second form. We review your situation within 24 hours and tell you exactly what you're exposed to — no charge, no obligation.",
  },
  {
    number: "02",
    title: "CUSTOM QUOTE",
    description:
      "You receive an itemized quote with every service, every cost, and a clear timeline. No hidden fees. No \"it depends.\" You see the number before you commit.",
  },
  {
    number: "03",
    title: "WE EXECUTE",
    description:
      "Sign the service agreement. Pay 50% to start. We mobilize within 48 hours. You receive photo and video updates at every milestone via WhatsApp.",
  },
  {
    number: "04",
    title: "CHAPTER CLOSED",
    description:
      "Deposit recovered. Car sold. Accounts closed. Keys returned. You receive a final case report with every receipt, every document, every photo. Balance settled. Done.",
  },
];

const trustItems = [
  {
    title: "Licensed & Insured",
    description:
      "Operating under a fully licensed UAE business consultancy with 10+ years in Dubai. Professional indemnity insurance on every case.",
  },
  {
    title: "Real-Time Documentation",
    description:
      "Every property visit, every handover, every sale — photographed, recorded, and sent to you as it happens. You see everything we do.",
  },
  {
    title: "You Pay When We Deliver",
    description:
      "50% on signing. 50% on completion. Commission on asset sales deducted from proceeds — not charged upfront. If we don't sell your car, you don't pay commission.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I close my Dubai apartment if I've already left the UAE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can close your Dubai apartment remotely by appointing an authorized representative with a Power of Attorney to manage your move-out inspection, landlord handover, and security deposit recovery. Departure Desk provides this as a managed service — handling landlord communication, professional cleaning, RERA-compliant inspection, key return, and deposit recovery, all documented with photos and video sent to you in real time.",
                },
              },
              {
                "@type": "Question",
                name: "What happens to my security deposit if I left Dubai without doing a proper handover?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If you leave Dubai without completing a formal move-out inspection and key handover, your landlord may claim abandonment and forfeit your security deposit — which can range from AED 5,000 to over AED 100,000 depending on the property. However, RERA regulations require landlords to follow specific procedures before forfeiting a deposit. A professional closure service can intervene on your behalf, negotiate with the landlord, and file a RERA dispute if necessary to recover your deposit.",
                },
              },
              {
                "@type": "Question",
                name: "How do I sell my car in Dubai if I'm not in the country?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To sell a car in Dubai while you're overseas, you need to clear all outstanding Salik tolls and traffic fines, settle any vehicle finance, and have someone with Power of Attorney handle the RTA ownership transfer. Departure Desk manages this process end-to-end: clearing fines, obtaining multiple dealer valuations, handling the sale with client-approved pricing, and transferring proceeds to your international bank account.",
                },
              },
              {
                "@type": "Question",
                name: "What are the fines for not cancelling my UAE residency visa after leaving?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "If your UAE residency visa is not formally cancelled after departure, overstay fines begin accruing after 30 days at AED 25 per day for the first 6 months and AED 50 per day thereafter. Accumulated fines can result in travel bans and complications for future UAE entry. Residency visa cancellation requires processing through official channels, which can be handled remotely through a licensed PRO services provider.",
                },
              },
              {
                "@type": "Question",
                name: "Can I close my Dubai business license remotely?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, a UAE trade license can be wound down remotely through a licensed PRO services firm. The process varies by freezone or mainland authority and typically includes staff visa cancellations, VAT deregistration, bank account closure, and formal deregistration with the licensing authority. Timelines range from 4 to 12 weeks depending on the entity type and whether there are outstanding obligations.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost to close your Dubai life remotely?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Remote closure services for Dubai expats typically range from AED 1,800 for basic utility and account closures to AED 15,000 or more for comprehensive packages including property handover, vehicle sale, furniture liquidation, and company wind-down. The cost depends on the complexity of your situation. Most clients find that the service pays for itself through recovered security deposits, vehicle sale proceeds, and avoided fines.",
                },
              },
            ],
          }),
        }}
      />
      {/* JSON-LD: ProfessionalService Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Departure Desk",
            description:
              "Remote life-closure service for expats who left Dubai. Property handover, vehicle sale, deposit recovery, visa cancellation, and company wind-down.",
            url: "https://departure-desk.com",
            areaServed: { "@type": "City", name: "Dubai" },
            serviceType: [
              "Expat Relocation Services",
              "Property Management",
              "PRO Services",
              "Visa Cancellation",
              "Company Liquidation",
            ],
            priceRange: "AED 1,800 - AED 28,000",
          }),
        }}
      />

      <ScrollAnimationWrapper>
        {/* ===== HERO ===== */}
        <section className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero.png"
              alt="Aerial view of Dubai Marina at dusk with empty apartment balcony"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-navy-900/70" />
          </div>

          <div className="relative max-w-content mx-auto px-6 lg:px-8 py-32 pt-40">
            <p className="animate-fade-up section-label text-gold-400 mb-6">
              Remote Life-Closure Service — Dubai, UAE
            </p>
            <h1 className="animate-fade-up stagger-1 font-display text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
              You Left Dubai.
              <br />
              Your Apartment, Car, and Deposit Didn&apos;t.
            </h1>
            <p className="animate-fade-up stagger-2 text-white/80 text-lg mt-6 max-w-xl leading-relaxed">
              Departure Desk closes your entire Dubai chapter remotely — property handover, vehicle
              sale, utility cancellations, deposit recovery, company wind-down. You never have to
              come back.
            </p>
            <div className="animate-fade-up stagger-3 mt-10">
              <Link
                href="/assessment"
                className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 px-8 py-4 text-base font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
              >
                Get Your Free Assessment →
              </Link>
              <p className="text-white/50 text-sm mt-4">
                Takes 60 seconds. No commitment. We&apos;ll tell you exactly what you&apos;re exposed to.
              </p>
            </div>
          </div>
        </section>

        {/* ===== THE COST OF DOING NOTHING ===== */}
        <section className="bg-slate-100 py-24 lg:py-28">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <p className="animate-fade-up section-label text-gold-400 mb-4">The Problem</p>
            <h2 className="animate-fade-up stagger-1 font-sans text-navy-900 text-3xl sm:text-4xl font-bold">
              Every Day You Wait Is Costing You Money
            </h2>
            <p className="animate-fade-up stagger-2 text-slate-400 text-lg mt-4 max-w-2xl">
              Here&apos;s what&apos;s happening to your finances right now while you figure out what to do:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              {costItems.map((item, i) => (
                <div
                  key={i}
                  className="animate-fade-up bg-navy-800 p-6 rounded-lg"
                >
                  <p className="text-gold-400 text-xl font-bold font-sans">{item.amount}</p>
                  <p className="text-white/70 text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="animate-fade-up mt-12 bg-navy-900 p-8 rounded-lg border-l-4 border-gold-400">
              <p className="text-gold-400 text-lg font-semibold leading-relaxed">
                A typical expat who left 30 days ago has already lost AED 15,000–40,000 in
                recoverable money. Most of that is recoverable — if someone acts now.
              </p>
            </div>

            <div className="animate-fade-up mt-10">
              <Link
                href="/assessment"
                className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 px-8 py-4 text-base font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
              >
                Find Out What You&apos;re Losing →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== WHAT WE DO ===== */}
        <section className="bg-navy-900 py-24 lg:py-28">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <p className="animate-fade-up section-label text-gold-400 mb-4">The Service</p>
            <h2 className="animate-fade-up stagger-1 font-sans text-white text-3xl sm:text-4xl font-bold">
              One Company. One Point of Contact. Everything Handled.
            </h2>
            <p className="animate-fade-up stagger-2 text-white/70 text-lg mt-4 max-w-3xl leading-relaxed">
              You don&apos;t need five vendors. You don&apos;t need to coordinate a mover, a cleaner, a car
              dealer, a PRO company, and a lawyer from 5,000 miles away. You need one team that
              handles all of it and sends you photo evidence at every step.
            </p>

            <ul className="mt-12 space-y-4">
              {services.map((service, i) => (
                <li
                  key={i}
                  className="animate-fade-up gold-bullet text-white/80 text-base leading-relaxed"
                >
                  {service}
                </li>
              ))}
            </ul>

            <p className="animate-fade-up text-white/60 text-base mt-10 max-w-2xl leading-relaxed">
              Every action documented with timestamped photos and video. Sent to you via WhatsApp in
              real time. No surprises.
            </p>

            <div className="animate-fade-up mt-10">
              <Link
                href="/services"
                className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 px-8 py-4 text-base font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
              >
                See Packages &amp; Pricing →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="bg-slate-100 py-24 lg:py-28">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <p className="animate-fade-up section-label text-gold-400 mb-4">How It Works</p>
            <h2 className="animate-fade-up stagger-1 font-sans text-navy-900 text-3xl sm:text-4xl font-bold">
              From First Contact to Closed Chapter in 4 Steps
            </h2>

            <div className="mt-16 space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="animate-fade-up flex gap-6 sm:gap-10">
                  <div className="flex-shrink-0">
                    <span className="font-sans text-gold-400 text-4xl font-bold opacity-60">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="section-label text-navy-900 text-sm font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="animate-fade-up mt-14">
              <Link
                href="/assessment"
                className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 px-8 py-4 text-base font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
              >
                Start Your Free Assessment →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== TRUST SIGNALS ===== */}
        <section className="bg-navy-800 py-24 lg:py-28">
          <div className="max-w-content mx-auto px-6 lg:px-8">
            <p className="animate-fade-up section-label text-gold-400 mb-4">Why Departure Desk</p>
            <h2 className="animate-fade-up stagger-1 font-sans text-white text-3xl sm:text-4xl font-bold">
              Built for This Exact Moment
            </h2>

            <div className="mt-14 space-y-10">
              {trustItems.map((item, i) => (
                <div key={i} className="animate-fade-up border-l-2 border-gold-400/30 pl-6">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                  <p className="text-white/60 text-base mt-2 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="animate-fade-up text-white/30 text-xs mt-14">
              In partnership with Euro Fast Track
            </p>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="bg-navy-900 border-t-2 border-gold-400/30 py-24 lg:py-28">
          <div className="max-w-content mx-auto px-6 lg:px-8 text-center">
            <h2 className="animate-fade-up font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Your Dubai Chapter Is Still Open.
              <br />
              Let Us Close It.
            </h2>
            <p className="animate-fade-up stagger-1 text-white/70 text-lg mt-6 max-w-xl mx-auto leading-relaxed">
              Fill out a 60-second assessment. We&apos;ll review your situation within 24 hours, tell you
              exactly what&apos;s at risk, and give you a clear plan — no charge.
            </p>
            <div className="animate-fade-up stagger-2 mt-10">
              <Link
                href="/assessment"
                className="inline-block bg-gold-400 hover:bg-gold-300 text-navy-900 px-10 py-5 text-lg font-semibold tracking-wide transition-all duration-200 hover:scale-[1.02]"
              >
                Get Your Free Assessment →
              </Link>
              <p className="text-white/40 text-sm mt-4">
                No commitment. No credit card. Just clarity on what you need to do.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </>
  );
}
