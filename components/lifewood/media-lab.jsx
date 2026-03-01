"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Play, Sparkles, Orbit } from "lucide-react"

const mediaCards = [
  {
    title: "Global Teams",
    desc: "Human expertise across regions and domains.",
    image: "/esg-community.jpg",
    tilt: -2.5,
  },
  {
    title: "Bridge Narrative",
    desc: "Connecting cultures through trusted data operations.",
    image: "/about-bridge.jpg",
    tilt: 2.5,
  },
]

export function MediaLab() {
  return (
    <section className="relative overflow-hidden bg-[#f4f8f6] py-24 dark:bg-[#060807]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-lw-green/15 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-lw-green/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex items-end justify-between gap-8"
        >
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-lw-green">
              <Sparkles size={14} />
              Media Lab
            </p>
            <h2 className="text-4xl font-black tracking-tight text-zinc-900 dark:text-white lg:text-6xl">
              Animated stories,
              <br />
              <span className="text-lw-green">not static blocks</span>
            </h2>
          </div>
          <div className="hidden rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs font-bold text-zinc-600 backdrop-blur md:inline-flex dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
            Crafted for motion-first UX
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/70 bg-black shadow-2xl lg:col-span-7 dark:border-white/10"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
              <source
                src="https://player.vimeo.com/external/403756724.sd.mp4?s=d0db588725f053229b35bc9f18b528e1d5db7595&profile_id=139&oauth2_token_id=57447761"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur">
                <Play size={12} />
                Live Motion Reel
              </div>
              <h3 className="mt-4 text-2xl font-black text-white lg:text-3xl">AI Data in Action</h3>
              <p className="mt-2 max-w-lg text-sm text-white/75">A cinematic layer that adds movement and narrative depth to your homepage.</p>
            </div>
          </motion.article>

          <div className="grid gap-6 lg:col-span-5">
            {mediaCards.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -6, rotate: card.tilt }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative overflow-hidden rounded-[1.8rem] border border-zinc-200/70 bg-white shadow-xl dark:border-white/10 dark:bg-white/5"
              >
                <div className="relative h-[220px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white backdrop-blur">
                    <Orbit size={11} />
                    Visual Card
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h4 className="text-xl font-black text-white">{card.title}</h4>
                    <p className="mt-1 text-xs text-white/80">{card.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
