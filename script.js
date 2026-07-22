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
      "identity.role": "Mobil ve Full-Stack Geliştirici",
      "hero.eyebrow": "Merhaba, ben Ömer.",
      "hero.title": "Mobil uygulamalar geliştiriyor ve iyileştiriyorum.",
      "hero.description":
        "2019’dan beri .NET, platformlar arası mobil teknolojiler ve bu uygulamaları destekleyen backend servisleri üzerinde çalışıyorum.",
      "social.github": "GitHub profilimi aç",
      "social.linkedin": "LinkedIn profilimi aç",
      "about.title": "Hakkımda",
      "about.paragraph1":
        "Yazılım geliştirmeye web ve backend sistemleri üzerinde çalışarak başladım. C#, ASP.NET, JavaScript, HTML ve CSS ile mevcut ürünleri geliştirirken zamanla REST API’lere ve mobil uygulamalara yöneldim.",
      "about.paragraph2":
        "Bugün Xamarin.Forms ve .NET MAUI ile Android ve iOS uygulamaları, bu uygulamaları destekleyen .NET servisleri ve istemci–API arasındaki veri akışları üzerinde çalışıyorum. Eski sistemlerin modernizasyonu, mobil performans ve sürdürülebilir kod yapıları başlıca mühendislik odaklarım arasında.",
      "about.paragraph3":
        "Bir sorunu yalnızca görünen ekranda değil, mobil istemciden API ve veri katmanına kadar uçtan uca incelemeyi önemsiyorum. Açık kaynak projelerimde de aynı yaklaşımı küçük ve kullanışlı araçlara taşıyorum.",
      "about.photoAlt": "Ömer Aydemir’in portresi",
      "skills.title": "Yetenekler",
      "skills.mobile.title": "Mobil",
      "skills.backend.title": "Backend",
      "skills.webData.title": "Web ve Veri",
      "skills.engineering.title": "Mühendislik",
      "skills.tag.mobileDev": "Mobil Geliştirme",
      "skills.tag.crossPlatform": "Platformlar Arası Geliştirme",
      "skills.tag.legacy": "Eski Sistem Modernizasyonu",
      "skills.tag.performance": "Performans Profilleme",
      "skills.tag.apiIntegration": "API Entegrasyonu",
      "skills.tag.codeQuality": "Kod Kalitesi",
      "experience.title": "Deneyim",
      "experience.role": "Mobil ve Full-Stack Geliştirici",
      "experience.period": "Mayıs 2019 — Günümüz",
      "experience.summary":
        "Web ve backend sistemlerinden platformlar arası mobil uygulamalara uzanan ürün geliştirme ve modernizasyon çalışmalarında yer alıyorum.",
      "experience.item1":
        "C# ve .NET ile REST API servisleri geliştiriyor, mobil istemci ile backend arasındaki entegrasyonları inceliyorum.",
      "experience.item2":
        "Xamarin.Forms tabanlı uygulamaların geliştirme ve bakımına, ayrıca .NET MAUI’ye geçiş çalışmalarına katkı sağlıyorum.",
      "experience.item3":
        "Android ve iOS uygulamalarında performans, yerel veri senkronizasyonu, ortak bileşenler ve kod kalitesi üzerinde çalışıyorum.",
      "work.title": "Öne çıkan çalışma",
      "folderScope.category": "Açık kaynak Raycast eklentisi",
      "folderScope.description":
        "Finder’da açık olan klasörün içinde ayrı bir arama uygulamasına geçmeden metin aramayı sağlayan bir Raycast eklentisi geliştirdim. Arama süreci hızlı, kesilebilir ve yerel çalışma öncelikli olacak şekilde tasarlandı.",
      "folderScope.feature1": "Aktif Finder klasörünü veya seçimini algılar.",
      "folderScope.feature2": "Yazarken canlı ve iptal edilebilir arama sonuçları sunar.",
      "folderScope.feature3": "Düz metin ve regular expression aramasını destekler.",
      "folderScope.localNote":
        "Aramalar cihazda çalışır; ağ yalnızca paketli ripgrep’in gerektiğinde SHA-256 doğrulamasıyla indirilmesi için kullanılır.",
      "folderScope.methodLabel": "Geliştirme yaklaşımı",
      "folderScope.method":
        "AI araçlarından fikir geliştirme ve uygulama sürecinde yararlandım; mimari, güvenlik, davranış, test ve kalite kararlarını ise inceleyip doğrulayarak geliştirme sorumluluğunu üstlendim.",
      "folderScope.status": "Açık kaynak · Raycast Store için hazırlanıyor",
      "folderScope.linkAria": "Folder Scope repository’sini GitHub’da aç",
      "folderScope.raycastLinkAria": "Raycast profilimi aç",
      "folderScope.visualAlt": "Folder Scope’un klasör içinde metin arama fikrini temsil eden proje görseli",
      "contact.title": "İletişim",
      "contact.description":
        "Açık kaynak araçlar, özenle geliştirilmiş yazılımlar ve mobil geliştirme üzerine düşünce paylaşmaya her zaman açığım. Bana e-posta, GitHub veya LinkedIn üzerinden ulaşabilirsiniz.",
      "contact.email": "E-posta gönder",
      "contact.emailAria": "Ömer Aydemir’e e-posta gönder",
      "contact.github": "GitHub üzerinden ulaş",
      "contact.linkedin": "LinkedIn üzerinden ulaş",
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
      "identity.role": "Mobile & Full-Stack Developer",
      "hero.eyebrow": "Hi, I’m Ömer.",
      "hero.title": "I build and improve mobile applications.",
      "hero.description":
        "Since 2019, I have worked with .NET, cross-platform mobile technologies and the backend services that support these applications.",
      "social.github": "Open my GitHub profile",
      "social.linkedin": "Open my LinkedIn profile",
      "about.title": "About",
      "about.paragraph1":
        "I began my software career working on web and backend systems. While improving existing products with C#, ASP.NET, JavaScript, HTML and CSS, my focus gradually shifted toward REST APIs and mobile applications.",
      "about.paragraph2":
        "Today I work on Android and iOS applications with Xamarin.Forms and .NET MAUI, the .NET services behind them, and the data flows between client and API. Legacy modernization, mobile performance and maintainable code structures are among my main engineering interests.",
      "about.paragraph3":
        "I prefer to examine a problem end to end—from the mobile client to the API and data layers—instead of looking only at the visible screen. I bring the same approach to small, useful open-source tools.",
      "about.photoAlt": "Portrait of Ömer Aydemir",
      "skills.title": "Skills",
      "skills.mobile.title": "Mobile",
      "skills.backend.title": "Backend",
      "skills.webData.title": "Web & Data",
      "skills.engineering.title": "Engineering",
      "skills.tag.mobileDev": "Mobile Development",
      "skills.tag.crossPlatform": "Cross-Platform Development",
      "skills.tag.legacy": "Legacy System Modernization",
      "skills.tag.performance": "Performance Profiling",
      "skills.tag.apiIntegration": "API Integration",
      "skills.tag.codeQuality": "Code Quality",
      "experience.title": "Experience",
      "experience.role": "Mobile & Full-Stack Developer",
      "experience.period": "May 2019 — Present",
      "experience.summary":
        "I contribute to product development and modernization work spanning web and backend systems through cross-platform mobile applications.",
      "experience.item1":
        "I develop REST API services with C# and .NET and examine integrations between mobile clients and backend systems.",
      "experience.item2":
        "I contribute to the development and maintenance of Xamarin.Forms applications and to their transition to .NET MAUI.",
      "experience.item3":
        "I work on performance, local data synchronization, shared components and code quality across Android and iOS applications.",
      "work.title": "Featured work",
      "folderScope.category": "Open-source Raycast extension",
      "folderScope.description":
        "I built a Raycast extension for searching text inside the folder open in Finder without switching to a separate search application. The search flow is designed to be fast, cancellable and local-first.",
      "folderScope.feature1": "Detects the active Finder folder or selection.",
      "folderScope.feature2": "Streams cancellable search results as you type.",
      "folderScope.feature3": "Supports plain-text and regular-expression searches.",
      "folderScope.localNote":
        "Searches run on the device; the network is used only to download bundled ripgrep with SHA-256 verification when needed.",
      "folderScope.methodLabel": "Development approach",
      "folderScope.method":
        "I used AI tools during ideation and implementation while retaining responsibility for reviewing and validating architecture, security, behavior, testing and quality decisions.",
      "folderScope.status": "Open source · Preparing for the Raycast Store",
      "folderScope.linkAria": "Open the Folder Scope repository on GitHub",
      "folderScope.raycastLinkAria": "Open my Raycast profile",
      "folderScope.visualAlt": "Project artwork representing Folder Scope’s in-folder text search",
      "contact.title": "Contact",
      "contact.description":
        "I’m always open to exchanging ideas about open-source tools, thoughtfully built software and mobile development. You can reach me by email, GitHub or LinkedIn.",
      "contact.email": "Send an email",
      "contact.emailAria": "Send an email to Ömer Aydemir",
      "contact.github": "Get in touch on GitHub",
      "contact.linkedin": "Get in touch on LinkedIn",
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
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const value = dict[el.dataset.i18nAlt];
      if (value) el.setAttribute("alt", value);
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
