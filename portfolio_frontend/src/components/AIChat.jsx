import { useState } from "react";
import { FiCpu, FiX, FiSend, FiMessageSquare } from "react-icons/fi";

/**
 * PUBLIC_INTERFACE
 * Mock AI chat popup anchored bottom-left with simple scripted responses.
 */
export default function AIChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm your AI assistant. Ask me about Sathish's skills or projects." }
  ]);
  const [input, setInput] = useState("");

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const next = [...messages, { role: "user", content: text }];
    // simple canned responses
    let reply = "I can help with general questions about the portfolio.";
    if (/skill|stack|tech/i.test(text)) reply = "Sathish works with React, TypeScript, TailwindCSS, and Framer Motion.";
    if (/project/i.test(text)) reply = "You can browse highlighted projects in the Projects section.";
    if (/contact|email/i.test(text)) reply = "Use the contact form or WhatsApp to get in touch!";
    setMessages([...next, { role: "assistant", content: reply }]);
    setInput("");
  };

  return (
    <>
      {!open && (
        <button
          className="fixed bottom-5 left-5 z-40 btn btn-primary !px-4 !py-3"
          onClick={() => setOpen(true)}
          aria-label="Open AI chat"
        >
          <FiMessageSquare aria-hidden />
          AI Chat
        </button>
      )}
      {open && (
        <div className="fixed bottom-5 left-5 z-50 w-[92vw] max-w-sm card overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <FiCpu aria-hidden />
              <p className="font-semibold">AI Assistant</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700">
              <FiX />
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto p-4 space-y-3" aria-live="polite">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`px-3 py-2 rounded-xl text-sm ${m.role === "user" ? "bg-secondary text-slate-900" : "bg-slate-100 dark:bg-slate-700"}`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-slate-100 dark:border-slate-700">
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="flex items-center gap-2"
              aria-label="AI chat input form"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about skills, projects..."
                className="flex-1 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="Message input"
              />
              <button type="submit" className="btn btn-primary !px-3 !py-2" aria-label="Send message">
                <FiSend />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
