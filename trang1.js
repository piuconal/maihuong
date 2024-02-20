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

document.getElementById("logo").addEventListener("click", function () {
  window.location.href = "index.html";
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
