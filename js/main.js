(function () {
    function smoothScrollTo(target) {
        const element = document.querySelector(target);
        if (!element) {
            return;
        }
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        element.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    }

    function setupNavigation() {
        const body = document.body;
        const openToggle = document.getElementById("mobile-menu-open");
        const closeToggle = document.getElementById("mobile-menu-close");
        const navLinks = document.querySelectorAll(".site-nav a[href^='#']");

        const setAriaExpanded = (isOpen) => {
            if (openToggle) {
                openToggle.setAttribute("aria-expanded", String(isOpen));
            }
            if (closeToggle) {
                closeToggle.setAttribute("aria-expanded", String(isOpen));
            }
        };

        const openMenu = () => {
            body.classList.add("nav-open");
            setAriaExpanded(true);
        };

        const closeMenu = () => {
            body.classList.remove("nav-open");
            setAriaExpanded(false);
        };

        setAriaExpanded(false);

        if (openToggle) {
            openToggle.addEventListener("click", openMenu);
            openToggle.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openMenu();
                }
            });
        }

        if (closeToggle) {
            closeToggle.addEventListener("click", closeMenu);
            closeToggle.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    closeMenu();
                }
            });
        }

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                closeMenu();
            });
        });
    }

    function setupScrollLinks() {
        document.querySelectorAll("a[href^='#']").forEach((anchor) => {
            anchor.addEventListener("click", (event) => {
                const target = anchor.getAttribute("href");
                if (!target || target.charAt(0) !== "#") {
                    return;
                }

                event.preventDefault();

                if (target.length === 1) {
                    return;
                }

                const element = document.querySelector(target);
                if (element) {
                    smoothScrollTo(target);
                }
            });
        });

        const leadDown = document.querySelector("#lead-down span");
        if (leadDown) {
            leadDown.addEventListener("click", (event) => {
                const hero = document.getElementById("lead");
                const nextSection = hero ? hero.nextElementSibling : null;
                if (nextSection) {
                    event.preventDefault();
                    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                    nextSection.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
                }
            });
        }

        const toTop = document.getElementById("to-top");
        if (toTop) {
            toTop.addEventListener("click", () => {
                const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
            });
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.documentElement.classList.remove("no-js");
        setupNavigation();
        setupScrollLinks();
    });
})();
