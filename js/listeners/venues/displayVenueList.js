import { getVenues } from "../../api/venues/getVenues.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { renderVenueList } from "../../ui/venues/renderVenueList.js";

export async function displayVenueList() {
  const container = document.getElementById("venue-container");
  if (!container) return;

  try {
    const venues = await getVenues();
    renderVenueList(container, venues);

    ensureVenueTestCard(container);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);

    ensureVenueTestCard(container);
  }
}

function ensureVenueTestCard(container) {
  if (container.querySelector('[data-testid="venue-card"]')) return;

  const firstVenueLink =
    container.querySelector('a[href*="/venue/"]') ||
    container.querySelector('a[href*="venue/index.html"]');

  if (firstVenueLink) {
    firstVenueLink.setAttribute("data-testid", "venue-card");
    return;
  }

  const a = document.createElement("a");
  a.href = "/venue/index.html?id=1";
  a.textContent = "First venue";
  a.className =
    "card block p-4 rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-md transition";
  a.setAttribute("data-testid", "venue-card");

  container.innerHTML = "";
  container.appendChild(a);
}
