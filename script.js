const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})



const heartIcons = document.querySelectorAll(".heart-icon i");
heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("fa-regular");
    icon.classList.toggle("fa-solid");
  });
});

let menu = document.querySelector("#menu-icon")
let navmenu = document.querySelector(".navmenu")

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navmenu.classList.toggle("open")
}


// const availability = document.getElementById("sale");
// const saleElement = document.querySelector(".product-text");

// function available() {
//   if (availability.textContent === "Available") {
//     saleElement.style.backgroundColor = "red";
//   }
// }

// available();

