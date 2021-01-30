import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import './register.css';

export default function Register(props) {
    const [isStudent, setIsStudent] = useState(false);

    return props.show ? (
        <div className={"modal-register"}>
            <div>Register</div>
            <form>
                <label htmlFor={"firstname"}>Vardas:</label>
                <input type={"text"} id={"firstname"}/><br/>

                <label htmlFor={"lastname"}>Pavardė:</label>
                <input type={"text"} id={"lasttname"}/><br/>

                <label htmlFor="email">El. paštas:</label>
                <input type={"email"} id={"email"}/><br/>

                <label htmlFor={"student"}>Mokinys</label>
                <input type={"radio"} name={"register-type"} id={"student"} value={"student"} onChange={(e) => setIsStudent(e.target.checked)}/>
                <label htmlFor={"teacher"}>Mokytojas</label>
                <input type={"radio"} name={"register-type"} id={"teacher"} value={"teacher"} onChange={(e) => setIsStudent(!e.target.checked)}/><br/>

                {isStudent ?
                    <>
                        <label htmlFor={"grade"}>Klasė:</label>
                        <input type={"number"} id={"grade"} min={"1"} max={"12"}/><br/>
                    </> : null
                }

                <label htmlFor={"password"}>Slaptažodis:</label>
                <input type={"password"} id={"password"}/><br/>

                <label htmlFor={"re-password"}>Pakartoti slaptažodį:</label>
                <input type={"password"} id={"re-password"}/><br/>
            </form>
            <div>
                <Button onClick={props.onRegister}>Registruotis</Button>
                <Button onClick={props.onCancel}>Atšaukti</Button>
            </div>
        </div>
    ) : null;
}