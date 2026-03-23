"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Threads from "@/components/Threads";
import { motion, AnimatePresence } from "framer-motion";
import {
    BarChart3,
    MessageSquare,
    Users,
    LogOut,
    ChevronRight,
    Mail,
    FileText,
    Download,
    Clock,
    CheckCircle2,
    XCircle,
    AlertCircle,
    RefreshCw,
    Search,
    Menu as MenuIcon,
    Trash2,
    Globe
} from "lucide-react";

const Sidebar = ({ activeTab, setActiveTab, logout, isOpen, setIsOpen }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-lw-dark/40 backdrop-blur-sm z-[60] lg:hidden"
                    />
                )}
            </AnimatePresence>

            <motion.div
                initial={false}
                animate={mounted ? { x: (typeof window !== 'undefined' && window.innerWidth >= 1024) ? 0 : (isOpen ? 0 : -300) } : { x: -300 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`w-72 p-6 flex flex-col h-screen fixed left-0 top-0 z-[70] transition-all duration-300 lg:translate-x-0 lg:!transform-none ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
            >
                <div className="glass-surface-dark rounded-[2.5rem] flex-1 flex flex-col p-8 border-white/5 shadow-2xl overflow-hidden relative">
                    {/* Decorative Gradient Orb behind sidebar */}
                    <div className="absolute top-[-20%] left-[-20%] w-full h-full bg-lw-green/20 blur-[80px] pointer-events-none"></div>

                    <div className="mb-14 relative z-10 text-center px-4">
                        <div className="mb-6">
                            <Image
                                src="/logo.png"
                                alt="Lifewood"
                                width={160}
                                height={44}
                                className="mx-auto brightness-0 invert opacity-90 transition-all duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="h-[1px] w-12 bg-lw-green/30 mx-auto mb-4"></div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-white font-black">Admin Panel</div>
                    </div>

                    <nav className="space-y-3 flex-1 relative z-10">
                        <button
                            onClick={() => { setActiveTab("overview"); setIsOpen(false); }}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${activeTab === "overview" ? "glass-surface bg-white/20 text-white shadow-lg" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                        >
                            <div className={`p-2 rounded-lg ${activeTab === "overview" ? "bg-lw-green text-white" : "bg-white/5"}`}>
                                <BarChart3 size={18} />
                            </div>
                            <span className="font-bold text-sm">Overview</span>
                        </button>
                        <button
                            onClick={() => { setActiveTab("messages"); setIsOpen(false); }}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${activeTab === "messages" ? "glass-surface bg-white/20 text-white shadow-lg" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                        >
                            <div className={`p-2 rounded-lg ${activeTab === "messages" ? "bg-lw-green text-white" : "bg-white/5"}`}>
                                <MessageSquare size={18} />
                            </div>
                            <span className="font-bold text-sm">Messages</span>
                        </button>
                        <button
                            onClick={() => { setActiveTab("applications"); setIsOpen(false); }}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 ${activeTab === "applications" ? "glass-surface bg-white/20 text-white shadow-lg" : "text-white/70 hover:bg-white/5 hover:text-white"}`}
                        >
                            <div className={`p-2 rounded-lg ${activeTab === "applications" ? "bg-lw-green text-white" : "bg-white/5"}`}>
                                <Users size={18} />
                            </div>
                            <span className="font-bold text-sm">Applications</span>
                        </button>
                    </nav>

                    <button
                        onClick={logout}
                        className="mt-auto flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 text-white/70 hover:bg-red-500/10 hover:text-red-400 transition-all duration-300 relative z-10 group"
                    >
                        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-red-500/20 transition-colors">
                            <LogOut size={18} />
                        </div>
                        <span className="font-bold text-sm">Sign Out</span>
                    </button>
                </div>
            </motion.div>
        </>
    );
};

const Modal = ({ isOpen, onClose, title, children, className = "" }) => (
    <AnimatePresence>
        {isOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 lg:p-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-lw-dark/20 backdrop-blur-sm"
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className={`glass-surface rounded-[2.5rem] lg:rounded-[3rem] w-full max-w-3xl overflow-hidden relative z-10 ${className || 'shadow-glass'}`}
                >
                    <div className="flex justify-between items-center px-8 lg:px-10 py-6 lg:py-8">
                        <h3 className="text-xl lg:text-2xl font-black text-lw-dark tracking-tight">{title}</h3>
                        <button onClick={onClose} className="p-2 lg:p-3 bg-black/5 hover:bg-black/10 text-lw-dark rounded-full transition-all active:scale-90">
                            <XCircle size={22} />
                        </button>
                    </div>
                    <div className="p-8 lg:p-10 max-h-[75vh] overflow-y-auto custom-scrollbar">
                        {children}
                    </div>
                </motion.div>
            </div>
        )}
    </AnimatePresence>
);

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("overview");
    const [messages, setMessages] = useState([]);
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showReplyModal, setShowReplyModal] = useState(false);
    const [replyBody, setReplyBody] = useState("");
    const [sendingEmail, setSendingEmail] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("adminToken");
        if (!token) {
            router.push("/admin/login");
            return;
        }
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Use cache: 'no-store' to prevent stale data on Vercel
            const [msgRes, appRes] = await Promise.all([
                fetch("/api/contact", { cache: 'no-store' }),
                fetch("/api/applications", { cache: 'no-store' })
            ]);
            const [msgData, appData] = await Promise.all([msgRes.json(), appRes.json()]);
            setMessages(Array.isArray(msgData) ? msgData : []);
            setApplications(Array.isArray(appData) ? appData : []);
        } catch (err) {
            console.error("Failed to fetch dashboard data:", err);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
    };

    const viewResume = (base64Data, fileName) => {
        if (!base64Data) return;
        try {
            const byteCharacters = atob(base64Data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: 'application/pdf' });
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
        } catch (err) {
            console.error("Failed to open resume:", err);
            alert("Failed to open resume file.");
        }
    };

    const updateAppStatus = async (id, status) => {
        try {
            await fetch("/api/applications", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status })
            });
            fetchData();
        } catch (err) {
            alert("Failed to update status");
        }
    };

    const markMessageReplied = async (id) => {
        if (!id) return;
        console.log("Marking message as replied:", id);
        try {
            // Optimistic UI update for immediate feedback
            setMessages(prev => {
                const updated = prev.map(m => m.id === id ? { ...m, status: 'replied' } : m);
                console.log("Updated local messages state");
                return updated;
            });

            const res = await fetch(`/api/contact/${id}`, {
                method: "PATCH",
                cache: 'no-store'
            });

            console.log("PATCH response status:", res.status);

            // Await full data synchronization
            await fetchData();
            console.log("Data refetched after update");
        } catch (err) {
            console.error("Failed to mark message as replied:", err);
            alert("Failed to update message status");
            await fetchData(); // Rollback/Sync state on error
        }
    };

    const deleteApplication = async (id) => {
        if (!window.confirm("Are you sure you want to permanently delete this application? This action cannot be undone.")) return;

        try {
            const res = await fetch(`/api/applications/${id}`, {
                method: "DELETE"
            });
            if (res.ok) {
                fetchData();
            } else {
                alert("Failed to delete application.");
            }
        } catch (err) {
            alert("Error connecting to server.");
        }
    };

    const deleteMessage = async (id) => {
        if (!window.confirm("Are you sure you want to permanently delete this message? This action cannot be undone.")) return;

        try {
            const res = await fetch(`/api/contact/${id}`, {
                method: "DELETE"
            });
            if (res.ok) {
                fetchData();
            } else {
                alert("Failed to delete message.");
            }
        } catch (err) {
            alert("Error connecting to server.");
        }
    };

    const handleSendReply = async (e) => {
        e.preventDefault();
        setSendingEmail(true);
        const cleanSubject = (selectedItem.subject && selectedItem.subject.trim().length > 3)
            ? selectedItem.subject
            : (activeTab === "applications" ? "Your Application" : "Your Inquiry");

        try {
            const response = await fetch("/api/admin/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: selectedItem.email,
                    subject: `Re: ${cleanSubject}`,
                    message: replyBody,
                    name: selectedItem.name
                })
            });

            if (response.ok) {
                if (activeTab === "messages" || selectedItem.subject) {
                    await markMessageReplied(selectedItem.id);
                }
                alert("Email sent successfully!");
                setShowReplyModal(false);
                setReplyBody("");
            } else {
                alert("Failed to send email.");
            }
        } catch (err) {
            alert("Error connecting to server.");
        } finally {
            setSendingEmail(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "accepted": return "bg-green-500/10 text-green-700 border border-green-500/20";
            case "rejected": return "bg-red-500/10 text-red-700 border border-red-500/20";
            case "reviewing": return "bg-blue-500/10 text-blue-700 border border-blue-500/20";
            default: return "bg-lw-saffron/10 text-lw-saffron border border-lw-saffron/20";
        }
    };

    const filteredItems = (activeTab === "messages" ? messages : applications).filter(item =>
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (activeTab === "applications" && item.position?.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="min-h-screen bg-[#f8f9fa] relative overflow-hidden font-sans selection:bg-lw-green/20 selection:text-lw-dark">
            {/* Dynamic Threads Background */}
            <div className="fixed inset-0 z-0 opacity-60">
                <Threads
                    color={[0.015, 0.38, 0.25]}
                    amplitude={1.2}
                    distance={0.4}
                    enableMouseInteraction={true}
                />
            </div>

            {/* Background Blur Orbs */}
            <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-lw-green/10 blur-[120px] rounded-full z-0 animate-pulse"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-lw-saffron/5 blur-[100px] rounded-full z-0"></div>

            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                logout={logout}
                isOpen={isSidebarOpen}
                setIsOpen={setIsSidebarOpen}
            />

            <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "lg:ml-72" : "lg:ml-72"} p-4 lg:p-10 overflow-x-hidden relative z-10`}>
                <header className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12 mt-16 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-4 w-full lg:w-auto"
                    >
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="p-3 bg-white/40 backdrop-blur-md rounded-2xl lg:hidden active:scale-90 transition-all border border-black/5"
                        >
                            <MenuIcon size={24} />
                        </button>
                        <Link href="/" className="lg:hidden mx-auto">
                            <Image
                                src="/logo.png"
                                alt="Lifewood"
                                width={110}
                                height={30}
                                className="transition-transform duration-300 active:scale-105"
                            />
                        </Link>
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lw-green/10 text-lw-green text-[10px] font-black uppercase tracking-widest mb-4">
                                <span className="w-1.5 h-1.5 bg-lw-green rounded-full animate-pulse"></span>
                                {activeTab === "overview" ? "Dashboard Stats" : "Admin Overview"}
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-lw-dark capitalize">
                                {activeTab}
                            </h2>
                        </div>
                    </motion.div>

                    <div className="flex items-center gap-4 w-full lg:w-auto">
                        <div className="relative group flex-1 lg:flex-none">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-lw-dark/30 group-focus-within:text-lw-green transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search everything..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 pr-6 py-4 bg-white/40 backdrop-blur-md border border-black/5 rounded-2xl w-full lg:w-80 outline-none focus:bg-white focus:ring-4 focus:ring-lw-green/10 focus:border-lw-green/30 transition-all font-medium text-sm text-lw-dark placeholder-lw-dark/40 shadow-sm"
                            />
                        </div>
                        <button
                            onClick={fetchData}
                            className="p-4 bg-white/40 backdrop-blur-md border border-black/5 rounded-2xl text-lw-dark hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all group active:scale-95"
                        >
                            <RefreshCw size={20} className={loading ? "animate-spin text-lw-green" : "group-hover:rotate-180 transition-transform duration-500"} />
                        </button>
                    </div>
                </header>

                {/* Overview Statistics */}
                {activeTab === "overview" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-10"
                    >
                        {[
                            { title: "Total Messages", value: messages.length, icon: MessageSquare, color: "text-emerald-500", bg: "bg-emerald-500/15" },
                            { title: "Pending Replies", value: messages.filter(m => m.status !== 'replied').length, icon: AlertCircle, color: "text-amber-500", bg: "bg-amber-500/15" },
                            { title: "Total Applicants", value: applications.length, icon: Users, color: "text-sky-500", bg: "bg-sky-500/15" },
                            { title: "Review Required", value: applications.filter(a => a.status === 'pending').length, icon: FileText, color: "text-rose-500", bg: "bg-rose-500/15" }
                        ].map((stat, i) => (
                            <div key={i} className="glass-surface bg-white/40 backdrop-blur-md p-6 lg:p-7 rounded-[2rem] border border-black/5 shadow-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                                <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full ${stat.bg} blur-[60px] transition-all duration-700 group-hover:scale-150`}></div>
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className={`p-4 rounded-full ${stat.bg} ${stat.color} shadow-inner`}>
                                        <stat.icon size={22} strokeWidth={2.5} />
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <div className="text-4xl lg:text-5xl font-black text-lw-dark tracking-tighter mb-2">
                                        {loading ? <span className="animate-pulse">---</span> : stat.value}
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest text-lw-dark/40">{stat.title}</div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {activeTab === "overview" && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8"
                    >
                        {/* Recent Messages */}
                        <div className="glass-surface p-1 lg:p-2 rounded-[2.3rem] lg:rounded-[2.5rem] shadow-[0_0_40px_rgba(250,204,21,0.5)] border-white/40 overflow-hidden flex flex-col h-full bg-white/40 backdrop-blur-md">
                            <div className="px-8 py-6 border-b border-black/5 flex justify-between items-center bg-white/30 rounded-t-[2rem]">
                                <h3 className="text-xl font-black text-lw-dark">Recent Messages</h3>
                                <button onClick={() => setActiveTab("messages")} className="text-xs font-bold text-lw-green hover:underline">View All</button>
                            </div>
                            <div className="p-4 flex-1">
                                {messages.slice(0, 5).map(msg => (
                                    <div key={msg.id} className="p-4 border-b border-black/5 last:border-0 hover:bg-white/40 transition-colors rounded-xl flex justify-between items-start cursor-pointer" onClick={() => { setSelectedItem(msg); setShowViewModal(true); }}>
                                        <div>
                                            <div className="font-bold text-lw-dark">{msg.name}</div>
                                            <div className="text-xs text-lw-dark/50 truncate max-w-[200px]">{msg.subject}</div>
                                        </div>
                                        <div className="text-[10px] font-bold text-lw-dark/40 bg-black/5 px-2 py-1 rounded-md">
                                            {msg.createdAt || msg.submittedAt ? new Date(msg.createdAt || msg.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : '---'}
                                        </div>
                                    </div>
                                ))}
                                {messages.length === 0 && <div className="text-center p-8 text-lw-dark/40 text-sm font-bold">No recent messages</div>}
                            </div>
                        </div>

                        {/* Recent Applications */}
                        <div className="glass-surface p-1 lg:p-2 rounded-[2.3rem] lg:rounded-[2.5rem] shadow-[0_0_40px_rgba(250,204,21,0.5)] border-white/40 overflow-hidden flex flex-col h-full bg-white/40 backdrop-blur-md">
                            <div className="px-8 py-6 border-b border-black/5 flex justify-between items-center bg-white/30 rounded-t-[2rem]">
                                <h3 className="text-xl font-black text-lw-dark">Recent Applications</h3>
                                <button onClick={() => setActiveTab("applications")} className="text-xs font-bold text-lw-green hover:underline">View All</button>
                            </div>
                            <div className="p-4 flex-1">
                                {applications.slice(0, 5).map(app => (
                                    <div key={app.id} className="p-4 border-b border-black/5 last:border-0 hover:bg-white/40 transition-colors rounded-xl flex justify-between items-start cursor-pointer" onClick={() => { setSelectedItem(app); setShowViewModal(true); }}>
                                        <div>
                                            <div className="font-bold text-lw-dark">{app.name}</div>
                                            <div className="text-xs text-lw-green font-black uppercase tracking-wider">{app.position}</div>
                                        </div>
                                        <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${app.status === 'pending' ? 'bg-purple-500/10 text-purple-600' : app.status === 'accepted' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-black/5 text-lw-dark/40'}`}>
                                            {app.status || 'pending'}
                                        </div>
                                    </div>
                                ))}
                                {applications.length === 0 && <div className="text-center p-8 text-lw-dark/40 text-sm font-bold">No recent applications</div>}
                            </div>
                        </div>
                    </motion.div>
                )}

                {loading ? (
                    <div className="flex h-96 items-center justify-center">
                        <div className="flex flex-col items-center gap-6">
                            <div className="w-16 h-16 border-[6px] border-lw-green/20 border-t-lw-green rounded-full animate-spin"></div>
                            <div className="text-sm font-black uppercase tracking-widest text-lw-green/40">Fetching Data...</div>
                        </div>
                    </div>
                ) : activeTab !== "overview" ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-surface p-1 lg:p-2 rounded-[2.3rem] lg:rounded-[2.5rem] shadow-[0_0_40px_rgba(250,204,21,0.5)] border-white/40 overflow-hidden"
                    >
                        <div className="overflow-x-auto custom-scrollbar rounded-[2rem]">
                            <table className="w-full text-left min-w-[700px]">
                                <thead className="bg-black/[0.03] border-b border-black/5">
                                    <tr>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-lw-dark/40">Details</th>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-lw-dark/40">{activeTab === "messages" ? "Subject" : "Position"}</th>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-lw-dark/40">Timestamp</th>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-lw-dark/40">Status</th>
                                        <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-lw-dark/40">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    {filteredItems.map((item) => (
                                        <tr
                                            key={item.id}
                                            className="group hover:bg-white/40 transition-all cursor-pointer transition-colors"
                                            onClick={() => { setSelectedItem(item); setShowViewModal(true); }}
                                        >
                                            <td className="px-8 py-7">
                                                <div className="font-black text-lw-dark leading-tight">{item.name}</div>
                                                <div className="text-xs text-lw-dark/50 mt-1 font-medium">{item.email}</div>
                                            </td>
                                            <td className="px-8 py-7">
                                                {activeTab === "messages" ? (
                                                    <div className="max-w-xs">
                                                        <div className="font-bold text-sm text-lw-dark truncate">{item.subject}</div>
                                                        <p className="text-[11px] text-lw-dark/40 font-medium italic mt-0.5 truncate">{item.message}</p>
                                                    </div>
                                                ) : (
                                                    <span className="px-3 py-1 bg-lw-green/5 text-lw-green rounded-lg text-xs font-black uppercase tracking-widest">
                                                        {item.position}
                                                    </span>
                                                )}
                                            </td>
                                            <td className="px-8 py-7">
                                                <div className="flex items-center gap-2 text-lw-dark/50 font-bold text-xs">
                                                    <Clock size={12} className="text-lw-green/40" />
                                                    {item.createdAt || item.submittedAt ? new Date(item.createdAt || item.submittedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'}
                                                </div>
                                            </td>
                                            <td className="px-8 py-7" onClick={(e) => e.stopPropagation()}>
                                                {activeTab === "messages" ? (
                                                    <span className={`px-4 py-1.5 rounded-full text-[10px] items-center gap-2 inline-flex font-black uppercase tracking-widest ${item.status === 'replied' ? 'bg-green-500/10 text-green-700 border border-green-500/20' : 'bg-blue-500/10 text-blue-700 border border-blue-500/20'}`}>
                                                        <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'replied' ? 'bg-green-500' : 'bg-blue-500'}`}></span>
                                                        {item.status}
                                                    </span>
                                                ) : (
                                                    <select
                                                        value={item.status || 'pending'}
                                                        onChange={(e) => updateAppStatus(item.id, e.target.value)}
                                                        onClick={(e) => e.stopPropagation()}
                                                        className={`text-[10px] font-black uppercase tracking-widest border-none focus:ring-4 focus:ring-lw-green/10 rounded-full px-4 py-1.5 cursor-pointer appearance-none ${getStatusColor(item.status)}`}
                                                    >
                                                        <option value="pending">Pending</option>
                                                        <option value="reviewing">Reviewing</option>
                                                        <option value="accepted">Accepted</option>
                                                        <option value="rejected">Rejected</option>
                                                    </select>
                                                )}
                                            </td>
                                            <td className="px-8 py-7" onClick={(e) => e.stopPropagation()}>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setSelectedItem(item);
                                                            setReplyBody(`Thank you for reaching out. I've received your message and appreciate you taking the time to contact us.\n\nI will review your concern and get back to you as soon as possible.\n\nIf you have any additional details to share, feel free to reply to this email.`);
                                                            setShowReplyModal(true);
                                                        }}
                                                        className="p-3 bg-white/60 border border-black/5 hover:bg-lw-dark hover:text-white rounded-2xl shadow-sm transition-all duration-300 active:scale-90"
                                                        title="Send Email"
                                                    >
                                                        <Mail size={16} />
                                                    </button>
                                                    {activeTab === "messages" && item.status !== 'replied' && (
                                                        <button
                                                            onClick={() => markMessageReplied(item.id)}
                                                            className="p-3 bg-white/60 border border-black/5 hover:bg-green-600 hover:text-white rounded-2xl shadow-sm transition-all duration-300 active:scale-90"
                                                            title="Mark as Replied"
                                                        >
                                                            <CheckCircle2 size={16} />
                                                        </button>
                                                    )}
                                                    {activeTab === "applications" && (
                                                        <>
                                                            {item.resumeURL ? (
                                                                <a
                                                                    href={item.resumeURL}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="p-3 bg-white/60 border border-black/5 hover:bg-blue-600 hover:text-white rounded-2xl shadow-sm transition-all duration-300 active:scale-90"
                                                                    title="Open Resume Link"
                                                                >
                                                                    <Globe size={16} />
                                                                </a>
                                                            ) : item.resumeBase64 ? (
                                                                <button
                                                                    onClick={() => viewResume(item.resumeBase64, `${item.name}-Resume.pdf`)}
                                                                    className="p-3 bg-blue-600/10 text-blue-600 rounded-2xl hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                                                                    title="View Stored Resume"
                                                                >
                                                                    <FileText size={16} />
                                                                </button>
                                                            ) : (
                                                                <div className="p-3 bg-black/5 text-lw-dark/30 rounded-2xl" title="Older Application: Check Email Attachment">
                                                                    <FileText size={16} />
                                                                </div>
                                                            )}
                                                            {item.status !== "accepted" && item.status !== "rejected" && (
                                                                <div className="flex gap-2 border-l border-black/10 pl-2">
                                                                    <button
                                                                        onClick={() => updateAppStatus(item.id, 'accepted')}
                                                                        className="p-3 bg-white/60 border border-black/5 hover:bg-green-600 hover:text-white text-green-600 rounded-2xl shadow-sm transition-all duration-300 active:scale-90"
                                                                        title="Accept Application"
                                                                    >
                                                                        <CheckCircle2 size={16} />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => updateAppStatus(item.id, 'rejected')}
                                                                        className="p-3 bg-white/60 border border-black/5 hover:bg-red-600 hover:text-white text-red-600 rounded-2xl shadow-sm transition-all duration-300 active:scale-90"
                                                                        title="Reject Application"
                                                                    >
                                                                        <XCircle size={16} />
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </>
                                                    )}
                                                    <div className="border-l border-black/10 pl-2 ml-1">
                                                        <button
                                                            onClick={() => activeTab === 'applications' ? deleteApplication(item.id) : deleteMessage(item.id)}
                                                            className="p-3 bg-white/60 border border-black/5 hover:bg-red-600 hover:text-white text-lw-dark/40 rounded-2xl shadow-sm transition-all duration-300 active:scale-90"
                                                            title="Delete Permanently"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    {filteredItems.length === 0 && (
                                        <tr><td colSpan="5" className="px-8 py-20 text-center font-bold text-lw-dark/20 uppercase tracking-[0.3em]">No records found</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                ) : null}
            </main>

            {/* View Details Modal */}
            <Modal
                isOpen={showViewModal}
                onClose={() => setShowViewModal(false)}
                title={activeTab === "messages" ? "Message Summary" : "Candidate Profile"}
                className="shadow-[0_0_40px_rgba(250,204,21,0.5)]"
            >
                {selectedItem && (
                    <div className="space-y-8 lg:space-y-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                            <div className="p-5 lg:p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm transition-all hover:bg-white/60 group">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-1 group-hover:text-lw-green transition-colors font-sans">Full Name</label>
                                <p className="text-lg lg:text-xl font-black text-lw-dark tracking-tight">{selectedItem.name}</p>
                            </div>
                            <div className="p-5 lg:p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm transition-all hover:bg-white/60 group">
                                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-1 group-hover:text-lw-green transition-colors font-sans">Email Address</label>
                                <p className="text-lg lg:text-xl font-black text-lw-dark truncate tracking-tight">{selectedItem.email}</p>
                            </div>
                        </div>

                        {activeTab === "messages" ? (
                            <>
                                <div className="p-5 lg:p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm transition-all hover:bg-white/60 group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-1 group-hover:text-lw-green transition-colors font-sans">Subject Line</label>
                                    <p className="text-lg lg:text-xl font-bold text-lw-dark tracking-tight">{selectedItem.subject}</p>
                                </div>
                                <div className="p-6 lg:p-8 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-sm border border-white/60 transition-all hover:bg-white/80 group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3 block ml-1 group-hover:text-lw-green transition-colors font-sans">Message Body</label>
                                    <p className="text-lw-dark text-base lg:text-lg italic leading-relaxed whitespace-pre-wrap">"{selectedItem.message}"</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                                    <div className="p-5 lg:p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm transition-all hover:bg-white/60 group">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-1 group-hover:text-lw-green transition-colors font-sans">Phone Number</label>
                                        <p className="text-lg lg:text-xl font-black text-lw-dark tracking-tight">{selectedItem.phone}</p>
                                    </div>
                                    <div className="p-5 lg:p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm transition-all hover:bg-white/60 group">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-1 group-hover:text-lw-green transition-colors font-sans">Desired Position</label>
                                        <p className="text-lg lg:text-xl font-black text-lw-green tracking-tight">{selectedItem.position}</p>
                                    </div>
                                </div>
                                {selectedItem.portfolio && (
                                    <div className="p-5 lg:p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm transition-all hover:bg-white/60 group">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-1 group-hover:text-lw-green transition-colors font-sans">Portfolio URL</label>
                                        <a href={selectedItem.portfolio} target="_blank" className="text-base lg:text-lg font-bold text-blue-600 hover:underline flex items-center gap-2 truncate tracking-tight">
                                            {selectedItem.portfolio.replace(/^https?:\/\//, '')} <ArrowUpRight size={16} />
                                        </a>
                                    </div>
                                )}
                                <div className="p-6 lg:p-8 bg-white/60 backdrop-blur-md rounded-[2.5rem] shadow-sm border border-white/60 transition-all hover:bg-white/80 group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-3 block ml-1 group-hover:text-lw-green transition-colors font-sans">Cover Letter</label>
                                    <p className="text-lw-dark text-base lg:text-lg leading-relaxed whitespace-pre-wrap italic">"{selectedItem.message}"</p>
                                </div>
                                <div className="pt-4 lg:pt-6">
                                    {selectedItem.resumeURL ? (
                                        <a
                                            href={selectedItem.resumeURL}
                                            target="_blank"
                                            className="inline-flex items-center gap-3 px-8 lg:px-10 py-4 lg:py-5 bg-lw-dark text-white rounded-3xl font-black text-[10px] lg:text-sm uppercase tracking-widest hover:bg-lw-green transition-all shadow-xl shadow-lw-dark/10 hover:shadow-lw-green/20"
                                        >
                                            <Globe size={18} /> View Resume Link
                                        </a>
                                    ) : (
                                        <div className="p-5 lg:p-6 bg-amber-50 rounded-3xl border border-amber-200 text-amber-800 flex items-center gap-4">
                                            <AlertCircle className="text-amber-500" size={24} />
                                            <div>
                                                <p className="font-black text-xs uppercase tracking-widest">PDF Attachment</p>
                                                <p className="text-sm font-bold opacity-80">This candidate's resume was sent directly to your Gmail inbox as a PDF attachment.</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                        <div className="pt-8 lg:pt-10 flex flex-col lg:flex-row justify-end gap-4 lg:gap-5 border-t border-black/5">
                            <button
                                onClick={() => { setShowViewModal(false); setShowReplyModal(true); }}
                                className="w-full lg:w-auto px-10 py-5 bg-lw-green text-white rounded-[2rem] font-black text-[10px] lg:text-sm uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-lw-green/20"
                            >
                                Send Reply
                            </button>
                        </div>
                    </div>
                )}
            </Modal>

            {/* Reply Modal */}
            <Modal
                isOpen={showReplyModal}
                onClose={() => setShowReplyModal(false)}
                title={`Reply to ${selectedItem?.name}`}
            >
                {selectedItem && (
                    <form onSubmit={handleSendReply} className="space-y-8 lg:space-y-10">
                        <div className="p-5 lg:p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm transition-all hover:bg-white/60 group">
                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-2 block ml-1 group-hover:text-lw-green transition-colors font-sans">Recipient Email</label>
                            <p className="text-lg lg:text-xl font-black text-lw-dark tracking-tight">{selectedItem.email}</p>
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 block font-sans">Craft Your Response</label>
                            <textarea
                                required
                                rows={8}
                                value={replyBody}
                                onChange={(e) => setReplyBody(e.target.value)}
                                className="w-full p-6 lg:p-8 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2.5rem] outline-none focus:bg-white/60 focus:ring-8 focus:ring-lw-green/10 focus:border-lw-green/30 transition-all font-medium text-base lg:text-lg leading-relaxed shadow-inner"
                                placeholder="Type your professional reply here..."
                            />
                        </div>
                        <div className="flex flex-col-reverse lg:flex-row justify-end gap-4 lg:gap-5">
                            <button
                                type="button"
                                onClick={() => setShowReplyModal(false)}
                                className="px-10 py-5 text-lw-dark/40 font-black text-[10px] lg:text-sm uppercase tracking-widest hover:text-lw-dark transition-colors"
                            >
                                Discard
                            </button>
                            <button
                                disabled={sendingEmail}
                                type="submit"
                                className="px-10 lg:px-12 py-5 bg-lw-dark text-white rounded-[2rem] font-black text-[10px] lg:text-sm uppercase tracking-widest hover:bg-lw-green transition-all shadow-xl shadow-lw-dark/10 hover:shadow-lw-green/20 disabled:opacity-50 flex items-center justify-center gap-3"
                            >
                                {sendingEmail ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Dispatching...</span>
                                    </>
                                ) : (
                                    <>
                                        <Mail size={18} />
                                        <span>Transmit Reply</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </Modal>
        </div>
    );
}

function ArrowUpRight({ size, className }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M7 7h10v10"></path>
            <path d="M7 17L17 7"></path>
        </svg>
    );
}
