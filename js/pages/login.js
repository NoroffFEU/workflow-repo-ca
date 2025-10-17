const form = document.getElementById("loginForm");
const welcome = document.querySelector("[data-testid='welcome']");
const error = document.querySelector("[data-testid='login-error']");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (welcome) {
    welcome.classList.add("hidden");
    welcome.textContent = "";
  }
  if (error) {
    error.classList.add("hidden");
    error.textContent = "";
  }

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch("https://api.noroff.dev/api/v1/holidaze/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Invalid credentials");

    if (welcome) {
      welcome.textContent = `Welcome, ${data.name || email}!`;
      welcome.classList.remove("hidden");
      welcome.removeAttribute("hidden");
    }
  } catch (err) {
    console.error(err);
    if (error) {
      error.textContent = err.message || "Invalid email or password.";
      error.classList.remove("hidden");
      error.removeAttribute("hidden");
    }
  }
});
