import { Navbar } from "@/components/lifewood/navbar"
import { Footer } from "@/components/lifewood/footer"
import { Projects } from "@/components/lifewood/projects"
import { AnimatedSection } from "@/components/lifewood/animated-section"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      <div className="pt-20"> {/* Add padding for the fixed navbar */}
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  )
}
