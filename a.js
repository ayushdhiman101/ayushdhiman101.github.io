var tic = null,
    zone = new Date().getTimezoneOffset() / 60,
 

 days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday' ],
 months = [ 'January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  

gid( 'zone' ).firstChild.nodeValue = zone;
function lz(n)
{
    n = (n + 24) % 24; return n <= 9 ? '0' + n : n;
}


function tick()
{
 var f = document.forms.clock.elements,
  h = new Date(),
  i = h.getHours() + zone,
  s = ':' + lz( h.getMinutes() ) + ':' + lz( h.getSeconds() );
 f.day.value = days[ h.getDay() ] + ' ' + h.getDate() + ' ' +
  months[ h.getMonth() ] + ' ' + h.getFullYear() + ' ';
 f.loc.value = lz( h.getHours() ) + s;
 f.utc.value = lz( i ) + s;
 f.rom.value = lz( i + 1 ) + s;
 f.isr.value = lz( i + 2 ) + s;
 f.msw.value = lz( i + 3 ) + s;
 f.bak.value = lz( i + 4 ) + s;
 f.del.value = lz( i + 5 ) + s;
 f.dha.value = lz( i + 6 ) + s;
 f.kok.value = lz( i + 7 ) + s;
 f.hon.value = lz( i + 8 ) + s;
 f.tky.value = lz( i + 9 ) + s;
 f.sdn.value = lz( i + 10 ) + s;
 f.mag.value = lz( i + 11 ) + s;
 f.wll.value = lz( i + 12 ) + s;
 f.eni.value = lz( i - 12 ) + s;
 f.sam.value = lz( i - 11 ) + s;
 f.haw.value = lz( i - 10 ) + s;
 f.ala.value = lz( i - 9 ) + s;
 f.pac.value = lz( i - 8 ) + s;
 f.mou.value = lz( i - 7 ) + s;
 f.cen.value = lz( i - 6 ) + s;
 f.eas.value = lz( i - 5 ) + s;
 f.atl.value = lz( i - 4 ) + s;
 f.bra.value = lz( i - 3 ) + s;
 f.mid.value = lz( i - 2 ) + s;
 f.azo.value = lz( i - 1 ) + s;
 tic = window.setTimeout( 'tick();', 500 );
}

tick();