let calories = document.querySelector('.calories')
let h2 = document.querySelector('h2')
let img = document.querySelector('img')
let superheroBtn = document.querySelector('.superhero')

class Human{
    constructor(firstName,lastName,gender,age,calories){
        this.firstName = 'First name: ' + firstName
        this.lastName = 'Last name: ' + lastName
        this.gender = 'Gender: ' + gender
        this.age = 'Age: ' + age
        this.calories = calories 
    }
    sleepFor(){
        let seconds = 5;
        h2.innerHTML = `I'm sleeping for ${seconds} seconds`
        let seconds_timer_id = setInterval(function() {
            if (seconds >= 0) {
                seconds --;
                h2.innerHTML = `I'm sleeping for ${seconds} seconds`
            } else {
                clearInterval(seconds_timer_id);    
            }
        }, 1000);

        img.removeAttribute('src')
        img.setAttribute('src','assets/images/bomjspit.jpg')
        function awake(){
            h2.innerHTML = "I'm awake now"
            img.removeAttribute('src')
            img.setAttribute('src','assets/images/trevorfuck.jpg')
            img.style.height = 200 + 'px'
            img.style.width = 300 + 'px'
        }
        setTimeout(awake,6000)
    }
    feed(){

        function eating(){
            if(trevor.calories>=500){
                h2.innerHTML = "I'm not hungry"
                img.removeAttribute('src')
            img.setAttribute('src','assets/images/trevorsmile.jpg')
            }else{
                h2.innerHTML = "I'm still hungry"
                img.removeAttribute('src')
            img.setAttribute('src','assets/images/sad.jpg')
            }
        }
        
        h2.innerHTML = 'Nom nom noom'
        trevor.calories += 200
        img.removeAttribute('src')
        img.setAttribute('src','assets/images/trevor-eating.jpg')
        setTimeout(eating,10000)
    }
}
class Superhero extends Human{
    constructor(firstName,lastName,gender,age,power,calories){
        super(firstName,lastName,gender,age,calories)
        this.power = 'Power: ' + power
    }
    fly(){
        let seconds = 10;
        img.removeAttribute('src')
        img.setAttribute('src',"assets/images/fly.jpg")
        img.style.width = 250 + 'px'
        img.style.height = 200 + 'px'
        h2.innerHTML = `Groot is flying for ${seconds} seconds!`
        let seconds_timeout_id = setInterval(function(){
            if(seconds > 0 ){
                seconds--
                h2.innerHTML = `Groot is flying for ${seconds} seconds!`
            }else{
                clearInterval(seconds_timeout_id)
            }
        },1000) 
        function flying(){
        h2.innerHTML = 'Groot is back!!!'
        img.removeAttribute('src')
        img.setAttribute('src',"assets/images/grootisback.webp")
        }
        setTimeout(flying,10000)

    }
    fightWithEvil(){
        img.removeAttribute('src')
        img.setAttribute('src',"assets/images/groot-fighting.jpg")
        img.style.width = 250 + 'px'
        img.style.height = 200 + 'px'
        h2.innerHTML = 'Khhh-ch... Bang-g-g-g... Evil is defeated!'
    }
}

let trevor = new Human('Trevor','Phillips','Male','46',500)
let groot = new Superhero('Baby','Groot','Tree','2 years','defend',100000)

let valueTrevor = Object.values(trevor)
let valueGroot = Object.values(groot)
let forP = document.querySelector('.forP')

for(let i =0;i < valueTrevor.length - 1;i++){
        let p = document.createElement('p')
        p.innerHTML = valueTrevor[i]
        forP.append(p)
    }
let allP = document.querySelectorAll('.forP p')

function trevorCalories(){
    trevor.calories--;
    calories.innerHTML = 'Calories: ' + trevor.calories;
}
let mincal = setInterval(trevorCalories,300)

superheroBtn.onclick = function(){
    if(trevor.calories > 500){
        for(let i = 0; i < valueGroot.length - 2;i++){
            clearInterval(mincal)
            allP[i].innerHTML = valueGroot[i]
            calories.innerHTML = groot.calories
        }
    function grootCalories(){
        groot.calories --
        calories.innerHTML = 'Calories: ' + groot.calories
    }
    setInterval(grootCalories,1)
    let button1 = document.querySelector('.sleep')
    button1.innerHTML = "FLY"
    let button2 = document.querySelector('.feed')
    button2.innerHTML = "FIGHT WITH EVIL"
    button1.removeAttribute('onclick')
    button2.removeAttribute('onclick')
    button1.setAttribute('onclick','groot.fly()')
    button2.setAttribute('onclick','groot.fightWithEvil()')

    let p2 = document.createElement('p')
    p2 = groot.power
    forP.append(p2)
    h2.innerHTML = "I'm Groot!"
    img.removeAttribute('src')
    img.setAttribute('src',"assets/images/baby-groot-guardians.0.jpg")
    }else{
        h2.innerHTML = trevor.firstName + " calories is so low"
    }
    
}
