import { useMemo, useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;
type TouchedState = Partial<Record<keyof FormState, boolean>>;

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

function validateForm(form: FormState): FormErrors {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (form.name.trim().length < 2) {
    errors.name = "Name should be at least 2 characters.";
  }

  if (!emailPattern.test(form.email.trim())) {
    errors.email = "Use a valid email address.";
  }

  if (form.message.trim().length < 24) {
    errors.message = "Message should be at least 24 characters.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [touched, setTouched] = useState<TouchedState>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  const errors = useMemo(() => validateForm(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
  }

  function markTouched(field: keyof FormState) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (!isValid) {
      setStatus("idle");
      return;
    }

    setStatus("ready");
  }

  const mailtoHref = `mailto:hello@dianerdiana.dev?subject=${encodeURIComponent(
    `Portfolio inquiry from ${form.name.trim()}`,
  )}&body=${encodeURIComponent(`${form.message.trim()}\n\nFrom: ${form.name.trim()} <${form.email.trim()}>`)}`;

  return (
    <form className="grid gap-4" noValidate onSubmit={handleSubmit}>
      <div>
        <label className="text-sm font-semibold text-text-primary" htmlFor="contact-name">
          Name
        </label>
        <input
          className="mt-2 h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 ease-out placeholder:text-text-secondary focus:border-primary"
          id="contact-name"
          name="name"
          onBlur={() => markTouched("name")}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Your name"
          type="text"
          value={form.name}
        />
        {touched.name && errors.name && <p className="mt-2 text-sm text-error">{errors.name}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-text-primary" htmlFor="contact-email">
          Email
        </label>
        <input
          className="mt-2 h-12 w-full rounded-md border border-border bg-surface px-4 text-sm text-text-primary outline-none transition duration-200 ease-out placeholder:text-text-secondary focus:border-primary"
          id="contact-email"
          name="email"
          onBlur={() => markTouched("email")}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="you@example.com"
          type="email"
          value={form.email}
        />
        {touched.email && errors.email && <p className="mt-2 text-sm text-error">{errors.email}</p>}
      </div>

      <div>
        <label className="text-sm font-semibold text-text-primary" htmlFor="contact-message">
          Message
        </label>
        <textarea
          className="mt-2 min-h-36 w-full resize-y rounded-md border border-border bg-surface px-4 py-3 text-sm text-text-primary outline-none transition duration-200 ease-out placeholder:text-text-secondary focus:border-primary"
          id="contact-message"
          name="message"
          onBlur={() => markTouched("message")}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Tell me about the role, project, or problem."
          value={form.message}
        />
        {touched.message && errors.message && <p className="mt-2 text-sm text-error">{errors.message}</p>}
      </div>

      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <button
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white transition duration-200 ease-out hover:bg-hover disabled:cursor-not-allowed disabled:opacity-50"
          disabled={!isValid}
          type="submit"
        >
          Prepare Email
        </button>

        <a
          className={`inline-flex h-12 items-center justify-center rounded-md border border-border bg-surface px-5 text-sm font-semibold no-underline transition duration-200 ease-out ${
            status === "ready"
              ? "text-text-primary hover:border-primary hover:text-primary"
              : "pointer-events-none text-text-secondary opacity-60"
          }`}
          href={status === "ready" ? mailtoHref : undefined}
        >
          Open Mail App
        </a>
      </div>

      <p className="text-sm text-text-secondary" aria-live="polite">
        {status === "ready"
          ? "Your message is ready. Open your mail app to send it."
          : "The form only prepares an email draft in your browser."}
      </p>
    </form>
  );
}
