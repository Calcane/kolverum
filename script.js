const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');

if (year) year.textContent = new Date().getFullYear();

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

// GYM CRUSH is released: move the visible focus from the release launch to KARMA.
const currentSection = document.querySelector('#jetzt');
const currentCards = currentSection ? [...currentSection.querySelectorAll('.project-card')] : [];
const gymCrushCard = currentCards.find((card) => card.querySelector('h3')?.textContent.trim() === 'GYM CRUSH');
const karmaCard = currentCards.find((card) => card.querySelector('h3')?.textContent.trim() === 'KARMA');

if (gymCrushCard) {
  const followingDivider = gymCrushCard.nextElementSibling;
  if (followingDivider?.classList.contains('history-empty')) followingDivider.remove();
  gymCrushCard.remove();
}

if (karmaCard) {
  karmaCard.classList.add('featured');
}

const currentNote = currentSection?.querySelector('.section-note');
if (currentNote) {
  currentNote.textContent = 'Aktuell liegt der Fokus auf KARMA. Danach folgt NAUGHTY.';
}

// First release is live: activate the main listening CTA.
const listenCta = document.querySelector('[data-listen-cta]');
if (listenCta) {
  listenCta.hidden = false;
  listenCta.href = 'https://distrokid.com/hyperfollow/kolverum/gym-crush';
  listenCta.target = '_blank';
  listenCta.rel = 'noopener noreferrer';
  listenCta.textContent = 'Musik hören';
}

// Add GYM CRUSH to the permanent release history.
const releaseList = document.querySelector('[data-releases]');
const releaseTemplate = document.querySelector('#release-template');
const releaseEmpty = document.querySelector('[data-release-empty]');

if (releaseList && releaseTemplate && !releaseList.querySelector('.release-card')) {
  releaseEmpty?.remove();

  const release = releaseTemplate.content.firstElementChild.cloneNode(true);
  const releaseProject = release.querySelector('[data-release-project]');
  const releaseDate = release.querySelector('[data-release-date]');
  const releaseTitle = release.querySelector('[data-release-title]');
  const releaseStory = release.querySelector('[data-release-story]');
  const releaseLinks = release.querySelector('[data-release-links]');

  if (releaseProject) releaseProject.textContent = 'GYM · ERSTER RELEASE';
  if (releaseDate) {
    releaseDate.dateTime = '2026-10-02';
    releaseDate.textContent = '02.10.2026';
  }
  if (releaseTitle) releaseTitle.textContent = 'GYM CRUSH';
  if (releaseStory) {
    releaseStory.textContent = 'Ein alltäglicher Crush-Moment im Gym: Niemand sagt viel, und trotzdem verändert eine Person plötzlich den ganzen Raum. Aus dieser kleinen Beobachtung wurde der erste veröffentlichte KOLVERUM-Song.';
  }

  if (releaseLinks) {
    releaseLinks.hidden = false;

    const links = [
      ['Spotify', 'https://open.spotify.com/track/6pDeBtVlfx51DaA9PoV5DU'],
      ['YouTube-Kanal', 'https://www.youtube.com/@KOLVERUM/videos'],
      ['Alle Plattformen', 'https://distrokid.com/hyperfollow/kolverum/gym-crush']
    ];

    links.forEach(([label, href]) => {
      const link = document.createElement('a');
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = label;
      releaseLinks.appendChild(link);
    });
  }

  releaseList.appendChild(release);
}
