export default function generateStars() {
  /**
   * 背景に星を表示する
   */
  window.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelector('.top');

    // 星を生成する関数
    const createStar = () => {
      const star = document.createElement('span');
      star.className = 'star';
      const minSize = 1; // 星の最小サイズを指定
      const maxSize = 2; // 星の最大サイズを指定
      const size = Math.random() * (maxSize - minSize) + minSize;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      stars.appendChild(star);
    };

    // for文で星を生成する関数を指定した回数呼び出す
    for (let i = 0; i <= 500; i++) {
      createStar();
    }
  });
}
