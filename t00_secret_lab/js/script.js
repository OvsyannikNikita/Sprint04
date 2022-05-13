let div = document.getElementById('lab')
let hero = document.getElementById('hero')
function transformation(){
    if(hero.innerHTML == 'Bruce Banner'){
    div.style.backgroundColor = '#70964b';
    hero.innerHTML = 'Hulk';
    hero.style.letterSpacing = '6px';
    hero.style.fontSize = '130px';
}else{
        div.style.background = '#ffb300';
        hero.innerHTML = 'Bruce Banner';
        hero.style.letterSpacing = '2px';
        hero.style.fontSize = '60px';
}
}