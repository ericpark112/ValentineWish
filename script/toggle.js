
const elementToToggle = document.getElementById('elementToToggle');
const noElement = document.getElementById('noElement');

const yesBtn = document.getElementById("btnYes");
yesBtn.addEventListener("click", () => {
  elementToToggle.classList.toggle('hidden');
})

const noBtn = document.getElementById("btnYes");
noBtn.addEventListener("click", () => {
  noElement.classList.toggle('hidden');
})