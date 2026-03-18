"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact`, {
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
    <div className="min-h-screen bg-vibrant-mesh pt-32 pb-20 px-6 relative overflow-hidden flex items-center">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-lw-green/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-lw-saffron/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Contact Info & Typography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-lw-green/10 text-lw-green text-xs font-bold uppercase tracking-widest mb-6 border border-lw-green/20">
                Let's Connect
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-lw-dark tracking-tight mb-6 leading-tight">
                Get in <span className="text-lw-green">Touch.</span>
              </h1>
              <p className="text-zinc-600 text-lg sm:text-xl leading-relaxed max-w-lg font-medium">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
            </div>

            <div className="space-y-8 pt-8 border-t border-zinc-200/60">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-zinc-200/50 flex items-center justify-center flex-shrink-0 group-hover:bg-lw-green group-hover:text-white group-hover:border-lw-green transition-all duration-300 text-lw-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Our Location</h3>
                  <p className="text-lw-dark font-medium leading-relaxed group-hover:text-lw-green transition-colors">
                    Lifewood Data Technology<br />
                    123 Innovation Drive, Tech Center
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-zinc-200/50 flex items-center justify-center flex-shrink-0 group-hover:bg-lw-saffron group-hover:text-white group-hover:border-lw-saffron transition-all duration-300 text-lw-saffron">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Email Us Directly</h3>
                  <p className="text-lw-dark font-medium group-hover:text-lw-saffron transition-colors">
                    hello@lifewood.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-zinc-200/50 flex items-center justify-center flex-shrink-0 group-hover:bg-lw-dark group-hover:text-white group-hover:border-lw-dark transition-all duration-300 text-lw-dark">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-1">Call Us</h3>
                  <p className="text-lw-dark font-medium group-hover:text-lw-dark transition-colors">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-surface p-8 sm:p-12 rounded-[2rem] shadow-glass border border-white/40 backdrop-blur-2xl relative overflow-hidden">
              {/* Shine effect inside card */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent"></div>

              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Full Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/30 border border-white/50 backdrop-blur-md shadow-inner focus:bg-white/50 focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-zinc-500 font-medium"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/30 border border-white/50 backdrop-blur-md shadow-inner focus:bg-white/50 focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-zinc-500 font-medium"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Subject</label>
                  <input
                    required
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white/30 border border-white/50 backdrop-blur-md shadow-inner focus:bg-white/50 focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-zinc-500 font-medium"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-500 ml-1">Message</label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-white/30 border border-white/50 backdrop-blur-md shadow-inner focus:bg-white/50 focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-zinc-500 font-medium resize-none leading-relaxed"
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
                  className="w-full py-4 bg-lw-dark text-white rounded-xl font-bold text-lg hover:bg-lw-green hover:shadow-xl hover:shadow-lw-green/20 transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 mt-4"
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}