var current = 0;
var total = 4;

function next(){
    current = current + 1;
   // current++
   //current +=1
   if (current>3){
    current=0;
   }
var slides =document.getElementsByClassName("slide");
for (var i=0; i < slides.length;i++){
    slides[i].style.display = "none";
}

slides[current].style.display = "block";

   console.log("next");
   console.log(current);

}

function previous(){
current= current-1;
if (current<0){
    current=total-1;
}
var slides =document.getElementsByClassName("slide");

for (var i=0; i < slides.length;i++){
    slides[i].style.display = "none";
}
slides[current].style.display = "block";

}