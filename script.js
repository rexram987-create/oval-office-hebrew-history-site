function openImg(img){
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=img.src;
}

function closeImg(){
document.getElementById("lightbox").style.display="none";
}