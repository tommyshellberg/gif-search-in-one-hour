import React from 'react'
import {Form, Button} from 'react-bootstrap'

export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit = event => {
        event.persist()
        event.preventDefault()
        this.props.giphySearch(event.target[0].value)
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGIF">
                    <Form.Label>Giphy Search</Form.Label>
                    <Form.Control type="text" value={this.state.input} placeholder="Search for GIF" onChange={ this.handleChange }/>
                    <Form.Text className="text-muted">
                    Search for a GIF
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        )
    }
}