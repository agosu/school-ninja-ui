import React, { useState, useEffect } from 'react';
import axios from "axios";
import useToken from '../useToken'

function getData(setUser, token) {
    axios.get('https://localhost:44386/api/users/test', {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => {
            setUser(response.data)
        });
}

export default function StudentDashboard() {
    const [user, setUser] = useState(null);
    const { token } = useToken();
    useEffect(() => {
        getData(setUser, token);
    }, [token]);
    return (
        <>
        {
            user ? <div>Hello, {user.firstname} {user.lastname}. You are a student!</div>
             : <div>Loading...</div>
        }
        </>
    )
}