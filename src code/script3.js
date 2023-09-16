const cloz= document.getElementById("close");
const pre= document.getElementById("prev");
const pr= document.getElementById("print");

cloz.addEventListener("submit", (e) => e.preventDefault());
pre.addEventListener("submit", (e) => e.preventDefault());
document.getElementById("close").addEventListener('click', function() {
  window.location.href = 'page.html'; 
} );
document.getElementById("prev").addEventListener('click', function() {
  window.location.href = 'secpage.html'; 
} );
