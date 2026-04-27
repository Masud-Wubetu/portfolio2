import React, { useState, useEffect, useRef } from 'react'
import { testimonials } from '../../data/testimonials'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const TimelineItem = ({ item, index, setActiveIndex }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { 
        margin: "-50% 0px -50% 0px" // Trigger exactly at vertical center
    });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <div 
            ref={ref} 
            className="relative flex gap-8 md:gap-20 pb-64 last:pb-0"
        >
            {/* Timeline Dot & Content */}
            <div className="relative flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border-2 border-primary/30 bg-black flex items-center justify-center z-20">
                    <motion.div 
                        animate={{ 
                            scale: isInView ? 1.2 : 0.6, 
                            opacity: isInView ? 1 : 0.4,
                            backgroundColor: isInView ? '#ffffff' : 'rgba(255,255,255,0.2)' 
                        }}
                        className="w-3 h-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
                    />
                </div>
            </div>

            {/* Text Content */}
            <motion.div 
                animate={{ 
                    opacity: isInView ? 1 : 0.1,
                    x: isInView ? 0 : -30,
                }}
                transition={{ duration: 0.5 }}
                className="flex-1 pt-0"
            >
                <motion.span 
                    animate={{ 
                        color: isInView ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.05)',
                        scale: isInView ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-6xl md:text-9xl font-black tracking-tighter block mb-4"
                >
                    {item.year}
                </motion.span>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-10 bg-red-600 rounded-full" />
                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            {item.role}
                        </h3>
                    </div>
                    <p className="text-xl md:text-2xl text-white/60 font-medium leading-relaxed max-w-lg">
                        "{item.quote}"
                    </p>
                    <div className="flex flex-col gap-1 pt-4">
                        <span className="text-xl font-black text-primary uppercase tracking-widest">{item.name}</span>
                        <span className="text-lg font-medium text-white/40 uppercase tracking-[0.2em]">{item.company}</span>
                    </div>

                    {/* Mobile Image */}
                    <div className="mt-12 block lg:hidden rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                        <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full aspect-[4/3] object-cover"
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
        <section id="testimonials" className="relative bg-transparent min-h-screen">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
                
                {/* Header Section */}
                <div className="text-left mb-48">
                    <h3 className="text-sm font-black text-white/40 uppercase tracking-[0.5em] mb-4">EXPERIENCE & IMPACT</h3>
                    <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                        Success <span className="text-primary">Stories.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-start relative gap-24">
                    
                    {/* LEFT: Timeline Content */}
                    <div className="lg:w-[40%] relative">
                        <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-white/10" />
                        
                        <div className="relative pt-[20vh] pb-[40vh]">
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