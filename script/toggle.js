
const yesElement = document.getElementById('yesElement');
const noElement = document.getElementById('noElement');

const yesBtn = document.getElementById("btnYes");
yesBtn.addEventListener("click", () => {
  yesElement.classList.toggle('hiddenYes');
});

const noBtn = document.getElementById("btnNo");
noBtn.addEventListener("click", () => {
  noElement.classList.toggle('hiddenNo');
});