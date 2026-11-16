const modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const visitorForm = document.getElementById("visitor-form");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("email");
const welcomeText = document.getElementById("welcome-text");

visitorForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (userEmail.value.trim() === "") {
        alert("Email is required!");
        return;
    }

    welcomeText.textContent = `Welcome ${userName.value.trim()}! Your info has been saved.`;
    visitorForm.reset();
});