// 언어: 저장한 선택 → 브라우저 언어(ko 면 한국어, 나머지 영어). 저장은 이 브라우저 편의일 뿐이라 막혀도 동작한다.
(function () {
  var KEY = "suo-lang";
  function saved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(l) {
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
  }
  var nav = (navigator.language || "en").toLowerCase();
  document.documentElement.setAttribute("data-lang", saved() || (nav.indexOf("ko") === 0 ? "ko" : "en"));
  document.documentElement.lang = document.documentElement.getAttribute("data-lang");
  window.suoLang = function () { return document.documentElement.getAttribute("data-lang"); };
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".lang-btn");
    if (b) set(window.suoLang() === "ko" ? "en" : "ko");
  });
})();
