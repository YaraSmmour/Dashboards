const signInBtn = document.getElementById("signIn");
const aboutBtn = document.getElementById("about");
const firstForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const trying = document.getElementById("try");
signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

aboutBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

firstForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());
trying.addEventListener("submit", (e) => e.preventDefault());

document.getElementById("try").addEventListener('click', function() {
  window.location.href = 'secpage.html'; 
} );
