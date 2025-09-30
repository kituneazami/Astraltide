import generateStars from "./generate_stars.js";
import fadeHeader from "./fade_header.js";
import * as fadeinAnimations from './fadein_animation.js';

generateStars();
fadeHeader();
fadeinAnimations.fadeinAbout();

// 共通フェードイン設定関数
const getInitialStyles = (
  translate = '40px',
  direction = 'Y',
  opacity = 0,
  transition = 'opacity 0.8s ease, transform 0.8s ease'
) => ({
  opacity,
  transform: `translate${direction}(${translate})`,
  transition,
});

// フェードイン設定一覧
const fadeinConfigs = [
  {
    selector: '.section-header',
    initial: getInitialStyles(), // 下からフェードイン
    finalTransform: 'translateY(0)',
    threshold: 0.7,
  },
  {
    selector: '.characters .backbone',
    initial: getInitialStyles(), // 下からフェードイン
    finalTransform: 'translateY(0)',
    threshold: 0.2,
  },
  {
    selector: '.characters .Finoa',
    initial: getInitialStyles('-40px', 'X'), // 左からフェードイン
    finalTransform: 'translateX(0)',
    threshold: 0.3,
  },
  {
    selector: '.characters .Noctia',
    initial: getInitialStyles('40px', 'X'), // 右からフェードイン
    finalTransform: 'translateX(0)',
    threshold: 0.3,
  },
];

// 一括フェードイン処理
fadeinConfigs.forEach(({ selector, initial, finalTransform, threshold }) => {
  fadeinAnimations.fadeinElementsOnScroll(selector, initial, finalTransform, threshold);
});
