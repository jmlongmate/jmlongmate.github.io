const projectTiles = document.querySelectorAll(".project-tile");
const previewArt = document.querySelector("[data-preview-art]");
const previewCode = document.querySelector("[data-preview-code]");
const previewLabel = document.querySelector("[data-preview-label]");
const previewTitle = document.querySelector("[data-preview-title]");
const previewDescription = document.querySelector("[data-preview-description]");

function selectProject(tile) {
  if (!tile || !previewArt || !previewCode || !previewLabel || !previewTitle || !previewDescription) {
    return;
  }

  projectTiles.forEach((item) => item.classList.remove("is-active"));
  tile.classList.add("is-active");

  previewArt.dataset.tone = tile.dataset.tone || "terrain";
  previewCode.textContent = tile.dataset.code || "";
  previewLabel.textContent = tile.dataset.label || "Project";
  previewTitle.textContent = tile.dataset.title || "";
  previewDescription.textContent = tile.dataset.description || "";
}

projectTiles.forEach((tile) => {
  tile.addEventListener("mouseenter", () => selectProject(tile));
  tile.addEventListener("focus", () => selectProject(tile));
  tile.addEventListener("click", () => selectProject(tile));
});
