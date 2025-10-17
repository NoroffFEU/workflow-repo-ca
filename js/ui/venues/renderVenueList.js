export function renderVenueList(container, venues = []) {
  container.setAttribute("data-testid", "venue-list");

  container.innerHTML = "";

  if (!Array.isArray(venues) || venues.length === 0) {
    container.innerHTML = "<div class='text-center'>No venues found</div>";
    return;
  }

  const venueElements = venues.map((venue) => createVenueCard(venue));
  container.append(...venueElements);
}

function createVenueCard(venue) {
  const { media, id, name } = venue;

  const card = document.createElement("a");
  card.className = "bg-cover bg-center h-64 rounded-lg shadow-md block";
  card.href = `/venue/?id=${id}`;

  card.setAttribute("data-testid", "venue-item");

  if (name) card.setAttribute("aria-label", `Open ${name}`);

  const imageUrl = Array.isArray(media) && media[0] ? media[0] : "https://placehold.co/400x400";
  card.style.backgroundImage = `url(${imageUrl})`;

  return card;
}
