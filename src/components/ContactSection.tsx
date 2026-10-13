import React, { useState, useEffect } from 'react';

interface ContactSectionProps {
  initialService?: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  details?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: 'Website Design & Development',
    budget: '',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync service from ServicesSection inquiry trigger
  useEffect(() => {
    if (initialService) {
      if (initialService.toLowerCase().includes('web') || initialService.toLowerCase().includes('react')) {
        setFormData((prev) => ({ ...prev, service: 'Website Design & Development' }));
      } else if (initialService.toLowerCase().includes('brand') || initialService.toLowerCase().includes('identity')) {
        setFormData((prev) => ({ ...prev, service: 'Brand Identity & Visual Systems' }));
      } else if (initialService.toLowerCase().includes('video') || initialService.toLowerCase().includes('social')) {
        setFormData((prev) => ({ ...prev, service: 'Social Media Video Editing & Scripting' }));
      } else {
        setFormData((prev) => ({ ...prev, service: 'Other' }));
      }
    }
  }, [initialService]);

  const validateField = (field: keyof FormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required.';
        if (value.trim().length < 2) return 'Please enter your full name.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email address.';
        return undefined;
      case 'details':
        if (!value.trim()) return 'Project details are required.';
        if (value.trim().length < 10) return 'Please provide a short description (minimum 10 characters).';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const errorMsg = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const errorMsg = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@samiben.design');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all required fields
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const detailsErr = validateField('details', formData.details);

    if (nameErr || emailErr || detailsErr) {
      setErrors({
        name: nameErr,
        email: emailErr,
        details: detailsErr,
      });
      setTouched({
        name: true,
        email: true,
        details: true,
      });
      return;
    }

    setIsSubmitting(true);

    // BACKEND INTEGRATION NOTE:
    // This project does not currently have an active backend API or third-party email provider configured.
    // To make this inquiry form operational in production, integrate this handler with an endpoint
    // such as Formspree, Resend, EmailJS, or a Next.js / Express API route:
    // e.g.:
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: 'Website Design & Development',
        budget: '',
        details: '',
      });
      setTouched({});
      setErrors({});
    }, 800);
  };

  return (
    <section id="contact" className="section-padding surface-paper border-b border-[#171717]/10 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[48px] sm:mb-[64px] pb-[24px] border-b border-[#171717]/15">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-widest text-[#0000FF] mb-[8px] block font-semibold">
              04 / INQUIRY & CONTACT
            </span>
            <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] text-[#171717] font-normal leading-tight">
              Start a Conversation
            </h2>
          </div>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#171717]/75 mt-[16px] md:mt-0 max-w-[400px] leading-relaxed">
            Have an upcoming project or inquiry? Share your requirements below to discuss scope, timeline, and availability.
          </p>
        </div>

        {/* Balanced Two-Column Composition */}
        <div className="site-grid items-start">
          {/* Left Column: Context, Direct Contact & Expectation */}
          <div className="col-span-4 sm:col-span-6 lg:col-span-5 space-y-[32px]">
            <div className="space-y-[16px]">
              <h3 className="font-serif text-[28px] sm:text-[34px] text-[#171717] font-normal leading-snug">
                Let's discuss your project scope and objectives.
              </h3>
              <p className="font-sans text-[#171717]/85 text-[16px] sm:text-[17px] leading-[1.65]">
                Whether you need a full digital flagship, a distinctive brand identity system, or high-retention vertical social media video editing, I am open for commissions and collaborations.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-[28px] border border-[#171717]/15 bg-white space-y-[16px]">
              <span className="font-mono text-[12px] text-[#0000FF] font-semibold uppercase tracking-wider block">
                DIRECT INQUIRIES
              </span>
              <p className="font-sans text-[14px] text-[#171717]/80 leading-relaxed">
                Prefer direct correspondence or have a pre-written RFP? Email me directly:
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[12px] pt-[8px] border-t border-[#171717]/10">
                <span className="font-mono text-[14px] sm:text-[15px] font-medium text-[#171717] select-all">
                  contact@samiben.design
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-primary py-[8px] px-[16px] text-[12px]"
                  aria-label="Copy direct email address"
                >
                  {copied ? 'Copied to clipboard' : 'Copy email'}
                </button>
              </div>
            </div>

            {/* Response & Location Info */}
            <div className="p-[24px] bg-[#171717]/5 border border-[#171717]/15 space-y-[12px]">
              <div className="flex items-center justify-between font-mono text-[12px] text-[#171717]/70 uppercase tracking-wider">
                <span>LOCATION:</span>
                <span className="text-[#171717] font-semibold">ALGIERS (GMT+1) / REMOTE</span>
              </div>
              <div className="flex items-center justify-between font-mono text-[12px] text-[#171717]/70 uppercase tracking-wider">
                <span>TYPICAL RESPONSE:</span>
                <span className="text-[#0000FF] font-semibold">WITHIN 24-48 HOURS</span>
              </div>
              <div className="flex items-center justify-between font-mono text-[12px] text-[#171717]/70 uppercase tracking-wider">
                <span>AVAILABILITY:</span>
                <span className="text-emerald-700 font-semibold">Q2 / Q3 2026 OPEN</span>
              </div>
            </div>
          </div>

          {/* Right Column: Reorganized Spacious Form */}
          <div className="col-span-4 sm:col-span-6 lg:col-span-7 border border-[#171717]/15 bg-white p-[32px] sm:p-[48px]">
            <div className="border-b border-[#171717]/10 pb-[20px] mb-[32px]">
              <span className="font-mono text-[12px] text-[#0000FF] font-semibold uppercase tracking-wider block mb-[6px]">
                // PROJECT INQUIRY FORM
              </span>
              <h3 className="font-serif text-[28px] sm:text-[32px] text-[#171717] font-normal">
                Tell me about your project
              </h3>
            </div>

            {submitted ? (
              <div className="p-[32px] bg-emerald-50 border border-emerald-200 space-y-[16px]">
                <div className="font-mono text-[13px] text-emerald-800 font-semibold uppercase tracking-wider flex items-center gap-2">
                  <span>✔</span>
                  <span>INQUIRY SUBMITTED SUCCESSFULLY</span>
                </div>
                <p className="font-sans text-[16px] text-emerald-900 leading-relaxed">
                  Thank you for your message. Your inquiry has been received, and I will review the scope and reply within 24 to 48 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary text-[13px] py-2 px-4 mt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-[24px]">
                {/* 1. Name & Email (Two Columns on Tablet/Desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  <div>
                    <label 
                      htmlFor="inquiry-name" 
                      className="font-mono text-[12px] text-[#171717] uppercase tracking-wider font-semibold block mb-[8px]"
                    >
                      1. Name <span className="text-[#0000FF]">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className={`form-input-editorial ${
                        errors.name && touched.name ? 'border-red-600 bg-red-50/30' : ''
                      }`}
                    />
                    {errors.name && touched.name && (
                      <p id="name-error" className="font-mono text-[12px] text-red-600 mt-[6px]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="inquiry-email" 
                      className="font-mono text-[12px] text-[#171717] uppercase tracking-wider font-semibold block mb-[8px]"
                    >
                      2. Email <span className="text-[#0000FF]">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`form-input-editorial ${
                        errors.email && touched.email ? 'border-red-600 bg-red-50/30' : ''
                      }`}
                    />
                    {errors.email && touched.email && (
                      <p id="email-error" className="font-mono text-[12px] text-red-600 mt-[6px]">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* 2. Company & Service Needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
                  <div>
                    <label 
                      htmlFor="inquiry-company" 
                      className="font-mono text-[12px] text-[#171717] uppercase tracking-wider font-semibold block mb-[8px]"
                    >
                      3. Company or Brand <span className="text-[#171717]/50 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="inquiry-company"
                      type="text"
                      placeholder="Studio / Acme Corp"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="form-input-editorial"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="inquiry-service" 
                      className="font-mono text-[12px] text-[#171717] uppercase tracking-wider font-semibold block mb-[8px]"
                    >
                      4. Service Needed <span className="text-[#0000FF]">*</span>
                    </label>
                    <select
                      id="inquiry-service"
                      required
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className="form-input-editorial cursor-pointer"
                    >
                      <option value="Website Design & Development">Website Design & Development</option>
                      <option value="Brand Identity & Visual Systems">Brand Identity & Visual Systems</option>
                      <option value="Social Media Video Editing & Scripting">Social Media Video Editing & Scripting</option>
                      <option value="Other">Other / Multi-disciplinary Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* 3. Project Budget */}
                <div>
                  <label 
                    htmlFor="inquiry-budget" 
                    className="font-mono text-[12px] text-[#171717] uppercase tracking-wider font-semibold block mb-[8px]"
                  >
                    5. Project Budget <span className="text-[#171717]/50 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="inquiry-budget"
                    value={formData.budget}
                    onChange={(e) => handleChange('budget', e.target.value)}
                    className="form-input-editorial cursor-pointer"
                  >
                    <option value="">Select budget range (Optional)</option>
                    <option value="< $2,500">Under $2,500</option>
                    <option value="$2,500 — $5,000">$2,500 — $5,000</option>
                    <option value="$5,000 — $10,000">$5,000 — $10,000</option>
                    <option value="$10,000+">$10,000+</option>
                  </select>
                </div>

                {/* 4. Project Details */}
                <div>
                  <label 
                    htmlFor="inquiry-details" 
                    className="font-mono text-[12px] text-[#171717] uppercase tracking-wider font-semibold block mb-[8px]"
                  >
                    6. Project Details & Goals <span className="text-[#0000FF]">*</span>
                  </label>
                  <textarea
                    id="inquiry-details"
                    rows={5}
                    required
                    placeholder="Briefly describe what you are looking to build, desired deliverables, target timeline, and any reference links..."
                    value={formData.details}
                    onChange={(e) => handleChange('details', e.target.value)}
                    onBlur={() => handleBlur('details')}
                    aria-invalid={!!errors.details}
                    aria-describedby={errors.details ? 'details-error' : undefined}
                    className={`form-input-editorial min-h-[140px] resize-y leading-relaxed ${
                      errors.details && touched.details ? 'border-red-600 bg-red-50/30' : ''
                    }`}
                  />
                  {errors.details && touched.details && (
                    <p id="details-error" className="font-mono text-[12px] text-red-600 mt-[6px]">
                      {errors.details}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-[8px]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full py-[16px] text-[14px] ${
                      isSubmitting ? 'opacity-80 cursor-wait' : ''
                    }`}
                  >
                    {isSubmitting ? 'Submitting inquiry...' : 'Submit project inquiry →'}
                  </button>
                  <p className="font-mono text-[12px] text-[#171717]/60 text-center mt-[12px]">
                    No obligation. Direct communication with Sami Ben.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
