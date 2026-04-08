import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { AuthorsSection } from "@/components/sections/AuthorsSection";
import { EvidenceSection } from "@/components/sections/EvidenceSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { StickyMobileCta } from "@/components/sections/StickyMobileCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <StorySection />
        <SocialProofSection />
        <AuthorsSection />
        <EvidenceSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
