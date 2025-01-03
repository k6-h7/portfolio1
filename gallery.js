const filters = document.querySelectorAll('.filter');
const items = document.querySelectorAll('.img-item');

// 初期表示として「all」フィルターを適用
document.addEventListener('DOMContentLoaded', () => {
  const allFilter = document.querySelector('.filter[data-filter="all"]');
  if (allFilter) {
    allFilter.click(); // 「All」をクリックしてデフォルトで表示される状態に
  }
});

// フィルタボタンのクリックイベントを設定
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    // 「active」クラスを削除して、クリックされたボタンに追加
    filters.forEach(f => f.classList.remove('active')); // すべてのボタンから「active」を削除
    filter.classList.add('active'); // クリックされたボタンに「active」を追加

    const filterValue = filter.dataset.filter;

    // すべてのアイテムを非表示にする
    items.forEach(item => {
      item.style.display = 'none'; // アイテムを非表示にする
      item.style.opacity = 0;  // アニメーションのリセット
      item.style.filter = 'blur(10px)';
    });
    
    // 'all'が選択された場合はすべてのアイテムを表示
    if (filterValue === 'all') {
      items.forEach((item, index) => {
        item.style.display = 'block'; // アイテムを表示
        item.style.opacity = 1;
        item.style.filter = 'blur(0)';

        // アイテムにアニメーションを適用（indexを使って遅延）
        item.animate(
          {
            opacity: [0, 1],
            translate: ['0 -30px', '0'],
            filter: ['blur(10px)', 'blur(0)'],
          },
          {
            duration: 600,
            delay: index * 150,
            fill: 'forwards',
          }
        );
      });
    } else {
      // フィルタに一致するアイテムのみ表示
      items.forEach((item, index) => {
        if (item.classList.contains(filterValue)) {
          item.style.display = 'block'; // アイテムを表示
          item.style.opacity = 1;
          item.style.filter = 'blur(0)';

          // アニメーション
          item.animate(
            {
              opacity: [0, 1],
              filter: ['blur(10px)', 'blur(0)'],
            },
            {
              duration: 600,
              fill: 'forwards',
            }
          );
        } else {
          item.style.display = 'none'; // 一致しないアイテムは非表示
        }
      });
    }
  });
});




