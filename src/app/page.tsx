'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Learning from "@/components/Learning";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import AnimatedTerminal from "@/components/AnimatedTerminal";
import Magnetic from "@/components/Magnetic";

export default function Home() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const terminalRef = useRef<HTMLDivElement>(null);

    // Track mouse for spotlight
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            document.documentElement.style.setProperty('--x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Interactive Tilt logic for Terminal
    const [tilt, setTilt] = useState({ rX: 0, rY: 0 });
    const handleTerminalMove = (e: React.MouseEvent) => {
        if (!terminalRef.current) return;
        const rect = terminalRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rX = ((y - rect.height / 2) / rect.height) * -10;
        const rY = ((x - rect.width / 2) / rect.width) * 10;
        setTilt({ rX, rY });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <>
            <div className="cursor-spotlight hidden lg:block" />
            <Navbar />
            <EasterEgg />
            <main className="min-h-screen technical-grid pt-20 selection:bg-primary/30 selection:text-primary">

                {/* ══════════════════════════════════════════════
                    HERO — Premium, interactive, animated
                   ══════════════════════════════════════════════ */}
                <section id="hero" className="relative flex flex-col items-center justify-center py-32 px-6 overflow-hidden">

                    {/* Background glow */}
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

                    {/* Corner HUD lines */}
                    <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 pointer-events-none" />

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
                    >
                        {/* Left — Text */}
                        <div className="space-y-8">
                            <motion.div variants={itemVariants} className="space-y-2">
                                <div className="section-label">Software Engineer</div>
                                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
                                    Azzedine<br />
                                    <span className="gradient-text">Lakhdar</span>
                                </h1>
                            </motion.div>

                            <motion.p variants={itemVariants} className="text-lg text-muted leading-relaxed max-w-lg">
                                Software engineer at{" "}
                                <span className="text-foreground font-semibold">Lear Corporation</span>,
                                specializing in safety-critical automotive systems and advanced embedded Linux for{" "}
                                <span className="text-primary font-semibold">Renault & Nissan</span> global platforms.
                            </motion.p>

                            {/* Key strength pills */}
                            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                                {["Adaptive AUTOSAR", "Embedded Linux", "Yocto", "C++ / Python", "CAPM"].map(tag => (
                                    <span key={tag} className="skill-tag">{tag}</span>
                                ))}
                            </motion.div>

                            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
                                <Magnetic>
                                    <a
                                        href="#experience"
                                        className="px-8 py-3.5 bg-primary text-background font-bold rounded-xl hover:shadow-[0_0_30px_rgba(240,168,48,0.5)] transition-all duration-300 cursor-pointer inline-block"
                                    >
                                        View Experience
                                    </a>
                                </Magnetic>
                                <Magnetic>
                                    <a
                                        href="/documents/cv-azzedine-lakhdar.pdf"
                                        target="_blank"
                                        className="px-8 py-3.5 border border-white/15 hover:border-primary/40 rounded-xl transition-all duration-300 font-medium cursor-pointer inline-block hover:text-primary backdrop-blur-sm"
                                    >
                                        Download CV
                                    </a>
                                </Magnetic>
                            </motion.div>
                        </div>

                        {/* Right — Interactive Terminal card */}
                        <motion.div
                            variants={itemVariants}
                            className="relative perspective-1000"
                            onMouseMove={handleTerminalMove}
                            onMouseLeave={() => setTilt({ rX: 0, rY: 0 })}
                        >
                            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl" />
                            <motion.div
                                ref={terminalRef}
                                style={{
                                    rotateX: tilt.rX,
                                    rotateY: tilt.rY,
                                    transformStyle: 'preserve-3d'
                                }}
                                className="relative terminal-block overflow-hidden rounded-2xl shadow-2xl transition-all duration-200 ease-out border-primary/20"
                            >
                                {/* Window chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-surface/80 border-b border-primary/10">
                                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                    <span className="ml-2 text-[10px] font-mono text-muted/60 uppercase tracking-tighter">azzedine@mbp: ~</span>
                                </div>

                                <div className="h-[280px]">
                                    <AnimatedTerminal />
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* ══════════════════════════════════════
                    METRICS STRIP — Scroll Reveal
                   ══════════════════════════════════════ */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-6 py-10 border-y border-primary/10 bg-surface/30 backdrop-blur-md relative z-10"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Global Programs", value: "3+", sub: "Renault · Nissan · Stellantis" },
                            { label: "Experience", value: "3+ Yrs", sub: "Software Systems" },
                            { label: "Expertise", value: "POSIX / Linux", sub: "Safety-Critical" },
                            { label: "Status", value: "Active", sub: "Expanding Skills" }
                        ].map((item, i) => (
                            <div key={i} className="space-y-1 group">
                                <div className="text-[10px] font-mono text-muted uppercase tracking-widest group-hover:text-primary transition-colors">{item.label}</div>
                                <div className="text-2xl font-bold text-primary group-hover:scale-105 transition-transform origin-left">{item.value}</div>
                                <div className="text-[11px] text-muted">{item.sub}</div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Experience />
                    <Education />
                    <Learning />
                    <Projects />
                </motion.div>

                {/* ══════════════════════════════════════
                    CONTACT CTA — Final Wow
                   ══════════════════════════════════════ */}
                <section id="contact" className="py-32 px-6 border-t border-primary/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto text-center space-y-8 relative z-10"
                    >
                        <div className="section-label" style={{ justifyContent: 'center' }}>Let's Build Something Great</div>
                        <h2 className="text-5xl font-extrabold tracking-tight">
                            Ready to <span className="gradient-text">Connect?</span>
                        </h2>
                        <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
                            Currently exploring innovative roles in Software Engineering, Automotive Systems, and Advanced Technology.
                        </p>
                        <div className="flex justify-center gap-6 flex-wrap pt-4">
                            <Magnetic>
                                <a
                                    href="mailto:azzedine.lakhdar.ing@gmail.com"
                                    className="px-12 py-4 bg-primary text-background font-bold rounded-xl hover:shadow-[0_0_40px_rgba(240,168,48,0.6)] transition-all duration-300 block"
                                >
                                    Contact Me
                                </a>
                            </Magnetic>
                            <Magnetic>
                                <a
                                    href="https://www.linkedin.com/in/azzedinelakhdar/"
                                    target="_blank"
                                    className="px-12 py-4 border border-primary/20 text-primary rounded-xl hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 block"
                                >
                                    LinkedIn
                                </a>
                            </Magnetic>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
