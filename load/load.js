


// localStorage.setItem('loaderShown', 'false');
let ans =  localStorage.getItem('loaderShown');

function div(){

if(ans == true){
  
    document.getElementById("back").style.visibility="hidden";
    localStorage.setItem('loaderShown', 'true')
           
}else{
   
    document.getElementById("back").style.display="none";
}
}

    setTimeout("div()", 3800);
  




        // // Function to check if the loader should be displayed
        // function shouldShowLoader() {
        //     // Check if a flag is set in local storage
        //     return !localStorage.getItem('loaderShown');
        // }

        // // Function to hide the loader and set the flag in local storage
        // function hideLoader() {
        //     // Hide the loader element (you can implement your own logic)
        //     var loader = document.getElementById('back');
        //     if (loader) {
        //         loader.style.display = 'none';
        //     }

        //     // Set the flag in local storage to indicate that the loader has been shown
        //     localStorage.setItem('loaderShown', 'true');
        // }

        // // Check if the loader should be displayed and hide it if necessary
        // if (shouldShowLoader()) {
        //     // Display the loader (you can implement your own logic)
        //     var loader = document.getElementById('back');
        //     if (loader) {
        //         loader.style.display = 'block';
        //     }

        //     // Simulate loading (you can replace this with your actual loading logic)
        //     setTimeout(function () {
        //         hideLoader();
        //     }, 3000); // Hide the loader after 3 seconds (adjust as needed)
        // }

