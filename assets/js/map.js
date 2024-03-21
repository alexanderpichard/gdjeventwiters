(function () {
    var setting = {"zoom":17,"queryString":"Calle Castelar, 21, 39004 Santander, Cantabria, España","place_id":"ChIJnykUwK1LSQ0RidksfLPTe3I","satellite":false,"centerCoord":[43.46307366505041,-3.7936634000000025],"cid":"0x727bd3b37c2cd989","lang":"es","cityUrl":"/spain/santander-586","cityAnchorText":"Mapa de Santander, Cantabria, España","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"932306"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=932306';
    s.async = true;
    s.onload = function (e) {
      window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
  })();