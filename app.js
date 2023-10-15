let imgBox = document.querySelector(".imgBox"); 
let qrImg = document.getElementById("qrImg");
let qrTxt = document.getElementById("qrTxt");

function genQR() {
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrTxt.value;
    imgBox.classList.add("show-img");
}
qrTxt.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        genQR();
    }
});