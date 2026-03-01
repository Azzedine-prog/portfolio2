'use client';

import { motion } from 'framer-motion';

const skills = [
    {
        title: "Linux Systems",
        subtitle: "Kernel, Drivers & System Programming",
        status: "PROFICIENT",
        context: "Personal Practice",
        description: "Solid command of Linux internals — device drivers, kernel modules, device tree configuration, shell scripting, GCC toolchains, and cross-compilation for embedded targets. Directly applicable to Linux-based ECU and gateway platforms.",
        tags: ["Linux Kernel", "Device Drivers", "Device Tree", "Shell", "Cross-Compile", "GCC/GDB"],
        icon: "🐧",
        gradient: "from-emerald-500/10 to-transparent",
        border: "border-emerald-500/25",
        accent: "text-emerald-400",
        dot: "bg-emerald-400",
    },
    {
        title: "Yocto Project",
        subtitle: "Custom Embedded Linux Distributions",
        status: "PROFICIENT",
        context: "Personal & Professional Support",
        description: "Building production-grade Linux images for embedded targets using BitBake, OpenEmbedded layers, BSP integration, and recipe customization. Actively applied in a professional capacity to support Yocto-based delivery workflows.",
        tags: ["Yocto", "BitBake", "meta-layers", "BSP", "OE-Core", "Poky"],
        icon: "⚙️",
        gradient: "from-cyan-500/10 to-transparent",
        border: "border-cyan-500/25",
        accent: "text-cyan-400",
        dot: "bg-cyan-400",
    },
    {
        title: "Adaptive AUTOSAR",
        subtitle: "Service-Oriented Architecture for Autonomous Platforms",
        status: "DEVELOPING",
        context: "Technical Expansion",
        description: "Studying Adaptive AUTOSAR concepts — ara::com service communication, execution management, diagnostics (UDS over DoIP), and the evolving shift from Classic to Adaptive in high-compute automotive ECUs.",
        tags: ["Adaptive AUTOSAR", "ara::com", "SOME/IP", "DoIP", "POSIX", "C++17"],
        icon: "🚗",
        gradient: "from-blue-500/10 to-transparent",
        border: "border-blue-500/25",
        accent: "text-blue-400",
        dot: "bg-blue-400",
    },
    {
        title: "CAPM Certification",
        subtitle: "Certified Associate in Project Management",
        status: "ONGOING",
        context: "PMI Certification",
        description: "Near-completion CAPM preparation — mastering structured project delivery (scope, schedule, risk, stakeholders). Directly complements software delivery coordination, cross-team planning, and ASPICE lifecycle management experience.",
        tags: ["PMI", "Agile", "Risk Management", "WBS", "Stakeholders", "Scheduling"],
        icon: "📋",
        gradient: "from-violet-500/10 to-transparent",
        border: "border-violet-500/25",
        accent: "text-violet-400",
        dot: "bg-violet-400",
    },
];

export default function Learning() {
    return (
        <section id="skills-expansion" className="py-24 px-6 border-t border-primary/10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="section-label">Beyond Core Role</div>
                    <h2 className="text-4xl font-extrabold tracking-tight mb-4">
                        Expanding Expertise
                    </h2>
                    <p className="text-muted max-w-2xl text-sm">
                        Skills, technologies, and certifications actively developed beyond core responsibilities — each directly applicable to senior engineering and technical leadership roles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative glass-panel bg-gradient-to-br ${skill.gradient} border ${skill.border} group hover:scale-[1.02] transition-transform duration-300 overflow-hidden`}
                        >
                            {/* Status badge */}
                            <div className="flex items-center gap-1.5 mb-5 flex-wrap">
                                <div className={`w-1.5 h-1.5 rounded-full ${skill.dot} animate-pulse flex-shrink-0`} />
                                <span className={`text-[9px] font-mono uppercase tracking-widest ${skill.accent}`}>
                                    {skill.status}
                                </span>
                                <span className="text-[9px] font-mono text-muted uppercase">// {skill.context}</span>
                            </div>

                            <div className="text-3xl mb-4">{skill.icon}</div>
                            <h3 className="text-lg font-bold mb-1 tracking-tight leading-tight">{skill.title}</h3>
                            <div className={`text-[11px] font-mono mb-4 ${skill.accent} leading-snug`}>{skill.subtitle}</div>

                            <p className="text-sm text-muted leading-relaxed mb-5">
                                {skill.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                                {skill.tags.map(tag => (
                                    <span key={tag} className={`text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 ${skill.accent}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
