function applyInitialStyles(elements, styles) {
  /**
   * 指定した要素に初期スタイルを適用します。
   * @param {NodeList|HTMLElement[]} elements - スタイルを適用する要素の配列またはNodeList
   * @param {Object} styles - 適用するCSSスタイルのオブジェクト
   */
  elements.forEach((el) => {
    Object.assign(el.style, styles);
  });
}

function createFadeInObserver(options, onIntersect) {
  /**
   * IntersectionObserverを作成し、要素が交差したときにコールバックを実行します。
   * @param {IntersectionObserverInit} options - IntersectionObserverのオプション
   * @param {(entry: IntersectionObserverEntry, observer: IntersectionObserver) => void} onIntersect - 交差時に呼び出されるコールバック
   * @returns {IntersectionObserver} IntersectionObserverインスタンス
   */
  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        onIntersect(entry, observer);
      }
    });
  }, options);
}

export function fadeinElementsOnScroll(selector, initialStyles, transformTo, threshold = 0.2) {
  /**
   * 指定したセレクターの要素にフェードインアニメーションを適用します。
   * @param {string} selector - 対象要素のセレクター
   * @param {Object} initialStyles - 初期スタイルのオブジェクト
   * @param {string} transformTo - フェードイン後のtransform値
   * @param {number} threshold - IntersectionObserverのthreshold
   */
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll(selector);
    applyInitialStyles(elements, initialStyles);

    const observer = createFadeInObserver({ threshold }, (entry, obs) => {
      entry.target.style.opacity = 1;
      entry.target.style.transform = transformTo;
      obs.unobserve(entry.target);
    });

    elements.forEach((el) => observer.observe(el));
  });
}

export function fadeinAbout() {
  /**
   * Aboutセクション内の段落（.about p）を順番にフェードインさせます。
   * ページ読み込み時に初期スタイルを設定し、Aboutセクションが表示されると1秒ごとに段落をフェードインします。
   */
  document.addEventListener('DOMContentLoaded', () => {
    const aboutParagraphs = document.querySelectorAll('.about p');
    applyInitialStyles(aboutParagraphs, {
      opacity: 0,
      transition: 'opacity 1.5s ease-in-out',
    });

    const observer = createFadeInObserver({ threshold: 0.25 }, (entry, obs) => {
      aboutParagraphs.forEach((paragraph, index) => {
        setTimeout(() => {
          paragraph.style.opacity = 1;
        }, (index + 1) * 1000);
      });
      obs.disconnect();
    });

    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }
  });
}
