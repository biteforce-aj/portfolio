"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import type { SiteConfig } from "@/config/site.config";
import { submitContact, type ContactState } from "./contact.action";

const initialState: ContactState = { status: "idle" };

/** The form half of ContactForm. Works without JS via the server action. */
export function ContactFormFields({ labels }: { labels: SiteConfig["contact"]["form"] }) {
  const [state, action, pending] = useActionState(submitContact, initialState);
  const { errors, values } = state;

  if (state.status === "success") {
    return (
      <div role="status" className="flex flex-col items-start gap-3 py-6">
        <Icon name="Check" className="size-8 text-success" />
        <p className="text-xl font-semibold">{labels.successTitle}</p>
        <p className="text-muted">{labels.successText}</p>
      </div>
    );
  }

  return (
    <form action={action} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 tablet:grid-cols-2">
        <Input
          label={labels.name}
          name="name"
          autoComplete="name"
          required
          defaultValue={values?.name}
          error={errors?.name}
        />
        <Input
          label={labels.email}
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={values?.email}
          error={errors?.email}
        />
      </div>
      <Textarea
        label={labels.message}
        name="message"
        rows={7}
        required
        defaultValue={values?.message}
        error={errors?.message}
      />
      {/* Honeypot, hidden from people and assistive tech. */}
      <div aria-hidden="true" className="hidden">
        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <p aria-live="polite" className="sr-only">
        {state.status === "error" ? labels.errorSummary : ""}
      </p>
      <Button type="submit" size="lg" disabled={pending} className="self-start max-tablet:w-full">
        {pending ? labels.sending : labels.submit}
        <Icon name="Send" />
      </Button>
    </form>
  );
}
