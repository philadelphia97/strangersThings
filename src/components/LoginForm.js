import React, {useState} from "react";
import ReactDOM from "react-dom";
import Token from "./Token";

const Form = ( {setToken} ) => {
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        
    };

    return(
    <div id='conainer'>
        <form onSubmit={submitHandler}>  
            <label>Username:</label>
            <input type = "text" 
            placeholder="Enter your username!"
            value={firstName}
            onChange={(event => setFirstName(event.target.value))}
            ></input>
            <label>Password:</label>
            <input type = "password" 
            placeholder="Enter your password!"
            value={password}
            onChange={(event => setPassword(event.target.value))}
            ></input>
            <label>Password Confirmation:</label>
            <input type = "password" 
            placeholder="Confirm your password!"
            value={Confirmpassword}
            onChange={(event => setConfirmPassword(event.target.value))}
            ></input>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
};

// ReactDOM.render(
//     <Form />,
//     document.getElementById('app'),
//   );

export default Form;