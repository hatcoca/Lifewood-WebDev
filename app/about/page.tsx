import { Navbar } from "@/components/lifewood/navbar"
import { Footer } from "@/components/lifewood/footer"
import { About } from "@/components/lifewood/about"
import { AnimatedSection } from "@/components/lifewood/animated-section"

export default function AboutPage() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />

            <div className="pt-20"> {/* Add padding for the fixed navbar */}
                <AnimatedSection>
                    <About />
                </AnimatedSection>
            </div>

            <Footer />
        </main>
    )
}
