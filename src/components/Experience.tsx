'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Software Engineer",
        company: "Lear Corporation",
        period: "Jan 2022 – Present",
        logo: "/images/Lear.png",
        desc: "Lead software integration for Renault and Nissan body control modules, coordinating multi-country teams through ASPICE-compliant releases. Configure AUTOSAR BSW, diagnostics, and cybersecurity features while maintaining ISO 26262 traceability.",
        skills: ["AUTOSAR", "ISO 26262", "ASPICE", "Cybersecurity", "CAPL", "UDS"],
        current: true,
    },
    {
        role: "Software Engineer – Intern",
        company: "Lear Corporation",
        period: "Jan 2021 – Jan 2022",
        logo: "/images/Lear.png",
        desc: "Implemented rear-lighting features and diagnostics in AUTOSAR using C, DaVinci Configurator, and CAPL. Prepared HIL/SIL validation campaigns and supported system integration testing.",
        skills: ["AUTOSAR", "DaVinci", "CAPL", "HIL/SIL", "Embedded C"],
        current: false,
    },
    {
        role: "Embedded Systems Engineer – Intern",
        company: "Meetek",
        period: "June 2020 – Sept 2020",
        logo: "/images/Meetek.png",
        desc: "Designed a Cortex-M4 smart weighing machine with custom analog front-end and industrial calibration routines. Delivered Modbus connectivity for SCADA integration.",
        skills: ["Cortex-M4", "Modbus", "PCB Design", "Analog", "C"],
        current: false,
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="mb-14">
                <div className="section-label">Professional Journey</div>
                <h2 className="text-4xl font-extrabold tracking-tight">
                    Work Experience
                </h2>
            </div>

            <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent hidden md:block" />

                <div className="space-y-6 md:pl-8">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel group relative"
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[42px] top-6 w-3 h-3 rounded-full bg-primary border-2 border-background hidden md:block" />

                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                                <div className="flex items-start gap-4">
                                    {/* Company logo */}
                                    <div className="w-12 h-12 rounded-xl bg-surface flex-shrink-0 flex items-center justify-center overflow-hidden border border-primary/10">
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="w-8 h-8 object-contain"
                                            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                        />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                                {exp.role}
                                            </h3>
                                            {exp.current && (
                                                <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider animate-pulse">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-muted text-sm font-medium mt-0.5">{exp.company}</div>
                                    </div>
                                </div>
                                <div className="px-4 py-1.5 rounded-lg bg-primary/5 border border-primary/15 text-primary font-mono text-xs whitespace-nowrap self-start">
                                    {exp.period}
                                </div>
                            </div>

                            <p className="text-muted leading-relaxed mb-5 max-w-3xl text-sm">
                                {exp.desc}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
