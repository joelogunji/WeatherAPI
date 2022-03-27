import React, { useState, useEffect } from "react";
import styled from "styled-components";



  function Weather () {
    const [place, setPlace] = useState('London, UK')


   window.weatherWidgetConfig =  window.weatherWidgetConfig || [];
   window.weatherWidgetConfig.push({
       selector:".weatherWidget",
       apiKey:"PZ5G36UWXHMXFVUQVRWA2H8Z6", //Sign up for your personal key
       location: place, //Enter an address
       unitGroup:"metric", //"us" or "metric"
       forecastDays:5, //how many days forecast to show
       title:"London,UK", //optional title to show in the 
       showTitle:true, 
       showConditions:true
   });
  
   (function() {
   var d = document, s = d.createElement('script');
   s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
   s.setAttribute('data-timestamp', +new Date());
   (d.head || d.body).appendChild(s);
   })();

   const onSumbit = (e) => {
     e.preventDefault();
     console.log();
     setPlace(e.target.weatherInput.value)
   } 

  return (
    <>

    <WeaWrap>
        <WeaCont>
        <form id="weatherform" onSubmit={onSumbit}>
          <label>Location</label>
          <input id="weatherInput" name="weatherInput" type='text' defaultValue={place} />
          <input type="submit"  value="Submit"/>
        </form><br/> 
        <div class="weatherWidget"></div>
        <br/>
        </WeaCont>
    </WeaWrap>
   </>
  )
}

export default Weather

const WeaWrap = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: peachpuff;
`
const WeaCont = styled.div`
width: 95%;
height: 80%;
@media screen and (max-width: 768px){
width: 80%;
height: 90%;
}
`
 

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }



// export default FavoriteColor

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((p) => p + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }
// export default Counter