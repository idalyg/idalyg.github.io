const projects = [
    {
    title: "Coral Reef Data Analysis",
    description:
        "Analyzed coral reef data using Python to explore patterns and relationships between environmental factors and reef conditions. Performed data cleaning, exploratory data analysis, and statistical analysis to identify trends and visualize findings using graphs and charts.",
    technologies:
        "Python, Pandas, Scikit-Learn, NumPy, Matplotlib, Jupyter Notebook",
    link:
        "assets/coral-reef-analysis.pdf",
        "assets/coral-reef-analysis.html"
    }
    {
        title: "MSAi Manager",
        description:
            "Collaborated in a 5-person team to develop an AI-powered web application for tracking Mandatory Service Announcements. Built a Python data pipeline that processed Cloud Storage asset reports into structured JSON and loaded customer service data into BigQuery. Also implemented JavaScript functionality for organizing MSA notices as New, In Progress, or Dismissed.",
        technologies:
            "Python, SQL, JavaScript, Google Cloud Storage, BigQuery, JSON",
        link:
            "https://github.com/Alexz3221/MSAi-Manager#readme"
    },
    
    {
        title: "GymBros - Fitness Tracker Web Application",
        description:
            "Collaborated in a 5-person agile team to develop a full-stack fitness tracking web app with user profiles, workout logging, and competitive leaderboards. Designed the relational SQL database schema and implemented Node.js backend integration to connect the frontend with user, workout, and leaderboard data.",
        technologies:
            "Node.js, JavaScript, SQL, HTML, CSS",
        link:
            "https://github.com/BreHarris0917/gym_Bros#readme"
    }
];

const projectList = document.getElementById("project-list");

function displayProjects() {

    projectList.innerHTML = "";

    projects.forEach((project) => {
        const projectCard = document.createElement("article");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="project-tech">
                ${project.technologies}
            </p>
            <a
                href="${project.link}"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
            >
                View Project →
            </a>
        `;
        projectList.appendChild(projectCard);
    });
}

displayProjects();


const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document.getElementById("current-year").textContent = new Date().getFullYear();

const emailLink = document.getElementById("email-link");
const copyNote = document.getElementById("copy-note");

emailLink.addEventListener("click", (e) => {
    const email = emailLink.dataset.email;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).catch(() => {});
    }
    copyNote.classList.add("visible");
    setTimeout(() => {
        copyNote.classList.remove("visible");
    }, 1500);
});
