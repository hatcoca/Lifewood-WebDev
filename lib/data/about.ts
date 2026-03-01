import { Globe, Heart, Cpu, Shield, Goal, Eye, Sparkles } from "lucide-react"

export const coreValues = [
  {
    icon: Globe,
    char: "D",
    title: "Diversity",
    description: "We celebrate differences in belief, philosophy and ways of life, because they bring unique perspectives and ideas that encourage everyone to move forward."
  },
  {
    icon: Heart,
    char: "C",
    title: "Caring",
    description: "We care for every person deeply and equally, because without care work becomes meaningless."
  },
  {
    icon: Cpu,
    char: "I",
    title: "Innovation",
    description: "Innovation is at the heart of all we do, enriching our lives and challenging us to continually improve ourselves and our service."
  },
  {
    icon: Shield,
    char: "I",
    title: "Integrity",
    description: "We are dedicated to act ethically and sustainably in everything we do. More than just the bare minimum. It is the basis of our existence as a company."
  }
]

export const aboutContent = {
  mission: {
    title: "Our Mission",
    description: "To develop and deploy cutting edge AI technologies that solve real-world problems, empower communities, and advance sustainable practices. We are committed to fostering a culture of innovation, collaborating with stakeholders across sectors, and making a meaningful impact on society and the environment.",
    icon: Goal
  },
  vision: {
    title: "Our Vision",
    description: "To be the global champion in AI data solutions, igniting a culture of innovation and sustainability that enriches lives and transforms communities worldwide.",
    icon: Eye
  },
  intro: {
    title: "More than a data company",
    subtitle: "What drives us today, and what inspires us for tomorrow",
    description: "At Lifewood, we empower our company and our clients to realise the transformative power of AI: Bringing big data to life, launching new ways of thinking, innovating, learning, and doing."
  }
}

// Alias for backward compatibility during redesign
export const pillars = coreValues.map(v => ({
  ...v,
  summary: v.description.slice(0, 50) + "...",
  icon: v.icon
}))
