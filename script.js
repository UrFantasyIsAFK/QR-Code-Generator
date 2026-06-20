let qrImage = document.getElementById("qrImage");
let downloadBtn = document.getElementById("downloadBtn");

function generateQR() {
    let qrText = document.getElementById("qrText").value;

    if(qrText.length > 0) {

        let qrURL =
        "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
        + encodeURIComponent(qrText);

        qrImage.src = qrURL;
        qrImage.style.display = "block";

        downloadBtn.href = qrURL;
    }
    else{
        alert("Please enter text or URL");
    }
}