import React from 'react';
import Menu from './Menu/Menu';
import Intro from './Intro/Intro';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Student from "./Student/Student";
import Teacher from "./Teacher/Teacher";
import useToken from './useToken'

function App() {
    const { setToken, token } = useToken();
    console.log("APP: " + token);
    return (
        <div>
            <Menu isLoggedIn={token} setToken={setToken}/>
            <BrowserRouter>
                <Switch>
                    <Route exact path = "/">
                      <Intro/>
                    </Route>
                    <Route path = "/student">
                      <Student path={"/student"}/>
                    </Route>
                    <Route path = "/teacher">
                      <Teacher/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
