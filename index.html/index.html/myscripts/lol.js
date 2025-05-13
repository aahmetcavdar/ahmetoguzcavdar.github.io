const champions = document.querySelectorAll(".champion");
const infoBox = document.getElementById("champion-info");

champions.forEach(champ => {
    champ.addEventListener("mouseenter", () => {
        infoBox.innerHTML = champ.getAttribute("data-info");
        infoBox.style.display = "block";
    });

    champ.addEventListener("mouseleave", () => {
        infoBox.style.display = "none";
    });
});
const markers = document.querySelectorAll(".map-marker");

markers.forEach(marker => {
    marker.addEventListener("mouseenter", () => {
        infoBox.innerHTML = marker.getAttribute("data-info");
        infoBox.style.display = "block";
    });

    marker.addEventListener("mouseleave", () => {
        infoBox.style.display = "none";
    });
});
