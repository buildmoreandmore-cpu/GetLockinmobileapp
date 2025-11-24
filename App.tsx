import React, { useState, useEffect } from 'react';
import { 
  Lock, Zap, ShieldAlert, ChevronRight, PlayCircle, 
  X, Check, AlertTriangle, Terminal, Brain, Dumbbell, 
  Briefcase, TrendingUp, Skull, BatteryCharging, Menu,
  Smartphone
} from 'lucide-react';

// --- Types & Constants ---

const FEATURES = [
  {
    title: "Focus Lock System",
    description: "Immersive fullscreen timer that minimizes distractions. Three modes: Quick Hit (15m), Standard (25m), and Beast Mode (50m+).",
    icon: <Lock className="w-6 h-6 text-brand-black" />,
    color: "bg-brand-yellow"
  },
  {
    title: "Friction-Based Exit",
    description: "We make it hard to quit. A 3-step exit process forces you to confront why you're giving up before you break your streak.",
    icon: <ShieldAlert className="w-6 h-6 text-white" />,
    color: "bg-brand-red"
  },
  {
    title: "Gamified Discipline",
    description: "Rank up from Recruit to Commander. Build streaks. Lose it all if you quit without a valid emergency.",
    icon: <Zap className="w-6 h-6 text-brand-black" />,
    color: "bg-brand-orange"
  }
];

const RANKS = [
  { name: "RECRUIT", range: "0-5 Sessions", quote: "You showed up. That's half the battle.", color: "text-white/70" },
  { name: "SOLDIER", range: "6-20 Sessions", quote: "That's what discipline looks like.", color: "text-brand-yellow" },
  { name: "WARRIOR", range: "21-50 Sessions", quote: "Finally. I was starting to think you were all talk.", color: "text-brand-orange" },
  { name: "COMMANDER", range: "51+ Sessions", quote: "You're not the same person who started this.", color: "text-brand-red" }
];

// --- Sub-Components ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "font-black uppercase tracking-widest px-8 py-4 transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 clip-button";
  const variants = {
    primary: "bg-brand-yellow text-brand-black hover:bg-white",
    secondary: "bg-brand-gray border border-white/20 text-white hover:border-brand-yellow hover:text-brand-yellow",
    danger: "bg-brand-red text-white hover:bg-red-700",
    outline: "bg-transparent border-2 border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const PhoneMockup = ({ children, active = false }: { children?: React.ReactNode, active?: boolean }) => (
  <div className={`relative w-[300px] h-[600px] bg-brand-black rounded-[3rem] border-8 border-[#2a2a2a] shadow-2xl overflow-hidden transform transition-transform duration-700 ${active ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
    {/* Dynamic Island / Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-20"></div>
    {/* Screen Content */}
    <div className="w-full h-full bg-brand-black relative">
      {children}
    </div>
  </div>
);

const SectionHeading = ({ children, subtitle }: { children?: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    {subtitle && <span className="text-brand-yellow font-bold tracking-[0.2em] text-sm uppercase block mb-2">{subtitle}</span>}
    <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tight text-white">
      {children}
    </h2>
  </div>
);

// --- Main Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Lock className="w-8 h-8 text-brand-yellow" />
            <span className="font-black text-2xl tracking-tighter italic text-white">LOCKIN</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-white/70 hover:text-brand-yellow font-bold uppercase tracking-wider text-sm transition-colors">Features</a>
              <a href="#method" className="text-white/70 hover:text-brand-yellow font-bold uppercase tracking-wider text-sm transition-colors">The Method</a>
              <a href="#ranks" className="text-white/70 hover:text-brand-yellow font-bold uppercase tracking-wider text-sm transition-colors">Ranks</a>
              <Button variant="primary" className="py-2 px-6 text-xs">Get App</Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-yellow p-2">
              <Menu />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-gray border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="text-white block px-3 py-2 text-base font-black uppercase">Features</a>
            <a href="#method" className="text-white block px-3 py-2 text-base font-black uppercase">The Method</a>
            <a href="#ranks" className="text-white block px-3 py-2 text-base font-black uppercase">Ranks</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Noise & Gradient */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black pointer-events-none"></div>
      
      {/* Accent Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-brand-yellow/30 bg-brand-yellow/5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
              <span className="text-brand-yellow text-xs font-bold tracking-widest uppercase">Training System Active</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black italic uppercase tracking-tighter leading-[0.9] text-white">
              Stop <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-brand-orange">Quitting</span> <br/>
              Mid-Session.
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Most productivity apps baby you. LockIn actively fights your impulse to quit with tough-love coaching and friction-based exit flows.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="primary">
                Start Training <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary">
                View Demo
              </Button>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-60">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black font-mono text-white">50k+</p>
                <p className="text-xs uppercase tracking-widest text-white/50">Sessions Locked</p>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="text-center lg:text-left">
                <p className="text-2xl font-black font-mono text-white">94%</p>
                <p className="text-xs uppercase tracking-widest text-white/50">Completion Rate</p>
              </div>
            </div>
          </div>

          {/* Phone Visualization */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            {/* Background blob */}
            <div className="absolute inset-0 bg-brand-yellow/20 blur-[60px] transform scale-75 rounded-full"></div>
            
            <PhoneMockup active={true}>
              {/* Fake App UI: Dashboard */}
              <div className="flex flex-col h-full p-6 text-white font-sans bg-[#111]">
                <div className="flex justify-between items-center mb-8 opacity-50 text-[10px] font-mono">
                  <span>LOCKIN SYSTEM</span>
                  <div className="flex items-center gap-1 text-brand-yellow">
                    <Zap size={10} fill="currentColor" />
                    <span>RECRUIT</span>
                  </div>
                </div>
                
                <div className="bg-[#1a1a1a] p-6 border border-white/10 shadow-2xl relative mb-6">
                   {/* Decorative corners */}
                   <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-brand-yellow"></div>
                   <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-brand-yellow"></div>
                   <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-brand-yellow"></div>
                   <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-brand-yellow"></div>

                   <div className="text-center">
                     <span className="text-[80px] leading-none font-black tracking-tighter block text-white">25</span>
                     <span className="text-brand-yellow font-bold tracking-[0.2em] text-xs">MINUTES</span>
                   </div>
                   
                   <div className="mt-6 flex justify-between gap-1 text-[8px] font-mono text-white/40 uppercase">
                     <span>Quick</span>
                     <span className="text-brand-yellow">Standard</span>
                     <span>Beast</span>
                   </div>
                   <div className="w-full h-1 bg-white/10 mt-1 relative">
                     <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-brand-yellow rounded-full shadow-[0_0_10px_#FFD600]"></div>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 p-4 border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
                    <Briefcase size={20} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Deep Work</span>
                  </div>
                  <div className="bg-white/5 p-4 border border-white/10 flex flex-col items-center gap-2 hover:bg-white/10 transition-colors">
                    <Terminal size={20} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Coding</span>
                  </div>
                </div>

                <div className="mt-auto">
                   <button className="w-full bg-white/10 border border-white/20 text-white font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors clip-button group">
                     <Lock size={16} className="group-hover:text-black" />
                     Custom Lock In
                   </button>
                   <div className="flex items-center gap-2 mt-4 opacity-40 justify-center">
                     <ShieldAlert size={12} className="text-brand-red" />
                     <span className="text-[8px] uppercase font-bold">Don't pick beast mode just to look tough.</span>
                   </div>
                </div>
              </div>
            </PhoneMockup>
          </div>

        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-brand-gray relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="No More Excuses">
          Built Different
        </SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-brand-black p-8 border border-white/10 hover:border-brand-yellow/50 transition-colors group relative overflow-hidden">
               {/* Hover Gradient */}
               <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               
               <div className={`w-12 h-12 ${feature.color} flex items-center justify-center mb-6 clip-button`}>
                 {feature.icon}
               </div>
               
               <h3 className="text-xl font-black italic uppercase mb-4 text-white group-hover:text-brand-yellow transition-colors">{feature.title}</h3>
               <p className="text-white/60 leading-relaxed font-medium">
                 {feature.description}
               </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section id="method" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div>
             <SectionHeading subtitle="The Exit Protocol">
               Trying to Quit? <br/> <span className="text-brand-red">Think Again.</span>
             </SectionHeading>
             <p className="text-lg text-white/70 mb-10">
               Unlike other apps that let you tap "cancel" and walk away, LockIn forces self-awareness. Breaking a commitment shouldn't be easy.
             </p>
             
             <div className="space-y-8">
               {[
                 { 
                   step: "01", 
                   title: "Friction Screen", 
                   desc: "You're hit with the hard truth. 'Are you kidding?' messaging challenges your impulse.",
                   icon: <ShieldAlert className="text-brand-yellow" />
                 },
                 { 
                   step: "02", 
                   title: "Exit Survey", 
                   desc: "You must state why. 'Just didn't feel like it' is an option, but you have to admit it.",
                   icon: <Terminal className="text-brand-orange" />
                 },
                 { 
                   step: "03", 
                   title: "Hardass Response", 
                   desc: "Custom coaching based on your excuse. Emergency? We get it. Lazy? We call you out.",
                   icon: <Skull className="text-brand-red" />
                 }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start group">
                   <div className="text-4xl font-black italic text-white/10 group-hover:text-brand-yellow transition-colors font-mono">
                     {item.step}
                   </div>
                   <div>
                     <h4 className="text-xl font-black uppercase italic text-white mb-2 flex items-center gap-3">
                       {item.title}
                       {/* Line connector */}
                       <span className="h-px w-12 bg-white/10 group-hover:bg-brand-yellow/50 transition-colors"></span>
                     </h4>
                     <p className="text-white/60 text-sm font-bold uppercase tracking-wide">
                       {item.desc}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="relative flex justify-center">
              {/* Phone Mockup showing friction screen */}
              <PhoneMockup active={true}>
                <div className="h-full w-full bg-[#111] relative flex flex-col p-6">
                  <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red/10 via-transparent to-transparent"></div>
                  
                  <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
                    <ShieldAlert className="w-16 h-16 text-brand-red mb-6 animate-bounce" />
                    
                    <h2 className="text-4xl font-black italic uppercase text-white mb-2 leading-none">
                      Are You <br/> Kidding?
                    </h2>
                    
                    <div className="my-8 w-full p-6 bg-white/5 border-l-4 border-brand-red text-left">
                      <p className="text-white/90 font-bold uppercase text-sm leading-relaxed">
                        "You're 18 minutes in. The urge to quit is just weakness leaving the body. Do not let it win."
                      </p>
                    </div>

                    <div className="w-full space-y-3">
                      <button className="w-full bg-white text-black font-black uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg transform hover:scale-105">
                        <PlayCircle size={20} fill="currentColor" />
                        I'm Staying
                      </button>
                      
                      <button className="w-full bg-transparent text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] py-3 hover:text-brand-red transition-colors">
                        I need to quit (Break Streak)
                      </button>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
           </div>
         </div>
      </div>
    </section>
  );
};

const Gamification = () => {
  return (
    <section id="ranks" className="py-24 bg-brand-gray border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Earn Your Stripes">
          Rank Progression
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RANKS.map((rank, idx) => (
            <div key={idx} className="bg-brand-black p-6 border border-white/10 hover:border-brand-yellow/30 transition-all hover:-translate-y-2">
              <div className="flex justify-between items-start mb-4">
                <Zap className={`w-8 h-8 ${rank.color}`} fill="currentColor" />
                <span className="font-mono text-[10px] text-white/30 bg-white/5 px-2 py-1">{rank.range}</span>
              </div>
              <h3 className={`text-2xl font-black italic uppercase mb-3 ${rank.color}`}>
                {rank.name}
              </h3>
              <p className="text-white/60 text-xs font-bold uppercase tracking-wider leading-relaxed border-l-2 border-white/10 pl-3">
                "{rank.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsPreview = () => {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading subtitle="Data Driven">
          Know Your <span className="text-brand-yellow">Weakness</span>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Peak Time */}
          <div className="col-span-1 md:col-span-2 bg-[#1a1a1a] p-8 border border-white/10 shadow-2xl">
             <div className="flex items-center gap-3 mb-6">
                <BatteryCharging className="text-brand-yellow" />
                <h3 className="text-xl font-black uppercase text-white">Peak Performance Window</h3>
             </div>
             <div className="flex items-end gap-4 h-48">
                {[40, 65, 85, 45, 30, 20, 10, 50].map((h, i) => (
                  <div key={i} className="flex-1 bg-white/5 hover:bg-brand-yellow transition-colors relative group">
                    <div style={{ height: `${h}%` }} className="w-full bg-white/20 absolute bottom-0 group-hover:bg-brand-yellow transition-all duration-500"></div>
                  </div>
                ))}
             </div>
             <div className="mt-4 flex justify-between text-xs font-mono text-white/40">
               <span>6AM</span>
               <span>12PM</span>
               <span>6PM</span>
               <span>12AM</span>
             </div>
             <p className="mt-6 text-sm text-white/70 font-bold uppercase tracking-wide">
               You are 3.5x more likely to finish sessions started between <span className="text-brand-yellow">9AM - 11AM</span>.
             </p>
          </div>

          {/* Card 2: Danger Zone */}
          <div className="bg-[#1a1a1a] p-8 border border-white/10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Skull size={100} />
             </div>
             <h3 className="text-xl font-black uppercase text-white mb-2">Danger Zone</h3>
             <p className="text-xs text-white/50 uppercase tracking-widest mb-8">Most Common Quit Point</p>
             
             <div className="text-center py-8">
               <span className="text-6xl font-black text-brand-red">14:00</span>
               <span className="block text-brand-red/50 text-sm font-bold uppercase mt-2">Minutes In</span>
             </div>

             <div className="bg-brand-red/10 p-4 border border-brand-red/20 mt-4">
               <p className="text-brand-red text-xs font-bold uppercase leading-relaxed">
                 Warning: You tend to break focus 14 minutes in. Push past this wall.
               </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 bg-brand-yellow text-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 leading-none">
          Ready to <br/> Lock In?
        </h2>
        <p className="text-xl md:text-2xl font-bold uppercase tracking-wide mb-12 opacity-80 max-w-2xl mx-auto">
          No more coddling. No more gentle reminders. Just results.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-black text-white px-10 py-5 font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform shadow-2xl clip-button flex items-center justify-center gap-3">
             <Smartphone size={24} />
             Download iOS
          </button>
          <button className="bg-transparent border-4 border-black text-black px-10 py-5 font-black uppercase tracking-widest text-lg hover:bg-black hover:text-brand-yellow transition-colors clip-button">
             Read Manifesto
          </button>
        </div>
        
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
          Available on App Store & Play Store
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Lock className="w-6 h-6 text-brand-yellow" />
            <span className="font-black text-xl italic text-white tracking-tighter">LOCKIN</span>
          </div>
          
          <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          
          <div className="text-white/20 text-xs font-mono">
            © 2024 LOCKIN SYSTEMS INC.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- App Component ---

function App() {
  // Simple scroll progress bar for the top
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-brand-black min-h-screen text-white font-sans selection:bg-brand-yellow selection:text-black overflow-x-hidden">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-brand-yellow z-[60]" style={{ width: `${scrollProgress * 100}%` }}></div>
      
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <StatsPreview />
        <Gamification />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;