window.matchMedia("(prefers-color-scheme: dark)").matches &&
  document.body.classList.add("dark");

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

if (isMobile) {
  document.getElementById("big-screen").style.display = "none";
}
const toggleBtn = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
const dropdownToggle = document.getElementById("dropdownToggle");
const dropdown = document.getElementById("filterDropdown");
const dropdownMenu = document.getElementById("dropdownMenu");
const topicCheckboxes = document.querySelectorAll(
  '#topicCheckboxes input[type="checkbox"]'
);
const selectAllBtn = document.getElementById("selectAllBtn");
const clearAllBtn = document.getElementById("clearAllBtn");

function updateTopicVisibility() {
  const selectedTopics = Array.from(topicCheckboxes)
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  document.querySelectorAll(".lesson-section").forEach((section) => {
    const topic = section.dataset.topic;
    section.style.display = selectedTopics.includes(topic) ? "block" : "none";
  });

  updateDropdownLabel();
}

// Toggle dropdown
dropdownToggle.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});

// Outside click to close dropdown
document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("open");
  }
  if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.add("hidden");
  }
});

topicCheckboxes.forEach((cb) => {
  cb.addEventListener("change", updateTopicVisibility);
});

selectAllBtn.addEventListener("click", () => {
  topicCheckboxes.forEach((cb) => (cb.checked = true));
  updateTopicVisibility(); // this now also updates label
});

clearAllBtn.addEventListener("click", () => {
  topicCheckboxes.forEach((cb) => (cb.checked = false));
  updateTopicVisibility();
});

// Initial setup
updateTopicVisibility();

function updateDropdownLabel() {
  const checkedCount = Array.from(topicCheckboxes).filter(
    (cb) => cb.checked
  ).length;
  const totalCount = topicCheckboxes.length;

  if (checkedCount === totalCount) {
    dropdownToggle.textContent = "Filter Topics (All selected)";
  } else {
    dropdownToggle.textContent = `Filter Topics (${checkedCount} selected)`;
  }
}
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.querySelectorAll(".copy-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const code = button.parentElement.querySelector("code").innerText;
    navigator.clipboard.writeText(code);
    button.innerText = "Copied!";
    setTimeout(() => (button.innerText = "Copy"), 2000);
  });
});

// Drawer toggle
const drawer = document.getElementById("drawer");
const hamburgerBtn = document.getElementById("hamburgerBtn");

hamburgerBtn.addEventListener("click", () => {
  drawer.classList.toggle("open");
  document.body.style.overflow = drawer.classList.contains("open")
    ? "hidden"
    : "auto";
  hamburgerBtn.innerHTML = drawer.classList.contains("open")
    ? "&times;"
    : "&#9776;";
});
