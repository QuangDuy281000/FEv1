import  {useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import userService from "../service/user.service";
import { useHistory } from "react-router-dom";
import HeaderUser from "./HeaderUser";
function TestCPN() {
    const [employees,setEmployees] = useState([])
    const history = useHistory()

    useEffect(()=>{
        const config={
            headers:{
                Authorization:localStorage.getItem('token')
            }
        }
        userService.getAll(config)
        .then(res=>{
            console.log("data", res.data)
            setEmployees(res.data)
        })
        .catch(err=>{
            console.log('loi', err)
        })
    },[])


    const logout =()=>{
        localStorage.setItem('token','')
        history.push('/')
    }

    return (
     <>
     <HeaderUser></HeaderUser>
        <div>
            <h1 >Xin chao:{localStorage.getItem('username')}</h1>
            <ul >
                {employees.map(employee=>
                    <li key={employee.id}>{employee.username},{employee.password}</li>
                )}
            </ul>
            <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>
        </div>
     </>
    );
  }
export default TestCPN