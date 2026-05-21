const imgs = document.querySelectorAll('.header-slider ul img')
const prev_btn = document.querySelector('.control-prev')
const next_btn = document.querySelector('.control-next')

// function for slider
let n = 0;

function changeSlide()
{
    for(let i=0; i < imgs.length; i++)
    {
        imgs[i].style.display= 'none';  
    }
    imgs[n].style.display= 'block'; // n = 0 display img 1
}

changeSlide(); //calling func

// prev btn 
prev_btn.addEventListener('click', (e) => {
    if(n > 0){
        n--;
    } else{
        n = imgs.length -1;
    }
    changeSlide();
} );

// next btn 
next_btn.addEventListener('click', (e) => {
    if(n < imgs.length - 1){
        n++;
    } else{
        n = 0;
    }
    changeSlide();
} );

// timer for header slider
setInterval(()=>{
if(n < imgs.length - 1){
    n++;
}else{
    n = 0;
}
changeSlide();
}, 3000);

// shop slider 
const scrollContainer = document.querySelectorAll('.products-slider');
for(const item of scrollContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}