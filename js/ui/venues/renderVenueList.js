// js/ui/venues/renderVenueList.js
export function renderVenueList(container, venues = []) {
  if (!container) return;

  // mark the list container for e2e tests
  container.setAttribute("data-test", "venue-list");

  // empty state
  if (!Array.isArray(venues) || venues.length === 0) {
    container.innerHTML = "<div class='text-center'>No venues found</div>";
    return;
  }

  // clear current content
  container.innerHTML = "";

  // only render venues that have a valid id
  const cards = venues
    .filter((v) => v && v.id)
    .map((venue) => createVenueCard(venue));

  if (cards.length === 0) {
    container.innerHTML = "<div class='text-center'>No venues found</div>";
    return;
  }

  container.append(...cards);
}

function createVenueCard(venue) {
  const { id, name, media } = venue;

  // support both string[] and {url, alt}[]
  const firstMedia = Array.isArray(media) ? media[0] : undefined;
  const imageUrl =
    (typeof firstMedia === "string" ? firstMedia : firstMedia?.url) ||
    "https://placehold.co/600x400";
  const altText =
    (typeof firstMedia === "object" && firstMedia?.alt) ||
    name ||
    "Venue";

  // clickable card
  const card = document.createElement("a");
  card.href = `/venue/?id=${encodeURIComponent(id)}`;
  card.setAttribute("data-test", "venue-item"); // <-- e2e hook
  card.setAttribute("aria-label", name || "Venue card");

  // visual style matches your existing approach
  card.className =
    "bg-cover bg-center h-64 rounded-lg shadow-md block overflow-hidden focus:outline-none focus:ring-2 focus:ring-green-700";
  card.style.backgroundImage = `url("${imageUrl}")`;

  // add a small invisible text for accessibility (screen readers)
  const sr = document.createElement("span");
  sr.className = "sr-only";
  sr.textContent = `${name || "Venue"} – ${altText}`;
  card.appendChild(sr);

  return card;
}
