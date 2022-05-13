fetch('https://api.openweathermap.org/data/2.5/onecall?lat=50.45&lon=30.52&exclude=hourly,minutely,current&appid=111f0bab22c96c4027a8914654c2c5ff')
    .then(function(resp){return resp.json()})
    .then(function(data){
        console.log(data);
        document.querySelector('.title').textContent = data.timezone;
       
        let everyday = document.querySelectorAll('.weather-block p');
        console.log(everyday);
        
        for(let i = 0;i < everyday.length; i++){
            document.querySelectorAll('h2')[i].innerHTML = (data.daily[i].feels_like.day - 273).toFixed(0) + '&deg;';
            let today = data.daily[i].dt
            let milliseconds = today * 1000
            let dataObject = new Date(milliseconds)
            let humanDateFormat = dataObject.toLocaleString()
            everyday[i].innerHTML = humanDateFormat.split('.').slice(0,2).join('.')
        }
        
    })
    .catch(function(){
        //catch any errors
    })

    
    
    // let today = 1651136400   
    // let milliseconds = today * 1000
    // let dataObject = new Date(milliseconds)
    // let humanDateFormat = dataObject.toLocaleString()
    // console.log(humanDateFormat.split('.').slice(0,2).join('.'));
    
    
    
    

    