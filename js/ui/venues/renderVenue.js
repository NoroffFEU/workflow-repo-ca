export function renderVenue(container, venue) {
  container.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Venue details";
  heading.className = "text-2xl font-bold mb-4";
  container.append(heading);

  const img = document.createElement("img");
  const imageUrl =
    Array.isArray(venue.media) && venue.media[0] ? venue.media[0] : "https://placehold.co/600x400";
  img.src = imageUrl;
  img.alt = venue.name || "Venue image";
  img.className = "w-full rounded";
  container.append(img);

  if (venue.name) {
    const name = document.createElement("h2");
    name.textContent = venue.name;
    name.className = "text-xl font-semibold mt-4";
    container.append(name);
  }

  if (venue.description) {
    const desc = document.createElement("p");
    desc.textContent = venue.description;
    desc.className = "mt-2";
    container.append(desc);
  }
}
