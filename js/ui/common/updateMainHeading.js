export function updateMainHeading(newHeading = "Missing title") {
  const heading = document.querySelector("h1");
  if (heading) {
    heading.textContent = `Venue details: ${newHeading}`;
  }
}
