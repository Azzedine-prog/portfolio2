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

    function setupRevealAnimations() {
        const animatedElements = document.querySelectorAll("[data-animate]");
        if (!animatedElements.length) {
            return;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const revealAll = prefersReducedMotion.matches;

        animatedElements.forEach((element, index) => {
            element.classList.add("animate-init");
            const delay = Math.min(index * 90, 540);
            element.style.setProperty("--reveal-delay", `${delay}ms`);
            if (revealAll) {
                element.classList.add("is-visible");
            }
        });

        if (revealAll) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.25,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        animatedElements.forEach((element) => observer.observe(element));

        const handlePreferenceChange = (event) => {
            if (event.matches) {
                animatedElements.forEach((element) => {
                    element.classList.add("is-visible");
                    observer.unobserve(element);
                });
            }
        };

        if (typeof prefersReducedMotion.addEventListener === "function") {
            prefersReducedMotion.addEventListener("change", handlePreferenceChange);
        } else if (typeof prefersReducedMotion.addListener === "function") {
            prefersReducedMotion.addListener(handlePreferenceChange);
        }
    }

    function applyMetricDelays() {
        document.querySelectorAll(".metric-card").forEach((card, index) => {
            card.style.setProperty("--metric-index", String(index));
        });
    }

    function buildLanguageAwareParagraph(textEn, textFr) {
        const fragment = document.createDocumentFragment();

        const en = document.createElement("p");
        en.textContent = textEn;
        en.setAttribute("data-lang", "en");
        fragment.appendChild(en);

        const fr = document.createElement("p");
        fr.textContent = textFr;
        fr.setAttribute("data-lang", "fr");
        fr.hidden = true;
        fragment.appendChild(fr);

        return fragment;
    }

    function loadGithubProjects() {
        const container = document.getElementById("github-projects");
        if (!container) {
            return;
        }

        const statusNodes = Array.from(container.querySelectorAll(".github-projects__status"));
        const clearStatus = () => {
            statusNodes.forEach((node) => node.remove());
        };

        const renderFallback = () => {
            clearStatus();

            const fallbackEn = document.createElement("p");
            fallbackEn.className = "github-projects__status";
            fallbackEn.innerHTML =
                'Unable to load GitHub repositories at the moment. <a href="https://github.com/Azzedine-prog" target="_blank" rel="noreferrer">Visit the GitHub profile</a>.';
            fallbackEn.setAttribute("data-lang", "en");

            const fallbackFr = document.createElement("p");
            fallbackFr.className = "github-projects__status";
            fallbackFr.innerHTML =
                'Impossible de charger les dépôts GitHub pour l’instant. <a href="https://github.com/Azzedine-prog" target="_blank" rel="noreferrer">Consultez le profil complet</a>.';
            fallbackFr.setAttribute("data-lang", "fr");
            fallbackFr.hidden = true;

            container.appendChild(fallbackEn);
            container.appendChild(fallbackFr);
        };

        fetch("https://api.github.com/users/Azzedine-prog/repos?sort=updated&per_page=6", {
            headers: {
                Accept: "application/vnd.github+json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`GitHub API responded with ${response.status}`);
                }
                return response.json();
            })
            .then((repositories) => {
                if (!Array.isArray(repositories) || repositories.length === 0) {
                    renderFallback();
                    return;
                }

                clearStatus();

                const filtered = repositories
                    .filter((repo) => !repo.fork && !repo.private)
                    .slice(0, 4);

                if (!filtered.length) {
                    renderFallback();
                    return;
                }

                filtered.forEach((repo) => {
                    const card = document.createElement("article");
                    card.className = "github-projects__card";
                    card.setAttribute("role", "listitem");

                    const title = document.createElement("h4");
                    const titleLink = document.createElement("a");
                    titleLink.href = repo.html_url;
                    titleLink.target = "_blank";
                    titleLink.rel = "noreferrer";
                    titleLink.textContent = repo.name;
                    title.appendChild(titleLink);
                    card.appendChild(title);

                    const description = (repo.description || "").trim();
                    if (description) {
                        const descFragment = buildLanguageAwareParagraph(
                            description,
                            `Description (EN) : ${description}`
                        );
                        card.appendChild(descFragment);
                    } else {
                        const descFragment = buildLanguageAwareParagraph(
                            "Open-source initiative maintained on GitHub.",
                            "Initiative open-source maintenue sur GitHub."
                        );
                        card.appendChild(descFragment);
                    }

                    const meta = document.createElement("div");
                    meta.className = "github-projects__meta";

                    const updatedDate = repo.updated_at ? new Date(repo.updated_at) : null;
                    if (updatedDate) {
                        const updatedEn = document.createElement("span");
                        updatedEn.setAttribute("data-lang", "en");
                        updatedEn.textContent = `Updated ${updatedDate.toLocaleDateString("en-US")}`;

                        const updatedFr = document.createElement("span");
                        updatedFr.setAttribute("data-lang", "fr");
                        updatedFr.hidden = true;
                        updatedFr.textContent = `Mis à jour le ${updatedDate.toLocaleDateString("fr-FR")}`;

                        meta.appendChild(updatedEn);
                        meta.appendChild(updatedFr);
                    }

                    if (meta.children.length) {
                        card.appendChild(meta);
                    }

                    const topics = Array.isArray(repo.topics) ? repo.topics : [];
                    if (topics.length || repo.language) {
                        const topicsWrapper = document.createElement("div");
                        topicsWrapper.className = "github-projects__topics";

                        topics.slice(0, 4).forEach((topic) => {
                            const pill = document.createElement("span");
                            pill.className = "github-projects__topic";
                            pill.textContent = topic;
                            topicsWrapper.appendChild(pill);
                        });

                        if (repo.language) {
                            const langPill = document.createElement("span");
                            langPill.className = "github-projects__topic";
                            langPill.textContent = repo.language;
                            topicsWrapper.appendChild(langPill);
                        }

                        if (topicsWrapper.children.length) {
                            card.appendChild(topicsWrapper);
                        }
                    }

                    container.appendChild(card);
                });
            })
            .catch(() => {
                renderFallback();
            });
    }

    document.addEventListener("DOMContentLoaded", () => {
        document.documentElement.classList.remove("no-js");
        setupNavigation();
        setupScrollLinks();
        setupRevealAnimations();
        applyMetricDelays();
        loadGithubProjects();
    });
})();
