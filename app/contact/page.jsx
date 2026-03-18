"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: "Message sent successfully! Check your email for confirmation." });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to connect to the server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-vibrant-mesh pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lw-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-lw-saffron/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-lw-green/10 text-lw-green text-xs font-bold uppercase tracking-widest mb-6">
            Get in touch
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-lw-dark tracking-tight mb-6">
            Contact <span className="text-lw-green">Us</span>
          </h1>
          <p className="text-zinc-600 text-lg max-w-xl mx-auto leading-relaxed">
            Have a question or want to work with us? Send us a message and our team will get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-surface p-10 lg:p-14 rounded-squircle shadow-glass"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-lw-green/60 ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/20 focus:bg-white focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-zinc-400 font-medium"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-lw-green/60 ml-1">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/20 focus:bg-white focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-zinc-400 font-medium"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-lw-green/60 ml-1">Subject</label>
              <input
                required
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/20 focus:bg-white focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-zinc-400 font-medium"
                placeholder="How can we help?"
              />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-lw-green/60 ml-1">Message</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-6 py-4 rounded-2xl bg-white/50 border border-white/20 focus:bg-white focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-zinc-400 font-medium resize-none leading-relaxed"
                placeholder="Share your thoughts with us..."
              />
            </div>

            {status.message && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`p-5 rounded-2xl text-sm font-bold flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 text-green-700 border border-green-500/20' : 'bg-red-500/10 text-red-700 border border-red-500/20'}`}
              >
                <div className={`w-2 h-2 rounded-full ${status.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`} />
                {status.message}
              </motion.div>
            )}

            <button
              disabled={loading}
              type="submit"
              className="w-full py-5 bg-lw-dark text-white rounded-2xl font-bold text-lg hover:bg-lw-green hover:shadow-xl hover:shadow-lw-green/20 transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}