import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Learning from "@/components/Learning";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";

export default function Home() {
    return (
        <>
            <Navbar />
            <EasterEgg />
            <main className="min-h-screen technical-grid pt-20">

                {/* ══════════════════════════════════════════════
                    HERO — Premium, readable, recruiter-optimized
                   ══════════════════════════════════════════════ */}
                <section id="hero" className="relative flex flex-col items-center justify-center py-32 px-6 overflow-hidden">

                    {/* Background glow */}
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

                    {/* Corner HUD lines */}
                    <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30 pointer-events-none" />
                    <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30 pointer-events-none" />

                    <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        {/* Left — Text */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <div className="section-label">Automotive Embedded Engineer</div>
                                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-none">
                                    Azzedine<br />
                                    <span className="gradient-text">Lakhdar</span>
                                </h1>
                            </div>

                            <p className="text-lg text-muted leading-relaxed max-w-lg">
                                Embedded software engineer at{" "}
                                <span className="text-foreground font-semibold">Lear Corporation</span>,
                                delivering safety-critical body electronics for{" "}
                                <span className="text-primary font-semibold">Renault, Nissan & Stellantis</span> global platforms.
                            </p>

                            {/* Key strength pills */}
                            <div className="flex flex-wrap gap-2">
                                {["AUTOSAR", "ISO 26262", "ASPICE", "UDS / CAN", "Yocto"].map(tag => (
                                    <span key={tag} className="skill-tag">{tag}</span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 pt-2">
                                <a
                                    href="#experience"
                                    className="px-8 py-3.5 bg-primary text-background font-bold rounded-xl hover:shadow-glow-gold hover:scale-[1.02] transition-all duration-300 cursor-pointer inline-block"
                                >
                                    View Experience
                                </a>
                                <a
                                    href="/documents/cv-azzedine-lakhdar.pdf"
                                    target="_blank"
                                    className="px-8 py-3.5 border border-white/15 hover:border-primary/40 rounded-xl transition-all duration-300 font-medium cursor-pointer inline-block hover:text-primary"
                                >
                                    Download CV
                                </a>
                            </div>
                        </div>

                        {/* Right — Terminal card */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl" />
                            <div className="relative terminal-block overflow-hidden rounded-2xl">
                                {/* Window chrome */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-surface/80 border-b border-primary/10">
                                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                    <span className="ml-2 text-[10px] font-mono text-muted">engineer_profile.sys</span>
                                </div>
                                <div className="p-6 font-mono text-xs leading-7 text-primary/70 select-none">
                                    <span className="text-muted">$</span> <span className="text-primary">cat</span> profile.json<br />
                                    {"{"}<br />
                                    &nbsp;&nbsp;<span className="text-secondary">name</span>: <span className="text-green-400">"Azzedine Lakhdar"</span>,<br />
                                    &nbsp;&nbsp;<span className="text-secondary">role</span>: <span className="text-green-400">"Software Engineer"</span>,<br />
                                    &nbsp;&nbsp;<span className="text-secondary">company</span>: <span className="text-green-400">"Lear Corporation"</span>,<br />
                                    &nbsp;&nbsp;<span className="text-secondary">experience</span>: <span className="text-primary">"3+ yrs"</span>,<br />
                                    &nbsp;&nbsp;<span className="text-secondary">standards</span>: [<span className="text-green-400">"ISO 26262"</span>, <span className="text-green-400">"ASPICE"</span>],<br />
                                    &nbsp;&nbsp;<span className="text-secondary">status</span>: <span className="text-accent font-bold">"open_to_opportunities"</span><br />
                                    {"}"}
                                    <br />
                                    <span className="text-muted">$</span> <span className="animate-pulse">█</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════
                    METRICS STRIP
                   ══════════════════════════════════════ */}
                <section className="max-w-7xl mx-auto px-6 py-10 border-y border-primary/10 bg-surface/30 backdrop-blur-sm">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "OEM Programs", value: "3+", sub: "Renault · Nissan · Stellantis" },
                            { label: "Experience", value: "3+ Yrs", sub: "Embedded Software" },
                            { label: "Standards", value: "ISO / ASPICE", sub: "Safety-Critical" },
                            { label: "Currently", value: "Open", sub: "to opportunities" }
                        ].map((item, i) => (
                            <div key={i} className="space-y-1">
                                <div className="text-[10px] font-mono text-muted uppercase tracking-widest">{item.label}</div>
                                <div className="text-2xl font-bold text-primary">{item.value}</div>
                                <div className="text-[11px] text-muted">{item.sub}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <Experience />

                <Education />

                <Learning />

                <Projects />

                {/* ══════════════════════════════════════
                    CONTACT CTA
                   ══════════════════════════════════════ */}
                <section id="contact" className="py-32 px-6 border-t border-primary/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
                    <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
                        <div className="section-label" style={{ justifyContent: 'center' }}>Let's Connect</div>
                        <h2 className="text-5xl font-extrabold tracking-tight">
                            Ready to <span className="gradient-text">Collaborate?</span>
                        </h2>
                        <p className="text-muted text-lg">
                            Available for new automotive embedded engineering opportunities and technical partnerships.
                        </p>
                        <div className="flex justify-center gap-4 flex-wrap">
                            <a
                                href="mailto:azzedine.lakhdar.ing@gmail.com"
                                className="px-12 py-4 bg-primary text-background font-bold rounded-xl hover:shadow-glow-gold hover:scale-[1.02] transition-all duration-300"
                            >
                                Send Message
                            </a>
                            <a
                                href="https://www.linkedin.com/in/azzedine-lakhdar"
                                target="_blank"
                                className="px-12 py-4 border border-primary/20 text-primary rounded-xl hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                            >
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
