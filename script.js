const fulIngBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulIngBox.style.display = "flex";
    fulImg.src = reference
}

function closeImg(){
    fulIngBox.style.display = "none";
}
