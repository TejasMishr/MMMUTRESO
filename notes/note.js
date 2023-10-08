document.addEventListener('contextmenu', function (e) {
   
    e.preventDefault();

   
    const iframe = document.getElementById('iframeViewer');
    iframe.style.display = 'none';

   
    setTimeout(function () {
        iframe.style.display = 'block';
    }, 90000); 
    // alert('Content got hidden')
});


// if (window.console &&  iframe.style.display == 'none') {
//     alert('Developer console is open.');
//     // Redirect or take action here
//     window.location.href = 'https://example.com/error.html';
// }



//pre selected
document.addEventListener('DOMContentLoaded', function () {
    // Get the query parameter 'branch' from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedBranch = urlParams.get('branch');

    if (selectedBranch) {
        // Get the <select> element
        const branchSelect = document.getElementById('branch');

        // Loop through the <options> and set the selected attribute for the matching branch
        for (let i = 0; i < branchSelect.options.length; i++) {
            if (branchSelect.options[i].value === selectedBranch) {
                branchSelect.options[i].selected = true;
                break; // Exit the loop once the option is found
            }
        }

        if(branchSelect != -1){
            updateIframe();
          }
    }
});



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