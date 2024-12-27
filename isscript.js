const openPageButton = document.getElementById("openPageButton");
const closePageButton = document.getElementById("closePageButton");
const hiddenPage = document.getElementById("hiddenPage");

openPageButton.addEventListener("click", function() {
    hiddenPage.style.display = "block";
    closePageButton.style.display = "inline-block";
    window.scrollTo({ top: document.getElementById("hiddenPage").offsetTop, behavior: 'smooth' });
});

closePageButton.addEventListener("click", function() {
    hiddenPage.style.display = "none";
    closePageButton.style.display = "none";
});
