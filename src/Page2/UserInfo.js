import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const user_data = [
    {id:1, name:'rahul',age: 23},
    {id:2, name:'rohit',age:25},
    {id:3, name:'sachin',age:25},
    {id:4, name:'sahil',age:25},
    {id:5, name:'virat',age:25},
    
]
function UserInfo() {
    let [user,setUser] = useState('');

    let {id} = useParams();
    useEffect(()=> {
       let arr = user_data.filter((user)=> user.id == id);
       setUser(arr[0]);
    },[])
  return (
    <div>
        <h1>User :{id} </h1>
        {
            user && 
            <div>
                <h2>name : {user.name}</h2>
                <h2>age :{user.age}</h2>
            </div>
        }
    </div>
  )
}

export default UserInfo