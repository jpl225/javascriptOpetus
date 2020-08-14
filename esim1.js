function laskeMinuutit()
{
  var min, tun, laske;
  tun = document.getElementById('tunnit').value;
  min = document.getElementById('minuutit').value;
  tun = parseInt(tun);
  min = parseInt(min);
  laske = tun*60 + min;
  document.write('Tähän mennessä minuutteja kulunut tässä päivässä: ' + laske);
}
