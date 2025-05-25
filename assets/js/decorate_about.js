export default function decorateAbout() {
  /**
   * Aboutセクションの段落をフェードインさせる
   */

  const aboutParagraphs = document.querySelectorAll('.about p');

  // Initially hide all paragraphs
  aboutParagraphs.forEach((paragraph) => {
    paragraph.style.opacity = 0;
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutParagraphs.forEach((paragraph, index) => {
            paragraph.style.transition = 'opacity 1.5s ease-in-out';
            setTimeout(() => {
              paragraph.style.opacity = 1; // Fade in each paragraph
            }, (index + 1) * 1000); // Delay each paragraph by 1500ms, starting with the first
          });

          observer.disconnect(); // Stop observing once animation starts
        }
      });
    },
    { threshold: 0.8 }
  );

  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    observer.observe(aboutSection);
  }
}

