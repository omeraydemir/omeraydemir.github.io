/* Faz 4: dil, tema ve mobil menü kontrolleri.
   TR/EN metinlerinin tek kaynağı content/site-content.md; anahtarlar
   oradaki tabloların anahtarlarıyla birebir eşleşir. */
(() => {
  "use strict";

  const root = document.documentElement;

  const I18N = {
    tr: {
      "metadata.title": "Ömer Aydemir — Mobil ve Full-Stack Geliştirici",
      "metadata.description":
        "Mobil ve Full-Stack geliştirici Ömer Aydemir’in .NET MAUI, C#, REST API ve platformlar arası mobil uygulama çalışmalarını içeren portföyü.",
      "skip.content": "Ana içeriğe geç",
      "nav.label": "Ana navigasyon",
      "nav.about": "Hakkımda",
      "nav.experience": "Deneyim",
      "nav.work": "Çalışmalar",
      "nav.contact": "İletişim",
      "language.current": "Geçerli dil: Türkçe",
      "language.switchTo": "İngilizceye geç",
      "theme.toLight": "Aydınlık temaya geç",
      "theme.toDark": "Karanlık temaya geç",
      "theme.current.light": "Geçerli tema: aydınlık",
      "theme.current.dark": "Geçerli tema: karanlık",
      "menu.open": "Menüyü aç",
      "menu.close": "Menüyü kapat",
      "hero.eyebrow": "Merhaba, ben Ömer.",
      "hero.title": "Mobil uygulamalar geliştiriyor ve iyileştiriyorum.",
      "hero.description":
        "2019’dan beri .NET, platformlar arası mobil teknolojiler ve bu uygulamaları destekleyen backend servisleri üzerinde çalışıyorum.",
      "about.title": "Hakkımda",
      "experience.title": "Deneyim",
      "work.title": "Öne çıkan çalışma",
      "contact.title": "İletişim",
      "footer.note": "Ömer Aydemir tarafından tasarlandı ve geliştirildi.",
    },
    en: {
      "metadata.title": "Ömer Aydemir — Mobile & Full-Stack Developer",
      "metadata.description":
        "The portfolio of Ömer Aydemir, a Mobile & Full-Stack Developer working with .NET MAUI, C#, REST APIs and cross-platform mobile applications.",
      "skip.content": "Skip to main content",
      "nav.label": "Primary navigation",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.work": "Work",
      "nav.contact": "Contact",
      "language.current": "Current language: English",
      "language.switchTo": "Switch to Turkish",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",
      "theme.current.light": "Current theme: light",
      "theme.current.dark": "Current theme: dark",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "hero.eyebrow": "Hi, I’m Ömer.",
      "hero.title": "I build and improve mobile applications.",
      "hero.description":
        "Since 2019, I have worked with .NET, cross-platform mobile technologies and the backend services that support these applications.",
      "about.title": "About",
      "experience.title": "Experience",
      "work.title": "Featured work",
      "contact.title": "Contact",
      "footer.note": "Designed and developed by Ömer Aydemir.",
    },
  };

  const langBtn = document.querySelector("[data-lang-toggle]");
  const themeBtn = document.querySelector("[data-theme-toggle]");
  const menuBtn = document.querySelector("[data-menu-toggle]");
  const nav = document.getElementById("site-nav");

  function readStored(key) {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  }

  function store(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (e) { /* storage kapalıysa tercih yalnızca bu sayfa için geçerli */ }
  }

  /* ---------- Dil ---------- */

  let lang = (() => {
    const stored = readStored("lang");
    if (stored === "tr" || stored === "en") return stored;
    return (navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en";
  })();

  function applyI18n() {
    const dict = I18N[lang];
    root.lang = lang;
    document.title = dict["metadata.title"];
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", dict["metadata.description"]);
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (value) el.textContent = value;
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const value = dict[el.dataset.i18nAriaLabel];
      if (value) el.setAttribute("aria-label", value);
    });
    updateControlLabels();
  }

  /* ---------- Tema ---------- */

  function currentTheme() {
    const chosen = root.getAttribute("data-theme");
    if (chosen === "dark" || chosen === "light") return chosen;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  /* Kontrollerin erişilebilir adları hem durumu hem hedefi bildirir ve
     dil değişiminde birlikte güncellenir. */
  function updateControlLabels() {
    const dict = I18N[lang];
    if (langBtn) {
      langBtn.setAttribute("aria-label", dict["language.current"] + ". " + dict["language.switchTo"]);
      const label = langBtn.querySelector("[data-lang-label]");
      if (label) label.textContent = lang.toUpperCase();
    }
    if (themeBtn) {
      const dark = currentTheme() === "dark";
      themeBtn.setAttribute(
        "aria-label",
        dict[dark ? "theme.current.dark" : "theme.current.light"] + ". " + dict[dark ? "theme.toLight" : "theme.toDark"]
      );
    }
    if (menuBtn) {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-label", dict[open ? "menu.close" : "menu.open"]);
    }
  }

  if (langBtn) {
    langBtn.addEventListener("click", () => {
      lang = lang === "tr" ? "en" : "tr";
      store("lang", lang);
      applyI18n();
    });
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      store("theme", next);
      updateControlLabels();
    });
  }

  /* ---------- Mobil menü ---------- */

  if (menuBtn && nav) {
    menuBtn.hidden = false;

    const setMenu = (open) => {
      menuBtn.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
      updateControlLabels();
    };

    menuBtn.addEventListener("click", () => {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  /* ---------- Aktif bölüm (P1) ---------- */

  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));

  function setActiveSection(id) {
    navLinks.forEach((link) => {
      const active = link.hash.slice(1) === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      /* Bölüm, görünüm alanının ortasındaki banda girince aktif sayılır. */
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((link) => {
      const section = document.getElementById(link.hash.slice(1));
      if (section) observer.observe(section);
    });
  }

  applyI18n();
})();
