const menuBtn = document.getElementById("menu-btn");
const sidebar = document.querySelector(".sidebar");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
const p = document.querySelector(".dev-game-p");
let isDeveloper = true;
setInterval(() => {
    setTimeout(() => {
        if (isDeveloper) {
            p.textContent = "A Gamer Who Loves Developing.";
        } else {
            p.textContent = "A Developer Who Loves Gaming.";
        }
        isDeveloper = !isDeveloper;
    }, 400);
}, 2000);
// Music Bar
const playBtn = document.querySelector(".play-btn");
const spotifyCard = document.querySelector(".spotify-card");

playBtn.addEventListener("click", () => {

    spotifyCard.classList.toggle("playing");

    if (spotifyCard.classList.contains("playing")) {
        playBtn.classList.remove("fa-circle-play");
        playBtn.classList.add("fa-circle-pause");
    } else {
        playBtn.classList.remove("fa-circle-pause");
        playBtn.classList.add("fa-circle-play");
    }

});

// View my work button
const workBtn = document.querySelector(".work-btn");

workBtn.addEventListener("click", () => {
    window.location.href = "projects.html";
});

// Get in touch button
const contactBtn = document.querySelector(".contact-btn");

contactBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
});

// Tech Stack button
const techBtn = document.querySelector(".btn-tech");

techBtn.addEventListener("click", () => {
    window.location.href = "stack.html";
});

// Player card button
const playerCard = document.querySelector(".player-card");

playerCard.addEventListener("click", () => {
    window.location.href = "respawn.html";
});

// Opportunity Button
const opportunityBtn = document.querySelector(".arrow-btn-opn");

opportunityBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
});

// Project Button
const projectsBtn = document.querySelector(".arrow-btn");

projectsBtn.addEventListener("click", () => {
    window.location.href = "projects.html";
});

// Contact Button
const emailBtn = document.querySelector(".email-btn");

emailBtn.addEventListener("click", () => {
    window.location.href = "contact.html";
});

// About button
const aboutBtn = document.querySelector(".name-heading");

aboutBtn.addEventListener("click", () => {
    window.location.href = "about.html";
});

//Github card 
const githubProjectCard = document.querySelector(".github-card");

if (githubProjectCard) {
    githubProjectCard.addEventListener("click", () => {
        window.open(
            "https://github.com/Sanju13142002",
            "_blank"
        );
    });
}
name-heading
// Location Card
const locationDiv = document.querySelector(".location-card");

locationDiv.addEventListener("click", () => {
    window.open(
        "https://www.google.com/maps/search/?api=1&query=Bhopal,India",
        "_blank"
    );
});

// Github card
const githubCard = document.querySelector(".github-card1");

githubCard.addEventListener("click", () => {
    window.open(
        "https://github.com/Sanju13142002",
        "_blank"
    );
});

