'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Konami Code sequence
const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// Fun rotating messages shown in the terminal footer of the page
const funMessages = [
    { msg: "Fixing a bug... by creating 2 more. Progress! 🎉", delay: 4000 },
    { msg: "If it compiles, it works. If it doesn't, coffee. ☕", delay: 4500 },
    { msg: "AUTOSAR: turning 5 lines of code into 500 XML files since 2003. 📋", delay: 5000 },
    { msg: "fun_fact: I once debugged for 3 hours. It was a semicolon. 😤", delay: 4200 },
    { msg: "> rm -rf /bugs  ← if only it were that easy... 💀", delay: 4800 },
    { msg: "Hello, recruiter! Yes, I know AUTOSAR. No, it's not easy. 😅", delay: 5200 },
];

// Easter egg popup
const easterEggLines = [
    "🎉 YOU FOUND THE EASTER EGG!",
    "─────────────────────────────────",
    "Congratulations. You are clearly a",
    "person of culture and curiosity.",
    "",
    "Secret unlocked: Azzedine once spent",
    "4 hours debugging a CAN timeout.",
    "It was the wrong baudrate. 😂",
    "",
    "Also, he makes excellent tea. 🍵",
    "─────────────────────────────────",
    "konami_code_achieved: true",
    "hiring_chances: ↑↑↑",
];

export default function EasterEgg() {
    const [konamiIndex, setKonamiIndex] = useState(0);
    const [showEgg, setShowEgg] = useState(false);
    const [msgIndex, setMsgIndex] = useState(0);
    const [showMsg, setShowMsg] = useState(true);

    // Konami code listener
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === KONAMI[konamiIndex]) {
                const next = konamiIndex + 1;
                if (next === KONAMI.length) {
                    setShowEgg(true);
                    setKonamiIndex(0);
                } else {
                    setKonamiIndex(next);
                }
            } else {
                setKonamiIndex(0);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [konamiIndex]);

    // Rotating fun messages
    useEffect(() => {
        const rotate = () => {
            setShowMsg(false);
            setTimeout(() => {
                setMsgIndex(i => (i + 1) % funMessages.length);
                setShowMsg(true);
            }, 500);
        };
        const timer = setInterval(rotate, funMessages[msgIndex]?.delay || 4500);
        return () => clearInterval(timer);
    }, [msgIndex]);

    return (
        <>
            {/* Fun rotating status bar at bottom */}
            <div className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
                <AnimatePresence mode="wait">
                    {showMsg && (
                        <motion.div
                            key={msgIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="mx-auto max-w-fit mb-4 px-4 py-1.5 bg-background/80 backdrop-blur-md border border-primary/20 rounded-full text-[10px] font-mono text-primary/50 select-none"
                        >
                            <span className="text-primary/30 mr-2">sys:</span>
                            {funMessages[msgIndex]?.msg}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Konami Easter Egg Modal */}
            <AnimatePresence>
                {showEgg && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-lg p-6"
                        onClick={() => setShowEgg(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.8, rotateZ: -4 }}
                            animate={{ scale: 1, rotateZ: 0 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 15 }}
                            className="glass-panel max-w-sm w-full border-primary/40 font-mono text-xs leading-7 text-primary/80 select-none"
                            onClick={e => e.stopPropagation()}
                        >
                            {easterEggLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    className={i === 0 ? 'text-primary font-bold text-sm mb-1' : i === 2 || i === 3 ? 'text-foreground' : ''}
                                >
                                    {line || <br />}
                                </motion.div>
                            ))}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.9 }}
                                onClick={() => setShowEgg(false)}
                                className="mt-4 w-full py-2 border border-primary/30 text-primary hover:bg-primary/10 transition-colors rounded-lg"
                            >
                                close_easter_egg()
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
