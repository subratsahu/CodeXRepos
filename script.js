(function () {
  "use strict";

  const imageRoot = "images/";
  const grid = document.getElementById("gallery-grid");
  const filters = document.getElementById("gallery-filters");
  const status = document.getElementById("gallery-status");
  const dialog = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxCount = document.getElementById("lightbox-count");
  const closeButton = dialog.querySelector(".lightbox__close");
  const previousButton = dialog.querySelector(".lightbox__arrow--prev");
  const nextButton = dialog.querySelector(".lightbox__arrow--next");

  let currentFilter = "all";
  let visiblePhotos = photos.slice();
  let currentIndex = 0;
  let opener = null;
  let touchStartX = 0;

  function getGroupLabel(groupId) {
    const group = photoGroups.find(function (item) { return item.id === groupId; });
    return group ? group.label : "Artwork";
  }

  function renderFilters() {
    filters.innerHTML = "";
    photoGroups.forEach(function (group) {
      const count = group.id === "all" ? photos.length : photos.filter(function (photo) { return photo.group === group.id; }).length;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-button";
      button.dataset.filter = group.id;
      button.setAttribute("aria-pressed", String(group.id === currentFilter));
      button.textContent = group.label + " · " + count;
      button.addEventListener("click", function () {
        currentFilter = group.id;
        filters.querySelectorAll(".filter-button").forEach(function (filterButton) {
          filterButton.setAttribute("aria-pressed", String(filterButton === button));
        });
        renderGallery();
      });
      filters.appendChild(button);
    });
  }

  function renderGallery() {
    visiblePhotos = currentFilter === "all" ? photos.slice() : photos.filter(function (photo) { return photo.group === currentFilter; });
    grid.innerHTML = "";
    visiblePhotos.forEach(function (photo, index) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-card";
      button.setAttribute("aria-label", "View " + photo.title + " enlarged");
      button.dataset.index = String(index);

      const image = document.createElement("img");
      image.src = imageRoot + photo.thumbnail;
      image.alt = photo.alt;
      image.width = photo.width;
      image.height = photo.height;
      image.loading = "lazy";
      image.decoding = "async";

      const caption = document.createElement("span");
      caption.className = "gallery-card__caption";
      const title = document.createElement("span");
      title.className = "gallery-card__title";
      title.textContent = photo.title;
      const category = document.createElement("span");
      category.className = "gallery-card__category";
      category.textContent = getGroupLabel(photo.group);
      caption.append(title, category);
      button.append(image, caption);
      button.addEventListener("click", function () { openLightbox(index, button); });
      grid.appendChild(button);
    });
    status.textContent = "Showing " + visiblePhotos.length + " " + (visiblePhotos.length === 1 ? "piece" : "pieces") + (currentFilter === "all" ? "." : " in " + getGroupLabel(currentFilter) + ".");
  }

  function showCurrentPhoto() {
    const photo = visiblePhotos[currentIndex];
    if (!photo) return;
    lightboxImage.src = imageRoot + photo.filename;
    lightboxImage.alt = photo.alt;
    lightboxImage.width = photo.width;
    lightboxImage.height = photo.height;
    lightboxTitle.textContent = photo.title + " · " + getGroupLabel(photo.group);
    lightboxCount.textContent = (currentIndex + 1) + " / " + visiblePhotos.length;
    previousButton.disabled = visiblePhotos.length < 2;
    nextButton.disabled = visiblePhotos.length < 2;
  }

  function openLightbox(index, sourceButton) {
    currentIndex = index;
    opener = sourceButton;
    showCurrentPhoto();
    dialog.showModal();
    closeButton.focus();
  }

  function closeLightbox() {
    if (dialog.open) dialog.close();
  }

  function moveLightbox(direction) {
    if (visiblePhotos.length < 2) return;
    currentIndex = (currentIndex + direction + visiblePhotos.length) % visiblePhotos.length;
    showCurrentPhoto();
  }

  closeButton.addEventListener("click", closeLightbox);
  previousButton.addEventListener("click", function () { moveLightbox(-1); });
  nextButton.addEventListener("click", function () { moveLightbox(1); });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeLightbox();
  });
  dialog.addEventListener("close", function () {
    if (opener) opener.focus();
  });
  document.addEventListener("keydown", function (event) {
    if (!dialog.open) return;
    if (event.key === "ArrowRight") { event.preventDefault(); moveLightbox(1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); moveLightbox(-1); }
  });
  dialog.addEventListener("touchstart", function (event) {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  dialog.addEventListener("touchend", function (event) {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 48) moveLightbox(distance < 0 ? 1 : -1);
  }, { passive: true });

  document.getElementById("current-year").textContent = String(new Date().getFullYear());
  renderFilters();
  renderGallery();
}());

