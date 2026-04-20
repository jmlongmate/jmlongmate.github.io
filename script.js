const projectTiles = document.querySelectorAll(".project-tile");
const previewArt = document.querySelector("[data-preview-art]");
const previewCode = document.querySelector("[data-preview-code]");
const previewLabel = document.querySelector("[data-preview-label]");
const previewTitle = document.querySelector("[data-preview-title]");
const previewDescription = document.querySelector("[data-preview-description]");
const projectGridTiles = document.querySelectorAll("button[data-grid-title]");
const gridPreviewCode = document.querySelector("[data-grid-preview-code]");
const gridPreviewTitle = document.querySelector("[data-grid-preview-title]");
const gridPreviewDescription = document.querySelector("[data-grid-preview-description]");

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

function selectGridProject(tile) {
  if (!tile || !gridPreviewCode || !gridPreviewTitle || !gridPreviewDescription) {
    return;
  }

  projectGridTiles.forEach((item) => item.classList.remove("is-active"));
  tile.classList.add("is-active");

  gridPreviewCode.textContent = tile.dataset.gridCode || "";
  gridPreviewTitle.textContent = tile.dataset.gridTitle || "";
  gridPreviewDescription.textContent = tile.dataset.gridDescription || "";
}

projectGridTiles.forEach((tile) => {
  tile.addEventListener("mouseenter", () => selectGridProject(tile));
  tile.addEventListener("focus", () => selectGridProject(tile));
  tile.addEventListener("click", () => selectGridProject(tile));
});
