"use client"

import { ArrowLeft, ArrowRight, Database, BrainCircuit, Car, Headset, Mic, Eye, Network } from "lucide-react"
import { useRef, useState } from "react"

const projects = [
  {
    icon: Database,
    industry: "Data Solutions",
    title: "AI Data Extraction",
    summary: "Optimized acquisition of image and text from multiple sources.",
    description: [
      "Using AI, we optimize the acquisition of image and text from multiple sources. Techniques include onsite scanning, drone photography, negotiation with archives and the formation of alliances with corporations, religious organizations and governments."
    ],
    stats: ["Image & Text", "Multiple sources", "AI-optimized"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: BrainCircuit,
    industry: "Machine Learning",
    title: "Machine Learning Enablement",
    summary: "Flexible data solutions for complex ML models.",
    description: [
      "From simple data to deep learning, our data solutions are highly flexible and can enable a wide variety of ML systems, no matter how complex the model."
    ],
    stats: ["Flexible solutions", "Deep learning", "Model training"],
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Car,
    industry: "Automotive",
    title: "Autonomous Driving Technology",
    summary: "Precision data labelling for cognitive driving systems.",
    description: [
      "Our expertise in precision data labelling lays the groundwork for AI, so that it can process and adapt to the complexities of real-world conditions. We have implemented a diverse mapping methodology, that employs a wide range of data types, including 2D and 3D models, and combinations of both, to create a fully visualized cognitive driving system.",
      "Millions of images, videos and mapping data were annotated, effectively transitioning this technology from theoretical models to real-world applications - a significant leap forward for autonomous transport.",
      "Lifewood remains at the forefront of this technology, pioneering the evolution of safe, efficient autonomous driving solutions."
    ],
    stats: ["2D & 3D models", "Millions annotated", "Safe transport"],
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Headset,
    industry: "Customer Success",
    title: "AI-Enabled Customer Service",
    summary: "Personalized, proactive experiences driving customer engagement.",
    description: [
      "AI-enabled customer service is now the quickest and most effective route for institutions to deliver personalized, proactive experiences that drive customer engagement. AI powered services can increase customer engagement, multiplying cross-sell and upsell opportunities. Guided by our experts AI customer service can transform customer relationships creating an improved cycle of service, satisfaction and increased customer engagement."
    ],
    stats: ["Personalized UX", "Increased engagement", "Cross-sell/upsell"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Mic,
    industry: "Language Tech",
    title: "Natural Language Processing and Speech Acquisition",
    summary: "Solutions in over 50 language capabilities and robust dialect capturing.",
    description: [
      "We have partnered with some of the world's most advanced companies in NLP development. With a managed workforce that spans the globe, we offer solutions in over 50 language capabilities and can assess various dialects and accents for both text and audio data. We specialize in collecting and transcribing recordings from native speakers. This has involved tens of thousands of conversations, a scale made possible by our expertise in adapting industrial processes and our integration with AI."
    ],
    stats: ["50+ Languages", "Text & Audio", "Native transcription"],
    image: "https://images.unsplash.com/photo-1589254066213-a0c9dc853511?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Eye,
    industry: "AI Vision",
    title: "Computer Vision (CV)",
    summary: "Total data solutions enabling machines to interpret visual information.",
    description: [
      "Training AI to see and understand the world requires a high volume of quality training data. Lifewood provides total data solutions for your CV development from collection to annotation to classification and more, for video and image datasets enabling machines to interpret visual information. We have experience in a wide variety of applications including autonomous vehicles, farm monitoring, face recognition and more."
    ],
    stats: ["Video & Image", "Collection to Class.", "Diverse applications"],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=2000",
  },
  {
    icon: Network,
    industry: "Archives & Records",
    title: "Genealogy",
    summary: "18+ years of conserving family histories using AI.",
    description: [
      "Powered by AI, Lifewood processes genealogical material at speed and scale, to conserve and illuminate family histories, national archives, corporate lists and records of all types. Lifewood has more than 18 years of experience capturing, scanning and processing genealogical data. In fact, Lifewood started with genealogy data as its core business, so that over the years we have accumulated vast knowledge in diverse types of genealogy indexing.",
      "We have worked with all the major genealogy companies and have extensive experience in transcribing and indexing genealogical content in a wide variety of formats, including tabular, pre-printed forms and paragraph-style records.",
      "Working across borders, with offices on every continent, our ability with multi-language projects has built an extensive capability spanning more than 50 languages and associated dialects. Now, powered by AI and the latest inter-office communication systems, we are transforming ever more efficient ways to service our clients, while keeping humanity at the centre of our activity.",
      "Genealogical material that we have experience with includes:",
      "• Census",
      "• Vital - BMD",
      "• Church and Parish Registers",
      "• Passenger Lists",
      "• Naturalisation",
      "• Military Records",
      "• Legal Records",
      "• Yearbooks"
    ],
    stats: ["18+ Years exp.", "Major genealogy partners", "50+ Languages"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=2000",
  },
]

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerLeft = container.getBoundingClientRect().left;
    let minDiff = Infinity;
    let newIndex = 0;

    const children = Array.from(container.children);
    children.forEach((child, i) => {
      const diff = Math.abs(child.getBoundingClientRect().left - containerLeft);
      if (diff < minDiff) {
        minDiff = diff;
        newIndex = i;
      }
    });

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const card = scrollRef.current.firstElementChild as HTMLElement;
      const gap = window.innerWidth >= 768 ? 24 : 16;
      const scrollAmount = card ? card.offsetWidth + gap : 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="projects" className="bg-[var(--lw-sea-salt)] py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--lw-saffron)]">
            Projects
          </span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[var(--lw-dark)] sm:text-4xl lg:text-[2.65rem]">
            What we currently handle
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--lw-dark)]/55">
            From building AI datasets in diverse languages and environments, to developing platforms that enhance productivity and open new opportunities in under-resourced economies, you’ll see how Lifewood is shaping the future  with innovation, integrity and a focus on people.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--lw-dark)]/[0.08] bg-[var(--lw-white)] text-[var(--lw-dark)] transition-all duration-300 hover:border-[var(--lw-green)] hover:bg-[var(--lw-green)] hover:text-white"
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--lw-dark)]/[0.08] bg-[var(--lw-white)] text-[var(--lw-dark)] transition-all duration-300 hover:border-[var(--lw-green)] hover:bg-[var(--lw-green)] hover:text-white"
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Project cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-16 flex gap-4 md:gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {projects.map((project, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={project.title}
                className={`group relative h-[520px] lg:h-[560px] shrink-0 w-[85vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] snap-start overflow-hidden rounded-[1.5rem] border transition-all duration-500 ease-[timing-function:cubic-bezier(0.32,0.72,0,1)] ${isActive
                  ? "border-[var(--lw-green)]/15 shadow-[0_20px_60px_rgba(19,48,32,0.08)] bg-[var(--lw-white)]"
                  : "border-[var(--lw-dark)]/[0.03] bg-[var(--lw-white)] hover:border-[var(--lw-green)]/10 hover:shadow-[0_8px_32px_rgba(19,48,32,0.04)]"
                  }`}
              >
                {/* Background Image Layer */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-[timing-function:cubic-bezier(0.32,0.72,0,1)] ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[var(--lw-dark)] via-[var(--lw-dark)]/90 to-[var(--lw-dark)]/85 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                />

                {/* Content relative wrapper */}
                <div className="relative z-10 w-full h-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Thumbnail for inactive cards */}
                  <div className={`shrink-0 w-full transition-all duration-500 ease-[timing-function:cubic-bezier(0.32,0.72,0,1)] ${isActive ? 'h-0 opacity-0' : 'h-48 md:h-52 opacity-100'}`}>
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }} />
                  </div>

                  <div className="flex w-full items-start justify-between p-8 text-left lg:p-10 shrink-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 ${isActive ? "bg-white/20 backdrop-blur-md" : "bg-[var(--lw-green)]/[0.05]"
                          }`}>
                          <project.icon size={22} className={isActive ? "text-white" : "text-[var(--lw-green)]"} strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className={`text-[0.7rem] font-semibold uppercase tracking-[0.15em] transition-colors ${isActive ? "text-white/80" : "text-[var(--lw-saffron)]"
                            }`}>
                            {project.industry}
                          </span>
                          <h3 className={`text-lg font-semibold transition-colors ${isActive ? "text-white" : "text-[var(--lw-dark)]"
                            }`}>{project.title}</h3>
                        </div>
                      </div>
                      <p className={`mt-3 text-[0.88rem] transition-colors ${isActive ? "text-white/80" : "text-[var(--lw-dark)]/45"
                        }`}>{project.summary}</p>
                    </div>
                  </div>

                  {/* Detail */}
                  <div className="grid grid-rows-[1fr] opacity-100 transition-all duration-500 ease-[timing-function:cubic-bezier(0.32,0.72,0,1)] shrink-0">
                    <div className="overflow-hidden">
                      <div className="px-8 pb-8 lg:px-10 lg:pb-10">
                        <div className={`mb-5 h-px transition-colors ${isActive ? "bg-white/20" : "bg-[var(--lw-dark)]/[0.04]"}`} />
                        <div className={`text-[0.92rem] leading-[1.75] space-y-4 transition-colors ${isActive ? "text-white/90" : "text-[var(--lw-dark)]/55"}`}>
                          {project.description.map((paragraph, idx) => (
                            <div key={idx}>{paragraph}</div>
                          ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-2">
                          {project.stats.map((stat) => (
                            <span
                              key={stat}
                              className={`rounded-full px-3.5 py-1.5 text-[0.75rem] font-semibold transition-colors ${isActive
                                ? "bg-white/20 text-white backdrop-blur-md"
                                : "bg-[var(--lw-green)]/[0.04] text-[var(--lw-green)]"
                                }`}
                            >
                              {stat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
          {/* Spacer to allow last card to align left */}
          <div className="shrink-0 w-[5vw] md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3*2+1.5rem)]" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
