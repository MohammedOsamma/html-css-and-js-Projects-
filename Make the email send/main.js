const scriptURL =
  "https://script.google.com/macros/s/AKfycbyzFzgotRZjaE9qoTgbzEgL8KugSLiOfIetD8CPpcNALsVR6badVIpgvvl5re12v4KY/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank you For Subscribing";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
