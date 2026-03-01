'use client';

import { motion } from 'framer-motion';

const education = [
    {
        school: "Institut National des Postes et Télécommunications (INPT)",
        degree: "Engineering Degree — Embedded Systems & Digital Services",
        period: "2019 – 2022",
        logo: "/images/inpt.PNG",
        desc: "Graduated with honors. Focused on automotive electronics, industrial IoT, and signal processing.",
        badge: "🎓 Honours",
    },
    {
        school: "CPGE Reda Slaoui, Agadir",
        degree: "MPSI/MP Preparatory Classes",
        period: "2017 – 2019",
        logo: null,
        desc: "Highly selective intensive program in mathematics, physics, and engineering sciences.",
        badge: null,
    }
];

const skillGroups = [
    {
        category: "Software & Standards",
        items: ["AUTOSAR BSW/SWC", "ISO 26262", "ASPICE Level 2", "Cybersecurity (EVITA)"],
    },
    {
        category: "Languages & Tools",
        items: ["C / C++", "Python & CAPL", "Embedded Linux / Yocto", "MATLAB / Simulink"],
    },
    {
        category: "Interfaces & Protocols",
        items: ["CAN / LIN / FlexRay", "UDS Diagnostics", "SPI / I2C / UART", "JTAG / Trace32"],
    },
    {
        category: "Tools & DevOps",
        items: ["Vector CANoe Suite", "DaVinci Configurator", "Azure DevOps / Git", "HIL / SIL Testing"],
    },
];

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 max-w-7xl mx-auto border-t border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1">
                    <div className="section-label">Academic Background</div>
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">Education</h2>
                    <p className="text-muted leading-relaxed text-sm">
                        High-level engineering training at the convergence of hardware architecture and digital systems.
                    </p>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    {education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel border-l-4 border-l-primary/40"
                        >
                            <div className="flex justify-between items-start mb-3 flex-wrap gap-3">
                                <div>
                                    <h3 className="text-lg font-bold leading-snug">{edu.school}</h3>
                                    <div className="text-primary/80 text-sm font-medium mt-1">{edu.degree}</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    {edu.badge && (
                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {edu.badge}
                                        </span>
                                    )}
                                    <span className="text-primary font-mono text-xs px-3 py-1 rounded-lg bg-primary/5 border border-primary/15">
                                        {edu.period}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-muted">{edu.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Technical Skills Grid */}
            <div className="mt-20">
                <div className="section-label">Core Technical Stack</div>
                <h3 className="text-3xl font-extrabold tracking-tight mb-10">Skills & Technologies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel"
                        >
                            <div className="text-[10px] font-mono text-primary/60 uppercase tracking-widest mb-3">{group.category}</div>
                            <div className="space-y-2">
                                {group.items.map((item) => (
                                    <div key={item} className="flex items-center gap-2 text-sm text-muted">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
