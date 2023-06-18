 async function getTemperature(self) {
    let city = self.value
    let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=271d1234d3f497eed5b1d80a07b3fcd1`)
    let data = await res.json()
    //console.log(data["main"]["temp"])
    let temperature_display = document.getElementById("temperature_display")
    temperature_display.innerHTML= data["main"]["temp"]+ "° C"
} 