import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Row, Col } from 'react-bootstrap';

class MovieCard extends React.Component {


    render() {
        console.log(this.props);
        return (
            
                <Row md={2}>
                    <Col>
                        {this.props.moviesData.map(el =>
                            <Card style={{ width: "20rem" }} className="cardstyl">
                                <Card.Body>


                                    <Card.Text>
                                        {el.title}
                                    </Card.Text>
                                    <Card.Text>
                                        {el.overview}
                                    </Card.Text>
                                    <Card.Text>
                                        {<img
                                            src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                                            alt={el.title}
                                        />}
                                    </Card.Text>
                                    <Card.Text>
                                        {el.vote_average}
                                    </Card.Text>
                                    <Card.Text>
                                        {el.vote_count}
                                    </Card.Text>
                                    <Card.Text>
                                        {el.release_date}
                                    </Card.Text>


                                </Card.Body>
                            </Card>
                        )}
                    </Col>
                </Row>
        
        )
    }
}


export default MovieCard;
