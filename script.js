const projectGridTiles = document.querySelectorAll("button[data-grid-title]");
const gridPreviewCode = document.querySelector("[data-grid-preview-code]");
const gridPreviewTitle = document.querySelector("[data-grid-preview-title]");
const gridPreviewDescription = document.querySelector("[data-grid-preview-description]");
const gridPreviewImage = document.querySelector("[data-grid-preview-image]");

function selectGridProject(tile) {
  if (!tile || !gridPreviewCode || !gridPreviewTitle || !gridPreviewDescription) {
    return;
  }

  projectGridTiles.forEach((item) => item.classList.remove("is-active"));
  tile.classList.add("is-active");

  gridPreviewCode.textContent = tile.dataset.gridCode || "";
  gridPreviewTitle.textContent = tile.dataset.gridTitle || "";
  gridPreviewDescription.textContent = tile.dataset.gridDescription || "";
  if (gridPreviewImage) {
    gridPreviewImage.dataset.tone = tile.dataset.gridTone || "terrain";
  }
}

projectGridTiles.forEach((tile) => {
  tile.addEventListener("mouseenter", () => selectGridProject(tile));
  tile.addEventListener("focus", () => selectGridProject(tile));
  tile.addEventListener("click", () => selectGridProject(tile));
});
