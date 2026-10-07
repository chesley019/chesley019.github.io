/* Presentation only: original Markdown supplies all content. */
(() => {
  const article = document.querySelector('.is-home .article-wrap');
  if (!article) return;
  const image = article.querySelector('.floatpic');
  const heading = article.querySelector('h2');
  const intro = heading?.nextElementSibling;
  if (!image || !heading || intro?.tagName !== 'P') return;
  const hero = document.createElement('section');
  hero.className = 'profile-hero';
  hero.setAttribute('aria-labelledby', heading.id || 'profile-heading');
  const copy = document.createElement('div');
  copy.className = 'hero-copy';
  const title = document.createElement('h1');
  title.id = heading.id || 'profile-heading';
  title.innerHTML = heading.innerHTML;
  heading.replaceWith(title);
  copy.append(title, intro);
  const frame = document.createElement('div');
  frame.className = 'hero-photo';
  frame.append(image);
  hero.append(copy, frame);
  document.querySelector('.content-grid').before(hero);
})();
