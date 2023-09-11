// sw.js (Service Worker script)
self.addEventListener('fetch', function (event) {
    // Check if the DevTools are open
    if (window.devtools.isOpen) {
      // Block the network request
      event.respondWith(
        new Response('You are offline. Inspect Element is open.')
      );
    }
  });
  


// Detect when DevTools (inspect element) are opened or closed
window.addEventListener('devtoolschange', function (e) {
    window.devtools = window.devtools || {};
    window.devtools.isOpen = e.detail.isOpen;
  });
  