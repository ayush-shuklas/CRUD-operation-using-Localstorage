
// import React, { useState ,useEffect} from 'react';
// import axios from 'axios';
// import { Navigate, useNavigate } from 'react-router-dom';
// import Read from './Read';

// const Create = () => {
//     const [data, setData] = useState([]);
//     const [alldata, setalldatas] = useState({
//         Name:"",
//         Age:""
//     })
//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');
//     const history = useNavigate();

//     const onHandleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post(
//                 'https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush',
//                 {
//                     Name: name,
//                     Age: age
//                 },
//                 {
//                     headers: {
//                         'Access-Control-Allow-Origin': '*'
//                     }
//                 }
//             );
//             console.log('Response:', response.data);

//             // Assuming you want to update the data state after successful submission
//             // setData([...data, response.data]);
//             setAge("");
//             setName("")
//         } catch (error) {
//             console.error('Error:', error);
//         }
//         history('/Read');
//     };

//     return (
//         <div>
//             <form onSubmit={onHandleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Your name"
//                     name="Name"
//                     onChange={(e) => setName(e.target.value)}
//                     value={name}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Your Age"
//                     name="age"
//                     onChange={(e) => setAge(e.target.value)}
//                     value={age}
//                 />
//                 <button type="submit">Submit</button>
//             </form>

            
//         </div>
//     );
// };

// export default Create;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'; 

const Create = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Age: ''
    });
    const navigate = useNavigate();

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const onHandleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush',
                formData
            );
            console.log('Response:', response.data);

            // Reset form data after successful submission
            setFormData({
                Name: '',
                Age: ''
            });
            // Navigate to Read component after submission
            navigate('/Read');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="create-container">
            <h2>Create New Entry</h2>
            <form onSubmit={onHandleSubmit} className="create-form">
                <input
                    type="text"
                    placeholder="Your name"
                    name="Name"
                    onChange={onHandleChange}
                    value={formData.Name}
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder="Your Age"
                    name="Age"
                    onChange={onHandleChange}
                    value={formData.Age}
                    className="input-field"
                />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Create;
