import React from "react";

import {Card} from "react-bootstrap";

function Post(props) {
    // var card_width = props.width * 0.5

    return (
        <Card style={{width: "40vw"}}>
            <Card.Header>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle>{props.username}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text>{props.content}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Post;