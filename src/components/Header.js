import React from 'react'

import {Jumbotron, Container} from 'react-bootstrap'

const Header = () => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Gif Madness</h1>
                <p>
                Use the input below to search.
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Header