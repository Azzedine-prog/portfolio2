'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { projectsData } from '@/data/projects';
import { motion } from 'framer-motion';
import {
    ChevronRight,
    Cpu,
    Terminal,
    Layers,
    Wrench,
    Github,
    ExternalLink,
    Code2,
    ChevronDown
} from '@/components/Icons';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const iconMap: { [key: string]: any } = {
    Cpu,
    Terminal,
    Layers,
    Wrench,
    Code2
};

export default function ProjectPage() {
    const params = useParams();
    const router = useRouter();
    const project = projectsData.find(p => p.slug === params.slug);
    const [currentImage, setCurrentImage] = useState(project?.image || '/images/project.jpg');

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background p-6">
                <div className="text-center space-y-6">
                    <div className="text-primary font-mono text-xl animate-pulse">404: MODULE_NOT_FOUND</div>
                    <button
                        onClick={() => router.push('/')}
                        className="px-8 py-3 border border-primary text-primary hover:bg-primary/10 transition-all font-mono"
                    >
                        RETURN_TO_SYSTEMS
                    </button>
                </div>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Header & Meta */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                            <button
                                onClick={() => router.push('/')}
                                className="hover:text-primary transition-colors"
                            >
                                Home
                            </button>
                            <ChevronRight size={14} />
                            <span>Projects</span>
                            <ChevronRight size={14} />
                            <span className="text-primary font-medium">{project.title}</span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-5xl md:text-7xl font-bold tracking-tighter"
                        >
                            {project.title}
                        </motion.h1>

                        <div className="flex flex-wrap gap-4">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-primary/5 border border-primary/20 text-primary text-[10px] uppercase font-mono rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="aspect-video relative overflow-hidden glass-panel border-white/5 group">
                            <div className="absolute inset-0 technical-grid opacity-20 pointer-events-none" />
                            <img
                                key={currentImage}
                                src={currentImage}
                                alt={project.title}
                                onError={() => setCurrentImage('/images/project.jpg')}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute -inset-1 border border-primary/20 pointer-events-none" />
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Overview</h2>
                            <p className="text-lg text-muted leading-relaxed">
                                {project.description}
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold">Key Objectives</h2>
                            <ul className="space-y-3">
                                {project.objectives.map((obj, i) => (
                                    <li key={i} className="flex gap-3 items-start text-muted">
                                        <div className="w-5 h-5 flex-shrink-0 border border-primary/40 rotate-45 flex items-center justify-center mt-0.5">
                                            <div className="w-1.5 h-1.5 bg-primary rotate-0" />
                                        </div>
                                        <span className="leading-relaxed text-sm">{obj}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Specs */}
                    <aside className="lg:col-span-4 space-y-8">
                        <div className="glass-panel sticky top-32 space-y-8 border-primary/20 border-l-4">
                            <div>
                                <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">Released</div>
                                <div className="text-xl font-bold text-foreground">{project.date}</div>
                            </div>

                            <div>
                                <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-3">Tech Stack</div>
                                <div className="space-y-3">
                                    {project.hardware.map((item, i) => {
                                        const Icon = iconMap[item.icon] || Cpu;
                                        return (
                                            <div key={i} className="flex items-center gap-3 group">
                                                <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/15 flex items-center justify-center text-primary group-hover:border-primary/40 transition-colors">
                                                    <Icon size={16} />
                                                </div>
                                                <span className="text-sm font-medium">{item.name}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-primary/10">
                                {project.codeLink ? (
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-background font-bold rounded-xl hover:shadow-glow-gold hover:scale-[1.02] transition-all duration-300"
                                    >
                                        View Repository
                                        <ExternalLink size={16} />
                                    </a>
                                ) : (
                                    <div className="text-center text-xs font-mono text-muted py-4 border border-dashed border-primary/15 rounded-lg italic">
                                        Repository is private or encrypted
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="p-6 border border-dashed border-primary/10 rounded-lg bg-primary/2">
                            <div className="text-[10px] font-mono text-primary/60 mb-2 uppercase">Status_Report</div>
                            <div className="text-xs text-muted leading-relaxed italic font-mono">
                                This module has undergone rigorous HIL/SIL verification and is maintained in the current production baseline.
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Other Projects */}
                <section className="mt-24 max-w-7xl mx-auto border-t border-primary/10 pt-20">
                    <div className="section-label">Keep Exploring</div>
                    <h2 className="text-2xl font-extrabold mb-10">More Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projectsData.filter(p => p.slug !== project.slug).slice(0, 3).map((p, i) => (
                            <motion.button
                                key={i}
                                onClick={() => router.push(`/projects/${p.slug}`)}
                                className="glass-panel group text-left border-primary/5 hover:border-primary/20 transition-all p-6"
                            >
                                <div className="text-[10px] font-mono text-primary/60 mb-4 uppercase">{p.category}</div>
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">{p.title}</h3>
                                <p className="text-xs text-muted line-clamp-2">{p.description}</p>
                            </motion.button>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
