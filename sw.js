//

addEventListener('notificationclick', function(event) {
  var url = event.notification.data.url;
  console.log('HA -- '+url);
  //alert('click:'+url);
  event.notification.close();
  //event.waitUntil(clients.openWindow(url));
});

