let lastArea = document.querySelector('.lastArea')
let startArea = document.querySelector('.startArea')
let notes = document.querySelector('.notes')
let body = document.getElementsByTagName('body')[0]
let main = document.querySelector('.main')

    body.append(main)
    main.append(notes)
    notes.append(lastArea)

if(document.cookie === ''){
    lastArea.innerHTML ='[Empty]'
}


if(startArea.innerHTML ===''){
    alert(`It's Empty. Try to input something in "Text input".`)
}

let cookiesArr = document.cookie.replace(/([=])/gi,'').split(';')
if(document.cookie !== ''){
    for (const k of cookiesArr) {
        let div = document.createElement('div')
        div.append("--> " + k.trim())
        lastArea.append(div)
    }
}

   function firstInput(){
    if(lastArea.innerHTML == '[Empty]'){
        lastArea.innerHTML = ''
    }
    let date = new Date(Date.now() + 86400e3 * 30)
    date.toUTCString()
    document.cookie = startArea.value + '=;expires=' + date
    cookiesArr +=startArea.value
    let div = document.createElement('div')
    div.append("--> "+startArea.value)
    lastArea.append(div)
    startArea.value =''
}


function deleteAllCookies() {
    let answer = confirm("Are you sure?")
    if(answer){
        cookiesArr.length = 0;
        lastArea.innerHTML = '[Empty]'
        var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
}
    
}