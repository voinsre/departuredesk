'use client';

import { useState, useRef, FormEvent } from 'react';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScMhoZ2sr8U93G-6hEvVDPNaQvam9uEiMdmIRhh-2VUrqZIzw/formResponse';

const ENTRY_IDS = {
  name: 'entry.354199489',
  email: 'entry.1799882062',
  phone: 'entry.676591177',
  location: 'entry.42402787',
  leftBehind: 'entry.1326279365',
  urgency: 'entry.1815240252',
};

const leftBehindOptions = [
  'Apartment with active lease',
  'Vehicle registered in my name',
  'Furniture and household contents',
  'Active trade license or company',
  'Utility accounts still running (DEWA, Internet, Phone)',
  'Residency visa not yet cancelled',
  'Other',
];

const urgencyOptions = [
  "ASAP - I'm losing money every day",
  'Within the next 2 weeks',
  'Just exploring my options',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  leftBehind: string[];
  urgency: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  leftBehind?: string;
}

export default function AssessmentForm() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hiddenFormRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: '',
    leftBehind: [],
    urgency: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function validate(): boolean {
    const newErrors: FormErrors = {};

    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone || formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number (at least 8 characters).';
    }
    if (!formData.location || formData.location.trim().length < 2) {
      newErrors.location = 'Please enter your current city and country.';
    }
    if (formData.leftBehind.length === 0) {
      newErrors.leftBehind = 'Please select at least one option.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitError('');

    if (!validate()) return;

    setLoading(true);

    try {
      const form = hiddenFormRef.current;
      if (!form) return;

      // Clear previous hidden inputs
      form.innerHTML = '';

      // Build hidden form fields
      const fields: Record<string, string | string[]> = {
        [ENTRY_IDS.name]: formData.name.trim(),
        [ENTRY_IDS.email]: formData.email.trim(),
        [ENTRY_IDS.phone]: formData.phone.trim(),
        [ENTRY_IDS.location]: formData.location.trim(),
      };

      for (const [name, value] of Object.entries(fields)) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value as string;
        form.appendChild(input);
      }

      // Checkbox values (multiple inputs with same name)
      formData.leftBehind.forEach((item) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = ENTRY_IDS.leftBehind;
        input.value = item;
        form.appendChild(input);
      });

      if (formData.urgency) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = ENTRY_IDS.urgency;
        input.value = formData.urgency;
        form.appendChild(input);
      }

      form.submit();

      // Show success after a short delay to allow submission
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
      }, 1500);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly at info@departure-desk.com.');
      setLoading(false);
    }
  }

  function handleCheckbox(option: string) {
    setFormData((prev) => ({
      ...prev,
      leftBehind: prev.leftBehind.includes(option)
        ? prev.leftBehind.filter((item) => item !== option)
        : [...prev.leftBehind, option],
    }));
  }

  // Success state
  if (submitted) {
    return (
      <div className="bg-white rounded-lg p-10 sm:p-14 text-center">
        <div className="w-16 h-16 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-sans text-navy-900 text-2xl font-bold">We&apos;ve Got It.</h2>
        <p className="text-slate-400 text-base mt-4 leading-relaxed max-w-md mx-auto">
          A member of our team will review your situation and get back to you within 24 hours.
        </p>
        <p className="text-slate-400 text-base mt-4 leading-relaxed">
          If you selected &ldquo;ASAP,&rdquo; we&apos;ll prioritize your case.
        </p>
        <p className="text-slate-400/60 text-sm mt-8">
          Keep an eye on your email and WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 sm:p-10" noValidate>
      <div className="space-y-8">
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-navy-900 text-sm font-semibold mb-2">
            Full Name <span className="text-gold-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-3.5 border ${
              errors.name ? 'border-red-400' : 'border-slate-200'
            } rounded-lg text-navy-900 text-base focus:outline-none focus:border-gold-400 transition-colors duration-300`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-navy-900 text-sm font-semibold mb-2">
            Email <span className="text-gold-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-3.5 border ${
              errors.email ? 'border-red-400' : 'border-slate-200'
            } rounded-lg text-navy-900 text-base focus:outline-none focus:border-gold-400 transition-colors duration-300`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-navy-900 text-sm font-semibold mb-2">
            Phone Number <span className="text-gold-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={`w-full px-4 py-3.5 border ${
              errors.phone ? 'border-red-400' : 'border-slate-200'
            } rounded-lg text-navy-900 text-base focus:outline-none focus:border-gold-400 transition-colors duration-300`}
          />
          <p className="text-slate-400 text-xs mt-1.5">
            Include country code. We&apos;ll use this to reach you quickly.
          </p>
          {errors.phone && <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>}
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-navy-900 text-sm font-semibold mb-2">
            Where are you now? <span className="text-gold-400">*</span>
          </label>
          <input
            type="text"
            id="location"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            className={`w-full px-4 py-3.5 border ${
              errors.location ? 'border-red-400' : 'border-slate-200'
            } rounded-lg text-navy-900 text-base focus:outline-none focus:border-gold-400 transition-colors duration-300`}
          />
          <p className="text-slate-400 text-xs mt-1.5">City, Country</p>
          {errors.location && <p className="text-red-500 text-xs mt-1.5">{errors.location}</p>}
        </div>

        {/* What did you leave behind */}
        <div>
          <fieldset>
            <legend className="block text-navy-900 text-sm font-semibold mb-3">
              What did you leave behind in Dubai? <span className="text-gold-400">*</span>
              <span className="block text-slate-400 font-normal text-xs mt-1">Select all that apply</span>
            </legend>
            <div className="space-y-3">
              {leftBehindOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={formData.leftBehind.includes(option)}
                    onChange={() => handleCheckbox(option)}
                    className="mt-0.5 w-5 h-5 rounded border-slate-200 text-gold-400 focus:ring-gold-400 cursor-pointer accent-gold-400"
                  />
                  <span className="text-navy-900/80 text-sm group-hover:text-navy-900 transition-colors">
                    {option}
                  </span>
                </label>
              ))}
            </div>
            {errors.leftBehind && (
              <p className="text-red-500 text-xs mt-1.5">{errors.leftBehind}</p>
            )}
          </fieldset>
        </div>

        {/* Urgency */}
        <div>
          <fieldset>
            <legend className="block text-navy-900 text-sm font-semibold mb-3">
              How urgently do you need help?
            </legend>
            <div className="space-y-3">
              {urgencyOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="urgency"
                    value={option}
                    checked={formData.urgency === option}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-5 h-5 border-slate-200 text-gold-400 focus:ring-gold-400 cursor-pointer accent-gold-400"
                  />
                  <span className="text-navy-900/80 text-sm group-hover:text-navy-900 transition-colors">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Error message */}
        {submitError && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 text-sm">{submitError}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold-400 hover:bg-gold-300 disabled:opacity-50 disabled:cursor-not-allowed text-navy-900 px-8 py-4 text-base font-semibold tracking-wide transition-all duration-200 hover:scale-[1.01] rounded-lg"
        >
          {loading ? 'Submitting...' : 'Get My Free Assessment →'}
        </button>
        <p className="text-slate-400 text-xs text-center mt-3">
          We&apos;ll respond within 24 hours. No commitment.
        </p>
      </div>

      {/* Hidden iframe and form for Google Forms submission */}
      <iframe
        ref={iframeRef}
        name="hidden_iframe"
        style={{ display: 'none' }}
        title="form-submit"
      />
      <form
        ref={hiddenFormRef}
        action={GOOGLE_FORM_URL}
        method="POST"
        target="hidden_iframe"
        style={{ display: 'none' }}
      />
    </form>
  );
}
