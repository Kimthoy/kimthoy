/**
 * Site-wide EN / KM (Khmer) translator.
 *
 * Usage in HTML:
 *   <span data-i18n="nav.home">Home</span>
 *   <p data-i18n="hero.subtitle">Let's work together...</p>
 *   <button data-i18n-aria="copy.phone" aria-label="Copy phone number">...</button>
 *
 * - data-i18n        -> replaces the element's text content
 * - data-i18n-html    -> replaces the element's innerHTML (use when the string needs markup, e.g. a <span> for gradient text)
 * - data-i18n-aria     -> replaces the element's aria-label
 * - data-i18n-placeholder -> replaces an <input>/<textarea> placeholder
 *
 * Add new pages by adding a new top-level key to TRANSLATIONS.pages and
 * tagging elements with data-i18n="pages.<page>.<key>". Shared keys (nav,
 * footer, common) are available on every page automatically.
 */
(function () {
  "use strict";

  const STORAGE_KEY = "site-lang";
  const DEFAULT_LANG = "en";

  const TRANSLATIONS = {
    en: {
      common: {
        translate: "Translate",
      },
      nav: {
        home: "Home",
        resume: "Resume",
        projects: "Projects",
        contact: "Contact",
        available: " available",
      },
      footer: {
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
      },
      pages: {
        contact: {
          eyebrow: "~/portfolio $ contact --new",
          title: "Get in touch",
          subtitle:
            "Let's work together — reach out on whichever channel is easiest for you.",
          phoneTitle: "Phone",
          phoneDesc: "Call or message any time.",
          telegramTitle: "Telegram",
          telegramDesc: "Usually the fastest way to reach me.",
          whatsappTitle: "WhatsApp",
          whatsappDesc: "Good for calls or voice notes on the go.",
          messengerTitle: "Messenger",
          messengerDesc: "Popular with local Cambodian clients.",
          emailTitle: "Email",
          emailDesc: "Best for project briefs and longer details.",
          elsewhere: "// elsewhere",
        },
        home: {
          eyebrow: "~/portfolio $ whoami",
          roles: [
            "Laravel Developer",
            "JavaScript Developer",
            "C# Developer",
            "WordPress Developer",
          ],
          leadIn: "I can help your business to",
          title: "Get online and grow fast",
          intro:
            "I design and build products end to end — clean Laravel back ends, hand-written JavaScript on the front, and everything wired together, tested, and shipped.",
          resumeBtn: "Resume",
          projectsBtn: "Projects",
          statStacksLabel: "stacks I ship in",
          statFrontendLabel: "hand-written frontend",
          statAlways: "Always",
          statShippingLabel: "shipping something",
          scroll: "scroll",
          focusLabel: "// focus",
          focusText: "Full-stack apps, built end to end",
          stackLabel: "// stack",
          roleTag: "Full-stack Developer",
          aboutLabel: "// about",
          aboutTitle: "About Me",
          aboutLead: "My name is Kim Thoy and I help brands grow.",
          aboutP1:
            "I build dynamic, database-driven web projects using the Laravel framework, paired with hand-written HTML, CSS and JavaScript on the frontend.",
          aboutP2:
            "Alongside that I also work in C# and build and customize sites on WordPress.",
          skillsLabel: "// stack",
          skillsTitle: "What I work with",
          skillsSubtitle: "The stack I use most, day to day.",
          skillBackend: "backend/",
          skillFrontend: "frontend/",
          skillCms: "cms/",
          laravelDesc: "Dynamic, database-driven sites and web apps.",
          jsDesc: "Interactive, responsive frontends built by hand.",
          csharpDesc: "Backend logic and desktop/services work.",
          wpDesc: "Custom builds and theme/plugin work.",
        },
        resume: {
          eyebrow: "~/portfolio $ cat resume.md",
          title: "Resume",
          downloadBtn: "Download Resume",
          experienceLabel: "// experience",
          npicOrg: "National Polytechnic Institute of Cambodia (NPIC)",
          expOrgSub: "Year 3 · Computer Science",
          expIntro:
            "Currently pursuing a Bachelor's degree in Computer Science at NPIC. Over the past three years I've built up my skills across:",
          skillLaravelDesc: "— a robust PHP framework for web applications",
          skillPhpDesc: "— a versatile scripting language for the web",
          skillHtmlCssDesc: "— the building blocks of web structure and design",
          skillJsDesc: "— for building interactive, dynamic web pages",
          educationLabel: "// education",
          eduPresentSub: "Computer Science · Year 3",
          eduPresentDesc:
            "Pursuing a degree in Computer Science at a reputable institution in Cambodia — building a foundation in programming, software development, and web technologies for a future career in tech.",
          highSchoolOrg: "Sok An Phnom Penh High School",
          highSchoolSub: "Diploma",
          highSchoolDesc:
            "Graduated in 2021 with a strong foundation across Mathematics, English, and Khmer — ready to apply that foundation to what came next.",
          skillsLabel: "// skills",
          proSkillsTitle: "Professional Skills",
          skillBackendDev: "Backend Developer",
          skillDesign: "Design",
          skillCommunication: "Communication",
          languagesTitle: "Languages",
        },
        projects: {
          eyebrow: "~/portfolio $ ls projects/",
          title: "Projects",
          subtitle: "A few of the things I've built, end to end.",
          tagEcommerce: "e-commerce",
          project1Title: "Fashion4Kh",
          project1Desc:
            "An online storefront built for selling products, with a full admin panel for creating, updating, and removing listings.",
          tagPortfolio: "portfolio",
          project2Title: "Portfolio",
          project2Desc:
            "This site — a hand-built, hand-animated portfolio covering who I am and what I work on.",
          ctaLabel: "// next",
          ctaTitle: "Let's build something together",
          ctaBtn: "Contact me",
        },
      },
      aria: {
        copyPhone: "Copy phone number",
        copyTelegram: "Copy Telegram handle",
        copyWhatsapp: "Copy WhatsApp number",
        copyEmail: "Copy email address",
        openMessenger: "Open Messenger chat",
        toggleNav: "Toggle navigation",
        toggleLang: "Switch language",
      },
    },
    km: {
      common: {
        translate: "បកប្រែ",
      },
      nav: {
        home: "ទំព័រដើម",
        resume: "ប្រវត្តិរូប",
        projects: "គម្រោង",
        contact: "ទំនាក់ទំនង",
        available: "ទំនេរ",
      },
      footer: {
        privacy: "គោលការណ៍ភាពឯកជន",
        terms: "លក្ខខណ្ឌប្រើប្រាស់",
        contact: "ទំនាក់ទំនង",
      },
      pages: {
        contact: {
          eyebrow: "~/portfolio $ ទំនាក់ទំនង --ថ្មី",
          title: "ទាក់ទងមកកាន់ខ្ញុំ",
          subtitle:
            "តោះធ្វើការជាមួយគ្នា — ទាក់ទងតាមមធ្យោបាយណាដែលងាយស្រួលបំផុតសម្រាប់អ្នក។",
          phoneTitle: "ទូរស័ព្ទ",
          phoneDesc: "ហៅ ឬផ្ញើសារបានគ្រប់ពេល។",
          telegramTitle: "តេឡេក្រាម",
          telegramDesc: "ជាធម្មតាជាមធ្យោបាយលឿនបំផុតដើម្បីទាក់ទងខ្ញុំ។",
          whatsappTitle: "វ៉ាត់សាប់",
          whatsappDesc:
            "សមស្របសម្រាប់ការហៅទូរស័ព្ទ ឬផ្ញើសារជាសំឡេងពេលធ្វើដំណើរ។",
          messengerTitle: "ម៉េសសិនចឺ",
          messengerDesc: "ពេញនិយមក្នុងចំណោមអតិថិជនកម្ពុជា។",
          emailTitle: "អ៊ីមែល",
          emailDesc: "ល្អបំផុតសម្រាប់ការពន្យល់លម្អិតអំពីគម្រោង។",
          elsewhere: "// កន្លែងផ្សេងទៀត",
        },
        home: {
          eyebrow: "~/portfolio $ whoami",
          roles: [
            "អ្នកអភិវឌ្ឍន៍ Laravel",
            "អ្នកអភិវឌ្ឍន៍ JavaScript",
            "អ្នកអភិវឌ្ឍន៍ C#",
            "អ្នកអភិវឌ្ឍន៍ WordPress",
          ],
          leadIn: "ខ្ញុំអាចជួយអាជីវកម្មរបស់អ្នកឱ្យ",
          title: "ចូលអនឡាញ និងរីកចម្រើនលឿន",
          intro:
            "ខ្ញុំរចនា និងបង្កើតផលិតផលពីដើមដល់ចប់ — Laravel backend ស្អាត JavaScript សរសេរដោយដៃនៅផ្នែកខាងមុខ ព្រមទាំងភ្ជាប់គ្នា សាកល្បង និងបញ្ជូនប្រគល់ជូនគ្រប់ដំណាក់កាល។",
          resumeBtn: "ប្រវត្តិរូប",
          projectsBtn: "គម្រោង",
          statStacksLabel: "ស្តេកបច្ចេកវិទ្យាដែលខ្ញុំប្រើ",
          statFrontendLabel: "ផ្នែកខាងមុខសរសេរដោយដៃ",
          statAlways: "ជានិច្ច",
          statShippingLabel: "កំពុងបញ្ជូនប្រគល់ការងារថ្មី",
          scroll: "រំកិលចុះក្រោម",
          focusLabel: "// ចំណុចផ្តោត",
          focusText: "កម្មវិធីពេញលេញពីដើមដល់ចប់",
          stackLabel: "// បច្ចេកវិទ្យា",
          roleTag: "អ្នកអភិវឌ្ឍន៍ Full-stack",
          aboutLabel: "// អំពីខ្ញុំ",
          aboutTitle: "អំពីខ្ញុំ",
          aboutLead: "ខ្ញុំឈ្មោះគឹម ធូយ ហើយខ្ញុំជួយឱ្យម៉ាកយីហោរីកចម្រើន។",
          aboutP1:
            "ខ្ញុំបង្កើតគម្រោងគេហទំព័រដែលមានមូលដ្ឋានទិន្នន័យ ដោយប្រើប្រាស់ Laravel framework រួមផ្សំជាមួយ HTML, CSS និង JavaScript ដែលសរសេរដោយដៃនៅផ្នែកខាងមុខ។",
          aboutP2:
            "ក្រៅពីនេះ ខ្ញុំក៏ធ្វើការជាមួយ C# និងបង្កើត ព្រមទាំងប្តូរតាមបំណងគេហទំព័រនៅលើ WordPress ផងដែរ។",
          skillsLabel: "// បច្ចេកវិទ្យា",
          skillsTitle: "អ្វីដែលខ្ញុំធ្វើការជាមួយ",
          skillsSubtitle: "បច្ចេកវិទ្យាដែលខ្ញុំប្រើប្រចាំថ្ងៃច្រើនជាងគេ។",
          skillBackend: "backend/",
          skillFrontend: "frontend/",
          skillCms: "cms/",
          laravelDesc: "គេហទំព័រ និងកម្មវិធីគេហទំព័រដែលមានមូលដ្ឋានទិន្នន័យ។",
          jsDesc: "ផ្នែកខាងមុខដែលមានអន្តរកម្ម និងឆ្លើយតបល្អ សរសេរដោយដៃ។",
          csharpDesc:
            "តក្កវិជ្ជា backend និងការងារកម្មវិធី/សេវាកម្មលើកុំព្យូទ័រ។",
          wpDesc: "ការបង្កើតតាមបំណង និងការងារ theme/plugin។",
        },
        resume: {
          eyebrow: "~/portfolio $ cat resume.md",
          title: "ប្រវត្តិរូប",
          downloadBtn: "ទាញយកប្រវត្តិរូប",
          experienceLabel: "// បទពិសោធន៍",
          npicOrg: "វិទ្យាស្ថានជាតិពហុបច្ចេកទេសកម្ពុជា (NPIC)",
          expOrgSub: "ឆ្នាំទី៣ · វិទ្យាសាស្ត្រកុំព្យូទ័រ",
          expIntro:
            "បច្ចុប្បន្នកំពុងសិក្សាថ្នាក់បរិញ្ញាបត្រផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រនៅ NPIC។ ក្នុងរយៈពេលបីឆ្នាំចុងក្រោយនេះ ខ្ញុំបានបង្កើនជំនាញរបស់ខ្ញុំក្នុងផ្នែកទាំងនេះ៖",
          skillLaravelDesc: "— ក្របខ័ណ្ឌ PHP ដ៏រឹងមាំសម្រាប់កម្មវិធីគេហទំព័រ",
          skillPhpDesc: "— ភាសាស្គ្រីបដែលអាចប្រើប្រាស់បានចម្រុះសម្រាប់គេហទំព័រ",
          skillHtmlCssDesc:
            "— ធាតុមូលដ្ឋានសម្រាប់រចនាសម្ព័ន្ធ និងការរចនាគេហទំព័រ",
          skillJsDesc: "— សម្រាប់បង្កើតទំព័រគេហទំព័រដែលមានអន្តរកម្ម និងថាមវន្ត",
          educationLabel: "// ការសិក្សា",
          eduPresentSub: "វិទ្យាសាស្ត្រកុំព្យូទ័រ · ឆ្នាំទី៣",
          eduPresentDesc:
            "កំពុងសិក្សាថ្នាក់បរិញ្ញាបត្រផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រនៅស្ថាប័នដ៏មានកិត្យានុភាពមួយក្នុងប្រទេសកម្ពុជា — កសាងគ្រឹះលើការសរសេរកម្មវិធី ការអភិវឌ្ឍន៍កម្មវិធី និងបច្ចេកវិទ្យាគេហទំព័រសម្រាប់អាជីពនាពេលអនាគតក្នុងវិស័យបច្ចេកវិទ្យា។",
          highSchoolOrg: "វិទ្យាល័យសុខ អាន ភ្នំពេញ",
          highSchoolSub: "សញ្ញាបត្រ",
          highSchoolDesc:
            "បញ្ចប់ការសិក្សានៅឆ្នាំ២០២១ ដោយមានគ្រឹះមូលដ្ឋានដ៏រឹងមាំលើមុខវិជ្ជាគណិតវិទ្យា ភាសាអង់គ្លេស និងភាសាខ្មែរ — ត្រៀមខ្លួនអនុវត្តគ្រឹះនោះទៅលើដំណាក់កាលបន្ទាប់។",
          skillsLabel: "// ជំនាញ",
          proSkillsTitle: "ជំនាញវិជ្ជាជីវៈ",
          skillBackendDev: "អ្នកអភិវឌ្ឍន៍ Backend",
          skillDesign: "រចនា",
          skillCommunication: "ការទំនាក់ទំនង",
          languagesTitle: "ភាសាសរសេរកម្មវិធី",
        },
        projects: {
          eyebrow: "~/portfolio $ ls projects/",
          title: "គម្រោង",
          subtitle: "ការងារមួយចំនួនដែលខ្ញុំបានបង្កើតពីដើមដល់ចប់។",
          tagEcommerce: "អាជីវកម្មអនឡាញ",
          project1Title: "Fashion4Kh",
          project1Desc:
            "ហាងលក់ទំនិញអនឡាញសម្រាប់លក់ផលិតផល ដោយមានផ្ទាំងគ្រប់គ្រងពេញលេញសម្រាប់បង្កើត កែសម្រួល និងលុបបញ្ជីផលិតផល។",
          tagPortfolio: "ផលប័ត្រ",
          project2Title: "ផលប័ត្រ",
          project2Desc:
            "គេហទំព័រនេះ — ជាផលប័ត្រដែលបានបង្កើត និងធ្វើចលនាដោយដៃ គ្របដណ្តប់អំពីខ្លួនខ្ញុំ និងអ្វីដែលខ្ញុំធ្វើការជាមួយ។",
          ctaLabel: "// បន្ទាប់",
          ctaTitle: "តោះបង្កើតអ្វីមួយជាមួយគ្នា",
          ctaBtn: "ទាក់ទងខ្ញុំ",
        },
      },
      aria: {
        copyPhone: "ចម្លងលេខទូរស័ព្ទ",
        copyTelegram: "ចម្លងឈ្មោះតេឡេក្រាម",
        copyWhatsapp: "ចម្លងលេខវ៉ាត់សាប់",
        copyEmail: "ចម្លងអាសយដ្ឋានអ៊ីមែល",
        openMessenger: "បើកការជជែកតាម Messenger",
        toggleNav: "បិទបើកម៉ឺនុយ",
        toggleLang: "ប្តូរភាសា",
      },
    },
  };

  function getByPath(obj, path) {
    return path
      .split(".")
      .reduce(
        (acc, key) => (acc && acc[key] !== undefined ? acc[key] : null),
        obj,
      );
  }

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];

    document.documentElement.setAttribute("lang", lang === "km" ? "km" : "en");
    document.documentElement.classList.toggle("lang-km", lang === "km");

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getByPath(dict, el.getAttribute("data-i18n"));
      if (value != null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const value = getByPath(dict, el.getAttribute("data-i18n-html"));
      if (value != null) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = getByPath(dict, el.getAttribute("data-i18n-aria"));
      if (value != null) el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const value = getByPath(dict, el.getAttribute("data-i18n-placeholder"));
      if (value != null) el.setAttribute("placeholder", value);
    });

    document.querySelectorAll("[data-lang-label]").forEach((el) => {
      el.textContent = lang === "km" ? "EN" : "ខ្មែរ";
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((el) => {
      el.setAttribute("aria-pressed", String(lang === "km"));
    });

    document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
  }

  function initToggleButtons() {
    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(getLang() === "km" ? "en" : "km");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getLang());
    initToggleButtons();
  });

  // Expose for other inline scripts (e.g. the homepage typewriter, which
  // needs the current language's role list and to react to langchange).
  window.SiteI18n = {
    getLang,
    setLang,
    get: (path) =>
      getByPath(TRANSLATIONS[getLang()] || TRANSLATIONS[DEFAULT_LANG], path),
  };
})();
