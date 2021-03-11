import React from 'react'
import { Button, Form, NavDropdown, Nav, Navbar, FormControl, Col, Figure } from 'react-bootstrap'


// rafc
export const Formulaire = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo192.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Wael Project
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#formContact">Contact</Nav.Link>
              <NavDropdown title="option" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Update</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
      </Navbar>   
      <div className="formContact">
        <div class="contactforme forme col-7">
        <Form>
          <Form.Row>
          

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 St  carthage" />
          </Form.Group>

          

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridMessage">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Enter your message here " as="textarea" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <br /><br />
        </Form>
        </div>
        <div className="images">
        <img src="/contact.png" width="400px"></img>
        </div>
      </div> 
        </div>
    )
}

