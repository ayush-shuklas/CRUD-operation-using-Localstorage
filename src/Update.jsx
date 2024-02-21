import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Update = () => {
    const [alldata, setalldata] = useState(
        {
            id:"",
            name:"",
            age:"",
        }
    )

    const navigate = useNavigate()

    useEffect(() => {
        setalldata(
            {
                id : localStorage.getItem("id"),
                name : localStorage.getItem("name"),
                age : localStorage.getItem("age")
            })
    }, [])

    const clickonchange = (e) =>{
        const {name,value} =  e.target;

        setalldata((prevdata) =>({
            ...prevdata,[name]:value
        }))

    }

    const onHandleSubmit =(e) =>{
        e.preventDefault()
        axios
        .put(`https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/${alldata.id}`,{
            Name:alldata.name,
            Age:alldata.age
        })
        .then(() =>{
            navigate('/Read')
        }

        )
    }
    
  return (
    <div>
        <form 
        onSubmit={onHandleSubmit}
        >
                <input
                    type="text"
                    placeholder="Your name"
                    name="Name"
                    value={alldata.name}
                    onChange={clickonchange}
                    // onChange={(e) => setname(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Your Age"
                    name="age"
                    value={alldata.age}
                    onChange={clickonchange}
                    // onChange={(e) => setage(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
    </div>
  )
}

export default Update
