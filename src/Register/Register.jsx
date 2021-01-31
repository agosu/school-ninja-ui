import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import './register.css';
import axios from 'axios';

export default function Register(props) {

    const [isStudent, setIsStudent] = useState(false);
    let request = {};

    function onChange(e) {
        request[e.target.id] = e.target.value;
    }

    function sendRegisterRequest() {
        request["type"] = isStudent ? "student" : "teacher";
        axios.post('https://localhost:44386/api/users/register', request)
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }

    return props.show ? (
        <div className={"modal-register"}>
            <div>Register</div>
            <form>
                <label htmlFor={"firstname"}>Vardas:</label>
                <input type={"text"} id={"firstname"} onBlur={e => onChange(e)}/><br/>

                <label htmlFor={"lastname"}>Pavardė:</label>
                <input type={"text"} id={"lastname"} onBlur={e => onChange(e)}/><br/>

                <label htmlFor="email">El. paštas:</label>
                <input type={"email"} id={"email"} onBlur={e => onChange(e)}/><br/>

                <label htmlFor={"student"}>Mokinys</label>
                <input type={"radio"} name={"register-type"} id={"student"} value={"student"} onChange={(e) => setIsStudent(e.target.checked)}/>
                <label htmlFor={"teacher"}>Mokytojas</label>
                <input type={"radio"} name={"register-type"} id={"teacher"} value={"teacher"} onChange={(e) => setIsStudent(!e.target.checked)}/><br/>

                {isStudent ?
                    <>
                        <label htmlFor={"grade"}>Klasė:</label>
                        <input type={"number"} id={"grade"} min={"1"} max={"12"} onBlur={e => onChange(e)}/><br/>
                    </> : null
                }

                <label htmlFor={"password"}>Slaptažodis:</label>
                <input type={"password"} id={"password"} onBlur={e => onChange(e)}/><br/>

                <label htmlFor={"re-password"}>Pakartoti slaptažodį:</label>
                <input type={"password"} id={"re-password"}/><br/>
            </form>
            <div>
                <Button onClick={sendRegisterRequest}>Registruotis</Button>
                <Button onClick={props.onCancel}>Atšaukti</Button>
            </div>
        </div>
    ) : null;
}