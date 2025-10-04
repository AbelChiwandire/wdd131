document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
    let reviewCountDisplay = document.getElementById("reviewCountDisplay")

    if (localStorage.getItem("submitted") === "true") {
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);

        localStorage.removeItem("submitted");
    }

    reviewCountDisplay.textContent = `You have submitted ${reviewCount} review${reviewCount === 1 ? "": "s"}.💥`;

});