import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Row, Col } from 'react-bootstrap';

class WeatherCard extends React.Component {


    render() {
        console.log(this.props);
        return (
            <div className="weatherdiv">
                <Row md={2}>
                    <Col>
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
                    </Col>
                </Row>
            </div>
        )
    }
}


export default WeatherCard;
