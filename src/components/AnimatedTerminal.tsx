'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const commands = [
    { type: 'command', text: 'ls -la' },
    { type: 'output', text: 'total 42\ndrwxr-xr-x  2 azzedine staff   64 Mar  1 17:30 .\ndrwxr-xr-x  8 azzedine staff  256 Mar  1 17:30 ..\n-rw-r--r--  1 azzedine staff  1024 Mar  1 17:30 projects/\n-rw-r--r--  1 azzedine staff   512 Mar  1 17:30 profile.json\n-rw-r--r--  1 azzedine staff   256 Mar  1 17:30 experience.log' },
    { type: 'command', text: 'cat profile.json' },
    { type: 'output', text: '{\n  "name": "Azzedine Lakhdar",\n  "role": "Software Engineer",\n  "specialization": "Embedded Systems",\n  "status": "active_expertise_expansion",\n  "location": "Global / Remote"\n}' }
];

export default function AnimatedTerminal() {
    const [index, setIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [showOutput, setShowOutput] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const currentStep = commands[index];

        if (currentStep.type === 'command') {
            setIsTyping(true);
            setShowOutput(false);
            let charIndex = 0;
            setDisplayedText('');

            const typeChar = () => {
                if (charIndex < currentStep.text.length) {
                    setDisplayedText(prev => prev + currentStep.text[charIndex]);
                    charIndex++;
                    timeout = setTimeout(typeChar, 80);
                } else {
                    setIsTyping(false);
                    timeout = setTimeout(() => {
                        setIndex(prev => (prev + 1) % commands.length);
                    }, 1000);
                }
            };

            timeout = setTimeout(typeChar, 500);
        } else {
            setIsTyping(false);
            setShowOutput(true);
            setDisplayedText(currentStep.text);
            timeout = setTimeout(() => {
                setIndex(prev => (prev + 1) % commands.length);
            }, index === commands.length - 1 ? 4000 : 1500);
        }

        return () => clearTimeout(timeout);
    }, [index]);

    return (
        <div className="p-6 font-mono text-xs leading-relaxed overflow-hidden h-full flex flex-col">
            <div className="flex-grow">
                {/* Historical commands and outputs */}
                <div className="space-y-4">
                    {/* Only show the current and previous one for focus */}
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                        >
                            {commands[index].type === 'command' ? (
                                <div className="flex items-start gap-2">
                                    <span className="text-primary font-bold">➜</span>
                                    <span className="text-muted">~</span>
                                    <span className="text-foreground">
                                        {displayedText}
                                        {isTyping && <span className="typing-cursor" />}
                                    </span>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div className="flex items-start gap-2">
                                        <span className="text-primary font-bold">➜</span>
                                        <span className="text-muted">~</span>
                                        <span className="text-foreground">{commands[(index - 1 + commands.length) % commands.length].text}</span>
                                    </div>
                                    <pre className="text-primary/70 whitespace-pre-wrap ml-6 transition-all duration-500">
                                        {displayedText}
                                    </pre>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Fixed Bottom status bar */}
            <div className="mt-auto pt-4 border-t border-primary/10 flex justify-between items-center text-[9px] text-muted/50 uppercase tracking-widest">
                <span>session: active</span>
                <span>utf-8</span>
            </div>
        </div>
    );
}
