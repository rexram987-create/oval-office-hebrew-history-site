
document.addEventListener("DOMContentLoaded",function(){
  const current=window.location.pathname.split("/").pop()||"index.html";
  document.querySelectorAll("nav a").forEach(function(link){
    if(link.getAttribute("href")===current){link.classList.add("active")}
  });
});
function openImg(img){
  const lightbox=document.getElementById("lightbox");
  const lightboxImg=document.getElementById("lightbox-img");
  if(!lightbox||!lightboxImg)return;
  lightbox.style.display="flex";
  lightboxImg.src=img.src;
}
function closeImg(){
  const lightbox=document.getElementById("lightbox");
  if(lightbox)lightbox.style.display="none";
}
