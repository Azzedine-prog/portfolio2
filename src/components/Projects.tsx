'use client';

import { motion } from 'framer-motion';
import { Github } from '@/components/Icons';
import { useRouter } from 'next/navigation';

import { projectsData } from '@/data/projects';
import { useState } from 'react';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const [imgSrc, setImgSrc] = useState(project.image);
    const router = useRouter();

    return (
        <motion.div
            onClick={() => router.push(`/projects/${project.slug}`)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                y: -10,
                transition: { duration: 0.4, ease: "easeOut" }
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay: index * 0.1,
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className="glass-panel group flex flex-col h-full cursor-pointer overflow-hidden border-primary/5 hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(240,168,48,0.1)] transition-colors duration-500"
        >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden -mx-6 -mt-4 mb-6 rounded-t-2xl">
                <img
                    key={imgSrc}
                    src={imgSrc}
                    alt={project.title}
                    onError={() => setImgSrc('/images/project.jpg')}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                {/* Category + GitHub */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-primary uppercase tracking-widest bg-background/80 backdrop-blur-sm border border-primary/20 px-2 py-1 rounded-md">
                        {project.category}
                    </span>
                    {project.codeLink && (
                        <a
                            href={project.codeLink}
                            target="_blank"
                            onClick={(e) => e.stopPropagation()}
                            className="text-muted hover:text-primary transition-colors"
                        >
                            <Github size={16} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow px-1">
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-5 flex-grow line-clamp-3">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag: string) => (
                        <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                </div>

                <div className="mt-5 pt-4 border-t border-primary/10 flex items-center justify-between text-[10px] font-mono text-muted group-hover:text-primary transition-colors">
                    <span>View Project</span>
                    <span>→</span>
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 border-t border-primary/10 technical-grid">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="section-label">Portfolio</div>
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-muted max-w-2xl text-sm">
                        A selection of high-integrity embedded systems and automotive software projects — click any card to read full technical specifications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectsData.map((project, i) => (
                        <ProjectCard key={i} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
