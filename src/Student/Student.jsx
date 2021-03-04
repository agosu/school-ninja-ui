import React from 'react';
import { Route } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";

export default function Student(props) {
    return <>
        <Route path={props.path + '/dashboard'}>
            <StudentDashboard/>
        </Route>
    </>
}