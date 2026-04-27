import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import FadeIn from '../animations/FadeIn'

const Projects = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // For 9 projects, we need a significant translation to see them all.
    // -88% is a good estimate to move the track nearly to its end.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-88%"]);

    return (
        <section id="projects" ref={targetRef} className="relative h-[900vh] bg-transparent">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                {/* Background accents */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/3 right-0 w-96 h-96 bg-transparent rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-transparent rounded-full blur-[120px]" />
                </div>

                {/* Header Section */}
                <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full mb-12">
                    <FadeIn delay={0}>
                        <div className="text-left">
                            <h3 className="text-sm font-medium text-white uppercase tracking-[0.3em] mb-4">SELECTED WORKS</h3>
                            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-primary mb-6">
                                My Digital Works.
                            </h2>
                            <p className="text-2xl text-white/60 max-w-2xl font-medium">
                                Architecting performance-first experiences that push the boundaries of the web.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Horizontal Scrolling Track */}
                <div className="relative z-10 w-full overflow-hidden">
                    <motion.div 
                        style={{ x }} 
                        className="flex gap-12 px-8 lg:px-24 w-max"
                    >
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className="w-[85vw] md:w-[600px] lg:w-[850px] shrink-0"
                            >
                                <ProjectCard project={project} index={index} />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/20 text-[10px] font-mono tracking-widest uppercase">
                    <div className="w-[200px] h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div 
                            style={{ scaleX: scrollYProgress }} 
                            className="absolute inset-0 bg-primary origin-left" 
                        />
                    </div>
                    <span>Explore Projects</span>
                </div>
            </div>
        </section>
    )
}

export default Projects