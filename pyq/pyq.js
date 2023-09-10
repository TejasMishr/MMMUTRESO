var bari1 = document.querySelector('#bar1');
var bari2 = document.querySelector('#bar2');
var bari3 = document.querySelector('#bar3');

var navi = document.querySelector('.navbar ul');
var menu = document.querySelector('#mobile-menu');
// /transform: translate(-101%);

var count = 0;


var f1 = ()=>{
    // alert('ok');
   count++;
   
     
   if(count%2==0){
    // alert("ok");
    navi.style.transform = "translate(-101%)";

    bari2.style.display="flex";
    bari1.style.transform="rotate(0) translateY(0px)";
    bari3.style.transform="rotate(0)  translateY(0px)";
   }else{
    
    navi.style.display="flex";
    navi.style.transform = "translate(0%)";
    bari2.style.display="none";
    bari1.style.transform="rotate(45deg) translateY(6px)";
    bari3.style.transform="rotate(-45deg)  translateY(-5px)";
   }




}
