document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Synchronize Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Initial Appearance Animations
    const tl = gsap.timeline();

    tl.from(".hero-portrait", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    })
        .from(".hero-intro h1", {
            opacity: 0,
            x: -50,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-intro h2", {
            opacity: 0,
            x: -30,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-intro .lead-subtitle", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-cta .btn", {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.4");

    // Scroll-triggered animations for sections
    gsap.utils.toArray('.section').forEach((section) => {
        gsap.from(section.querySelector('.section__header'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
        });

        gsap.from(section.querySelectorAll('.glass-card, .metric-card, .timeline-card'), {
            scrollTrigger: {
                trigger: section,
                start: 'top 75%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Project Cards 3D Tilt Effect
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // Custom Interactive Cursor
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: 'power2.out'
        });
    });

    const interactiveSelectors = 'a, button, [role="button"], .project-card';
    document.querySelectorAll(interactiveSelectors).forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('active'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
});
