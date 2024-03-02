
fetch('https://api.unsplash.com/photos/random?client_id=w_P9i9MWFaNEoXEABWPt9nrbZrtaIFIMprH29-3cNGY&query=nature&orientation=landscape')
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url("${data.urls.full}")`
        document.getElementById('author').textContent = data.user.name
    })

function updateTime(){
    const time = new Date()
   document.getElementById('time').textContent =  time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })

}

setInterval( updateTime , 1000)


    
fetch('https://api.open-meteo.com/v1/forecast?latitude=22.5626&longitude=88.363&current=temperature_2m&timezone=Asia%2FSingapore&forecast_days=1')
    .then(res => res.json())
    .then(data => {
        document.getElementById('weather').textContent = `${data.current.temperature_2m}°C`
    })

    fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
    method: 'GET',
    headers: {
        'X-Api-Key': 'yW5rdKWJQk3swdTl4wTNxg==twwmlYuOav6ZM3AS',
        'Content-Type': 'application/json'
    }
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    document.getElementById('quote').textContent =  data[0].quote
})
.catch(error => {
    console.error('Error:', error);
});


    