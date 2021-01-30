import React from 'react';
import Button from "react-bootstrap/Button";
import './login.css';

export default function Login(props) {
    return props.show ? (
        <div className={"modal-login"}>
            <div>Login</div>
            <form>
                <label htmlFor="email">El. paštas:</label>
                <input type={"email"} id={"email"}/><br/>

                <label htmlFor={"password"}>Slaptažodis:</label>
                <input type={"password"} id={"password"}/>
            </form>
            <div>
                <Button onClick={props.onLogin}>Registruotis</Button>
                <Button onClick={props.onCancel}>Atšaukti</Button>
            </div>
        </div>
    ) : null;
}