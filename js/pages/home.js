import { renderVenueList } from "../ui/venues/renderVenuesList.js";

async function loadHomePage() {
  const container = document.getElementById("venue-container");

  container.setAttribute("data-testid", "venue-list");

  try {
    const res = await fetch("https://api.noroff.dev/api/v1/holidaze/venues");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const venues = await res.json();
    renderVenueList(container, venues);
  } catch (err) {
    console.error(err);
    container.innerHTML = "<p class='text-red-600'>Failed to load venues</p>";
  }
}

loadHomePage();
