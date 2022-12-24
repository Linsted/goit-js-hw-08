import Player from '@vimeo/player';
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throtled = throttle(getCurrentTime, 1000);


player.on('timeupdate', throtled);
player.setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))


    
function getCurrentTime(obj) {
    const { seconds } = obj;
    localStorage.setItem('videoplayer-current-time',JSON.stringify(`${seconds}`))

}




