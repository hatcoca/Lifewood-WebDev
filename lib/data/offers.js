import { Database, Mic, Car, Play, Search, Globe, Languages, Zap, Layout, ShieldCheck, Layers, Sparkles, TrendingUp, Cpu, Monitor, Activity, Shield } from "lucide-react"

export const offersData = [
    {
        id: "data-servicing",
        slug: "data-servicing",
        type: "Type A",
        title: "Data Servicing",
        subtitle: "Global Data Engineering",
        color: "var(--lw-green)",
        image: "/images/offers/data-servicing.png",
        video: "https://player.vimeo.com/external/370331493.sd.mp4?s=7b0cd517862ee37812e947c6a992e2dc7b45f442&profile_id=139&oauth2_token_id=57447761",
        icon: Database,
        description: "End-to-end data services specializing in multi-language datasets, including document capture, data collection and preparation, extraction, cleaning, labeling, annotation, quality assurance, and formatting.",
        features: ["Multi-language Datasets", "Document Capture", "Industrial Extraction", "Quality Assurance"],

        objective: {
            number: "01",
            label: "Operational Objective",
            title: "Ground Truth Engineering",
            description: "Providing the essential 'ground truth' training data for global LLMs. We convert raw physical and digital inputs into high-precision datasets.",
            list: ["Ground Truth Labeling", "Multi-language Capture", "Data Structuring"]
        },
        solution: {
            number: "02",
            label: "Process Strategy",
            title: "Lifewood Engineering Loop",
            description: "Every dataset undergo a rigorous 'Process Engineering' cycle, ensuring that multi-language nuances are preserved with industrial-grade accuracy.",
            features: [
                { title: "Precision Capture", desc: "Surgical document extraction.", icon: Layers },
                { title: "Nuance Cleanup", desc: "Multi-tier cleaning pipelines.", icon: Activity },
                { title: "Expert Labeling", desc: "Human-in-the-loop validation.", icon: Shield },
                { title: "Format Mastery", desc: "Seamless delivery into AI models.", icon: Cpu }
            ]
        },
        results: {
            number: "03",
            label: "Global Reach",
            title: "Excellence at Scale",
            description: "Engineered excellence delivered across 100+ languages, providing the rock-solid foundation for the world's leading AI models.",
            stats: [
                { label: "Accuracy", value: "99.9%" },
                { label: "Scale", value: "Industrial" },
                { label: "Languages", value: "100+" }
            ]
        }
    },
    {
        id: "horizontal-llm",
        slug: "horizontal-llm",
        type: "Type B",
        title: "Horizontal LLM Data",
        subtitle: "Multimodal Ground Truth",
        color: "#4f46e5",
        image: "/images/offers/audio-llm.png",
        video: "https://player.vimeo.com/external/403756724.sd.mp4?s=d0db588725f053229b35bc9f18b528e1d5db7595&profile_id=139&oauth2_token_id=57447761",
        icon: Mic,
        description: "Comprehensive AI data solutions that cover the entire spectrum from data collection and annotation to model testing. Creating multimodal datasets for deep learning, large language models.",
        features: ["Multimodal Datasets", "Voice Collection", "Model Evaluation", "Neural Training"],

        objective: {
            number: "01",
            label: "Strategic Focus",
            title: "The Linguistic Foundation",
            description: "Establishing the primary 'ground truth' for horizontal LLM training through massive, accurate linguistic data collection.",
            list: ["Voice Ground Truth", "Global Audio Capture", "Linguistic Nuance"]
        },
        solution: {
            number: "02",
            label: "Methodology",
            title: "Global Human Infrastructure",
            description: "Deploying Lifewood's massive human network to capture diverse data domains, refined by our core Process Engineering team.",
            features: [
                { title: "Native Capture", desc: "Authentic multi-country audio.", icon: Globe },
                { title: "Domain Expertise", desc: "9 specialized data domains.", icon: Zap },
                { title: "Rigorous Transcribing", desc: "Pixel-perfect text alignment.", icon: Monitor },
                { title: "Prompt Validation", desc: "RLHF-ready data pipelines.", icon: Sparkles }
            ]
        },
        results: {
            number: "03",
            label: "Impact",
            title: "Performance Ready",
            description: "Datasets optimized for zero-shot and few-shot learning, accelerating the path from raw collection to model deployment.",
            stats: [
                { label: "Countries", value: "23+" },
                { label: "Data Domains", value: "9" },
                { label: "LLM Ready", value: "100%" }
            ]
        }
    },
    {
        id: "vertical-llm",
        slug: "vertical-llm",
        type: "Type C",
        title: "Vertical LLM Data",
        subtitle: "Industrial Sector Intelligence",
        color: "#10b981",
        image: "/images/offers/autonomous-vertical.png",
        video: "https://player.vimeo.com/external/459389137.sd.mp4?s=88486950e39c4e20f1882d2eb05f00e99f187318&profile_id=139&oauth2_token_id=57447761",
        icon: Car,
        description: "AI data solutions across specific industry verticals including autonomous driving data annotation, in-vehicle data collection and specialized data services for industry, enterprise or private LLM.",
        features: ["Autonomous Driving", "Private Enterprise LLM", "3D Lidar Point Clouds", "Sector Specialization"],

        objective: {
            number: "01",
            label: "Ground Truth",
            title: "Sector-Specific Precision",
            description: "Providing high-fidelity ground truth for critical industrial verticals where failure is not an option, specifically in autonomous transit.",
            list: ["Critical Point Clouds", "In-Vehicle Capture", "Private LLM Data"]
        },
        solution: {
            number: "02",
            label: "Engineering",
            title: "Specialized Process Centers",
            description: "Lifewood centers in Malaysia and Indonesia operate under a unified Engineering Loop to deliver consistent, verticalized data solutions.",
            features: [
                { title: "Vertical Logic", desc: "Industry-specific rulesets.", icon: Cpu },
                { title: "3D Spatial Data", desc: "Lidar and depth annotation.", icon: Sparkles },
                { title: "Safety Critical", desc: "Zero-tolerance QA protocols.", icon: ShieldCheck },
                { title: "Edge Case Focus", desc: "Identifying rare vertical data.", icon: Layers }
            ]
        },
        results: {
            number: "03",
            label: "Scale",
            title: "Validated Excellence",
            description: "Successfully scaled autonomous driving and private enterprise data operations to handle petabyte-scale industrial requirements.",
            stats: [
                { label: "Industrial QA", value: "99.9%" },
                { label: "Centers", value: "Global" },
                { label: "Edge Cases", value: "Deep Dive" }
            ]
        }
    },
    {
        id: "aigc",
        slug: "aigc",
        type: "Type D",
        title: "AIGC Production",
        subtitle: "The Future of Communication",
        color: "var(--lw-saffron)",
        image: "/images/offers/aigc-production.png",
        video: "https://player.vimeo.com/external/494354719.sd.mp4?s=c83759392e29330107e3a9856ccb9793132bb410&profile_id=139&oauth2_token_id=57447761",
        icon: Play,
        description: "Lifewood's early adoption of Al tools has seen the company rapidly evolve the use of Al generated content, which has been integrated into video production for the company's communication requirements. This has been enormously successful, and these text, voice, image and video skills that comprise AIGC production, combined with more traditional production methods and our story development skills, are now being sought by other companies.",
        features: ["AI Video Production", "Story Mastery", "Global Communication", "Generative Skills"],

        objective: {
            number: "01",
            label: "Evolution",
            title: "Beyond Traditional Media",
            description: "Evolving from data provider to AI creator. Integrating AIGC into the core of corporate communication and storytelling.",
            list: ["Creative Evolution", "AI Tool Adoption", "Global Benchmarking"]
        },
        solution: {
            number: "02",
            label: "Creation",
            title: "The Hybrid Model",
            description: "Combining traditional production mastery with generative AI speed to yield 'enormously successful' communication results.",
            features: [
                { title: "AIGC Integration", desc: "Text, voice, image, video.", icon: Monitor },
                { title: "Story Development", desc: "Deep cultural narrative focus.", icon: Sparkles },
                { title: "Skill Convergence", desc: "AI tools + Human Mastery.", icon: Globe },
                { title: "Client Delivery", desc: "Industrialized creative flow.", icon: Layout }
            ]
        },
        results: {
            number: "03",
            label: "Success",
            title: "Proven Impact",
            description: "AIGC production methods that are now sought by external enterprises for their own communication requirements.",
            stats: [
                { label: "Market Demand", value: "High" },
                { label: "Efficiency", value: "Exponential" },
                { label: "Mediums", value: "All" }
            ]
        }
    }
]
