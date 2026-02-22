import { Navbar } from "@/components/lifewood/navbar"
import { Footer } from "@/components/lifewood/footer"
import { Careers } from "@/components/lifewood/careers"
import { AnimatedSection } from "@/components/lifewood/animated-section"

export default function CareersPage() {
    return (
        <main className="min-h-screen overflow-x-hidden">
            <Navbar />

            <div className="pt-20"> {/* Add padding for the fixed navbar */}
                <AnimatedSection>
                    <Careers />
                </AnimatedSection>
            </div>

            <Footer />
        </main>
    )
}
