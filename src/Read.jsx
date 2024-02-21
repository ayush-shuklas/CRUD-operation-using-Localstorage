import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {

    const [datas, setdatas] = useState([])

    function getData() {
        axios
          .get("https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush")
          .then((res) => {
            setdatas(res.data);
          });
      }

      useEffect(() => {
        getData();
      }, []);

      const selocalstorage =(id,name,age) =>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("age",age);
      }



      const handledelete = (ids) =>{
        axios
          .delete(`https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/${ids}`)
          .then(() => {
            getData();
          });

      }

  return (
    <div>
        <h1>API CALL</h1>
            {datas.map((item, index) => (
                <h1 key={index}>
                    {item.id} {item.Name} {item.Age}
                    <button onClick={() => handledelete(item.id)}>Remove</button>
                    <Link to="/update" >
                      <button onClick={() => selocalstorage(item.id,item.Name,item.Age)}>Update</button>
                    </Link>
                </h1>
            ))}
    </div>
  )
}

export default Read
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const Read = () => {
//     const [datas, setDatas] = useState([]);

//     useEffect(() => {
//         getData();
//     }, []);

//     function getData() {
//         axios.get("https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush")
//             .then((res) => {
//                 setDatas(res.data);
//             });
//     }

//     const handleDelete = (id) => {
//         axios.delete(`https://65d4a2233f1ab8c634359ec6.mockapi.io/ayush/ayush/${id}`)
//             .then(() => {
//                 getData();
//             });
//     }

//     return (
//         <div>
//             <h1>API CALL</h1>
//             {datas.map((item, index) => (
//                 <div key={index}>
//                     <h1>
//                         {item.id} {item.Name} {item.Age}
//                     </h1>
//                     <button onClick={() => handleDelete(item.id)}>Remove</button>
//                     <Link to={{ pathname: "/update", state: { id: item.id, name: item.Name, age: item.Age } }}>
//                         <button>Update</button>
//                     </Link>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Read;
