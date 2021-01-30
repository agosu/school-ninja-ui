import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function Menu() {
    const [loginShow, setLoginShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);
    return (
        <>
            <Navbar sticky="fixed" bg="light" expand="lg" className={'navbar'}>
                <Navbar.Brand href="#home">SchoolNinja</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Pagrindinis</Nav.Link>
                        <Nav.Link href="#student">Ieškau koorepetitoriaus</Nav.Link>
                        <Nav.Link href="#teacher">Noriu būti koorepetitoriumi</Nav.Link>
                        <Nav.Link href="#contact">Kontaktai</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => setLoginShow(true)}>Prisijungti</Nav.Link>
                        <Nav.Link onClick={() => setRegisterShow(true)}>Registruotis</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Login show={loginShow} onLogin={() => setLoginShow(false)} onCancel={() => setLoginShow(false)}/>
            <Register show={registerShow} onRegister={() => setRegisterShow(false)} onCancel={() => setRegisterShow(false)}/>
        </>
    )
}