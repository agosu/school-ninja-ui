import React from 'react';

export default function Student(props) {
    return (
        <div>Hello, {props.firstname} {props.lastname}. You are a student!</div>
    )
}