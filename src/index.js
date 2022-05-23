import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import {
  Authentication,
  DisplayAllPosts,
  Form,
  Token,
} from './components';

const App = () => {

const [posts, setPosts] = useState(false);
const [form, setForm] = useState(true);
const [gotToken, setGotToken] = useState(true);



    return (
      <div className="app">
      <DisplayAllPosts />
      {/* <Form /> */}
      <Authentication />
      <Token /> 
      
    </div>
    )
  
  



  };

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

export default App