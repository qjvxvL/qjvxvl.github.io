// Memilih elemen dengan class "tab-titles"
const tabTitles = document.querySelector(".tab-titles");

// Memilih semua elemen dengan class "tab-contents"
const tabContents = document.querySelectorAll(".tab-contents");

// Menambahkan event listener ke elemen dengan class "tab-titles"
tabTitles.addEventListener("click", function (event) {
  // Memeriksa apakah elemen yang diklik memiliki class "tab-links"
  if (event.target.classList.contains("tab-links")) {
    // Menghapus class "active-links" dari semua elemen dengan class "tab-links"
    const allLinks = tabTitles.querySelectorAll(".tab-links");
    allLinks.forEach((link) => {
      link.classList.remove("active-links");
    });

    // Menambahkan class "active-links" ke elemen yang diklik
    event.target.classList.add("active-links");

    // Menentukan indeks tab yang diklik
    const clickedIndex = Array.from(allLinks).indexOf(event.target);

    // Menampilkan konten yang sesuai dengan elemen yang diklik
    tabContents.forEach((content) => {
      content.classList.remove("active-tab");
    });
    tabContents[clickedIndex].classList.add("active-tab");
  }
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (
//     nameInput.value.trim() === "" ||
//     emailInput.value.trim() === "" ||
//     messageInput.value.trim() === ""
//   ) {
//     alert("Please fill in all fields");
//   } else {
//     alert("Message sent successfully");
//     form.reset();
//   }
// });

// ----------SideMenu----------

var sideMenu = document.getElementById("sideMenu");
function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

var exit = document.querySelector(".exit");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbz6LUgSIFzNy7U8sJZkgnw2A3UGx94yrdk1vSLT_euOpOeieYTtwWiQRBrKssU-NDxQHA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 3000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
