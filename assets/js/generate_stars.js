export default function generateStars() {
  /**
   * 背景に星を生成して表示する関数。
   * ページのDOMが完全に読み込まれた後、.top クラスを持つ要素内に
   * ランダムな位置・サイズ・アニメーション遅延を持つ星（span要素）を指定数生成して追加します。
   *
   * @function
   * @returns {void} 何も返しません
   */
  document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.querySelector('.top');
    if (!starsContainer) return;

    const STAR_COUNT = 500;
    const MIN_SIZE = 1;
    const MAX_SIZE = 2;

    for (let i = 0; i < STAR_COUNT; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      const size = Math.random() * (MAX_SIZE - MIN_SIZE) + MIN_SIZE;
      Object.assign(star.style, {
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
      });
      starsContainer.appendChild(star);
    }
  });
}
