//slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

let currentPoiIndex = 1;
const pois = document.querySelectorAll(".poi");

function updatePoiColors() {
  pois.forEach((poi) => {
    poi.classList.remove("active");
  });
  pois[currentPoiIndex].classList.add("active");
  currentPoiIndex = (currentPoiIndex + 1) % pois.length;
}
setInterval(updatePoiColors, 2000);

// list
document.querySelector(".menu").addEventListener("click", function () {
  var list = document.getElementById("list");
  list.classList.toggle("show");
  list.classList.remove("hidden");
});

document.querySelector(".close").addEventListener("click", function () {
  var list = document.getElementById("list");
  list.classList.toggle("hidden");
  list.classList.remove("show");
});

//comment
var icon = document.querySelector(".comment-icon");

setInterval(function () {
  icon.classList.toggle("glow");
}, 1000);

//chat
var icon = document.querySelector(".comment-icon");
var popup = document.getElementById("commentPopup");
var closeBtn = document.querySelector(".close-btn");

icon.addEventListener("click", function () {
  popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  popup.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});

function openLoginPopup() {
  document.getElementById("loginPopup").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
function closeLoginPopup() {
  document.getElementById("loginPopup").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}
document.getElementById("login").onclick = openLoginPopup;


// datve
function showBookingForm() {
  document.getElementById("bookingForm").style.display = "block";
}
function hiddenBookingForm() {
  document.getElementById("bookingForm").style.display = "none";
}

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function calculateTicketPrice() {
  var adultQuantity = parseInt(document.getElementById("adultQuantity").value);
  var childQuantity = parseInt(document.getElementById("childQuantity").value);
  var totalPrice = formatNumberWithCommas(adultQuantity * 120000 + childQuantity * 50000);
  document.getElementById("ticketPrice").textContent = totalPrice + " VNĐ";
}