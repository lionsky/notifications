//

addEventListener('notificationclick', function(event) {
  //var url = event.notification.data.url;
  var title = event.notification.title;
  console.log('HA -- ' + title);
  //vibrate(300);
  //alert('click:'+data);
  //event.notification.close();
  registration.showNotification("REPLY " + title);
  //event.waitUntil(clients.openWindow('https://timvolodine.github.io/notifications/'));
});

