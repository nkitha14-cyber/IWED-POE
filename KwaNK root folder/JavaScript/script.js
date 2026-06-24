let specials = [
    "Braai Platter - R220",
    "Kwa NK Burger Special - R145",
    "Cheesecake Slice - R65"
];

let specialList = document.getElementById("specials");

for (let i = 0; i < specials.length; i++) {
    let item = document.createElement("p");
    item.textContent = specials[i];
    specialList.appendChild(item);
}

document.getElementById("welcome-message").textContent =
    "Explore our braai favourites, global dishes and desserts.";


(function() {
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
})();
