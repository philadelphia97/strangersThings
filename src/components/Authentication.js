import React, {useState} from "react";
import Form from "./LoginForm";
import Token from "./Token";

const Authentication = () => {
    // const tokenFromStorage = localStorage.getItem('jwt')
    const [token,setToken] = useState("");
    return (
        <div>
            {token ? 
            <h1> Welcome to the page!</h1> 
            : <Form setToken={setToken} />
            }
        </div>
    );

};

export default Authentication;