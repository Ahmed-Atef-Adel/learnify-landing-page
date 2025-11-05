// Handle subscription form
document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();

    if (email) {
      alert("Thanks for subscribing!");
      document.getElementById("email").value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });
