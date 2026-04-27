import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, ChevronRight, Globe, Play, Pause, Volume2, VolumeX, Send, Instagram, Facebook, Twitter, Linkedin, ShoppingCart, Menu, X, PhoneCall } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const BRAND_NAME = "Shine Raza Fragrance";
const BRAND_FULL = "Shine Raza Fragrance Manufacturing";
const ADDRESS = "Gala No. D-62, B Bldg, Paradia Complex, Bhayandar West, Thane, 401105";
const OFFICE_ADDRESS = "Office No. 130, 1st Floor Rassaz Mall, Naya Nagar, Mira Road (E), Thane - 401107";
const EMAIL = "shinerazafragrance@gmail.com";
const PHONE = "9987518102";
const WHATSAPP = "9987518102";
const DOMAIN = "shinerazafragrance.in";

// --- Components ---

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full left-0 right-0 z-[100] sticky top-0 bg-white/90 backdrop-blur-xl border-b editorial-border">
      {/* Top Red Bar */}
      <div className="w-full bg-brand-red text-white py-1.5 md:py-2 px-4 md:px-12 flex justify-between items-center text-[9px] md:text-xs font-bold tracking-widest uppercase">
        <a href={`tel:${PHONE}`} className="hover:opacity-80 transition-opacity flex items-center gap-2 shrink-0">
          <Phone size={10} className="md:hidden" /> +91 {PHONE}
        </a>
        <div className="hidden lg:flex gap-6 items-center">
          <span>{OFFICE_ADDRESS}</span>
        </div>
        <a href={`mailto:${EMAIL}`} className="hover:opacity-80 transition-opacity lowercase truncate ml-2">
          {EMAIL}
        </a>
      </div>

      {/* Main Navbar */}
      <div className="w-full bg-white/95 backdrop-blur-md border-b border-zinc-100 shadow-sm relative z-50">
        <div className="max-w-full lg:max-w-[1920px] mx-auto px-4 md:px-12 lg:px-[100px] flex justify-between items-center py-2 md:py-4 relative">
          
          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 text-[#1a1a1a] flex-none"
          >
            <Menu size={24} />
          </button>

          {/* Brand Center (Mobile) / Left (Desktop) */}
          <div className="flex items-center gap-2 md:gap-4 lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0 pointer-events-none lg:pointer-events-auto">
            <img 
              src="/logo.png" 
              alt="Shine Raza Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
            <div className="flex flex-col text-left">
              <span className="font-display font-black text-xl md:text-2xl leading-none tracking-tight text-[#1a1a1a] lowercase">shineraza</span>
              <span className="text-[6px] md:text-[8px] font-mono font-black tracking-[0.2em] text-zinc-400 uppercase">fragrance</span>
            </div>
          </div>

          {/* Centered Navigation (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10 font-mono font-bold text-[11px] uppercase tracking-[0.3em] text-zinc-500">
            <a href="#" className="hover:text-[#1a1a1a] transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all group-hover:w-full"></span>
            </a>
            <a href="#products" className="hover:text-[#1a1a1a] transition-colors relative group">
              Product
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all group-hover:w-full"></span>
            </a>
            <a href="#brands" className="hover:text-[#1a1a1a] transition-colors relative group">
              Brand
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="hover:text-[#1a1a1a] transition-colors relative group">
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1a1a1a] transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Contact Desktop / Call Mobile */}
          <div className="flex items-center flex-none">
            <a 
              href={`tel:${PHONE}`}
              className="lg:hidden p-1.5 text-[#1a1a1a] hover:text-brand-red transition-colors active:scale-90"
            >
              <PhoneCall size={18} />
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP}?text=Hi, I would like to contact you.`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:block bg-[#1a1a1a] text-white py-4 px-10 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-brand-red transition-all shadow-xl active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] lg:hidden"
            />
            <motion.div 
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              className="fixed top-0 left-0 right-0 w-full h-[25vh] bg-[#eeeeee] z-[120] p-6 shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-display font-black text-xl tracking-tighter uppercase text-[#1a1a1a]">Menu</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-[#1a1a1a]">
                  <X size={20} />
                </button>
              </div>
              <div className="flex justify-around items-center h-full text-[10px] font-display font-bold uppercase tracking-tighter text-[#1a1a1a]">
                <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#products" onClick={() => setIsMenuOpen(false)}>Product</a>
                <a href="#brands" onClick={() => setIsMenuOpen(false)}>Brand</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Nature's Purest Essence",
      subtitle: "Experience Fragrances Inspired by the Wilderness",
      image: "/hero-img-1.png",
      cta: "Explore Our Fragrance"
    },
    {
      title: "Global Partnership Excellence",
      subtitle: "Your Trusted Partner in Private Labeling",
      image: "/hero-img-2.png",
      cta: "Become a Partner"
    },
    {
      title: "Innovation in Every Fragrances",
      subtitle: "Personal Care Crafted with Precision",
      image: "/hero-img-3.png",
      cta: "View Our Products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 second auto-slide (0.5s exit + 0.5s entry + 2s visible)
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black">
      {/* Vercel-style Grid Shimmer */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Particle Drift */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full z-10"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5
          }}
          animate={{ 
            y: [null, '-20%', '20%'], 
            opacity: [0.2, 0.5, 0.2] 
          }}
          transition={{ 
            duration: 10 + Math.random() * 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.3, // Entry duration
            exit: { duration: 0.2 } // Exit duration
          }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center brightness-[0.7]"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          
          <div className="relative h-full max-w-7xl mx-auto px-4 md:px-12 flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-4xl flex flex-col items-center"
            >
               <motion.img 
                 src="/logo.png" 
                 alt="Logo" 
                 className="w-16 h-16 md:w-24 md:h-24 mb-6 md:mb-8 object-contain filter invert brightness-0"
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 1 }}
               />
               <span className="text-white text-[10px] font-mono font-bold uppercase tracking-[0.5em] mb-4 block">
                 {slides[currentSlide].subtitle}
               </span>
              <h1 className="font-display font-black text-3xl md:text-6xl text-white leading-[0.9] tracking-tighter mb-10 drop-shadow-2xl uppercase">
                {slides[currentSlide].title}
              </h1>
              <button className="bg-brand-important text-[#1a1a1a] py-4 px-10 text-[11px] font-black uppercase tracking-[0.3em] hover:bg-brand-red hover:text-white transition-all shadow-2xl active:scale-95 border editorial-border">
                {slides[currentSlide].cta}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <div 
            key={i} 
            className={`h-0.5 transition-all duration-500 rounded-full ${currentSlide === i ? 'w-16 bg-white' : 'w-4 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export const OurWork = () => {
  const stats = [
    { value: "20+", label: "Years Experience", detail: "Manufacturing legacy" },
    { value: "3K+", label: "Fragrances", detail: "Largest range crafted" },
    { value: "5T+", label: "Daily Output", detail: "Production capacity" },
    { value: "25+", label: "States Covered", detail: "PAN India delivery" },
    { value: "500+", label: "Active Clients", detail: "Global partnerships" }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-12 bg-white border-b editorial-border relative overflow-hidden h-[50vh] md:h-auto flex items-center">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-black text-zinc-100 text-[20vw] md:text-[20vw] select-none pointer-events-none whitespace-nowrap opacity-50 uppercase tracking-tighter">
        Work Legacy
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-5 relative z-10 w-full">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className={`flex flex-col items-center text-center p-4 md:p-12 group transition-all border-zinc-100 ${i % 3 !== 2 ? 'border-r' : ''} md:border-r editorial-border last:border-r-0 ${i > 2 ? 'mt-4 md:mt-0' : ''}`}
          >
            <div className="relative mb-4 md:mb-8 w-12 h-12 md:w-24 md:h-24 flex items-center justify-center border-2 border-[#1a1a1a] rounded-full group-hover:bg-[#1a1a1a] transition-all shrink-0">
              <div className="text-xs md:text-2xl font-display font-black text-[#1a1a1a] group-hover:text-white transition-colors">
                {stat.value}
              </div>
            </div>
            <h4 className="font-display font-bold text-[8px] md:text-lg text-[#1a1a1a] mb-0.5 md:mb-1 group-hover:text-brand-red transition-colors uppercase tracking-tighter leading-none">{stat.label}</h4>
            <p className="text-[6px] md:text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest leading-tight">
              {stat.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const ProductSection = () => {
  const products = [
    { name: "Fragrances", desc: "Creator of Aroma Ingredients & Premium Blends.", image: "/fragrance.jpg" },
    { name: "Personal Care", desc: "We take a look at where the opportunities and challenges are.", image: "/personal-care.jpg" },
    { name: "Detergent", desc: "Traditional middle eastern incense & home fragrances.", image: "/detergent.png" },
    { name: "Soap", desc: "We specialize in providing fragrances for artisan soaps.", image: "/soap-oil.png" },
    { name: "Essential Oil", desc: "Elevate your daily routine with herbal essences.", image: "/essential-oil.jpg" },
    { name: "Attar", desc: "Natural perfume oils crafted through traditional methods.", image: "/attar.jpg" },
    { name: "Cream & Cosmetics", desc: "Skin-friendly aroma ingredients for beauty brands.", image: "/cream.jpg" },
    { name: "Agarbatti", desc: "Gentle and safe fragrances for sensitive skin.", image: "/agarbatti.jpg" },
    { name: "Air Fragrances", desc: "Innovative profiles reflecting unique spaces.", image: "/air-fragrance.jpg" },
    { name: "Perfumes", desc: "Concentrated luxury perfumes from nature's heart.", image: "/perfume.jpg" },
    { name: "Hair Care", desc: "Signature scents for professional hair care lines.", image: "/oil.jpg" },
    { name: "Aromatherapy", desc: "Holistic wellness through therapeutic scents.", image: "/aromatherapy.jpg" }
  ];

  return (
    <section id="products" className="py-12 md:py-32 px-4 md:px-12 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-24 border-b md:border-b-2 border-[#1a1a1a] pb-4 md:pb-8">
          <h2 className="font-display font-black text-3xl md:text-8xl tracking-tighter uppercase leading-none whitespace-nowrap">Our Service</h2>
          <div className="text-[9px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-zinc-400 mt-2 md:mt-0">
            Professional Solutions — 4x3 Grid
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {products.map((product, i) => (
            <motion.div 
              key={i}
              className="bg-brand-important p-3 md:p-6 border editorial-border product-card group overflow-hidden"
            >
              <div className="aspect-square overflow-hidden mb-3 md:mb-6 bg-zinc-100">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="text-center">
                <h3 className="font-display font-bold text-sm md:text-xl mb-1 md:mb-2 text-[#1a1a1a] truncate leading-none">{product.name}</h3>
                <p className="text-[7px] md:text-[10px] text-zinc-500 uppercase font-bold tracking-[0.1em] md:tracking-widest mb-3 md:mb-6 px-1 md:px-4 line-clamp-1">
                  {product.desc}
                </p>
                <div className="grid grid-cols-3 gap-0.5 md:gap-1 pt-2 md:pt-4 border-t border-zinc-100">
                  <a href={`tel:${PHONE}`} className="p-1 md:p-2 hover:text-brand-red transition-colors flex flex-col items-center gap-0.5 md:gap-1">
                    <Phone size={10} className="md:w-[14px] md:h-[14px]" /> <span className="text-[6px] md:text-[8px] font-bold uppercase tracking-widest">Call</span>
                  </a>
                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="p-1 md:p-2 hover:text-brand-red transition-colors flex flex-col items-center gap-0.5 md:gap-1 border-x border-zinc-100">
                    <MessageCircle size={10} className="md:w-[14px] md:h-[14px]" /> <span className="text-[6px] md:text-[8px] font-bold uppercase tracking-widest">Chat</span>
                  </a>
                  <a href={`https://wa.me/${WHATSAPP}?text=I want to buy ${product.name}`} target="_blank" rel="noopener noreferrer" className="p-1 md:p-2 hover:text-brand-red transition-colors flex flex-col items-center gap-0.5 md:gap-1">
                    <ShoppingCart size={10} className="md:w-[14px] md:h-[14px]" /> <span className="text-[6px] md:text-[8px] font-bold uppercase tracking-widest">Buy</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const BrandSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = `Brand Partnership Request:\nBrand Name: ${formData.get('name')}\nPhone: ${formData.get('phone')}\nEmail: ${formData.get('email')}\nRegion: ${formData.get('country')}\nVision: ${formData.get('message')}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="brands" className="min-h-screen bg-white border-y editorial-border flex items-center py-12 md:py-20 px-4 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center gap-12">
        
        {/* Title: Mobile Priority 1 */}
        <div className="text-center w-full order-1">
           <span className="text-brand-red font-mono font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">Crafting Excellence</span>
           <h2 className="font-display font-black text-5xl md:text-8xl leading-[0.8] tracking-tighter text-[#1a1a1a] mb-6 md:mb-8">
             CREATE <br /> YOUR <br /> <span className="italic font-light text-zinc-300">BRAND</span>
           </h2>
           <div className="w-12 h-1 bg-brand-red mx-auto" />
        </div>

        {/* Content Box */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start order-2">
          {/* Image: Mobile Priority 2 */}
          <div className="flex items-center justify-center order-2 lg:order-1">
            <div className="aspect-[3/4] w-full max-w-[280px] md:max-w-sm bg-zinc-100 border-4 border-zinc-50 shadow-2xl relative group overflow-hidden">
               <img src="/your-brand.png" alt="Your Brand" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 grayscale" />
               <div className="absolute inset-0 bg-brand-red/5 mix-blend-multiply" />
            </div>
          </div>

          {/* Form: Mobile Priority 3 */}
          <div className="order-3 lg:order-2 space-y-8">
            <div className="border-l-4 border-brand-red/10 pl-6 space-y-2">
              <h4 className="font-display font-black text-xl md:text-2xl tracking-tighter uppercase text-[#1a1a1a]">Partnership Inquiry</h4>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Reach out for distribution or label manufacturing</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input required name="name" className="bg-brand-bg border editorial-border p-4 text-[10px] font-bold outline-none focus:border-brand-red transition-colors" placeholder="Brand Name" />
                <input required name="phone" className="bg-brand-bg border editorial-border p-4 text-[10px] font-bold outline-none focus:border-brand-red transition-colors" placeholder="Contact No" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input required name="email" type="email" className="bg-brand-bg border editorial-border p-4 text-[10px] font-bold outline-none focus:border-brand-red transition-colors" placeholder="Email" />
                <input required name="country" className="bg-brand-bg border editorial-border p-4 text-[10px] font-bold outline-none focus:border-brand-red transition-colors" placeholder="Region" />
              </div>
              <textarea name="message" rows={2} className="w-full bg-brand-bg border editorial-border p-4 text-[10px] font-bold outline-none focus:border-brand-red transition-colors resize-none" placeholder="Brief Description"></textarea>
              <button type="submit" className="w-full bg-[#1a1a1a] text-white py-5 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-brand-red transition-all flex items-center justify-center gap-3 active:scale-95">
                Send to Whatsapp <ChevronRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ReviewSection = () => {
  const reviews = [
    { name: "Sajid Shaikh", role: "Owner - Buraq Perfumes", text: "The wholesale process is seamless and the branding options allowed us to launch our private label effortlessly.", rating: 5 },
    { name: "Mohammed Arif", role: "Owner - Pure Luxury", text: "Exceptional customer service and fast international shipping. Shine Raza is our primary fragrance partner.", rating: 4 },
    { name: "Harpreet Singh", role: "Retailer - Singh Collection Store", text: "Velvet Oud is a best-seller in our boutique. The depth of the fragrance is remarkable.", rating: 5 },
    { name: "Sophie Martin", role: "Buyer - Paris Parfums", text: "We love the modern minimalist packaging and the sustainability focus of Shine Raza.", rating: 5 },
    { name: "Joseph D’Souza", role: "CEO - Aura Beauty", text: "Their essential oils are pure and consistent. Highly recommended for premium brands.", rating: 5 },
    { name: "Imran Shaikh", role: "Owner - Attar House", text: "The air fragrance line changed our brand perception entirely. Fantastic quality.", rating: 4 },
    { name: "Nikhil Patil", role: "Fragrance Curator", text: "Innovation is at the heart of their blends. Always ahead of trends.", rating: 5 },
    { name: "Carlos Gomez", role: "Distributor - Latam Scents", text: "Reliable partner for large scale manufacturing. Quality never dips.", rating: 5 },
    { name: "Farzana Khan", role: "Founder - Khan Fragrances", text: "They helped us formulate our first eco-responsible candle line. Simply the best.", rating: 5 }
  ];

  return (
    <section className="py-12 md:py-32 bg-black border-b editorial-border overflow-hidden h-[50vh] md:h-auto flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-8 md:mb-20 flex flex-col md:flex-row justify-between items-end border-b md:border-b-2 border-brand-red pb-4 md:pb-10">
        <div className="space-y-1">
          <span className="text-white/40 font-mono font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em]">Testimonials</span>
          <h2 className="font-display font-black text-3xl md:text-8xl tracking-tighter text-white uppercase leading-[0.8]">RETAILER VOICES</h2>
        </div>
      </div>

      <div className="flex gap-4 animate-marquee-fast md:animate-marquee">
        {[...reviews, ...reviews].map((review, i) => (
          <div key={i} className="inline-block w-[260px] md:w-[400px] bg-[#eeeeee] p-5 md:p-8 border border-zinc-200 shrink-0 whitespace-normal shadow-2xl">
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-8">
              <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center font-display font-bold border editorial-border overflow-hidden text-black text-xs md:text-base">
                {review.name[0]}
              </div>
              <div>
                <h4 className="font-display font-bold text-sm md:text-lg text-[#1a1a1a] leading-none uppercase tracking-tighter">{review.name}</h4>
                <p className="text-[7px] md:text-[9px] font-mono font-bold text-zinc-400 uppercase tracking-widest mt-0.5 md:mt-1">{review.role}</p>
              </div>
            </div>
            <p className="text-[#1a1a1a] font-medium italic text-[11px] md:text-sm mb-4 md:mb-8 leading-tight md:leading-relaxed border-l-2 border-brand-red pl-3 md:pl-4">
              "{review.text}"
            </p>
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <div key={j} className={`w-1 md:w-1.5 h-1 md:h-1.5 ${j < review.rating ? 'bg-brand-red' : 'bg-zinc-300'}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const AboutUs = () => {
  return (
    <section id="about" className="h-[90vh] md:min-h-screen py-12 md:py-16 px-4 md:px-12 bg-white flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-8">
        <div className="space-y-1 md:space-y-2">
          <h2 className="font-display font-black text-4xl md:text-8xl tracking-tighter uppercase leading-none">Perspective</h2>
          <div className="text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-[0.5em] text-zinc-400 block">Legacy since 2008</div>
        </div>

        <div className="space-y-4 md:space-y-8 text-[#1a1a1a] text-xs md:text-xl font-medium leading-relaxed text-justify tracking-tight editorial-header overflow-y-auto max-h-[60vh] md:max-h-none">
          <p className="border-l-4 border-brand-red pl-4 md:pl-6 italic">
            Being the cream of the crop in the Fragrance Industry, <span className="font-black underline decoration-brand-red/30">Shine Raza Fragrance</span> has established and maintained its position as a renowned name for its innovation, creativity, quality & services.
          </p>
          <div className="bg-brand-bg p-4 md:p-8 border editorial-border relative group">
            <p className="relative z-10 font-bold leading-normal">
              Established in 2008 with a vision of becoming an innovative pioneer in manufacturing cold pressed orange oil in an eco friendly way. Under his dynamic leadership the organization started developing fragrance for domestic market & became a leading Indian Company. 
            </p>
            <div className="absolute top-1 right-2 font-display italic text-2xl md:text-4xl text-brand-red/5 group-hover:text-brand-red/10 transition-all font-black select-none pointer-events-none uppercase">Heritage</div>
          </div>
          <p className="text-zinc-500 font-normal">
            As the company matured, the thirst to achieve more grew. The Company entered into the domain of the Fragrance Industry and started developing & manufacturing Fragrances, Aroma chemicals & Essential oils. Currently Shine Raza handles more than 5000 satisfied clients in more than 30 countries worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export const LocationSection = () => {
  return (
    <section className="h-[80vh] md:py-24 bg-[#1a1a1a] md:relative overflow-hidden text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row items-center gap-6 md:gap-16 w-full">
        <div className="w-full lg:w-[60%] aspect-video border-4 md:border-8 border-white/5 relative group shrink-0">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.6565!2d72.8465!3d19.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b065a0000001%3A0x0!2zMTnCsDE3JzI0LjAiTiA3MsKwNTAnNDcuNCJF!5e0!3m2!1sen!2sin!4v1713961531000!5m2!1sen!2sin" 
            className="w-full h-full grayscale invert opacity-50 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-1000"
            allowFullScreen={false} 
            loading="lazy" 
          />
        </div>
        <div className="w-full lg:flex-1">
          <span className="text-brand-red font-mono font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-1 md:mb-3 block">Manufacturing Hub</span>
          <h2 className="font-display font-black text-2xl md:text-6xl mb-4 md:mb-12 tracking-tighter leading-[0.8] uppercase">VISIT OUR COMPANY</h2>
          
          <div className="space-y-4 md:space-y-12">
            <div className="space-y-1 md:space-y-4">
              <h4 className="text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Corporate Headquarters</h4>
              <p className="font-display font-medium text-xs md:text-xl leading-tight border-l border-brand-red pl-3 md:pl-4 text-zinc-300">
                {ADDRESS}
                <br />
                <span className="text-zinc-500 text-[8px] md:text-xs font-mono mt-1 md:mt-2 block">Thane District, Maharashtra, India</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const VideoSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white px-4 md:px-12">
      <div className="max-w-6xl mx-auto relative rounded-3xl md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group aspect-video">
        <iframe 
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/zy_PZZGcS1U?si=I5JPu7e-J85-ydyS&autoplay=1&mute=1&loop=1&playlist=zy_PZZGcS1U"
          title="Shine Raza Fragrance Presentation"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="pt-12 md:pt-24 pb-8 md:pb-12 bg-white border-t-4 md:border-t-8 border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-24 mb-12 md:mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 md:mb-12">
            <span className="font-display font-black text-xl md:text-3xl tracking-tighter uppercase text-[#1a1a1a] block leading-none">Shine Raza</span>
            <span className="text-[8px] md:text-[10px] font-mono font-bold tracking-[0.4em] text-zinc-400 uppercase block mt-1">Fragrance</span>
          </div>
          <p className="text-zinc-500 font-medium text-xs md:text-sm leading-relaxed mb-6 md:mb-12">
            Professional manufacturing solutions for global industrial scents, personal care, and private labeling with a heritage of <span className="text-[#1a1a1a] font-black italic">20 years</span> excellence.
          </p>
          <div className="flex gap-3 md:gap-4">
            <a href="https://www.instagram.com/shinerazafragrances/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 border editorial-border flex items-center justify-center text-zinc-400 hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1">
              <Instagram size={14} className="md:w-4 md:h-4" />
            </a>
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 border editorial-border flex items-center justify-center text-zinc-400 hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1">
              <Linkedin size={14} className="md:w-4 md:h-4" />
            </a>
            <a href="#" className="w-8 h-8 md:w-10 md:h-10 border editorial-border flex items-center justify-center text-zinc-400 hover:bg-brand-red hover:text-white transition-all transform hover:-translate-y-1">
              <Facebook size={14} className="md:w-4 md:h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-4 md:space-y-8">
          <h4 className="text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-300">Operations</h4>
          <ul className="space-y-2 md:space-y-4 text-[#1a1a1a] font-bold text-[11px] md:text-sm uppercase tracking-tighter">
            <li className="hover:text-brand-red transition-all cursor-pointer">Quality Hub</li>
            <li className="hover:text-brand-red transition-all cursor-pointer">Production</li>
            <li className="hover:text-brand-red transition-all cursor-pointer">Private Label</li>
            <li className="hover:text-brand-red transition-all cursor-pointer">Global Logistics</li>
          </ul>
        </div>

        <div className="space-y-4 md:space-y-8">
          <h4 className="text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-zinc-300">Legal</h4>
          <ul className="space-y-2 md:space-y-4 text-[#1a1a1a] font-bold text-[11px] md:text-sm uppercase tracking-tighter">
            <li className="hover:text-brand-red transition-all cursor-pointer">Privacy</li>
            <li className="hover:text-brand-red transition-all cursor-pointer">Terms</li>
            <li className="hover:text-brand-red transition-all cursor-pointer">Compliance</li>
            <li className="text-brand-red font-black border-b border-brand-red inline-block cursor-pointer">Contact</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 border-t editorial-border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-center md:text-left">
        <p className="text-[7px] md:text-[9px] font-mono font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-zinc-400 italic">shinerazafragrance.in — Manufacturing Registry Unit</p>
        <p className="text-[7px] md:text-[9px] font-mono font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-400">© 2026 Shine Raza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export const WhatsappButton = () => {
  return (
    <a 
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-4 md:p-8 rounded-full shadow-[0_15px_30px_-5px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 hover:rotate-12 transition-all group"
    >
      <MessageCircle size={20} className="md:w-8 md:h-8" fill="currentColor" strokeWidth={1} />
      <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-5 h-5 md:w-8 md:h-8 bg-brand-red rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-black border-2 md:border-4 border-white shadow-xl animate-bounce">1</div>
    </a>
  );
};
