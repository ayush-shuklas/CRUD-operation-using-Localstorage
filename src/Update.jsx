import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './App.css';

const Update = () => {
    const [alldata, setalldata] = useState({
        id: "",
        Name: "",
        Age: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        setalldata({
            id: localStorage.getItem("id"),
            Name: localStorage.getItem("name"),
            Age: localStorage.getItem("age")
        });
    }, []);

    const clickonchange = (e) => {
        const { name, value } = e.target;

        setalldata((prevdata) => ({
            ...prevdata, [name]: value
        }));
    };

    const onHandleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/${alldata.id}`, {
                Name: alldata.Name,
                Age: alldata.Age
            })
            .then(() => {
                navigate('/Read');
            });
    };

    return (
        <div className="update-container">
            <form onSubmit={onHandleSubmit} className="update-form">
                <input
                    type="text"
                    placeholder="Your name"
                    name="Name"
                    value={alldata.Name}
                    onChange={clickonchange}
                    className="update-input"
                />
                <input
                    type="text"
                    placeholder="Your Age"
                    name="Age"
                    value={alldata.Age}
                    onChange={clickonchange}
                    className="update-input"
                />
                <button type="submit" className="update-btn" style={{backgroundColor:"red"}}>Update</button>
            </form>
        </div>
    );
};

export default Update;
