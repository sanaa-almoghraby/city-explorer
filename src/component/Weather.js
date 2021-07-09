import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

class WeatherCard extends React.Component {


    render() {
        console.log(this.props);
        return (
            <div className="weatherdiv">
                <Card style={{ width: "30rem" }} className="cardstyl">
                    <Card.Body>
                        {this.props.WeatherData.map(day =>
                            <>
                                <Card.Text>
                                    {day.data}
                                </Card.Text>
                                <Card.Text>
                                    {day.description}
                                </Card.Text>
                            </>
                        )}
                    </Card.Body>
                </Card>

            </div>
        )
    }
}


export default WeatherCard;
