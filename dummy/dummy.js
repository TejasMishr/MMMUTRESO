// main.js (Your main JavaScript file)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(function () {
        console.log('Service Worker registered.');
      })
      .catch(function (error) {
        console.error('Service Worker registration failed:', error);
      });
  }
  