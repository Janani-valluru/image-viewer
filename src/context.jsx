import React, {useContext,useReducer,useEffect} from "react";
import reducer from "./reducer";
let api="https://reqres.in/api/users?page=2 "
const initialState={
    data:[]
}
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const fetchApiData=async (url)=>{
        try{
           const res= await fetch(url); 
           const data= await res.json();
           console.log(data);
           dispatch({
            type:"GET_DATA",
            payload:{
                data:data.data,
            }
           })
           
        }
        catch(e){
            console.log(e);
        }
    };
    useEffect(()=>{
        fetchApiData(api);
    },[])
        return ( <AppContext.Provider value = { {...state} }> { children } 
            </AppContext.Provider>);
        };
const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider,useGlobalContext};