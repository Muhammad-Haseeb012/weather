const API_KEY = '1858b6ee4f2776a26a0614ae284854d0';
 function  weatherReport(){

      let city = document.getElementById("city").value;
      let weatherDiv = document.getElementById("weather");
      weatherDiv.innerHTML= '<h3> Loading... </h3>';
       
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`)
      .then(response =>{
          if(!response.ok){
             throw new error("City not found");
          }
            return  response.json();
            
      }).then(data=>{
          
          console.log(data);
           weatherDiv.innerHTML=`
           <h2> Weather in <span style="color: yellow;"> ${data.name} </span> </h2> <br>
        <h3> Temperature: <span style="color: yellow;"> ${(data.main.temp - 273.15).toFixed(2)} °C</span> </h3> <br>
         <h3> Weather: <span style="color: yellow;"> ${data.weather[0].description} </span> </h3> <br>
            <h3> Humidity: <span style="color: yellow;"> ${data.main.humidity} %</span> </h3> <br>
          `
      }).catch(error=>{
         weatherDiv.innerHTML = `<p>Error in fetching your data</p>`;
      })
 }
