import React, {useState} from "react";
import ReactDOM from "react-dom";
import Form from "./LoginForm";
import Authentication from "./Authentication";


const Token = (username, password, setToken) => {
    //sample Api call
    setTimeout(() => {
        console.log("submittin ", username, password);
        const jwtResponse = "orNaur";
        setToken(jwtResponse);
        localStorage.setItem('jtw ', jwtResponse)
    }, 2000)
}

export default Token;