let allBlocks = document.querySelectorAll('.block')
//task is done
let swap = false;
allBlocks.forEach(function(block){
    let offsetX;
    let offsetY;
    block.setAttribute('draggable','true')
    block.addEventListener('dragstart',function(event){
        offsetX = event.offsetX;
        offsetY = event.offsetY;
    })
                
    block.addEventListener('dragend',function(event){
        console.log(event.pageX, event.pageY)
        block.style.position = 'absolute'
        block.style.top = (event.pageY - offsetY) + 'px'
        block.style.left = (event.pageX - offsetX) + 'px'
    })
            
   
    block.onclick = function switcher(){
        if(swap === false){
            swap = true
            block.style.border = 'dashed'
            block.setAttribute('draggable','false')
        }else if(swap === true){
            swap = false
            block.style.border = 'none'
            block.setAttribute('draggable','true')
            block.addEventListener('dragstart',function(event){
                offsetX = event.offsetX;
                offsetY = event.offsetY;
            })
                
            block.addEventListener('dragend',function(event){
                console.log(event.pageX, event.pageY)
                block.style.position = 'absolute'
                block.style.top = (event.pageY - offsetY) + 'px'
                block.style.left = (event.pageX - offsetX) + 'px'
            })
        }
        console.log(block);
        console.log(swap);
    }
})