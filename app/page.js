"use client"
import { useEffect, useReducer } from 'react'
import Loading from './loading'
import { redirect } from 'next/navigation'




export const userReducer=function(state={},action){
  switch(action.type)
  {

    case "LOADING":
      return {...state,loading:true}
    case "AUTHENTICATED":
      return {...state,isAuth:true,loading:false}
      case "PENDING":
        return {...state,isAuth:false,loading:true}  
    case "FAIL" :
      return {...state,isAuth:false,loading:false}
    default:
      return state;  
  }

}


function handleLogin(dispatch)
{

  dispatch({type:"PENDING"})
  setTimeout(()=>{
    dispatch({type:"AUTHENTICATED"})
    localStorage.setItem("authenticated",true)
  },3000);
}


function initialData()
{
  return false
}

export default function Home({children,href}) {

  const [state,dispatch]=useReducer(userReducer,{isAuth:initialData(),loading:true})
 

  useEffect(()=>{
    dispatch({type:"LOADING"})
    if(localStorage?.getItem("authenticated"))
    {

        //localStorage.removeItem("authenticated")
          dispatch({type:"AUTHENTICATED"})

        redirect("dashboard?src=redirect")
      

       
     
    }
  
  },[state.loading])


  if(state.loading)
    return <Loading/>

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      {JSON.stringify(state)}
       <button onClick={()=>handleLogin(dispatch)}>LOG ME IN</button>
    </main>
  )
}
