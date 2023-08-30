import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [state, setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
    }
    getData();
    document.title = `(${state}) employee online`;
  }, [state]);

  return (
    <div style={{ margin: "30px" }}>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => setState(state + 1)}>Click Me {state}</button>
      </div>

      <table
        style={{
          background: "gray",
          margin: "30px",
          justifyContent: "space-between",
        }}
      >
        <tr>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Conatct Number</th>
          <th>Age</th>
          <th>DOB</th>
          <th>Salary</th>
          <th>Address</th>
        </tr>
        {data.map((element, index) => {
          return (
            <tr key={index}>
              <td>{element.id}</td>
              <td>{element.firstName}</td>
              <td>{element.lastName}</td>
              <td>{element.email}</td>
              <td>{element.contactNumber}</td>
              <td>{element.age}</td>
              <td>{element.dob}</td>
              <td>{element.salary}</td>
              <td>{element.address}</td>{" "}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default App;
