export function openModal(event) {
    event.target.nextElementSibling.style.display = "block";
}

export function closeModal(event) {
    event.target.parentElement.parentElement.style.display = "none"
}

export function dropDown(event) {
    event.target.nextElementSibling.classList.toggle("show")
}


window.onclick = function (event) {
    if (!event.target.matches('.drop-button')) {
        const dropdowns = document.getElementsByClassName("drop-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}