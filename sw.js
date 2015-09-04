//

addEventListener('notificationclick', function(event) {
  //var url = event.notification.data.url;
  var data = event.notification.title;
  console.log('HA -- '+data);
  navigator.vibrate(300);
  //alert('click:'+data);
  //event.notification.close();
  event.waitUntil(clients.openWindow('https://timvolodine.github.io/notifications/'));
});

