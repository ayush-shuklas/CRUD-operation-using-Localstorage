

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './index.css';
import './App.css';

const Read = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        axios.get("https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush")
            .then((res) => {
                setDatas(res.data);
            });
    }

    const handleDelete = (id) => {
        axios.delete(`https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/${id}`)
            .then(() => {
                getData();
            });
    }

    return (
        <div className="container">
            <h1>API CALL</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {datas.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>Remove</button>
                                <Link to={{ pathname: "/update", state: { id: item.id, name: item.Name, age: item.Age } }}>
                                    <button>Update</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Read;
