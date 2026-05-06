import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeUp } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. Quotes are free, fast and friendly. Frenzo Printing Solutions, Dar es Salaam.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden pt-32 md:pt-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 size-[700px] -translate-x-1/2 rounded-full bg-brand-gradient-soft blur-3xl"
      />

      <div className="container pb-24 md:pb-32">
        <FadeUp>
          <p className="text-eyebrow uppercase text-magenta">Contact</p>
          <h1
            id="contact-heading"
            className="mt-3 max-w-3xl text-balance font-display text-display-2 text-ink"
          >
            Tell us about your project.
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-ink/65 md:text-lg">
            Quotes are free, fast, and friendly. Send a brief — even a rough one —
            and we&rsquo;ll come back with options the same business day.
          </p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-12 md:gap-12">
          <FadeUp delay={0.1} className="md:col-span-7">
            <ContactForm />
          </FadeUp>
          <FadeUp delay={0.15} className="md:col-span-5">
            <ContactCard />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
