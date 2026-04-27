import React, { useRef, useEffect } from 'react'
import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import FadeIn from '../animations/FadeIn'

const Projects = () => {
    const sectionRef = useRef(null);
    const scrollContainerRef = useRef(null);

    // Sticky horizontal scroll: capture vertical scroll and convert to horizontal
    useEffect(() => {
        const section = sectionRef.current;
        const container = scrollContainerRef.current;
        if (!section || !container) return;

        const handleWheel = (e) => {
            const maxScrollLeft = container.scrollWidth - container.clientWidth;

            // If there's nothing to scroll horizontally, let the page scroll normally
            if (maxScrollLeft <= 0) return;

            const atStart = container.scrollLeft <= 0;
            const atEnd = container.scrollLeft >= maxScrollLeft - 1;

            // If scrolling up and already at the start, let page scroll normally
            if (e.deltaY < 0 && atStart) return;

            // If scrolling down and already at the end, let page scroll normally
            if (e.deltaY > 0 && atEnd) return;

            // Otherwise, hijack the scroll and move horizontally
            e.preventDefault();
            container.scrollLeft += e.deltaY * 1.5;
        };

        section.addEventListener('wheel', handleWheel, { passive: false });
        return () => section.removeEventListener('wheel', handleWheel);
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="relative py-20 bg-transparent overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3x" />
                <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/20 opacity-20 rounded-full blur-3x" />
                <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-primary/10 opacity-20 rounded-full blur-3x" />
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
                <FadeIn delay={0}>
                    <div className="text-left mb-16">
                        <h3 className="text-sm font-bold text-white uppercase tracking-[0.3em] mb-4">WORKS</h3>
                        <h2 className="text-6xl md:text-8xl font-bold text-primary mb-6 tracking-tight">
                            My Works
                        </h2>
                        <p className="text-2xl text-white max-w-2xl font-medium">
                            Crafted with expertise, and a pinch of magic.
                        </p>
                    </div>
                </FadeIn>
            </div>

            {/* Projects Carousel - Full Width */}
            <div className="relative z-10 w-full overflow-hidden">
                <FadeIn delay={200}>
                    <div className="relative w-full overflow-visible">
                        <div
                            ref={scrollContainerRef}
                            className="overflow-x-auto hide-scrollbar pb-16 pt-8 px-6 sm:px-8 lg:px-12"
                        >
                            <div className="flex gap-10 w-max pr-32">
                                {projects.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="w-[40vw] md:w-[450px] lg:w-[750px] shrink-0"
                                    >
                                        <ProjectCard project={project} index={index} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
export default Projects