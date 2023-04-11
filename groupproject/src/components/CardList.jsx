import Card from "./Card";
import CardGroup from 'react-bootstrap/CardGroup';

function CardList(props){
    const weatherData = props.weatherData;

    let cards = []
    if(weatherData){
        weatherData.hours.map(hour =>
            cards.push(
                <Card hourData = {hour}/>
            )
        );

    return(
        
        <CardGroup className="customCardList scrolls">{cards}</CardGroup>
        
    );
}

export default CardList;