import { Database, Brain, Layers, ShieldCheck } from "lucide-react"

export const services = [
  {
    icon: Database,
    title: "Data Annotation",
    summary: "High-quality, human-powered data labeling across modalities.",
    description:
      "Our data annotation services span text, image, audio, and video modalities with multi-language support from native speakers worldwide. We handle everything from text classification and image segmentation to NER tagging and sentiment analysis -- delivering the precision AI models demand.",
    features: ["Text classification", "Image segmentation", "NER tagging", "Sentiment analysis", "Audio transcription", "Video labeling"],
    accent: "var(--lw-green)",
  },
  {
    icon: Brain,
    title: "AI Training Data",
    summary: "Production-grade datasets for ML model development.",
    description:
      "Custom datasets tailored to your specific use case, designed to accelerate machine learning model development. We provide bias detection, benchmark data creation, and model fine-tuning support -- ensuring your AI learns from the highest-quality sources.",
    features: ["Custom datasets", "Model fine-tuning", "Bias detection", "Benchmark data", "RLHF data", "Prompt engineering"],
    accent: "var(--lw-saffron)",
  },
  {
    icon: Layers,
    title: "Data Processing",
    summary: "End-to-end pipeline management at massive scale.",
    description:
      "From data collection to delivery, our scalable infrastructure handles millions of data points daily. We provide data cleansing, format conversion, pipeline automation, and real-time processing capabilities that keep your AI operations running 24/7.",
    features: ["Data cleansing", "Format conversion", "Pipeline automation", "Real-time processing", "API integration", "Cloud deployment"],
    accent: "var(--lw-green)",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    summary: "Multi-tier QC processes with 98%+ accuracy rates.",
    description:
      "Our rigorous quality control processes ensure accuracy rates above 98% with continuous monitoring and improvement workflows. Every data point passes through multiple validation layers with comprehensive audit trails and compliance checks.",
    features: ["Multi-tier QC", "Accuracy tracking", "Audit trails", "Compliance checks", "SLA monitoring", "Real-time dashboards"],
    accent: "var(--lw-earth)",
  },
]
