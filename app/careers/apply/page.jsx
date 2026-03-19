"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Threads from "@/components/Threads";
import { ArrowRight, CheckCircle2, Upload, Phone, Mail, User, Briefcase, Globe, Zap, Heart } from "lucide-react";

const POSITIONS = [
    "AI Data Analyst",
    "AI/ML Engineer",
    "Full-stack Developer",
    "UI/UX Designer",
    "ESG Specialist",
    "Philanthropy Coordinator",
    "Content Contributor",
    "Internship"
];

const VALUES = [
    { icon: <Zap size={18} />, title: "Innovation First", desc: "Pushing the boundaries of what's possible in AI." },
    { icon: <Globe size={18} />, title: "Global Impact", desc: "Our solutions reach millions across every continent." },
    { icon: <Heart size={18} />, title: "Human Centric", desc: "Prioritizing ethics and well-being in everything we build." }
];

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        position: "",
        portfolio: "",
        message: "",
    });
    const [resume, setResume] = useState(null);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!resume) {
            setStatus({ type: "error", message: "Please upload your resume." });
            return;
        }

        setLoading(true);
        setStatus({ type: "", message: "" });

        try {
            const data = new FormData();
            // Concatenate names for backend compatibility
            const fullName = `${formData.firstName} ${formData.lastName}`.trim();

            Object.keys(formData).forEach(key => {
                if (key !== 'firstName' && key !== 'lastName') {
                    data.append(key, formData[key]);
                }
            });
            data.append("name", fullName);
            data.append("resume", resume);

            const response = await fetch("/api/applications", {
                method: "POST",
                body: data,
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: "success", message: "Application submitted successfully!" });
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    position: "",
                    portfolio: "",
                    message: ""
                });
                setResume(null);
                if (e.target) e.target.reset();
            } else {
                setStatus({ type: "error", message: result.error || "Something went wrong." });
            }
        } catch (error) {
            setStatus({ type: "error", message: "Failed to connect to the server." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#f8f9fa] relative overflow-hidden font-sans">
            {/* Dynamic Background */}
            {isMounted && (
                <div className="fixed inset-0 z-0 opacity-40">
                    <Threads
                        color={[0.015, 0.38, 0.25]}
                        amplitude={1.2}
                        distance={0.4}
                        enableMouseInteraction={true}
                    />
                </div>
            )}

            {/* Background Orbs */}
            <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-lw-green/5 blur-[120px] rounded-full z-0"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-lw-saffron/5 blur-[100px] rounded-full z-0"></div>

            <main className="relative z-10 flex flex-col lg:flex-row min-h-screen pt-20 lg:pt-0">

                {/* Left Side: Brand Story */}
                <div className="w-full lg:w-[45%] p-8 lg:p-24 flex flex-col justify-center bg-white/40 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-0 border-b lg:border-b-0 lg:border-r border-black/5">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lw-green/10 text-lw-green text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <span className="w-1.5 h-1.5 bg-lw-green rounded-full animate-pulse"></span>
                            Career Path
                        </span>

                        <h1 className="text-5xl lg:text-[6rem] font-black leading-[0.9] tracking-tighter text-lw-dark mb-10">
                            Build the <br />
                            <span className="text-lw-green">Future</span> <br />
                            with us.
                        </h1>

                        <p className="text-xl text-lw-dark/60 font-medium leading-relaxed max-w-lg mb-12">
                            Lifewood is where innovation meets impact. We're looking for visionary thinkers to help us redefine the landscape of AI and sustainable technology.
                        </p>

                        <div className="space-y-8">
                            {VALUES.map((val, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="p-3 bg-white shadow-lg shadow-black/5 border border-black/5 rounded-2xl text-lw-green">
                                        {val.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-black text-lw-dark uppercase tracking-widest text-xs mb-1">{val.title}</h3>
                                        <p className="text-sm text-lw-dark/50 font-medium">{val.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full lg:w-[55%] p-8 lg:p-24 flex flex-col justify-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-surface p-8 lg:p-14 rounded-[3rem] shadow-glass border-yellow-400 relative z-10 max-w-2xl mx-auto w-full border-2"
                    >
                        <div className="mb-12">
                            <h2 className="text-3xl font-black tracking-tight text-lw-dark mb-2">Apply Now</h2>
                            <p className="text-lw-dark/40 font-bold uppercase tracking-widest text-[10px]">Start your application journey</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="space-y-6">
                                {/* First & Last Name Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-lw-green ml-1">First Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-lw-dark/20 group-focus-within:text-lw-green transition-colors" size={18} />
                                            <input
                                                required
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/40 border border-black/5 focus:bg-white focus:ring-8 focus:ring-lw-green/5 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-lw-dark/20 font-bold"
                                                placeholder="John"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-lw-green ml-1">Last Name</label>
                                        <div className="relative group">
                                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-lw-dark/20 group-focus-within:text-lw-green transition-colors" size={18} />
                                            <input
                                                required
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/40 border border-black/5 focus:bg-white focus:ring-8 focus:ring-lw-green/5 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-lw-dark/20 font-bold"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Email & Phone Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-lw-green ml-1">Email</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-lw-dark/20 group-focus-within:text-lw-green transition-colors" size={18} />
                                            <input
                                                required
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/40 border border-black/5 focus:bg-white focus:ring-8 focus:ring-lw-green/5 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-lw-dark/20 font-bold"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-lw-green ml-1">Phone</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-lw-dark/20 group-focus-within:text-lw-green transition-colors" size={18} />
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/40 border border-black/5 focus:bg-white focus:ring-8 focus:ring-lw-green/5 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-lw-dark/20 font-bold"
                                                placeholder="+1 234 567 890"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Position Selection */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-lw-green ml-1">Desired Position</label>
                                    <div className="relative group">
                                        <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-lw-dark/20 group-focus-within:text-lw-green transition-colors" size={18} />
                                        <select
                                            required
                                            name="position"
                                            value={formData.position}
                                            onChange={handleChange}
                                            className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white/40 border border-black/5 focus:bg-white focus:ring-8 focus:ring-lw-green/5 focus:border-lw-green/30 outline-none transition-all text-lw-dark font-bold appearance-none cursor-pointer"
                                        >
                                            <option value="">Select a position</option>
                                            {POSITIONS.map(pos => <option key={pos} value={pos}>{pos}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {/* Resume Upload */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-lw-green ml-1">Upload CV / Resume (PDF, DOCX)</label>
                                    <div className="relative group">
                                        <input
                                            required
                                            type="file"
                                            accept=".pdf,.docx"
                                            onChange={handleFileChange}
                                            className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-black/5 focus:bg-white focus:ring-8 focus:ring-lw-green/5 focus:border-lw-green/30 outline-none transition-all text-transparent font-bold file:hidden cursor-pointer"
                                        />
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2 text-lw-green font-black text-[10px] uppercase tracking-widest">
                                            <Upload size={14} strokeWidth={3} />
                                            {resume ? resume.name.split('.').pop().toUpperCase() : "Browse"}
                                        </div>
                                        {!resume && <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none text-lw-dark/20 font-bold uppercase tracking-widest text-[10px]">Select your file...</div>}
                                        {resume && <div className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none text-lw-dark font-black truncate max-w-[200px] text-sm">{resume.name}</div>}
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-lw-green ml-1">Tell us about yourself</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-6 py-4 rounded-[2rem] bg-white/40 border border-black/5 focus:bg-white focus:ring-8 focus:ring-lw-green/5 focus:border-lw-green/30 outline-none transition-all text-lw-dark placeholder-lw-dark/20 font-bold resize-none leading-relaxed"
                                        placeholder="Briefly describe your experience and why you're a fit..."
                                    />
                                </div>
                            </div>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-5 rounded-3xl text-[11px] font-black uppercase tracking-widest flex items-center gap-4 ${status.type === 'success' ? 'bg-green-500/10 text-green-700 border border-green-500/20 shadow-lg shadow-green-500/5' : 'bg-red-500/10 text-red-700 border border-red-500/20'}`}
                                >
                                    {status.type === 'success' ? <CheckCircle2 size={18} /> : <div className="w-2 h-2 rounded-full bg-red-500" />}
                                    {status.message}
                                </motion.div>
                            )}

                            <button
                                disabled={loading}
                                type="submit"
                                className="w-full py-5 bg-lw-dark text-white rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:bg-lw-green hover:shadow-2xl hover:shadow-lw-green/30 transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-4 relative overflow-hidden group"
                            >
                                <span className="relative z-10">{loading ? "Submitting..." : "Send Application"}</span>
                                {!loading && <ArrowRight size={18} className="relative z-10 transition-transform group-hover:translate-x-1" />}
                                {loading && <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>}
                            </button>
                        </form>
                    </motion.div>

                    {/* Floating elements for depth */}
                    <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-lw-green/5 blur-[80px] pointer-events-none rounded-full"></div>
                    <div className="absolute bottom-[20%] left-[10%] w-48 h-48 bg-lw-saffron/5 blur-[60px] pointer-events-none rounded-full"></div>
                </div>
            </main>
        </div>
    );
}
