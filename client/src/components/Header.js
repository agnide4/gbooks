import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import {getSvalue, getSortValue} from "../action"

export default function Header() {
  const [searchTerm, error] = useSelector((gState) => [
    gState.searchTerm,
    gState.error,
    
])
  const dispatch = useDispatch()
  const handleChange = event => {
  let term = event.target.value
  dispatch(getSvalue(term))
    
  };

//   const sortHandleChange = event => {
//     let order = event
//     console.log(order)
//     dispatch(getSortValue(order))

//   }

    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Samir gBooks</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="About">About</Nav.Link>
      {/* <NavDropdown title="Sort List by Age" id="basic-nav-dropdown" value={sortTerm} onSelect={sortHandleChange}>
        <NavDropdown.Item eventKey="asc" >ASCENDING</NavDropdown.Item>
        <NavDropdown.Item eventKey="dsc">DESCENDING</NavDropdown.Item>
        {/* <NavDropdown.Item href="#action/3.2">Alphabetically</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Seniority</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> *
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search a book by name" className="search" value={searchTerm} onChange={handleChange} />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

