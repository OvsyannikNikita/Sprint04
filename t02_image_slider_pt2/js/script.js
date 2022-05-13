let offset = 0;
const sliderLine=document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click',function(){
    offset +=252;
    if(offset > 1024 ){
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})
document.querySelector('.slider-prev').addEventListener('click',function(){
    offset -=252;
    if(offset < 0 ){
        offset = 1024
    }
    sliderLine.style.left = -offset + 'px'
})