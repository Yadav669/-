let imgBox = document.getElementById("QR")
let qrImage = document.getElementById("QR img")
let qrText = document.getElementById("qrtext")

function generateQR (){
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}   