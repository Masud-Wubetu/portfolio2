import React from 'react'
import { motion } from 'framer-motion'
import { personalInfo, aboutStats } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import profilePicture from '../../assets/image.png'
import { Download, ArrowRight } from 'lucide-react';

const About = () => {
    return (
        <section id='about' className='relative py-48 bg-transparent overflow-hidden'>

            {/* Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/3 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
            </div>

            <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10'>

                {/* Header Section */}
                <div className="mb-32">
                    <FadeIn delay={0}>
                        <h2 className='text-4xl md:text-9xl font-black text-white tracking-tighter leading-none mb-12'>
                            <span className="text-primary">Philosophy & Passion.</span>
                        </h2>
                        <p className='text-2xl md:text-4xl text-white font-medium leading-[1.1] max-w-4xl'>
                            I don't just build websites. I craft high-performance digital architectures that balance aesthetic elegance with engineering precision.
                        </p>
                    </FadeIn>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-12 gap-20 lg:items-start'>

                    {/* Left: Image Column (4 cols) */}
                    <div className='lg:col-span-5 relative group'>
                        <FadeIn delay={200}>
                            <div className="relative">
                                {/* Decorative Frames */}
                                <div className="absolute -inset-4 border border-white/5 rounded-[3rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
                                <div className="absolute -inset-4 border border-primary/20 rounded-[3rem] rotate-3 transition-transform group-hover:rotate-0 duration-700" />

                                <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0D0D0D] border border-white/10 shadow-2xl">
                                    <img
                                        src={profilePicture}
                                        alt={personalInfo.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 duration-250 scale-110 group-hover:scale-101"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                    {/* Name Overlay */}
                                    <div className="absolute bottom-10 left-10">
                                        <p className="text-primary font-black text-xs uppercase tracking-widest mb-1">Based in</p>
                                        <h4 className="text-white text-3xl font-black tracking-tighter">{personalInfo.location}</h4>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Content Column (7 cols) */}
                    <div className='lg:col-span-7 space-y-16'>

                        {/* Bio Section */}
                        <FadeIn delay={300}>
                            <div className='space-y-8'>
                                <h3 className="text-3xl font-black text-white tracking-tight flex items-center gap-4">
                                    <div className="w-12 h-[2px] bg-primary" />
                                    The Journey
                                </h3>
                                <div className='space-y-6'>
                                    {personalInfo.bio.map((paragraph, index) => (
                                        <p key={index} className='text-2xl text-white font-medium'>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About