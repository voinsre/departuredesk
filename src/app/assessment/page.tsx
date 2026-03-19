import type { Metadata } from "next";
import Image from "next/image";
import AssessmentForm from "@/components/AssessmentForm";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

export const metadata: Metadata = {
  title: "Free Dubai Exit Assessment — What's Your Financial Exposure? | Departure Desk",
  description:
    "Left Dubai? Find out what your apartment, car, deposits, and visa are costing you right now. Free 60-second assessment with 24-hour response. No obligation.",
};

export default function AssessmentPage() {
  return (
    <ScrollAnimationWrapper>
      {/* ===== HEADER ===== */}
      <section className="relative bg-navy-900 pt-32 pb-16 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/form-header.png"
            alt="View through airplane window showing Dubai skyline receding at sunset"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-navy-900/60" />
        </div>
        <div className="relative max-w-content mx-auto px-6 lg:px-8">
          <p className="animate-fade-up section-label text-gold-400 mb-4">Free Assessment</p>
          <h1 className="animate-fade-up stagger-1 font-display text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Tell Us What You Left Behind.
            <br />
            We&apos;ll Tell You What It&apos;s Costing You.
          </h1>
          <p className="animate-fade-up stagger-2 text-white/70 text-lg mt-6 max-w-xl leading-relaxed">
            6 questions. Under 60 seconds. No commitment. No payment. We&apos;ll review your situation
            and get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ===== FORM ===== */}
      <section className="bg-slate-100 py-20 lg:py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <AssessmentForm />
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
}
