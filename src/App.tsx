import { Navbar, Hero, OurWork, ProductSection, RetailerProductSection, BrandSection, ReviewSection, AboutUs, LocationSection, VideoSection, Footer, WhatsappButton } from './components/PageComponents';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <OurWork />
        <ProductSection />
        <RetailerProductSection />
        <BrandSection />
        <ReviewSection />
        <VideoSection />
        <AboutUs />
        <LocationSection />
      </main>

      <Footer />
      <WhatsappButton />

      {/* Decorative beam texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#ffffff_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000000_25%,transparent_25%,transparent_50%,#000000_50%,#000000_75%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />
      </div>
    </div>
  );
}
