import React from 'react';
import { 
  MessageCircle, 
  CheckCircle, 
  Printer, 
  Palette, 
  Layout, 
  MoveRight, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin,
  Clock,
  DollarSign,
  Phone,
  Star,
  Quote,
  ExternalLink,
  Send,
  Loader2
} from 'lucide-react';
import { motion } from 'motion/react';
import { fetchGoogleReviews } from './services/googleReviews';

const Logo = ({ className = "", variant = "dark" }: { className?: string, variant?: "light" | "dark" }) => (
  <div className={`flex items-center ${className}`}>
    <img 
      src="https://lh3.googleusercontent.com/d/1JSkfhgJzrvf9eTu8cqMjTFjuFK21IYNi" 
      alt="CBR Prints Studio Logo" 
      className={`h-12 w-auto object-contain transition-all ${variant === "dark" ? "brightness-0 invert" : ""}`}
      referrerPolicy="no-referrer"
      onError={(e) => {
        // Fallback to text if image fails
        e.currentTarget.style.display = 'none';
        e.currentTarget.parentElement!.innerHTML = `
          <div class="flex flex-col leading-none ${variant === "light" ? "text-black" : "text-white"}">
            <div class="flex items-center gap-1 font-black tracking-tighter text-2xl">
              <span>CBR</span>
              <span class="opacity-50">|</span>
              <span>IDEAS</span>
            </div>
            <div class="flex items-center gap-1 font-black tracking-tighter text-2xl -mt-1">
              <span>PRINTS</span>
              <span class="opacity-50">|</span>
              <span>TO LIFE</span>
            </div>
          </div>
        `;
      }}
    />
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#004333] border-b border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <a href="#" className="hover:opacity-80 transition-opacity">
          <Logo variant="dark" />
        </a>
        <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-white">
          <a href="#about" className="hover:text-[#FFD700] transition-colors">About</a>
          <a href="#services" className="hover:text-[#FFD700] transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-[#FFD700] transition-colors">Portfolio</a>
          <a href="#quote" className="hover:text-[#FFD700] transition-colors">Quote</a>
          <a 
            href="https://wa.me/27768088390" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF6B35] text-white px-6 py-3 rounded-full hover:bg-[#e55a2b] transition-all flex items-center gap-2"
          >
            <MessageCircle size={14} />
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 pb-20 px-4 overflow-hidden bg-[#004333] relative">
    {/* Subtle Pattern Overlay */}
    <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-2 mb-8">
            {[
              "T-SHIRT & ACCESSORY BRANDING",
              "STICKERS",
              "PRODUCT TAGS & LABELS",
              "BUSINESS CARDS",
              "THANK YOU CARDS",
              "GRAPHIC DESIGN",
              "PACKAGING BRANDING",
              "DIY CRAFTING"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white font-black text-lg md:text-2xl tracking-tight">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="inline-flex items-center gap-2 px-8 py-2 bg-[#FF6B35] text-white font-black uppercase text-2xl rounded-tr-3xl rounded-bl-3xl mb-12 shadow-lg">
            & More
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/27768088390"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#004333] px-10 py-5 font-black text-xl hover:bg-[#FFD700] transition-all group uppercase tracking-tighter rounded-xl"
            >
              Get a Quote on WhatsApp
              <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#quote"
              className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white text-white px-10 py-5 font-black text-xl hover:bg-white/10 transition-all uppercase tracking-tighter rounded-xl"
            >
              Order Form
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative grid grid-cols-2 gap-4"
        >
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-full border-[12px] border-[#FFD700] overflow-hidden shadow-2xl">
              <img 
                src={`https://picsum.photos/seed/print${i+10}/400/400`} 
                alt="Work Sample" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
          
          {/* QR Code */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white p-2 border-4 border-[#004333] hidden lg:block shadow-xl">
            <img 
              src="https://lh3.googleusercontent.com/d/15DKHJTQwkfpTKdkTb6_Vh5xsH7Z0ieEW" 
              alt="Scan for Info" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-zinc-50 border-y border-black/5">
    <div className="max-w-7xl mx-auto px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">About / Positioning</h2>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Your brand deserves more than basic.
        </h3>
        <p className="text-xl text-zinc-600 leading-relaxed mb-6">
          CBR Studio delivers sharp design and high-quality print for businesses, events, and personal projects. From business cards to large-format signage, we turn ideas into physical impact.
        </p>
        <div className="flex items-center gap-2 text-zinc-900 font-bold">
          <MapPin size={20} className="text-emerald-600" />
          Based in Johannesburg. Built for people who take their hustle seriously.
        </div>
      </motion.div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: "T-Shirt Branding", desc: "Custom apparel and accessory branding for any occasion.", icon: <Palette />, image: "https://lh3.googleusercontent.com/d/1kNcBNfjLPYNzqq4CBm3xb99zb-sWmg8b" },
    { title: "Stickers", desc: "High-quality custom stickers and vinyl decals.", icon: <CheckCircle />, image: "https://lh3.googleusercontent.com/d/1_elX7q-xQ86UEYz3R79AayKb27J6Xi35" },
    { title: "Tags & Labels", desc: "Professional product tags and custom labels.", icon: <Layout />, image: "https://lh3.googleusercontent.com/d/1q8CdFjLFCDZo4_0tdSB4MCG2fg3dpEUW" },
    { title: "Business Cards", desc: "Standard & premium finishes that make a statement.", icon: <Layout />, image: "https://lh3.googleusercontent.com/d/1fmV41dPrg3udW_buYfjtkgoXfv2kLMQI" },
    { title: "Thank You Cards", desc: "Personalized cards to show your appreciation.", icon: <Mail />, image: "https://lh3.googleusercontent.com/d/1EhFXDRlzm0IqDleL8qDoJvKVJjPIotX0" },
    { title: "Graphic Design", desc: "Logo design and full brand identity kits.", icon: <Palette />, image: "https://picsum.photos/seed/design/400/300" },
    { title: "Packaging", desc: "Custom packaging branding to elevate your products.", icon: <Printer />, image: "https://lh3.googleusercontent.com/d/1apndmjfvWfu1ZeNam5EJ91PZ1-FwuIcl" },
    { title: "DIY Crafting", desc: "Specialized prints for your personal DIY projects.", icon: <Palette />, image: "https://picsum.photos/seed/craft/400/300" },
  ];

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">What We Do</h2>
            <h3 className="text-4xl font-bold tracking-tight">Services</h3>
          </div>
          <p className="text-zinc-500 max-w-sm">
            Need something custom? We build to spec. If you can dream it, we can print it.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                <img 
                  src={s.image} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <motion.div 
                  initial={{ scale: 0, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    delay: 0.3 + (i * 0.1) 
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900 shadow-inner"
                >
                  {React.cloneElement(s.icon as React.ReactElement, { size: 24 })}
                </motion.div>
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-zinc-500 text-sm">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "What is your typical turnaround time?",
      a: "Most small to medium print jobs (business cards, flyers, stickers) are completed within 2-3 business days. Larger branding projects or large-format prints may take 5-7 business days."
    },
    {
      q: "Do you offer delivery services?",
      a: "Yes, we offer delivery within Johannesburg and surrounding areas. For nationwide orders, we use reliable courier services to ensure your prints reach you safely."
    },
    {
      q: "Can you help with the design if I don't have a file?",
      a: "Absolutely! Our 'Design & Print' studio specializes in turning rough ideas into professional visuals. We can create logos, layouts, and brand identities from scratch."
    },
    {
      q: "What file formats do you accept?",
      a: "We prefer high-resolution PDF, AI, or CDR files with fonts converted to curves. However, we also accept high-quality JPG, PNG, and PSD files."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-zinc-50">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#004333] mb-4">Common Questions</h2>
          <h3 className="text-4xl font-black tracking-tight uppercase">FAQ</h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-zinc-50 transition-colors"
              >
                <span className="font-bold text-lg pr-8">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full bg-[#FFD700] flex items-center justify-center text-[#004333] transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  <MoveRight className="rotate-90" size={16} />
                </div>
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openIndex === i ? 'auto' : 0, opacity: openIndex === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-zinc-600 leading-relaxed border-t border-black/5">
                  {faq.a}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Fast Turnaround", icon: <Clock /> },
    { title: "Affordability", icon: <DollarSign /> },
    { title: "Modern Design", icon: <Palette /> },
    { title: "Reliability", icon: <Phone /> },
  ];

  return (
    <section className="py-12 bg-[#FF6B35] text-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 mb-4">Why Choose Us</h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 uppercase italic leading-[0.9]">
            Uncompromising quality<br />& distinctive design
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {reasons.map((r, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md hover:bg-white/20 transition-all"
              >
                <div className="p-2 bg-white/10 rounded-lg">
                  {React.cloneElement(r.icon as React.ReactElement, { size: 18 })}
                </div>
                <span className="font-black text-[10px] uppercase tracking-widest">{r.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const images = [
    "https://picsum.photos/seed/print1/600/600",
    "https://picsum.photos/seed/print2/600/600",
    "https://picsum.photos/seed/print3/600/600",
    "https://picsum.photos/seed/print4/600/600",
    "https://picsum.photos/seed/print5/600/600",
    "https://picsum.photos/seed/print6/600/600",
    "https://picsum.photos/seed/print7/600/600",
    "https://picsum.photos/seed/print8/600/600",
  ];

  return (
    <section id="portfolio" className="py-24 px-4 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#004333] mb-4">Recent Work</h2>
          <h3 className="text-4xl font-bold tracking-tight">Portfolio</h3>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="aspect-square rounded-full border-[8px] border-[#FFD700] overflow-hidden bg-white shadow-xl group cursor-pointer relative"
            >
              <img 
                src={img} 
                alt={`Work ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#004333]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full border border-white/30 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                  <Palette className="text-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [data, setData] = React.useState<{ reviews: any[], grounding: any[] }>({ reviews: [], grounding: [] });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetchGoogleReviews().then(res => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <section id="testimonials" className="py-24 px-4 bg-[#004333] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] rounded-full -translate-y-1/2 translate-x-1/2 opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#FFD700] mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight">What Our Clients Say</h3>
        </motion.div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="w-12 h-12 border-4 border-[#FFD700] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {data.reviews.map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative group hover:bg-white/10 transition-all"
              >
                <Quote className="absolute top-4 right-4 text-[#FFD700] opacity-20 group-hover:opacity-40 transition-opacity" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating || 5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-lg font-medium mb-6 leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-[#004333] font-black">
                    {review.author?.charAt(0) || "C"}
                  </div>
                  <span className="font-bold uppercase tracking-tighter">{review.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-zinc-400 text-sm mb-4">Verified reviews from Google Business Profile</p>
          <div className="flex flex-wrap justify-center gap-4">
            {data.grounding.map((chunk: any, i: number) => (
              chunk.maps && (
                <a 
                  key={i}
                  href={chunk.maps.uri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FFD700] hover:text-[#004333] transition-all"
                >
                  <ExternalLink size={12} />
                  View on Google Maps
                </a>
              )
            ))}
            <a 
              href="https://www.google.com/maps/place/?q=place_id:ChIJk07duPttlR4RIyrKMxkrnd8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FFD700] hover:text-[#004333] transition-all"
            >
              <ExternalLink size={12} />
              Read All Reviews
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteForm = () => {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: 'T-Shirt Branding',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: 'T-Shirt Branding', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="quote" className="py-24 px-4 bg-zinc-50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold uppercase tracking-widest text-[#004333] mb-4">Get Started</h2>
            <h3 className="text-5xl font-black tracking-tighter uppercase mb-6 leading-none">
              Request a<br />Quote
            </h3>
            <p className="text-zinc-500 mb-8 text-lg">
              Fill out the form and we'll get back to you with a custom quote for your project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#004333] text-white rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-zinc-400">Email Us</p>
                  <p className="font-bold">cbrprints22@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-zinc-400">WhatsApp</p>
                  <p className="font-bold">076 8088 390</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-black/5"
          >
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={40} />
                </div>
                <h4 className="text-2xl font-black uppercase mb-2">Sent Successfully!</h4>
                <p className="text-zinc-500 mb-8">We've received your request and will contact you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="bg-[#004333] text-white px-8 py-3 rounded-full font-bold uppercase text-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-zinc-400 ml-2">Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#FF6B35] focus:ring-0 transition-all outline-none"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase text-zinc-400 ml-2">Phone</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#FF6B35] focus:ring-0 transition-all outline-none"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-zinc-400 ml-2">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#FF6B35] focus:ring-0 transition-all outline-none"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-zinc-400 ml-2">Service Needed</label>
                  <select 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#FF6B35] focus:ring-0 transition-all outline-none appearance-none"
                    value={formData.service}
                    onChange={e => setFormData({...formData, service: e.target.value})}
                  >
                    <option>T-Shirt Branding</option>
                    <option>Stickers</option>
                    <option>Tags & Labels</option>
                    <option>Business Cards</option>
                    <option>Thank You Cards</option>
                    <option>Graphic Design</option>
                    <option>Packaging</option>
                    <option>DIY Crafting</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase text-zinc-400 ml-2">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:border-[#FF6B35] focus:ring-0 transition-all outline-none resize-none"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  type="submit"
                  className="w-full bg-[#004333] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#003322] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      Send Request
                      <Send size={18} />
                    </>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-500 text-xs text-center font-bold">Something went wrong. Please try again.</p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => (
  <section className="py-24 px-4 bg-zinc-50 border-t border-black/5">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
        Ready to upgrade your brand?
      </h2>
      <p className="text-xl text-zinc-600 mb-12">
        Let’s create something that gets attention.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="https://wa.me/27768088390"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#004333] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#003322] transition-all"
        >
          <MessageCircle />
          Chat on WhatsApp
        </a>
        <a 
          href="#quote"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black border border-black/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-zinc-50 transition-all"
        >
          Request a Quote
        </a>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="py-20 px-4 bg-[#004333] text-white border-t-4 border-[#FFD700]">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="flex flex-col gap-6">
          <a href="#" className="hover:opacity-80 transition-opacity inline-block w-fit">
            <Logo variant="dark" />
          </a>
          <p className="text-zinc-300 max-w-xs text-sm font-medium leading-tight">
            Professional design and high-quality print studio. Turning ideas into physical impact.
          </p>
        </div>
        
        <div className="bg-[#FFD700] p-6 rounded-xl text-[#004333]">
          <h4 className="font-black uppercase text-lg mb-4 flex items-center gap-2">
            <MapPin size={20} />
            Visit Us
          </h4>
          <p className="font-bold text-xl mb-4 leading-tight">
            1104 Tugela Str,<br/>Klipfontein View
          </p>
          <div className="flex items-center gap-2 font-black text-sm uppercase bg-[#004333]/10 p-2 rounded">
            <Clock size={16} />
            MON - FRI | 09:00 - 17:00
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h4 className="font-black uppercase text-xs tracking-widest mb-4 text-zinc-400">Contact</h4>
            <a href="tel:0768088390" className="text-2xl font-black hover:text-[#FFD700] transition-colors flex items-center gap-2">
              <Phone size={24} />
              076 8088 390
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-4 text-zinc-400">Follow Us</h4>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/CBRPRINTSZA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#004333] transition-all"><Facebook size={24} /></a>
                <a href="https://instagram.com/ideastolifestudios" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#004333] transition-all"><Instagram size={24} /></a>
                <a href="https://tiktok.com/@ideastolifestudios" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FFD700] hover:text-[#004333] transition-all">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/></svg>
                </a>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg w-24 h-24 hidden sm:block">
              <img 
                src="https://lh3.googleusercontent.com/d/15DKHJTQwkfpTKdkTb6_Vh5xsH7Z0ieEW" 
                alt="Scan for Info" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
          © {new Date().getFullYear()} CBR Prints Studio.
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse"></div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
            IDEAS TO LIFE
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <WhyChooseUs />
        <QuoteForm />
        <Portfolio />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
