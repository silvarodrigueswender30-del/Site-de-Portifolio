
import GallerySection from "@/components/GallerySection";
import GravityHero from '@/components/GravityHero';
import ColorPalette from '@/components/ColorPalette';
import MagnifiedBento from "@/components/ui/magnified-bento";
import { Bento3Section } from "@/components/ui/bento-monochrome-1";
import CompetitorComparison from '@/components/CompetitorComparison';
import SiteShowcase from "@/components/SiteShowcase";
import Features from '@/components/Features';

import GoogleStrategy from '@/components/GoogleStrategy';
import InstagramStrategy from '@/components/InstagramStrategy';
import ExpandableGallery from '@/components/ui/ExpandableGallery';
import TimelineGrid from '@/components/TimelineGrid';
import PricingSection from '@/components/PricingSection';


import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-fog">

      <main>

        <GravityHero />
        <GallerySection />
        <ColorPalette />
        <MagnifiedBento />
        <Bento3Section />
        <CompetitorComparison />
        <SiteShowcase />
        <Features />
        <GoogleStrategy />
        <InstagramStrategy />
        <ExpandableGallery />
        <TimelineGrid />
        <PricingSection />




      </main>
      <Footer />
    </div>
  );
}
