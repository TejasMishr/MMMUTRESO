document.addEventListener('contextmenu', function (e) {
   
    e.preventDefault();

   
    const iframe = document.getElementById('iframeViewer');
    iframe.style.display = 'none';

   
    setTimeout(function () {
        iframe.style.display = 'block';
    }, 10000); 
});


// if (window.console &&  iframe.style.display == 'none') {
//     alert('Developer console is open.');
//     // Redirect or take action here
//     window.location.href = 'https://example.com/error.html';
// }

