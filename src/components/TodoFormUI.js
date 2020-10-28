import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const TodoFormUI = () =>{
    return (
        <div>
        <Form>
            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Description
                </Form.Label>
                <Col sm={10}>
                    <Form.Control size="sm" type="text" placeholder="" />
                </Col>
            </Form.Group>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>
                    Category
                </Form.Label>
                <Form.Control as='select' custom sm={10}>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Java">Java</option>
                    <option value="C#">C#</option>
                </Form.Control>
            </Form.Group>
            <Form.Group as={Row} >
                <Form.Label column sm={2}>
                    Content
                </Form.Label>
                <Col sm={10}>
                    <Form.Control size="sm" type="text" placeholder="" />
                </Col>
            </Form.Group>
            <Button type="Submit" >Submit</Button>
        </Form>
        
        </div>
    )

}

export default TodoFormUI