export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const SUBJECT_LABELS: Record<string, string> = {
  enrollment: "Cadet Enrollment",
  school: "School Partnership Inquiry",
  events: "Events Information",
  general: "General Inquiry",
};

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to your environment."
    );
  }

  const subjectLabel = SUBJECT_LABELS[data.subject] ?? data.subject;

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      subject: `[CTC Website] ${subjectLabel}`,
      message: data.message,
      from_name: "CTC Website Contact Form",
      replyto: data.email,
    }),
  });

  const result = (await response.json()) as { success?: boolean; message?: string };

  if (!response.ok || !result.success) {
    throw new Error(result.message ?? "Failed to send message. Please try again.");
  }
}
