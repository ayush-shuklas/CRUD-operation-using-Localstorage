import logo from "./logo.svg";
import "./App.css";
import { useState,useEffect } from "react";

function App() {
  const [myidcount, setMyIdCount] = useState(0);
  const [mydata, setMyData] = useState({
    fname: "",
    lname: "",
    age: "",
  });

  const [alldata, setAllData] = useState([]);
  const [edit, setedit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    setMyIdCount((prevIdCount) => prevIdCount + 1);

    const newdata = {
      id: myidcount,
      fname: mydata.fname,
      lname: mydata.lname,
      age: mydata.age,
    };

    setAllData([...alldata, newdata]);
    setMyData({ fname: "", lname: "", age: "" });
  };

  const handleEdit = (ids) =>{
    const newData = alldata.find((data) => data.id === ids);
    console.log(newData)
  }

  const handleRemove = (id) => {
    const newData = alldata.filter((data) => data.id !== id);
    setAllData(newData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
        <div className="input-row">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="fname"
            value={mydata.fname}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lname"
            value={mydata.lname}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Age"
            onChange={handleChange}
            name="age"
            value={mydata.age}
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <ul className="data-list">
        {alldata.map((data) => (
          <li key={data.id} className="data-item">
            <h3>
              ID: {data.id}, Name: {data.fname} {data.lname}, Age: {data.age}
              <button onClick={() => handleRemove(data.id)} className="remove-btn">Remove</button>
              <button onClick={() => handleEdit(data.id)} className="remove-btn">Edit</button>
            </h3>
          </li>
        ))}
      </ul>
      {
        edit && 
          (<h1> Edit clicked</h1>)
        
      }
    </div>
  );
}

export default App;
