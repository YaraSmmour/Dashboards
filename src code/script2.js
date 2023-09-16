const cloz= document.getElementById("close");
const std= document.getElementById("student");
const emp= document.getElementById("employee");

cloz.addEventListener("submit", (e) => e.preventDefault());
std.addEventListener("submit", (e) => e.preventDefault());
emp.addEventListener("submit", (e) => e.preventDefault());
document.getElementById("close").addEventListener('click', function() {
  window.location.href = 'page.html'; 
} );
document.getElementById("student").addEventListener('click', function() {
  window.location.href = 'thirdpage.html'; 
} );
document.getElementById("employee").addEventListener('click', function() {
  window.location.href = 'fourthpage.html'; 
} );