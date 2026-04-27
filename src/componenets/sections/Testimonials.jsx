import React, { useState, useEffect, useRef } from 'react'
import { testimonials } from '../../data/testimonials'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const TimelineItem = ({ item, index, setActiveIndex }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        margin: "-40% 0px -40% 0px"
    });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <div 
            ref={ref} 
            className="relative flex gap-12 md:gap-24 pb-48 last:pb-20"
        >
            {/* Timeline Line & Dot */}
            <div className="relative flex flex-col items-center w-[52px] shrink-0">
                {/* Main Line (Left) Highlight */}
                <div className={`absolute left-[7px] top-0 bottom-0 w-[1px] transition-colors duration-700 ${
                    isInView ? 'bg-primary' : 'bg-transparent'
                }`} />

                {/* Second Line (Right) Highlight */}
                <div className={`absolute left-[45px] top-0 bottom-0 w-[1px] transition-colors duration-700 ${
                    isInView ? 'bg-primary' : 'bg-transparent'
                }`} />
                
                {/* Connecting Curve */}
                {isInView && (
                    <svg className="absolute top-10 left-[7px] w-[38px] h-32 overflow-visible pointer-events-none" viewBox="0 0 38 100">
                        <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            d="M 0 0 C 0 40, 38 40, 38 80"
                            fill="none"
                            stroke="var(--color-primary)"
                            strokeWidth="1.5"
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </svg>
                )}

                {/* Dot on first line */}
                <div className="absolute left-[7px] top-10 -translate-x-1/2 z-20">
                    <div className={`w-3 h-3 rounded-full border transition-all duration-700 ${
                        isInView ? 'border-primary bg-primary' : 'border-white/10 bg-transparent'
                    }`} />
                </div>

                {/* Dot on second line */}
                <div className="absolute left-[45px] top-[90px] -translate-x-1/2 z-20">
                    <div className={`w-5 h-5 rounded-full border-2 transition-all duration-700 flex items-center justify-center ${
                        isInView 
                            ? 'border-primary bg-black shadow-[0_0_15px_rgba(168,85,247,0.4)]' 
                            : 'border-white/10 bg-black'
                    }`}>
                        <div className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${
                            isInView ? 'bg-primary' : 'bg-transparent'
                        }`} />
                    </div>
                </div>
            </div>

            {/* Text Content */}
            <motion.div 
                animate={{ 
                    opacity: isInView ? 1 : 0.2,
                    x: isInView ? 0 : 30,
                    filter: isInView ? 'blur(0px)' : 'blur(4px)'
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1"
            >
                {/* Content Block */}
                <div className="space-y-2 mb-4">
                    <h4 className={`text-xl font-bold transition-colors duration-700 ${
                        isInView ? 'text-primary' : 'text-white/20'
                    }`}>
                        {item.role}
                    </h4>
                    <p className={`text-2xl md:text-3xl font-medium leading-tight max-w-md transition-colors duration-700 ${
                        isInView ? 'text-white' : 'text-white/10'
                    }`}>
                        {item.quote}
                    </p>
                </div>

                {/* Large Year */}
                <span className={`text-7xl md:text-[10rem] font-black tracking-tighter block leading-[0.8] mb-12 transition-all duration-700 ${
                    isInView ? 'text-white translate-x-0' : 'text-white/5 -translate-x-4'
                }`}>
                    {item.year}
                </span>

                {/* Secondary Info Block (Branched Content) */}
                <div className={`space-y-6 pl-8 border-l border-white/10 transition-all duration-700 delay-100 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 bg-primary/10 rounded-xl border border-primary/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                            <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="16 18 22 12 16 6"></polyline>
                                <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                        </div>
                        <div>
                            <span className="text-sm font-black text-primary uppercase tracking-[0.4em] block mb-1">Position</span>
                            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                                {item.role}
                            </h3>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1 pt-4">
                        <span className="text-xl font-black text-white uppercase tracking-widest">{item.name}</span>
                        <span className="text-sm font-bold text-white/20 uppercase tracking-[0.3em]">{item.company}</span>
                    </div>

                    {/* Mobile Image */}
                    <div className="mt-12 block lg:hidden rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                        <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full aspect-[16/10] object-cover"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="testimonials" className="relative bg-transparent min-h-screen py-32">
            <div className="max-w-[1440px] mx-auto px-8">
                
                {/* Header Section */}
                <div className="text-left mb-48">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-[2px] bg-primary" />
                        <h3 className="text-sm font-black text-primary uppercase tracking-[0.5em]">EXPERIENCE</h3>
                    </div>
                    <h2 className="text-8xl md:text-[10rem] font-black text-white tracking-tighter leading-[0.8] mb-4">
                        My <span className="text-primary">Journey.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-start relative gap-32">
                    
                    {/* LEFT: Timeline Content */}
                    <div className="lg:w-[45%] relative">
                        {/* Double Vertical Lines */}
                        <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-white/5" />
                        <div className="absolute left-[45px] top-0 bottom-0 w-[1px] bg-white/5" />
                        
                        <div className="relative pt-20">
                            {testimonials.map((item, index) => (
                                <TimelineItem 
                                    key={item.id} 
                                    item={item} 
                                    index={index} 
                                    setActiveIndex={setActiveIndex} 
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Sticky Image - Card is STATIC, only inner image transitions */}
                    <div className="lg:w-[60%] sticky top-0 h-screen hidden lg:flex items-center">
                        <div className="w-full relative">
                            {/* STATIC CARD CONTAINER */}
                            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0A0C10] border border-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.8)]">
                                
                                {/* Static Browser Frame */}
                                <div className="flex items-center gap-3 px-8 py-5 bg-white/[0.03] border-b border-white/5 z-20 relative">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                        <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                                    </div>
                                    <div className="flex-1 text-center">
                                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                                            {testimonials[activeIndex].company}.preview
                                        </span>
                                    </div>
                                </div>
                                
                                {/* ANIMATED IMAGE AREA */}
                                <div className="aspect-video relative overflow-hidden bg-black">
                                    <AnimatePresence>
                                        <motion.div 
                                            key={activeIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute inset-0"
                                        >
                                            <img 
                                                src={testimonials[activeIndex].image} 
                                                alt={testimonials[activeIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Overlays */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                                            
                                            {/* Static-like Text Info (Transitions with image) */}
                                            <div className="absolute bottom-10 left-10">
                                                <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">
                                                    {testimonials[activeIndex].role}
                                                </p>
                                                <h4 className="text-white text-3xl font-black tracking-tighter">
                                                    {testimonials[activeIndex].company}
                                                </h4>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                            
                            {/* Decorative Orbs */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
                            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonials