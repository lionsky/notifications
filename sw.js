//

addEventListener('notificationclick', function(event) {
  //var url = event.notification.data.url;
  var data = event.notification.title;
  console.log('HA -- '+data);
  //vibrate(300);
  //alert('click:'+data);
  //event.notification.close();
  registration.showNotification("REPLY bla");
  //event.waitUntil(clients.openWindow('https://timvolodine.github.io/notifications/'));
});

