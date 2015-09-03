//
self.addEventListener('notificationclick', function(event) {
  var url = event.notification.data.url;
  alert('click:'+url);
  event.waitUntil(clients.openWindow(url));
});
