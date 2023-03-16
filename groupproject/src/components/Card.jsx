import Card from 'react-bootstrap/Card';

function Display(props) {
  const weatherData = props.weatherData;

  

  let cards = []
  if(weatherData){
    let rows = [];
    for(let i = 0; i< weatherData.hours.length; i++){
      //cards.push(<><h1>{weatherData.hours[i].temF} </h1>..... card info html</>)
      rows.push(
        <>
          <h3>weatherData.hours[i].Time</h3>
          <li>Temperaure: {weatherData.hours[i].tempF}</li>
          <li>Wind: {weatherData.hours[i].wind}</li>
          <li>Rain: {weatherData.hours[i].precip}</li>
          <li> Humidity: {weatherData.hours[i].humidity}</li>
        </>
      )
    }
    cards.push(
      <Card
          // bg={variant.toLowerCase()}
          // key={variant}
          // text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"

        >
          <Card.Header>{weatherData.location}</Card.Header>
          <Card.Body>
            <Card.Title> Weather Information </Card.Title>
            <Card.Text>
              The weather condition for this city is  
              <ul>
                {
                rows
                }
              </ul>
            </Card.Text>
          </Card.Body>
          
          
      </Card>
      
    )
    
  }
  // if weatherdata and WD.forecast
  // wd.forecast.forecastday.foreach((var, ind) => {
  //   cards.push(
  //     <><h1>{var.date} </h1>..... card info html</>
  //   )s
  // })
  // console.log(weatherData)

  return cards
  
}

export default Display;