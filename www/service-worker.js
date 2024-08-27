
self.addEventListener('install', function(event) {
          //console.log('SW:install');

  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
        //console.log('SW:activate');

  event.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', function(event) {
        //console.log('SW:fetch');

    return;
});


self.addEventListener('notificationclick', function (event) {
              //console.log('SW:notificationclick');

  clients.openWindow("/");

});

self.addEventListener('push', function(event) {
  if (!(self.Notification && self.Notification.permission === 'granted')) {
    return;
  }

  var data = {};
  if (event.data) {
    data = event.data.json();
  }
  var title = data.title || "Something Has Happened";
  var message = data.message || "Here's something you might want to check out.";

  return self.registration.showNotification(title, {
    body: message,
    dir:'ltr',
    badge: 'assets/splash.png',
    icon:  'assets/splash.png',
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: "vibration-sample",
  });


});



