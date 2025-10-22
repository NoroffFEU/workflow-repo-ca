import { getVenue } from "../../api/venues/getVenue.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { updateMainHeading } from "../../ui/common/updateMainHeading.js";
import { updateTitle } from "../../ui/common/updateTitle.js";
import { renderVenue } from "../../ui/venues/renderVenue.js";
import { getQueryParam } from "../../utils/getQueryParam.js";

export async function displayVenue() {
  const id = getQueryParam("id");

  if (!id) {
    window.location.href = "/";
    return;
  }

  const container = document.querySelector("#venue-container");

  try {
    const venue = await getVenue(id);

    // ✅ Make the heading match the e2e test requirement
    updateMainHeading("Venue details");

    // (Optional) Keep the document title as the actual venue name
    updateTitle(venue?.name ?? "Venue");

    renderVenue(container, venue);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }
}
