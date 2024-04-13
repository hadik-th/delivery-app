
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [query,setQuery]=useState("");
    const navigate=useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        if(!query)return;
        navigate(`/order/${query}`);
        setQuery("");

    }
    //form is used so as to submit search query with hitting 'enter' and id is submitted to url.this id will be used in api search 'getOrder(id) which recieves the order id.

  return (
  
    <form onSubmit={handleSubmit}>
    <input value={query} onChange={(e)=>{
  setQuery(e.target.value)
  }} type='text' placeholder='Search for order here'/>

    </form>
  
  )
}
