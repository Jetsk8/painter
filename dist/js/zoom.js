const img = document.querySelectorAll('.new-image');
const caption = document.querySelectorAll('.img-caption');
const wrapper = document.querySelector('.img-wrapper');

let zoomedIn = false; 

img.forEach(item => item.addEventListener('click', zoom));

function zoom (e){
    if(!zoomedIn) {
        e.target.classList.add('zoom');
        caption.forEach(item => item.classList.add('open-caption'));
        e.target.parentNode.style.zIndex = '6'; 

        zoomedIn = true;
    } else {
        img.forEach(item => item.classList.remove('zoom'));
        setTimeout(() => caption.forEach(item => item.classList.remove('open-caption')), 500);
        setTimeout(() => e.target.parentNode.style.zIndex = '4', 500); 

        zoomedIn = false;
    }
};