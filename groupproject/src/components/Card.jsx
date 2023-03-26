import Card from 'react-bootstrap/Card';

// function Display(props) {
//   const weatherData = props.weatherData;

  

//   let cards = []
//   if(weatherData){
//     let rows = [];
//     for(let i = 0; i< weatherData.hours.length; i++){
//       //cards.push(<><h1>{weatherData.hours[i].temF} </h1>..... card info html</>)
//       rows.push(
//         <>
//           <h3>{weatherData.hours[i].time}</h3>
//           <li>Temperaure: {weatherData.hours[i].tempF}</li>
//           <li>Wind: {weatherData.hours[i].wind}</li>
//           <li>Rain: {weatherData.hours[i].precip}</li>
//           <li> Humidity: {weatherData.hours[i].humidity}</li>
//         </>
//       )
//     }
//     {['Warning']
//     .map((variant) =>(
//     cards.push(
//       <Card
//           bg={variant.toLowerCase()}
//           // key={variant}
//           // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//           style={{ width: '50rem', color:"black" }}
//           className="mb-2"

//         >
//           <Card.Header>{weatherData.location}</Card.Header>
//           <Card.Body>
//             <Card.Title> Weather Information </Card.Title>
//             <Card.Text>
//               The weather condition for this city is  
//               <ul>
//                 {
//                 rows
//                 }
//               </ul>
//             </Card.Text>
//           </Card.Body>
          
          
//       </Card>
      
//     )))}
    
//   }
//   // if weatherdata and WD.forecast
//   // wd.forecast.forecastday.foreach((var, ind) => {
//   //   cards.push(
//   //     <><h1>{var.date} </h1>..... card info html</>
//   //   )s
//   // })
//   // console.log(weatherData)

//   return cards
  
// }

// export default Display;

function Display(props){
  const hourData = props.hourData;

  return(
      <div className="CardGroup">
        <Card className="customCard " >
          <Card.Body>
            <Card.Title>{hourData.time}</Card.Title>
            <Card.Title>{hourData.tempF}</Card.Title>
            <Card.Text>
              Wind: {hourData.wind}<br></br>
              Rain: {hourData.precip}<br></br>
              Humidity: {hourData.humidity}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      
    
  );
}

export default Display;