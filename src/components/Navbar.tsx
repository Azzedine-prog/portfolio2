'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Menu, X, ChevronRight } from '@/components/Icons';
import Magnetic from '@/components/Magnetic';

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Expertise', href: '#skills-expansion' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (window.location.pathname !== '/') {
            window.location.href = '/' + href;
            return;
        }
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const offsetPosition = elementRect - bodyRect - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-background/90 backdrop-blur-xl border-b border-primary/10 py-3'
            : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border-2 border-primary rounded-lg flex items-center justify-center font-mono font-bold text-primary text-sm" style={{ boxShadow: '0 0 12px rgba(240,168,48,0.2)' }}>
                        AL
                    </div>
                    <span className="font-bold tracking-tight text-base hidden sm:block">
                        Azzedine <span className="text-primary">Lakhdar</span>
                        <span className="text-muted text-xs font-mono ml-2">· Software Engineer</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <a
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-sm font-medium text-muted hover:text-primary transition-colors py-2 px-1"
                            >
                                {link.name}
                            </a>
                        </Magnetic>
                    ))}
                    <Magnetic>
                        <a
                            href="mailto:azzedine.lakhdar.ing@gmail.com"
                            className="px-4 py-2 bg-primary text-background rounded-lg text-sm font-bold hover:shadow-[0_0_20px_rgba(240,168,48,0.4)] hover:scale-105 transition-all duration-200"
                        >
                            Contact Me
                        </a>
                    </Magnetic>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-primary p-1" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-primary/10 px-6 py-8 flex flex-col gap-5 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-xl font-semibold hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
