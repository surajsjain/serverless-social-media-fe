import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import { Redirect, useHistory } from 'react-router-dom';

function sendPostToTheServer(history)
{
    var username = document.forms["postCreation"]["username"].value;
    var title = document.forms["postCreation"]["title"].value;
    var content = document.forms["postCreation"]["content"].value;

    console.log(username);
    console.log(title);
    console.log(content);

    history.push("/");
}

function CreatePost()
{
    const history = useHistory();

    return (
        <div>
            <h3>Create your own post</h3>
            <Form id={"postCreation"}>
                <Form.Group className="mb-3">
                    <Form.Label>Enter your username</Form.Label>
                    <Form.Control type="username" placeholder="ex: the_wofter" id={"username"}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter the title of your post</Form.Label>
                    <Form.Control type="text" placeholder="A great day at Disneyland" id={"title"}/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Write the content of your post here:</Form.Label>
                    <Form.Control as="textarea" rows = {4} placeholder="It was a great sunny day..." id={"content"}/>
                </Form.Group>

                <Button variant="primary" onClick={() => {
                    sendPostToTheServer(history);
                }}>
                    Post it!
                </Button>
            </Form>
        </div>
    );
}

export default CreatePost;