import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Share2, Camera, Play, MessageCircle, Loader2 } from "lucide-react";
import PageBanner from "../components/layout/PageBanner";
import SectionHeading from "../components/ui/SectionHeading";
import FadeInSection from "../components/ui/FadeInSection";
import { contactInfo } from "../data/siteData";
import { submitContactForm } from "../utils/submitContactForm";

const socialIcons: Record<string, typeof Share2> = {
  Facebook: Share2,
  Instagram: Camera,
  YouTube: Play,
  WhatsApp: MessageCircle,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await submitContactForm({
        name: String(formData.get("name") ?? ""),
        email: String(formData.get("email") ?? ""),
        phone: String(formData.get("phone") ?? ""),
        subject: String(formData.get("subject") ?? "general"),
        message: String(formData.get("message") ?? ""),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageBanner title="Contact Us" subtitle="Get In Touch" />

      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <FadeInSection direction="left">
            <SectionHeading
              align="left"
              subtitle="Reach Out"
              title="Contact CTC"
              description="Have questions about enrollment, school partnerships, or training programs? We'd love to hear from you."
            />

            <ul className="space-y-6 mb-8">
              {contactInfo.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-4">
                  <div className="p-3 bg-army-green rounded-sm border border-gold/20">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">Phone</p>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-white hover:text-gold transition-colors">
                      {phone}
                    </a>
                  </div>
                </li>
              ))}
              <li className="flex items-center gap-4">
                <div className="p-3 bg-army-green rounded-sm border border-gold/20">
                  <Mail className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-gold transition-colors break-all">
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-3 bg-army-green rounded-sm border border-gold/20">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider">Location</p>
                  <p className="text-white">{contactInfo.location}</p>
                </div>
              </li>
            </ul>

            <div className="flex gap-4">
              {contactInfo.social.map((s) => {
                const Icon = socialIcons[s.name as keyof typeof socialIcons] ?? MessageCircle;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    className="p-3 bg-army-green/50 border border-gold/20 rounded-sm text-gold hover:bg-gold hover:text-black transition-all"
                    aria-label={s.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.2}>
            <form onSubmit={handleSubmit} className="card-military p-8 space-y-5">
              <h3 className="font-heading text-2xl text-gold tracking-wide mb-2">Send a Message</h3>
              {submitted ? (
                <div className="py-8 text-center space-y-3">
                  <p className="text-white/80">
                    Thank you for your inquiry! We will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-gold text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  {error && (
                    <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/30 rounded-sm px-4 py-3">
                      {error}
                    </p>
                  )}
                  <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gold/20 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-gold/20 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full px-4 py-3 bg-black/50 border border-gold/20 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                      placeholder="+91"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 bg-black/50 border border-gold/20 rounded-sm text-white focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="enrollment">Cadet Enrollment</option>
                      <option value="school">School Partnership Inquiry</option>
                      <option value="events">Events Information</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-white/50 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-black/50 border border-gold/20 rounded-sm text-white focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 bg-gold text-black font-semibold uppercase tracking-wider rounded-sm hover:bg-gold-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </>
              )}
            </form>
          </FadeInSection>
        </div>
      </section>

      <section className="section-padding pt-0 max-w-7xl mx-auto">
        <FadeInSection>
          <SectionHeading
            subtitle="School Partnerships"
            title="School Inquiry"
            description="Interested in bringing CTC training to your school? Contact us for partnership programs tailored for your institution."
          />
        </FadeInSection>
      </section>

      <section className="section-padding pt-0">
        <FadeInSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden border border-gold/20 aspect-[21/9] min-h-[300px] bg-army-green/30 flex items-center justify-center camo-pattern">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
              <p className="font-heading text-2xl text-white tracking-wide">Pune, Maharashtra</p>
              <p className="text-white/50 text-sm mt-2 max-w-md mx-auto">
                Google Maps embed placeholder — replace with your CTC location embed code
              </p>
              <a
                href="https://maps.google.com/?q=Pune,Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gold text-sm hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>
    </>
  );
}
