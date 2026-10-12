"use client";

import { useState } from "react";
import { createLead } from "@/services/leads";
import type { LeadFormData } from "@/types/lead";

type FormErrors = Partial<
  Record<keyof LeadFormData | "turnstileToken", string>
>;

const initialFormData: LeadFormData = {
  name: "",
  phone: "",
  interest: "General consultation",
  preferredDay: "",
  preferredTime: "",
  website: "",
};

export function useLeadForm() {
  const [turnstileToken, setTurnstileToken] = useState("");
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof LeadFormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));

    setSubmitted(false);
  };

  const handleTurnstileVerify = (token: string) => {
    console.log("TURNSTILE TOKEN RECEIVED:", token);

    setTurnstileToken(token);

    setErrors((current) => ({
      ...current,
      turnstileToken: undefined,
    }));
  };

  const handleTurnstileExpire = () => {
    setTurnstileToken("");
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.preferredDay) {
      newErrors.preferredDay = "Please select a preferred day.";
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = "Please select a preferred time.";
    }

    if (!turnstileToken) {
      newErrors.turnstileToken = "Please complete the verification.";
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      await createLead(formData, turnstileToken);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
      setFormData(initialFormData);
      setTurnstileToken("");
      setErrors({});
    } catch (error) {
      console.error("Failed to submit lead:", error);
    } finally {
      setLoading(false);
    }
  };
  return {
    formData,
    errors,
    submitted,
    loading,
    handleChange,
    handleTurnstileVerify,
    handleTurnstileExpire,
    handleSubmit,
  };
}
