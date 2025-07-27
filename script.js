// script.js
const translations = {
  en: {
    title: "Welcome to Kusding's Personal Page!",
    subtitle: "About Me",
    desc: "Hello! I'm Kusding. Welcome to my personal page where you can find information about me and join my Discord server.",
    game: "Play Catch the Food Game",
    discord: "Join My Discord Server",
  },
  vi: {
    title: "Chào mừng đến với trang cá nhân của Kusding!",
    subtitle: "Giới thiệu",
    desc: "Xin chào! Mình là Kusding. Đây là nơi bạn có thể tìm thấy thông tin về mình và tham gia server Discord.",
    game: "Chơi game Bắt đồ ăn",
    discord: "Tham gia server Discord của mình",
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
}


