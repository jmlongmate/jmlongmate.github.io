const projectGridTiles = document.querySelectorAll("button[data-grid-title]");
const gridPreviewCode = document.querySelector("[data-grid-preview-code]");
const gridPreviewTitle = document.querySelector("[data-grid-preview-title]");
const gridPreviewDescription = document.querySelector("[data-grid-preview-description]");
const gridPreviewImage = document.querySelector("[data-grid-preview-image]");
const gridPreviewCredit = document.querySelector("[data-grid-preview-credit]");

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
    gridPreviewImage.style.setProperty("--project-image", `url("${tile.dataset.gridImage || ""}")`);
    gridPreviewImage.dataset.imageFit = tile.dataset.gridImageFit || "cover";
  }
  if (gridPreviewCredit) {
    gridPreviewCredit.textContent = tile.dataset.gridCredit || "";
  }
}

projectGridTiles.forEach((tile) => {
  tile.addEventListener("mouseenter", () => selectGridProject(tile));
  tile.addEventListener("focus", () => selectGridProject(tile));
  tile.addEventListener("click", () => selectGridProject(tile));
});
