const popUp = document.querySelector(".pop_up");
const body = document.querySelector(".hero");
const btnDownload = document.querySelector(".btn-download");
const btnClose = document.querySelector("#pop_btn");

btnDownload.addEventListener("click", show);
btnClose.addEventListener("click", hide);

function hide() {
    popUp.id = "hide";
    body.classList.remove("hide");
}

function show() {
    popUp.id = "show";
    body.classList.add("hide");
}