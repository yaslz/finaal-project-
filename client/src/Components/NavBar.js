// import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { logout } from "../JS/Actions/user";

// const NavBar = () => {
  // const isAuth = useSelector((state) => state.userReducer.isAuth);
  // const dispatch = useDispatch();
//   return (
//     <div>
//       <Navbar bg="light" variant="light">
//         <Container>
//           <Navbar.Brand href="/">Elly-agency</Navbar.Brand>
//           <Nav className="mx-auto">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/team">Team </Nav.Link>
//             <Nav.Link href="/contact">Contact</Nav.Link>
//             <Nav.Link href="/login">login</Nav.Link>
//             <Nav.Link href="/register">Register</Nav.Link>
            
// </Nav>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };


// export default NavBar;

import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../JS/Actions/user';

const NavBar = () => {
    const isAuth = useSelector(state => state.userReducer.isAuth)
    const dispatch = useDispatch()

    return (
        <header>
            <Navbar bg="light" variant="light">
                <Container>
                <Navbar.Brand href="/">Elly-agency</Navbar.Brand>
                <Nav className="mx-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/team">Team</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                { isAuth ? <Nav.Link href="/profile">Profile</Nav.Link> : null}

                </Nav>
                { isAuth ? 
                    (<Link to='/'><Button variant="dark" className='logout' onClick={() => dispatch(logout())}>Logout</Button></Link>)
                    :
                    (
                    <div className='login'>
                    <Link to='/login'><Button variant="dark">Login</Button></Link>
                    <Link to='/register'><Button variant="dark">Register</Button></Link>
                    </div>
                )}
                </Container>
            </Navbar>
        </header>
    )
}


export default NavBar
