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
        available: "available",
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

  // Expose for other inline scripts if ever needed.
  window.SiteI18n = { getLang, setLang };
})();
