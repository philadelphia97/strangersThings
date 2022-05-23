import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

const baseURL = 'https://strangers-things.herokuapp.com/api/2202-ftb-et-web-pt/posts';

const DisplayAllPosts = () => {
    const [list,setList] = useState([])
      useEffect(() => {
        //console.log("Hello world")
    fetch(baseURL)
      .then(res => res.json())
      .then((result) => {
        console.log(result)
      
      setList(result.data.posts) 
    console.log(list)
    
    })}, [])
  
      return (
        <div >
          {list.map( item => (
            <li key={item._id}> 
            <li> author: {item.author.username} </li>
            <li>description: {item.description} </li>
            <li>location: {item.location} </li>
            <li>price: {item.price} </li>
            <li>title: {item.title} </li>
            {/* willDeliver: {item.willDeliver} <br/> */}
            </li>
          ))}
        </div>
      )
    }
    
  
  
  
  
  
  // ReactDOM.render(
  //   <DisplayAllPosts />,
  //   document.getElementById('app'),
  // );
  export default DisplayAllPosts;