import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throtled = throttle(getCurrentTime, 1000);
const savedTime = localStorage.getItem('videoplayer-current-time');


player.on('timeupdate', throtled);
if (savedTime) { player.setCurrentTime(JSON.parse(savedTime)) };
//  чи можна було б зробити отак ?  без if   player.setCurrentTime(JSON.parse(savedTime) || 0 )



    
function getCurrentTime(obj) {
    const { seconds } = obj;
    localStorage.setItem('videoplayer-current-time',JSON.stringify(`${seconds}`))

}




