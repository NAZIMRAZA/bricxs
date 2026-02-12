
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Globe, 
  Terminal, 
  Activity, 
  ShieldCheck, 
  Cpu, 
  LayoutDashboard, 
  TrendingUp,
  Twitter,
  Send,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Lock,
  ChevronDown
} from 'lucide-react';

/** 
 * UI Components
 */

const GlitchText: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
  <span className={`glitch-text-wrapper ${className}`} data-text={text}>
    {text}
  </span>
);

const Ticker = () => (
  <div className="w-full bg-[#FF003C] text-black font-black py-2 overflow-hidden whitespace-nowrap border-y border-black relative z-50">
    <motion.div 
      initial={{ x: "100%" }}
      animate={{ x: "-100%" }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="inline-block text-sm orbitron uppercase tracking-[0.3em]"
    >
      $BRXS LIVE: SYSTEM UPGRADE IN PROGRESS // MULTIPOLAR WORLD NARRATIVE DETECTED // GOLD > FIAT // EAST > WEST // DECENTRALIZE EVERYTHING // NO CENTRAL BANK INTERFERENCE // ⚡ SOLANA NETWORK ACTIVE ⚡ // $BRXS LIVE: SYSTEM UPGRADE IN PROGRESS //
    </motion.div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-[60] bg-[#0D0D0DBB] border-b border-[#00F0FF22] backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-[#00F0FF] rounded-sm flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(0,240,255,0.5)]">
          <Zap className="text-black w-5 h-5" />
        </div>
        <span className="font-bold text-xl tracking-tighter orbitron text-[#00F0FF]">$BRXS</span>
      </div>
      <div className="hidden lg:flex space-x-8 text-[10px] uppercase font-bold tracking-widest orbitron">
        {['About', 'Tokenomics', 'How to Buy', 'Roadmap'].map(item => (
          <a key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="hover:text-[#00F0FF] transition-all relative group text-white">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF003C] group-hover:w-full transition-all duration-300"></span>
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-4">
        <button className="hidden sm:block text-[10px] orbitron font-bold border border-[#00F0FF44] px-4 py-2 hover:bg-[#00F0FF11] transition-colors">
          WHITE PAPER
        </button>
        <button className="bg-[#FF003C] hover:bg-[#A020F0] text-white px-6 py-2 text-xs font-black uppercase tracking-widest transition-all skew-x-[-15deg] shadow-[4px_4px_0px_#00F0FF] hover:shadow-none hover:translate-x-1 hover:translate-y-1 distort-hover">
          BUY $BRXS
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const [stats, setStats] = useState({ price: '$0.0000', cap: 'Loading...', holders: '0' });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({
        price: `$0.0000${Math.floor(Math.random() * 9000 + 1000)}`,
        cap: `$${(Math.random() * 10 + 5).toFixed(1)}M`,
        holders: `${Math.floor(Math.random() * 500 + 1000).toLocaleString()}`
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden grid-bg px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF05] via-transparent to-[#0D0D0D] pointer-events-none"></div>
      
      {/* Glitching Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 mb-8"
      >
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00F0FF] via-[#FF003C] to-[#A020F0] rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative w-32 h-32 md:w-48 md:h-48 bg-black rounded-full flex items-center justify-center border border-[#00F0FF33] overflow-hidden group-hover:border-[#00F0FF] transition-colors">
            <Zap className="w-16 h-16 md:w-24 md:h-24 text-[#00F0FF] group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 text-center max-w-5xl">
        <h1 className="text-6xl md:text-9xl font-black mb-4 tracking-tighter leading-none italic uppercase">
          <GlitchText text="BRICSTARTER" />
        </h1>
        <p className="text-xl md:text-3xl font-black text-[#00F0FF] mb-12 orbitron uppercase tracking-[0.2em] bg-black inline-block px-4 py-1">
          The Meme Coin for a Multipolar World
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
          <div className="flex flex-wrap justify-center gap-8 text-lg md:text-2xl font-bold uppercase italic mono text-[#FF003C]">
            <span className="px-4 border-l-2 border-[#FF003C]">East &gt; West</span>
            <span className="px-4 border-l-2 border-[#FF003C] text-yellow-400">Gold &gt; Fiat</span>
            <span className="px-4 border-l-2 border-[#FF003C] text-[#A020F0]">BRICS &gt; Dollar</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          <button className="w-full sm:w-auto px-12 py-5 bg-[#00F0FF] text-black font-black text-xl uppercase tracking-widest relative group overflow-hidden transition-all shadow-[8px_8px_0px_#FF003C] hover:shadow-none hover:translate-x-2 hover:translate-y-2 distort-hover">
            <span className="relative z-10">BUY $BRXS</span>
          </button>
          <button className="w-full sm:w-auto px-12 py-5 border-2 border-[#00F0FF] text-[#00F0FF] font-black text-xl uppercase tracking-widest relative group transition-all hover:bg-[#00F0FF11] hover:text-white distort-hover">
             View Chart
          </button>
        </div>

        {/* Live Data Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {[
            { label: 'Live Price', value: stats.price, icon: TrendingUp, color: '#00F0FF' },
            { label: 'Market Cap', value: stats.cap, icon: LayoutDashboard, color: '#A020F0' },
            { label: 'Active Holders', value: stats.holders, icon: Globe, color: '#FF003C' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-[#111111] border border-[#00F0FF22] p-6 relative group overflow-hidden hover:border-[#00F0FF44] transition-all"
            >
              <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: stat.color }}></div>
              <div className="flex items-center space-x-3 mb-2 opacity-60">
                <stat.icon size={14} style={{ color: stat.color }} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-black orbitron">{stat.label}</span>
              </div>
              <div className="text-3xl font-black orbitron tracking-wider text-white flex items-center">
                <span className="flicker">{stat.value}</span>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <stat.icon size={100} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-[#00F0FF44]"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-32 relative bg-[#0D0D0D] border-y border-[#00F0FF11]">
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-12"
      >
        <div className="flex items-center space-x-6">
          <Terminal className="text-[#FF003C] w-12 h-12" />
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
            <GlitchText text="SYSTEM MESSAGE: WHAT IS BRXS?" />
          </h2>
        </div>

        <div className="bg-[#111111] border-l-8 border-[#FF003C] p-10 space-y-8 relative shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
             <Zap size={200} />
          </div>
          
          <div className="flex items-center space-x-3 text-[#FF003C] text-xs font-black mono animate-pulse">
            <Activity size={16} />
            <span>ENCRYPTED BROADCAST INBOUND // PHASE 0 ACTIVE</span>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-100 leading-tight font-bold italic border-b border-white/10 pb-8">
            BRICSTARTER ($BRXS) is a Solana-based meme coin inspired by the global shift toward a multipolar world.
          </p>

          <div className="grid grid-cols-1 gap-6 text-xl md:text-2xl font-black text-[#00F0FF] uppercase orbitron">
            {['No artificial utility.', 'No fabricated promises.', 'No centralized control narrative.'].map((text, i) => (
              <motion.div 
                key={i} 
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center space-x-4 group"
              >
                <ChevronRight className="text-[#FF003C] group-hover:translate-x-2 transition-transform" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="pt-10 space-y-6">
            <p className="text-4xl md:text-5xl font-black orbitron text-white leading-[0.9] uppercase tracking-tighter italic">
              This is digital disruption.<br/>
              This is narrative warfare.<br/>
              This is community-driven momentum.
            </p>
            <div className="inline-block px-4 py-2 bg-[#A020F0] text-white font-black uppercase text-xl orbitron transform -skew-x-12 mt-4">
               A meme coin for a decentralized era.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const Tokenomics = () => (
  <section id="tokenomics" className="py-32 bg-[#0D0D0D]">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">
          <GlitchText text="DATA PANEL: TOKENOMICS" />
        </h2>
        <div className="h-2 w-32 bg-gradient-to-r from-[#00F0FF] to-[#FF003C] mx-auto skew-x-[-20deg]"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { label: 'Total Supply', value: '1,000,000,000 BRXS', icon: Cpu },
          { label: 'Blockchain', value: 'Solana', icon: Zap },
          { label: 'Buy/Sell Tax', value: '0%', icon: ShieldCheck },
          { label: 'Liquidity', value: 'Locked', icon: Lock },
          { label: 'Contract Address', value: 'TBA at Launch', icon: Terminal },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-[#111111] border border-[#00F0FF22] p-8 relative overflow-hidden group hover:border-[#00F0FF] transition-all cursor-default ${i === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <card.icon size={60} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-4 bg-black border border-[#00F0FF33] text-[#00F0FF] shadow-[4px_4px_0px_#FF003C]">
                  <card.icon size={28} />
                </div>
                <span className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] orbitron">{card.label}</span>
              </div>
              <div className="text-2xl md:text-3xl font-black orbitron text-white leading-tight break-words italic">
                {card.value}
              </div>
            </div>
            <div className="mt-6 flex space-x-2">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-1.5 h-1.5 bg-[#00F0FF44] group-hover:bg-[#00F0FF] transition-colors"></div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HowToBuy = () => (
  <section id="how-to-buy" className="py-32 bg-[#111111] relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')] opacity-5"></div>
    <div className="max-w-6xl mx-auto px-4 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black mb-6 italic uppercase tracking-tighter">
          <GlitchText text="SIGNAL FLOW: HOW TO BUY" />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { title: 'Download Phantom Wallet', text: 'Step 1', icon: ShieldCheck },
          { title: 'Buy SOL', text: 'Step 2', icon: Zap },
          { title: 'Swap SOL for BRXS on Raydium', text: 'Step 3', icon: Activity },
          { title: 'Hold & Join the Community', text: 'Step 4', icon: Globe },
        ].map((step, i) => (
          <motion.div
            key={step.text}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex flex-col items-center group"
          >
            <div className="w-24 h-24 bg-black border-4 border-[#00F0FF22] rounded-full flex items-center justify-center mb-8 relative group-hover:border-[#00F0FF] group-hover:shadow-[0_0_30px_#00F0FF88] transition-all">
              <div className="absolute -top-4 -right-4 bg-[#FF003C] text-xs px-3 py-1 font-black orbitron text-white skew-x-[-15deg]">0{i+1}</div>
              <step.icon className="text-[#00F0FF] w-10 h-10 group-hover:scale-125 transition-transform" />
            </div>
            <div className="bg-black border border-[#00F0FF22] p-8 w-full relative group-hover:bg-[#00F0FF11] transition-all shadow-[10px_10px_0px_#1a1a1a] group-hover:shadow-[10px_10px_0px_#FF003C]">
              <span className="block text-[10px] text-[#00F0FF] font-black orbitron uppercase tracking-[0.4em] mb-4">{step.text}</span>
              <h3 className="text-xl font-black orbitron leading-none uppercase italic">{step.title}</h3>
            </div>
            {i < 3 && (
              <div className="hidden md:block absolute -right-4 top-12 text-[#00F0FF22] animate-pulse">
                <ChevronRight size={40} />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Roadmap = () => (
  <section id="roadmap" className="py-32 bg-[#0D0D0D] border-t border-[#00F0FF11]">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-5xl md:text-8xl font-black mb-24 text-center uppercase italic tracking-tighter leading-none">
        <GlitchText text="SYSTEM EVOLUTION LOG" />
      </h2>

      <div className="relative border-l-4 border-dashed border-[#FF003C44] pl-10 space-y-20 ml-4 md:ml-10">
        {[
          { id: 'PHASE 01', title: 'GENESIS', items: ['Launch', '1,000 Holders', 'DexScreener Listing'], status: 'ACTIVE' },
          { id: 'PHASE 02', title: 'EXPANSION', items: ['10,000 Holders', 'CoinGecko Application', 'Community Growth'], status: 'QUEUED' },
          { id: 'PHASE 03', title: 'MOMENTUM', items: ['50,000+ Holders', 'CEX Exploration', 'Global Meme Awareness'], status: 'PENDING' },
        ].map((phase, i) => (
          <motion.div
            key={phase.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[54px] top-2 w-10 h-10 bg-black border-4 border-[#FF003C] rotate-45 flex items-center justify-center shadow-[0_0_15px_#FF003C]">
               <div className="w-2 h-2 bg-white animate-ping"></div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
              <div className="flex flex-col">
                <span className="text-[#FF003C] font-black orbitron text-2xl mb-1">{phase.id}</span>
                <h3 className="text-4xl md:text-6xl font-black orbitron tracking-tighter leading-none italic uppercase">{phase.title}</h3>
              </div>
              <div className="text-[10px] mono text-[#00F0FF] font-black bg-[#00F0FF11] border border-[#00F0FF33] px-6 py-2 mt-4 md:mt-0 tracking-[0.3em]">
                STATUS: {phase.status}
              </div>
            </div>

            <div className="bg-[#111111] p-10 border border-[#00F0FF11] space-y-4 shadow-xl">
              {phase.items.map((item, j) => (
                <div key={j} className="flex items-center space-x-4 text-white font-black uppercase tracking-[0.2em] text-lg italic">
                  <div className="w-3 h-3 bg-[#FF003C] rotate-45"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Socials = () => (
  <section id="socials" className="py-32 bg-[#0D0D0D] border-t border-[#00F0FF11]">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <h2 className="text-5xl md:text-7xl font-black mb-24 uppercase italic tracking-tighter">
        <GlitchText text="NETWORK NODES" />
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
        {[
          { name: 'X (Twitter)', icon: Twitter, color: '#00F0FF' },
          { name: 'Telegram', icon: Send, color: '#A020F0' },
          { name: 'DexScreener', icon: Activity, color: '#FF003C' },
          { name: 'CoinGecko', icon: ExternalLink, color: '#F5F5F5' },
        ].map((social, i) => (
          <motion.a
            key={social.name}
            href="#"
            whileHover={{ scale: 1.05, y: -10 }}
            className="group flex flex-col items-center space-y-6"
          >
            <div 
              className="w-24 h-24 rounded-2xl bg-black border-2 border-[#00F0FF22] flex items-center justify-center relative group-hover:border-[#00F0FF] group-hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] transition-all rotate-3 group-hover:rotate-0"
              style={{ borderColor: `${social.color}33` }}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <social.icon size={40} style={{ color: social.color }} className="group-hover:scale-125 transition-transform" />
            </div>
            <span className="font-black orbitron text-xs tracking-[0.4em] uppercase text-white group-hover:text-[#00F0FF] transition-colors">
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const Disclaimer = () => (
  <section className="py-20 bg-[#0D0D0D]">
    <div className="max-w-4xl mx-auto px-4">
      <div className="border-4 border-[#FF003C] p-12 relative overflow-hidden bg-[#FF003C05] shadow-[20px_20px_0px_#FF003C22]">
        <div className="absolute -top-10 -right-10 p-2 text-[#FF003C] opacity-[0.03] rotate-12">
          <AlertTriangle size={240} />
        </div>
        <div className="flex items-center space-x-4 text-[#FF003C] mb-8">
          <AlertTriangle size={32} className="flicker" />
          <h4 className="font-black orbitron text-3xl uppercase tracking-tighter italic">WARNING SIGNAL</h4>
        </div>
        <div className="space-y-4 text-lg font-black text-gray-400 uppercase tracking-widest leading-tight italic">
          <p>This token is a meme coin with no intrinsic value and no expectation of financial return.</p>
          <p>Cryptocurrency investments are highly volatile and risky.</p>
          <p>Do your own research. Not financial advice.</p>
        </div>
      </div>
      <div className="mt-20 text-center opacity-30 text-[10px] font-black orbitron uppercase tracking-[1em]">
        BRICSTARTER PROTOCOL // TERMINAL v1.0.42 // SOLANA MAINNET
      </div>
    </div>
  </section>
);

const App = () => {
  return (
    <div className="relative min-h-screen selection:bg-[#00F0FF] selection:text-black">
      <Ticker />
      <Navbar />
      <Hero />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Roadmap />
      <Socials />
      <Disclaimer />
      
      {/* Decorative vertical lines */}
      <div className="fixed left-4 top-0 h-full w-[1px] bg-[#ffffff05] z-0 hidden lg:block"></div>
      <div className="fixed right-4 top-0 h-full w-[1px] bg-[#ffffff05] z-0 hidden lg:block"></div>
    </div>
  );
};

export default App;
