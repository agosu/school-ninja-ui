import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import './login.css';
import axios from "axios";

export default function Login(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    async function loginUser() {
        axios.post('https://localhost:44386/api/login', {
            email: email,
            password: password
        }).then((response) => {
            props.setToken(response.data.token);
            if (response.data.user.type === 'student') {
                window.location = '/student/dashboard';
            } else if (response.data.user.type === 'teacher') {
                window.location = '/teacher';
            }
        }).catch(function(error) {
            console.log("We are getting this error:");
            console.log(error);
        })
    }

    return props.show ? (
        <div className={"modal-login"}>
            <div>Login</div>
            <form>
                <label htmlFor="email">El. paštas:</label>
                <input type={"email"} id={"email"} onChange={e => setEmail(e.target.value)}/><br/>

                <label htmlFor={"password"}>Slaptažodis:</label>
                <input type={"password"} id={"password"} onChange={e => setPassword(e.target.value)}/>
            </form>
            <div>
                <Button onClick={(e) => {loginUser(); props.onLogin()} }>Prisijungti</Button>
                <Button onClick={props.onCancel}>Atšaukti</Button>
            </div>
        </div>
    ) : null;
}