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
    }
});


