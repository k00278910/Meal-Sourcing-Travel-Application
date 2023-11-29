var images= document.getElementById("images");
var prevBtn= document.getElementById("prev");
var forwardBtn= document.getElementById("next");
var img= document.getElementsByTagName("img");
var position=0;

function start(){
  position++;
  changeImage();
}
function changeImage(){
  if (position > img.length -1){
    position=0;
  }else if (position<0){
    position=img.length-1;
  }
  images.style.transform=`translateX(${-position*800}px)`;
}

forwardBtn.addEventListener("click",()=>{
  position ++;
  changeImage();
});

prevBtn.addEventListener("click",()=>{
  position --;
  changeImage();
});