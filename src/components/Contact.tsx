"use client";

import { useLeadForm } from "@/hooks/useLeadForm";
import TurnstileWidget from "@/components/TurnstileWidget";

const inputClassName =
  "mt-2 w-full rounded-[12px] border border-[#dbe8f4] bg-[#f8fbff] px-4 py-3.5 text-[13px] font-medium text-[#173252] outline-none transition focus:border-[#8fc5f4] focus:bg-white focus:ring-2 focus:ring-[#eaf5fd]";

const labelClassName =
  "text-[11px] font-semibold tracking-[-0.01em] text-[#173252]";

export default function Contact() {
  const {
    formData,
    errors,
    submitted,
    loading,
    handleChange,
    handleSubmit,
    handleTurnstileVerify,
    handleTurnstileExpire,
  } = useLeadForm();

  return (
    <section
      id="contact"
      className="scroll-mt-8 bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="page-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          {/* =====================================================
              LEFT — CLOSING STORY
          ====================================================== */}

          <div className="max-w-[540px]">
            <div className="flex items-center">
              <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[#1685ee]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6795cf]">
                LET&apos;S BEGIN
              </span>
            </div>

            <h2 className="mt-7 font-display text-[clamp(3.2rem,5vw,5.2rem)] leading-[0.9] tracking-[-0.07em] text-[#142746]">
              Ready to feel
              <br />
              <em className="font-normal text-[#1685ee]">better?</em>
            </h2>

            <p className="mt-8 max-w-[460px] text-[15px] leading-[1.85] text-[#7187a3] sm:text-[16px]">
              Tell us a little about what you&apos;re looking for. We&apos;ll use it
              to understand what you need and find a convenient time to talk.
            </p>

            <div className="mt-9 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf6ff] text-[#1685ee]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path
                      d="m5 12 4 4L19 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[13px] text-[#526b88]">
                  Easy to get started.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf6ff] text-[#1685ee]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M12 4v16M4 12h16" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-[13px] text-[#526b88]">
                  No pressure.
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#edf6ff] text-[#1685ee]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12h16M13 7l5 5-5 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[13px] text-[#526b88]">
                  We&apos;ll guide you through the next step.
                </span>
              </div>
            </div>

            <div className="mt-10 h-px w-[70px] bg-[#9fcaf4]" />
          </div>

          {/* =====================================================
              RIGHT — CONTACT FORM
          ====================================================== */}

          <div className="rounded-[26px] border border-[#dceaf7] bg-white p-6 shadow-[0_20px_60px_rgba(34,78,117,0.07)] sm:p-8 lg:p-10">
            <div>
              <p className="font-display text-[34px] leading-none tracking-[-0.04em] text-[#142746] sm:text-[38px]">
                Let&apos;s get to know you.
              </p>

              <p className="mt-3 max-w-[430px] text-[13px] leading-[1.7] text-[#7187a3]">
                Tell us a little about what you&apos;re looking for.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
              className="mt-8 grid gap-5 sm:grid-cols-2"
              noValidate
            >
              {/* Honeypot */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              {/* Name */}
              <label className={labelClassName}>
                Your name

                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  className={inputClassName}
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />

                {errors.name && (
                  <span className="mt-1 block text-xs font-normal text-red-600">
                    {errors.name}
                  </span>
                )}
              </label>

              {/* Phone */}
              <label className={labelClassName}>
                Phone number

                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  className={inputClassName}
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />

                {errors.phone && (
                  <span className="mt-1 block text-xs font-normal text-red-600">
                    {errors.phone}
                  </span>
                )}
              </label>

              {/* Interest */}
              <label className={labelClassName}>
                I&apos;m interested in

                <select
                  name="interest"
                  className={`${inputClassName} cursor-pointer appearance-none`}
                  value={formData.interest}
                  onChange={(e) => handleChange("interest", e.target.value)}
                >
                  <option>General consultation</option>
                  <option>Everyday dentistry</option>
                  <option>Cosmetic dentistry</option>
                  <option>Restorative care</option>
                </select>
              </label>

              {/* Preferred day */}
              <label className={labelClassName}>
                Preferred day

                <select
                  name="preferredDay"
                  className={`${inputClassName} cursor-pointer appearance-none`}
                  value={formData.preferredDay}
                  onChange={(e) =>
                    handleChange("preferredDay", e.target.value)
                  }
                >
                  <option value="">Select a day</option>
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                </select>

                {errors.preferredDay && (
                  <span className="mt-1 block text-xs font-normal text-red-600">
                    {errors.preferredDay}
                  </span>
                )}
              </label>

              {/* Preferred time */}
              <label className={`${labelClassName} sm:col-span-2`}>
                Preferred time

                <select
                  name="preferredTime"
                  className={`${inputClassName} cursor-pointer appearance-none`}
                  value={formData.preferredTime}
                  onChange={(e) =>
                    handleChange("preferredTime", e.target.value)
                  }
                >
                  <option value="">Select a time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                </select>

                {errors.preferredTime && (
                  <span className="mt-1 block text-xs font-normal text-red-600">
                    {errors.preferredTime}
                  </span>
                )}
              </label>

              {/* Turnstile */}
              <div className="sm:col-span-2">
                <TurnstileWidget
                  onVerify={handleTurnstileVerify}
                  onExpire={handleTurnstileExpire}
                />

                {errors.turnstileToken && (
                  <span className="mt-1 block text-xs font-normal text-red-600">
                    {errors.turnstileToken}
                  </span>
                )}
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full cursor-pointer items-center justify-between rounded-full bg-[#1685ee] px-7 py-4 text-[13px] font-semibold text-white shadow-[0_10px_25px_rgba(22,133,238,0.16)] transition-all hover:-translate-y-0.5 hover:bg-[#0f78dc] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Tell us what you need"}

                  <span className="text-xl leading-none">→</span>
                </button>

                {submitted && (
                  <div className="mt-4 rounded-[14px] border border-[#cfe8d9] bg-[#f2faf5] px-4 py-3">
                    <p className="text-sm text-[#47755a]">
                      Thank you. Your appointment request has been received.
                    </p>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
