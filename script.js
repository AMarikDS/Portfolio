// Toggles dark mode by adding/removing the 'dark-mode' class to the body
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Opens the resume PDF in a new browser tab
function openResume() {
  window.open("assets/AMarikDS-CV.pdf", "_blank");
}

// Array containing badge data with icon names and labels
// Icons can be referenced from https://icon-sets.iconify.design/
const badgesData = [
  { icon: "devicon:python", label: "Python" },
  { icon: "devicon:pandas", label: "Pandas" },
  { icon: "devicon:numpy", label: "NumPy" },
  { icon: "logos:seaborn-icon", label: "Seaborn" },
  { icon: "devicon:opencv", label: "OpenCV" },
  { icon: "devicon:scikitlearn", label: "Scikit-learn" },
  { icon: "devicon:jupyter", label: "Jupyter" },
  { icon: "devicon:tensorflow", label: "TensorFlow" },
  { icon: "devicon:keras", label: "Keras" },
  { icon: "devicon:googlecolab", label: "Google Colab" },
  { icon: "logos:hugging-face-icon", label: "Hugging Face" },
  { icon: "devicon:pytorch", label: "PyTorch" },
  { icon: "devicon:fastapi", label: "FastAPI" },
  { icon: "devicon:openapi", label: "OpenAPI" },
  { icon: "devicon:git", label: "Git" },
  { icon: "devicon:github", label: "GitHub" },
  { icon: "devicon:gitlab", label: "GitLab" },
  { icon: "devicon:chartjs", label: "ChartJS" },
  { icon: "devicon:reflex", label: "Reflex" },
  { icon: "devicon:sqlite", label: "SQLite" },
  { icon: "devicon:postgresql", label: "PostgreSQL" },
  { icon: "logos:chroma", label: "ChromaDB" },
  { icon: "devicon:vscode", label: "VSCode" },
  { icon: "logos:microsoft-power-bi", label: "Power BI" },
  { icon: "logos:tableau-icon", label: "Tableau" },
  { icon: "devicon:notion", label: "Notion" },
  { icon: "devicon:markdown", label: "Markdown" },
  { icon: "devicon:yaml", label: "YAML" },
  { icon: "devicon:json", label: "JSON" }
];


// Selects the container element where badges will be displayed
const badgesContainer = document.getElementById("badges");

// Iterates through the badgesData array to create badge elements
badgesData.forEach((badge) => {
  const div = document.createElement("div"); // Creates a div for each badge
  div.className = "badge"; // Assigns the 'badge' class for styling

  const icon = document.createElement("span"); // Creates a span for the icon
  icon.className = "iconify"; // Uses Iconify library for icons
  icon.setAttribute("data-icon", badge.icon); // Sets the icon based on the data

  div.appendChild(icon); // Adds the icon to the badge div
  div.appendChild(document.createTextNode(badge.label)); // Adds the label text

  badgesContainer.appendChild(div); // Appends the badge div to the container
});
