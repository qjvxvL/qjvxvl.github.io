// Navbar Toggle
const sideMenu = document.getElementById("sideMenu");
const openMenu = () => sideMenu.classList.add("active");
const closeMenu = () => sideMenu.classList.remove("active");

// Tabs
const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".tab-content");

tabLinks.forEach((link) => {
  link.addEventListener("click", () => {
    tabLinks.forEach((l) => l.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));

    link.classList.add("active");
    document.getElementById(link.dataset.tab).classList.add("active");
  });
});

// Form Submission
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz6LUgSIFzNy7U8sJZkgnw2A3UGx94yrdk1vSLT_euOpOeieYTtwWiQRBrKssU-NDxQHA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => {
      msg.textContent = "Message Sent Successfully!";
      form.reset();
      setTimeout(() => (msg.textContent = ""), 3000);
    })
    .catch((error) => {
      msg.textContent = "Error sending message!";
      console.error("Error:", error);
    });
});
