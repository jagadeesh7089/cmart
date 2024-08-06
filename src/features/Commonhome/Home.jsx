import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { logout } from "../User/Loginslice";

function Home(){
    var dispatch=useDispatch()
   const {isloggedin}= useSelector(state=>state.auth)
   const navigate=useNavigate()
//    console.log(isloggedin)
   function loggedout(){
    dispatch(logout())
    navigate('/')
   }            
 
    return (
        <div >
            <div className="d-flex">
            <h1>Home component</h1> 
             {
                isloggedin?<button onClick={()=>{loggedout()}}>Logout</button>:<button onClick={()=>{navigate('/login')}}> Login</button>
             }
            </div>
            <div>
               <Outlet></Outlet>
            </div>
            
            
        </div>
    )
}
export default Home