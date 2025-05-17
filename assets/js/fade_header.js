export default function fadeHeader() {
  /**
   * スクロール位置合わせてヘッダーをフェードイン・アウトさせる
   */
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > window.innerHeight) {
      header.style.opacity = '1';
      header.style.transition = 'opacity 0.5s ease-in-out';
    } else {
      header.style.opacity = '0';
      header.style.transition = 'opacity 0.5s ease-in-out';
    }

    lastScrollY = currentScrollY;
  });
}
