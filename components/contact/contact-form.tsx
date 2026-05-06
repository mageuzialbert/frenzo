"use client";

import { useFormState, useFormStatus } from "react-dom";
import { m, AnimatePresence } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { PROJECT_TYPES } from "@/lib/content";
import { cn } from "@/lib/utils";

const initialState: ContactState = { ok: false };

export function ContactForm() {
  const [state, formAction] = useFormState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement | null>(null);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {state.ok ? (
          <m.div
            key="success"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-ink/10 bg-paper p-10 text-center"
          >
            <m.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 240, damping: 18 }}
              className="mx-auto flex size-16 items-center justify-center rounded-full bg-magenta text-white"
            >
              <Check className="size-7" />
            </m.div>
            <h2 className="mt-6 font-display text-3xl tracking-tight">
              Brief received.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-pretty text-ink/65">
              {state.message}
            </p>
            <Button
              variant="outline"
              className="mt-8"
              onClick={() => {
                formRef.current?.reset();
                window.location.reload();
              }}
            >
              Send another
            </Button>
          </m.div>
        ) : (
          <m.form
            key="form"
            ref={formRef}
            action={formAction}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
            noValidate
          >
            <Field
              name="name"
              label="Your name"
              required
              error={state.fieldErrors?.name}
            >
              <Input id="name" name="name" placeholder="Jane Mwakasege" autoComplete="name" />
            </Field>

            <div className="grid gap-5 md:grid-cols-2">
              <Field name="company" label="Company / Organization">
                <Input id="company" name="company" placeholder="Optional" autoComplete="organization" />
              </Field>
              <Field name="email" label="Email" required error={state.fieldErrors?.email}>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </Field>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field name="phone" label="Phone">
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+255 …"
                  autoComplete="tel"
                />
              </Field>
              <Field
                name="projectType"
                label="Project type"
                required
                error={state.fieldErrors?.projectType}
              >
                <Select name="projectType">
                  <SelectTrigger id="projectType" aria-label="Project type">
                    <SelectValue placeholder="Choose one" />
                  </SelectTrigger>
                  <SelectContent>
                    {PROJECT_TYPES.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <Field name="quantity" label="Quantity">
                <Input id="quantity" name="quantity" placeholder="e.g. 500 pcs" />
              </Field>
              <Field name="deadline" label="Deadline">
                <Input id="deadline" name="deadline" type="date" />
              </Field>
            </div>

            <Field
              name="message"
              label="Tell us about it"
              required
              error={state.fieldErrors?.message}
            >
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="What's the brief? Sizes, finishes, brand details — anything helps."
              />
            </Field>

            {state.message && !state.ok && (
              <p className="text-sm text-destructive">{state.message}</p>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-ink/55">
                We reply within 1 business day. Quotes are always free.
              </p>
              <SubmitButton />
            </div>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  name,
  label,
  required,
  error,
  children,
}: {
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="flex items-center gap-1 text-ink/80">
        {label}
        {required && <span className="text-magenta" aria-hidden>*</span>}
      </Label>
      {children}
      {error && (
        <p className={cn("text-xs text-destructive")} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="primary" size="lg" disabled={pending} className="min-w-[180px]">
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" /> Sending…
        </>
      ) : (
        <>
          Send brief <Send className="size-4" />
        </>
      )}
    </Button>
  );
}
