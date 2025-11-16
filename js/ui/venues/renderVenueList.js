import { CONFIG } from '../../config.js';

export function renderVenueList(container, venues) {
  if (venues.length === 0) {
    return "<div class='text-center'>No venues found</div>";
  }

  const venueElements = venues.map((venue) => createVenueCard(venue));
  container.innerHTML = '';
  container.append(...venueElements);
}

const createVenueCard = (venue) => {
  const { media, id } = venue;

  const card = document.createElement('a');
  card.className = 'bg-cover bg-center h-64 rounded-lg shadow-md';
  card.setAttribute('data-testid', 'venue-card');

  const base = CONFIG.basePath || '';
  const href = `${base}/venue/index.html?id=${encodeURIComponent(id)}`.replace(
    /\/+/g,
    '/',
  );
  card.href = href;

  const imageUrl = media?.[0] || 'https://placehold.co/400x400';
  card.style.backgroundImage = `url(${imageUrl})`;

  return card;
};
