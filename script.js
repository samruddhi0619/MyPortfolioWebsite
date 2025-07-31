document.getElementById("recommendation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("rec-name").value.trim();
  const message = document.getElementById("rec-message").value.trim();

  if (message === "") return;

  const recommendationList = document.getElementById("recommendation-list");

  // Create a new recommendation element
  const newRec = document.createElement("div");
  newRec.classList.add("recommendation-card");
  newRec.innerHTML = `
    <p>"${message}"</p>
    <small>– ${name || "Anonymous"}</small>
  `;

  recommendationList.appendChild(newRec);

  // Show thank you message
  const thankYou = document.getElementById("thank-you");
  thankYou.style.display = "block";

  // Reset form
  document.getElementById("recommendation-form").reset();

  // Hide thank you after 3 seconds
  setTimeout(() => {
    thankYou.style.display = "none";
  }, 3000);
});
