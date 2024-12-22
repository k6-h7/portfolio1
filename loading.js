// JavaScript


//Loading

document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.querySelector('.loading'); // ローディング全体
  const loadingTextWords = document.querySelectorAll('.loading-text-words'); // 個別文字アニメーション

  // 2回目以降のアクセス処理
  if (sessionStorage.getItem('access')) {
    loadingScreen.classList.add('is-active');
  } else {
    sessionStorage.setItem('access', 'true');

    // 4秒間の最低表示時間
    const minimumDisplayTime = new Promise((resolve) => {
      setTimeout(resolve, 4000); // 4秒後に完了
    });

    // ページの主要コンテンツが読み込まれるのを待つ
    const pageLoaded = new Promise((resolve) => {
      window.addEventListener('load', resolve); // ページ全体の読み込み完了時に実行
    });

    // 両方の条件が満たされてからフェードアウト
    Promise.all([minimumDisplayTime, pageLoaded]).then(() => {
      fadeOut(loadingScreen, 600); // フェードアウト処理 (600ms)
    });
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
