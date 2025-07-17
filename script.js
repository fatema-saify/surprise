function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.innerText = '🌸';

  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = 5 + Math.random() * 5 + 's';

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 5000);
}

setInterval(createPetal, 300);
// Modal Surprise
document.getElementById("surpriseBtn").addEventListener("click", function() {
  document.getElementById("surpriseModal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("surpriseModal").style.display = "none";
});

window.addEventListener("click", function(e) {
  if (e.target == document.getElementById("surpriseModal")) {
    document.getElementById("surpriseModal").style.display = "none";
  }
});
