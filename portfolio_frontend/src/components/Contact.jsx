import { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * PUBLIC_INTERFACE
 * Contact form with validation and EmailJS integration.
 */
export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      return "Please fill in all fields.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return "Please enter a valid email address.";
    }
    return null;
    };

  // PUBLIC_INTERFACE
  const onSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }
    if (!serviceId || !templateId || !publicKey) {
      setStatus({ type: "error", message: "Email service is not configured. Please set environment variables." });
      return;
    }
    setStatus({ type: "loading", message: "Sending..." });
    try {
      await emailjs.send(serviceId, templateId, form, { publicKey });
      setStatus({ type: "success", message: "Message sent successfully!" });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    }
  };

  return (
    <section id="contact" className="section container-padded">
      <h2 className="text-3xl font-bold mb-10">Contact</h2>
      <form onSubmit={onSubmit} className="card p-6 max-w-2xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="Your name"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
              placeholder="you@example.com"
              aria-required="true"
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={onChange}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
            placeholder="How can I help you?"
            aria-required="true"
          />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button type="submit" className="btn btn-primary" disabled={status.type === "loading"}>
            {status.type === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status.message && (
            <p
              role="status"
              className={`text-sm ${status.type === "error" ? "text-red-600" : status.type === "success" ? "text-green-600" : "text-slate-600"}`}
            >
              {status.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
