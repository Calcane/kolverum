const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const gymCrushCard = document.querySelector('.current-song-card');

if (gymCrushCard && !gymCrushCard.querySelector('.release-links')) {
  const releaseLinks = document.createElement('div');
  releaseLinks.className = 'release-links';

  const hyperfollowLink = document.createElement('a');
  hyperfollowLink.href = 'https://distrokid.com/hyperfollow/kolverum/gym-crush';
  hyperfollowLink.target = '_blank';
  hyperfollowLink.rel = 'noopener noreferrer';
  hyperfollowLink.textContent = 'Pre-Save / Release merken';

  releaseLinks.appendChild(hyperfollowLink);
  gymCrushCard.appendChild(releaseLinks);
}
