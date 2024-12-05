var encEmail = "c2t5bGFyLmwubXVzaWNAZ21haWwuY29t";
const form = document.getElementById("email");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));
form.innerHTML = atob(encEmail);
