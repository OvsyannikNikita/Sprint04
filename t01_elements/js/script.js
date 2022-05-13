//Taking all the elements from list
let li = document.querySelectorAll('li')
//Making a Loop for sort out all elements of "li" 
for(let i = 0; i < li.length; i++){
//Getting a information about attribute "class"
    let className = li[i].getAttribute('class')
//Getting information about attribute "data-element"
    let classData = li[i].getAttribute('data-element')
//If in current "li" attribute "class" or "data-element" is empty, we are adding it
    if(className === null){
        li[i].classList.add('unknown')
    } 
    if(classData === null){
        li[i].setAttribute('data-element','none')
    }
//Getting all elements of current li and reshaping to array
    let attr = li[i].getAttribute('data-element').split(" ")
//Create main box for circles 
    let mainDiv = document.createElement('div')
//For every "li" adding a certain amount of circles 
    attr.forEach(function(elem){
//Create "div" element for circle 
        let div = document.createElement('div')
//Adding for circle class
        div.classList.add('elem')
//Adding for every circle class 
        if(elem === 'fire'){
            div.classList.add('fire')
        }else if(elem === 'earth'){
            div.classList.add('earth')
        }else if(elem === 'water'){
            div.classList.add('water')
        }else if(elem === 'air'){
            div.classList.add('air')
        }else if(elem === 'none'){
            div.classList.add('none')
// Adding line for class none
            let line = document.createElement('div')
            line.classList.add('line')
            div.append(line)
        }
//Adding all small circles to main box
        mainDiv.append(div)
    })
//Adding every "li" main boxes
    li[i].append(mainDiv)
}






