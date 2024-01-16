let descriptionContent = document.getElementById("main-description__content");
let showMoreTag = document.getElementById("show-more");
showMoreTag.onclick = function () {
  if (descriptionContent.className === "open") {
    // shrink the box
    descriptionContent.className = "";
    showMoreTag.innerHTML = "Show More \u2193";
  } else {
    // expand the box
    descriptionContent.className = "open";
    showMoreTag.innerHTML = "Show Less \u2191";
  }
};
