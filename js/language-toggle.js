(function () {
    const SUPPORTED_LANGS = ["en", "fr"];

    function parseLanguageFromLocation() {
        const searchParams = new URLSearchParams(window.location.search);
        if (searchParams.has("lang")) {
            const candidate = searchParams.get("lang").toLowerCase();
            if (SUPPORTED_LANGS.includes(candidate)) {
                return candidate;
            }
        }
        if (window.location.hash) {
            const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
            if (hashParams.has("lang")) {
                const candidate = hashParams.get("lang").toLowerCase();
                if (SUPPORTED_LANGS.includes(candidate)) {
                    return candidate;
                }
            }
        }
        return null;
    }

    function readStoredLanguage() {
        try {
            return window.localStorage.getItem("preferredLanguage");
        } catch (error) {
            return null;
        }
    }

    function writeStoredLanguage(lang) {
        try {
            window.localStorage.setItem("preferredLanguage", lang);
        } catch (error) {
            // Storage might be disabled; ignore persist errors gracefully.
        }
    }

    function applyPlaceholders(lang) {
        document.querySelectorAll("[data-placeholder-en]").forEach((element) => {
            const fallback = element.getAttribute("data-placeholder-en") || "";
            const localized = lang === "fr" ? element.getAttribute("data-placeholder-fr") : fallback;
            element.setAttribute("placeholder", localized || fallback);
        });
    }

    function applyLanguage(lang) {
        const activeLang = SUPPORTED_LANGS.includes(lang) ? lang : "en";
        document.documentElement.setAttribute("lang", activeLang);
        if (document.body) {
            document.body.setAttribute("data-current-language", activeLang);
        }

        document.querySelectorAll("[data-lang]").forEach((element) => {
            const elementLang = element.getAttribute("data-lang");
            element.hidden = elementLang !== activeLang;
        });

        document.querySelectorAll("[data-date-en]").forEach((element) => {
            const localizedDate = element.getAttribute(`data-date-${activeLang}`);
            if (localizedDate) {
                element.setAttribute("data-date", localizedDate);
                const dateLabel = element.closest(".vtimeline-point")?.querySelector(".vtimeline-date");
                if (dateLabel) {
                    dateLabel.textContent = localizedDate;
                }
            }
        });

        document.querySelectorAll(".language-toggle__btn").forEach((button) => {
            const buttonLang = button.getAttribute("data-switch-lang");
            const isActive = buttonLang === activeLang;
            button.classList.toggle("language-toggle__btn--active", isActive);
            button.setAttribute("aria-pressed", String(isActive));
        });

        applyPlaceholders(activeLang);
        writeStoredLanguage(activeLang);
    }

    document.addEventListener("DOMContentLoaded", () => {
        const storedPreference = readStoredLanguage();
        const urlPreference = parseLanguageFromLocation();
        const initialLanguage = urlPreference || storedPreference || "en";

        applyLanguage(initialLanguage);

        document.querySelectorAll(".language-toggle__btn").forEach((button) => {
            button.addEventListener("click", () => {
                const lang = button.getAttribute("data-switch-lang");
                applyLanguage(lang);
            });
        });
    });
})();
