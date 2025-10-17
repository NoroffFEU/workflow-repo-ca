import { renderVenue } from "../ui/venues/renderVenue.js";

async function loadVenuePage() {
  const container = document.getElementById("venue-details");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) {
    container.innerHTML = "<p>No venue ID found in the URL.</p>";
    return;
  }

  try {
    const res = await fetch(`https://api.noroff.dev/api/v1/holidaze/venues/${id}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const venue = await res.json();

    renderVenue(container, venue);
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p class='text-red-600'>Failed to load venue.</p>";
  }
}

loadVenuePage();
