// JavaScript


//Loading

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.querySelector('.loading'); // ローディング全体
  const loadingTextWords = document.querySelectorAll('.loading-text-words'); // 個別文字アニメーション

  // 2回目以降のアクセス処理
  if (sessionStorage.getItem('access')) {
    loadingScreen.classList.add('is-active');
    /* setTimeout(() => {
      fadeOut(loadingScreen, 300); // フェードアウト処理 (300ms)
    }, 2000); // 2秒後に実行 */
  } else {
    // 初回アクセス時
    sessionStorage.setItem('access', 'true');
    setTimeout(() => {
      fadeOut(loadingScreen, 600); // フェードアウト処理 (600ms)
    }, 4000); // 4秒後に実行
  }

  // 個別文字アニメーション設定
  loadingTextWords.forEach((span, index) => {
    span.style.animationDelay = `${index / 10}s`; // 0.1秒ずつ遅延
  });
});

// フェードアウト処理の関数
function fadeOut(element, duration) {
  element.style.transition = `opacity ${duration}ms`;
  element.style.opacity = '0';

  // トランジション終了後に display: none を設定
  element.addEventListener('transitionend', () => {
    element.style.display = 'none';
  }, { once: true }); // 1回だけ実行
}
