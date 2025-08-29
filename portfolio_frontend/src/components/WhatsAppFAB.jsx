import { FiMessageCircle } from "react-icons/fi";

/**
 * PUBLIC_INTERFACE
 * Floating WhatsApp button positioned at bottom-right.
 */
export default function WhatsAppFAB() {
  const phone = process.env.REACT_APP_WHATSAPP_NUMBER || "";
  const href = phone ? `https://wa.me/${phone}` : "https://wa.me/";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 btn btn-secondary shadow-softmd !px-4 !py-3"
    >
      <FiMessageCircle aria-hidden className="text-lg" />
      WhatsApp
    </a>
  );
}
