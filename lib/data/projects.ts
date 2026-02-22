import { Car, HeartPulse, Landmark, Smartphone } from "lucide-react"

export const projects = [
  {
    icon: Car,
    industry: "Automotive",
    title: "Autonomous vehicle training",
    summary: "Labeled 12M+ images for self-driving perception models.",
    description:
      "We partnered with a leading automotive OEM to label over 12 million images for self-driving perception models. Our team of 200+ annotators delivered pixel-perfect semantic segmentation, 3D bounding boxes, and lane markings across diverse driving conditions -- achieving 99.2% accuracy with a 3-week turnaround.",
    stats: ["12M+ images", "99.2% accuracy", "200+ annotators"],
  },
  {
    icon: HeartPulse,
    industry: "Healthcare",
    title: "Medical imaging AI",
    summary: "Annotated radiology scans for diagnostic AI systems.",
    description:
      "Supporting a global healthtech company, our medical annotation team labeled thousands of radiology scans (CT, MRI, X-ray) with expert-verified annotations. This enabled the development of diagnostic AI that can detect early-stage anomalies with clinical-grade precision, now deployed in 15+ hospitals across Asia.",
    stats: ["50K+ scans", "Clinical-grade QA", "15+ hospitals"],
  },
  {
    icon: Landmark,
    industry: "Finance",
    title: "NLP for financial compliance",
    summary: "Processed multilingual documents for regulatory analysis.",
    description:
      "We built a custom NLP training dataset for a Southeast Asian bank's compliance system. Our multilingual team processed financial documents across 8 languages, tagging entities, classifying risk factors, and flagging regulatory triggers -- reducing the bank's manual review workload by 70%.",
    stats: ["8 languages", "70% time saved", "500K documents"],
  },
  {
    icon: Smartphone,
    industry: "Technology",
    title: "Voice assistant training",
    summary: "Curated multilingual speech data for conversational AI.",
    description:
      "For a major tech platform, we curated 10,000+ hours of multilingual speech data across 12 Southeast Asian languages and dialects. Our team handled transcription, intent labeling, and sentiment tagging -- powering a voice assistant that serves over 50 million users daily.",
    stats: ["10K+ hours", "12 languages", "50M+ users"],
  },
]
