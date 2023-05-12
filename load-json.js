let section = document.querySelector('.hero-section')
let body = document.querySelector('.overflow-hidden');

const selectElement = document.querySelector(".load-json");

selectElement.addEventListener("change", (event) => {
    body.classList.remove('overflow-hidden');
});
