
import { useFormik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../services/auth"
import { useDispatch } from "react-redux"
import { setloggedin } from "./Loginslice"
function Login(){
     const [loginfn] =useLoginMutation()
    var dispatch=useDispatch();
    const navigate=useNavigate();
    const loginform=useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:(values)=>{
           loginfn(values).then(res=>{
            console.log(res.data)
            dispatch(setloggedin())
            res.data.msg==='loginsuccess'?navigate("/dashboard"):navigate('/')
           })
            

        }


    })
    return(
        <div>
            <form onSubmit={loginform.handleSubmit}>
               <input type="text" placeholder="username"{...loginform.getFieldProps("username")} /> <br/><br/>
               <input type="text" placeholder="password" {...loginform.getFieldProps("password")}/> <br/><br/>
               <button>Submit</button>
            </form>
              

        </div>
    )
}
export default Login