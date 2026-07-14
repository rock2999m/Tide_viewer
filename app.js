(function () {
  const datePicker = document.getElementById("datePicker");
  const btnLoad = document.getElementById("btnLoad");
  const btnClear = document.getElementById("btnClear");
  const debug = document.getElementById("debug");

  function log(message) {
    const t = new Date().toLocaleTimeString("ja-JP");
    debug.textContent += "[" + t + "] " + message + "\n";
    debug.scrollTop = debug.scrollHeight;
  }

  function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return y + "-" + m + "-" + d;
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) {
      log("Service Worker 非対応ブラウザです");
      return;
    }

    navigator.serviceWorker
      .register("./sw.js")
      .then(() => log("Service Worker 登録成功"))
      .catch((e) => log("Service Worker 登録失敗: " + e.message));
  }

  window.addEventListener("load", () => {
    datePicker.value = formatDate(new Date());
    log("初期化完了");
    registerServiceWorker();
  });

  btnLoad.addEventListener("click", () => {
    log("読み込みボタン押下: " + datePicker.value);
    log("ここに API 呼び出し・優先取得・背景取得ロジックを実装してください。");
  });

  btnClear.addEventListener("click", () => {
    debug.textContent = "";
  });
})();
