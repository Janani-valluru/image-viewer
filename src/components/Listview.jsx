import React, { useState,useEffect } from 'react';
import { useGlobalContext } from '../context';


const Listview = () => {
    const [search,setSearch]=useState('');
    const {data}=useGlobalContext();
  return (
    
    <>
     <form action="" className="form">
        <input type="text" name="" id="" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} />
    </form>
    {data.filter(i=>{
        return search.toLowerCase() ==='' ? i : i.first_name.toLowerCase().includes(search) ? i : i.first_name.toUpperCase().includes(search) ? i : i.first_name.includes(search)
    }).map((i)=>{
        return <>
        <div className="container">
       
            <div className="content">
                <img src={i.avatar} alt="" className="avatar" />
                <span className="id">{i.id}</span>
               
            </div>
            <h2 className='center'>{i.first_name}</h2>
        </div>
        
        </>
    })}
    </>
  )
}

export default Listview