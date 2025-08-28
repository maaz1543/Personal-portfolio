// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior:'smooth'
    });
  });
});

// Typing effect
const roles = ["web developer", "Designer", "Programmer"];
let i = 0, j = 0, current = "", isDeleting = false;
function type(){
  current = roles[i];
  let display = current.substring(0, j);
  document.getElementById("typing").textContent = display;
  if(!isDeleting && j < current.length){ j++; }
  else if(isDeleting && j > 0){ j--; }
  else if(!isDeleting && j === current.length){ isDeleting = true; setTimeout(type, 1000); return; }
  else { isDeleting = false; i = (i+1)%roles.length; }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Dark/Light Mode
const toggle = document.querySelector(".toggle-theme");
toggle.addEventListener("click", ()=>{
  document.body.dataset.theme = document.body.dataset.theme === "dark" ? "light" : "dark";
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name==="" || email==="" || message===""){
    alert("Please fill in all fields.");
    return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    alert("Please enter a valid email.");
    return;
  }
  alert("Message sent successfully!");
  this.reset();
});