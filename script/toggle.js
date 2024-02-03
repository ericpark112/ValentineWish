
const yesElement = document.getElementById('yesElement');
const noElement = document.getElementById('noElement');
const yesBtn = document.getElementById("btnYes");
const noBtn = document.getElementById("btnNo");
const changeBtn = document.getElementById("btnChangeAnswer");

yesBtn.addEventListener("click", () => {
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  changeBtn.style.display = "block";
  yesElement.style.display = "block";
});

noBtn.addEventListener("click", () => {
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  changeBtn.style.display = "block";
  noElement.style.display = "block";
});

changeBtn.addEventListener("click", () => {
  noBtn.style.display = "inline-block";
  yesElement.style.display = "none";
  yesBtn.style.display = "inline-block"
  noElement.style.display = "none";
  changeBtn.style.display = "none";
});