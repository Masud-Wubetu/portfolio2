import React, { useState } from 'react'
import { skills } from '../../data/skills'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '../animations/FadeIn'
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiMongodb, SiPostgresql, SiJavascript,
    SiPython, SiExpress, SiHtml5, SiCss, SiFirebase,
    SiDjango, SiPrisma, SiMysql, SiStripe, SiGithub,
    SiDocker, SiLinux, SiNestjs, SiVite, SiBootstrap,
    SiPostman, SiJest, SiFigma, SiFlutter
} from 'react-icons/si'

const getTechInfo = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('react')) return { color: '#61DAFB' };
    if (name.includes('next')) return { color: '#ffffff' };
    if (name.includes('type')) return { color: '#3178C6' };
    if (name.includes('tailwind')) return { color: '#06B6D4' };
    if (name.includes('node')) return { color: '#339933' };
    if (name.includes('mongo')) return { color: '#47A248' };
    if (name.includes('postgre')) return { color: '#4169E1' };
    if (name.includes('python')) return { color: '#3776AB' };
    if (name.includes('express')) return { color: '#ffffff' };
    if (name.includes('html')) return { color: '#E34F26' };
    if (name.includes('css')) return { color: '#1572B6' };
    if (name.includes('firebase')) return { color: '#FFCA28' };
    if (name.includes('django')) return { color: '#092E20' };
    if (name.includes('prisma')) return { color: '#2D3748' };
    if (name.includes('mysql')) return { color: '#4479A1' };
    if (name.includes('stripe')) return { color: '#635BFF' };
    if (name.includes('javascript')) return { color: '#F7DF1E' };
    if (name.includes('github')) return { color: '#ffffff' };
    if (name.includes('docker')) return { color: '#2496ED' };
    if (name.includes('linux')) return { color: '#FCC624' };
    if (name.includes('nestjs')) return { color: '#E0234E' };
    if (name.includes('vite')) return { color: '#646CFF' };
    if (name.includes('bootstrap')) return { color: '#7952B3' };
    if (name.includes('postman')) return { color: '#FF6C37' };
    if (name.includes('jest')) return { color: '#C21325' };
    if (name.includes('figma')) return { color: '#F24E1E' };
    if (name.includes('flutter')) return { color: '#02569B' };
    return { color: '#888888' };
};

const SkillIcon = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);
    const Icon = skill.icon;
    const { color } = getTechInfo(skill.name);

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                whileHover={{
                    scale: 2.3,
                    zIndex: 50,
                    transition: { type: "spring", stiffness: 1300, damping: 16, mass: 0.9 }
                }}
                className="w-12 h-12 md:w-13 md:h-13 rounded-xl flex items-center justify-center cursor-pointer relative overflow-visible border border-white/10"
                style={{ backgroundColor: color }}
            >
                <Icon
                    className="w-6 h-6 md:w-7 md:h-7"
                    style={{ color: '#000000' }}
                />
            </motion.div>

            {/* Tooltip / Name */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="absolute -bottom-8 z-50 whitespace-nowrap pointer-events-none"
                    >
                        <div
                            className="text-black text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full shadow-2xl"
                            style={{ backgroundColor: color === '#ffffff' ? '#ffffff' : color }}
                        >
                            {skill.name}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const Skills = () => {
    const categories = [
        {
            title: "LIBRARIES AND FRAMEWORKS",
            items: ["React", "Next.js", "NestJS", "ExpressJs", "TailwindCss", "Bootstrap", "Flutter"]
        },
        {
            title: "LANGUAGES AND TOOLS",
            items: ["JavaScript", "TypeScript", "Python", "C++", "Html5", "Css", "Figma", "Postman", "Jest"]
        },
        {
            title: "DEVOPS",
            items: ["Git & GitHub", "Docker", "Linux", "Firebase", "Vite"]
        },
        {
            title: "DATA ANALYSIS",
            items: ["Python", "MySQL", "PostgreSQL", "MongoDB"]
        }
    ];

    return (
        <section id="skills" className="relative py-48 bg-transparent overflow-hidden">

            {/* Background Wavy Lines */}
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 pointer-events-none overflow-hidden">
                <svg viewBox="0 0 400 800" className="h-full w-full stroke-primary/30 fill-none">
                    <path d="M400,0 Q300,100 350,200 T400,400 T300,600 T400,800" strokeWidth="2" />
                    <path d="M400,50 Q320,150 370,250 T380,450 T320,650 T400,850" strokeWidth="1" />
                    <path d="M400,100 Q340,200 390,300 T360,500 T340,700 T400,900" strokeWidth="0.5" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

                {/* Header: Full Width */}
                <div className="mb-32 text-left">
                    <FadeIn delay={0}>
                        <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none mb-10">
                            <span className="text-primary">My Skills.</span>
                        </h2>
                        <div className="flex items-start">
                            <p className="text-2xl md:text-4xl text-white/90 font-medium leading-[1.1] max-w-5xl">
                                I have production-level experience in crafting aesthetic user experiences with modern frontend architecture, knowing when to use the right tools.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Categories: Full Width Stacks */}
                <div className="space-y-12">
                    {categories.map((cat, idx) => (
                        <FadeIn key={cat.title} delay={idx * 150}>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <h4 className="text-2xl font-black text-white uppercase">
                                        {cat.title}
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-6 md:gap-7 pl-2">
                                    {cat.items.map(skillName => {
                                        const skill = skills.find(s => s.name === skillName);
                                        return skill ? <SkillIcon key={skill.id} skill={skill} /> : null;
                                    })}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Subtle glow orb */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
        </section>
    )
}

export default Skills