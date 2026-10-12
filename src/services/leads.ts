import type { LeadFormData } from "@/types/lead";

export async function createLead(
  data: LeadFormData,
  turnstileToken: string,
) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      lead: data,
      turnstileToken,
    }),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || "Failed to create lead");
  }

  return result;
}