import React, { useRef, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
    SiNodedotjs, SiMongodb, SiPostgresql, SiJavascript,
    SiPython, SiExpress, SiHtml5, SiCss, SiFirebase,
    SiDjango, SiPrisma, SiMysql, SiStripe
} from 'react-icons/si'

const getTechInfo = (techName) => {
    const name = techName.toLowerCase();
    if (name.includes('react')) return { icon: SiReact, color: '#61DAFB' };
    if (name.includes('next')) return { icon: SiNextdotjs, color: '#ffffff' };
    if (name.includes('type')) return { icon: SiTypescript, color: '#3178C6' };
    if (name.includes('tailwind')) return { icon: SiTailwindcss, color: '#06B6D4' };
    if (name.includes('node')) return { icon: SiNodedotjs, color: '#339933' };
    if (name.includes('mongo')) return { icon: SiMongodb, color: '#47A248' };
    if (name.includes('postgre')) return { icon: SiPostgresql, color: '#4169E1' };
    if (name.includes('python')) return { icon: SiPython, color: '#3776AB' };
    if (name.includes('express')) return { icon: SiExpress, color: '#ffffff' };
    if (name.includes('html')) return { icon: SiHtml5, color: '#E34F26' };
    if (name.includes('css')) return { icon: SiCss, color: '#1572B6' };
    if (name.includes('firebase')) return { icon: SiFirebase, color: '#FFCA28' };
    if (name.includes('django')) return { icon: SiDjango, color: '#092E20' };
    if (name.includes('prisma')) return { icon: SiPrisma, color: '#2D3748' };
    if (name.includes('mysql')) return { icon: SiMysql, color: '#4479A1' };
    if (name.includes('stripe')) return { icon: SiStripe, color: '#635BFF' };
    return { icon: SiJavascript, color: '#F7DF1E' };
};

// Each theme has multiple soft gradient stops for the fluid wave layers
const cardThemes = [
    { // Soft sky blue
        base: 'linear-gradient(150deg, #d4f1ff 0%, #a0d8f1 30%, #7ec8e3 60%, #5ab4db 100%)',
        waves: [
            { d: 'M0,250 C100,200 100,200 200,250 C300,300 300,300 400,250 C500,200 500,200 600,250 C700,300 700,300 800,250 L800,600 L0,600 Z' },
            { d: 'M0,320 C100,280 100,280 200,320 C300,360 300,360 400,320 C500,280 500,280 600,320 C700,360 700,360 800,320 L800,600 L0,600 Z' },
            { d: 'M0,400 C100,370 100,370 200,400 C300,430 300,430 400,400 C500,370 500,370 600,400 C700,430 700,430 800,400 L800,600 L0,600 Z' },
        ],
        colors: [['#8ecae6', '#6db6d6'], ['#5aa7c8', '#4899bb'], ['#3d8db0', '#2d7da0']]
    },
    { // Soft coral pink
        base: 'linear-gradient(150deg, #ffe0e6 0%, #ffb8c6 30%, #ffa0b4 60%, #ff8da3 100%)',
        waves: [
            { d: 'M0,260 C100,210 100,210 200,260 C300,310 300,310 400,260 C500,210 500,210 600,260 C700,310 700,310 800,260 L800,600 L0,600 Z' },
            { d: 'M0,330 C100,290 100,290 200,330 C300,370 300,370 400,330 C500,290 500,290 600,330 C700,370 700,370 800,330 L800,600 L0,600 Z' },
            { d: 'M0,410 C100,380 100,380 200,410 C300,440 300,440 400,410 C500,380 500,380 600,410 C700,440 700,440 800,410 L800,600 L0,600 Z' },
        ],
        colors: [['#ffb3c6', '#ff99b0'], ['#ff8099', '#ff6688'], ['#f05577', '#e04468']]
    },
    { // Fresh green
        base: 'linear-gradient(150deg, #d1fae5 0%, #6ee7b7 30%, #4edba0 60%, #34d399 100%)',
        waves: [
            { d: 'M0,240 C100,190 100,190 200,240 C300,290 300,290 400,240 C500,190 500,190 600,240 C700,290 700,290 800,240 L800,600 L0,600 Z' },
            { d: 'M0,310 C100,270 100,270 200,310 C300,350 300,350 400,310 C500,270 500,270 600,310 C700,350 700,350 800,310 L800,600 L0,600 Z' },
            { d: 'M0,390 C100,360 100,360 200,390 C300,420 300,420 400,390 C500,360 500,360 600,390 C700,420 700,420 800,390 L800,600 L0,600 Z' },
        ],
        colors: [['#6ee7b7', '#4edba0'], ['#34d399', '#22c589'], ['#15b878', '#0fa86c']]
    },
    { // Warm sunset
        base: 'linear-gradient(150deg, #fff1d6 0%, #ffd9a0 30%, #ffc878 60%, #ffb347 100%)',
        waves: [
            { d: 'M0,255 C100,205 100,205 200,255 C300,305 300,305 400,255 C500,205 500,205 600,255 C700,305 700,305 800,255 L800,600 L0,600 Z' },
            { d: 'M0,325 C100,285 100,285 200,325 C300,365 300,365 400,325 C500,285 500,285 600,325 C700,365 700,365 800,325 L800,600 L0,600 Z' },
            { d: 'M0,405 C100,375 100,375 200,405 C300,435 300,435 400,405 C500,375 500,375 600,405 C700,435 700,435 800,405 L800,600 L0,600 Z' },
        ],
        colors: [['#ffcc80', '#ffb347'], ['#ffa726', '#ff9800'], ['#f57c00', '#ef6c00']]
    },
    { // Soft lavender
        base: 'linear-gradient(150deg, #f0e6ff 0%, #d9c2ff 30%, #c9adff 60%, #b794f6 100%)',
        waves: [
            { d: 'M0,245 C100,195 100,195 200,245 C300,295 300,295 400,245 C500,195 500,195 600,245 C700,295 700,295 800,245 L800,600 L0,600 Z' },
            { d: 'M0,315 C100,275 100,275 200,315 C300,355 300,355 400,315 C500,275 500,275 600,315 C700,355 700,355 800,315 L800,600 L0,600 Z' },
            { d: 'M0,395 C100,365 100,365 200,395 C300,425 300,425 400,395 C500,365 500,365 600,395 C700,425 700,425 800,395 L800,600 L0,600 Z' },
        ],
        colors: [['#c9adff', '#b794f6'], ['#a37ee8', '#8f68d8'], ['#7b52c4', '#6a3fb4']]
    },
    { // Pastel rose
        base: 'linear-gradient(150deg, #fce4ec 0%, #f8bbd0 30%, #f48fb1 60%, #f06292 100%)',
        waves: [
            { d: 'M0,250 C100,200 100,200 200,250 C300,300 300,300 400,250 C500,200 500,200 600,250 C700,300 700,300 800,250 L800,600 L0,600 Z' },
            { d: 'M0,320 C100,280 100,280 200,320 C300,360 300,360 400,320 C500,280 500,280 600,320 C700,360 700,360 800,320 L800,600 L0,600 Z' },
            { d: 'M0,400 C100,370 100,370 200,400 C300,430 300,430 400,400 C500,370 500,370 600,400 C700,430 700,430 800,400 L800,600 L0,600 Z' },
        ],
        colors: [['#f8bbd0', '#f48fb1'], ['#ec407a', '#e91e63'], ['#c2185b', '#ad1457']]
    },
    { // Mint teal
        base: 'linear-gradient(150deg, #e0f7fa 0%, #b2ebf2 30%, #80deea 60%, #4dd0e1 100%)',
        waves: [
            { d: 'M0,260 C100,210 100,210 200,260 C300,310 300,310 400,260 C500,210 500,210 600,260 C700,310 700,310 800,260 L800,600 L0,600 Z' },
            { d: 'M0,330 C100,290 100,290 200,330 C300,370 300,370 400,330 C500,290 500,290 600,330 C700,370 700,370 800,330 L800,600 L0,600 Z' },
            { d: 'M0,410 C100,380 100,380 200,410 C300,440 300,440 400,410 C500,380 500,380 600,410 C700,440 700,440 800,410 L800,600 L0,600 Z' },
        ],
        colors: [['#80deea', '#4dd0e1'], ['#26c6da', '#00bcd4'], ['#00acc1', '#0097a7']]
    },
    { // Peach warm
        base: 'linear-gradient(150deg, #fff3e0 0%, #ffe0b2 30%, #ffcc80 60%, #ffb74d 100%)',
        waves: [
            { d: 'M0,245 C100,195 100,195 200,245 C300,295 300,295 400,245 C500,195 500,195 600,245 C700,295 700,295 800,245 L800,600 L0,600 Z' },
            { d: 'M0,315 C100,275 100,275 200,315 C300,355 300,355 400,315 C500,275 500,275 600,315 C700,355 700,355 800,315 L800,600 L0,600 Z' },
            { d: 'M0,395 C100,365 100,365 200,395 C300,425 300,425 400,395 C500,365 500,365 600,395 C700,425 700,425 800,395 L800,600 L0,600 Z' },
        ],
        colors: [['#ffcc80', '#ffb74d'], ['#ffa726', '#ff9800'], ['#fb8c00', '#f57c00']]
    },
    { // Soft fuchsia
        base: 'linear-gradient(150deg, #fce4ff 0%, #f0b8ff 30%, #e48dff 60%, #d660f0 100%)',
        waves: [
            { d: 'M0,250 C100,200 100,200 200,250 C300,300 300,300 400,250 C500,200 500,200 600,250 C700,300 700,300 800,250 L800,600 L0,600 Z' },
            { d: 'M0,320 C100,280 100,280 200,320 C300,360 300,360 400,320 C500,280 500,280 600,320 C700,360 700,360 800,320 L800,600 L0,600 Z' },
            { d: 'M0,400 C100,370 100,370 200,400 C300,430 300,430 400,400 C500,370 500,370 600,400 C700,430 700,430 800,400 L800,600 L0,600 Z' },
        ],
        colors: [['#e48dff', '#d660f0'], ['#c836e0', '#b620cc'], ['#a010b8', '#8a00a0']]
    },
];

const floatingPositions = [
    { top: '32%', left: '8%' },
    { top: '60%', left: '5%' },
    { bottom: '18%', left: '18%' },
    { top: '28%', right: '8%' },
    { bottom: '22%', right: '6%' },
    { top: '52%', right: '4%' },
];

const ProjectCard = ({ project, index = 0 }) => {
    const { title, description, image, technologies, demoUrl, githubUrl } = project
    const cardRef = useRef(null);
    const [transformStyle, setTransformStyle] = useState('');
    const theme = cardThemes[index % cardThemes.length];

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        const rotateX = -y * 10;
        const rotateY = x * 10;
        setTransformStyle(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    };

    const handleMouseLeave = () => {
        setTransformStyle('rotateX(0deg) rotateY(0deg)');
    };

    return (
        <div className="w-full h-full p-4 perspective-[2000px]">
            <div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: transformStyle || 'rotateX(0deg) rotateY(0deg)',
                    transition: transformStyle ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                    transformStyle: 'preserve-3d'
                }}
                className="group relative w-full h-[400px] md:h-[480px] rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
                {/* 1. Base gradient background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{ background: theme.base }}
                />

                {/* 2. Fluid layered wave SVG */}
                <svg
                    className="absolute inset-0 w-full h-full z-[1]"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {theme.colors.map((pair, i) => (
                            <linearGradient key={i} id={`wave_${index}_${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={pair[0]} stopOpacity="1" />
                                <stop offset="100%" stopColor={pair[1]} stopOpacity="1" />
                            </linearGradient>
                        ))}
                    </defs>

                    {/* Soft glowing circles for depth */}
                    <circle cx="700" cy="100" r="160" fill="white" opacity="0.08" />
                    <circle cx="100" cy="480" r="120" fill="white" opacity="0.06" />
                    <circle cx="400" cy="60" r="80" fill="white" opacity="0.05" />

                    {/* Fluid wave layers — high opacity for clear visibility */}
                    {theme.waves.map((wave, i) => (
                        <path
                            key={i}
                            d={wave.d}
                            fill={`url(#wave_${index}_${i})`}
                            opacity={0.85 - i * 0.1}
                        />
                    ))}
                </svg>

                {/* 3. Title */}
                <div className="absolute top-8 left-8 right-24 z-20" style={{ transform: 'translateZ(40px)' }}>
                    <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                        {title}
                    </h3>
                </div>

                {/* 4. Description */}
                <div className="absolute bottom-8 left-8 right-8 z-20" style={{ transform: 'translateZ(40px)' }}>
                    <p className="text-lg md:text-xl font-medium text-white/95 drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
                        {description}
                    </p>
                </div>

                {/* 5. Slanted Image Mockup — top-right corner */}
                <div 
                    className="absolute top-6 right-[-5%] w-[60%] h-[65%] z-10 pointer-events-none"
                    style={{ transform: 'translateZ(60px)' }}
                >
                    <div className="w-full h-full rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/15 transform rotate-[8deg] group-hover:rotate-[4deg] group-hover:scale-105 transition-all duration-500">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>

                {/* 6. Floating Tech Icons — brand colored */}
                <div className="absolute inset-0 z-20 pointer-events-none" style={{ transform: 'translateZ(80px)' }}>
                    {technologies.slice(0, 5).map((tech, i) => {
                        const { icon: Icon, color } = getTechInfo(tech);
                        const pos = floatingPositions[i % floatingPositions.length];
                        return (
                            <div
                                key={i}
                                className="absolute p-3 bg-[#1a1a2e]/85 backdrop-blur-sm rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)] border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    ...pos,
                                    transform: `translate(-50%, -50%) rotate(${i % 2 === 0 ? 6 : -6}deg)`
                                }}
                            >
                                <Icon className="w-7 h-7" style={{ color }} />
                            </div>
                        )
                    })}
                </div>

                {/* 7. Links */}
                <div
                    className="absolute top-8 right-8 z-30 flex gap-3 pointer-events-auto"
                    style={{ transform: 'translateZ(50px)' }}
                >
                    {demoUrl && (
                        <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/25 hover:bg-white hover:text-black backdrop-blur-md rounded-full transition-all text-white">
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                    {githubUrl && (
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/25 hover:bg-white hover:text-black backdrop-blur-md rounded-full transition-all text-white">
                            <FaGithub className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard