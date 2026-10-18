export function displayMessage(container, messageType, message) {
  let parent;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  } else {
    parent = container;
  }

  const baseClasses = "p-4 mb-4 rounded-lg border";

  const typeClasses =
    {
      error: "bg-red-100 border-red-400 text-red-700",
      success: "bg-green-100 border-green-400 text-green-700",
      warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
    }[messageType] || "bg-gray-100 border-gray-400 text-gray-700";

  parent.innerHTML = `<div class="${baseClasses} ${typeClasses}" role="alert">${message}</div>`;
}
