const year = document.querySelector("#current-year");
const lastMod = document.querySelector("#lastModified");
const today = new Date();

year.innerHTML = today.getFullYear()
lastMod.innerHTML = `Last Modification: ${document.lastModified}`; 