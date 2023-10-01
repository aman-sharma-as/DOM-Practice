let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");


let openModal = () => {
    console.log("Modal is open");
    modal.classList.remove("scale-0");
    overlay.classList.remove("hidden");
}

let closeModal = () => {
    modal.classList.add("scale-0");
    overlay.classList.add("hidden");
}