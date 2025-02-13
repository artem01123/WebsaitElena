let isActive = false;

function toggleMenu() {
    let image = document.getElementById("mainImage");
    let buttonBox = document.getElementById("buttonBox");

    if (!isActive) {
        image.src = "Union.png"; // Меняем картинку
    } else {
        image.src = "mobile_menu.png"; // Возвращаем старую картинку
    }

    document.querySelector(".container").classList.toggle("active");
    isActive = !isActive;
}

