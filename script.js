// Toggles dark mode by adding/removing the 'dark-mode' class to the body
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Opens the resume PDF in a new browser tab
function openResume() {
  window.open("https://pdfobject.com/pdf/sample.pdf", "_blank");
}

// Array containing badge data with icon names and labels
// Icons can be referenced from https://icon-sets.iconify.design/
const badgesData = [
  { icon: "devicon:html5", label: "HTML" },
  { icon: "devicon:css3", label: "CSS" },
  { icon: "devicon:javascript", label: "JavaScript" },
  { icon: "devicon:figma", label: "Figma" },
  { icon: "devicon:json", label: "JSON" },
  { icon: "devicon:github", label: "GitHub" },
  { icon: "devicon:netlify", label: "Netlify" },
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
