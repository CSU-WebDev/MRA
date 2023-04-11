import Card from 'react-bootstrap/Card';

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