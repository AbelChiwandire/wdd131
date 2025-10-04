document.addEventListener("DOMContentLoaded", () => {
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

    if (localStorage.getItem("submitted") === "true") {
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);

        localStorage.removeItem("submitted");
    }

    document.getElementById("reviewCountDisplay").textContent = reviewCount;

});