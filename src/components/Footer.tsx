'use client';

import { Github, Linkedin, Mail, Twitter } from '@/components/Icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-primary/10 bg-surface/30">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <p className="text-sm font-bold">
                        Azzedine <span className="text-primary">Lakhdar</span>
                    </p>
                    <p className="text-[11px] text-muted mt-1">
                        Software Engineer · {currentYear}
                    </p>
                </div>

                <div className="flex gap-6 items-center">
                    <a href="https://github.com/Azzedine-prog" target="_blank" className="text-muted hover:text-primary transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com/in/azzedine-lakhdar/" target="_blank" className="text-muted hover:text-primary transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:azzedine.lakhdar.ing@gmail.com" className="text-muted hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                    <a href="https://twitter.com/azzedin37740194" target="_blank" className="text-muted hover:text-primary transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a
                        href="mailto:azzedine.lakhdar.ing@gmail.com"
                        className="ml-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-all duration-200"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </footer>
    );
}
