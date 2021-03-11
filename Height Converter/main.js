const meterbtn = document.querySelector("#meter");
const feetbtn = document.querySelector("#feet");

meterbtn.addEventListener("click", function () {
  let input = document.querySelector("#input").value;
  document.querySelector("#output").value = input / 3.281 + " Meter";
});

feetbtn.addEventListener("click", function () {
  let input = document.querySelector("#input").value;
  document.querySelector("#output").value = input * 3.281 + " Feet";
});
